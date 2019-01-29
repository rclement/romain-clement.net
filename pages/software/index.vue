<template>
  <div class="software">
    <section class="section">
      <div class="container">
        <div
          v-for="(project, key) in $t('projects')"
          :key="key"
          class="columns">
          <div class="column">
            <nuxt-link :to="localePath({ name: 'software-slug', params: { slug: project.slug } })">
              <p class="title">{{ project.title }}</p>
            </nuxt-link>

            <p class="subtitle">{{ project.description }}</p>

            <div class="tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag">
                {{ tag }}
              </span>
            </div>
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

  head() {
    return this.$pageHead('software')
  }
}
</script>

<style scoped>
.column.is-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
