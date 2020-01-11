<template>
  <div class="ra-draggable-artboard">
    <div id="draggable1" class=".draggable">
        Draggable
    </div>
    <div id="draggable2" class=".draggable">
      Draggable
    </div>
  </div>
</template>

<script>
import interact from "interactjs";

export default {
  name: "Draggable",
  data() {
    return {
      screenX: 0,
      screenY: 0
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
        autoScroll: true,

        onmove: this.dragMoveListener,
        onend: this.onDragEnd
      });
    },
    dragMoveListener(event) {
      var target = event.target,
        x =
          (parseFloat(target.getAttribute("data-x")) || this.screenX) +
          event.dx,
        y =
          (parseFloat(target.getAttribute("data-y")) || this.screenY) +
          event.dy;

      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    onDragEnd(event) {
      const target = event.target;
      this.screenX = target.getBoundingClientRect().left;
      this.screenY = target.getBoundingClientRect().top;
    }
  },
  mounted() {
    const draggable1 = document.querySelector("#draggable1");
    const draggable2 = document.querySelector("#draggable2");
    this.initInteract(draggable1);
    this.initInteract(draggable2);
  }
};
</script>

<style src="@/scss/draggable.scss" lang="scss"></style>