<template>
<div class="dp-flex f-drt-column">
  <div class="dp-flex f-drt-row f-drt-column-mobile">
    <nav-menu/>
    <div class="h-55calc w-100pct ovf-y-auto pd-l-20px">
      <nuxt/>
    </div>
  </div>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu'

export default {
  components: {
    NavMenu
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
