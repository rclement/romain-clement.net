<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="laptop-code" size="is-large" />
      {{ $t('home.freelancing.title') }}
    </p>

    <i18n path="home.freelancing.whatICanDo" tag="p">
      <template v-slot:rust>
        <a :href="life.url" :title="life.name" :alt="life.name">
          <span>Rust</span>
        </a>
      </template>
    </i18n>

    <br />

    <p>
      {{ $t('home.freelancing.whatIWontDo') }}
    </p>

    <br />

    <p>
      {{ $t('home.freelancing.companiesIveWorkedWith') }}
    </p>

    <br />

    <article v-for="company in companies" :key="company.name" class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <a :href="company.url" :title="company.name" :alt="company.name">
            <img :src="company.img" :alt="company.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              {{ company.name }}
            </strong>
            <small>
              {{ company.year }}
            </small>
            <br />
            {{ company.job }}
          </p>

          <b-taglist>
            <b-tag v-for="skill in company.skills" :key="skill">
              {{ skill }}
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
      life: this.$t('common.links.life'),
      companies: this.$t('common.companies'),
    }
  },
})
</script>
