<template>
  <div class="home">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-half has-text-centered">
              <figure
                class="image container is-256x256">
                <img src="@/assets/img/mountains.png">
              </figure>

              <h1 class="title is-hero">
                {{ $t('home.title') }}
              </h1>

              <h2 class="subtitle is-hero">
                {{ $t('home.subtitle') }}
              </h2>
            </div>

            <div class="column is-half">
              <div
                class="content"
                v-html="$t('home.presentation')"/>

              <button
                class="button is-outlined"
                @click="openModalContactForm($t('home.newOpportunity'))">
                {{ $t('home.letsTalk') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <separator/>

    <section class="section">
      <div class="container has-text-centered">
        <p class="title">{{ $t('home.companies') }}</p>

        <div class="clients">
          <img
            class="client image"
            src="@/assets/img/logo-parrot.png">

          <img
            class="client image"
            src="@/assets/img/logo-eiosis.png">

          <img
            class="client image"
            src="@/assets/img/logo-slatedigital.png">

          <img
            class="client image"
            src="@/assets/img/logo-sylha.png">
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
import Separator from '~/components/Separator.vue'

export default {
  components: {
    ModalContactForm,
    Separator
  },

  data() {
    return {
      isModalContactFormActive: false,
      modalContactSubject: ''
    }
  },

  methods: {
    openModalContactForm(subject) {
      this.modalContactSubject = subject
      this.isModalContactFormActive = true
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

.clients {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.client {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 2rem;
  height: 50px;
}

.image.is-256x256 {
  height: 256px;
  width: 256px;
}
</style>
