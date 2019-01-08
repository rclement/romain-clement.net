<template>
  <vue-cookie-accept-decline
    :ref="'cookieConsent'"
    :element-id="'cookieConsent'"
    :debug="false"
    :position="'bottom-left'"
    :type="'floating'"
    :disable-decline="false"
    :transition-name="'slideFromBottom'"
    :show-postpone-button="true"
    class="cookie-consent"
    @status="status"
    @clicked-accept="accept"
    @clicked-decline="decline">

    <!-- Optional -->
    <div slot="postponeContent">
      &times;
    </div>

    <!-- Optional -->
    <div slot="message">
      {{ $t('cookies.consent') }}
    </div>

    <!-- Optional -->
    <div slot="declineContent">
      {{ $t('cookies.decline') }}
    </div>

    <!-- Optional -->
    <div slot="acceptContent">
      {{ $t('cookies.accept') }}
    </div>
  </vue-cookie-accept-decline>
</template>

<script>
import { mapActions } from 'vuex'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

export default {
  components: {
    VueCookieAcceptDecline
  },

  methods: {
    status(val) {
      if (val === 'postpone') {
        this.clear()
      } else if (val == 'accept') {
        this.accept()
      } else {
        this.decline()
      }
    },

    clear() {
      this.$refs.cookieConsent.removeCookie()
      this.$refs.cookieConsent.init()
      this.decline()
    },

    accept() {
      this.$store.dispatch('matomo/accept')
    },

    decline() {
      this.$store.dispatch('matomo/decline')
    }
  }
}
</script>
