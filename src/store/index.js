import Vue from 'vue'
import Vuex from 'vuex'
//import {userGetters, adminGetters} from './getters' 
//import { adminMutations, userMutations } from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectCount: 0,
    calledFromMapstate: "Hello from mapState",
    cart: [],
    //ajax loader
    showLoader: 'plus-square',
    //selected user
    user: {},
    //all users
    users: [
      {id: 1, fName: "Dominic", lName: "Ferrante", cat:"Frontend"},
      {id: 2, fName: "Wayne", lName: "Geissinger", cat:"Frontend"},
      {id: 3, fName: "Will", lName:"Davis", cat:"Backend"},
      {id: 4, fName: "Brian", lName:"Rexroth", cat:"Database"}
    ],
    //all admins
    admins: [1, 4]
  },
  //Mutations are used when you want to change the data in the state
  //Must be synchronous - performed when called
  //mutations: Object.assign({}, userMutations, adminMutations),
  mutations: {
    //Regular old mutations
    increment(state) {
      state.projectCount++;
    },
    decrement(state) {
      state.projectCount--;
    },
    
    //Mutations with a payload as an object
    //Simple Mode
    /*
    addUser(state, payload) {
      state.users.push(payload);
    },
    */

    //AddUser in conjuction with a async action
    addUser(state) {
      state.showLoader = 'loading';
    },
    addUserSuccess(state, payload) {
      state.showLoader = 'check';
      state.users.push(payload);
    }

  },
  //Actions commit mutations
  //Can be used for asynchronous tasks - doesn't need to run right away
  //Usually used with API calls
  actions: {
    pushUser(context, payload) {
      context.commit('addUser');
      /* ---- Perform some API call (Simulating with a setTimeout) ----*/
      setTimeout(() => {
        context.commit('addUserSuccess', payload)
      }, 1000)
    }
  },
  modules: {
  },
  //getters: Object.assign({}, userGetters, adminGetters)
  getters: {
    //Getters from another file
    //userGetters,
    //adminGetters,

    //Property-style Getters
    //Results are cached and updated reactively
    frontendDevs: (state) => {
      return state.users.filter(users => users.cat == "Frontend");
    },
    frontendDevAmt: (state, getters) => {
      return getters.frontendDevs.length;
    },

    //Method-stlye Getters
    userById: (state) => (id) => {
      return state.users.find(users => users.id === id);
    }
  }
});
