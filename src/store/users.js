export default {
    namespaced: true,

    state: {
        users: [
            {
                uID: 0,
                accessLevel: 2,
                firstName: "Administrador",
                lastName: "User",
                fullName: "Administrador User",
                email: "admin@hotmail.com",
                password:"123",
                avatar:"",
                about:""

        }],
        loginStatus: {
            isLogged: false,
            loggedUser: {}
        }
    },
    mutations: {
        ADD_USER(state, payload) {
            state.users.push({
                uID: payload.uID,
                accessLevel: 0,
                firstName: payload.firstName,
                lastName: payload.lastName,
                fullName: payload.firstName + " " + payload.lastName,
                email: payload.email,
                password: payload.password,
                avatar: "",
                about: ""
            });
        },
        DELETE_USER(state, id){
            let index = state.users.findIndex(user => user.uID == id);
            state.users.splice(index, 1);
        },
        LOGIN(state, payload){;
            state.loginStatus.isLogged = true;
            state.loginStatus.loggedUser = payload;
        },
        LOGOUT(state) {
            if (state.loginStatus.isLogged) {
                state.loginStatus.isLogged = false;
                state.loginStatus.loggedUser = {};
            }
        },
        SAVE_TO_LOCALSTORAGE(state) {
            localStorage.setItem("users-state", JSON.stringify(state.users));
            sessionStorage.setItem("login-status", JSON.stringify(state.loginStatus));
        },
        GET_FROM_LOCALSTORAGE(state) {
            localStorage.getItem("users-state")
            ? state.users = JSON.parse(localStorage.getItem("users-state"))
            : localStorage.setItem("users-state", JSON.stringify(state.users));

            sessionStorage.getItem("login-status")
            ? state.loginStatus = JSON.parse(sessionStorage.getItem("login-status"))
            : sessionStorage.setItem("login-status", JSON.stringify(state.loginStatus));
        },
        EDIT_FULLNAME(state, payload){
            let index = state.users.findIndex(user => user.uID == payload.uID)
            state.users[index].fullName = payload.fullName;
        },

        EDIT_PASSWORD(state, payload){
            let index = state.users.findIndex(user => user.uID == payload.uID)
            state.users[index].password = payload.password;
        },
        
        EDIT_AVATAR(state,payload){
            let index = state.users.findIndex(user => user.uID == payload.uID)
            state.users[index].avatar = payload.userImage;
        }

    },
    getters: {
        isAdmin: (state) => (uID) => { return state.users.find(user => user.uID === uID).accessLevel === 2},
        allUsers: state => state.users,
        loginStatus: state => state.loginStatus,
        newId: (state) => { return state.users.length ? state.users.length + 1 : 0 },
        emailInUse: (state) => (email) => { return state.users.find(user => user.email === email)},
        foundUser: (state) => (email, password) => {
            return state.users.find(user => user.email === email && user.password === password)
        },
        fullNameByID: (state) => (uID) => { return state.users.find(user => user.uID === uID).fullName},
        isStaffMember: (state) => (uID) => { return state.users.find(user => user.uID === uID).accessLevel === 1},
        
        
    }
}