<template>
<section class="app-view home-view">
    <h1 class="view-title">Home</h1>
    <img :src="logoSrc">
</section>
</template>

<script>
export default {
    name: 'HomeView',
    data () {
        return {
            logoSrc: require('../assets/logo.png')
        }
    }
}
</script>

<style lang="scss">
.home-view > * {
    max-width: 1080px;
    margin:    0 auto;
}
</style>
