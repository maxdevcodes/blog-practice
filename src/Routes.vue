<script>
import AppHome from "@/pages/AppHome.vue";
import AppBlog from '@/pages/AppBlog.vue';
import AppAbout from "@/pages/AppAbout.vue";
import AppContact from "@/pages/AppContact.vue";
import NotFound from "@/pages/NotFound.vue";
import SinglePost from "@/components/SinglePost.vue";
import AppAdminDashboard from '@/pages/AppAdminDashboard.vue';
import AddPost from '@/components/AddPost.vue';
import EditPost from '@/components/EditPost.vue';

const routes = [
    { path: "*", component: NotFound },
    { path: "/", component: AppHome },
    { path: "/blog", component: AppBlog, query: { page: 0 } },
    { path: "/about", component: AppAbout },
    { path: "/contact", component: AppContact },
    { path: "/post/:id", component: SinglePost },
    { path: "/admin", component: AppAdminDashboard },
    { path: "/admin/addPost", component: AddPost },
    { path: "/admin/editPost", component: EditPost}
];

export default routes;
</script>