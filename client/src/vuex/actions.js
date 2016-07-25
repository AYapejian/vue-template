import Vue from 'vue';
import * as types from './mutation-types'

export const loadUsers = ({ dispatch }, product) => {
    Vue.http
        .get('/api/users')
        .then(response => dispatch(types.SET_USERS, response.json()));
}
