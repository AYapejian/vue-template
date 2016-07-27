<template>
    <section class="app-view f-col f-center">
        <h1>Login</h1>

        <form class="pure-form pure-form-aligned" v-on:submit.prevent="onSubmitLogin(email, pass)">
            <fieldset>
                <div class="pure-control-group">
                    <label for="name">Email Address</label>
                    <input id="name" type="text" placeholder="Email" v-model="email">
                </div>

                <div class="pure-control-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Password" v-model="pass">
                </div>


                <div class="pure-controls">
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </div>
            </fieldset>

            <p v-show="error.hasError" class="error">{{ error.message }}</p>
        </form>
    </section>
</template>

<script>
import { login } from '../vuex/actions.js';

export default {
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

<style lang="postcss">
:root {
    @import '../../_index.css';
}

.pure-form {
    & input {
        color: var(--themeColorBackground);
    }
}
</style>
