<template>
  <div v-if="posts.length > 0">
    <h3>Posts List</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">
    Post list empty
  </h2>
</template>

<style lang="scss" scoped>

</style>


<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts:{
      type: Array,
      required: true
    }

  }
}
</script>