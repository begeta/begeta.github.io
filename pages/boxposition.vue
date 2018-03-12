<template>
  <div class="pd-10px">
    <h1>Box Position</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ การกำหนดรูปแบบการวาง และ ตำแหน่งของ Element ประกอบด้วย</div>
    <ui>
        <li>Position</li>
        <li>Top</li>
        <li>Bottom</li>
        <li>Left</li>
        <li>Right</li>
    </ui>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value (Position)</h3>
    <table-atomic :data="valuePosition"></table-atomic>

    <h3>Value (Top, Bottom, Left, Right)</h3>
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
        ['Class', 'pst', 't', 'bt', 'l', 'r'],
        ['Property', 'position', 'top', 'bottom', 'left', 'right']
      ],
      valuePosition: [
        ['Class', 'static', 'relative', 'absolute', 'fixed'],
        ['Value Description', 'สำหรับ "static"', 'สำหรับ "relative"', 'สำหรับ "absolute"', 'สำหรับ "fixed"']
      ],
      value: [
        ['Class', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px'],
        ['Value Description', '0px', '1px', '2px', '3px', '4px', '5px', '10px', '15px', '20px', '25px', '30px']
      ]
    }
  }
}
</script>
