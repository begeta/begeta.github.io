<template>
  <div class="pd-10px">
    <h1>Background Color</h1>
    <div>ใช้กำหนดสีของ Background ให้กับ Element</div>

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
        ['Class', 'bg-cl'],
        ['Property', 'background-color']
      ],
      value: [
        ['Class', 'primary', 'white', 'light', 'black', 'link', 'info', 'success', 'warning', 'danger'],
        ['Value Description', '#1066FD', '#FFFFFF', '#F5F5F5', '#000000', '#3675DA', '#2B9EEC', '#32D065', '#FEDD62', '#FC3C63']
      ],
      responsive: [
        ['Class', 'mobile', 'tablet', 'desktop', 'widescreen'],
        ['Breakpoints', 'up to 768px', 'from 769px', 'from 1024px', 'from 1408px']
      ]
    }
  }
}
</script>

