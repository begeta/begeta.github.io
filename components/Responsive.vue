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
        ['Class', 'mobile', 'tablet', 'tablet-only', 'desktop'],
        ['Breakpoints', 'up to 768px', 'from 769px', '769px to 1023px', 'from 1024px']
      ]
    }
  }
}
</script>
