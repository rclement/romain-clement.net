<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <hero-section />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <freelancing-section id="freelancing" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <open-source-section id="open-source" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <talks-section id="talks" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <music-section id="music" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <contact-section id="contact" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/HomeHero.vue'
import FreelancingSection from '~/components/HomeFreelancing.vue'
import OpenSourceSection from '~/components/HomeOpenSource.vue'
import TalksSection from '~/components/HomeTalks.vue'
import MusicSection from '~/components/HomeMusic.vue'
import ContactSection from '~/components/HomeContact.vue'

export default Vue.extend({
  components: {
    HeroSection,
    FreelancingSection,
    OpenSourceSection,
    TalksSection,
    MusicSection,
    ContactSection,
  },
})
</script>
