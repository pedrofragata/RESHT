<template>
  <div class="ra-draggable-artboard">
    <div v-for="table in tables" :key="table.id">
      <div :id="table.id" class="ra-draggable has-background-grey-light has-text-grey-dark">
        {{table.desc}}
      </div>
    </div>
  </div>
</template>

<script>
import interact from "interactjs";

export default {
  name: "Draggable",
  data() {
    return {
      tables: [
        {
          id: 0,
          desc: "Mesa 1",
          category: 1,
          screenX: 100,
          screenY: 60,
          width: 100,
          height: 100,
          capacity: 4,  // a ser implementado
          people: 0
        },
        {
          id: 1,
          desc: "Mesa 2",
          category: 2,
          screenX: 300,
          screenY: 60,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 2,
          desc: "Mesa 3",
          category: 2,
          screenX: 500,
          screenY: 60,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 3,
          desc: "Mesa 4",
          category: 3,
          screenX: 700,
          screenY: 60,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 4,
          desc: "Mesa 5",
          category: 3,
          screenX: 100,
          screenY: 240,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 5,
          desc: "Mesa 6",
          category: 3,
          screenX: 300,
          screenY: 240,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 6,
          desc: "Mesa 7",
          category: 3,
          screenX: 500,
          screenY: 240,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 7,
          desc: "Mesa 8",
          category: 3,
          screenX: 700,
          screenY: 240,
          width: 100,
          height: 100,
          capacity: 4,
          people: 0
        },
        {
          id: 8,
          desc: "Mesa 9",
          category: 3,
          screenX: 900,
          screenY: 100,
          width: 100,
          height: 200,
          capacity: 8,
          people: 0
        }
      ],
      numOfGuests: 3,
      guestCounter: 0
    };
  },
  methods: {
    initInteract(selector) {
      const data = this.$data; // palavra reservada "this" retorna undefined quando invocada dentro das props do interact
                               // à exceção de onmove e onend da prop draggable
      interact(selector)
        .draggable({
          inertia: true, // animação de aceleração e desaceleração da forma se a ação de arrasto for interrompida em movimento
          restrict: {
            restriction: ".ra-draggable-artboard",  // contentor limite das formas
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 } // manter formas totalmente dentro do contentor
          },
          autoScroll: false,  // não permite scroll enquanto arrasta a forma para um dos extremos direito ou inferior da página 
                              // (permitia navegar para fora da página)
          // possivelmente desnecessário em conjunto com o restrict.elementRect

          onmove: this.dragMoveListener,
          onend: this.onDragEnd
        })
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },  // redimensionar de todos os lados

          modifiers: [
            interact.modifiers.restrictEdges({
              outer: ".ra-draggable-artboard"   // manter dentro do contentor
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
          let x = (parseFloat(target.getAttribute("data-x")) || (data.tables[tableIndex].screenX)),
              y = (parseFloat(target.getAttribute("data-y")) || (data.tables[tableIndex].screenY));

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
    },
    dragMoveListener(event) {
      const target = event.target;
      const tableIndex = target.id; // o índice do objeto no array é igual ao id do seu elemento no html (pelo ciclo v-for)

      // obter valores de x e y iniciais pelos atributos data-x e data-y (em string)
      // os atributos não existem até serem criados após o primeiro movimento
      // nesse caso, como fallback, associar o x e o y aos do objeto
      // somar o delta entre a posição inicial e a posição atual, à posição inicial do rato
      const x =
              (parseFloat(target.getAttribute("data-x")) || (this.tables[tableIndex].screenX)) +
              event.dx,
            y =
              (parseFloat(target.getAttribute("data-y")) || (this.tables[tableIndex].screenY)) +
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
      this.tables[tableIndex].screenX = target.getBoundingClientRect().left;
      this.tables[tableIndex].screenY = target.getBoundingClientRect().top;
    },
    onClick(event) {
      const target = event.target;

      if (this.guestCounter < this.numOfGuests && !target.classList.contains("ra-selected")) {
        target.classList.add("ra-selected");
        this.tables[target.id].people++;
        this.guestCounter++;
      } else if (target.classList.contains("ra-selected")) {
        target.classList.remove("ra-selected");
        this.tables[target.id].people--;
        this.guestCounter--;
      } else {
        alert(" As pessoas foram todas colocadas ");
      }

      event.preventDefault();
    }
  },
  mounted() {
    const draggables = document.querySelectorAll(".ra-draggable");
    for(let i = 0; i < draggables.length; i++) {
      // inicializar interactjs no elemento
      this.initInteract(draggables[i]);

      const dStyle = draggables[i].style;
      // colocar na posição definida no objeto
      dStyle.webkitTransform = dStyle.transform = `
        translate(${this.tables[i].screenX}px, ${this.tables[i].screenY}px)
      `;
      // outros estilos
      dStyle.width = `${this.tables[i].width}px`;
      dStyle.height = `${this.tables[i].height}px`;
      dStyle.lineHeight = dStyle.height;   // centrar texto na vertical
      dStyle.boxShadow = (this.tables[draggables[i].id].category === 1) ? "0 0 5px 2px #ff0000"
                        : (this.tables[draggables[i].id].category === 2) ? "0 0 5px 2px #00ff00"
                        : "0 0 5px 2px #0000ff";
    }

    window.addEventListener("click", this.onClick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.onClick);
  }
};
</script>

<style src="@/scss/draggable.scss" lang="scss"></style>