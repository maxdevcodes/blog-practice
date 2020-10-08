<template>
    <div class="single-post">
        <div class="post-container">
            <h1 class="title">{{ post.title }}</h1>
            <p class="content">{{ post.content }}</p>
        </div>
        <div class="comments-container">
            <div class="comment" v-for="comment in comments" :key="comment.id">
                <span class="comment-author">{{ comment.author }}</span>
                <p class="comment-content">{{ comment.comment }}</p>
                <div
                    class="child-comment"
                    v-for="child in comment.children"
                    :key="child.id"
                >
                    <span class="comment-author">{{ child.author }}</span>
                    <p class="comment-content">{{ child.comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
            comments: [],
        };
    },
    created() {
        let promise = fetch("/api/posts/" + this.$route.params.id).then(
            function (response) {
                return response.json();
            }
        );
        promise.then((payload) => {
            this.post = payload;
            this.fetchComments();
        });
    },
    methods: {
        fetchComments() {
            fetch("/api/comments/" + this.post.id)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.comments = payload.filter((comment) => {
                        return comment.replyID == null ? comment : false;
                    });

                    this.comments.forEach((comment) => {
                        comment.children = payload.filter(function (child) {
                            return child.replyID == comment.id ? child : false;
                        }, comment);
                    });
                });
        },
        isChild(comment) {
            return comment.replyID != null ? true : false;
        },
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

.post-container {
    margin-bottom: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 30px 40px;
}

.comments-container {
    padding: 20px 0;
    border-radius: 10px;
    background: #fff;
    padding: 30px 40px;
}

.comment {
    margin-bottom: 35px;
    padding-bottom: 35px;
    border-bottom: 1px solid #000;

    &:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
}

.child-comment {
    margin-top: 30px;
    margin-left: 30px;
    padding-bottom: 35px;
    border-bottom: 1px solid #000;

    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }
}

.comment-author {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
}
</style>