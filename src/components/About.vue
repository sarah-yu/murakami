<template>
  <div class="about">
    <p>words by haruki murakami</p>
    <router-link :to="{ name: 'Quotes' }">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.about {
  text-align: center;
}

.about p {
  letter-spacing: 0.75px;
}

</style>
