<template>
  <section class="section">
    <div class="container has-text-centered">
      <b-icon
        pack="fas"
        icon="exclamation-circle"
        class="link-icon"
        size="is-large"/>

      <p class="title">
        {{ err.title }}
      </p>

      <p class="subtitle">
        {{ err.message }}
      </p>

      <nuxt-link :to="localePath('index')">
        {{ $t('errors.backToHome') }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  computed: {
    err() {
      const codes = this.$t('errors.codes')
      return codes[this.error.statusCode]
    }
  }
}
</script>
