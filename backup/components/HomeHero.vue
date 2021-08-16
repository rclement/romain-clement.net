<template>
  <div>
    <div class="has-text-centered">
      <h1 class="title is-size-1-desktop is-size-3">
        {{ $t('home.hero.title') }}
      </h1>

      <h2 class="subtitle is-size-5">
        {{ $t('home.hero.subtitle') }}
      </h2>

      <p>{{ $t('home.hero.location') }}</p>

      <br />

      <div class="block">
        <a :href="github.url" :title="github.name" :alt="github.name">
          <b-icon pack="fab" icon="github" size="is-medium" type="is-dark" />
        </a>

        <a :href="gitlab.url" :title="gitlab.name" :alt="gitlab.name">
          <b-icon pack="fab" icon="gitlab" size="is-medium" type="is-dark" />
        </a>

        <a :href="keybase.url" :title="keybase.name" :alt="keybase.name">
          <b-icon pack="fab" icon="keybase" size="is-medium" type="is-dark" />
        </a>

        <a :href="linkedin.url" :title="linkedin.name" :alt="linkedin.name">
          <b-icon pack="fab" icon="linkedin" size="is-medium" type="is-dark" />
        </a>

        <a :href="viadeo.url" :title="viadeo.name" :alt="viadeo.name">
          <b-icon pack="fab" icon="viadeo" size="is-medium" type="is-dark" />
        </a>

        <a :href="xing.url" :title="xing.name" :alt="xing.name">
          <b-icon pack="fab" icon="xing" size="is-medium" type="is-dark" />
        </a>

        <a :href="malt.url" :title="malt.name" :alt="malt.name">
          <b-icon
            pack="fab"
            icon="connectdevelop"
            size="is-medium"
            type="is-dark"
          />
        </a>

        <a :href="comet.url" :title="comet.name" :alt="comet.name">
          <b-icon pack="fas" icon="rocket" size="is-medium" type="is-dark" />
        </a>

        <a :href="pgp.url" :title="pgp.name" :alt="pgp.name">
          <b-icon pack="fas" icon="key" size="is-medium" type="is-dark" />
        </a>
      </div>

      <b-button
        :to="localePath('index') + '#contact'"
        tag="nuxt-link"
        icon-pack="fas"
        icon-left="paper-plane"
        outlined
      >
        {{ $t('home.hero.contact') }}
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      github: this.$t('common.links.github'),
      gitlab: this.$t('common.links.gitlab'),
      keybase: this.$t('common.links.keybase'),
      linkedin: this.$t('common.links.linkedin'),
      viadeo: this.$t('common.links.viadeo'),
      xing: this.$t('common.links.xing'),
      malt: this.$t('common.links.malt'),
      comet: this.$t('common.links.comet'),
      pgp: this.$t('common.links.pgp'),
    }
  },
})
</script>
