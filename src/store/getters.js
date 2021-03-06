//Functions that all components can use to get data from the store

export const userGetters = {
    allUsers: function(state) {
        return state.users;
    },

    userById: (state, getters) => id => {
        if (getters.allUsers.length > 0) {
            return getters.allUsers.filter(p => p._id === id)[0];
        }
        else {
            return state.users;
        }
    }
}

export const adminGetters = {
    allAdmins: state => state.admins,
}
