<template>
    <div class="columns">
        <div class="column is-4">
            <VSelect id="ra-filter-bookings-request-date" label="Data do Pedido:" size="is-small is-fullwidth">
                <select id="ra-filter-bookings-request-date" v-model="filterDate">
                    <option value="">Qualquer altura</option>
                    <option :value="dates.today">Hoje</option>
                    <option :value="dates.lastTwoDays">Últimos 2 dias</option>
                    <option :value="dates.lastWeek">Última semana</option>
                    <option :value="dates.lastMonth">Último mês</option>
                    <option :value="dates.lastYear">Último ano</option>
                </select>
            </VSelect>
            <VSelect id="ra-filter-bookings-status" label="Estado:" size="is-small is-fullwidth">
                <select id="ra-filter-bookings-status" v-model="filterStatus">
                    <option value="">Todos os estados</option>
                    <option value="0">Pendentes</option>
                    <option value="1">Confirmadas</option>
                    <option value="2">Confirmadas Com Mesa</option>
                    <option value="3">Pagas</option>
                    <option value="4">A Reembolsar</option>
                    <option value="5">Reembolsadas</option>
                </select>
            </VSelect>
        </div>
        <div class="column is-4">
            <VInput id="ra-filter-bookings-people-min" label="Desde X Pessoas:" size="is-small" type="number" min="1" max="40"
            @input-changed="updatePeopleMin"/>
            <VInput id="ra-filter-bookings-people-max" label="Até X Pessoas:" size="is-small" type="number" min="1" max="40"
                @input-changed="updatePeopleMax"/>
        </div>
        <div class="column is-4">
            <VInput id="ra-filter-bookings-price-min" label="Desde X Preço:" size="is-small" type="number" min="0"                  max="Infinity" @input-changed="updatePriceMin"/>
            <VInput id="ra-filter-bookings-price-max" label="Até X Preço:" size="is-small" type="number" min="0" max="Infinity"
                @input-changed="updatePriceMax"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import VSelect from "@/components/ui/VSelect.vue";
import VInput from "@/components/ui/VInput.vue";

export default {
    name: "FilterBookings",
    components: {
        VSelect,
        VInput
    },
    data() {
        return {
            dates: {
                today: new Date().setHours(0,0,0,0),    // colocar horas na meia noite para a verificação afetar só o dia
                lastTwoDays: (() => {
                    const today = new Date();
                    return new Date(today.setDate( today.getDate() - 1 )).setHours(0,0,0,0);
                })(),
                lastWeek: (() => {
                    const today = new Date();
                    return new Date(today.setDate( today.getDate() - 7 )).setHours(0,0,0,0);
                })(),
                lastMonth: (() => {
                    const today = new Date();
                    return new Date(today.setDate( today.getDate() - 30 )).setHours(0,0,0,0);
                })(),
                lastYear: (() => {
                    const today = new Date();
                    return new Date(today.setDate( today.getDate() - 365 )).setHours(0,0,0,0);
                })()
            },
            filterDate: "",
            filterStatus: "",
            filterPeopleMin: "0",
            filterPeopleMax: "40",
            filterPriceMin: "0",
            filterPriceMax: "Infinity"
        }
    },
    methods: {
        updatePeopleMin(people) {
            this.filterPeopleMin = people;
        },
        updatePeopleMax(people) {
            this.filterPeopleMax = people;
        },
        updatePriceMin(price) {
            this.filterPriceMin = price;
        },
        updatePriceMax(price) {
            this.filterPriceMax = price;
        }
    },
    computed: {
        ...mapGetters("bookings", ["allBookings"]),

        getBookings() {
            const filteredDates = (() => {
                if (this.filterDate === "") return this.allBookings;

                return this.allBookings.filter(booking => {
                    const dayOfBooking = booking.dateRequest.split(", ")[0];
                    if (Date.parse(dayOfBooking) >= this.filterDate) return dayOfBooking;
                    return false;
                });
            })();

            const filteredStatus = (this.filterStatus === "")
                                    ? filteredDates
                                    : filteredDates.filter(booking => booking.sID === parseInt(this.filterStatus));

            const filteredPeopleMin = (this.filterPeopleMin === "1")
                                    ? filteredStatus
                                    : filteredStatus.filter(booking => booking.numOfPeople >= parseInt(this.filterPeopleMin));
            
            const filteredPeopleMax = (this.filterPeopleMax === "40")
                                    ? filteredPeopleMin
                                    : filteredPeopleMin.filter(booking => booking.numOfPeople <= parseInt(this.filterPeopleMax));
            
            const filteredPriceMin = (this.filterPriceMin === "0")
                                    ? filteredPeopleMax
                                    : filteredPeopleMax.filter(booking => booking.totalPrice >= parseFloat(this.filterPriceMin));
            
            const filteredPriceMax = (this.filterPriceMax === "Infinity")
                                    ? filteredPriceMin
                                    : filteredPriceMin.filter(booking => booking.totalPrice <= parseFloat(this.filterPriceMax));

            return filteredPriceMax;
        }
    },
    watch: {
        getBookings() {
            this.$emit("filter-applied", this.getBookings);
        }
    }
}
</script>