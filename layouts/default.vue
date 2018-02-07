<template>
<div class="dp-flex f-drt-column">
  <nav-bar/>
  <div class="dp-flex f-drt-row f-drt-column-mobile">
    <nav-menu/>
    <nuxt/>
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
</style>
