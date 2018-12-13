<template>
  <div class="image-modal">
    <a
      @click="isImageModalActive = true">
      <img
        :src="src"
        :title="title"
        :alt="title"
        :style="`height: ${height};`"
        class="image">
    </a>

    <b-modal :active.sync="isImageModalActive">
      <p class="image">
        <img :src="src">
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isImageModalActive: false
    }
  }
}
</script>
