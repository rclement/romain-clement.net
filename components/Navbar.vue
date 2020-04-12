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

            <b-navbar-item
              :to="localePath('index') + '#freelancing'"
              tag="nuxt-link"
            >
              {{ $t('home.freelancing.title') }}
            </b-navbar-item>

            <b-navbar-item
              :to="localePath('index') + '#open-source'"
              tag="nuxt-link"
            >
              {{ $t('home.oss.title') }}
            </b-navbar-item>

            <b-navbar-item :to="localePath('index') + '#talks'" tag="nuxt-link">
              {{ $t('home.talks.title') }}
            </b-navbar-item>

            <b-navbar-item :to="localePath('index') + '#music'" tag="nuxt-link">
              {{ $t('home.music.title') }}
            </b-navbar-item>

            <b-navbar-item
              :to="localePath('index') + '#contact'"
              tag="nuxt-link"
            >
              {{ $t('home.contact.title') }}
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item>
              <div class="field">
                <b-switch
                  v-model="terminalMode"
                  size="is-small"
                  type="is-dark"
                  data-switch-terminal
                  @input="setTerminalMode"
                />
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      terminalMode: this.$i18n.locale === 'und',
    }
  },

  methods: {
    setTerminalMode(value: boolean): void {
      const locale = value ? 'und' : (this.$i18n.defaultLocale as string)
      this.$router.replace(this.switchLocalePath(locale))
    },
  },
})
</script>
