export default {
    namespaced: true,

    state: {
        timeIntervals:[
            {
                ID: 0,
                string: "12:00-14:00"
            },
            {
                ID: 1,
                string: "19:00-21:00"
            }
        ],
        bookings: [
            // objetos para efeitos de teste
            {
            /*sID = 0 -> por confirmar/atribuir mesa
              sID = 1 -> confirmada, por pagar
              sID = 2 -> paga
              sID = 3 -> cancelada/rejeitada
            */
                bID: 0,
                uID: 0,
                sID: 0,
                dateRequest: "2020-01-15 00:00:00",
                dateOpening: "2020-01-16 12:00:00",
                dateClosing: "2020-01-16 14:00:00",
                dateArrival: "2020-01-16 12:30:00",
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
                sID: 1,
                dateRequest: "2020-01-15 02:00:00",
                dateOpening: "2020-01-16 12:00:00",
                dateClosing: "2020-01-16 14:00:00",
                dateArrival: "2020-01-16 13:00:00",
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
                sID: 1,
                dateRequest: "2020-01-16 00:00:00",
                dateOpening: "2020-01-17 19:00:00",
                dateClosing: "2020-01-17 20:00:00",
                dateArrival: "2020-01-17 19:10:00",
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
                sID: 2,
                dateRequest: "2020-01-11 00:00:00",
                dateOpening: "2020-01-11 12:00:00",
                dateClosing: "2020-01-11 14:00:00",
                dateArrival: "2020-01-11 12:30:00",
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
                sID: 3,
                dateRequest: "2020-01-10 02:00:00",
                dateOpening: "2020-01-10 12:00:00",
                dateClosing: "2020-01-10 14:00:00",
                dateArrival: "2020-01-10 13:00:00",
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
                sID: 4,
                dateRequest: "2015-01-09 00:00:00",
                dateOpening: "2015-01-09 19:00:00",
                dateClosing: "2015-01-09 20:00:00",
                dateArrival: "2015-01-09 19:10:00",
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
            },
            {
                bID: 6,
                uID: 0,
                sID: 0,
                dateRequest: "2020-01-21 00:00:00",
                dateOpening: "2020-01-22 12:00:00",
                dateClosing: "2020-01-22 14:00:00",
                dateArrival: "2020-01-22 12:30:00",
                numOfPeople: 3,
                tables: [
                    {
                        tID: 0,
                        people: 0
                    }
                ],
                dishes: [
                    {
                        dID: 2,
                        quantity: 1
                    }
                ],
                totalPrice: 20.50,
                message: "Testar datas"
            },
            {
                bID: 7,
                uID: 0,
                sID: 0,
                dateRequest: "2020-01-22 00:00:00",
                dateOpening: "2020-01-23 12:00:00",
                dateClosing: "2020-01-23 14:00:00",
                dateArrival: "2020-01-23 12:30:00",
                numOfPeople: 3,
                tables: [
                    {
                        tID: 0,
                        people: 0
                    }
                ],
                dishes: [
                    {
                        dID: 2,
                        quantity: 1
                    }
                ],
                totalPrice: 20.50,
                message: "Testar datas 2"
            },
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
                dateRequest: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                dateOpening: payload.dateOpening,
                timeOpening: payload.timeOpening,
                timeArrival: payload.timeArrival,
                numOfPeople: payload.numOfPeople,
                tables: payload.tables,
                dishes: payload.dishes, // guardar objetos completos para perseverar caso o prato seja removido
                basePrice: payload.basePrice,
                discIDs: payload.discIDs,
                totalPrice: payload.totalPrice,
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
            // localStorage.setItem("tables-state", JSON.stringify(state.table));
        },
        GET_FROM_LOCALSTORAGE(state) {
            
            if(localStorage.getItem("bookings-state")){
                state.bookings = JSON.parse(localStorage.getItem("bookings-state"))
            }
            // else{
            //     localStorage.setItem("bookings-state", JSON.stringify(state.bookings));
            // }
               
                

            localStorage.getItem("tables-state")
                ? state.tables = JSON.parse(localStorage.getItem("tables-state"))
                : localStorage.setItem("tables-state", JSON.stringify(state.tables));
        }
    },
    getters: {
        allTimeIntervals: state => state.timeIntervals,
        allBookings: state => state.bookings,
        allTables: state => state.tables,
        statusDescByID: (state) => (sID) => { return state.status.find(status => status.sID === sID).desc },
        statusColorByID: (state) => (sID) => { return state.status.find(status => status.sID === sID).color },
        bookingsNewId: state => state.bookings[state.bookings.length - 1].bID || 0
    }
}