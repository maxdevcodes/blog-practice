<template>
    <div>
        <div class="post-container">
            <p class="title"></p>
            <div class="content">
                <p></p>
            </div>
            <div class="post-tags">
            </div>
        </div>
        <div class="comments-container">
            <div class="add-comment-form">
                <span class="placeholder_label"></span>
                <span class="placeholder_input"></span>
                <span class="placeholder_label"></span>
                <span class="placeholder_textarea"></span>
                <span class="btn"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// TO-DO: Refactor style
.title {
    margin-bottom: 10px;
}

.content {
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

@keyframes backgroundLoader {
    0% {
        background-position: 0%;
    }
    50% {
        // background-position: 100%;
    }
    100% {
        background-position: 100%;
    }
}

.title {
    background: linear-gradient(-45deg, #a7a7a7 30%, #ccc 50%, #ccc 70%, #a7a7a7 90%);
    background-size: 700% 100%;
    animation: backgroundLoader 1.75s linear infinite;
    width: 200px;
    height: 30px;
}

.content {
    background: #a7a7a7;
    background: linear-gradient(-45deg, #a7a7a7 30%, #ccc 50%, #ccc 70%, #a7a7a7 90%);
    background-size: 700% 100%;
    animation: backgroundLoader 1.75s linear infinite;
    height: 120px;
}

.post-tags {
    &::before, &::after {
        content: '';
        display: inline-block;
        background: #a7a7a7;
        background: linear-gradient(-45deg, #a7a7a7 30%, #ccc 50%, #ccc 70%, #a7a7a7 90%);
        background-size: 700% 100%;
        animation: backgroundLoader 1.75s linear infinite;
        height: 20px;
        width: 70px;  
        margin-right: 8px;  
    }
}

.btn {
    background: #7ebea1;
    background: linear-gradient(-45deg, #7ebea1 30%, #96dabb 50%, #96dabb 70%, #7ebea1 90%);
    background-size: 700% 100%;
    animation: backgroundLoader 1.75s linear infinite;
    width: 115px;
    height: 35px;
    cursor: default;
}

.add-comment-form {
    .placeholder_label {
        background: #a7a7a7;
        background: linear-gradient(-45deg, #a7a7a7 30%, #ccc 50%, #ccc 70%, #a7a7a7 90%);
        background-size: 700% 100%;
        animation: backgroundLoader 1.75s linear infinite;
        display: block;
        width: 50px;
        height: 20px;
        margin-bottom: 5px;
    }

    .placeholder_input, .placeholder_textarea {
        background: #a7a7a7;
        background: linear-gradient(-45deg, #a7a7a7 30%, #ccc 50%, #ccc 70%, #a7a7a7 90%);
        background-size: 700% 100%;
        animation: backgroundLoader 1.75s linear infinite;
        cursor: default;
        display: block;
        margin-bottom: 15px;
    }

    .placeholder_input {
        height: 20px;
    }

    .placeholder_textarea {
        height: 152px;
    }
}

</style>