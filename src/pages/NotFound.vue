<template>
    <div class="container">
        <h1>404, page not found</h1>
        <button class="btn" @click="$router.go(-1)">Go back</button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;
}
</style>