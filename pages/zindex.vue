<template>
  <div class="pd-10px">
    <h1>Z-Index</h1>
    <div>เป็น Atomic Class ค่าของ Z-Index เพื่อกำหนดลำดับชั้นการจัดวางในแนวแกน Z-Axis</div>

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
        ['Class', 'z-id'],
        ['Property', 'z-index']
      ],
      value: [
        ['Class', 'auto', '0', '1', '-1'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'สำหรับ "0"', 'สำหรับ "1"', 'สำหรับ "-1"']
      ]
    }
  }
}
</script>
