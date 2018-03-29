<template>
  <div>
    <table-atomic :data="responsive_data" type="responsive"></table-atomic>
  </div>
</template>

<script>
import TableAtomic from './TableAtomic.vue'
export default {
  components: {
    TableAtomic
  },
  data () {
    return {
      responsive_data: [
        ['Class', 'mobile', 'tablet', 'tablet-only', 'desktop', 'desktop-only', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', '769px to 1023px', 'from 1024px', '1024px to 1215px', 'from 1216px']
      ]
    }
  }
}
</script>
