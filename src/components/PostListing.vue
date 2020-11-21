<template>
    <div ref="blog">
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{post.title}}</h2>
            <p class="summary">{{post.summary}}</p>
            <router-link :to="'/post/' + post.id" tag="button" class="post-link">Read more</router-link>
        </div>
        <div class="page-navigation" v-if="pages > 0">
            <router-link v-for="page in pages" :key="page" :to="'/blog?page=' + page">
                <button class="page" @click="getPage(page - 1)">{{page}}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            pages: 0,
        };
    },
    created() {
        console.log(this.$route);

        let page = this.$route.query.page <= 1 ? 0 : this.$route.query.page - 1;
        console.log("page", page);

        let promise = fetch("/api/posts?page=" + page).then(
            function (response) {
                return response.json();
            }
        );
        promise.then((payload) => {
            this.posts = payload;
        });

        fetch("/api/postsSize/")
            .then(function (response) {
                return response.json();
            })
            .then((payload) => {
                this.pages = payload;
            });
    },
    methods: {
        getPage(page) {
            fetch("/api/posts?page=" + page)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    console.log(payload);
                    this.posts = payload;
                    window.scrollTo(0, 0);
                });
        },
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

.page-navigation {
    display: flex;
    justify-content: center;
    padding: 8px 0;

    .page {
        background: #41b883;
        border: none;
        border-radius: 4px;
        color: #fff;
        padding: 10px 14px;
        margin-right: 5px;
    }
}
</style>