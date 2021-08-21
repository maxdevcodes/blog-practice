<template>
    <div class="single-post">
        <div>
            <div class="post-container">
                <h1 class="title">{{ post.title }}</h1>
                <div class="content">
                    <p>{{ post.content }}</p>
                </div>
                <div class="post-tags">
                    <router-link :to="'/tags/' + tag.path" class="post-tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</router-link>
                </div>
            </div>
            <div class="comments-container">
                <div class="comment" v-for="comment in comments" :key="comment.id">
                    <span class="comment-author">{{ comment.author }}</span>
                    <span class="comment-date">{{ new Date(comment.date).toDateString() }}</span>
                    <p class="comment-content">{{ comment.comment }}</p>
                    <div class="comment-buttons">
                        <button class="simple-btn" @click="replyComment(comment.id, comment.author, comment.comment)">Reply</button>
                    </div>
                    <div
                        class="child-comment"
                        v-for="child in comment.children"
                        :key="child.id"
                    >
                        <span class="comment-response">In response to <strong>{{getParent(child)}}</strong></span>
                        <span class="comment-author">{{ child.author }}</span>
                        <span class="comment-date">{{ new Date(child.date).toDateString() }}</span>
                        <p class="comment-content">{{ child.comment }}</p>
                        <div class="comment-buttons">
                            <button class="simple-btn" @click="replyComment(child.id, child.author, child.comment)">Reply</button>
                        </div>
                    </div>
                </div>
                <form class="add-comment-form" id="comment-form" action="#">
                    <div class="reply-container" v-if="replyHelper.author">
                        <span class="comment-helper">Replying to: <strong>{{ replyHelper.author }}</strong></span>
                        <p class="reply-excerpt">{{ replyHelper.comment }}</p>
                        <span class="cancel-reply"><button class="no-style-btn" @click="cancelReplyComment()"><img src="src/assets/images/close.png" alt="Cancel reply icon" srcset=""></button></span>
                    </div>
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
            replyHelper: {
                author: '',
                comment: null,
            },
            isPageLoaded: false,
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

            let promiseComments = this.fetchComments();
            promiseComments.then(payload => this.populateComments(payload));

            let promiseTags = this.fetchTags();
            // Populate tags
            promiseTags.then(payload => this.tags = payload);

            Promise.all([promise, promiseComments, promiseTags]).then(() => {
                this.asyncLoad();
            });
            
        });
    },
    methods: {
        asyncLoad() {
            this.$parent.$emit('async-load', true);
        },
        getParent(child) {
            var parent = this.comments.find(elem=>{
                return (elem.id == child.replyID ? elem : false)
            });
            return parent.author;
        },
        fetchComments() {
            return fetch("/api/comments/" + this.post.id)
                .then(function (response) {
                    return response.json();
                });
        },
        populateComments(comments) {
            this.comments = comments.filter((comment) => {
                return comment.replyID == null ? comment : false;
            });

            this.populateChildren(this.comments, comments);
        },
        fetchTags() {
            // If the post has no tags, send empty promise
            if (Boolean(this.post.tags) && this.post.tags.length > 0) {
                return fetch("/api/tags/" + JSON.stringify(this.post.tags)).then(
                    function (response) {
                        return response.json();
                    }
                );
            }else {
                return Promise.resolve();
            }
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
            this.newComment.date = new Date();

            if (!this.newComment.hasOwnProperty('replyID')) {
                this.newComment.replyID = null;
            }

            if (this.replyHelper.author) {
                this.replyHelper.author = '';
                this.replyHelper.comment = null;
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
        replyComment(parentID, parentAuthor, parentComment) {
            this.newComment.replyID = parentID;
            this.replyHelper.author = parentAuthor;
            this.replyHelper.comment = parentComment;
            // To-do: add extract of comment to replyHelper
            document.getElementById('comment-form').scrollIntoView();
        },
        cancelReplyComment() {
            this.newComment = {};
            this.replyHelper = {
                author: '',
                comment: null,
            };
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
    margin-bottom: 15px;
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

    .comment-content {
        white-space: pre;
    }
}

.comment-buttons {
    display: flex;
    margin-top: 10px;
}

.simple-btn {
    background: none;
    border: none;
    cursor: pointer;
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
    margin-bottom: 5px;
    font-weight: bold;
}

.comment-date {
    display: block;
    font-size: 14px;
    margin-bottom: 12px;
}

.reply-container {
    background: #eee;
    padding: 15px 10px;
    font-size: 14px;
    position: relative;
}

.cancel-reply {
    position: absolute;
    right: 10px;
    top: 10px;

    img {
        max-width: 18px;
    }
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

    label {
        margin-bottom: 5px;
    }

    input, textarea {
        margin-bottom: 15px;
    }
}


.comment-response {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
}

.hidden {
    display: none;
}

</style>