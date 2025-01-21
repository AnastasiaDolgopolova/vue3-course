<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Post about JS', description: 'JavaScript general purpose programming language'},
        {id: 1, title: 'Post about PHP', description: 'PHP general purpose backend programming language'},
        {id: 1, title: 'Post about Laravel', description: 'Laravel general purpose programming framework'},
      ],
      title: '',
      description: '',
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        description: this.description
      }

      this.posts.push(newPost);
      this.title = '';
      this.description = '';
    },
  }
}
</script>

<template>
  <div>
    <form @submit.prevent>
      <h4>Add Post</h4>
      <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Title">
      <input v-bind:value="description" @input="description = $event.target.value" class="input" type="text" placeholder="Description">
      <button class="btn" @click="createPost">Submit</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

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