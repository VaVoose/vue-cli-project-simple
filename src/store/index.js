import Vue from 'vue'
import Vuex from 'vuex'
import {userGetters, adminGetters} from './getters' 
import { adminMutations, userMutations } from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectCount: 0,
    cart: [],
    //ajax loader
    showLoader: false,
    //selected user
    user: {},
    //all users
    users: [],
    //all admins
    admins: []
  },
  //Used for synchronous tasks
  mutations: Object.assign({}, userMutations, adminMutations),
  //Used for asynchronous tasks
  actions: {
  },
  modules: {
  },
  getters: Object.assign({}, userGetters, adminGetters)
});
