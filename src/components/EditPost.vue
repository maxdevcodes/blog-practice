<template>
    <div class="container">
        <div class="post" v-for="post in posts" :key="post.id">
            <h2 class="title">{{post.title}}</h2>
            <p class="summary">{{post.summary}}</p>
            <button class="btn" @click="editPost(post.id)">Edit</button>
        </div>
        <div class="page-navigation" v-if="pages > 0">
            <router-link v-for="page in pages" :key="page" :to="'/admin/editPost?page=' + page">
                <button class="page" @click="getPage(page - 1)">{{page}}</button>
            </router-link>
        </div>
        <div class="modal-container loader-container" v-if="isLoading">
            <span class="loader"></span>
        </div>
        <div class="modal-container" v-if="isSelected">
            <div class="edit-modal">
                <span class="close-btn" @click="cancelEdit"></span>
                <form action="#">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" v-model="selectedPost.title" />
                    <label for="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        cols="30"
                        rows="5"
                        v-model="selectedPost.summary"
                    ></textarea>
                    <label for="content">Content:</label>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        v-model="selectedPost.content"
                    ></textarea>
                    <button class="btn" @click.prevent="submitEdit" type="submit">Submit edit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            pages: 0,
            selectedPost: {},
            isSelected: false,
            isLoading: false,
            response: null,
        };
    },
    created() {
        let page = this.$route.query.page <= 1 ? 0 : this.$route.query.page - 1;
        fetch("/api/posts/?page=" + page)
            .then(function (response) {
                return response.json();
            })
            .then((payload) => {
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
        editPost(id) {
            fetch("/api/posts/" + id)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.selectedPost = payload;
                    this.isSelected = true;
                });
        },
        cancelEdit() {
            this.isSelected = false;
            this.selectedPost = {};
        },
        submitEdit() {
            this.isLoading = true;

            fetch("/api/post/", { method: "PUT", body: JSON.stringify(this.selectedPost) }).then((response) => {

                return response.json();
            }).then((payload) => {
                this.isLoading = false;
                this.isSelected = false;
                this.selectedPost = {};
                this.response = payload.res;

                let page = this.$route.query.page <= 1 ? 0 : this.$route.query.page - 1;
                this.getPage(page);
            });
        },
        getPage(page) {
            fetch("/api/posts/?page=" + page)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.posts = payload;
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.post {
    margin-bottom: 20px;
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

    .edit-modal {
        width: 500px;
        background: #fff;
        text-align: center;
        padding: 40px 30px;
        position: relative;

        .close-btn {
            position: absolute;
            top: 15px;
            right: 30px;
            display: inline-block;
            width: 30px;
            height: 30px;
            cursor: pointer;
            border: 1px solid #000;
            border-radius: 100%;

            &::after,
            &::before {
                content: "";
                display: inline-block;
                width: 22px;
                height: 2px;
                background: #000;
                transform: rotate(45deg);
                position: absolute;
                top: 13px;
                left: 3px;
            }

            &::before {
                transform: rotate(-45deg);
            }
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            max-width: 500px;
            margin: 0 auto;
            padding: 15px 0;

            label {
                margin-bottom: 5px;
            }

            input,
            textarea {
                width: 100%;
                margin-bottom: 25px;
            }
        }
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

.loader {
    &:after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #41b883;
        border-radius: 100%;
        animation: rotatingLoader 1s linear infinite;
        transform-origin: 40px 40px;
        position: relative;
        left: -25px;
        z-index: 9999;
    }
}

@keyframes rotatingLoader {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader-container {
    z-index: 9;
}
</style>