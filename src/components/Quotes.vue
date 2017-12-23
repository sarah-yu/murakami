<template>
  <div class="quote" v-on:click='getQuotes'>
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

  created() {
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
.quote {
  cursor: e-resize;
  font-family: 'Lora', serif;
  font-size: 32px;
  line-height: 1.6;
  margin: -40px auto 0 auto;
  width: 60%;
}
</style>
