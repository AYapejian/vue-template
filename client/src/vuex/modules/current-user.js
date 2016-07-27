import { USER_AUTHENTICATED   } from '../mutation-types.js';
import { USER_DEAUTHENTICATED } from '../mutation-types.js';
import { AUTHENTICATION_ERROR } from '../mutation-types.js';

const _internals = {
    getApiToken: ()    => JSON.parse(window.localStorage.getItem('vueApiToken')) || null,
    delApiToken: ()    => window.localStorage.removeItem('vueApiToken'),
    setApiToken: token => window.localStorage.setItem('vueApiToken', JSON.stringify(token)),
};

// initial state
const state = {
    authError:       {},
    isAuthenticated: false,
    apiToken:        _internals.getApiToken(),
    user:            {},
    settings:        {}
}

// mutations
const mutations = {
    [USER_AUTHENTICATED] (state, { user, apiToken }) {
        state.user     = user;
        state.apiToken = apiToken;
        state.authError = {};

        _internals.setApiToken(apiToken);
    },
    [USER_DEAUTHENTICATED] (state, user) {
        state.user            = null;
        state.isAuthenticated = false;
        state.apiToken        = '';
        state.settings        = '';

        _internals.delApiToken();
    },
    [AUTHENTICATION_ERROR] (state, error) {
        console.warn('Authentication Error');
        console.dir(error);
        state.authError = error;
    }
}

export default {
    state,
    mutations
}
