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
      .limit(3)
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
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div>
      <p
        class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-teal-900 uppercase rounded-full"
      >
        blog
      </p>
    </div>

    <div >

      <ul class="grid gap-3 lg:gap-4">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="p-2 bg-gray-100 rounded shadow-md md:max-w-2xl transition-all duration-300 transform scale-100 hover:scale-95"
        >
          <BlogCard :article="article" />
        </li>
      </ul>

      <div class="text-center pt-16">
        <a
          href="/blog/allposts"
          aria-label="all articles list"
          class="inline-flex items-center font-semibold transition-colors duration-200 text-purple-500 hover:text-purple-800"
        >
          See more
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </a>
      </div>

    </div>
  </div>
</template>
