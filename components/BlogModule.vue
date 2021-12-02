<script>
export default {
  layout: 'bloglayout',
  data() {
    return { articles: {} }
  },
  async fetch({ $content }) {
this.articles = await this.$http.$get('https://api.nuxtjs.dev/posts')
    
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    logCont($content){
      console.log($content)
    }
  },
}
</script>

<template>
  <div>
    <p>blog module</p>
<p> {{ articles }}</p>
    <div v-for="article in articles" :key="article.index">
    <span> #{{ article }}</span>
    </div>
    <button @click="logCont">log</button>
  </div>
</template>
