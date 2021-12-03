<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div>
  <p class="text-blue-600">{{ article.title }}</p>
  </div>
</template>
