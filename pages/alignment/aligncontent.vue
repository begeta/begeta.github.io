<template>
  <div class="pd-10px">
    <h1>Align Content</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ การกระจาย Content ด้านใน Container ใช้ Align Content เพื่อจัดในแกน Cross-Axis</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive YES</h3>
    <responsive/>

    <h3>Hover NO</h3>
  </div>
</template>

<script>
import TableAtomic from '@/components/TableAtomic'
import Responsive from '@/components/Responsive'

export default {
  components: {
    TableAtomic,
    Responsive
  },
  data () {
    return {
      property: [
        ['Class', 'al-ct'],
        ['Property', 'align-content']
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
      }
    }
  }
}
</script>

