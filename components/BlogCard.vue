<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: ()=>{}
    },
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
  <div class="w-full ">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          :aria-label="`Read  - ${article.title}`"
          class="flex w-full "
        >
          <img
            :src="'/' + article.img"
	    :alt="article.alt"
            class="block object-cover w-2/5 h-24 bg-black rounded"
          />
          <div class="flex flex-col justify-between w-3/5 pl-3">
            <div
              class="pb-1 text-xs font-semibold text-gray-500 capitalize grid grid-cols-1"
            >
              <span class="text-gray-500 justify-self-end">
                {{ formatDate(article.createdAt) }}
              </span>
            </div>
            <h3 class="mb-3 font-black leading-tight text-gray-800 text-md">
              {{ article.title }}
            </h3>
            <div class="grid grid-cols-2">
            <div
              class="flex items-center w-full text-xs font-medium text-gray-500"
            >
              <div
                class="w-5 h-5 mr-3 rounded-full"
                style="
                  background: url(/lat2-smaller.png) center;
                  background-size: cover;
                "
              ></div>
              <div class="font-semibold underline decoration-wavy">Ronald Otieno</div>
            </div>
              <span class="hidden text-xs text-gray-500 justify-self-end">
                read time 4mins
              </span>
            </div>
          </div>
        </NuxtLink>
  </div>
</template>
