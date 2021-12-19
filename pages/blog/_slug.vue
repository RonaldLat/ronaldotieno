<script>
export default {
  layout: 'bloglayout',
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
  <article
    class="px-4 py-16 pb-10 mx-auto prose-blockquote:border-l-violet-100 lg:prose-xl marker:text-violet-600 marker:font-bold marker:text-lg lg:prose-lg prose sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20 prose-indigo"
  >
    <h1>{{ article.title }}</h1>
    <p class="font-semibold">
      Article last updated: {{ formatDate(article.updatedAt) }}
    </p>

    <img
      class="w-full h-auto p-3 rounded-md min-h-56"
      :src="'/' + article.img"
      :alt="article.alt"
    />

    <nuxt-content :document="article" />

    <div class="pt-8">
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>
