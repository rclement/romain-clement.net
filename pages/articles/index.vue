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
                    <b-icon pack="fas" icon="newspaper" size="is-medium" />
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

            <section>
              <b-field :label="$t('articles.tags.label')" horizontal>
                <b-taginput
                  v-model="selectedTags"
                  :data="shortlistTags"
                  :allow-new="false"
                  :open-on-focus="true"
                  :maxtags="5"
                  :placeholder="$t('articles.tags.placeholder')"
                  autocomplete
                  icon-pack="fas"
                  icon="tag"
                  @typing="findShortlistTags"
                  @input="updateShortlistTags"
                />
              </b-field>
            </section>

            <br />

            <article
              v-for="article in filteredArticles"
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
                        {{ article.title }}
                      </nuxt-link>
                    </strong>
                    <br />
                    <small class="has-text-grey">
                      {{ $d(article.published, 'short') }}
                    </small>
                  </p>

                  <p>{{ article.summary }}</p>

                  <b-taglist>
                    <b-tag v-for="tag in article.tags" :key="tag">
                      {{ tag }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
            </article>
          </div>
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
    const contentArticles = (await context
      .$content('articles')
      .sortBy('published', 'desc')
      .fetch()) as ArticleResult[]

    const articles = contentArticles.map((a) => {
      a.published = new Date(a.published)
      return a
    })

    const tags = articles.reduce((obj, a) => {
      a.tags.forEach((t) => {
        obj.add(t)
      })
      return obj
    }, new Set<string>())

    return {
      articles,
      tags: Array.from(tags).sort(),
      shortlistTags: Array.from(tags).sort(),
    }
  },

  data() {
    return {
      articles: [] as ArticleResult[],
      tags: [] as string[],
      selectedTags: [] as string[],
      shortlistTags: [] as string[],
      feeds: this.$t('common.feeds'),
    }
  },

  computed: {
    filteredArticles(): ArticleResult[] {
      return this.articles.filter(
        (a) =>
          !a.draft && this.selectedTags.every((t: string) => a.tags.includes(t))
      )
    },
  },

  methods: {
    findShortlistTags(tag: string): void {
      this.shortlistTags = this.tags.filter(
        (t) => t.includes(tag.toLowerCase()) && !this.selectedTags.includes(t)
      )
    },

    updateShortlistTags(): void {
      this.shortlistTags = this.tags.filter(
        (t) => !this.selectedTags.includes(t)
      )
    },
  },
})
</script>

<style scoped>
.feed {
  margin-right: 0.5rem;
}
</style>
