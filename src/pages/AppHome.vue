<template>
    <div>
        <h2 class="section-title">Check the latest posts</h2>
        <div class="latest-posts">
            <div class="post" v-for="post in posts" :key="post.id">
                <h2 class="title">{{post.title}}</h2>
                <p class="summary">{{post.summary}}</p>
                <router-link :to="'/post/' + post.id" tag="button" class="post-link">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import PostListing from "@/components/PostListing.vue";

export default {
    data() {
        return {
            posts: [],
        };
    },
    components: {
        PostListing,
    },
    created() {
        fetch("/api/latestPosts")
            .then(function (response) {
                return response.json();
            })
            .then((payload) => {
                this.posts = payload;
            });
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
}

.latest-posts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    .post {
        margin-right: 30px;

        &:last-of-type {
            margin-right: 0;
        }

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
}
</style>