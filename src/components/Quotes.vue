<template>
  <div class="quote">
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Quotes',

  data() {
    return {
      quote: ''
    }
  },

  created() {
    this.fetchQuote()
  },

  watch: {
    $route: 'fetchQuote'
  },

  methods: {
    fetchQuote() {
      axios
        .get('http://localhost:3001/api/quotes')
        .then(res => {
          console.log(res)
          this.quote = res.data.text
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
