<template>
  <div class="restaurant-layout">
    <div class="ra-interactables-toolbar">
      <p>Barra de ferramentas:</p>
      <button
        @click.prevent="selectTool('add')"
        class="button ra-tool-plus"
        :class="{'ra-tool-plus-active': selectedTool === 'add'}"
      ></button>
      <button
        @click.prevent="selectTool('remove')"
        class="button ra-tool-minus"
        :class="{'ra-tool-minus-active': selectedTool === 'remove'}"
      ></button>
      <button type="button" class="confirmButton is-family-secondary" @click="saveAllTables">Gravar</button>
      <!-- <button @click.prevent="selectTool('move')" class="button ra-tool-move"
              :class="{'ra-tool-move-active': selectedTool === 'move'}">
      </button>-->
    </div>
    <div class="ra-interactables-screen">
      <div v-for="table in allTables" :key="table.tID + '-interactable'">
        <div
          :id="table.tID"
          class="ra-interactable"
          :class="{'ra-table-filled': isTableFilled(table),
                'ra-table-full': isTableFull(table),
                'ra-can-move': selectedTool === 'move'}"
        >{{table.people}} / {{table.capacity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import interact from "interactjs";

export default {
  name: "RestaurantLayout",
  data() {
    return {
      numOfClients: 0,
      clientCounter: 0,
      clickedTable: "",
      clickedTablesArr: [],
      currentBooking: "",
      tools: [
        {
          action: "add",
          isActive: true
        },
        {
          action: "remove",
          isActive: false
        },
        {
          action: "move",
          isActive: false
        }
      ]
    };
  },
  methods: {
    saveAllTables() {
      if (this.currentBookingPpl == 0 ) {
        let newArray = [];
        for (let i = 0; i < this.clickedTablesArr.length; i++) {
          let count = 0;
          for (let j = 0; j < this.clickedTablesArr.length; j++) {
            if (this.clickedTablesArr[j] == this.clickedTablesArr[i]) {
              count++;
            }
          }
          let newTable = {
            tID: this.clickedTablesArr[i],
            people: count
          };
          newArray.push(newTable);
        }

        this.$store.commit("bookings/ADD_TABLE_TO_BOOKING", {
          bID: this.currentBooking.bID,
          tables: newArray
        });
        this.$store.commit("bookings/ASSIGN_BOOKING", this.activeBooking.bID);
        this.$store.commit("bookings/SAVE_TO_LOCALSTORAGE");
      } else {
        console.log(this.clientCounter, "CLIENT COUNTER FINAL ELSE");
        alert("NÃ NÃ");
      }
    },

    initInteract(selector) {
      // const data = this.$data; // palavra reservada "this" retorna undefined quando invocada dentro das props do interact
      // à exceção de onmove e onend da prop draggable
      interact(selector)
        .draggable({
          inertia: true, // animação de aceleração e desaceleração da forma se a ação de arrasto for interrompida em movimento
          restrict: {
            restriction: ".ra-interactables-screen", // contentor limite das formas
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 } // manter formas totalmente dentro do contentor
          },
          autoScroll: false, // não permite scroll enquanto arrasta a forma para um dos extremos direito ou inferior da página
          // (permitia navegar para fora da página)
          // possivelmente desnecessário em conjunto com o restrict.elementRect

          onmove: this.dragMoveListener,
          onend: this.onDragEnd
        })
        .styleCursor(false);

      /*
          Funcionalidade de redimensionar em pausa
          

          .resizable({
            edges: { left: true, right: true, bottom: true, top: true },  // redimensionar de todos os lados

            modifiers: [
              interact.modifiers.restrictEdges({
                outer: ".ra-interactables-screen"   // manter dentro do contentor
              }),
              interact.modifiers.restrictSize({
                min: { width: 100, height: 100 }   // tamanho mínimo
              })
            ],

            inertia: true
          })
          .on("resizemove", function (event) {
            const target = event.target;
            const tableIndex = target.id;
            let x = (parseFloat(target.getAttribute("data-x")) || (this.tables[tableIndex].screenX)),
                y = (parseFloat(target.getAttribute("data-y")) || (this.tables[tableIndex].screenY));

            target.style.width = `${event.rect.width}px`;
            target.style.height = `${event.rect.height}px`;
            target.style.lineHeight = target.style.height;

            // topo e lado esquerdo
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
              `translate(${x}px, ${y}px)`;

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          });


        */
    },
    dragMoveListener(event) {
      if (this.selectedTool !== "move") return;

      const target = event.target;
      const tableIndex = target.id; // o índice do objeto no array é igual ao id do seu elemento no html (pelo ciclo v-for)

      // obter valores de x e y iniciais pelos atributos data-x e data-y (em string)
      // os atributos não existem até serem criados após o primeiro movimento
      // nesse caso, como fallback, associar o x e o y aos do objeto
      // somar o delta entre a posição inicial e a posição atual, à posição inicial do rato
      const x =
          (parseFloat(target.getAttribute("data-x")) ||
            this.allTables[tableIndex].screenX) + event.dx,
        y =
          (parseFloat(target.getAttribute("data-y")) ||
            this.allTables[tableIndex].screenY) + event.dy;

      // colocar a forma na nova posição por CSS
      target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

      // atualizar atributos do x e do y para a nova posição
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    onDragEnd(event) {
      const target = event.target;
      const tableIndex = target.id;
      // atualizar os x e y no objeto
      this.allTables[tableIndex].screenX = target.getBoundingClientRect().left;
      this.allTables[tableIndex].screenY = target.getBoundingClientRect().top;
    },
    onInteractableClick(event) {
      const target = event.target;
      this.clickedTable = this.allTables[parseInt(target.id)];
      console.log(this.clickedTable, "CLICKED TABLE");

      if (
        this.selectedTool === "add" &&
        this.clientCounter < this.numOfClients &&
        this.clickedTable.people < this.clickedTable.capacity
      ) {
        this.clickedTable.people += 1;
        this.clientCounter++;

        this.currentBookingPpl--;

        this.clickedTablesArr.push(this.clickedTable.tID);

        console.log(this.clickedTablesArr, "ARRAY TABLES PREOCUPADO");
      } else if (this.selectedTool === "remove" && this.clickedTable.people) {
        if (this.clickedTablesArr.length) {
          console.log(this.clickedTablesArr.tID, "id tableeeeeee");
          console.log(
            this.clickedTablesArr.includes(this.clickedTablesArr.tID),
            "TRYYYYYYY"
          );
          if (this.clickedTablesArr.includes(this.clickedTable.tID)) {
            console.log("ENTROU 2222222");
            this.clickedTable.people--;
            this.clientCounter--;
            this.currentBookingPpl++;

            let index = this.clickedTablesArr.findIndex(
              tbl => tbl == this.clickedTable.tID
            );
            console.log(index, "INDEEEEEEEEEX");
            this.clickedTablesArr.splice(index, 1);
          }

          console.log("ENTROU");
        }
      }

      // a alterar alertas
      else if (
        this.clientCounter === this.numOfClients &&
        this.selectedTool === "add"
      ) {
        alert(" As pessoas foram todas colocadas nas mesas ");
      } else if (
        this.clickedTable.people === this.clickedTable.capacity &&
        this.selectedTool === "add"
      ) {
        alert(" Não cabe mais ninguém na mesa ");
      } else if (!this.clickedTable.people && this.selectedTool === "remove") {
        alert(" A mesa já se encontra vazia ");
      }

      event.preventDefault();
    },
    selectTool(action) {
      this.tools.forEach(tool => (tool.isActive = tool.action === action));
    },
    isTableFilled(table) {
      return table.people && table.people < table.capacity;
    },
    isTableFull(table) {
      return table.people === table.capacity;
    },
    onLoadStyles(interactable, table) {
      const style = interactable.style;

      // colocar na posição definida no objeto
      interactable.style.webkitTransform = interactable.style.transform = `
        translate(${table.screenX}px, ${table.screenY}px)
      `;

      style.width = `${table.width}px`;
      style.height = `${table.height}px`;
      style.lineHeight = style.height; // centrar texto na vertical
      interactable.classList.add("ra-table-empty");
    }
  },
  computed: {
    ...mapGetters("bookings", ["allBookings"]),
    ...mapGetters("bookings", ["allTables"]),
    ...mapGetters("bookings", ["activeBooking"]),
    selectedTool() {
      return this.tools.filter(tool => tool.isActive)[0].action;
    },
    concurrentBookings() {
      return this.allBookings
        .filter(
          booking => booking.dateOpening == this.activeBooking.dateOpening
        )
        .filter(
          booking => booking.timeOpening == this.activeBooking.timeOpening
        );
    }
  },

  created() {
    this.currentBooking = this.activeBooking;
    this.currentBookingPpl = this.activeBooking.numOfPeople
    this.numOfClients = this.currentBooking.numOfPeople;
    console.log(this.currentBooking);

    for (let i = 0; i < this.concurrentBookings.length; i++) {
      console.log(this.concurrentBookings[i].tables.length, "CAOOOOOOO")
        for (let j = 0; j < this.concurrentBookings[i].tables.length; j++) {
          console.log(j,"JOTAAAAAAA")
         console.log(this.allTables.filter(table => {
            if (table.tID == this.concurrentBookings[i].tables[j].tID) {
              return true;
            } else return false;
          })[0].people = this.concurrentBookings[i].tables[j].people, "ESTOURO") 
        }
      
    }
    console.log("Tables onCreated: ", this.allTables);
  },
  updated() {
    //console.log(this.allTables);
    console.log(this.currentBooking, "currentBooking!!!!!!!!!");
    console.log(this.concurrentBookings, "TODAS AS BOOKINGS DE");
  },
  mounted() {
    const interactables = document.querySelectorAll(".ra-interactable");
    for (let i = 0; i < interactables.length; i++) {
      // inicializar interactjs no elemento
      this.initInteract(interactables[i]);
      // aplicar estilos
      this.onLoadStyles(interactables[i], this.allTables[i]);

      interactables[i].addEventListener("click", this.onInteractableClick);
    }
  },
  beforeDestroy() {
    document.querySelectorAll(".ra-interactable").forEach(element => {
      element.removeEventListener("click", this.onInteractableClick);
    });
  }
};
</script>

<style src="@/scss/restaurant-layout.scss" lang="scss" scoped></style>