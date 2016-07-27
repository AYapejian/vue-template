<template>
<section class="app-view f-col f-center">
    <img :src="logoSrc">
    <h1>{{ msg }}</h1>
</section>
</template>

<script>
export default {
    data () {
        return {
            logoSrc: require('../assets/logo.png'),
            msg:     'Pure Vue 2.0'
        }
    }
}
</script>

<style lang="postcss">
</style>
