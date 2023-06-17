import axios from 'axios'
import url from '@/url.js'
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
          axios.get(`${url}/api/feedback`)
          .then(response => {
            commit('SET_FEEDBACK_TO_STATE', response.data.data);
          })
        },

        ADD_FEEDBACK({dispatch}, payload) {
          axios.post(payload, null, {
            headers: { Authorization: `'Bearer ${JSON.parse(localStorage.getItem('token'))}` },
          })
            .then(function (response) {
                console.log(response);
                dispatch('GET_FEEDBACK');
            })
            .catch(function (error) {
                console.log(error);
                alert('asdf')
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