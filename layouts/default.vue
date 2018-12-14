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
      title: this.$t('title'),
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.title')
        },
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
