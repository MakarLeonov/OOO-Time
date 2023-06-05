import axios from 'axios'
export default {
    state: {
        screenWidth: 0,
        isSidebarActive: false,
        isFeedbackModalWindowActive: false,

        AddRepaireTypesModalWindow: false,
        EditRepairTypesModalWindow: false,

        AddAdvantageModalWindow: false,
        EditAdvantegeModalWindow: false,

        AddPromotionModalWindow: false,
        EditPromotionModalWindow: false,

        AddServiceModalWindow: false,
        EditServiceModalWindow: false,
    },

    getters: {

      isSidebarActive (state) {
        return state.isSidebarActive;
      },
  
      screenWidth (state) {
        return state.screenWidth;
      },

      isFeedbackModalWindowActive (state) {
        return state.isFeedbackModalWindowActive;
      },


      AddRepaireTypesModalWindow (state) {
        return state.AddRepaireTypesModalWindow;
      },

      EditRepairTypesModalWindow (state) {
        return state.EditRepairTypesModalWindow;
      },


      AddAdvantageModalWindow (state) {
        return state.AddAdvantageModalWindow;
      },

      EditAdvantegeModalWindow (state) {
        return state.EditAdvantegeModalWindow;
      },


      AddPromotionModalWindow (state) {
        return state.AddPromotionModalWindow;
      },

      EditPromotionModalWindow (state) {
        return state.EditPromotionModalWindow;
      },


      AddServiceModalWindow (state) {
        return state.AddServiceModalWindow;
      },

      EditServiceModalWindow (state) {
        return state.EditServiceModalWindow;
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


        AddAdvantageModalWindow(state) {
          state.AddAdvantageModalWindow = !state.AddAdvantageModalWindow;
        },

        EditAdvantegeModalWindow(state) {
          state.EditAdvantegeModalWindow = !state.EditAdvantegeModalWindow;
        },


        AddPromotionModalWindow(state) {
          state.AddPromotionModalWindow = !state.AddPromotionModalWindow;
        },

        EditPromotionModalWindow(state) {
          state.EditPromotionModalWindow = !state.EditPromotionModalWindow;
        },


        AddServiceModalWindow(state) {
          state.AddServiceModalWindow = !state.AddServiceModalWindow;
        },

        EditServiceModalWindow(state) {
          state.EditServiceModalWindow = !state.EditServiceModalWindow;
        },

        showSidebar(state) {
        if(state.isSidebarActive)
            state.isSidebarActive = false;
        else 
            state.isSidebarActive = true;
        },

    }
}