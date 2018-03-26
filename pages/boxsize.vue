<template>
  <div class="pd-10px">
    <h1>Box Size</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Size ของ Box Model ประกอบด้วย</div>
    <ul>
      <li>Width</li>
      <li>Height</li>
      <li>Max Width</li>
      <li>Max Height</li>
    </ul>

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
        ['Class', 'w-[value]-[responsive]', 'h-[value]-[responsive]', 'mn-w-[value]-[responsive]', 'mn-h-[value]-[responsive]', 'mx-w-[value]-[responsive]', 'mx-h-[value]-[responsive]'],
        ['Property', 'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height']
      ],
      value: [
        ['Class', 'auto', 'fit-content', '0px - 300px', '0calc - 300calc', '0pct - 100pct', '0vh - 100vh', '0vw - 100vw'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', '0px - 300px', '0calc - 300calc คือ calc(100[viweport] - [value]px)', '0% - 100%', '0vh - 100vh ของ height', '0vw - 100vw ของ width']
      ]
    }
  }
}
</script>
