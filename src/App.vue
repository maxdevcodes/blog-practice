<template>
    <div id="app">
        <app-header></app-header>
        <!-- TODO: Refactor pages and components individual sections to a general section wrapping the router-view -->
        <section class="content">
            <router-view></router-view>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";
import AppHome from "@/pages/AppHome.vue";

export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        AppHeader,
        AppFooter,
        AppHome,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Open Sans", sans-serif;
    background: rgb(241, 241, 241);
}

a {
    text-decoration: none;
    color: #41b883;
}

.highlighted {
    color: #41b883;
}

section.content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 60px;

    & > div {
        width: 100%;
    }
}
</style>