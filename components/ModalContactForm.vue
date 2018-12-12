<template>
  <b-modal
    :active="active"
    has-modal-card
    @close="$emit('update:active', false)">
    <div
      class="modal-card has-text-left">
      <header class="modal-card-head">
        <p class="modal-card-title">Contact form</p>
      </header>

      <section class="modal-card-body">
        <contact-form :subject="subject"/>
      </section>
    </div>
  </b-modal>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    subject: {
      type: String,
      default: ''
    }
  }
}
</script>
