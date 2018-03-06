<template>
  <div class="pd-10px">
    <h1>Line Height</h1>
    <div>ใช้สำหรับกำหนดความหนาของ Line Height</div>

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
        ['Class', 'l-h'],
        ['Property', 'line-height']
      ],
      value: [
        ['Class', '100pct', '125pct', '150pct', '175pct', '200pct', '225pct', '250pct', '275pct', '300pct'],
        ['Value Description', 'สำหรับ "100%"', 'สำหรับ "125%"', 'สำหรับ "150%"', 'สำหรับ "175%"', 'สำหรับ "200%"', 'สำหรับ "225%"', 'สำหรับ "250%"', 'สำหรับ "275%"', 'สำหรับ "300%"']
      ],
    }
  }
}
</script>
