<template>
  <div class="pd-10px">
    <h1>Display</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Display ประกอบด้วยงของ Flex Items</div>

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
        ['Class', 'dp'],
        ['Property', 'display']
      ],
      value: [
        ['Class', 'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'table', 'none'],
        ['Value Description', 'สำหรับ "block"', 'สำหรับ "inline"', 'สำหรับ "inline-block"', 'สำหรับ "flex"', 'สำหรับ "inline-flex"', 'สำหรับ "grid"', 'สำหรับ "table"', 'สำหรับ "none"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
