import Vue from 'vue';
import App from './App.vue';

console.log(App)

const app = new Vue({
    name: "app",
    render: h => h(App)
}).$mount("#app");