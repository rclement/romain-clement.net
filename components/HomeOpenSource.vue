<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="code" size="is-large" />
      {{ $t('home.oss.title') }}
    </p>

    <p>
      {{ $t('home.oss.text') }}
    </p>

    <br />

    <article v-for="project in projects" :key="project.info.name" class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <a
              :href="project.link.url"
              :title="project.link.name"
              :alt="project.link.name"
              class="has-text-dark"
            >
              <strong>{{ project.info.name }}</strong>
            </a>
            <br />
            {{ project.info.tagline }}
          </p>

          <p>
            <a
              v-for="badge in project.link.badges"
              :key="badge.name"
              :href="badge.url"
              :title="badge.name"
              :alt="badge.name"
            >
              <img :src="badge.img" :alt="badge.name" class="badge" />
            </a>
          </p>

          <b-taglist>
            <b-tag v-for="tag in project.link.tags" :key="tag">
              {{ tag }}
            </b-tag>
          </b-taglist>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      projects: [
        {
          info: this.$t('home.oss.projects.mailer'),
          link: this.$t('common.projects.mailer'),
        },
        {
          info: this.$t('home.oss.projects.nuxtChiffre'),
          link: this.$t('common.projects.nuxtChiffre'),
        },
        {
          info: this.$t('home.oss.projects.cozyTagAndPass'),
          link: this.$t('common.projects.cozyTagAndPass'),
        },
        {
          info: this.$t('home.oss.projects.cozyThomann'),
          link: this.$t('common.projects.cozyThomann'),
        },
        {
          info: this.$t('home.oss.projects.meeblipController'),
          link: this.$t('common.projects.meeblipController'),
        },
      ],
    }
  },
})
</script>

<style scoped>
.badge {
  margin-right: 0.5rem;
}
</style>
