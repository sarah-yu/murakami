<template>
  <div class="quote" v-on:click='fadeOutQuote'>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import $ from 'jquery'
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
    getQuotes() {
      QuotesService.fetchQuotes()
        .then(res => {
          this.quote = res.data.text
        })
        .then(() => {
          $('.quote')
            .hide()
            .fadeIn(900)
        })
        .catch(err => console.log(err))
    },
    fadeOutQuote() {
      $('.quote').fadeOut(800, () => {
        this.getQuotes()
      })
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
  -webkit-tap-highlight-color: rgba(0,0,0,0);
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
