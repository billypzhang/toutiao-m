import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setItem(USER_KEY, user)
    }
  },
  actions: {},
  modules: {}
})
