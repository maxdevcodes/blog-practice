<template>
    <div>
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{post.title}}</h2>
            <p class="summary">{{post.summary}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 0,
                    title: "Post #0",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 1,
                    title: "Post #1",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 2,
                    title: "Post #2",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 3,
                    title: "Post #3",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
                {
                    id: 4,
                    title: "Post #4",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rutrum dui, vitae finibus nisi interdum sit amet.",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>

.post {
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(66, 66, 66);

    .title {
        margin-bottom: 10px;
    }

    .summary {
        margin-bottom: 15px;
    }
}
</style>