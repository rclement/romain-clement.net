<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="paper-plane" />
      {{ $t('home.contact.title') }}
      <a class="anchor-link" href="#contact">#</a>
    </p>

    <p>
      {{ $t('home.contact.subtitle') }}
    </p>

    <br />

    <b-message type="is-info" has-icon icon-pack="fas" icon="key">
      <i18n path="home.contact.notice">
        <template #pgp>
          <a :href="pgp.url" :title="pgp.name" :alt="pgp.name">
            <span>{{ pgp.name }}</span>
          </a>
        </template>
      </i18n>
    </b-message>

    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <b-field
          :type="{
            'is-danger': $v.name.$error,
            'is-success': !$v.name.$invalid,
          }"
        >
          <b-input
            v-model.trim="$v.name.$model"
            :placeholder="$t('home.contact.name.label')"
            type="text"
            icon-pack="fas"
            icon="user"
            data-name
          />
        </b-field>

        <b-field
          :type="{
            'is-danger': $v.email.$error,
            'is-success': !$v.email.$invalid,
          }"
        >
          <b-input
            v-model.trim="$v.email.$model"
            :placeholder="$t('home.contact.email.label')"
            type="email"
            icon-pack="fas"
            icon="at"
            data-email
          />
        </b-field>

        <b-field
          :type="{
            'is-danger': $v.subject.$error,
            'is-success': !$v.subject.$invalid,
          }"
        >
          <b-input
            v-model.trim="$v.subject.$model"
            :placeholder="$t('home.contact.subject.label')"
            type="text"
            icon-pack="fas"
            icon="envelope"
            data-subject
          />
        </b-field>

        <b-field
          :type="{
            'is-danger': $v.message.$error,
            'is-success': !$v.message.$invalid,
          }"
        >
          <b-input
            v-model.trim="$v.message.$model"
            :maxlength="$v.message.$params.maxLength.max"
            :placeholder="$t('home.contact.message.label')"
            type="textarea"
            data-message
          />
        </b-field>

        <b-field class="file">
          <b-upload
            :multiple="false"
            data-publickeyfile
            @input="publicKeyFileUpload"
          >
            <a class="button is-info">
              <b-icon pack="fas" icon="key" />
              <span>
                {{ $t('home.contact.publicKey.select') }}
              </span>
            </a>
          </b-upload>
        </b-field>

        <b-field>
          <b-input
            v-model.trim="$v.publicKey.$model"
            :placeholder="$t('home.contact.publicKey.label')"
            type="textarea"
            data-publickey
          />
        </b-field>

        <b-field>
          <b-input
            v-model.trim="$v.honeypot.$model"
            type="hidden"
            data-honeypot
          />
        </b-field>

        <div class="field">
          <b-button
            :disabled="this.$v.$invalid"
            type="is-primary"
            expanded
            @click="sendMessage"
          >
            {{ $t('home.contact.send') }}
          </b-button>
        </div>

        <i18n
          path="home.contact.powered"
          tag="p"
          class="heading has-text-centered"
        >
          <template #mailer>
            <a :href="mailer.url" :title="mailer.name" :alt="mailer.name">
              <span>{{ mailer.name }}</span>
            </a>
          </template>
        </i18n>
      </div>
    </div>

    <b-loading
      :is-full-page="true"
      :can-cancel="false"
      :active.sync="loading"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { email, maxLength, required } from 'vuelidate/lib/validators'

export default Vue.extend({
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      publicKey: '',
      honeypot: '',
      loading: false,
      pgp: this.$t('common.links.pgp'),
      mailer: this.$t('common.links.mailer'),
    }
  },

  validations: {
    name: {
      maxLength: maxLength(50),
      required,
    },
    email: {
      required,
      email,
    },
    subject: {
      maxLength: maxLength(100),
      required,
    },
    message: {
      maxLength: maxLength(1000),
      required,
    },
    publicKey: {},
    honeypot: {},
  },

  methods: {
    clear(): void {
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
      this.publicKey = ''
      this.honeypot = ''
      this.$v.$reset()
    },

    publicKeyFileUpload(value: File): void {
      const reader = new FileReader()
      reader.onload = (evt) => {
        if (evt.target) {
          this.publicKey = evt.target.result as string
        }
      }
      reader.readAsText(value)
    },

    showSuccessNotification(): void {
      this.$emit('success')

      this.$buefy.toast.open({
        duration: 2000,
        position: 'is-top',
        message: this.$t('home.contact.success') as string,
        type: 'is-success',
      })
    },

    showFailureNotification(): void {
      this.$emit('failure')

      this.$buefy.toast.open({
        duration: 5000,
        position: 'is-top',
        message: this.$t('home.contact.failure') as string,
        type: 'is-danger',
      })
    },

    async sendMessage(): Promise<void> {
      this.loading = true

      try {
        const url = `${process.env.MAILER_URL}/api/mail`
        const params = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          honeypot: this.honeypot,
          public_key: this.publicKey,
        }

        await this.$axios.$post(url, params)

        this.clear()
        this.showSuccessNotification()
      } catch (e) {
        this.showFailureNotification()
      }

      this.loading = false
    },
  },
})
</script>
