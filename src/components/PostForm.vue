<template>
  <form @submit.prevent>
    <h4>Add Post</h4>
    <input v-bind:value="post.title" @input="post.title = $event.target.value" class="input" type="text" placeholder="Title">
    <input v-bind:value="post.description" @input="post.description = $event.target.value" class="input" type="text" placeholder="Description">
<!--    <button class="btn" @click="createPost">Submit</button>-->
    <button class="btn">Submit</button>
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
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid teal;
  margin-top: 15px;
}
</style>


