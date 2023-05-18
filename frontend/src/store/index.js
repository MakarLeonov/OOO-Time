import { createStore } from 'vuex'

export default createStore({
  state: {
    screenWidth: 0,
    isSidebarActive: false,
  },
  getters: {
  },
  mutations: {
    updateScreenWidth(state, payload) {
      state.screenWidth = payload;
    },

    showSidebar(state) {
      if(state.isSidebarActive)
        state.isSidebarActive = false;
      else 
        state.isSidebarActive = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
