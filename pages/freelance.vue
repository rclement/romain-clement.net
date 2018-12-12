<template>
  <div class="freelance">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <p class="title">Full-stack development</p>
              <p class="subtitle">Fancy a new online service?</p>

              <div class="content">
                <p>
                  I can help on choosing and orchestrating the proper technological stack, developing software for
                  <strong>web-services</strong>
                  (back-end, API),
                  <strong>web-apps</strong>
                  (front-end),
                  <strong>mobile apps</strong>,
                  and implementing a strategy for
                  <strong>continuous integration and deployment</strong>.
                </p>
              </div>

              <div
                class="tags are-centered">
                <span class="tag">Python</span>
                <span class="tag">Flask</span>
                <span class="tag">Node.js</span>
                <span class="tag">Vue.js</span>
                <span class="tag">React-Native</span>
                <span class="tag">PostgreSQL</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Redis</span>
                <span class="tag">Stripe</span>
                <span class="tag">Mangopay</span>
                <span class="tag">Docker</span>
              </div>

              <button
                class="button is-outlined"
                @click="isModalContactFormActive = true; modalContactSubject= 'New project - Fullstack development'">
                New project
              </button>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <p class="title">Audio software</p>
              <p class="subtitle">An audio and/or music related project in mind?</p>

              <div class="content">
                <p>
                  I can help making those waves happen by engineering
                  <strong>multi-platform</strong>
                  (MacOS, Windows, Linux) and
                  <strong>performant</strong>
                  software for
                  <strong>desktop applications</strong>
                  and
                  <strong>audio plug-ins</strong>.
                </p>
              </div>

              <div class="tags are-centered">
                <span class="tag">C++</span>
                <span class="tag">JUCE</span>
                <span class="tag">OpenGL</span>
                <span class="tag">CMake</span>
                <span class="tag">VST</span>
                <span class="tag">AU</span>
                <span class="tag">AAX</span>
              </div>

              <button
                class="button is-outlined"
                @click="isModalContactFormActive = true; modalContactSubject= 'New project - Audio software'">
                New project
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>

    <modal-contact-form
      :active.sync="isModalContactFormActive"
      :subject="modalContactSubject"/>
  </div>
</template>

<script>
import ModalContactForm from '~/components/ModalContactForm.vue'

export default {
  components: {
    ModalContactForm
  },

  data() {
    return {
      isModalContactFormActive: false,
      modalContactSubject: ''
    }
  }
}
</script>

<style scoped>
.tags.are-centered {
  display: flex;
  justify-content: center;
}
</style>
