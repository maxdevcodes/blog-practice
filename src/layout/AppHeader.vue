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
    background: #fffae7;
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
</style>