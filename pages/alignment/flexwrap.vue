<template>
  <div class="pd-10px">
    <h1>Flex Wrap</h1>
    <div>ใช้สำหรับกำหนดวิธีการ Wrap Flex items ด้านใน</div>

    <h3>Property</h3>
    <table-atomic :data="property" :width="350"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value" :width="350"></table-atomic>

    <h3>Responsive YES</h3>
    <table-atomic :data="responsive" :width="350"></table-atomic>

    <h3>Hover NO</h3>
  </div>
</template>

<script>
import TableAtomic from '@/components/TableAtomic'
export default {
  components: {
    TableAtomic
  },
  data () {
    return {
      property: [
        ['Class', 'f-w'],
        ['Property', 'flex-wrap']
      ],
      value: [
        ['Class', 'nowrap', 'wrap', 'wrap-reverse'],
        ['Value Description', 'สำหรับ "nowrap"', 'สำหรับ "wrap"', 'สำหรับ "wrap-reverse"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>

