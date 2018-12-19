<template>
  <div class="freelance">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <p class="subtitle">
              {{ $t('freelance.presentation') }}
            </p>

            <i18n
              path="freelance.profile"
              tag="p">
              <a
                v-for="link in $t('links.freelancing')"
                :key="link.name"
                :href="link.url"
                :title="link.name"
                :alt="link.name"
                :place="link.name.toLowerCase()">
                <b-icon
                  :pack="link.icon.pack"
                  :icon="link.icon.name"
                  class="link-icon"
                  size="is-small"/>
                {{ link.name }}
              </a>
            </i18n>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div
            v-for="service in services"
            :key="service.title"
            class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <p class="title">{{ service.title }}</p>
              <p class="subtitle">{{ service.subtitle }}</p>

              <div
                class="content"
                v-html="service.content"/>

              <div class="tags are-centered">
                <span
                  v-for="tag in service.tags"
                  :key="tag"
                  class="tag">
                  {{ tag }}
                </span>
              </div>

              <button
                class="button is-outlined"
                @click="openModalContactForm(service.title)">
                {{ $t('freelance.newProject') }}
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

  head() {
    return this.$pageHead('freelance')
  },

  data() {
    return {
      isModalContactFormActive: false,
      modalContactSubject: '',
      services: this.$t('freelance.services')
    }
  },

  methods: {
    openModalContactForm(newProjectType) {
      const newProject = this.$t('freelance.newProject')
      this.modalContactSubject = `${newProject} - ${newProjectType}`
      this.isModalContactFormActive = true
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
