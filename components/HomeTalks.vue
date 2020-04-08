<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="comments" size="is-large" />
      {{ $t('home.talks.title') }}
    </p>

    <i18n path="home.talks.text" tag="p">
      <template v-slot:meetup-python-grenoble>
        <a
          :href="meetupPythonGrenoble.url"
          :title="meetupPythonGrenoble.name"
          :alt="meetupPythonGrenoble.name"
        >
          <span>{{ meetupPythonGrenoble.name }}</span>
        </a>
      </template>
    </i18n>

    <br />

    <article
      v-for="keynote in keynotes"
      :key="keynote.info.title"
      class="media"
    >
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a
                :href="keynote.link.url"
                :title="keynote.link.name"
                :alt="keynote.link.name"
                class="has-text-dark"
              >
                {{ keynote.info.title }}
              </a>
            </strong>
            <small>
              {{ $d(new Date(keynote.link.date), 'short') }}
            </small>
            <br />
            <small>{{ keynote.link.event }}</small>
            <br />
            {{ keynote.info.subtitle }}
          </p>
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
      keynotes: [
        {
          info: this.$t('home.talks.keynotes.pythonCelery'),
          link: this.$t('common.keynotes.pythonCelery'),
        },
        {
          info: this.$t('home.talks.keynotes.modernPythonDevelopment'),
          link: this.$t('common.keynotes.modernPythonDevelopment'),
        },
        {
          info: this.$t('home.talks.keynotes.swarmFactor'),
          link: this.$t('common.keynotes.swarmFactor'),
        },
      ],
      meetupPythonGrenoble: this.$t('common.links.meetupPythonGrenoble'),
    }
  },
})
</script>
