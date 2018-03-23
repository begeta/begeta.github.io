<template>
  <div class="pd-10px">
    <h1>Margin</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Margin ประกอบด้วย</div>
    <ui>
        <li>Margin</li>
        <li>Margin Top</li>
        <li>Margin Bottom</li>
        <li>Margin Left</li>
        <li>Margin Right</li>
        <li>Margin Vertical</li>
        <li>Margin Horizontal</li>
    </ui>

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
        ['Class', 'mg', 'mg-t', 'mg-bt', 'mg-l', 'mg-r', 'mg-vtc', 'mg-hrzt'],
        ['Property', 'margin', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top และ margin-bottom', 'margin-left และ margin-right']
      ],
      value: [
        ['Class', 'auto', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px'],
        ['Value Description', 'ใช้สำหรับ "auto"', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px']
      ]
    }
  }
}
</script>
