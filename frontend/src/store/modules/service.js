import axios from 'axios'
export default {
    state: {

        repair_types: [],
        service: [],
        service_entry: {},

    },

    getters: {
    
        REPAIR_TYPES (state) {
          return state.repair_types;
        },
        
        SERVICE (state) {
          return state.service;
        },
        
        SERVICE_ENTRY (state) {
          return state.service_entry;
        },

    },

    mutations: {

        SET_REPAIR_TYPES_TO_STATE: (state, payload) => {
          state.repair_types = payload;
        },
    
        SET_SERVICE_TO_STATE: (state, payload) => {
          state.service = payload;
        },
    
        SET_SERVICE_ENTRY_TO_STATE: (state, payload) => {
          state.service_entry = payload;
        },

    },

    actions: {

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

        GET_SERVICE_ENTRY({commit}, payload) {
            axios.get(`http://127.0.0.1:8000/api/service/${payload}`)
            .then(response => {
                commit('SET_SERVICE_ENTRY_TO_STATE', response.data.data);
            })
        },

    },
}