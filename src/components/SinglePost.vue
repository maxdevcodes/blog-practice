<template>
    <div class="single-post">
        <div class="post-container">
            <h1 class="title">{{ post.title }}</h1>
            <p class="content">{{ post.content }}</p>
        </div>
        <div class="comments-container">
            <div class="comment">
                <span class="comment-author">Author</span>
                <p class="comment-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum rerum architecto accusamus nobis. Ea libero voluptatem
                    quidem et totam aliquam!
                </p>
            </div>
            <div class="comment">
                <span class="comment-author">Author</span>
                <p class="comment-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum rerum architecto accusamus nobis. Ea libero voluptatem
                    quidem et totam aliquam!
                </p>
            </div>
        </div>
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
        let promise = fetch("/api/posts/" + this.$route.params.id).then(
            function (response) {
                return response.json();
            }
        );
        promise.then((payload) => {
            this.post = payload;
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

.comment-author {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
}
</style>