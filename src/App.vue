<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link :to="{ name: 'Quotes' }">Home</router-link> -->
    <!-- <router-link :to="{ name: 'About' }">About</router-link> -->
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
	box-sizing: border-box;
	height: 100%;
  margin: 0 auto;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

body {
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

}

img {
	width: 100%;
}

#app {
  height: 100%;
  margin: 0 auto;
}

main {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
