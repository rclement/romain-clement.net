<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="title">
                    <b-icon pack="fas" icon="newspaper" size="is-large" />
                    {{ $t('articles.title') }}
                  </p>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item">
                  <b-icon class="feed" pack="fas" icon="rss" size="is-small" />
                  <a
                    v-for="feed in feeds.formats"
                    :key="feed.name"
                    :href="`${feeds.basepath}/articles/${feed.file}`"
                    :title="feed.name"
                    :alt="feed.name"
                    class="feed"
                  >
                    {{ feed.name }}
                  </a>
                </div>
              </div>
            </div>

            <p>
              {{ $t('articles.text') }}
            </p>

            <br />

            <div
              v-for="yearArticles in yearSortedArticles"
              :key="yearArticles.year"
            >
              <p class="subtitle">
                {{ yearArticles.year }}
              </p>

              <article
                v-for="article in yearArticles.articles"
                :key="article.slug"
                :data-slug="article.slug"
                class="media"
              >
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>
                        <nuxt-link
                          :to="
                            localePath({
                              name: 'articles-slug',
                              params: { slug: article.slug },
                            })
                          "
                        >
                          {{ article.meta.title }}
                        </nuxt-link>
                      </strong>
                      <small>
                        {{ $d(new Date(article.meta.published), 'short') }}
                      </small>
                    </p>

                    <p>{{ article.meta.summary }}</p>

                    <b-taglist>
                      <b-tag v-for="tag in article.meta.tags" :key="tag">
                        {{ tag }}
                      </b-tag>
                    </b-taglist>
                  </div>
                </div>
              </article>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { ContentItem } from '~/content'

export default Vue.extend({
  asyncData(context) {
    const articles = Object.values(context.$content.articles).filter(
      (item) => !item.meta.draft
    )
    articles.sort(
      (a, b) => +new Date(b.meta.published) - +new Date(a.meta.published)
    )

    return {
      articles,
    }
  },

  data() {
    return {
      articles: [] as ContentItem[],
      feeds: this.$t('common.feeds'),
    }
  },

  computed: {
    yearSortedArticles(): { year: number; articles: ContentItem[] }[] {
      const byYear = this.articles.reduce(
        (obj: { [key: string]: ContentItem[] }, a) => {
          const year = new Date(a.meta.published).getFullYear()
          const yearStr = year.toString()
          if (!(yearStr in obj)) {
            obj[yearStr] = []
          }
          obj[yearStr].push(a)
          return obj
        },
        {}
      )

      return Object.entries(byYear)
        .map(([key, value]) => ({
          year: Number.parseInt(key),
          articles: value,
        }))
        .sort((a, b) => b.year - a.year)
    },
  },
})
</script>

<style scoped>
.feed {
  margin-right: 0.5rem;
}
</style>
