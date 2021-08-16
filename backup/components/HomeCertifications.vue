<template>
  <div id="certifications">
    <p class="title">
      <b-icon
        pack="fas"
        icon="graduation-cap"
        size="is-medium"
        custom-size="xs"
      />
      {{ $t('home.certifications.title') }}
      <a class="anchor-link" href="#certifications"></a>
    </p>

    <p>
      {{ $t('home.certifications.text') }}
    </p>

    <br />

    <article
      v-for="certification in certifications"
      :key="certification.name"
      class="media"
    >
      <div class="media-left">
        <figure class="image is-64x64">
          <a
            :href="certification.url"
            :title="certification.name"
            :alt="certification.name"
          >
            <img :src="certification.img" :alt="certification.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a
              :href="certification.url"
              :title="certification.name"
              :alt="certification.name"
              class="has-text-dark"
            >
              <strong>{{ certification.name }}</strong>
            </a>
            <small>
              {{ certification.year }}
            </small>
            <br />
            <small>{{ certification.organization }}</small>
            <br />
            {{ certification.text }}
          </p>
          <b-taglist>
            <b-tag v-for="tag in certification.tags" :key="tag">
              {{ tag }}
            </b-tag>
          </b-taglist>
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
      certifications: this.$t('common.certifications'),
    }
  },
})
</script>
