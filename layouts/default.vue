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

    <cookie-consent/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Credits from '@/components/Credits.vue'
import CookieConsent from '@/components/CookieConsent'

export default {
  components: {
    Navbar,
    Credits,
    CookieConsent
  }
}
</script>
