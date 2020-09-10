<template>
    <div>
        <h1 class="title">{{post.title}}</h1>
        <p class="content">{{post.content}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
        };
    },
    created() {
        let promise = fetch("/api/posts/" + this.$route.params.id, { method: "GET" });
        promise.then((response) => {
            this.post = JSON.parse(response._bodyText);
        });
    },
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 32px;
    margin-bottom: 10px;
}

.content {
    padding: 20px 0;
}
</style>