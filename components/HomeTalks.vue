<template>
  <div id="talks">
    <p class="title">
      <b-icon pack="fas" icon="comments" size="is-medium" custom-size="xs" />
      {{ $t('home.talks.title') }}
      <a class="anchor-link" href="#talks"></a>
    </p>

    <i18n path="home.talks.text" tag="p">
      <template #meetup-python-grenoble>
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

    <article v-for="keynote in keynotes" :key="keynote.title" class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a
                :href="keynote.url"
                :title="keynote.title"
                :alt="keynote.title"
                class="has-text-dark"
              >
                {{ keynote.title }}
              </a>
            </strong>
            <small>
              {{ $d(new Date(keynote.date), 'short') }}
            </small>
            <br />
            <a
              :href="keynote.event_url"
              :title="keynote.event"
              :alt="keynote.event"
              class="has-text-dark"
            >
              <small>{{ keynote.event }}</small>
            </a>
            <br />
            {{ keynote.subtitle }}
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
      keynotes: this.$t('common.keynotes'),
      meetupPythonGrenoble: this.$t('common.links.meetupPythonGrenoble'),
    }
  },
})
</script>
