<template>
    <div>
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{ post.title }}</h2>
            <p class="summary">{{ post.summary }}</p>
            <router-link :to="'/post/' + post.id" tag="button" class="post-link">Read more</router-link>
        </div>
        <div class="page-navigation" v-if="pages > 0">
            <router-link
                v-for="page in pages"
                :key="page"
                :to="'/tags?page=' + page"
            >
                <button class="page" @click="getPage(page - 1)">
                    {{ page }}
                </button>
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
            tag: null,
        }
    },
    created () {
        console.log(this.$route.params.tag);
        fetch('/api/tags/posts/' + this.$route.params.tag)
        .then( function(response) {
            return response.json();
        })
        .then((payload) => {
            this.posts = payload;
        });
    },
    methods: {
        getPage(page) {
            // get paginated posts endpoint
        }
    },
};
</script>

<style lang="scss" scoped>
</style>