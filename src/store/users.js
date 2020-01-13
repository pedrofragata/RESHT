export default {
    state: {
        users: [],
        loggedUser: {},
        isLogged: false
    },
    mutations: {
        //registar utilizador
        ADD_USER(state, payload) {
            const newUser = {
                uID: payload.uID,
                accessLevel: 2,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
                avatar: "",
                about: ""
            }
            state.users.push(newUser);
            console.log(payload)
            console.log(payload.email + "LALALALAL")
            console.log(state.users)
        },
        //login
        LOGIN(state, payload){
            for (const user in state.users) {
                if (user.email === payload.logEmail && user.password === payload.logPassword) {
                    state.loggedUser = state.users[user]; // obtem-se o user loggado
                    console.log("LOGIN", state.loggedUser);
                    state.isLogged = true;
                    break;
                }
            }
        },
        //logout
        LOGOUT(state) {
            state.loggedUser = {};
            console.log("LOGOUT", state.loggedUser);
            state.isLogged = false;
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("users-state", JSON.stringify(state));
        },
        GET_FROM_LOCALSTORAGE(state) {
            if (localStorage.getItem("users-state")) state = JSON.parse(localStorage.getItem("users-state"));
            localStorage.setItem("users-state", state);
        }
    },
    getters: {
        //retorna loggedUser
        loggedUser: state => {
            return state.loggedUser;
        },
        isLogged: state => {
            return state.isLogged;
        },
        //obter todos os utilizadores
        getUsers: state => {
            return state.users;
        }
    }
}