<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<template>
  <article class="prose min-w-full px-8 pb-10 prose-indigo">
    <h1 >{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img class="rounded-md w-full h-auto p-3 min-h-56" :src="'/'+article.img" :alt="article.alt" />
    <p class="">Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>
