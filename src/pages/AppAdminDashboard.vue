<template>
    <div>
        <h2>Manage Posts</h2>
        <router-link to="/admin/addPost">
            <button class="button-link">Add post</button>
        </router-link>
        <router-link to="/admin/editPost">
            <button class="button-link">Edit post</button>
        </router-link>
        <button class="button-link">Delete post</button>
    </div>
</template>

<script>
export default {};
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