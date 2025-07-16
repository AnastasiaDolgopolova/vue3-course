<template>
  <div class="posts">
    <!-- <h1>{{ likes }}</h1>
    <my-button @click="addLike">Add Like</my-button> -->
    <h1>Posts Page</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Search ..."
        v-focus
    />
    <div class="app__btns">
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else> Posts Loading </div>

  <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios";
import {ref} from 'vue';
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'id', name: 'By Id'},
        { value: 'title', name: 'By Title'},
        { value: 'body', name: 'By Body'},
      ],
    }
  },
 setup(props) {
  const {
    posts,
    isPostsLoading,
    totalPages,
  } = usePosts(10);

  const {
    selectedSort,
    sortedPosts,
  } = useSortedPosts(posts);

  const {
    searchQuery,
    sortedAndSearchedPosts,
  } = useSortedAndSearchedPosts(sortedPosts);

  return {
    posts,
    isPostsLoading,
    totalPages,

    selectedSort,
    sortedPosts,

    searchQuery,
    sortedAndSearchedPosts,
  }
  
  // const likes = ref(0);

  // const addLike = () => {
  //   likes.value += 1;
  // }

  // return {
  //   likes,
  //   addLike,
  // }
 }
}
</script>

<style scoped>
.posts {
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