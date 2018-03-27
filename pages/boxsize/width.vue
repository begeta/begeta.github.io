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
        ['Class', 'w', 'mn-w', 'mx-w'],
        ['Property', 'width', 'min-width', 'max-width']
      ],
      value: [
        ['Class', 'auto', 'fit-content', '0px - 300px', '0% - 100%', '0calc - 300calc'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', 'กว้าง 0px ถึง 300px', 'กว้าง 0% ถึง 100%', 'กว้าง calc(100vw - 0px) ถึง calc(100vw - 300px)']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
