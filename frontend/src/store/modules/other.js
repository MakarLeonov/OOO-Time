import axios from 'axios'
export default {
    state: {
        screenWidth: 0,
        isSidebarActive: false,
        isFeedbackModalWindowActive: false,
    },

    getters: {

        isFeedbackModalWindowActive (state) {
          return state.isFeedbackModalWindowActive;
        },

        isSidebarActive (state) {
          return state.isSidebarActive;
        },
    
        screenWidth (state) {
          return state.screenWidth;
        },

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

    }
}