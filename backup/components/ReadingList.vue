<template>
  <div>
    <p id="reading" class="title">
      <b-icon pack="fas" icon="book-open" size="is-medium" custom-size="xs" />
      {{ $t('reading.title') }}
      <a class="anchor-link" href="#reading"></a>
    </p>

    <p>
      {{ $t('reading.text') }}
    </p>

    <br />

    <div class="columns is-multiline is-mobile">
      <div
        v-for="book in books"
        :key="book.slug"
        :data-slug="book.slug"
        class="column is-one-third"
      >
        <figure class="image is-2by3 blurred-cover">
          <a :href="book.url" :title="book.title" :alt="book.title">
            <img :src="book.cover" />
          </a>
        </figure>
      </div>
    </div>

    <div v-if="snippet">
      <br />

      <div class="has-text-centered">
        <nuxt-link :to="localePath('reading')">
          {{ $t('reading.more') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface Book {
  slug: string
  title: string
  url: string
  cover: string
}

export default Vue.extend({
  props: {
    books: {
      type: Array,
      required: true,
    } as PropOptions<Book[]>,
    snippet: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.blurred-cover {
  transition: all 0.1s ease-out;

  & img {
    box-shadow: 1rem;
    transition: filter 0.1s ease-out;
  }

  &:hover img {
    filter: blur(2px);
  }
}
</style>
