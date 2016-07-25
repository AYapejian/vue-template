import Vue         from 'vue';
import VueResource from 'vue-resource';
import Vuex        from 'vuex';
Vue.use(VueResource);
Vue.use(Vuex);
import App from './src/App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
