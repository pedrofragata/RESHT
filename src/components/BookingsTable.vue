<template>
    <div class="table-container">
        <table class="table ra-stripes is-narrow is-hoverable is-fullwidth has-text-grey-lighter">
            <thead>
                <tr>
                    <th></th>
                    <th>Data do Pedido</th>
                    <th>Utilizador</th>
                    <th>Data Abertura</th>
                    <th>Data Fecho</th>
                    <th>Hora Chegada</th>
                    <th>Pessoas</th>
                    <th>Preço</th>
                    <th>Atribuir mesa</th>
                    <th>Rejeitar</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th></th>
                    <th>Data do Pedido</th>
                    <th>Utilizador</th>
                    <th>Data Abertura</th>
                    <th>Data Fecho</th>
                    <th>Hora Chegada</th>
                    <th>Pessoas</th>
                    <th>Preço</th>
                    <th>Atribuir mesa</th>
                    <th>Rejeitar</th>
                </tr>
            </tfoot>
            <tbody>
                <template v-for="(booking, bIdx) in displayedBookings">
                    <tr :key="booking.bID + '-first-row'"
                        class="first-row"
                        :class="{'ra-striped' : bIdx % 2 !== 0}">
                        <td class="is-relative">
                            <abbr :title="statusDescByID(booking.sID)">
                                <div class="ra-status-indicator"
                                    :class="statusColorByID(booking.sID)">
                                </div>
                            </abbr>
                        </td>
                        <td>{{ booking.dateRequest }}</td>
                        <td>{{ fullNameByID(booking.uID) }}</td>
                        <td>{{ booking.dateOpening }}</td>
                        <td>{{ booking.dateClosing }}</td>
                        <td>{{ booking.dateArrival }}</td>
                        <td class="has-text-centered">{{ booking.numOfPeople }}</td>
                        <td class="has-text-centered">{{ `${booking.totalPrice} €` }}</td>
                        <td class="has-text-centered">
                            <button class="button is-small ra-table-icon"></button>
                        </td>
                        <td class="has-text-centered">
                            <button class="button is-small ra-reject-icon"></button>
                        </td>
                    </tr>
                    <tr v-for="(dish, dIdx) in booking.dishes" :key="dIdx + '-dish' + booking.bID"
                        :class="{'ra-striped' : bIdx % 2 !== 0}">
                        <td v-if="!dIdx" class="has-text-weight-semibold">Pratos:</td>
                        <td v-else></td>
                        <td colspan="9">{{ `${dish.quantity}x ${dishNameByID(dish.dID)}` }}</td>
                    </tr>
                    <tr :key="booking.bID + '-last-row'"
                        :class="{'ra-striped' : bIdx % 2 !== 0}">
                        <td class="has-text-weight-semibold">Obs:</td>
                        <td colspan="9">{{ booking.message }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "BookingsTable",
    props: {
        displayedBookings: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters("users", ["fullNameByID"]),
        ...mapGetters("bookings", ["statusDescByID", "statusColorByID"]),
        ...mapGetters("dishes", ["dishNameByID"])
    }
}
</script>

<style src="@/scss/bookings-table.scss" lang="scss" scoped></style>