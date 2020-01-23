export default {
    namespaced: true,
    
    state: {
        allFaqs: [
            {
                question: "Em que dias está o restaurante aberto?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            } , {
                question: "Não pertenço ao IPP. Posso efetuar uma reserva?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            } , {
                question: "Servem jantares?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            } , {
                question: "Emitem fatura?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    },
    mutations: {
        ADD_FAQ(state, payload) {
            state.allFaqs.push({
                payload
            });
        },
        REMOVE_FAQ(state, payload) {
            state.allFaqs = state.allFaqs.filter(faq => faq.question !== payload);
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("faqs-state", JSON.stringify(state.allFaqs));
        },
        GET_FROM_LOCALSTORAGE(state) {
            localStorage.getItem("faqs-state")
            ? state.allFaqs = JSON.parse(localStorage.getItem("faqs-state"))
            : localStorage.setItem("faqs-state", JSON.stringify(state.allFaqs));
        }
    },
    getters: {
        allFaqs: state => state.allFaqs
    }
}