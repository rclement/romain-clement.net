<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <b-navbar transparent>
          <template slot="brand">
            <b-navbar-item :to="localePath('index')" tag="nuxt-link">
              <img src="~/assets/svg/logo.svg" alt="Logo" />
            </b-navbar-item>
          </template>

          <template slot="start">
            <b-navbar-item :to="localePath('index')" tag="nuxt-link">
              {{ $t('navbar.home') }}
            </b-navbar-item>

            <b-navbar-item :to="localePath('articles')" tag="nuxt-link">
              {{ $t('articles.title') }}
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item data-switch-terminal @click="toggleTerminalMode">
              <b-icon
                pack="fas"
                icon="terminal"
                :type="terminalMode ? 'is-danger' : null"
              />
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const terminalLocale = 'und'

export default Vue.extend({
  data() {
    return {
      terminalMode: this.$i18n.locale === terminalLocale,
    }
  },

  methods: {
    toggleTerminalMode(): void {
      this.terminalMode = !this.terminalMode
      const locale = this.terminalMode
        ? terminalLocale
        : (this.$i18n.defaultLocale as string)
      this.$router.replace(this.switchLocalePath(locale))
    },
  },
})
</script>
