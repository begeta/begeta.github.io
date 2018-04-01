<template>
  <div class="pd-10px">
    <h1>Border Style</h1>
    <div>ใช้กำหนดลักษณะของ Border</div>

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
        [
          'Class',
          'bd-st-[value]-[responsive]',
          'bd-t-st-[value]-[responsive]',
          'bd-bt-st-[value]-[responsive]',
          'bd-l-st-[value]-[responsive]',
          'bd-r-st-[value]-[responsive]',
          'bd-vtc-st-[value]-[responsive]',
          'bd-hrzt-st-[value]-[responsive]'
        ],
        [
          'Property',
          'border-style',
          'border-top-style',
          'border-bottom-style',
          'border-left-style',
          'border-right-style',
          'border-top-style และ border-bottom-style',
          'border-left-style และ border-right-style'
        ]
      ],
      value: [
        ['Class', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
        ['Value Description', 'สำหรับ "dotted"', 'สำหรับ "dashed"', 'สำหรับ "solid"', 'สำหรับ "double"', 'สำหรับ "groove"', 'สำหรับ "ridge"', 'สำหรับ "inset"', 'สำหรับ "outset"', 'สำหรับ "none"', 'สำหรับ "hidden"']
      ]
    }
  }
}
</script>
