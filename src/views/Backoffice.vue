<template>
  <div class="backoffice">
    <TheNav />
    <div class="container is-fluid is-relative">
        <div class="columns">
            <div class="column is-3">
                <div class="box">
                    <aside class="menu">
                        <p class="menu-label">
                            Geral
                        </p>
                        <ul class="menu-list">
                            <li>
                            <a class="is-active">Reservas</a>
                            <ul>
                                <li><a>Lista</a></li>
                                <li><a>Atribuir mesa</a></li>
                            </ul>
                            </li>
                            <li>
                            <a class="is-active">Aplicação</a>
                            <ul>
                                <li><a>Pratos e Ementas</a></li>
                                <li><a>Galeria</a></li>
                                <li><a>FAQs</a></li>
                                <li><a>Patrocinadores</a></li>
                                <li><a>Endereço</a></li>
                                <li><a>Contactos</a></li>
                            </ul>
                            </li>
                        </ul>
                        <p class="menu-label">
                            Administração
                        </p>
                        <ul class="menu-list">
                            <li><a>Utilizadores</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
            <div class="column is-9">
                <div class="box">
                    <Draggable />
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
  </div>

</template>

<script>
import TheNav from "@/components/TheNav.vue";
import Draggable from "@/components/Draggable.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Backoffice",
  components: {
    TheNav,
    Draggable,
    TheFooter
  }
};
</script>

<style src="@/scss/backoffice.scss" lang="scss" scoped></style>