<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  // methods: {
  //   hideDialog() {
  //     this.$emit('update:show', false)
  //   }
  // }
  mounted() {
        console.log('dialog mounted');
    }
}
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 500px;
  padding: 20px;
}
</style>