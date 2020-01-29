<template>
  <div class="home">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-head">
        <TheNav />
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-spaced has-text-white-bis">Bem vindo</h1>
          <h3
            class="subtitle has-text-white-bis"
          >Os estudantes de Gestão e Administração Hoteleira, convidam-no a saborear as receitas especialmente criadas para si. Venha conhecer-nos.</h3>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <Divider id="ra-bookmark-todays-special" title="Prato do dia" />
      <div class="columns">
        <div class="column is-4 is-offset-2">
          <div>
            <h4
              class="title is-size-5-mobile is-size-4-desktop has-text-weight-medium has-text-white"
            >{{ todaysSpecial.name }}</h4>
            <p
              class="is-family-sans-serif has-text-weight-light is-size-6 has-text-grey-light ra-dish-desc"
            > {{ todaysSpecial.desc }}</p>
          </div>
          <figure class="is-hidden-tablet image is-1by1">
            <img class="ra-dish-image-mobile" :src="todaysSpecial.image" />
          </figure>
          <div class="has-text-centered ra-weekday-wrapper">
            <Weekday letter="S" day="9" />
            <Weekday letter="T" day="10" isOpen="true" isToday="true" />
            <Weekday letter="Q" day="11" isOpen="true" />
            <Weekday letter="Q" day="12" isOpen="true" />
            <Weekday letter="S" day="13" />
          </div>
        </div>
        <div class="column is-4 is-hidden-mobile">
          <figure class="image is-1by1">
            <img class="ra-dish-image" :src="todaysSpecial.image" />
          </figure>
        </div>
      </div>
      <Divider id="ra-bookmark-" title="Reservar" />
      <div class="columns">
        <div class="column is-9 is-offset-1">
          <!--FORM RESERVAS-->
          <form v-on:submit.prevent="onSubmit">
            <VSplit id="ra-form-day" label="Horário" modifier="has-icons-left">
              <template slot="first-field">
                <input
                  id="ra-form-day"
                  class="input"
                  type="date"
                  required="required"
                  v-model="inputDateOpening"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </template>
              <template slot="second-field">
                <!--<input id="ra-form-hour" class="input" type="time" required="required" v-model="inputTimeOpening" />
                <span class="icon is-small is-left">
                  <i class="fas fa-clock"></i>
                </span>-->
                <VSelect id="ra-form-timeInterval" modifier="has-icons-left" size="is-fullwidth">
                  <select required="required" id="ra-form-timeInterval" v-model="inputTimeOpening">
                    <option value>Selecione o horário</option>
                    <option
                      v-for="timeInterval in allTimeIntervals"
                      :key="timeInterval.ID + '-allTimeIntervals'"
                      :value="timeInterval.string"
                    >{{ timeInterval.string }}</option>
                  </select>
                  <div class="icon is-small is-left">
                    <i class="fas fa-clock"></i>
                  </div>
                </VSelect>
              </template>
            </VSplit>
            <VInput
              id="ra-form-arrival"
              label="Hora de chegada"
              required
              modifier="has-icons-left"
              type="time"
              @input-changed="updateInputTimeArrival"
            >
              <span class="icon is-small is-left">
                <i class="fas fa-user-clock"></i>
              </span>
            </VInput>
            <VInput
              id="ra-form-people"
              label="Nº de pessoas"
              required
              modifier="has-icons-left"
              type="number"
              min="1"
              @input-changed="updateNumOfPeople"
            >
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </VInput>
            <!--<VSelect
              id="ra-form-dish"
              v-for="(dish, idx) in dishes"
              :key="idx + '-dishes'"
              modifier="has-icons-left"
              size="is-fullwidth"
              :label="`Prato ${dishes.indexOf(dish)+1} :`"
            >
              <select required="required" :id="`ra-form-dish${dishes.indexOf(dish)+1}`">
                <option value>Selecione o prato</option>
                <option
                  v-for="dish in allDishes"
                  :key="dish.dID + '-allDishes'"
                  :value="dish.dID"
                >{{ dish.name }}</option>-->
            <VSelect id="ra-form-dish" v-for="(dish, idx) in dishes" :key="idx + '-dishes'" modifier="has-icons-left"
                    size="is-fullwidth" :label="`Prato ${dishes.indexOf(dish)+1} :`">
              <select id="ra-form-dish">
                <option value="">Selecione o prato</option>
                <option v-for="dish in availableDishes" :key="dish.dID + '-allDishes'"
                      :value="dish.dID">{{ dish.name }}</option>
              </select>
              <div class="icon is-small is-left">
                <i class="fas fa-utensils"></i>
              </div>
            </VSelect>
            <VTextarea
              id="ra-form-message"
              placeholder="Escreva aqui a sua mensagem"
              label="Observações:"
              @input-changed="updateInputOtherInfo"
            />
            <VSubmit value="Enviar" size="is-size-6 is-fullwidth" />
          </form>
        </div>
      </div>
      <Divider id="ra-bookmark-gallery" title="Galeria" />
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <Carousel />
        </div>
      </div>
      <Divider id="ra-bookmark-faqs" title="FAQs" />
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <Faq
            question="Em que dias está o restaurante aberto?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Faq
            question="Não pertenço ao IPP. Posso efetuar uma reserva?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Faq
            question="Servem jantares?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Faq
            question="Emitem fatura?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TheNav from "@/components/layout/TheNav.vue";
