import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './Routes.vue'
import server from '../backend/mockServer';

Vue.use(VueRouter);

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAuth)) {
        if (!localStorage.getItem("mockJWT")) {
            next({path: "/login", query: { redirect: to.fullPath }})
        }else {
            next();
        }
    }else {
        next();
    }
});

const app = new Vue({
    name: "app",
    router,
    render: h => h(App)
}).$mount("#app");