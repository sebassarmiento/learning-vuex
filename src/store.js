import Vue from 'vue'
import Vuex from 'vuex'
import { reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Names list',
    names: ['pedro', 'jorge', 'lucas']
  },
  getters: {
    countNames: store => store.names.length
  },
  mutations: {
    ADD_NAME: (state, name) => state.names.push(name),
    REMOVE_NAME: (state, index) => state.names.splice(index, 1),
    REMOVE_ALL: state => state.names = []
  },
  actions: {

    removeNameAction: (context, index) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('REMOVE_NAME', index)
          resolve()
        }, 400)
      })
    },
    removeAllAction: context => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('REMOVE_ALL')
          resolve()
        }, 2000)
      })
    }

  }
})
