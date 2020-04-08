<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="music" size="is-large" />
      {{ $t('home.music.title') }}
    </p>

    <p>
      {{ $t('home.music.text') }}
    </p>

    <br />

    <article v-for="band in bands" :key="band.info.name" class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <a
            :href="band.link.url"
            :title="band.link.name"
            :alt="band.link.name"
          >
            <img :src="band.img" :alt="band.info.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ band.info.name }}</strong>
            <small>{{ band.info.style }}</small>
            <br />
            {{ band.info.text }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      bands: [
        {
          info: this.$t('home.music.bands.hambush'),
          link: this.$t('common.bands.hambush'),
          img: '/media/hambush.png',
        },
      ],
    }
  },
})
</script>
