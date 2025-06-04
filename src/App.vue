<template>
  <navbar></navbar>
  <div class="main">
    <div>
      <!--      <HelloWorld msg="It`s work!" />-->
      <!--      <HelloWorld/>-->

      <router-view>
<!--        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/posts">Posts</RouterLink>
        </nav>-->
      </router-view>

    </div>

  </div>

  <RouterView/>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar}
})

//import HelloWorld from './components/HelloWorld.vue'


</script>

<style>
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
</style>
