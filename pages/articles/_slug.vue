<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <p class="title">
            {{ article.meta.title }}
          </p>

          <p class="subtitle is-6">
            <small>
              <i18n path="articles.slug.by">
                <template v-slot:author>
                  {{ $t(`common.feeds.authors.${article.meta.author}`).name }}
                </template>
                <template v-slot:date>
                  {{ $d(article.meta.published, 'short') }}
                </template>
              </i18n>

              <br />

              <i18n path="articles.slug.reading">
                <template v-slot:time>
                  {{ $tc('articles.slug.minutes', article.readingTime) }}
                </template>
              </i18n>
            </small>
          </p>

          <b-taglist>
            <b-tag v-for="tag in article.meta.tags" :key="tag">
              {{ tag }}
            </b-tag>
          </b-taglist>

          <hr />

          <div class="content">
            <span v-html="article.content" />
          </div>

          <hr />

          <p class="has-text-centered">
            <i18n path="articles.slug.mistake" tag="small">
              <template v-slot:url>
                <a :href="repoUrl" :title="repoName" :alt="repoName">
                  {{ repoName }}
                </a>
              </template>
            </i18n>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint vue/no-v-html: "off" */

import Vue from 'vue'
import { ContentItem } from '~/content'

export default Vue.extend({
  asyncData(context) {
    const slug = context.params.slug
    const article = context.$content.articles.find((a) => a.slug === slug)

    if (!article) {
      return context.error({ statusCode: 404 })
    }

    article.meta.published = new Date(article.meta.published)

    return {
      article,
    }
  },

  data() {
    return {
      article: {} as ContentItem,
      repoName: this.$t('common.app.repository.name'),
    }
  },

  computed: {
    repoUrl(): string {
      const baseurl = this.$t('common.app.repository.url')
      return `${baseurl}/blob/master/${this.article.filepath}`
    },
  },
})
</script>
