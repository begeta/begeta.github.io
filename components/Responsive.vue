<template>
  <div>
    <h3>Responsive YES</h3>
    <table-atomic :data="responsive"></table-atomic>
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
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
