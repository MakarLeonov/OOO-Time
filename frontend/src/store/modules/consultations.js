import axios from 'axios'
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
          axios.get('http://127.0.0.1:8000/api/consultation')
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
          axios.delete(payload)
            .then((response) => {
                dispatch('GET_CONSULTATIONS');
            })
            .catch((error) => {
                console.log(error);
            });
        },

    },
}