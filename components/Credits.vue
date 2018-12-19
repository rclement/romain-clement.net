<template>
  <div class="credits">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <div class="links">
            <p>{{ $t('credits.social.getInTouch') }}</p>
            <a
              v-for="link in [...$t('links.social'), ...$t('links.other')]"
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
              v-for="link in $t('links.freelancing')"
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

      <p>
        {{ $t('credits.copyright.text') }} © {{ $t('credits.copyright.start') }} - {{ $t('credits.copyright.end') }}, {{ $t('credits.copyright.author') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.link-icon {
  padding: 0rem 1rem;
}

.links {
  padding: 0rem 0rem 1rem 0rem;
}
</style>
