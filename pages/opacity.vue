<template>
  <div class="pd-10px">
    <h1>Opacity</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Opacity ประกอบด้วย</div>

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
        ['Class', 'opct'],
        ['Property', 'opacity']
      ],
      value: [
        ['Class', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
        ['Value Description', 'สำหรับ "0"', 'สำหรับ "0.1"', 'สำหรับ "0.2"', 'สำหรับ "0.3"', 'สำหรับ "0.4"', 'สำหรับ "0.5"', 'สำหรับ "0.6"', 'สำหรับ "0.7"', 'สำหรับ "0.8"', 'สำหรับ "0.9"', 'สำหรับ "1"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
