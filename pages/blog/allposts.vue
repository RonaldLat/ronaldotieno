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
  <div class="w-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

    <AllPostsHeader />

    <ul class="grid gap-3 lg:gap-4">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="p-2 rounded bg-gray-100 shadow-md md:max-w-2xl transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex w-full "
        >
          <img
            :src="'/' + article.img"
            class="block object-cover w-2/5 h-24 bg-black rounded"
          />
          <div class="w-3/5 flex justify-between flex-col  pl-3">
            <div
              class="grid grid-cols-1 pb-1 text-xs font-semibold text-gray-500 capitalize"
            >
              <span class="text-gray-500 justify-self-end">
                {{ formatDate(article.createdAt) }}
              </span>
            </div>
            <h3 class="mb-3 font-semibold leading-tight text-md">
              {{ article.title }}
            </h3>
            <div class="grid grid-cols-2">
              <div
                class="flex items-center w-full text-xs  font-medium text-gray-500"
              >
                <div
                  class="w-5 h-5 mr-3 rounded-full"
                  style="
                    background: url(/lat2-smaller.png) center;
                    background-size: cover;
                  "
                ></div>
                <div>Ronald Otieno</div>
              </div>

              <span class="text-gray-400 text-xs justify-self-end">
                read time 4mins
              </span>

            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
