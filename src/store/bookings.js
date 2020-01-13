export default {
    state: {
        bookings: [],
        tables: [],
        dishes: []
    },
    mutations: {
        NEW_BOOKING(state, payload) {
            const newBooking = {
                bID: payload.bID,
                uID: payload.uID,
                status: "pending-approval",
                dateOpening: payload.dateOpening,
                dateClosing: payload.dateClosing,
                dateArrival: payload.dateArrival,
                numOfPeople: payload.numOfPeople,
                tables: payload.tables,
                dishes: payload.dishes,
                totalPrice: 0,
                message: payload.message
            }
            state.bookings.push(newBooking);
        },
        ADD_TABLE(state, payload) {
            const newTable = {
                tID: payload.tID,
                desc: payload.desc,
                category: payload.category,
                capacity: payload.capacity,
                filled: 0,
                screenX: 0,
                screenY: 0,
                tWidth: 100,
                tHeight: 100
            }
            state.tables.push(newTable);
        },
        REMOVE_TABLE(state, payload) {
            state.tables = state.tables.filter(table => table.tID !== payload);
        },
        ADD_DISH(state, payload) {
            const newDish = {
                dID: payload.dID,
                name: payload.name,
                basePrice: payload.basePrice,
                category: payload.category,
                subcategory: payload.subcategory,
                desc: payload.desc,
                image: payload.image,
                dateAvailableSince: payload.availableSince,
                dateAvailableUpTo: payload.availableUpTo,
                discounts: payload.discounts
            }
            state.dishes.push(newDish);
        },
        REMOVE_DISH(state, payload) {
            state.dishes = state.dishes.filter(dish => dish.dID !== payload);
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("bookings-state", JSON.stringify(state));
        },
        GET_FROM_LOCALSTORAGE(state) {
            if (localStorage.getItem("bookings-state")) state = JSON.parse(localStorage.getItem("bookings-state"));
            localStorage.setItem("bookings-state", state);
        }
    },
    getters: {
        getBookings: state => state.bookings,
        getTables: state => state.tables
    }
}