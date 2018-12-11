<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <logo
        class="navbar-item"
        style="height: 50px;"/>
      <strong class="navbar-item"/> -->

      <a
        :class="{ 'is-active': navbarContentOpen }"
        class="navbar-burger burger"
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarContent"
        @click="navbarContentOpen = !navbarContentOpen">
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
          to="/">
          Home
        </nuxt-link>

        <!-- <nuxt-link
          class="navbar-item"
          to="/software">
          Software
        </nuxt-link> -->

        <a
          class="navbar-item"
          @click="isModalContactFormActive = true">
          Contact
        </a>

        <a
          class="navbar-item"
          href="https://github.com/rclement/"
          target="_blank">
          <b-icon
            pack="fab"
            icon="github"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.linkedin.com/in/romainclement/"
          target="_blank">
          <b-icon
            pack="fab"
            icon="linkedin"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.viadeo.com/p/002qw6xj8rnwk5v/"
          target="_blank">
          <b-icon
            pack="fab"
            icon="viadeo"
            size="is-small"/>
        </a>

        <a
          class="navbar-item"
          href="https://www.malt.fr/profile/romainclement/"
          alt="Malt"
          target="_blank">
          <b-icon
            pack="fab"
            icon="connectdevelop"
            size="is-small"/>
        </a>
      </div>
    </div>

    <modal-contact-form :active.sync="isModalContactFormActive"/>
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
  }
}
</script>
