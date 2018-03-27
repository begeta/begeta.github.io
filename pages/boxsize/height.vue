<template>
  <div class="pd-10px">
    <h1>Height, Min Height, Max Height</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Height, Max Height ของ Box Model ประกอบด้วย</div>
    <ul>
      <li>Height</li>
      <li>Min Height</li>
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
        ['Class', 'h-[value]-[responsive]', 'mn-h-[value]-[responsive]', 'mx-h-[value]-[responsive]'],
        ['Property', 'height', 'min-height', 'max-height']
      ],
      value: [
        ['Class', 'auto', 'fit-content', '0px - 300px', '0pct - 100pct', '0calc - 300calc'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', 'สูง 0px ถึง 300px', 'สูง 0% ถึง 100%', 'สูง calc(100vw - 0px) ถึง calc(100vw - 300px)']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
