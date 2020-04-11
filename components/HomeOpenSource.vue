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

    <article v-for="project in projects" :key="project.name" class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <a
              :href="project.url"
              :title="project.name"
              :alt="project.name"
              class="has-text-dark"
            >
              <strong>{{ project.name }}</strong>
            </a>
            <br />
            {{ project.tagline }}
          </p>

          <p>
            <a
              v-for="badge in project.badges"
              :key="badge.name"
              :href="badge.url"
              :title="badge.name"
              :alt="badge.name"
            >
              <img :src="badge.img" :alt="badge.name" class="badge" />
            </a>
          </p>

          <b-taglist>
            <b-tag v-for="tag in project.tags" :key="tag">
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
      projects: this.$t('common.projects'),
    }
  },
})
</script>

<style scoped>
.badge {
  margin-right: 0.5rem;
}
</style>
