import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const link = new Vuex.Store({
    state: {
        count: 0,
        lastPostedLink: {},
        findedLink: {},
    },
    mutations: {
        count(state, count) {
            state.count = count
        },
        lastPostedLink(state,link) {
            state.lastPostedLink = link
        },
        findedLink(state, link) {
            state.findedLink = link
        }
    },
    getters: {
        count: state => state.count,
        lastPostedLink: state => state.lastPostedLink,
        findedLink: state => state.findedLink
    },
})