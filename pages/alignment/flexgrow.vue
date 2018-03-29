<template>
  <div class="pd-10px">
    <h1>Flex Grow</h1>
    <div>ใช้สำหรับกำหนดขนาดของตัว Flex Grow</div>

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
        ['Class', 'f-g-[value]-[responsive]'],
        ['Property', 'flex-grow']
      ],
      value: [
        ['Class', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        ['Value Description', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
      ]
    }
  }
}
</script>

