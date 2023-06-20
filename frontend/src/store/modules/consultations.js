import axios from 'axios'
import url from '@/url.js'
export default {
    state: {
        consultations: [],
    },

    getters: {
    
        CONSULTATIONS (state) {
          return state.consultations;
        },

    },

    mutations: {

        SET_CONSULTATIONS_TO_STATE: (state, payload) => {
          state.consultations = payload;
        },

    },

    actions: {

        GET_CONSULTATIONS({commit}) {
          axios.get(`${url}/api/consultation`, {
            headers: { Authorization: `'Bearer ${JSON.parse(localStorage.getItem('token'))}` },
          })
          .then(response => {
              commit('SET_CONSULTATIONS_TO_STATE', response.data.data);
            })
        },
        
        ADD_CONSULTATION({dispatch}, payload) {
          console.log(payload)
          axios.post(payload)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        DELETE_CONSULTATIONS({dispatch}, payload) {
          axios.delete(payload, null, {
            headers: { Authorization: `'Bearer ${JSON.parse(localStorage.getItem('token'))}` },
          })
            .then((response) => {
                dispatch('GET_CONSULTATIONS');
            })
            .catch((error) => {
                console.log(error);
            });
        },

    },
}