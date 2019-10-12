import Vuex from 'vuex'
import Vue from 'vue'
import JwtService from "../services/jwt.service"

Vue.use(Vuex)

export const auth = new Vuex.Store({
    state: {
        count: 666,
        isLogged: !!JwtService.getToken(),
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