<template>
<nav class="demo">
    <router-link class="brand" :to="{ name: 'home' }">
        <span>Pure Vue 2.0</span>
    </router-link>

    <!-- responsive-->
    <input id="bmenub" type="checkbox" class="show">
    <label for="bmenub" class="burger pseudo button">Menu</label>

    <div class="menu" v-if="isAuthenticated">
        <router-link class="pseudo button" :to="{ name: 'home'}" exact>Home</router-link>
        <router-link class="pseudo button" :to="{ name: 'dashboard'}">Dashboard</router-link>
        <router-link class="pseudo button" :to="{ name: 'users'}" exact>User</router-link>
        <router-link class="pseudo button" :to="{ name: 'settings'}">Settings</router-link>
        <router-link class="pseudo icon button" :to="{ name: 'logout'}">
            <i class="mdi mdi-logout-variant"></i>
        </router-link>

    </div>
</nav>
</template>

<script>
import { isAuthenticated } from '../../vuex/getters';

export default {
    vuex: {
        getters: {
            isAuthenticated
        }
    },
    data () {
        return {
            test: 123
        }
    }
}
</script>

<style lang="scss">
</style>
