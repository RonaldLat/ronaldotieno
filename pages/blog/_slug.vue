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

head() {
    return {
      title: `${this.article.title} - `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // OG
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.baseUrl}/${this.article.slug}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.title} - Ronald Otieno Blog`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },

        // Twitter card
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${this.$config.baseUrl}/${this.article.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.article.title} - Ronald Otieno Blog`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/${this.article.slug}`,
        },
      ],
    }

}
</script>

<template>
  <article
    class="prose px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20 pb-10 prose-indigo"
  >
    <h1>{{ article.title }}</h1>
    <p class="font-semibold">
      Article last updated: {{ formatDate(article.updatedAt) }}
    </p>

    <img
      class="rounded-md w-full h-auto p-3 min-h-56"
      :src="'/' + article.img"
      :alt="article.alt"
    />
    <nuxt-content :document="article" />

    <div class="pt-8">
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>
