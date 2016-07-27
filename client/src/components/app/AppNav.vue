<template>
<div class="app-header">
    <div class="app-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <router-link class="pure-menu-heading" to="/">Pure Vue 2.0</router-link>

        <ul class="pure-menu-list">
            <router-link class="pure-menu-item" tag="li" to="/" exact>
                <a class="pure-menu-link">Home</a>
            </router-link>
            <router-link class="pure-menu-item" tag="li" to="/dashboard">
                <a class="pure-menu-link">Dashboard</a>
            </router-link>
            <router-link class="pure-menu-item" tag="li" to="/users">
                <a class="pure-menu-link">Users</a>
            </router-link>
        </ul>

        <ul class="pure-menu-list menu-list-right">
            <router-link class="pure-menu-item" tag="li" to="/logout">
                <a class="pure-menu-link">Logout</a>
            </router-link>

            <router-link class="pure-menu-item" tag="li" to="/settings">
                <a class="pure-menu-link">Settings</a>
            </router-link>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            test: 123
        }
    }
}
</script>

<style lang="postcss">
:root {
    @import '../../../_index.css';
    /* TODO: This doesn't work with variables, docs say this should work `color(var(--themeColorBackground) shade(15%));` */
    --themeColorBackgroundAltDark:   color(#34495e shade(15%));
    --themeColorBackgroundAltDarker: color(#34495e shade(25%));
}

.app-header {
    & .pure-menu-fixed {
        padding:          .5em;
        color:            var(--themeColorBackgroundAltContrast);
        background-color: var(--themeColorBackgroundAltDark);
    }

    & .app-menu a {
        color: var(--themeColorBackgroundAltContrast);
    }

    & .menu-list-right {
        float: right;
    }
}
.pure-menu-active > .pure-menu-link, .pure-menu-link:hover, .pure-menu-link:focus {
    background-color: var(--themeColorBackgroundAltDarker);
}
.pure-menu-selected .pure-menu-link, .pure-menu-selected .pure-menu-link:visited {
    color: var(--themeColorBackgroundAlt);
}
</style>
