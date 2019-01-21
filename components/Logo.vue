<template>
  <div class="logo">
    <img
      :src="icon"
      title="Logo"
      alt="Logo"
      class="image">
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 64,
      validator: function(value) {
        return [64, 120, 144, 152, 192, 384, 512].includes(value)
      }
    }
  },

  data() {
    return {
      icon: this.$icon(this.size)
    }
  }
}
</script>
