<template>
    <div class="container">
        <h2>Add post</h2>
        <form action="#" @submit.prevent="submitForm">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" v-model="title" />
            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" cols="30" rows="5" v-model="summary"></textarea>
            <label for="content">Content:</label>
            <textarea name="content" id="content" cols="30" rows="20" v-model="content"></textarea>
            <button class="btn" type="submit">Add</button>
        </form>
        <router-link to="/admin" class="link">Go back</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: null,
            summary: null,
            content: null,
        };
    },
    methods: {
        submitForm() {
            console.log("form submitted", this.title);

            fetch("/api/post", {
                method: "POST",
                body: JSON.stringify({
                    title: this.title,
                    summary: this.summary,
                    content: this.content,
                }),
            }).then(function (response) {
                console.log("response", response);
                // TO-DO: Handle response for post success
            });
        },
    },
};
</script>

<style lang="scss" scoped>
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

    .btn {
        background: #41b883;
        border-radius: 5px;
        border: none;
        color: white;
        cursor: pointer;
        padding: 10px 15px;
        margin: 0 auto;
    }
}
</style>