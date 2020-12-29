<template>
  <div>
    <p class="title">
      <b-icon pack="fas" icon="laptop-code" />
      {{ $t('home.freelancing.title') }}
      <a class="anchor-link" href="#freelancing">#</a>
    </p>

    <i18n path="home.freelancing.interests.text" tag="p">
      <template #data>
        <span>
          <strong>{{ $t('home.freelancing.interests.data') }}</strong>
        </span>
      </template>

      <template #ci-cd>
        <span>
          <strong>{{ $t('home.freelancing.interests.cicd') }}</strong>
        </span>
      </template>

      <template #privacy-by-design>
        <a
          :href="privacyByDesign.url"
          :title="privacyByDesign.name"
          :alt="privacyByDesign.name"
        >
          <span>{{ $t('home.freelancing.interests.privacyByDesign') }}</span>
        </a>
      </template>

      <template #e2ee>
        <a :href="e2ee.url" :title="e2ee.name" :alt="e2ee.name">
          <span>{{ $t('home.freelancing.interests.e2ee') }}</span>
        </a>
      </template>

      <template #active-learning>
        <a
          :href="activeLearning.url"
          :title="activeLearning.name"
          :alt="activeLearning.name"
        >
          <span>{{ $t('home.freelancing.interests.activeLearning') }}</span>
        </a>
      </template>
    </i18n>

    <br />

    <i18n path="home.freelancing.stacks.text" tag="p">
      <template #python>
        <a :href="python.url" :title="python.name" :alt="python.name">
          <span>{{ $t('home.freelancing.stacks.python') }}</span>
        </a>
      </template>

      <template #node>
        <a :href="node.url" :title="node.name" :alt="node.name">
          <span>{{ $t('home.freelancing.stacks.node') }}</span>
        </a>
      </template>

      <template #typescript>
        <a
          :href="typescript.url"
          :title="typescript.name"
          :alt="typescript.name"
        >
          <span>{{ $t('home.freelancing.stacks.typescript') }}</span>
        </a>
      </template>

      <template #nuxt>
        <a :href="nuxt.url" :title="nuxt.name" :alt="nuxt.name">
          <span>{{ $t('home.freelancing.stacks.nuxt') }}</span>
        </a>
      </template>

      <template #postgresql>
        <a
          :href="postgresql.url"
          :title="postgresql.name"
          :alt="postgresql.name"
        >
          <span>{{ $t('home.freelancing.stacks.postgresql') }}</span>
        </a>
      </template>

      <template #docker>
        <a :href="docker.url" :title="docker.name" :alt="docker.name">
          <span>{{ $t('home.freelancing.stacks.docker') }}</span>
        </a>
      </template>

      <template #gitlab-ci>
        <a :href="gitlabCI.url" :title="gitlabCI.name" :alt="gitlabCI.name">
          <span>{{ $t('home.freelancing.stacks.gitlabCI') }}</span>
        </a>
      </template>

      <template #github-actions>
        <a
          :href="githubActions.url"
          :title="githubActions.name"
          :alt="githubActions.name"
        >
          <span>{{ $t('home.freelancing.stacks.githubActions') }}</span>
        </a>
      </template>

      <template #exploring>
        <a :href="life.url" :title="life.name" :alt="life.name">
          <span>{{ $t('home.freelancing.stacks.exploring') }}</span>
        </a>
      </template>

      <template #rust>
        <a :href="rust.url" :title="rust.name" :alt="rust.name">
          <span>{{ $t('home.freelancing.stacks.rust') }}</span>
        </a>
      </template>
    </i18n>

    <br />

    <p>
      {{ $t('home.freelancing.notInterested.text') }}
    </p>

    <br />

    <i18n path="home.freelancing.moto.text" tag="p">
      <template #new-contracts>
        <span>
          <strong>{{ $t('home.freelancing.moto.newContracts') }}</strong>
        </span>
      </template>
    </i18n>

    <br />

    <article v-for="company in companies" :key="company.name" class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <a :href="company.url" :title="company.name" :alt="company.name">
            <img :src="company.img" :alt="company.name" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a
                :href="company.url"
                :title="company.name"
                :alt="company.name"
                class="has-text-dark"
              >
                {{ company.name }}
              </a>
            </strong>
            <br />
            {{ company.job }}
          </p>

          <b-taglist>
            <b-tag v-for="skill in company.skills" :key="skill">
              {{ skill }}
            </b-tag>
          </b-taglist>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      privacyByDesign: this.$t('common.links.privacyByDesign'),
      e2ee: this.$t('common.links.e2ee'),
      activeLearning: this.$t('common.links.activeLearning'),
      python: this.$t('common.links.python'),
      node: this.$t('common.links.node'),
      typescript: this.$t('common.links.typescript'),
      nuxt: this.$t('common.links.nuxt'),
      postgresql: this.$t('common.links.postgresql'),
      docker: this.$t('common.links.docker'),
      gitlabCI: this.$t('common.links.gitlabCI'),
      githubActions: this.$t('common.links.githubActions'),
      life: this.$t('common.links.life'),
      rust: this.$t('common.links.rust'),
      companies: this.$t('common.companies'),
    }
  },
})
</script>
