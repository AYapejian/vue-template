import Vue         from 'vue';
import VueResource from 'vue-resource';
import Vuex        from 'vuex';
import VueRouter   from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
import App from './src/App.vue';

import HomeView      from './src/views/HomeView';
import SettingsView  from './src/views/SettingsView';
import DashboardView from './src/views/DashboardView';

const router = new VueRouter({
    mode:            'history',
    base:            __dirname,
    linkActiveClass: 'pure-menu-selected',
    routes:          [{
        path:      '/',
        component: HomeView
    },
    {
        path:      '/dashboard',
        component: DashboardView
    },
    {
        path:      '/settings',
        component: SettingsView
    }]
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
