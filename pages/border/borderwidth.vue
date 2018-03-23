<template>
  <div class="pd-10px">
    <h1>Border Width</h1>
    <div>ใช้กำหนดความหนาของ Border โดยจะใช้ Default border-style เป็น solid</div>

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
        ['Class', 'bd-w', 'bd-t-w', 'bd-bt-w', 'bd-l-w', 'bd-r-w', 'bd-vtc-w', 'bd-hrzt-w'],
        ['Property', 'border-width', 'border-top-width', 'border-bottom-width', 'border-left-width', 'border-right-width', 'border-top-width และ border-bottom-width', 'border-left-width และ border-right-width']
      ],
      value: [
        ['Class', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px'],
        ['Value Description', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px']
      ]
    }
  }
}
</script>
