<template>
  <div class="pd-10px">
    <h1>Text Transform</h1>
    <div>ใช้กำหนด Text Transform ให้กับ Text ของ Element</div>

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
        ['Class', 't-tf-[value]-[responsive]'],
        ['Property', 'text-transform']
      ],
      value: [
        ['Class', 'capitalize', 'lowercase', 'uppercase', 'none'],
        ['Value Description', 'สำหรับ "capitalize"', 'สำหรับ "lowercase"', 'สำหรับ "uppercase"', 'สำหรับ "none"']
      ],
    }
  }
}
</script>
