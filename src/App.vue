<template>
  <div class="main">
    <div>
      <!--      <HelloWorld msg="It`s work!" />-->
      <!--      <HelloWorld/>-->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <div>
      <post-form/>
      <post-list :posts="posts"/>
    </div>
  </div>

  <RouterView/>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import  PostList from "@/components/PostList.vue";
import  PostForm from "@/components/PostForm.vue";

export default {
  components: {
    PostList, PostForm
  },
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  padding: 20px;
}
</style>
