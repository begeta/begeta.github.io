<template>
  <div class="pd-10px">
    <h1>Font Weight</h1>
    <div>ใช้สำหรับกำหนดความหนาของ Font โดย Value จะเป็นค่าที่กำหนดใน font-weight ระดับตั้งแต่ 100 ถึง 900</div>

    <h3>Property</h3>
    <table-atomic :data="property"></table-atomic>

    <h3>Value</h3>
    <table-atomic :data="value"></table-atomic>

    <h3>Responsive YES</h3>
    <responsive/>

    <h3>Hover NO</h3>
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
        ['Property', 'font-weight']
      ],
      value: [
        ['Class', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        ['Value Description', 'สำหรับ "100"', 'สำหรับ "200"', 'สำหรับ "300"', 'สำหรับ "400"', 'สำหรับ "500"', 'สำหรับ "600"', 'สำหรับ "700"', 'สำหรับ "800"', 'สำหรับ "900"']
      ],
    }
  }
}
</script>
