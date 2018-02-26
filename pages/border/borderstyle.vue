<template>
  <div class="pd-10px">
    <h1>Border Style</h1>
    <div>ใช้กำหนดลักษณะของ Border</div>

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
        ['Class', 'bd-st'],
        ['Property', 'border-style']
      ],
      value: [
        ['Class', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
        ['Value Description', 'สำหรับ "dotted"', 'สำหรับ "dashed"', 'สำหรับ "solid"', 'สำหรับ "double"', 'สำหรับ "groove"', 'สำหรับ "ridge"', 'สำหรับ "inset"', 'สำหรับ "outset"', 'สำหรับ "none"', 'สำหรับ "hidden"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
