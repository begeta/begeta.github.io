<template>
  <div class="pd-10px">
    <h1>Border Radius</h1>
    <div>ใช้กำหนดรัศมีของ Border</div>

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
        ['Class', 'bd-rd', 'bd-t-l-rd', 'bd-t-r-rd', 'bd-bt-l-rd', 'bd-bt-r-rd'],
        ['Property', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius']
      ],
      value: [
        ['Class', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px'],
        ['Value Description', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px']
      ]
    }
  }
}
</script>
