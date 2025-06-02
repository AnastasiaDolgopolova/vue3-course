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
      <div class="app__btns">
        <my-button
            class="btn"
            @click="showDialog"
        >
          Add Post
        </my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
        />
      </div>

      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"/>
      </my-dialog>
      <post-list
          :posts="sortedPosts"
          @remove="removePost"
          v-if="!isPostsLoading"
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
import MySelect from "@/components/UI/MySelect.vue";

export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'id', name: 'By Id'},
        { value: 'title', name: 'By Title'},
        { value: 'body', name: 'By Body'},
      ],
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
      //  setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
        //  this.isPostsLoading = false;
        //  console.log(2,this.isPostsLoading);
       // }, 5000);
       // console.log(response);
      } catch (e) {
        alert(e)
      } finally {
        this.isPostsLoading = false;
        console.log(2,this.isPostsLoading);
      }
      //https://jsonplaceholder.typicode.com/posts?_limit=10
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      if (!this.selectedSort) return this.posts;
      return [...this.posts].sort((post1, post2) => {
        const field = this.selectedSort;
        const val1 = post1[field];
        const val2 = post2[field];

        if (typeof val1 === 'number' && typeof val2 === 'number') {
          return val1 - val2;
        }

        if (typeof val1 === 'string' && typeof val2 === 'string') {
          return val1.localeCompare(val2);
        }

        return 0; // fallback
      });
    }
  },
  watch: {
    /*selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      })
    },*/
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

.app {
  padding: 20px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
