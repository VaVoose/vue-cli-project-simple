/*
import axios from 'axios';
import './mutation-types';
import { ALL_ADMINS, ALL_USERS, ALL_USERS_SUCCESS, UPDATE_USER } from './mutation-types';
const API_BASE = '<API-URL/api/vi>';

export const userActions = {
    allUsers ({commit}) {
        commit(ALL_USERS);
        axios.get(`${API_BASE}/users`).then(response => {
            commit(ALL_USERS_SUCCESS, response.data);
        })
    },
    userById ({commit}, payload) {
        commit(USER_BY_ID)
        // Fetch user by ID from API
        axios.get(`${API_BASE}/users/${payload}`).then(response => {
          commit(USER_BY_ID_SUCCESS, response.data)
        })
    },
    addUser ({commit}, payload) {
        commit(ADD_USER)
        // Create a new user via API
        axios.post(`${API_BASE}/users`, payload).then(response => {
          commit(ADD_USER_SUCCESS, response.data)
        })
    },
    updateUser ({commit}, payload) {
        commit(UPDATE_USER)
        // Update user via API
        axios.put(`${API_BASE}/users/${payload._id}`, payload).then(response => {
          commit(UPDATE_USER_SUCCESS, response.data)
        })
    },
    removeUser ({commit}, payload) {
        commit(REMOVE_USER)
        // Delete user via API
        axios.delete(`${API_BASE}/users/${payload}`, payload).then(response => {
          console.debug('response', response.data)
          commit(REMOVE_USER_SUCCESS, response.data)
        })
    }
}

export const adminActions = {
    allManufacturers ({commit}) {
      commit(ALL_ADMINS)
      // Fetch all admins from API
      axios.get(`${API_BASE}/admins`).then(response => {
        commit(ALL_ADMINS_SUCCESS, response.data)
      })
    }
  }
  */
