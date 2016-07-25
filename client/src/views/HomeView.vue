<template>
<section class="app-view f-col f-center">
    <img :src="logoSrc">
    <h1>{{ msg }}</h1>

    <ul>
        <li v-for="user in users">
            {{ user.email }}
        </li>
    </ul>
</section>
</template>

<script>
import { loadUsers } from '../vuex/actions.js';
import { users }     from '../vuex/getters.js';

// https://github.com/vuejs/vuex/blob/master/examples/shopping-cart/components/ProductList.vue
export default {
    vuex: {
        getters: {
            users: ({ users }) => users
        },
        actions: { loadUsers }
    },
    created() {
        this.loadUsers();
    },
    data () {
        return {
            logoSrc: require('../assets/logo.png'),
            msg:     'Pure Vue 2.0'
        }
    }
}
</script>

<style lang="postcss">
</style>
