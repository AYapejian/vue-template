import Vue  from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{ users },
    strict: true,
    mutations:{
        SET_USERS(state, users) {
            state.users = users;
        }
    }
});
