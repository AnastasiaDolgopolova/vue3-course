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
      <h1>Posts Page</h1>
      <my-button
          class="btn"
          @click="showDialog"
      >
        Add Post
      </my-button>
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"/>
      </my-dialog>
      <post-list
          :posts="posts"
          @remove="removePost"
      />
    </div>
  </div>

  <RouterView/>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import  PostList from "@/components/PostList.vue";
import  PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Post about JS', description: 'JavaScript general purpose programming language'},
        {id: 2, title: 'Post about PHP', description: 'PHP general purpose backend programming language'},
        {id: 3, title: 'Post about Laravel', description: 'Laravel general purpose programming framework'},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      //console.log(post);
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      //console.log(post);
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    }
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
