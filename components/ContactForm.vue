<template>
  <form
    :action="url"
    class="contact-form"
    method="POST">
    <b-field style="display:none">
      <b-input
        v-model="form.subject.value"
        :name="form.subject.name"
        type="hidden"/>
    </b-field>

    <b-field style="display:none">
      <b-input
        v-model="form.language.value"
        :name="form.language.name"
        type="hidden"/>
    </b-field>

    <b-field style="display:none">
      <b-input
        v-model="form.format.value"
        :name="form.format.name"
        type="hidden"/>
    </b-field>

    <b-field style="display:none">
      <b-input
        v-model="form.next.value"
        :name="form.next.name"
        type="hidden"/>
    </b-field>

    <b-field label="Name">
      <b-input
        v-model="form.name.value"
        :name="form.name.name"
        type="text"
        maxlength="50"
        required/>
    </b-field>

    <b-field label="Email">
      <b-input
        v-model="form.email.value"
        :name="form.email.name"
        type="email"
        maxlength="50"
        required/>
    </b-field>

    <b-field label="Message">
      <b-input
        v-model="form.message.value"
        :name="form.message.name"
        type="textarea"
        maxlength="200"
        required/>
    </b-field>

    <b-field>
      <button
        :disabled="isDisabled"
        class="button is-link"
        type="submit">
        Send
      </button>
    </b-field>
  </form>
</template>

<script>
export default {
  data() {
    return {
      url: `https://formspree.io/${process.env.contactEmail}`,
      form: {
        subject: {
          name: '_subject',
          value: 'Contact'
        },
        language: {
          name: '_language',
          value: 'fr'
        },
        format: {
          name: '_format',
          value: 'html'
        },
        next: {
          name: '_next',
          value: ''
        },
        name: {
          name: 'name',
          value: ''
        },
        email: {
          name: '_replyto',
          value: ''
        },
        message: {
          name: 'message',
          value: ''
        }
      }
    }
  },

  computed: {
    isDisabled() {
      return (
        !this.form.name.value ||
        !this.form.email.value ||
        !this.form.message.value
      )
    }
  }
}
</script>
