import Vue from 'vue';
import * as types from './mutation-types'

export const loadUsers = ({ dispatch }, product) => {
    Vue.http
        .get('/api/users')
        .then(response => dispatch(types.SET_USERS, response.json()));
}

export const login = ({ dispatch }, credentials) => {
    return Vue.http.post('/api/auth/login', credentials)
        .then(response => {
            const user     = response.data.user;
            const apiToken = response.headers['x-auth-token'];

            dispatch(types.USER_AUTHENTICATED, { user, apiToken });
            return user;
        })
        .catch(err => {
            dispatch(types.AUTHENTICATION_ERROR, err);
            throw err;
        });
}

export const logout = ({ dispatch }) => {
    return Vue.http.delete('/api/auth/login')
        .then(response => {
            dispatch(types.USER_DEAUTHENTICATED);
        })
        .catch(err => {
            dispatch(types.AUTHENTICATION_ERROR, err);
        });
}
