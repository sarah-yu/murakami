<template>
  <div id="app">
    <header>
      <!-- <img src="./assets/logo.png"> -->
      <nav>
        <router-link :to="{ name: 'About' }">
          <i class="fa fa-circle-thin" aria-hidden="true"></i>
        </router-link>
      </nav>
    </header>
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
  color: #333;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

}

img {
	width: 100%;
}

nav {
  position: absolute;
  top: 10px;
  right: 10px;
}

a {
  color: #333;
}

a:hover {
  color: #888;
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
