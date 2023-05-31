import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    authorized: true,
    advantages: [],
    promotions: [],
    repair_types: [],
    service: [],
    feedback: [],
    screenWidth: 0,
    isSidebarActive: false,
    isFeedbackModalWindowActive: false,
  },
  getters: {
    isFeedbackModalWindowActive (state) {
      return state.isFeedbackModalWindowActive;
    },

    screenWidth (state) {
      return state.screenWidth;
    },

    authorized (state) {
      return state.authorized;
    },

    user (state) {
      return state.user;
    },
    
    FEEDBACK (state) {
      return state.feedback;
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

    SET_USER_TO_STATE: (state) => {
      let user = JSON.parse(localStorage.getItem('user'));
      state.user = user.user;
    },

    SET_ADVANTAGES_TO_STATE: (state, payload) => {
      state.advantages = payload;
    },

    SET_PROMOTIONS_TO_STATE: (state, payload) => {
      state.promotions = payload;
    },

    SET_REPAIR_TYPES_TO_STATE: (state, payload) => {
      state.repair_types = payload;
    },

    SET_SERVICE_TO_STATE: (state, payload) => {
      state.service = payload;
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

    GET_REPAIR_TYPES({commit}) {
      axios.get('http://127.0.0.1:8000/api/repair_types')
      .then(response => {
        commit('SET_REPAIR_TYPES_TO_STATE', response.data.data);
      })
    },

    GET_SERVICE({commit}) {
      axios.get('http://127.0.0.1:8000/api/service')
      .then(response => {
        commit('SET_SERVICE_TO_STATE', response.data.data);
      })
    },
    
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
})
