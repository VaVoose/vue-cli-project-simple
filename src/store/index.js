import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
