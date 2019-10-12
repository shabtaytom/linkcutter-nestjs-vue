import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const auth = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        count(state, count) {
            state.count = count
        },
    },
    getters: {
        count: state => state.count,
    },
})