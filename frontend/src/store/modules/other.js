import axios from 'axios'
export default {
    state: {
        screenWidth: 0,
        isSidebarActive: false,
        isFeedbackModalWindowActive: false,
        AddRepaireTypesModalWindow: false,
        EditRepairTypesModalWindow: false,
    },

    getters: {

        isFeedbackModalWindowActive (state) {
          return state.isFeedbackModalWindowActive;
        },

        AddRepaireTypesModalWindow (state) {
          return state.AddRepaireTypesModalWindow;
        },

        EditRepairTypesModalWindow (state) {
          return state.EditRepairTypesModalWindow;
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

        RepaireTypesModalWindow(state) {
          state.AddRepaireTypesModalWindow = !state.AddRepaireTypesModalWindow;
        },

        EditRepairTypesModalWindow(state) {
          state.EditRepairTypesModalWindow = !state.EditRepairTypesModalWindow;
        },

        showSidebar(state) {
        if(state.isSidebarActive)
            state.isSidebarActive = false;
        else 
            state.isSidebarActive = true;
        },

    }
}