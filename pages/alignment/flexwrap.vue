<template>
  <div class="pd-10px">
    <h1>Flex Wrap</h1>
    <div>ใช้สำหรับกำหนดวิธีการ Wrap Flex items ด้านใน</div>

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
        ['Class', 'f-w-[value]-[responsive]'],
        ['Property', 'flex-wrap']
      ],
      value: [
        ['Class', 'nowrap', 'wrap', 'wrap-reverse'],
        ['Value Description', 'สำหรับ "nowrap"', 'สำหรับ "wrap"', 'สำหรับ "wrap-reverse"']
      ]
    }
  }
}
</script>

