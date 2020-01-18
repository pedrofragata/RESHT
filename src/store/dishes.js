export default {
    namespaced: true,
    
    state: {
        dishes: [
            // objetos para efeitos de teste
            {
                dID: 0,
                name: "Amêijoas à Bulhão Pato",
                basePrice: 9.00,
                catID: 1,
                subCatID: null,
                desc: "Esta é uma descrição de um prato.",
                image: "",
                dateAvailableSince: "17/01/2020 00:00",
                dateAvailableUpTo: "18/01/2020 23:59",
                discountList: []
            },
            {
                dID: 1,
                name: "Lombos de Robalo Cozidos com Legumes e Puré de Batata",
                basePrice: 7.00,
                catID: 1,
                subCatID: null,
                desc: "Esta é outra descrição de um prato.",
                image: "",
                dateAvailableSince: "17/01/2020 00:00",
                dateAvailableUpTo: "18/01/2020 23:59",
                discountList: []
            },
            {
                dID: 2,
                name: "Pudim de Azeite e Mel",
                basePrice: 2.50,
                catID: 2,
                subCatID: null,
                desc: "Mais algum texto.",
                image: "",
                dateAvailableSince: "17/01/2020 00:00",
                dateAvailableUpTo: "18/01/2020 23:59",
                discountList: []
            },
            {
                dID: 3,
                name: "Creme de Cogumelos e Castanha Assada",
                basePrice: 1.50,
                catID: 0,
                subCatID: null,
                desc: "Prato de entrada.",
                image: "",
                dateAvailableSince: "17/01/2020 00:00",
                dateAvailableUpTo: "18/01/2020 23:59",
                discountList: []
            },
            {
                dID: 4,
                name: "Lombo de Porco ao Molho de Maracujá, Batata Assada e Brócolos ao Vapor",
                basePrice: 8.50,
                catID: 1,
                subCatID: null,
                desc: "Festa do Maracujá",
                image: "",
                dateAvailableSince: "19/01/2020 00:00",
                dateAvailableUpTo: "19/01/2020 23:59",
                discountList: []
            }
        ]
    },
    mutations: {
        ADD_DISH(state, payload) {
            state.bookings.push({
                dID: payload.dID,
                name: payload.name,
                basePrice: payload.basePrice,
                catID: payload.catID,
                subCatID: payload.subCatID ? payload.subCatID : null,
                desc: payload.desc,
                image: payload.image,
                dateAvailableSince: payload.availableSince,
                dateAvailableUpTo: payload.availableUpTo,
                discountList: []
            });
        },
        REMOVE_DISH(state, payload) {
            state.dishes = state.dishes.filter(dish => dish.dID !== payload);
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("dishes-state", JSON.stringify(state.dishes));
        },
        GET_FROM_LOCALSTORAGE(state) {
            localStorage.getItem("dishes-state")
            ? state.dishes = JSON.parse(localStorage.getItem("dishes-state"))
            : localStorage.setItem("dishes-state", JSON.stringify(state.dishes));
        }
    },
    getters: {
        allDishes: state => state.dishes,
        dishNameByID: (state) => (dID) => { return state.dishes.find(dish => dish.dID === dID).name },
        dishDescByID: (state) => (dID) => { return state.dishes.find(dish => dish.dID === dID).desc },
    }
}