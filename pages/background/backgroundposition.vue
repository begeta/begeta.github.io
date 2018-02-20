<template>
  <div class="pd-10px">
    <h1>Background Position</h1>
    <div>ใช้กำหนดตำแหน่งการจัดวางของ Background</div>

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
        ['Class', 'bg-pst'],
        ['Property', 'background-position']
      ],
      value: [
        ['Class', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'center', 'center-left', 'center-right'],
        ['Value Description', 'สำหรับ "top"', 'สำหรับ "top-left"', 'สำหรับ "bottom"', 'สำหรับ "bottom-left"', 'สำหรับ "bottom-right"', 'สำหรับ "center"', 'สำหรับ "center-left"', 'สำหรับ "center-right"']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>

