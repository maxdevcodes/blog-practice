<template>
    <div>
        <h2>Manage Posts</h2>
        <router-link to="/admin/addPost">
            <button class="button-link">Add post</button>
        </router-link>
        <router-link to="/admin/editPost">
            <button class="button-link">Edit post</button>
        </router-link>
        <router-link to="/admin/deletePost">
            <button class="button-link">Delete post</button>
        </router-link>
        <router-link to="/login">
            <button @click="logout" class="button-link">Logout</button>
        </router-link>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("mockJWT");
        }
    },
};
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
}

.button-link {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 0 auto;
}
</style>