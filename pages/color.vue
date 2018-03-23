<template>
  <div class="pd-10px">
    <h1>Color</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Color ประกอบด้วย</div>

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
        ['Class', 'cl'],
        ['Property', 'color']
      ],
      value: [
        ['Class', 'primary', 'white', 'light', 'black', 'link', 'info', 'success', 'warning', 'danger'],
        ['Value Description', '#1066FD', '#FFFFFF', '#F5F5F5', '#000000', '#3675DA', '#2B9EEC', '#32D065', '#FEDD62', '#FC3C63']
      ]
    }
  }
}
</script>
