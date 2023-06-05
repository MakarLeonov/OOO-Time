import axios from 'axios'
export default {
    state: {
        promotions: [],
    },

    getters: {
    
        PROMOTIONS (state) {
            return state.promotions;
          },

    },

    mutations: {

        SET_PROMOTIONS_TO_STATE: (state, payload) => {
          state.promotions = payload;
        },

    },

    actions: {

        GET_PROMOTIONS({commit}) {
          axios.get('http://127.0.0.1:8000/api/promotions')
          .then(response => {
            commit('SET_PROMOTIONS_TO_STATE', response.data.data);
          })
        },

        ADD_PROMOTION({dispatch}, payload) {
          axios.post(payload)
          .then(response => {
              dispatch('GET_PROMOTIONS');
          })
        },

        EDIT_PROMOTION({dispatch}, payload) {
          axios.put(payload)
          .then(response => {
              dispatch('GET_PROMOTIONS');
          })
        },

        DELETE_PROMOTION({dispatch}, payload) {
          axios.delete(payload)
          .then(response => {
              dispatch('GET_PROMOTIONS');
          })
        },

    },
}