<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <p class="title">{{ $t('contact.title') }}</p>
            <contact-form/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    ContactForm
  }
}
</script>
