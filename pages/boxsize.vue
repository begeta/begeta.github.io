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

    <h3>Value (Top, Bottom, Left, Right)</h3>
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
        ['Class', 'w', 'h', 'mn-w', 'mn-h', 'mx-w', 'mx-h'],
        ['Property', 'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height']
      ],
      value: [
        ['Class', 'auto', 'fit-content', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px', '0% 10% 20% 30% 40% 50% 60% 70% 80% 90% 100%'],
        ['Value Description', 'ใช้สำหรับ "auto"', 'ใช้สำหรับ "fit-content"', '0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px', '0% 10% 20% 30% 40% 50% 60% 70% 80% 90% 100%']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>
