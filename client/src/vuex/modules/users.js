import { SET_USERS } from '../mutation-types.js';

// initial state
const state = {
  users: []
}

// mutations
const mutations = {
  [SET_USERS] (state, users) {
    state.users = users
  }
}

export default {
  state,
  mutations
}
