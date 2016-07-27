<template>
<div id="app" >
    <app-nav></app-nav>

    <div class="view-wrapper flex one center grow">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import AppNav   from './components/app/AppNav';
import store    from './vuex/store';

export default {
    name:       'App',
    store:      store,
    components: { AppNav }
}
</script>

<style lang="scss">
body {
    padding-top: 55px;

    .view-wrapper section {
        max-width: 1440px;

        & > .view-title {
            text-align: center;
        }
    }
}
</style>
