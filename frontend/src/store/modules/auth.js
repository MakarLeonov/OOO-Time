import axios from 'axios'
export default {
    state: {
        user: {},
        authorized: true,
    },

    getters: {

        authorized (state) {
          return state.authorized;
        },
    
        user (state) {
          return state.user;
        },

    },

    mutations: {

        SET_USER_TO_STATE: (state) => {
          let user = JSON.parse(localStorage.getItem('user'));
          state.user = user.user;
        },

    },

    actions: {

        REGISTRATE({commit}, payload) {
          axios.post(payload)
            .then((response) => {
              localStorage.user = JSON.stringify(response.data);
              commit('SET_USER_TO_STATE', response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
    
        LOGIN({commit}, payload) {
          axios.post(payload)
            .then((response) => {
              localStorage.user = JSON.stringify(response.data);
              commit('SET_USER_TO_STATE', response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },

    },
}