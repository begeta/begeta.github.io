<template>
  <div class="pd-10px">
    <h1>Background Size</h1>
    <div>ใช้กำหนดรูปแบบการ Fill ของ Background Image</div>

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
        ['Class', 'bg-s'],
        ['Property', 'background-size']
      ],
      value: [
        ['Class', 'cover', 'cotain'],
        ['Value Description', 'สำหรับ "cover"', 'สำหรับ "cotain"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>

