<template>
  <div class="navbar">
    <div @click="$router.push('/')"> Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" style="margin-left: 20px">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">About</my-button>
      <my-button @click="$router.push('/posts-store')" style="margin-left: 20px">Posts Store</my-button>
      <my-button @click="$router.push('/posts-composition')" style="margin-left: 20px">Posts Composition</my-button>
    </div>
  </div>

</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>