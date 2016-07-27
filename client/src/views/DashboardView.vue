<template>
<section class="app-view">
    <h1 class="view-title">Dashboard</h1>

    <v-data-table :headers="userHeaders" :items="users"></v-data-table>
</section>
</template>

<script>
import VDataTable    from '../components/_common/VDataTable';
import { loadUsers } from '../vuex/actions.js';
import { users }     from '../vuex/getters.js';

// https://github.com/vuejs/vuex/blob/master/examples/shopping-cart/components/ProductList.vue
export default {
    name:       'DashboardView',
    components: { VDataTable },
    vuex: {
        getters: { users },
        actions: { loadUsers }
    },
    data() {
        return {
            userHeaders: [
                { name: 'User ID',    prop: 'userId'    },
                { name: 'Email',      prop: 'email'     },
                { name: 'First Name', prop: 'firstName' },
                { name: 'Last Name',  prop: 'lastName'  }
            ]
        };
    },
    created() {
        this.loadUsers();
    }
}
</script>

<style lang="scss">
</style>
