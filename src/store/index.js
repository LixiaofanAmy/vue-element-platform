import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    menuTree: [],
    nodeCode: ''
  },
  mutations: {
    changeToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    changeMenuTree (state, value) {
      state.menuTree = value
    },
    changeFirstMenu (state, oMenu) {
      state.nodeCode = oMenu.nodeCode
      router.replace(oMenu.menuUrl)
    },
  },
  actions: {
  },
  modules: {
  }
})
