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
  }
}
</script>
