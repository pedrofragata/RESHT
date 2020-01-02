import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

class User {
  constructor(
    username,
    password,
    email
    ){
    this.username=username,
    this.password=password,
    this.email=email   
  }
}

export default new Vuex.Store({
  state: {
    users:[],
    loggedUser: {}

  },
  mutations: {
    //regist user
    ADD_USER(state, user) {
      let newUser= new User (user.username, user.password, user.email)
      state.users.push(newUser)
      console.log(user)
      console.log(user.email + "LALALALAL")
      console.log(state.users)
    },
    //login
    LOGIN(state, payload){
      for (let user in state.users){
        if(user.username==payload.Lusername && user.password==payload.Lpassword)
         {
           state.loggedUser= state.users[user] // obtem-se o user loggado
           console.log("LOGIn",state.loggedUser)
         }
      }

    },
    //logout
    LOGOUT(state){
      state.loggedUser={}
      console.log("LOGOUT",state.loggedUser)

    },

  },
  getters: {
    //return loggedUser
    isLogged: state =>{
      return state.loggedUser
    },

    //get all users
    getUsers: state =>{
      return state.users
    }
  },




  actions: {},
  modules: {}
});
