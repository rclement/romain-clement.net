<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <p class="title">
            {{ article.meta.title }}
          </p>
          <p class="subtitle">
            <small>{{ $d(new Date(article.meta.published), 'short') }}</small>
            |
            <template v-for="tag in article.meta.tags">
              <b-tag :key="tag" type="is-info">
                {{ tag }}
              </b-tag>
              <slot> </slot>
            </template>
          </p>

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
    const article = context.$content.articles[slug]

    if (!article) {
      return context.error({ statusCode: 404 })
    }

    return {
      article,
    }
  },
})
</script>
