<template>
    <div>
        <h1 class="section-title">Select a post to delete</h1>
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{ post.title }}</h2>
            <p class="summary">{{ post.summary }}</p>
            <button class="btn" @click="deletePost(post.id)">Delete</button>
        </div>
        <div class="page-navigation" v-if="pages > 0">
            <router-link
                v-for="page in pages"
                :key="page"
                :to="'/admin/deletePost?page=' + page"
            >
                <button class="page" @click="getPage(page - 1)">
                    {{ page }}
                </button>
            </router-link>
        </div>
        <div class="modal-container loader-container" v-if="isLoading">
            <span class="loader"></span>
        </div>
        <div class="modal-container" v-if="isSelected">
            <div class="delete-modal">
                <p>
                    You are going to delete the post: {{ selectedPost.title }}
                </p>
                <button type="button" class="btn" @click="submitDelete">
                    Delete
                </button>
                <button
                    type="button"
                    class="btn btn-secondary"
                    @click="cancelDelete"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            selectedPost: null,
            isSelected: false,
            isLoading: false,
            pages: 0,
        };
    },
    created() {
        let page = this.$route.query.page > 0 ? this.$route.query.page - 1 : 0;
        fetch("/api/posts?page=" + page)
            .then(function (response) {
                return response.json();
            })
            .then((payload) => {
                this.posts = payload;
            });

        fetch("/api/postsSize")
            .then(function (response) {
                return response.json();
            })
            .then((payload) => {
                this.pages = payload;
            });
    },
    methods: {
        deletePost(id) {
            fetch("/api/posts/" + id)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.selectedPost = payload;
                    this.isSelected = true;
                });
        },
        getPage(page) {
            fetch("/api/posts?page=" + page)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.posts = payload;
                });
        },
        cancelDelete() {
            this.selectedPost = {};
            this.isSelected = false;
        },
        submitDelete() {
            // To-do: create the delete endpoint and handle it 
        }
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    font-size: 28px;
    margin-bottom: 20px;
}

.btn {
    background: #41b883;
    border-radius: 5px;
    border: 1px solid #41b883;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;

    &-secondary {
        background: #fff;
        border: 1px solid #41b883;
        color: #41b883;
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
        cursor: pointer;
        padding: 10px 14px;
        margin-right: 5px;
    }
}

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.349);
    display: flex;
    justify-content: center;
    align-items: center;

    .delete-modal {
        width: 500px;
        background: #fff;
        text-align: center;
        padding: 40px 30px;
        position: relative;

        p {
            margin-bottom: 15px;
        }
    }
}
</style>