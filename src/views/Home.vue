<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <Nav />
      </div>
    </section>
    <div class="container is-fluid">
      <SectionHeader title="Prato do dia" />
      <div class="columns">
        <div class="column is-4 is-offset-2">
          <h4
            class="title is-4 has-text-weight-bold has-text-white"
          >Amêijoas à Bulhão Pato</h4>
          <p
            class="is-size-6 has-text-grey-light ra-dish-desc"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.</p> 
          <div class="has-text-centered ra-weekday-wrapper">
            <Weekday letter="S" day="9" />
            <Weekday letter="T" day="10" isOpen="true" isToday="true" />
            <Weekday letter="Q" day="11" isOpen="true" />
            <Weekday letter="Q" day="12" isOpen="true" />
            <Weekday letter="S" day="13" />
          </div>
        </div>
        <div class="column is-4">
          <img class="ra-dish-image" src="@/assets/ameijoas-a-bulhao-pato.jpg" />
        </div>
      </div>
      <SectionHeader title="Reservar" />
      <div class="columns">
        <div class="column is-9 is-offset-1">
          <form>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-day">Horário</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input id="ra-form-day" class="input" type="date" />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input id="ra-form-hour" class="input" type="time" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-arrival">Hora de chegada</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input id="ra-form-arrival" class="input" type="time" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-people">Nº de pessoas</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input id="ra-form-people" class="input" type="number" value="1" min="1" />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-dish">Prato 1</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="select">
                      <select id="ra-form-dish">
                        <option value>Selecione o prato</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-health">Obs. de saúde</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      id="ra-form-health"
                      class="textarea"
                      rows="1"
                      placeholder="Dieta, alergénios, ..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label has-text-grey-lighter" for="ra-form-message">Outras observações</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      id="ra-form-message"
                      class="textarea"
                      rows="2"
                      placeholder="Espaço sossegado, junto à janela,  ..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label"></div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      class="button has-background-grey-lighter has-text-grey-dark is-family-secondary is-size-5"
                      type="submit"
                      value="Enviar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SectionHeader title="Galeria" />
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <Carousel />
        </div>
      </div>
      <SectionHeader title="FAQs" />
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <Faq question="Em que dias está o restaurante aberto?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Faq question="Não pertenço ao IPP. Posso efetuar uma reserva?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Faq question="Servem jantares?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Faq question="Emitem fatura?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div>
    </div>
    <Footer />
  </div>

  <!-- <div class="home"> -->
  <!-- REGISTO-->
  <!-- <label for="username">username</label>
     <input id="username" type="text" v-model="newUsername">
     <br>
     <label for="password">password</label>
     <input id="password" type="password" v-model="newPassword">
     <br>
     <input type="button" value="REGISTAR" @click="addUser">
     <br>
  <br>-->
  <!-- LOGIN -->
  <!-- <label for="Lusername">username</label>
     <input id="Lusername" type="text" v-model="Lusername">
     <br>
     <label for="Lpassword">password</label>
     <input id="Lpassword" type="password" v-model="Lpassword">
     <br>
     <input type="button" value="LOGIN" @click="login">
     <br>
  <br>-->
  <!-- LOGOUT -->
  <!-- <input v-if="isLoggedStatus" type="button" value="LOGOUT" @click="logout"> -->

  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Weekday from "@/components/Weekday.vue";
import Carousel from "@/components/Carousel.vue";
import Faq from "@/components/Faq.vue";
import Footer from "@/components/Footer.vue";

// class User {
//   constructor(
//     username,
//     password
//     ){
//     this.username=username,
//     this.password=password
//   }}

export default {
  name: "home",
  components: {
    Nav,
    SectionHeader,
    Weekday,
    Carousel,
    Faq,
    Footer
  }
  // data(){
  //   return {
  //     newUsername:"",
  //     newPassword:"",
  //     Lusername:"",
  //     Lpassword:"",
  //     loggedUser: this.$store.getters.isLogged,
  //     isLoggedStatus:false
  //   }

  // },
  // methods: {
  //   addUser(){
  //     this.$store.commit("ADD_USER", new User(this.newUsername, this.newPassword))
  //   },
  //   login(){
  //     this.$store.commit("LOGIN",(this.Lusername, this.Lpassword))
  //     this.isLoggedStatus=true
  //   },
  //   logout(){
  //     this.$store.commit("LOGOUT")
  //     this.isLoggedStatus=true
  //   }
  // },
};
</script>

<style src="@/scss/home.scss" lang="scss"></style>
