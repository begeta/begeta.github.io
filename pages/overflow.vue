<template>
  <div class="pd-10px">
    <h1>Overflow</h1>
    <div>Overflow ใช้กำหนดการจัดการ Overflow Content</div>

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
        ['Class', 'ovf-[value]-[responsive]', 'ovf-x-[value]-[responsive]', 'ovf-y-[value]-[responsive]'],
        ['Property', 'overflow', 'overflow-x', 'overflow-y']
      ],
      value: [
        ['Class', 'visible', 'auto', 'hidden', 'scroll'],
        ['Value Description', 'สำหรับ "visible"', 'สำหรับ "auto"', 'สำหรับ "hidden"', 'สำหรับ "scroll"']
      ]
    }
  }
}
</script>
