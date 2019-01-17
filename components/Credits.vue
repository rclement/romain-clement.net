<template>
  <div class="credits">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <div class="links">
            <p>{{ $t('credits.social.getInTouch') }}</p>
            <a
              v-for="link in [...$t('common.links.social'), ...$t('common.links.other')]"
              :key="link.name"
              :href="link.url"
              :title="link.name"
              :alt="link.name"
              class="has-text-dark">
              <b-icon
                :pack="link.icon.pack"
                :icon="link.icon.name"
                class="link-icon"
                size="is-small"/>
            </a>
          </div>

          <div class="links">
            <p>{{ $t('credits.social.hireMe') }}</p>
            <a
              v-for="link in $t('common.links.freelancing')"
              :key="link.name"
              :href="link.url"
              :title="link.name"
              :alt="link.name"
              class="has-text-dark">
              <b-icon
                :pack="link.icon.pack"
                :icon="link.icon.name"
                class="link-icon"
                size="is-small"/>
            </a>
          </div>
        </div>

        <div class="column is-half">
          <p>
            <a
              :href="$t('credits.company.link.url')"
              :title="$t('credits.company.link.name')"
              :alt="$t('credits.company.link.name')"
              class="has-text-dark">
              {{ $t('credits.company.name') }}
              <br>
              {{ $t('credits.company.address') }}
              <br>
              {{ $t('credits.company.kind') }}
              <span
                v-for="registration in $t('credits.company.registrations')"
                :key="registration.type">
                <br>
                {{ registration.type }}: {{ registration.value }}
              </span>
            </a>
          </p>
        </div>
      </div>

      <p class="has-bottom-padding">
        {{ $t('credits.copyright.text') }} © {{ $t('credits.copyright.start') }} - {{ $t('credits.copyright.end') }}, {{ $t('credits.copyright.author') }}
      </p>

      <p class="has-bottom-padding">
        <a @click="updateCookiePrefs">
          {{ $t('credits.cookies.update') }}
        </a>
      </p>
    </div>

    <cookie-consent
      id="cookie-consent"
      ref="cookie-consent"/>
  </div>
</template>

<script>
import CookieConsent from '@/components/CookieConsent'

export default {
  components: {
    CookieConsent
  },

  methods: {
    updateCookiePrefs() {
      let cookieConsent = this.$refs['cookie-consent']
      if (cookieConsent) {
        cookieConsent.clear()
      }
    }
  }
}
</script>

<style scoped>
.link-icon {
  padding: 0rem 1rem;
}

.links {
  padding: 0rem 0rem 1rem 0rem;
}

.has-bottom-padding {
  padding: 0rem 0rem 1rem 0rem;
}
</style>
