<template>
  <div>
    <suspense>
        <template><single-post></single-post></template>
        <template v-slot:fallback><single-post-skeleton></single-post-skeleton></template>
    </suspense>
  </div>
</template>

<script>
import Suspense from '@/components/Suspense.vue';
import SinglePost from '@/components/SinglePost.vue';
import SinglePostSkeleton from '@/components/SinglePostSkeleton.vue';
export default {
    components: {
        Suspense,
        SinglePost,
        SinglePostSkeleton  
    }
}
</script>

<style>

</style>