<template>
  <div id="music">
    <p class="title">
      <b-icon pack="fas" icon="music" size="is-medium" custom-size="xs" />
      {{ $t('home.music.title') }}
      <a class="anchor-link" href="#music"></a>
    </p>

    <p>
      {{ $t('home.music.text') }}
    </p>

    <br />

    <article v-for="band in bands" :key="band.name" class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <a :href="band.url" :title="band.name" :alt="band.name">
            <img :src="band.img" :alt="band.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ band.name }}</strong>
            <small>{{ band.style }}</small>
            <br />
            {{ band.text }}
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
      bands: this.$t('common.bands'),
    }
  },
})
</script>
