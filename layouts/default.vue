<template>
<div class="dp-flex f-drt-column">
  <nav-bar/>
  <div class="dp-flex f-drt-row f-drt-column-mobile">
    <nav-menu/>
    <div class="h-55calc w-100pct ovf-y-auto">
      <nuxt/>
    </div>
  </div>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavMenu,
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
body {
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
}
</style>
