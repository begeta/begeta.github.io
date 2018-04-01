<template>
  <div class="pd-10px">
    <h1>Cursor</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Cursor ประกอบด้วย</div>

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
        ['Class', 'cs-[value]-[responsive]'],
        ['Property', 'cursor']
      ],
      value: [
        [
          'Class',
          'all-scroll',
          'crosshair',
          'default',
          'text',
          'help',
          'move',
          'not-allowed',
          'none',
          'pointer',
          'progress',
          'zoom-in',
          'zoom-out'
        ],
        [
          'Value Description',
          'สำหรับ "all-scroll"',
          'สำหรับ "crosshair"',
          'สำหรับ "default"',
          'สำหรับ "text"',
          'สำหรับ "help"',
          'สำหรับ "move"',
          'สำหรับ "not-allowed"',
          'สำหรับ "none"',
          'สำหรับ "pointer"',
          'สำหรับ "progress"',
          'สำหรับ "zoom-in"',
          'สำหรับ "zoom-out"'
        ]
      ]
    }
  }
}
</script>
