export default {
    namespaced: true,
    
    state: {
        allImages: [
            require("@/assets/abigail-keenan-WI_9GWX1o-0-unsplash2.jpg"),
            require("@/assets/cloris-ying-1Qt-W4BGrgc-unsplash2.jpg"),
            require("@/assets/michael-browning-MtqG1lWcUw0-unsplash2.jpg"),
            require("@/assets/nathan-dumlao-X_bbCAYzlTs-unsplash2.jpg"),
            require("@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash2.jpg")
        ]
    },
    mutations: {
        ADD_IMAGE(state, payload) {
            state.images.push({
                payload
            });
        },
        REMOVE_IMAGE(state, payload) {
            state.images = state.images.filter(image => image !== payload);
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("carousel-state", JSON.stringify(state.allImages));
        },
        GET_FROM_LOCALSTORAGE(state) {
            localStorage.getItem("carousel-state")
            ? state.allImages = JSON.parse(localStorage.getItem("carousel-state"))
            : localStorage.setItem("carousel-state", JSON.stringify(state.allImages));
        }
    },
    getters: {
        allImages: state => state.allImages
    }
}