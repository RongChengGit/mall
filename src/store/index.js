import Vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(vuex);

const state = {
  productList:[]
};

const store = new vuex.Store({
  state,

  mutations,
  actions,
  getters,
  modules
});

export default store ;