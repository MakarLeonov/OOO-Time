import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    advantages: [],
    promotions: [],
    feedback: [],
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

    SET_ADVANTAGES_TO_STATE: (state, payload) => {
      state.advantages = payload;
    },

    SET_PROMOTIONS_TO_STATE: (state, payload) => {
      state.promotions = payload;
    },

    SET_FEEDBACK_TO_STATE: (state, payload) => {
      state.feedback = payload;
    },
  },
  actions: {
    GET_ADVANTAGES({commit}) {
      axios.get('http://127.0.0.1:8000/api/advantages')
      .then(response => {
        commit('SET_ADVANTAGES_TO_STATE', response.data.data);
      })
    },

    GET_PROMOTIONS({commit}) {
      axios.get('http://127.0.0.1:8000/api/promotions')
      .then(response => {
        commit('SET_PROMOTIONS_TO_STATE', response.data.data);
      })
    },
    
    GET_FEEDBACK({commit}) {
      axios.get('http://127.0.0.1:8000/api/feedback')
      .then(response => {
        commit('SET_FEEDBACK_TO_STATE', response.data.data);
      })
    },

  },
})
