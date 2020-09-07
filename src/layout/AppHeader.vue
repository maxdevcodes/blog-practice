<template>
    <header>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fffae7;
}

ul {
    display: flex;
    list-style: none;
}

li {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>