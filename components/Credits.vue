<template>
  <footer class="footer">
    <div class="content has-text-centered heading">
      <div class="columns">
        <div class="column is-one-fifth is-offset-one-fifth">
          <a
            :href="infogreffe.url"
            :title="infogreffe.name"
            :alt="infogreffe.name"
            class="has-text-dark"
          >
            <p>
              <strong>{{ $t('credits.about.title') }}</strong>
            </p>

            <p>
              {{ $t('common.company.name') }}
              <br />
              {{ $t('common.company.kind') }}
            </p>

            <p>
              {{ $t('common.company.address.line1') }}
              <br />
              {{ $t('common.company.address.postcode') }}
              {{ $t('common.company.address.city') }}
              <br />
              {{ $t('common.company.address.country') }}
            </p>

            <p>
              <span
                v-for="registration in $t('common.company.registrations')"
                :key="registration.type"
              >
                {{ registration.type }}: {{ registration.value }}
                <br />
              </span>
            </p>
          </a>
        </div>

        <div class="column is-one-fifth is-offset-one-fifth">
          <p>
            <strong>{{ $t('credits.credits.title') }}</strong>
          </p>

          <i18n path="credits.credits.powered" tag="p">
            <template #nuxt>
              <a :href="nuxt.url" :title="nuxt.name" :alt="nuxt.name">
                <span>{{ nuxt.name }}</span>
              </a>
            </template>

            <template #bulma>
              <a :href="bulma.url" :title="bulma.name" :alt="bulma.name">
                {{ bulma.name }}
              </a>
            </template>

            <template #fontawesome>
              <a
                :href="fontawesome.url"
                :title="fontawesome.name"
                :alt="fontawesome.name"
              >
                {{ fontawesome.name }}
              </a>
            </template>
          </i18n>

          <i18n path="credits.credits.analytics" tag="p">
            <template #chiffre>
              <a :href="chiffre.url" :title="chiffre.name" :alt="chiffre.name">
                <span>{{ chiffre.name }}</span>
              </a>
            </template>
          </i18n>

          <i18n path="credits.credits.website" tag="p">
            <template #license>
              <a :href="license.url" :title="license.name" :alt="license.name">
                <span>{{ license.name }}</span>
              </a>
            </template>
          </i18n>

          <div class="block">
            <a :href="github.url" :title="github.name" :alt="github.name">
              <b-icon pack="fab" icon="github" />
            </a>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <p>
            {{ $t('credits.copyright.text') }} ©
            {{ $t('credits.copyright.start') }} -
            {{ $t('credits.copyright.end') }},
            {{ $t('credits.copyright.owner') }}
          </p>

          <p>{{ $t('credits.version') }} {{ appVersion }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      appVersion: process.env.APP_VERSION,
      infogreffe: this.$t('common.links.infogreffe'),
      nuxt: this.$t('common.links.nuxt'),
      bulma: this.$t('common.links.bulma'),
      fontawesome: this.$t('common.links.fontawesome'),
      chiffre: this.$t('common.links.chiffre'),
      github: this.$t('common.app.repository'),
      license: this.$t('common.app.license'),
    }
  },
})
</script>
