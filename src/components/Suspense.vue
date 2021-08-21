<template>
    <div>
        <div class="slot-wrapper" :class="isComponentLoaded ? '' : 'hidden'">
            <slot name="default" >Component loaded</slot>
        </div>
        <div class="slot-wrapper" :class="isComponentLoaded ? 'hidden' : '' ">
            <slot name="fallback" >Loading component</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "suspense",
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
            isComponentLoaded: false,
        };
    },
    created() {
        this.$on('async-load', this.asyncContentLoad)
    },
    methods: {
        asyncContentLoad(data) {
            this.isComponentLoaded = data;
        }
    }
}
</script>

<style lang="scss">
.hidden {
    display: none;
}
</style>