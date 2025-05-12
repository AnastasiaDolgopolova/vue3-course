<template>
  <div>
    <h3>Posts List</h3>
    <post-item
        v-for="post in posts"
        :post="post"
    />
  </div>
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