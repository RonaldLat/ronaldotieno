<script>
export default {
  layout: 'bloglayout',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags', 'createdAt'])
      .sortBy('createdAt', 'asc')
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
  <div class="w-full">
    <h1>Blog Posts</h1>
    <ul class="grid lg:grid-cols-2 gap-3 lg:gap-4 ">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="shadow-md md:max-w-2xl bg-gray-100"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex gap-2 p-3 items-center"
        >
          <img :src="'/' + article.img" class="rounded bg-black md:h-40 md:w-40 w-24 h-24" />
          <div class="flex flex-col  ">
            <h4 class="text-sm text-bold inline pb-3">{{ formatDate(article.createdAt) }}</h4>
            <h2 class="text-xl text-bold pb-2">{{ article.title }}</h2>
            <p class="text-sm text-gray-500">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <ul class="grid gap-4 mt-10 hidden md:grid-cols-2">
      <li v-for="article of articles" :key="article.slug" class="shadow-md">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="overflow-hidden transition-shadow duration-300 rounded shadow-sm"
        >
          <img
            :src="'/' + article.img"
            class="object-cover w-full h-64"
            alt=""
          />
          <div class="p-5">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
                >{{ article.tags }}</a
              >
              <span class="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              :title="article.title"
              class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >{{ article.title }}</a
            >
            <p class="mb-2 text-gray-700">
              {{ article.description }}
            </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >Learn more</a
            >
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
