<template>
  <form @submit.prevent>
    <h4>Add Post</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title"
    ></my-input>
    <my-input
        v-model="post.description"
        type="text"
        placeholder="Description"
    ></my-input>
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost">
      Submit
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    createPost() {
      this.id = Date.now();
      this.$emit('create', this.post);

      this.post = {
        title: '',
        description: ''
      }

    },
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>


