<template>
  <div class="pd-10px">
    <h1>Flex</h1>
    <div>ใช้สำหรับกำหนดขนาดของตัว Flex item</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive <span class="cl-success">YES</span></h3>
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
        ['Class', 'f'],
        ['Property', 'flex']
      ],
      value: [
        ['Class', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['Value Description', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      ]
    }
  }
}
</script>

