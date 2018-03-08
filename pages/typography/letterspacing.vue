<template>
  <div class="pd-10px">
    <h1>Letter Spacing</h1>
    <div>ใช้สำหรับกำหนดระยะห่างระหว่างตัวอักษร</div>

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
        ['Class', 'lt-spc'],
        ['Property', 'letter-spacing']
      ],
      value: [
        ['Class', '8px', '9px', '10px', '11px', '12px','13px', '14px','15px', '16px', '18px', '20px', ' 24px', '30px', '40px'],
        ['Value Description', 'สำหรับ "8px"', 'สำหรับ "9px"', 'สำหรับ "10px"', 'สำหรับ "11px"', 'สำหรับ "12px"', 'สำหรับ "13px"', 'สำหรับ "14px"', 'สำหรับ "15px"', 'สำหรับ "16px"', 'สำหรับ "18px"', 'สำหรับ "20px"', 'สำหรับ "24px"', 'สำหรับ "30px"', 'สำหรับ "40px"']
      ],
    }
  }
}
</script>
