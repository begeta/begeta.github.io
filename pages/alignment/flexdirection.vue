<template>
  <div class="pd-10px">
    <h1>Flex Direction</h1>
    <div>ใช้สำหรับกำหนดทิศทางการจัดวางของ Flex Items</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>
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
        ['Class', 'f-drt-[value]-[responsive]'],
        ['Property', 'flex-direction']
      ]
    }
  }
}
</script>

