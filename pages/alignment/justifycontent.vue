<template>
  <div class="pd-10px">
    <h1>Justify Content</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ การกระจาย Content ด้านใน Container ใช้ Justify Content เพื่อจัดในแกน Main-Axis</div>

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
        ['Class', 'jtf-ct'],
        ['Property', 'justify-content']
      ],
      value: {
        class: [
          'Class',
          'start',
          'end',
          'left',
          'right',
          'flex-start',
          'flex-end',
          'strecth',
          'space-between',
          'space-around',
          'space-evenly'
        ],
        description: [
          'Value Description',
          'สำหรับ "start"',
          'สำหรับ "end"',
          'สำหรับ "left"',
          'สำหรับ "right"',
          'สำหรับ "flex-start"',
          'สำหรับ "flex-end"',
          'สำหรับ "strecth"',
          'สำหรับ "space-between"',
          'สำหรับ "space-around"',
          'สำหรับ "space-evenly"'
        ]  
      },
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>

