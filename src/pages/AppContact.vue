<template>
    <div>
        <form action="#">
            <label for="name">Name:</label>
            <input class="fullwidth-input" type="text" name="name" id="name">
            <label for="message">Message:</label>
            <textarea class="fullwidth-input" name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 500px;

    .fullwidth-input {
        width: 100%;
        margin-bottom: 15px;
    }
    input[type="submit"] {
        width: auto;
        margin: 0 auto;
    }
}
</style>