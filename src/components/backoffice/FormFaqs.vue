<template>
  <form @submit.prevent="addFaq">
    <VSelect id="ra-faq-from-existing" size="is-fullwidth" label="Faq existente:">
      <select id="ra-faq-from-existing" v-model="selectedFaq">
        <option value>Selecione uma faq</option>
        <option v-for="(faq, idx) in allFaqs" :key="idx">{{ faq.question }}</option>
      </select>
    </VSelect>
    <div class="field is-horizontal" style="margin: 0.5em 0 1.5em 0;">
      <div class="field-label"></div>
      <div class="field-body has-text-grey-lighter">
        <p class="is-size-7">
          Selecione uma faq existente acima para carregar a pergunta e a resposta
          ou preencha de raíz os campos abaixo para criar uma nova.
        </p>
      </div>
    </div>
    <VInput
      id="ra-faq-question"
      type="text"
      label="Pergunta:"
      :value="selectedFaq.question"
      @input-changed="updateFaqName"
    />
    <VTextarea id="ra-faq-answer" label="Resposta:" @input-changed="updateFaqAnswer" />
    <VSubmit value="Submeter" size="is-size-6 is-fullwidth" />
  </form>
</template>

<script>
import { mapGetters } from "vuex";

import VInput from "@/components/ui/VInput.vue";
import VSelect from "@/components/ui/VSelect.vue";
import VTextarea from "@/components/ui/VTextarea.vue";
import VSubmit from "@/components/ui/VSubmit.vue";
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../node_modules/sweetalert2/src/sweetalert2.scss";
export default {
  name: "FormFaqs",
  components: {
    VInput,
    VSelect,
    VTextarea,
    VSubmit
  },
  data() {
    return {
      selectedFaq: "",
      faqQuestion: "",
      faqAnswer: ""
    };
  },
  methods: {
    addFaq() {
      Swal.fire({
        title: "Submeter FAQ",
        text: "Pretende submeter FAQ?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(result => {
        if (result.value) {
          this.$store.commit("faqs/ADD_FAQ", {
            question: this.faqQuestion,
            answer: this.faqAnswer
          });
          this.$store.commit("faqs/SAVE_TO_LOCALSTORAGE");
        }
      });
    },
    updateFaqName(question) {
      this.faqQuestion = question;
    },
    updateFaqAnswer(answer) {
      this.faqAnswer = answer;
    }
  },
  computed: {
    ...mapGetters("faqs", ["allFaqs"])
  },
  watch: {
    selectedFaq() {
      this.faqQuestion = this.selectedFaq.question;
      this.faqAnswer = this.selectedFaq.answer;
    }
  },
  created() {
    this.$store.commit("faqs/GET_FROM_LOCALSTORAGE");
  }
};
</script>