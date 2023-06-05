import axios from 'axios'
export default {
    state: {
        advantages: [],
    },

    getters: {

        ADVANTAGES(state) {
          return state.advantages;
        }

    },

    mutations: {

        SET_ADVANTAGES_TO_STATE: (state, payload) => {
          state.advantages = payload;
        },

    },

    actions: {

        GET_ADVANTAGES({commit}) {
          axios.get('http://127.0.0.1:8000/api/advantages')
          .then(response => {
            commit('SET_ADVANTAGES_TO_STATE', response.data.data);
          })
        },

        ADD_ADVANTAGE({dispatch}, payload) {
          axios.post(payload)
          .then(response => {
            dispatch('GET_ADVANTAGES')
          })
        },

        EDIT_ADVANTAGE({dispatch}, payload) {
          axios.put(payload)
          .then(response => {
            dispatch('GET_ADVANTAGES')
          })
        },

        ADD_ADVANTAGE({dispatch}, payload) {
          axios.post(payload)
          .then(response => {
            dispatch('GET_ADVANTAGES')
          })
        },

        DELETE_ADVANTAGE({dispatch}, payload) {
          axios.delete(payload)
          .then(response => {
            dispatch('GET_ADVANTAGES')
          })
        },

    },
}