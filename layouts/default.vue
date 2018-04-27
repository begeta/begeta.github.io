<template>
<div class="dp-flex f-drt-column">
  <div class="dp-flex f-drt-row f-drt-column-mobile">
    <nav-menu/>
    <PerfectScrollbar class="h-100vh">
      <div class="h-100vh w-100pct pd-l-20px">
        <nuxt/>
      </div>
    </PerfectScrollbar>
  </div>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import PerfectScrollbar from '@/components/PerfectScrollbar'

export default {
  components: {
    NavMenu,
    PerfectScrollbar
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
