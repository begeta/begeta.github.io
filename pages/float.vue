<template>
  <div class="pd-10px">
    <h1>Float</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Float ประกอบด้วย</div>

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
        ['Class', 'f'],
        ['Property', 'float']
      ],
      value: [
        ['Class', 'left', 'right', 'none'],
        ['Value Description', 'สำหรับ "left"', 'สำหรับ "right"', 'สำหรับ "none"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
