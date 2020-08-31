<template>
    <div id="app">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            msg: "Hola",
        };
    },
};
</script>

<style lang="scss" scoped>
#app {
    width: 600px;
    height: 200px;
    background: rgb(92, 92, 92);
}
</style>