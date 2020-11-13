<template>
    <div class="single-post">
        <div class="post-container">
            <h1 class="title">{{ post.title }}</h1>
            <div class="content">
                <p>{{ post.content }}</p>
            </div>
            <div class="post-tags">
                <a :href="tag.path" class="post-tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</a>
            </div>
        </div>
        <div class="comments-container">
            <div class="comment" v-for="comment in comments" :key="comment.id">
                <span class="comment-author">{{ comment.author }}</span>
                <p class="comment-content">{{ comment.comment }}</p>
                <div class="comment-buttons">
                    <button class="simple-btn" @click="replyComment(comment.id)">Reply</button>
                </div>
                <div
                    class="child-comment"
                    v-for="child in comment.children"
                    :key="child.id"
                >
                    <span class="comment-response">In response to <strong>{{getParent(child)}}</strong></span>
                    <span class="comment-author">{{ child.author }}</span>
                    <p class="comment-content">{{ child.comment }}</p>
                    <div class="comment-buttons">
                        <button class="simple-btn" @click="replyComment(child.id)">Reply</button>
                    </div>
                </div>
            </div>
            <form class="add-comment-form" id="comment-form" action="#">
                <!-- TO-DO: add reply to HTML elem to indicate reply (maybe add extract of comment) -->
                <label for="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="newComment.name"
                />
                <label for="comment">Comment:</label>
                <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    v-model="newComment.comment"
                ></textarea>
                <button class="btn" type="button" @click="postComment()">
                    Post comment
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {},
            comments: [],
            newComment: {},
            tags: [],
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
            this.fetchTags();
        });
    },
    methods: {
        getParent(child) {
            var parent = this.comments.find(elem=>{
                return (elem.id == child.replyID ? elem : false)
            });
            return parent.author;
        },
        fetchComments() {
            fetch("/api/comments/" + this.post.id)
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    this.comments = payload.filter((comment) => {
                        return comment.replyID == null ? comment : false;
                    });

                    this.populateChildren(this.comments, payload);
                });
        },
        fetchTags() {
            fetch("/api/tags/" + JSON.stringify(this.post.tags)).then(
                function (response) {
                    return response.json();
                }
            ).then((payload) => {
                this.tags = payload;
            });
        },
        populateChildren(commentsArray, rawArray) {
                commentsArray.forEach(comment => {
                    comment.children = rawArray.filter(function (child) {
                        return child.replyID == comment.id ? child : false;
                    }, comment);
                    this.populateChildren(comment.children, rawArray);
                });
        },
        isChild(comment) {
            return comment.replyID != null ? true : false;
        },
        postComment() {
            this.newComment.postID = this.post.id;
            if (!this.newComment.hasOwnProperty('replyID')) {
                this.newComment.replyID = null;
            }
            
            fetch("/api/comments/", {
                method: "POST",
                body: JSON.stringify(this.newComment),
            })
                .then(function (response) {
                    return response.json();
                })
                .then((payload) => {
                    console.log("response", payload);
                    this.newComment = {};
                    this.fetchComments();
                });
        },
        replyComment(parentID) {
            this.newComment.replyID = parentID;
            document.getElementById('comment-form').scrollIntoView();
        }
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

.comment-buttons {
    display: flex;
    margin-top: 10px;
}

.simple-btn {
    background: none;
    border: none;
    color: #25835a;
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

.btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;
}

.add-comment-form {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-top: 20px;
}

.comment-response {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
}
</style>