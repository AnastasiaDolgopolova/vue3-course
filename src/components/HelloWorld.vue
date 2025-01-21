<script>
/*defineProps({
  msg: {
    type: String,
    required: true,
  },
})*/
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5,
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    }
  }
}
</script>

<template>
  <div class="greetings">
<!--    <h1 class="green">{{ msg }}</h1>-->
    <h1 class="green">It`s work!</h1>
    <button @click="addLike" class="btn btn-outline-primary"> Like </button>
    <button @click="addDislike" class="btn btn-outline-secondary ms-3"> Dislike </button>
    <div> Likes: <strong>{{ likes }}</strong></div>
    <div> Dislikes: <strong>{{ dislikes }}</strong></div>
  </div>
</template>

<style scoped>
</style>
