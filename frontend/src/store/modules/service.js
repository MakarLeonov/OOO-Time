import axios from 'axios'
import url from '@/url.js'
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
            axios.get(`${url}/api/repair_types`)
            .then(response => {
                commit('SET_REPAIR_TYPES_TO_STATE', response.data.data);
            })
        },

        ADD_REPAIR_TYPES({dispatch}, payload) {
            axios.post(payload)
            .then(response => {
                dispatch('GET_REPAIR_TYPES');
            })
        },

        EDIT_REPAIR_TYPES({dispatch}, payload) {
            axios.put(payload)
            .then(response => {
                dispatch('GET_REPAIR_TYPES');
            })
        },

        DELETE_REPAIR_TYPE({dispatch}, payload) {
            axios.delete(payload)
            .then(response => {
                dispatch('GET_REPAIR_TYPES');
            })
        },

        GET_SERVICE({commit}) {
            axios.get(`${url}/api/service`)
            .then(response => {
                commit('SET_SERVICE_TO_STATE', response.data.data);
            })
        },

        GET_SERVICE_ENTRY({commit}, payload) {
            axios.get(`${url}/api/service/${payload}`)
            .then(response => {
                commit('SET_SERVICE_ENTRY_TO_STATE', response.data.data);
            })
        },

        ADD_SERVICE_ENTRY({dispatch}, payload) {
            axios.post(payload)
            .then(response => {
                dispatch('GET_SERVICE');
            })
        },

        EDIT_SERVICE_ENTRY({dispatch}, payload) {
            axios.put(payload)
            .then(response => {
                dispatch('GET_SERVICE');
            })
        },

        DELETE_SERVICE_ENTRY({dispatch}, payload) {
            axios.delete(payload)
            .then(response => {
                dispatch('GET_SERVICE');
            })
        },

    },
}