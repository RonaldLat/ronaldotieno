

<template>
  <div class="w-full">
    <h1>Blog Posts</h1>
    <ul class="grid gap-3 lg:gap-4">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="p-2 bg-gray-100 shadow-md md:max-w-2xl"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex w-full transition-all duration-300 transform scale-100 hover:scale-95"
        >
          <img
            :src="'/' + article.img"
            class="block object-cover w-2/5 h-24 bg-black rounded"
          />
          <div class="w-3/5 pl-3 ">
            <div
              class="grid w-full grid-cols-2 pb-4 text-xs font-semibold text-gray-500 capitalize "
            >
              <div
              >
                <span
                v-for="tag in article.tags"
                :key="tag.index"
                  class="inline-block p-1 mr-1 text-gray-600 lowercase transition duration-300 bg-purple-200 rounded-md hover:bg-purple-400"
                  >{{ tag }}</span
                >
              </div>
              <!-- <span class="text-right text-gray-400">
                {{ formatDate(article.createdAt) }}
              </span> -->
            </div>
            <h3 class="mb-3 font-semibold leading-tight text-md">
              {{ article.title }}
            </h3>
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
              <div>Ronald Otieno</div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
