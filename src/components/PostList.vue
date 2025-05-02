<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title:</strong> {{ post.title }}</div>
    <div><strong>Description:</strong> {{ post.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>


<script>
export default {
  props: {
    posts:{
      type: Array,
      required: true
    }

  }
}
</script>