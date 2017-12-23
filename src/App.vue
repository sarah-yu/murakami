<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link :to="{ name: 'Quotes' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {

}
</style>
