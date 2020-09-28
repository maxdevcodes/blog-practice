<template>
    <div>
        <form action="#" @submit="authenticate">
            <label for="user">Username:</label>
            <input class="fullwidth-input" type="text" name="user" id="user">
            <label for="password">Password:</label>
            <input class="fullwidth-input" type="password" name="password" id="password">
            <button class="btn" type="submit">Login</button>
        </form>
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
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 300px;
    margin: 0 auto;

    .fullwidth-input {
        width: 100%;
        margin-bottom: 15px;
    }
    input {
        width: auto;
        margin: 10px auto;
    }
}

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