import Vue         from 'vue';
import VueResource from 'vue-resource';
import Vuex        from 'vuex';
import VueRouter   from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
import App from './src/App.vue';

import LoginView     from './src/views/LoginView';
import HomeView      from './src/views/HomeView';
import SettingsView  from './src/views/SettingsView';
import DashboardView from './src/views/DashboardView';

import store from './src/vuex/store';

function requireAuth (route, redirect, next) {
    if (store.state.currentUser.apiToken && store.state.currentUser.apiToken !== '') {
        next();
    } else {
        redirect({
            path: '/login',
            query: { redirect: route.fullPath }
        });
    }
}

const router = new VueRouter({
    mode:            'history',
    base:            __dirname,
    linkActiveClass: 'pure-menu-selected',
    routes:          [{
        path:      '/login',
        component: LoginView
    },
    {
        path: '/logout',
        beforeEnter (route, redirect) {
            // TODO: Move this into a route and call logout action
            store.dispatch('USER_DEAUTHENTICATED')
            redirect('/login');
        }
    },
    {
        path:        '/',
        component:   HomeView,
        beforeEnter: requireAuth
    },
    {
        path:        '/dashboard',
        component:   DashboardView,
        beforeEnter: requireAuth
    },
    {
        path:        '/settings',
        component:   SettingsView,
        beforeEnter: requireAuth
    }]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
