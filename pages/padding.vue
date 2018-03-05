<template>
  <div class="pd-10px">
    <h1>Padding</h1>
    <div>เป็น Atomic Class ที่ใช้จัดการ Padding ประกอบด้วย</div>
    <ui>
        <li>Padding</li>
        <li>Padding Top</li>
        <li>Padding Bottom</li>
        <li>Padding Left</li>
        <li>Padding Right</li>
        <li>Padding Vertical</li>
        <li>Padding Horizontal</li>
    </ui>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive YES</h3>
    <table-atomic :data="responsive"></table-atomic>

    <h3>Hover NO</h3>
  </div>
</template>

<script>
import TableAtomic from '@/components/TableAtomic'
export default {
  components: {
    TableAtomic
  },
  data () {
    return {
      property: [
        ['Class', 'pd', 'pd-t', 'pd-bt', 'pd-l', 'pd-r', 'pd-vtc', 'pd-hrzt'],
        ['Property', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top และ padding-bottom', 'padding-left และ padding-right']
      ],
      value: [
        ['Class', 'auto', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px'],
        ['Value Description', 'ใช้สำหรับ "auto"', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
