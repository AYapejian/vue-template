<template>
<section class="app-view f-col f-center">
    <h1>Dashboard</h1>

    <!-- TODO: Break this out to a UsersTable Component and a more general EntityTable component -->
    <!-- Or find a nice one already made on awesome-vue ;o)                                      -->
    <table class="primary">
        <thead>
            <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>

        <tbody v-for="user in users">
            <tr>
                <td>{{ user.userId    }}</td>
                <td>{{ user.email     }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName  }}</td>
            </tr>
        </tbody>
    </table>
</section>
</template>

<script>
import { loadUsers } from '../vuex/actions.js';
import { users }     from '../vuex/getters.js';

// https://github.com/vuejs/vuex/blob/master/examples/shopping-cart/components/ProductList.vue
export default {
    name: 'DashboardView',
    vuex: {
        getters: {
            users: ({ users }) => users
        },
        actions: { loadUsers }
    },
    created() {
        this.loadUsers();
    }
}
</script>

<style lang="scss">
</style>
