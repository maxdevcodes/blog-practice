<script>
import AppHome from "@/pages/AppHome.vue";
import AppAbout from "@/pages/AppAbout.vue";
import AppContact from "@/pages/AppContact.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
    { path: "*", component: NotFound },
    { path: "/", component: AppHome },
    { path: "/about", component: AppAbout },
    { path: "/contact", component: AppContact },
];

export default routes;
</script>