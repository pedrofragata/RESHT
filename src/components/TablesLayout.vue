<template>
  <div>
    <small class="has-text-white">Há {{numOfClients}} clientes.</small>
    <div class="ra-interactables-toolbar has-background-grey-light has-text-grey-darker has-text-weight-semibold">
      <p>Barra de ferramentas:</p>
      <button @click.prevent="selectTool('add')" class="button ra-toolbar-button"
              :class="{'ra-plus': selectedTool === 'add'}">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-plus"></i>
        </span>
      </button>
      <button @click.prevent="selectTool('remove')" class="button ra-toolbar-button"
              :class="{'ra-minus': selectedTool === 'remove'}">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-minus"></i>
        </span>
      </button>
    </div>
    <div class="ra-interactables-screen">
      <div v-for="table in allTables" :key="table.tID">
        <div :id="table.tID" class="ra-interactable has-text-weight-semibold"
        :class="{'ra-table-filled': isTableFilled(table), 'ra-table-full': isTableFull(table)}">
          {{table.people}} / {{table.capacity}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import interact from "interactjs";

export default {
  name: "TablesLayout",
  data() {
    return {
      numOfClients: 10,
      clientCounter: 0,
      tools: [
        {
          action: "add",
          isActive: true
        } , {
          action: "remove",
          isActive: false
        }
      ]
    };
  },
  methods: {
    initInteract(selector) {
      // const data = this.$data; // palavra reservada "this" retorna undefined quando invocada dentro das props do interact
                               // à exceção de onmove e onend da prop draggable
      interact(selector)
        .draggable({
          inertia: true, // animação de aceleração e desaceleração da forma se a ação de arrasto for interrompida em movimento
          restrict: {
            restriction: ".ra-interactables-screen",  // contentor limite das formas
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 } // manter formas totalmente dentro do contentor
          },
          autoScroll: false,  // não permite scroll enquanto arrasta a forma para um dos extremos direito ou inferior da página 
                              // (permitia navegar para fora da página)
          // possivelmente desnecessário em conjunto com o restrict.elementRect

          onmove: this.dragMoveListener,
          onend: this.onDragEnd
        })

        /*
          Funcionalidade de redimensionar em pausa
          

        // .resizable({
        //   edges: { left: true, right: true, bottom: true, top: true },  // redimensionar de todos os lados

        //   modifiers: [
        //     interact.modifiers.restrictEdges({
        //       outer: ".ra-interactables-screen"   // manter dentro do contentor
        //     }),
        //     interact.modifiers.restrictSize({
        //       min: { width: 100, height: 100 }   // tamanho mínimo
        //     })
        //   ],

        //   inertia: true
        // })
        // .on("resizemove", function (event) {
        //   const target = event.target;
        //   const tableIndex = target.id;
        //   let x = (parseFloat(target.getAttribute("data-x")) || (this.tables[tableIndex].screenX)),
        //       y = (parseFloat(target.getAttribute("data-y")) || (this.tables[tableIndex].screenY));

        //   target.style.width = `${event.rect.width}px`;
        //   target.style.height = `${event.rect.height}px`;
        //   target.style.lineHeight = target.style.height;

        //   // topo e lado esquerdo
        //   x += event.deltaRect.left;
        //   y += event.deltaRect.top;

        //   target.style.webkitTransform = target.style.transform =
        //     `translate(${x}px, ${y}px)`;

        //   target.setAttribute('data-x', x);
        //   target.setAttribute('data-y', y);
        // });


        */
    },
    dragMoveListener(event) {
      const target = event.target;
      const tableIndex = target.id; // o índice do objeto no array é igual ao id do seu elemento no html (pelo ciclo v-for)

      // obter valores de x e y iniciais pelos atributos data-x e data-y (em string)
      // os atributos não existem até serem criados após o primeiro movimento
      // nesse caso, como fallback, associar o x e o y aos do objeto
      // somar o delta entre a posição inicial e a posição atual, à posição inicial do rato
      const x =
              (parseFloat(target.getAttribute("data-x")) || (this.allTables[tableIndex].screenX)) +
              event.dx,
            y =
              (parseFloat(target.getAttribute("data-y")) || (this.allTables[tableIndex].screenY)) +
              event.dy;

      // colocar a forma na nova posição por CSS
      target.style.webkitTransform = target.style.transform =
        `translate(${x}px, ${y}px)`;

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
      const clickedTable = this.allTables[parseInt(target.id)];

      if (this.selectedTool === "add"
      && this.clientCounter < this.numOfClients
      && clickedTable.people < clickedTable.capacity)
      {
        clickedTable.people++;
        this.clientCounter++;
      }
      else if (this.selectedTool === "remove" && clickedTable.people) {
        clickedTable.people--;
        this.clientCounter--;
      }

      // a alterar alertas
      else if (this.clientCounter === this.numOfClients && this.selectedTool === "add") {
        alert(" As pessoas foram todas colocadas nas mesas ");
      }
      else if (clickedTable.people === clickedTable.capacity && this.selectedTool === "add") {
        alert(" Não cabe mais ninguém na mesa ");
      }
      else if (!clickedTable.people && this.selectedTool === "remove") {
        alert(" A mesa já se encontra vazia ");
      }

      event.preventDefault();
    },
    selectTool(action) {
      this.tools.forEach(tool => tool.isActive = (tool.action === action));
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
      style.lineHeight = style.height;   // centrar texto na vertical
      interactable.classList.add("ra-table-empty");
    }
  },
  computed: {
    ...mapGetters("bookings", ["allTables"]),
    selectedTool() {
      return this.tools.filter(tool => tool.isActive)[0].action;
    }
  },
  mounted() {
    const interactables = document.querySelectorAll(".ra-interactable");
    for(let i = 0; i < interactables.length; i++) {
      // inicializar interactjs no elemento
      this.initInteract(interactables[i]);
      // aplicar estilos
      this.onLoadStyles(interactables[i], this.allTables[i]);

      interactables[i].addEventListener("click", this.onInteractableClick);
    }
  },
  beforeDestroy() {
    document.querySelectorAll(".ra-interactable").forEach(element => {
      element.removeEventListener("click", this.onInteractableClick)
    });
  }
};
</script>

<style src="@/scss/tables-layout.scss" lang="scss"></style>