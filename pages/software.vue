<template>
  <div class="software">
    <section
      id="meeblip-controller"
      class="section">
      <div class="container">
        <div
          v-for="project in $t('software.projects')"
          :key="project.title"
          class="columns is-vcentered">
          <div class="column">
            <h1 class="title">{{ project.title }}</h1>
            <h6 class="subtitle">{{ project.subtitle }}</h6>
            <div
              class="content"
              v-html="project.content"/>

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
              :src="project.image.src"
              :title="project.image.title"
              :height="project.image.height"/>
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
