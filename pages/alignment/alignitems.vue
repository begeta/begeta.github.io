<template>
  <div class="pd-10px">
    <h1>Align Items</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Alignment ของ Flex Items ด้านใน Flex Container ใช้ Align Items เพื่อจัดในแกน Cross-Axis</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive <span class="cl-success">YES</span></h3>
    <responsive/>

    <h3>Hover <span class="cl-danger">NO</span></h3>
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
        ['Class', 'al-it-[value]-[responsive]'],
        ['Property', 'align-items']
      ],
      value: {
        class: [
          'Class',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'center',
          'strecth'
        ],
        description: [
          'Value Description',
          'สำหรับ "start"',
          'สำหรับ "end"',
          'สำหรับ "flex-start"',
          'สำหรับ "flex-end"',
          'สำหรับ "center"',
          'สำหรับ "strecth"'
        ]  
      }
    }
  }
}
</script>

