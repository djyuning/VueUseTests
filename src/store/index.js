import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    app: {}

  },

  getters: {

    app: state => state.app

  },

  mutations: {

    setAppItem: (state, item) => {
      Vue.set(state.app, item.key, item.value)
    },

    removeAppItem: (state, key) => {
      delete state.app[key]
    },

    reset: (state) => {
      state.app = {}
    }

  },

  actions: {

    setAppItem: (context, item) => {
      context.commit('setAppItem', item)
    },

    removeAppItem: (context, key) => {
      context.commit('removeAppItem', key)
    }

  }

})
