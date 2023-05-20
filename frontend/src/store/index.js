import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    advantages: {},
    screenWidth: 0,
    isSidebarActive: false,
    isFeedbackModalWindowActive: false,
  },
  getters: {
    isFeedbackModalWindowActive (state) {
      return state.isFeedbackModalWindowActive;
    },

    ADVANTAGES(state) {
      return state.adventages;
    }
  },
  mutations: {
    updateScreenWidth(state, payload) {
      state.screenWidth = payload;
    },

    changeFeedbackModalWindowstatus(state) {
      state.isFeedbackModalWindowActive = !state.isFeedbackModalWindowActive;
    },

    showSidebar(state) {
      if(state.isSidebarActive)
        state.isSidebarActive = false;
      else 
        state.isSidebarActive = true;
    },

    SET_ADVANTAGES_TO_STATE: (state, advantages) => {
      state.advantages = advantages;
    }
  },
  actions: {
    async GET_ADVANTAGES({commit}) {
      // return axios('http://127.0.0.1:8000/api/advantages', {
      //   method: 'GET',
      // })
      //   .then((advantages) => {
      //     commit('SET_ADVANTAGES_TO_STATE', advantages);
      //     return advantages;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     return error;
      //   })

      let response = await fetch('http://127.0.0.1:8000/api/advantages');
      let advantages = await response.json();
      commit('SET_ADVANTAGES_TO_STATE', advantages);
      // return advantages;
    }
  },
  modules: {
  }
})