import Divider from "@/components/ui/Divider.vue";
import Weekday from "@/components/Weekday.vue";
import VInput from "@/components/ui/VInput.vue";
import VSelect from "@/components/ui/VSelect.vue";
import VSplit from "@/components/ui/VSplit.vue";
import VTextarea from "@/components/ui/VTextarea.vue";
import VSubmit from "@/components/ui/VSubmit.vue";
import Carousel from "@/components/Carousel.vue";
import Faq from "@/components/Faq.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import Swal from "../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../node_modules/sweetalert2/src/sweetalert2.scss";

export default {
  name: "Home",
  components: {
    TheNav,
    Divider,
    Weekday,
    VInput,
    VSelect,
    VSplit,
    VTextarea,
    VSubmit,
    Carousel,
    Faq,
    TheFooter
  },
  data: function() {
    return {
      inputDateOpening: "",
      inputTimeOpening: "",
      inputTimeArrival: "",
      inputNumOfPeople: 1,
      inputDishes: [],
      inputOtherInfo: ""
    };
  },
  methods: {
    onSubmit: function() {
      //INCOMPLETO FALTA VERIFICAR SE A HORA DE CHEGADA SE ENQUADARA NO HORARIO SELECIONADO
      // let newReservation = [
      // ]

      let lowerTime = this.inputTimeOpening.split("-")[0];

      let upperTime = this.inputTimeOpening.split("-")[1];

      // let inputTimeArrivalToDate = new Date(
      //   0,
      //   0,
      //   0,
      //   this.inputTimeArrival.split(":")[0],
      //   this.inputTimeArrival.split(":")[1]
      // );

      if (
        this.inputTimeArrival >= lowerTime &&
        this.inputTimeArrival <= upperTime
      ) {
        console.log("yay");
        //console.log(this.inputDateOpening)
        let newArrayDishes= []
        for(let i = 0; i< this.dishes.length; i++){
          let newId = document.getElementById("ra-form-dish"+(i+1)).options[document.getElementById("ra-form-dish"+(i+1)).selectedIndex].value
          newArrayDishes.push(this.allDishes.filter(dish => dish.dID == newId)[0])
        }
        
        console.log(newArrayDishes)

        // this.$store.commit("bookings/NEW_BOOKING", {
        //   bID: bookingsNewId + 1,
        //   uID: loginStatus.loggedUser.uID,
        //   sID: 0,
        //   dateRequest: `${new Date().toLocaleDateString()} ${new Date().toLocalTimeString()}`,
        //   dateOpening: this.inputDateOpening,
        //   timeOpening: this.inputTimeOpening,
        //   timeArrival: this.inputTimeArrival,
        //   numOfPeople: this.inputNumOfPeople,
        //   tables: [],
        //   dishes: newArrayDishes, // guardar objetos completos para perseverar caso o prato seja removido
        //   basePrice: payload.basePrice,
        //   discIDs: [],
        //   totalPrice: payload.basePrice,
        //   message: payload.message
        // });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text:
            "Hora de chegada não se encontra dentro do horário especificado."
        });
      }

      console.log(lowerTime + " " + upperTime + " " + this.inputTimeArrival);
    },
    updateInputTimeArrival(time) {
      this.inputTimeArrival = time;
    },
    updateNumOfPeople(num) {
      this.inputNumOfPeople = num;
    },
    updateInputOtherInfo(str) {
      this.inputOtherInfo = str;
    }
  },
  computed: {
    ...mapGetters("dishes", ["allDishes"]),
    ...mapGetters("bookings", ["allTimeIntervals"]),
    ...mapGetters("bookings", ["bookingsNewId"]),
    ...mapGetters("users", ["loginStatus"]),
    ...mapGetters("dishes", ["availableDishes", "lastAvailableDish"]),

    dishes: function() {
      let arrayDishes = [];
      for (let i = 0; i < this.inputNumOfPeople; i++) {
        let newDish = {};
        arrayDishes.push(newDish);
      }
      return arrayDishes;
    },
    todaysSpecial() {
      if (this.availableDishes.length) return this.availableDishes[0];
      return this.lastAvailableDish;
    }
  },
  created() {
    this.$store.commit("dishes/GET_FROM_LOCALSTORAGE");
  }
};
</script>

<style src="@/scss/home.scss" lang="scss"></style>

