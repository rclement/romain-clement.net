<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
        :to="localePath('index')"
        class="navbar-item"
        @click.native="closeNavbarContent">
        <logo/>
        <!-- <strong class="navbar-item"/> -->
      </nuxt-link>

      <a
        :class="{ 'is-active': navbarContentOpen }"
        class="navbar-burger burger"
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarContent"
        @click="toggleNavbarContent">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>

    <div
      id="navbarContent"
      :class="{ 'is-active': navbarContentOpen }"
      class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link
          :to="localePath('index')"
          class="navbar-item"
          @click.native="closeNavbarContent">
          {{ $t('navbar.home') }}
        </nuxt-link>

        <nuxt-link
          :to="localePath('freelance')"
          class="navbar-item"
          @click.native="closeNavbarContent">
          {{ $t('navbar.freelance') }}
        </nuxt-link>

        <nuxt-link
          :to="localePath('software')"
          class="navbar-item"
          @click.native="closeNavbarContent">
          {{ $t('navbar.software') }}
        </nuxt-link>

        <a
          class="navbar-item"
          @click="openModalContactForm">
          {{ $t('navbar.contact') }}
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            {{ $t('navbar.language') }}
          </a>

          <div class="navbar-dropdown">
            <nuxt-link
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="navbar-item"
              @click.native="closeNavbarContent">
              {{ locale.name }}
            </nuxt-link>
          </div>
        </div>

        <a
          v-for="link in $t('links.social')"
          :key="link.name"
          :href="link.url"
          :title="link.name"
          :alt="link.name"
          class="navbar-item"
          @click="closeNavbarContent">
          <b-icon
            :pack="link.icon.pack"
            :icon="link.icon.name"
            size="is-small"/>
        </a>
      </div>
    </div>

    <modal-contact-form
      :active.sync="isModalContactFormActive"
      :subject="$t('navbar.contact')"/>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ModalContactForm from '~/components/ModalContactForm.vue'

export default {
  components: {
    Logo,
    ModalContactForm
  },

  data() {
    return {
      navbarContentOpen: false,
      isModalContactFormActive: false
    }
  },

  methods: {
    openModalContactForm() {
      this.isModalContactFormActive = true
      this.navbarContentOpen = false
    },

    toggleNavbarContent() {
      this.navbarContentOpen = !this.navbarContentOpen
    },

    closeNavbarContent() {
      this.navbarContentOpen = false
    }
  }
}
</script>

<style>
.navbar-item img {
  max-height: 2.5rem;
}
</style>
