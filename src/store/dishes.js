export default {
    namespaced: true,
    
    state: {
        dishes: [
            // objetos para efeitos de teste
            {
                dID: 0,
                name: "Amêijoas à Bulhão Pato",
                catID: 1,
                subCatID: 2,
                desc: "Esta é uma descrição de um prato.",
                image: "https://www.pingodoce.pt/wp-content/uploads/2017/06/ameijoas-a-bulhao-pato.jpg",
                dateAvailableSince: "2020-01-17 00:00:00",
                dateAvailableUpTo: "2020-01-31 23:59:00",
                price: 4
            },
            {
                dID: 1,
                name: "Lombos de Robalo Cozidos com Legumes e Puré de Batata",
                catID: 1,
                subCatID: 1,
                desc: "Esta é outra descrição de um prato.",
                image: "https://culinaria.culturamix.com/blog/wp-content/gallery/preparar-robalo/preparar-robalo-1.jpg",
                dateAvailableSince: "2020-01-17 00:00:00",
                dateAvailableUpTo: "2020-01-18 23:59:00",
                price: 4.5
            },
            {
                dID: 2,
                name: "Pudim de Azeite e Mel",
                catID: 2,
                subCatID: 3,
                desc: "Mais algum texto.",
                image: "data:image/jpeg;base64,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",
                dateAvailableSince: "2020-01-18 00:00:00",
                dateAvailableUpTo: "2020-01-19 23:59:00",
                price: 5.5
            },
            {
                dID: 3,
                name: "Creme de Cogumelos e Castanha Assada",
                catID: 0,
                subCatID: 3,
                desc: "Prato de entrada.",
                image: "http://compassionatecuisineblog.com/wp-content/uploads/2012/11/sopa-de-castanhas-e-cogumelos-compassionate-cuisine-blog-receitas-vegetarianas-1.jpg",
                dateAvailableSince: "2020-01-17 00:00:00",
                dateAvailableUpTo: "2020-01-31 23:59:00",
                price: 3.5
            },
            {
                dID: 4,
                name: "Lombo de Porco ao Molho de Maracujá, Batata Assada e Brócolos ao Vapor",
                catID: 1,
                subCatID: 0,
                desc: "Festa do Maracujá",
                image: "https://abrilmdemulher.files.wordpress.com/2016/10/receita-lombo-de-porco-ao-maracuja.jpg?quality=90&strip=info&w=620&h=372&crop=1",
                dateAvailableSince: "2020-01-19 00:00:00",
                dateAvailableUpTo: "2020-01-30 23:59:00",
                price: 5
            }
        ],
        categories: [
            {
                catID: 0,
                desc: "Entrada"
            }, {
                catID: 1,
                desc: "Prato Principal"
            },{
                catID: 2,
                desc: "Sobremesa"
            }
        ],
        subcategories: [
            {
                subCatID: 0,
                desc: "Carne"
            }, {
                subCatID: 1,
                desc: "Peixe"
            } , {
                subCatID: 2,
                desc: "Marisco"
            } , {
                subCatID: 3,
                desc: "Doce"
            }, {
                subCatID: 4,
                desc: "Fruta"
            }
        ],
        menus: [
            {
                mID: 0,
                dIDs: [],
                basePrice: 0,
                discID: null
            }
        ],
        discounts: [
            {
                discID: 0,
                tag: "IPP",
                amount: 0.2
            } , {
                discID: 1,
                tag: "Crianças < 12 anos",
                amount: 0.2
            }
        ]
    },
    mutations: {
        ADD_DISH(state, payload) {
            state.dishes.push({
                dID: payload.dID,
                name: payload.name,
                catID: payload.catID,
                subCatID: payload.subCatID ? payload.subCatID : null,
                desc: payload.desc,
                image: payload.image,
                dateAvailableSince: payload.availableSince,
                dateAvailableUpTo: payload.availableUpTo,
                price:payload.price
            });
        },
        ADD_CATEGORY(state, payload) {
            state.categories.push({
                catID: payload.catID,
                desc: payload.desc,
            });
        },
        ADD_SUBCATEGORY(state, payload) {
            state.subcategories.push({
                subCatID: payload.subCatID,
                desc: payload.desc,
            });
        },
        ADD_MENU(state, payload) {
            state.dishes.filter(dish => payload.menu.includes(dish)).forEach(dish => {
                dish.dateAvailableSince = payload.dateAvailableSince;
                dish.dateAvailableUpTo = payload.dateAvailableUpTo;
            });
        },
        ADD_DISCOUNT(state, payload) {
            state.discounts.push({
                discID: payload.discID,
                tag: payload.tag,
                amount: payload.amount
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
        allCategories: state => state.categories,
        allSubcategories: state => state.subcategories,
        dishNameByID: (state) => (dID) => { return state.dishes.find(dish => dish.dID === dID).name },
        dishDescByID: (state) => (dID) => { return state.dishes.find(dish => dish.dID === dID).desc },
        catDescByID: (state) => (catID) => { return state.categories.find(category => {
                return category.catID === catID;
            }).desc;
        },
        subCatDescByID: (state) => (subCatID) => { return state.subcategories.find(subcategory => {
                return subcategory.subCatID === subCatID;
            }).desc;
        },
        dishByName: (state) => (name) => { return state.dishes.find(dish => {
                return dish.name.toLowerCase() === name.toLowerCase();
            });
        },
        isDishAvailableNow: (state) => (dID) => {
            const foundDish = state.dishes.find(dish => dish.dID === dID);
            if (foundDish) {
                const startDate = foundDish.dateAvailableSince;
                const endDate = foundDish.dateAvailableUpTo;

                const curDate = new Date();

                if (curDate >= new Date(startDate) && curDate <= new Date(endDate)) return true;
                else return false;
            }
            return false;
        },
        availableDishes: (state) => {
            console.log(state.dishes)
            return state.dishes.filter(dish => {
                const startDate = dish.dateAvailableSince;
                const endDate = dish.dateAvailableUpTo;

                const curDate = new Date();

                if (curDate >= new Date(startDate) && curDate <= new Date(endDate)){
                    console.log(dish)
                    return dish;
                } 
            });
        },
        lastAvailableDish: (state) => {
            return state.dishes.sort((a, b) => {
                return (new Date(a.dateAvailableUpTo) < new Date(b.dateAvailableUpTo)) ? 1 : -1
            })[0];
        },
        dishesNewId: state => state.dishes[state.dishes.length - 1].dID || 0,
        categoriesNewId: state => state.categories[state.categories.length - 1].catID || 0,
        subcategoriesNewId: state => state.subcategories[state.subcategories.length - 1].subCatID || 0,
        menusNewId: state => state.menus[state.menus.length - 1].mID || 0,
        discountsNewId: state => state.discounts[state.discounts.length - 1].discID || 0,
    }
}