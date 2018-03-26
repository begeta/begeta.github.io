<template>
  <div class="pd-10px">
    <h1>Text Align</h1>
    <div>ใช้สำหรับกำหนดความหนาของ Alignment ของ Inline Content ด้านใน Container</div>

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
        ['Class', 't-al-[value]-[responsive]'],
        ['Property', 'text-align']
      ],
      value: [
        ['Class', 'left', 'right', 'center', 'justify'],
        ['Value Description', 'สำหรับ "left"', 'สำหรับ "right"', 'สำหรับ "center"', 'สำหรับ "justify"']
      ],
    }
  }
}
</script>
