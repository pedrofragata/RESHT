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
                        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Data do Pedido</th>
                                    <th>Utilizador</th>
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
                                    <th><abbr title="Hora de chegada">HC</abbr></th>
                                    <th><abbr title="Número de pessoas">Nº</abbr></th>
                                    <th>Pratos</th>
                                    <th>Preço</th>
                                    <th><abbr title="Observações">Obs.</abbr></th>
                                    <th>Estado</th>
                                    <th>Atribuir mesa</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Data do Pedido</th>
                                    <th>Utilizador</th>
                                    <th>Data Abertura</th>
                                    <th>Data Fecho</th>
                                    <th><abbr title="Hora de chegada">HC</abbr></th>
                                    <th><abbr title="Número de pessoas">Nº</abbr></th>
                                    <th>Pratos</th>
                                    <th>Preço</th>
                                    <th><abbr title="Observações">Obs.</abbr></th>
                                    <th>Estado</th>
                                    <th>Atribuir mesa</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <th>2020-01-11 23:57</th>
                                    <td>Nome Apelido</td>
                                    <td>2020-01-15 12:30</td>
                                    <td>2020-01-15 13:15</td>
                                    <td>13:10</td>
                                    <td>1</td>
                                    <td><ul><li>Lombo de Porco ao Molho de Maracujá x1</li></ul></td>
                                    <td>6.40€</td>
                                    <td>Lorem ipsum dolor sit amet</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <th>2020-01-11 23:56</th>
                                    <td>Nome Apelidão</td>
                                    <td>2020-01-14 12:30</td>
                                    <td>2020-01-14 13:15</td>
                                    <td>12:45</td>
                                    <td>4</td>
                                    <td><ul><li>Magret de Pato 1x</li><li>Arroz de Pica no Chão x3</li></ul></td>
                                    <td>25.60€</td>
                                    <td></td>
                                    <td>Aceite</td>
                                </tr>
                                <tr>
                                    <th>2020-01-11 23:55</th>
                                    <td>Nom Apelido</td>
                                    <td>2020-01-14 19:30</td>
                                    <td>2020-01-14 21:00</td>
                                    <td>19:40</td>
                                    <td>3</td>
                                    <td><ul><li>Amêijoas à Bulhão Pato x3</li></ul></td>
                                    <td>19.20€</td>
                                    <td>Lorem ipsum dolor sit amet</td>
                                    <td>Mesa Atribuída</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 class="subtitle is-5 has-text-grey-light">Atribuir mesa</h5>
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