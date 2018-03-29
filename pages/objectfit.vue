<template>
  <div class="pd-10px">
    <h1>Object Fit</h1>
    <div>เป็น Atomic Class ที่ใช้กำหนดการ Fill Content ใน Container ของ Replaced Elements ประกอบไปด้วย</div>

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
        ['Class', 'oj-f-[value]-[responsive]'],
        ['Property', 'object-fit']
      ],
      value: [
        ['Class', 'cover', 'contain', 'fill', 'none'],
        ['Value Description', 'สำหรับ "cover"', 'สำหรับ "contain"', 'สำหรับ "fill"', 'สำหรับ "none"']
      ]
    }
  }
}
</script>
