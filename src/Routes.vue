<script>
import AppHome from "@/pages/AppHome.vue";
import AppBlog from '@/pages/AppBlog.vue';
import AppAbout from "@/pages/AppAbout.vue";
import AppContact from "@/pages/AppContact.vue";
import NotFound from "@/pages/NotFound.vue";
import SinglePost from "@/components/SinglePost.vue";

const routes = [
    { path: "*", component: NotFound },
    { path: "/", component: AppHome },
    { path: "/blog", component: AppBlog, query: { page: 0 } },
    { path: "/about", component: AppAbout },
    { path: "/contact", component: AppContact },
    { path: "/post/:id", component: SinglePost },
];

export default routes;
</script>