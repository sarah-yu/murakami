<template>
  <div class="quote">
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import QuotesService from '@/services/QuotesService'

export default {
  name: 'Quotes',

  data() {
    return {
      quote: ''
    }
  },

  mounted() {
    this.getQuotes()
  },

  methods: {
    async getQuotes() {
      const res = await QuotesService.fetchQuotes()
      this.quote = res.data.text
    }
  }
}
</script>

<style>
</style>
