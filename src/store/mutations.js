import './mutation-types';
import { ADD_USER, ADD_USER_SUCCESS, ALL_ADMINS, ALL_ADMINS_SUCCESS, ALL_USERS, ALL_USERS_SUCCESS, REMOVE_USER, REMOVE_USER_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS, USER_BY_ID, USER_BY_ID_SUCCESS } from './mutation-types';

export const userMutations = {
    [ALL_USERS] (state) {
        //called when fetching users
        state.showLoader = true;
    },
    [ALL_USERS_SUCCESS] (state, payload) {
        //called when users are fetched
        state.showLoader = false;
        //updates state users
        state.users = payload;
    },

    [USER_BY_ID] (state) {
        state.showLoader = true;
    },
    [USER_BY_ID_SUCCESS] (state, payload) {
        state.showLoader = false;
        state.user= payload;
    },

    [ADD_USER]: (state) => {
        state.showLoader = true;    
    },
    [ADD_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.users.push(payload);
    },

    [UPDATE_USER]: (state) => {
        state.showLoader = true;
    },
    [UPDATE_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.users = state.products.map(p => {
            if (p._id === payload._id) {
                payload = {...payload, admin: state.admin.filter(x => x._id === payload.admin)[0]}
                return payload;
            }
            return p;
        })
    },

    [REMOVE_USER]: (state) => {
        state.showLoader = true;
    },
    [REMOVE_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        const index = state.users.findIndex(p => p._id === payload)
        console.debug('index', index);
        state.users.splice(index, 1);
    }
};

export const adminMutations = {
    [ALL_ADMINS] (state) {
        state.showLoader = true;
    },
    [ALL_ADMINS_SUCCESS] (state, payload) {
        state.showLoader = false;
        state.admins = payload;
    }
};