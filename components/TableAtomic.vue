<template>
  <div class="dp-flex mg-5px">
    <div class="dp-flex f-drt-column" :key="keytr" v-for="(tr, keytr) in data">
      <div class="bd-w-1px bd-st-solid bd-cl-grey pd-5px h-45px" :key="keytd" v-for="(td, keytd) in tr">
        <div v-if="isColorCode(td)">
          <div :style="{ backgroundColor: td }" class="f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px"></div>
          <div class="f-left pd-t-5px pd-l-10px">{{ td }}</div>
        </div>
        <span v-else>{{ td }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  methods: {
    isColorCode (str) {
      const pattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')
      return pattern.test(str)
    }
  }
}
</script>

<style scoped>
</style>