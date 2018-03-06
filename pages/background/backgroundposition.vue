<template>
  <div class="pd-10px">
    <h1>Background Position</h1>
    <div>ใช้กำหนดตำแหน่งการจัดวางของ Background</div>

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
        ['Class', 'bg-pst'],
        ['Property', 'background-position']
      ],
      value: [
        ['Class', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'center', 'center-left', 'center-right'],
        ['Value Description', 'สำหรับ "top"', 'สำหรับ "top-left"', 'สำหรับ "bottom"', 'สำหรับ "bottom-left"', 'สำหรับ "bottom-right"', 'สำหรับ "center"', 'สำหรับ "center-left"', 'สำหรับ "center-right"']
      ]
    }
  }
}
</script>

