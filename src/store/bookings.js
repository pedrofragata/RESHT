export default {
    namespaced: true,
    
    state: {
        bookings: [
            // objetos para efeitos de teste
            {
                bID: 0,
                uID: 0,
                sID: 0,
                dateRequest: "15/01/2015, 00:00:00",
                dateOpening: "16/01/2015, 12:00:00",
                dateClosing: "16/01/2015, 14:00:00",
                dateArrival: "16/01/2015, 12:30:00",
                numOfPeople: 3,
                tables: [
                    {
                        tID: 0,
                        people: 0
                    }
                ],
                dishes: [
                    {
                        dID: 0,
                        quantity: 2
                    },
                    {
                        dID: 2,
                        quantity: 1
                    }
                ],
                totalPrice: 20.50,
                message: "Não como doces"
            },
            {
                bID: 1,
                uID: 0,
                sID: 0,
                dateRequest: "15/01/2015, 02:00:00",
                dateOpening: "16/01/2015, 12:00:00",
                dateClosing: "16/01/2015, 14:00:00",
                dateArrival: "16/01/2015, 13:00:00",
                numOfPeople: 1,
                tables: [
                    {
                        tID: 1,
                        people: 4
                    }                    
                ],
                dishes: [
                    {
                        dID: 1,
                        quantity: 1
                    }
                ],
                totalPrice: 7.00,
                message: "Espero que seja bom"
            },
            {
                bID: 2,
                uID: 0,
                sID: 0,
                dateRequest: "16/01/2015, 00:00:00",
                dateOpening: "17/01/2015, 19:00:00",
                dateClosing: "17/01/2015, 20:00:00",
                dateArrival: "17/01/2015, 19:10:00",
                numOfPeople: 10,
                tables: [
                    {
                        tID: 9,
                        people: 0
                    }                    
                ],
                dishes: [
                    {
                        dID: 1,
                        quantity: 4
                    },
                    {
                        dID: 4,
                        quantity: 5
                    },
                    {
                        dID: 0,
                        quantity: 1
                    },
                    {
                        dID: 2,
                        quantity: 3
                    },
                    {
                        dID: 3,
                        quantity: 7
                    }
                ],
                totalPrice: 97.50,
                message: "Esta é uma descrição de elevada extensão para ser possível avaliar o comportamento da tabela face a um grande número de caracteres presentes no campo de observação."
            },
            {
                bID: 3,
                uID: 0,
                sID: 0,
                dateRequest: "11/01/2015, 00:00:00",
                dateOpening: "11/01/2015, 12:00:00",
                dateClosing: "11/01/2015, 14:00:00",
                dateArrival: "11/01/2015, 12:30:00",
                numOfPeople: 3,
                tables: [
                    {
                        tID: 0,
                        people: 0
                    }
                ],
                dishes: [
                    {
                        dID: 0,
                        quantity: 2
                    },
                    {
                        dID: 2,
                        quantity: 1
                    }
                ],
                totalPrice: 20.50,
                message: "Teste paginação 1"
            },
            {
                bID: 4,
                uID: 0,
                sID: 0,
                dateRequest: "10/01/2015, 02:00:00",
                dateOpening: "10/01/2015, 12:00:00",
                dateClosing: "10/01/2015, 14:00:00",
                dateArrival: "10/01/2015, 13:00:00",
                numOfPeople: 1,
                tables: [
                    {
                        tID: 1,
                        people: 4
                    }                    
                ],
                dishes: [
                    {
                        dID: 1,
                        quantity: 1
                    }
                ],
                totalPrice: 7.00,
                message: "Teste paginação 2"
            },
            {
                bID: 5,
                uID: 0,
                sID: 0,
                dateRequest: "9/01/2015, 00:00:00",
                dateOpening: "9/01/2015, 19:00:00",
                dateClosing: "9/01/2015, 20:00:00",
                dateArrival: "9/01/2015, 19:10:00",
                numOfPeople: 10,
                tables: [
                    {
                        tID: 9,
                        people: 0
                    }                    
                ],
                dishes: [
                    {
                        dID: 1,
                        quantity: 4
                    },
                    {
                        dID: 4,
                        quantity: 5
                    },
                    {
                        dID: 0,
                        quantity: 1
                    },
                    {
                        dID: 2,
                        quantity: 3
                    },
                    {
                        dID: 3,
                        quantity: 7
                    }
                ],
                totalPrice: 97.50,
                message: "Teste paginação 3"
            }
        ],
        tables: [
            // objetos para efeitos de teste
            {
                tID: 0,
                desc: "Mesa 1",
                category: 1,
                screenX: 100,
                screenY: 60,
                width: 100,
                height: 100,
                capacity: 4,  // a ser implementado
                people: 0
            },
            {
                tID: 1,
                desc: "Mesa 2",
                category: 2,
                screenX: 300,
                screenY: 60,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 2,
                desc: "Mesa 3",
                category: 2,
                screenX: 500,
                screenY: 60,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 3,
                desc: "Mesa 4",
                category: 3,
                screenX: 700,
                screenY: 60,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 4,
                desc: "Mesa 5",
                category: 3,
                screenX: 100,
                screenY: 240,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 5,
                desc: "Mesa 6",
                category: 3,
                screenX: 300,
                screenY: 240,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 6,
                desc: "Mesa 7",
                category: 3,
                screenX: 500,
                screenY: 240,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 7,
                desc: "Mesa 8",
                category: 3,
                screenX: 700,
                screenY: 240,
                width: 100,
                height: 100,
                capacity: 4,
                people: 0
            },
            {
                tID: 8,
                desc: "Mesa 9",
                category: 3,
                screenX: 900,
                screenY: 100,
                width: 100,
                height: 200,
                capacity: 8,
                people: 0
            }
            
        ],
        status: [
            {
                sID: 0,
                desc: "Em revisão",
                color: "yellow"
            },
            {
                sID: 1,
                desc: "Confirmada",
                color: "green"
            },
            {
                sID: 2,
                desc: "Mesa atribuída",
                color: "white"
            },
            {
                sID: 3,
                desc: "Paga",
                color: "blue"
            },
            {
                sID: 4,
                desc: "A reembolsar",
                color: "red"
            },
            {
                sID: 5,
                desc: "Reembolsada",
                color: "black"
            }
        ]
    },
    mutations: {
        NEW_BOOKING(state, payload) {
            state.bookings.push({
                bID: payload.bID,
                uID: payload.uID,
                sID: 0,
                dateRequest: `${new Date().toLocaleDateString()} ${new Date().toLocalTimeString()}`,
                dateOpening: payload.dateOpening,
                dateClosing: payload.dateClosing,
                dateArrival: payload.dateArrival,
                numOfPeople: payload.numOfPeople,
                tables: payload.tables,
                dishes: payload.dishes,
                totalPrice: 0,
                message: payload.message
            });
        },
        ADD_TABLE(state, payload) {
            state.tables.push({
                tID: payload.tID,
                desc: payload.desc,
                category: payload.category,
                capacity: payload.capacity,
                filled: 0,
                screenX: 0,
                screenY: 0,
                tWidth: 100,
                tHeight: 100
            });
        },
        REMOVE_TABLE(state, payload) {
            state.tables = state.tables.filter(table => table.tID === payload);
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("bookings-state", JSON.stringify(state.bookings));
            localStorage.setItem("tables-state", JSON.stringify(state.table));
        },
        GET_FROM_LOCALSTORAGE(state) {
            localStorage.getItem("bookings-state")
            ? state.bookings = JSON.parse(localStorage.getItem("bookings-state"))
            : localStorage.setItem("bookings-state", JSON.stringify(state.bookings));

            localStorage.getItem("tables-state")
            ? state.tables = JSON.parse(localStorage.getItem("tables-state"))
            : localStorage.setItem("tables-state", JSON.stringify(state.tables));
        }
    },
    getters: {
        allBookings: state => state.bookings,
        allTables: state => state.tables,
        statusDescByID: (state) => (sID) => { return state.status.find(status => status.sID === sID).desc },
        statusColorByID: (state) => (sID) => { return state.status.find(status => status.sID === sID).color }
    }
}