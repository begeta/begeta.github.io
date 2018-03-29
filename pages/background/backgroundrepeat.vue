<template>
  <div class="pd-10px">
    <h1>Background Repeat</h1>
    <div>ใช้กำหนดรูปแบบการ Repeat ของ Background Image</div>

    <h3>Property</h3>
    <table-atomic :data="property" type="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value" type="value"></table-atomic>

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
        ['Class', 'bg-rp-[value]-[responsive]'],
        ['Property', 'background-repeat']
      ],
      value: [
        ['Class', 'repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
        ['Value Description', 'สำหรับ "repeat"', 'สำหรับ "repeat-x"', 'สำหรับ "repeat-y"', 'สำหรับ "no-repeat"', 'สำหรับ "space"', 'สำหรับ "round"']
      ]
    }
  }
}
</script>

