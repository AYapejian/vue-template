import Vue         from 'vue';
import VueResource from 'vue-resource';
import Vuex        from 'vuex';
import VueRouter   from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
import App from './src/App.vue';
import './_index.scss';

import LoginView       from './src/views/LoginView';
import HomeView        from './src/views/HomeView';
import SettingsView    from './src/views/SettingsView';
import DashboardView   from './src/views/DashboardView';
import UsersView       from './src/views/UsersView';
import UsersDetailView from './src/views/UsersDetailView';

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
    linkActiveClass: 'active',

    routes: [
    {
        path:        '/',
        name:        'home',
        component:   HomeView,
        beforeEnter: requireAuth
    },
    {
        path:        '/dashboard',
        name:        'dashboard',
        component:   DashboardView,
        beforeEnter: requireAuth
    },
    {
        path:        '/settings',
        name:        'settings',
        component:   SettingsView,
        beforeEnter: requireAuth
    },
    {
        path:        '/users',
        name:        'users',
        component:   UsersView,
        beforeEnter: requireAuth
    },
    {
        path:        '/users/:userId',
        name:        'usersDetail',
        component:   UsersDetailView,
        beforeEnter: requireAuth
    },
    {
        path:      '/login',
        name:      'login',
        component: LoginView
    },
    {
        path: '/logout',
        name: 'logout',
        beforeEnter (route, redirect) {
            // TODO: Move this into a route and call logout action
            store.dispatch('USER_DEAUTHENTICATED')
            redirect('/login');
        }
    }]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
