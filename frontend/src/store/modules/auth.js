import axios from 'axios'
export default {
    state: {
        user: {},
        authorized: false,
        token: '',
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

          if(user != null) {
            console.log('Есть такой юзер')
          } else {
            console.log('Такого юзера нет')

          }
          // let user = JSON.parse(localStorage.getItem('user'));
          // state.user = user.user;
        },

        IS_AUTORIZED(state) {
          state.authorized = false;
        }

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
              commit('SET_USER_TO_STATE');
              // commit('AUTORIZE_USER');
            })
            .catch((error) => {
                console.log(error);
            });
        },

    },
}