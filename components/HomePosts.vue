<script>
export default {
  layout: 'bloglayout',
  data() {
    return { articles: {} }
  },
  async fetch() {
    this.articles = await this.$content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(9)
      .fetch()
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
  <div class="w-full px-0   lg:max-w-screen-xl md:px-2 lg:px-0 ">

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

