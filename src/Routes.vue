<script>
import AppHome from "@/pages/AppHome.vue";
import AppBlog from "@/pages/AppBlog.vue";
import AppAbout from "@/pages/AppAbout.vue";
import AppContact from "@/pages/AppContact.vue";
import NotFound from "@/pages/NotFound.vue";
import AppSingle from '@/pages/AppSingle.vue';
import AppAdminDashboard from "@/pages/AppAdminDashboard.vue";
import AddPost from "@/components/AddPost.vue";
import EditPost from "@/components/EditPost.vue";
import DeletePost from "@/components/DeletePost.vue";
import AppLogin from "@/components/AppLogin.vue";
import AppTags from '@/pages/AppTags.vue';

const routes = [
    { path: "*", component: NotFound },
    { path: "/", component: AppHome },
    { path: "/blog", component: AppBlog, query: { page: 0 } },
    { path: "/about", component: AppAbout },
    { path: "/contact", component: AppContact },
    { path: "/post/:id", component: AppSingle },
    { path: "/admin", name: "admin", component: AppAdminDashboard, meta: { isAuth: true } },
    { path: "/login", component: AppLogin },
    { path: "/admin/addPost", component: AddPost, meta: { isAuth: true } },
    { path: "/admin/editPost", component: EditPost },
    { path: "/admin/deletePost", component: DeletePost },
    { path: "/tags/:tag", component: AppTags , query: { tag: '' } },
];

export default routes;
</script>