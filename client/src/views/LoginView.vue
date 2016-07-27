<template>
    <section class="app-view login-view">
        <h1 class="view-title">Login</h1>

        <form class="" v-on:submit.prevent="onSubmitLogin(email, pass)">
            <fieldset>
                <label for="email">
                    <input id="email" type="email" placeholder="Email" v-model="email">
                </label>

                <label for="password">
                    <input id="password" type="password" placeholder="Password" v-model="pass">
                </label>

                <button type="submit" class="button">Submit</button>
            </fieldset>

            <p v-show="error.hasError" class="error">{{ error.message }}</p>
        </form>
    </section>
</template>

<script>
import { login } from '../vuex/actions.js';

export default {
    name: 'LoginView',
    vuex: {
        actions: { login }
    },
    data () {
        return {
            email: '',
            pass:  '',
            error: { hasError: false, message: null }
        }
    },
    computed: {
        authError() {
            if (this.authenticationError && this.authenticationError.hasError) {
                return this.authenticationError.errorDetails;
            }
            return null;
        }
    },
    methods: {
        onSubmitLogin (email, password) {
            this.login({ email, password })
                .then(result => {
                    this.$router.replace(this.$route.query.redirect || '/')
                })
                .catch(err => {
                    this.error.hasError = true;
                    this.error.message = err.json().message;
                });
        }
    }
}
</script>

<style lang="scss">
.login-view > * {
    max-width: 400px;
    margin:    0 auto;
}
.login-view {
    input, .button { margin: 5px; }
    .button        { width: 100%; }
}
</style>
