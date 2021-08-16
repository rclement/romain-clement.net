<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <reading-list :books="books" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { Book } from '~/content'
import ReadingList from '~/components/ReadingList.vue'

type BookResult = IContentDocument & Book

export default Vue.extend({
  components: {
    ReadingList,
  },

  async asyncData({ $content }) {
    const books = (await $content('books').fetch()) as BookResult[]

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
