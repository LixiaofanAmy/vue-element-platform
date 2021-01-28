import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nodeCode: ''
  },
  mutations: {
    changeFirstMenu (state, {oMenu, path}) {
      state.nodeCode = oMenu.nodeCode
      path === oMenu.menuUrl ? null : router.replace(oMenu.menuUrl)
    }
  },
  actions: {
  },
  modules: {
  }
})
