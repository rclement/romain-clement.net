<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half has-text-centered">
            <logo/>

            <h1 class="title">
              Romain Clement
            </h1>

            <h2 class="subtitle">
              Freelance Software Engineer
            </h2>
          </div>

          <div class="column is-half">
            <div class="content">
              <p>Hi, I'm Romain Clement</p>
              <p>
                I'm
                <strong>CTO</strong>
                at Sylha and a
                <strong>freelance software engineer</strong>
                for web and audio applications.
              </p>

              <button
                class="button is-outlined"
                @click="isModalContactFormActive = true">
                Let's talk!
              </button>
            </div>
          </div>
        </div>

        <modal-contact-form :active.sync="isModalContactFormActive"/>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ModalContactForm from '~/components/ModalContactForm.vue'

export default {
  components: {
    Logo,
    ModalContactForm
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
  font-weight: 400;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
}
</style>
