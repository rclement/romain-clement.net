<template>
  <section class="section">
    <div class="container">
      <div class="columns is-reverse-tablet">
        <div class="column is-one-quarter">
          <scrollactive class="sticky" active-class="is-active">
            <aside class="menu">
              <p class="menu-label">{{ $t('articles.slug.menu') }}</p>
              <ul class="menu-list">
                <li v-for="link of article.toc" :key="link.id">
                  <nuxt-link
                    class="scrollactive-item"
                    :to="`#${link.id}`"
                    :class="{
                      'py-2': link.depth === 2,
                      'ml-2 pb-2': link.depth === 3,
                      'ml-3 pb-2': link.depth === 4,
                      'ml-4 pb-2': link.depth === 5,
                      'ml-5 pb-2': link.depth === 6,
                    }"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ul>
            </aside>
          </scrollactive>
        </div>

        <div class="column is-half">
          <p class="title">
            {{ article.title }}
          </p>

          <b-taglist>
            <b-tag v-for="tag in article.tags" :key="tag">
              {{ tag }}
            </b-tag>
          </b-taglist>

          <p class="heading">
            {{ $d(article.published, 'short') }}
            ·
            {{ $t(`common.feeds.authors.${article.author}`).name }}
            ·
            <i18n path="articles.slug.reading">
              <template #time>
                {{ $tc('articles.slug.minutes', article.readingTime) }}
              </template>
            </i18n>
          </p>

          <hr />

          <div class="content">
            <nuxt-content :document="article" />
          </div>

          <hr />

          <p class="has-text-centered">
            <i18n path="articles.slug.mistake" tag="small">
              <template #url>
                <a
                  :href="`${repo.url}/blob/master/content${article.path}${article.extension}`"
                  :title="repo.name"
                  :alt="repo.name"
                >
                  {{ repo.name }}
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
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { Article } from '~/content'

type ArticleResult = IContentDocument & Article

export default Vue.extend({
  async asyncData(context) {
    try {
      const slug = context.params.slug
      const article = (await context
        .$content('articles', slug)
        .fetch()) as ArticleResult

      article.published = new Date(article.published)

      return {
        article,
      }
    } catch (e) {
      return context.error({ statusCode: 404 })
    }
  },

  data() {
    return {
      article: {} as ArticleResult,
      repo: this.$t('common.app.repository'),
    }
  },

  head(): object {
    const meta = [
      { hid: true, name: 'description', value: this.article.summary },
      { hid: true, name: 'keywords', value: this.article.tags.join(',') },
      { hid: true, name: 'og:title', value: this.article.title },
      { hid: true, name: 'og:description', value: this.article.summary },
      { hid: true, name: 'og:type', value: 'article' },
      {
        hid: true,
        name: 'article:published_time',
        value: this.article.published.toISOString().split('T')[0],
      },
      {
        hid: true,
        name: 'article:author',
        value: this.$t(`common.feeds.authors.${this.article.author}.name`),
      },
      ...this.article.tags.map((t) => ({
        hid: false,
        name: 'article:tag',
        value: t,
      })),
    ]

    return {
      title: this.article.title,
      meta: meta.map((m) => ({
        ...(m.hid ? { hid: m.name } : {}),
        name: m.name,
        property: m.name,
        content: m.value,
      })),
    }
  },
})
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 4rem;
}
</style>
