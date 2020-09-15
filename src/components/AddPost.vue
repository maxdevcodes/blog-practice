<template>
    <div class="container">
        <h2>Add post</h2>
        <form action="#">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" />
            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" cols="30" rows="5"></textarea>
            <label for="content">Content:</label>
            <textarea name="content" id="content" cols="30" rows="20"></textarea>
            <button class="btn" type="submit">Add</button>
        </form>
        <router-link to="/admin" class="link">Go back</router-link>
    </div>
</template>

<script>
export default {};
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