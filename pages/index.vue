<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-head"/>

    <div class="hero-body">
      <div class="container has-text-centered">
        <logo/>

        <h1 class="title">
          Romain Clement
        </h1>

        <h2 class="subtitle">
          Freelance Software Engineer
        </h2>

        <div class="links">
          <a
            href="https://github.com/rclement/"
            target="_blank">
            <b-icon
              class="link-icon"
              pack="fab"
              icon="github"
              size="is-medium"/>
          </a>

          <a
            href="https://www.linkedin.com/in/romainclement/"
            target="_blank">
            <b-icon
              class="link-icon"
              pack="fab"
              icon="linkedin"
              size="is-medium"/>
          </a>
        </div>
      </div>
    </div>

    <div class="hero-foot"/>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data() {
    return {
      isContactModalActive: false
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
}

.link-icon {
  padding: 0rem 1.5rem;
}
</style>
