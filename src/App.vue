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
      <my-input
          v-model="searchQuery"
          placeholder="Search ..."
      />
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
          :posts="sortedAndSearchedPosts"
          @remove="removePost"
          v-if="!isPostsLoading"
      />
      <div v-else> Posts Loading </div>

      <div ref="observer" class="observer"></div>

<!--      <my-pagination v-model="page" :total-pages="totalPages" />-->
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
import MyInput from "@/components/UI/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination.vue";

export default {
  components: {
    MyPagination,
    MyInput,
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
      //  setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
        //  this.isPostsLoading = false;
        //  console.log(2,this.isPostsLoading);
       // }, 5000);
       // console.log(response);
      } catch (e) {
        alert(e)
      } finally {
        this.isPostsLoading = false;
      }
      //https://jsonplaceholder.typicode.com/posts?_limit=10
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        console.log(1,this.isPostsLoading);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(e)
      }
    }
  },
  mounted() {
    this.fetchPosts();

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
   /* page() {
      this.fetchPosts();
    }*/
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

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background: gray;
}
</style>
