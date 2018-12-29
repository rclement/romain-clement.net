<template>
  <form
    ref="form"
    :action="url"
    class="contact-form"
    method="POST">
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

    <b-field>
      <button
        :disabled="isDisabled"
        class="button"
        type="submit">
        {{ $t('contact.send') }}
      </button>
    </b-field>
  </form>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      url: `https://formspree.io/${process.env.contactEmail}`,
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
      }
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
  }
}
</script>
