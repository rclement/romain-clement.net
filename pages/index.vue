<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-half has-text-centered">
              <logo/>

              <h1 class="title is-hero">
                Romain Clement
              </h1>

              <h2 class="subtitle is-hero">
                Freelance Software Engineer
              </h2>
            </div>

            <div class="column is-half">
              <div class="content">
                <p>Hi, I'm Romain Clement</p>

                <p>
                  I'm
                  <strong>CTO</strong>
                  at
                  <a
                    class="has-text-dark"
                    href="https://sylha.io">
                    Sylha
                  </a>
                  and a
                  <strong>freelance software engineer</strong>
                  building
                  <strong>web</strong>
                  and
                  <strong>audio</strong> applications.
                </p>

                <p>
                  I strive for
                  <strong>code quality</strong>
                  and
                  <strong>continuous</strong>
                  processes, while being an
                  <strong>open-source enthusiast</strong>.
                </p>

                <p>
                  I am currently accepting new contracts.
                </p>

                <button
                  class="button is-outlined"
                  @click="isModalContactFormActive = true; modalContactSubject= 'New opportunity'">
                  Let's talk!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import Logo from '~/components/Logo.vue'
import ModalContactForm from '~/components/ModalContactForm.vue'

export default {
  components: {
    Logo,
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
.title.is-hero {
  font-weight: 400;
  letter-spacing: 1px;
}

.subtitle.is-hero {
  font-weight: 300;
  word-spacing: 5px;
}

.tags.are-centered {
  display: flex;
  justify-content: center;
}
</style>
