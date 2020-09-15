<template>
    <header>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/blog">Blog</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
        <router-link to="/admin" class="admin-btn">Admin</router-link>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #373430;
}

ul {
    display: flex;
    list-style: none;
}

li {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
}

.admin-btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin-left: 15px;
}
</style>