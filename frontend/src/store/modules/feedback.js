import axios from 'axios'
export default {
    state: {
        feedback: [],
    },

    getters: {
    
        FEEDBACK (state) {
          return state.feedback;
        },

    },

    mutations: {

        SET_FEEDBACK_TO_STATE: (state, payload) => {
          state.feedback = payload;
        },

    },

    actions: {
    
        GET_FEEDBACK({commit}) {
          axios.get('http://127.0.0.1:8000/api/feedback')
          .then(response => {
            commit('SET_FEEDBACK_TO_STATE', response.data.data);
          })
        },

        ADD_FEEDBACK({dispatch}, payload) {
          axios.post(payload)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
          
          dispatch('GET_FEEDBACK');
        },
    
        DELETE_FEEDBACK({dispatch}, payload) {
          axios.delete(payload)
            .then((response) => {
                dispatch('GET_FEEDBACK');
            })
            .catch((error) => {
                console.log(error);
            });
        },

    },
}