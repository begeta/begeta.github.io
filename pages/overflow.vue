<template>
  <div class="pd-10px">
    <h1>Overflow</h1>
    <div>Overflow ใช้กำหนดการจัดการ Overflow Content</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive YES</h3>
    <table-atomic :data="responsive"></table-atomic>

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
        ['Class', 'ovf', 'ovf-x', 'ovf-y'],
        ['Property', 'overflow', 'overflow-x', 'overflow-y']
      ],
      value: [
        ['Class', 'visible', 'auto', 'hidden', 'scroll'],
        ['Value Description', 'สำหรับ "visible"', 'สำหรับ "auto"', 'สำหรับ "hidden"', 'สำหรับ "scroll"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
