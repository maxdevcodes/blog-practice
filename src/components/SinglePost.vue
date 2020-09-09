<template>
    <div>
        <h1 class="title">{{posts[id].title}}</h1>
        <p class="content">{{posts[id].content}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            posts: [
                {
                    id: 0,
                    title: "Post #0",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 1,
                    title: "Post #1",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 2,
                    title: "Post #2",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 3,
                    title: "Post #3",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 4,
                    title: "Post #4",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
            ],
        };
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