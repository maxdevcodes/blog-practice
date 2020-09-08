import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './Routes.vue'

Vue.use(VueRouter);

const router = new VueRouter({routes});

const app = new Vue({
    name: "app",
    router,
    render: h => h(App)
}).$mount("#app");