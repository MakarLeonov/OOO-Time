import axios from 'axios'
export default {
    state: {
        authorized: false,
        is_admin: false,
    },

    getters: {

        authorized (state) {
          return state.authorized;
        },

        is_admin (state) {
          return state.is_admin;
        }

    },

    mutations: {

        IS_AUTORIZED(state) {
          let user = JSON.parse(localStorage.getItem('user'))
          if (user != null) {
            state.authorized = true;
            state.is_admin = (user.is_admin == 1) ? true : false;
          } else {
            state.authorized = false;
            state.is_admin = false;
          }
        },
        
        LOGOUT(commit) {
          localStorage.clear()
          commit('IS_AUTORIZED')
        },

    },

    actions: {

        REGISTRATE({commit}, payload) {
          axios.post(payload)
            .then((response) => {
              localStorage.setItem('user', JSON.stringify(response.data.user)) 
              localStorage.setItem('token', JSON.stringify(response.data.token))
              commit('IS_AUTORIZED')
              console.log('registrate')
            })
            .catch((error) => {
                console.log(error);
            });
        },
    
        LOGIN({commit}, payload) {
          axios.post(payload)
            .then((response) => {
              localStorage.setItem('user', JSON.stringify(response.data.user)) 
              localStorage.setItem('token', JSON.stringify(response.data.token))
              commit('IS_AUTORIZED')
              console.log('logged in')
            })
            .catch((error) => {
                console.log(error);
            });
        },

        LOGOUT({commit}) {
          localStorage.clear()
          commit('IS_AUTORIZED')
          console.log('logged out')
        },

    },
}