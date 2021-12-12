import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bankBalance : 8000,
  },
  mutations: {},
  actions: {},
  getters: {
    bankBalance(state){
      return state.bankBalance
    }
  },
  modules: {},
});
