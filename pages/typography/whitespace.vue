<template>
  <div class="pd-10px">
    <h1>White Space</h1>
    <div>ใช้สำหรับกำหนดการจัดการกับ White Space</div>

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
        ['Class', 'w-sp-[value]-[responsive]'],
        ['Property', 'white-space']
      ],
      value: [
        ['Class', 'normal', 'no-wrap', 'pre', 'pre-line', 'pre-wrap'],
        ['Value Description', 'สำหรับ "normal"', 'สำหรับ "no-wrap"', 'สำหรับ "pre"', 'สำหรับ "pre-line"', 'สำหรับ "pre-wrap"']
      ],
    }
  }
}
</script>
