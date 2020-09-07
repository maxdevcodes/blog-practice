<template>
    <div id="app">
        <app-header></app-header>
        <app-home></app-home>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader.vue';
import AppFooter from '@/layout/AppFooter.vue';
import AppHome from '@/layout/AppHome.vue';

export default {
    name: "app",
    data() {
        return {
        };
    },
    components: {
        AppHeader,
        AppFooter,
        AppHome
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
}

.highlighted {
    color: #41B883;
}
</style>