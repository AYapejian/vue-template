import Vue         from 'vue';
import Vuex        from 'vuex';
import users       from './modules/users';
import currentUser from './modules/current-user';
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{ users, currentUser },
    strict: true,
    mutations:{
        SET_USERS(state, users) {
            state.users = users;
        }
    }
});
