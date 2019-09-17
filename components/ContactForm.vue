<template>
  <form
    ref="form"
    class="contact-form"
    method="POST"
    @submit.prevent="executeRecaptcha">
    <b-field
      v-for="field in fields"
      :key="field.name"
      :class="{'is-hidden': field.hidden}"
      :label="field.label">
      <b-input
        v-model="field.value"
        :name="field.name"
        :type="field.type"
        :maxlength="field.maxlength"
        :required="field.required"/>
    </b-field>

    <vue-recaptcha
      ref="invisibleRecaptcha"
      :sitekey="recaptchaSiteKey"
      size="invisible"
      @verify="onVerifyRecaptcha"
      @expired="onExpiredRecaptcha"/>

    <b-field>
      <button
        :disabled="isDisabled"
        class="button"
        type="submit">
        {{ $t('contact.send') }}
      </button>
    </b-field>

    <b-loading
      :is-full-page="true"
      :can-cancel="false"
      :active.sync="loading"/>
  </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    VueRecaptcha
  },

  head() {
    return {
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=${
            this.$i18n.locale
          }`,
          type: 'text/javascript'
        }
      ]
    }
  },

  props: {
    subject: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      loading: false,
      fields: {
        language: {
          label: '',
          name: '_language',
          type: 'hidden',
          value: this.$i18n.locale,
          hidden: true
        },
        format: {
          label: '',
          name: '_format',
          type: 'hidden',
          value: 'html',
          hidden: true
        },
        next: {
          label: '',
          name: '_next',
          type: 'hidden',
          value: '',
          hidden: true
        },
        honeypot: {
          label: '',
          name: '_gotcha',
          type: 'hidden',
          value: '',
          hidden: true
        },
        name: {
          label: this.$t('contact.name'),
          name: 'name',
          type: 'text',
          maxlength: 50,
          value: '',
          required: true
        },
        email: {
          label: this.$t('contact.email'),
          name: '_replyto',
          type: 'email',
          maxlength: 50,
          value: '',
          required: true
        },
        subject: {
          label: this.$t('contact.subject'),
          name: '_subject',
          type: 'text',
          maxlength: 100,
          value: this.subject,
          required: true
        },
        message: {
          label: this.$t('contact.message'),
          name: 'message',
          type: 'textarea',
          maxlength: 200,
          value: '',
          required: true
        }
      },
      recaptchaSiteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      recaptchaToken: null
    }
  },

  computed: {
    isDisabled() {
      return (
        !this.fields.name.value ||
        !this.fields.email.value ||
        !this.fields.subject.value ||
        !this.fields.message.value ||
        !this.$refs.form.checkValidity()
      )
    }
  },

  methods: {
    clear() {
      this.fields.name.value = ''
      this.fields.email.value = ''
      this.fields.subject.value = ''
      this.fields.message.value = ''
    },

    showSuccessNotification() {
      this.$buefy.toast.open({
        duration: 2000,
        position: 'is-top',
        message: this.$t('contact.success'),
        type: 'is-success'
      })
    },

    showFailureNotification() {
      this.$buefy.toast.open({
        duration: 5000,
        position: 'is-top',
        message: this.$t('contact.failure'),
        type: 'is-danger'
      })
    },

    executeRecaptcha() {
      this.loading = true
      if (!this.recaptchaToken) {
        this.$refs.invisibleRecaptcha.execute()
      } else {
        this.sendMail()
      }
    },

    onVerifyRecaptcha(response) {
      this.recaptchaToken = response
      this.sendMail()
    },

    onExpiredRecaptcha() {
      this.recaptchaToken = null
    },

    async sendMailFormspree() {
      const url = process.env.FORMSPREE_URL
      if (!url) {
        return
      }

      return await this.$axios.$post(url, {
        _language: this.fields.language.value,
        _format: this.fields.format.value,
        _next: this.fields.next.value,
        _gotcha: this.fields.honeypot.value,
        _replyto: this.fields.email.value,
        name: this.fields.name.value,
        _subject: this.fields.subject.value,
        message: this.fields.message.value
      })
    },

    async sendMailMailer() {
      const url = `${process.env.MAILER_URL}/api/mail`
      if (!url) {
        return
      }

      return await this.$axios.$post(url, {
        email: this.fields.email.value,
        name: this.fields.name.value,
        subject: this.fields.subject.value,
        message: this.fields.message.value,
        honeypot: this.fields.honeypot.value,
        recaptcha: this.recaptchaToken
      })
    },

    async sendMail() {
      try {
        await this.sendMailMailer()
        this.clear()
        this.showSuccessNotification()
      } catch (e) {
        this.showFailureNotification()
      }
      this.loading = false
    }
  }
}
</script>
