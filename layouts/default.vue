<template>
<div>
  <div class="is-layout">
    <nav-menu/>
    <section class="section is-section-container is-full-width is-paddingless is-background-white">
      <nuxt/>
    </section>
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

<style scoped>
.is-height-50px{
  height: 50px;
}

.is-width-800px{
  max-width: 800px;
}
</style>
