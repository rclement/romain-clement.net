<template>
  <div class="software">
    <section class="section">
      <div class="container">
        <div
          v-for="(project, key) in $t('projects')"
          :key="key"
          class="columns is-vcentered">
          <div class="column">
            <h1 class="title">{{ project.title }}</h1>
            <h6 class="subtitle">{{ project.description }}</h6>
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
