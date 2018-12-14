<template>
  <div>
    <header class="section">
      <div class="container">
        <navbar/>
      </div>
    </header>

    <nuxt/>

    <footer class="footer">
      <credits/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Credits from '@/components/Credits.vue'

export default {
  components: {
    Navbar,
    Credits
  },

  head() {
    return {
      titleTemplate: `${this.$t('title')} | %s`,
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('keywords')
        }
      ]
    }
  }
}
</script>
