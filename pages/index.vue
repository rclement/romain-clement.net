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

        <button
          class="button is-primary is-medium"
          @click="isModalContactFormActive = true">
          Let's talk!
        </button>

        <b-modal
          :active.sync="isModalContactFormActive"
          has-modal-card>
          <div
            class="modal-card has-text-left">
            <header class="modal-card-head">
              <p class="modal-card-title">Let's talk!</p>
            </header>

            <section class="modal-card-body">
              <contact-form/>
            </section>
          </div>
        </b-modal>
      </div>
    </div>

    <div class="hero-foot"/>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    Logo,
    ContactForm
  },

  data() {
    return {
      isModalContactFormActive: false
    }
  }
}
</script>

<style scoped>
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
