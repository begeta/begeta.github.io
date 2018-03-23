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
        ['Class', 'auto', 'fit-content', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px', '0% 10% 20% 30% 40% 50% 60% 70% 80% 90% 100%'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px', '0% 10% 20% 30% 40% 50% 60% 70% 80% 90% 100%']
      ]
    }
  }
}
</script>
