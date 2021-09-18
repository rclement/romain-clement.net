<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <hero-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <freelancing-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <certifications-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <open-source-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <talks-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <music-section />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <reading-list :books="books" :snippet="true" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <contact-section />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { Book } from '~/content'
import HeroSection from '~/components/HomeHero.vue'
import FreelancingSection from '~/components/HomeFreelancing.vue'
import CertificationsSection from '~/components/HomeCertifications.vue'
import OpenSourceSection from '~/components/HomeOpenSource.vue'
import TalksSection from '~/components/HomeTalks.vue'
import MusicSection from '~/components/HomeMusic.vue'
import ContactSection from '~/components/HomeContact.vue'
import ReadingList from '~/components/ReadingList.vue'

type BookResult = IContentDocument & Book

export default Vue.extend({
  components: {
    HeroSection,
    FreelancingSection,
    CertificationsSection,
    OpenSourceSection,
    TalksSection,
    MusicSection,
    ReadingList,
    ContactSection,
  },

  async asyncData({ $content }) {
    const books = (await $content('books').limit(3).fetch()) as BookResult[]

    return {
      books,
    }
  },

  data() {
    return {
      books: [] as BookResult[],
    }
  },
})
</script>
