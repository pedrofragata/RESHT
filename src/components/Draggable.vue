<template>
  <div class="ra-draggable-artboard">
    <div v-for="table in tables" :key="table.id">
      <div :id="table.id" class="draggable has-background-grey-light has-text-grey-dark">
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
          categoria: 1,
          screenX: 0,
          screenY: 0
        },
        {
          id: 1,
          desc: "Mesa 2",
          categoria: 2,
          screenX: 0,
          screenY: 0
        },
        {
          id: 2,
          desc: "Mesa 3",
          categoria: 2,
          screenX: 0,
          screenY: 0
        },
        {
          id: 3,
          desc: "Mesa 4",
          categoria: 3,
          screenX: 0,
          screenY: 0
        }
      ]
    };
  },
  methods: {
    initInteract(selector) {
      interact(selector).draggable({
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
    }
  },
  mounted() {
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach(draggable => this.initInteract(draggable));
  }
};
</script>

<style src="@/scss/draggable.scss" lang="scss"></style>