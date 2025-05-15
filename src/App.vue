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
<!--      <input type="text" v-model.trim="modificatorValue">-->
<!--      <my-button class="btn" @click="fetchPosts"> Get Posts </my-button>-->
      <my-button
          class="btn"
          @click="showDialog"
          style="margin: 15px 0;"
      >
        Add Post
      </my-button>
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"/>
      </my-dialog>
      <post-list
          v-if="!isPostsLoading"
          :posts="posts"
          @remove="removePost"
      />
      <div v-else> Posts Loading </div>
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
import axios from "axios";

export default {
  components: {
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
     // modificatorValue: "",
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
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        console.log(1,this.isPostsLoading);
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
          this.isPostsLoading = false;
          console.log(2,this.isPostsLoading);
        }, 5000);
       // console.log(response);
      } catch (e) {
        alert(e)
      } finally {
      //  this.isPostsLoading = false;
       // console.log(2,this.isPostsLoading);
      }
      //https://jsonplaceholder.typicode.com/posts?_limit=10
    }
  },
  mounted() {
    this.fetchPosts();
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
