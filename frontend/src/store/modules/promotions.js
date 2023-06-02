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

    },
}