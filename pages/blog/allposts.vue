<script>
export default {
  layout: 'bloglayout',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(9)
      .fetch()

    return {
      articles,
    }
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
  <div
    class="w-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <AllPostsHeader />

    <ul class="grid gap-3 lg:gap-4">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="p-2 bg-gray-100 rounded shadow-md md:max-w-2xl transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <BlogCard :article="article" />
      </li>
    </ul>
  </div>
</template>
