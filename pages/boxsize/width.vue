<template>
  <div class="pd-10px">
    <h1>Width, Min Width, Max Width</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Width, Max Width ของ Box Model ประกอบด้วย</div>
    <ul>
      <li>Width</li>
      <li>Min Width</li>
      <li>Max Width</li>
    </ul>

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
        ['Class', 'w-[value]-[responsive]', 'mn-w-[value]-[responsive]', 'mx-w-[value]-[responsive]'],
        ['Property', 'width', 'min-width', 'max-width']
      ],
      value: [
        ['Class', 'auto', 'fit-content', '0vw - 100vw', '0pct - 100pct'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', 'กว้าง 0vw ถึง 100vw', 'กว้าง 0% ถึง 100%']
      ]
    }
  }
}
</script>
