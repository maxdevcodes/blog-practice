<template>
    <div>
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{post.title}}</h2>
            <p class="summary">{{post.summary}}</p>
            <router-link :to="'/post/' + post.id" tag="button" class="post-link">Read more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    created() {
        let promise = fetch("/api/posts/");
        promise.then((response) => {
            this.posts = JSON.parse(response._bodyText);
        });
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

    .post-link {
        background: #41b883;
        border-radius: 5px;
        border: none;
        color: white;
        padding: 10px 15px;
        cursor: pointer;
    }
}
</style>