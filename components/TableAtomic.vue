<template>
  <div class="dp-flex mg-5px">
    <div class="dp-flex f-drt-column" :key="keytr" v-for="(tr, keytr) in data">
      <div class="bd-w-1px bd-st-solid bd-cl-grey pd-5px" :key="keytd" v-for="(td, keytd) in tr">
        {{td}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>
