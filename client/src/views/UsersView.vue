<template>
<section class="app-view f-col f-center">
    <h1>Users</h1>

    <!-- TODO: Break this out to a UsersTable Component and a more general EntityTable component -->
    <!-- Or find a nice one already made on awesome-vue ;o)                                      -->
    <table class="pure-table pure-table-horizontal">
        <thead>
            <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>

        <tbody v-for="user in users">
            <router-link class="pure-menu-item" tag="tr" :to="{ name: 'usersDetail', params: { userId: user.userId }}">
                <td>{{ user.userId    }}</td>
                <td>{{ user.email     }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName  }}</td>
            </router-link>
        </tbody>
    </table>
</section>
</template>

<script>
import { loadUsers } from '../vuex/actions.js';
import { users }     from '../vuex/getters.js';

// https://github.com/vuejs/vuex/blob/master/examples/shopping-cart/components/ProductList.vue
export default {
    name: 'UsersView',
    vuex: {
        getters: {
            users: ({ users }) => users
        },
        actions: { loadUsers }
    },
    created() {
        this.loadUsers();
    },
    methods: {
        onUserClick(user) {
            // TODO: Had to use router-link above but would rather use a click handler and notify
            // via DISPATCH for currently selected user ( could do stuff like add to list of latest viewed users, etc.. )
            // Need to figure out why router.go doesn't work here and change router-link elem back to normal tr
            // console.log(user.userId);
            // this.$router.go({ name: 'usersDetail', params: { userId: user.userId }});
        }
    }
}
</script>

<style lang="scss">
</style>
