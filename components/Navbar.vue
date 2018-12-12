<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <div
        class="navbar-item"
        @click.native="closeNavbarContent">
        <logo/>
        <strong class="navbar-item"/>
      </div>

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
          class="navbar-item"
          to="/"
          @click.native="closeNavbarContent">
          Home
        </nuxt-link>

        <nuxt-link
          class="navbar-item"
          to="/freelance"
          @click.native="closeNavbarContent">
          Freelance
        </nuxt-link>

        <nuxt-link
          class="navbar-item"
          to="/software"
          @click.native="closeNavbarContent">
          Software
        </nuxt-link>

        <a
          class="navbar-item"
          @click="openModalContactForm">
          Contact
        </a>

        <a
          class="navbar-item"
          href="https://github.com/rclement/"
          target="_blank"
          @click="closeNavbarContent">
          <b-icon
            pack="fab"
            icon="github"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.linkedin.com/in/romainclement/"
          target="_blank"
          @click="closeNavbarContent">
          <b-icon
            pack="fab"
            icon="linkedin"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.viadeo.com/p/002qw6xj8rnwk5v/"
          target="_blank"
          @click="closeNavbarContent">
          <b-icon
            pack="fab"
            icon="viadeo"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.malt.fr/profile/romainclement/"
          alt="Malt"
          target="_blank"
          @click="closeNavbarContent">
          <b-icon
            pack="fab"
            icon="connectdevelop"
            size="is-small"/>
        </a>
      </div>
    </div>

    <modal-contact-form
      :active.sync="isModalContactFormActive"
      subject="Contact"/>
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
