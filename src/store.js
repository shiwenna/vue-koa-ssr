import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore () {
  let store = new Vuex.Store({
    state: {
      homeInfo: ''
    },
    actions: {
      getHomeInfo ({ commit }) {
        console.log('+++++')
        return axios.get('http://localhost:8889/auth/user/10').then((res) => {
          commit('setHomeInfo', res.data)
        })
      }
    },
    mutations: {
      setHomeInfo (state, res) {
        state.homeInfo = res
      }
    }
  })

  return store
}
