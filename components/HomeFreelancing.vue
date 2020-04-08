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

    <article
      v-for="company in companies"
      :key="company.info.name"
      class="media"
    >
      <div class="media-left">
        <figure class="image is-64x64">
          <a
            :href="company.link.url"
            :title="company.link.name"
            :alt="company.link.name"
          >
            <img :src="company.img" :alt="company.link.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              {{ company.info.name }}
            </strong>
            <small>
              {{ company.info.year }}
            </small>
            <br />
            {{ company.info.job }}
          </p>

          <b-taglist>
            <b-tag v-for="skill in company.info.skills" :key="skill">
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
      companies: [
        {
          info: this.$t('home.freelancing.companies.simplon'),
          link: this.$t('common.companies.simplon'),
          img: '/media/simplon.png',
        },
        {
          info: this.$t('home.freelancing.companies.wattamate'),
          link: this.$t('common.companies.wattamate'),
          img: '/media/wattamate.png',
        },
        {
          info: this.$t('home.freelancing.companies.pulsar'),
          link: this.$t('common.companies.pulsar'),
          img: '/media/pulsar.png',
        },
      ],
    }
  },
})
</script>
