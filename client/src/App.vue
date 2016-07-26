<template>
<div id="app">
    <app-nav></app-nav>

    <div id="app-content" class="content pure-g">

        <div class="pure-u-2-24 content-left"></div>

        <div class="pure-u-20-24 content-middle">
            <!-- <home-view></home-view> -->
            <router-view></router-view>
        </div>

        <div class="pure-u-2-24 content-right"></div>
    </div>
</div>
</template>

<script>
import AppNav   from './components/app/AppNav';
import store    from './vuex/store';

export default {
    store: store,
    components: { AppNav }
}
</script>

<style lang="postcss">
:root {
    @import '../_index.css';
}

body {
    color:            var(--themeColorBackgroundContrast);
    background-color: var(--themeColorBackground);
    padding-top:      55px;
}
</style>
