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
                    <h4 class="title is-4 is-spaced has-text-grey-light">Reservas</h4>
                    <h5 class="subtitle is-5 has-text-grey-light">Lista</h5>
                    <div class="table-container">
                        <table class="table is-striped is-narrow is-hoverable is-fullwidth has-text-grey-lighter">
                            <thead>
                                <tr>
                                    <th>Estado</th>
                                    <th>Data do Pedido</th>
                                    <th>Utilizador</th>
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
                                    <th><abbr title="Hora de chegada">HC</abbr></th>
                                    <th><abbr title="Número de pessoas">Nº</abbr></th>
                                    <th>Pratos</th>
                                    <th>Preço</th>
                                    <th><abbr title="Observações">Obs.</abbr></th>
                                    <th>Atribuir mesa</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Estado</th>
                                    <th>Data do Pedido</th>
                                    <th>Utilizador</th>
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
                                    <th><abbr title="Hora de chegada">HC</abbr></th>
                                    <th><abbr title="Número de pessoas">Nº</abbr></th>
                                    <th>Pratos</th>
                                    <th>Preço</th>
                                    <th><abbr title="Observações">Obs.</abbr></th>
                                    <th>Atribuir mesa</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr v-for="booking in allBookings" :key="booking.bID">
                                    <td :class="'ra-status-green'">
                                        {{ (booking.status === "pending-approval") ? true : false}}
                                    </td>
                                    <th 
                                        class="has-text-grey-lighter has-text-weight-normal">
                                        {{ booking.dateRequest }}
                                    </th>
                                    <td>{{ booking.uID }}</td>
                                    <td>{{ booking.dateOpening }}</td>
                                    <td>{{ booking.dateClosing }}</td>
                                    <td>{{ booking.dateArrival }}</td>
                                    <td>{{ booking.numOfPeople }}</td>
                                    <td>
                                        <ul>
                                            <li v-for="dish in booking.dishes" :key="dish.id">{{ dish.requestDate }}</li>
                                        </ul>
                                    </td>
                                    <td>{{ booking.totalPrice }}</td>
                                    <td>{{ booking.message }}</td>
                                    <td>
                                        <button class="button">
                                            <span class="icon">
                                                <img src="" />
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 class="subtitle is-5 has-text-grey-light">Atribuir mesa</h5>
                    <TablesLayout />
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
  </div>

</template>

<script>
import { mapGetters } from "vuex";

import TheNav from "@/components/TheNav.vue";
import TablesLayout from "@/components/TablesLayout.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Backoffice",
  components: {
    TheNav,
    TablesLayout,
    TheFooter
  },
  computed: {
      ...mapGetters("users", ["allUsers", "fullNameByID"]),
      ...mapGetters("bookings", ["allBookings", "allTables"])
  }
};
</script>

<style src="@/scss/backoffice.scss" lang="scss" scoped></style>