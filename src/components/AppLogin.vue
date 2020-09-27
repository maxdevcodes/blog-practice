<template>
    <div>
        <form action="#">
            <input type="text" name="user" id="user">
            <input type="password" name="password" id="password">
            <button class="btn" type="submit">Login</button>
        </form>
        <button class="btn" @click="authenticate">Test auth</button>
    </div>
</template>

<script>
    export default {
        methods: {
            authenticate() {
                localStorage.setItem("mockJWT", true);
                this.$router.push("/admin");
            }
        },
    }
</script>

<style lang="scss" scoped>
.btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 0 auto;
}
</style>