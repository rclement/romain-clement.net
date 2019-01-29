<template>
  <div class="software-slug">
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">{{ project.title }}</p>
            <p class="subtitle">{{ project.description }}</p>
            <div
              class="content"
              v-html="$md.render(project.body)"/>

            <div class="tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="column is-centered">
            <image-modal
              v-if="project.thumbnail"
              :src="project.thumbnail"
              :title="project.title"
              height="400px"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageModal from '@/components/ImageModal'

export default {
  components: {
    ImageModal
  },

  async asyncData({ app, route, error }) {
    const slug = route.params.slug
    const i18nKey = `projects.${slug}`
    const project = app.i18n.t(i18nKey)

    if (project === i18nKey) {
      return error({ statusCode: 404 })
    }

    return {
      slug: slug,
      project: project
    }
  }
}
</script>
