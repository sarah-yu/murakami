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

  watch: {
    $route: 'getQuotes'
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
  width: 60%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .quote {
    font-size: 26px;
    width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .quote {
    font-size: 18px;
    line-height: 1.8;
    width: 90%;
  }
}
</style>
