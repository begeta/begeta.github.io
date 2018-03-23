<template>
  <div class="pd-10px">
    <h1>Border Style</h1>
    <div>ใช้กำหนดลักษณะของ Border</div>

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
        ['Class', 'bd-st-[value]-[responsive]'],
        ['Property', 'border-style']
      ],
      value: [
        ['Class', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
        ['Value Description', 'สำหรับ "dotted"', 'สำหรับ "dashed"', 'สำหรับ "solid"', 'สำหรับ "double"', 'สำหรับ "groove"', 'สำหรับ "ridge"', 'สำหรับ "inset"', 'สำหรับ "outset"', 'สำหรับ "none"', 'สำหรับ "hidden"']
      ]
    }
  }
}
</script>
