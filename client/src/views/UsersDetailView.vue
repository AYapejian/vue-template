<template>
<section class="app-view f-col f-center">
    <h1>User Details</h1>
    <h4>Viewing user id: {{ currentUserId }}</h4>
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
    computed: {
        currentUserId() {
            return this.$route.params.userId;
        }
    },
    created() {
        // Need to dispatch to action to fetch user
    }
}
</script>

<style lang="postcss">
</style>
