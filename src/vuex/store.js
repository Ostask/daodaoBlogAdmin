import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    navOpen:true
}

const mutations = {
    changeNavOpen(state,payload){
        state.navOpen = payload
    }
}

const getters = {
    navOpen:state => {
        return state.navOpen
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})