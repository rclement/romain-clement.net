<template>
  <div id="open-source">
    <p class="title">
      <b-icon pack="fas" icon="code" size="is-medium" custom-size="xs" />
      {{ $t('home.oss.title') }}
      <a class="anchor-link" href="#open-source"></a>
    </p>

    <i18n path="home.oss.text" tag="p">
      <template #github>
        <a :href="github.url" :title="github.name" :alt="github.name">
          <span>{{ $t('home.oss.github') }}</span>
        </a>
      </template>

      <template #gitlab>
        <a :href="gitlab.url" :title="gitlab.name" :alt="gitlab.name">
          <span>{{ $t('home.oss.gitlab') }}</span>
        </a>
      </template>
    </i18n>

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
      github: this.$t('common.links.github'),
      gitlab: this.$t('common.links.gitlab'),
    }
  },
})
</script>

<style scoped>
.badge {
  margin-right: 0.5rem;
}
</style>
