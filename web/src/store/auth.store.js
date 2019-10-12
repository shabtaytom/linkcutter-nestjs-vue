import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const auth = new Vuex.Store({
    state: {
        count: 666,
        isLogged: false,
    },
    mutations: {
        count(state, count) {
            state.count = count
        },
        isLogged(state, isLogged) {
            state.isLogged = isLogged
        }
    },
    getters: {
        count: state => state.count,
        isLogged: state => state.isLogged,
    },
})