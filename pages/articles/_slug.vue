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
              <i18n path="articles.slug.published">
                <template v-slot:date>
                  {{ $d(new Date(article.meta.published), 'short') }}
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
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint vue/no-v-html: "off" */

import Vue from 'vue'

export default Vue.extend({
  asyncData(context) {
    const slug = context.params.slug
    const article = context.$content.articles.find((a) => a.slug === slug)

    if (!article) {
      return context.error({ statusCode: 404 })
    }

    return {
      article,
    }
  },
})
</script>
