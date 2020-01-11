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
        inertia: true,
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        autoScroll: false,

        onmove: this.dragMoveListener,
        onend: this.onDragEnd
      });
    },
    dragMoveListener(event) {
      const target = event.target;
      const tableIndex = target.id;
      const x =
              (parseFloat(target.getAttribute("data-x")) || (this.tables[tableIndex].screenX)) +
              event.dx,
            y =
              (parseFloat(target.getAttribute("data-y")) || (this.tables[tableIndex].screenY)) +
              event.dy;
      target.style.webkitTransform = target.style.transform =
        `translate(${x}px, ${y}px)`;

      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    onDragEnd(event) {
      const target = event.target;
      const tableIndex = target.id;
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