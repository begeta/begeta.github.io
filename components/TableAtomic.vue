<template>
  <div class="dp-flex mg-5px">
    <div class="dp-flex f-drt-column w-40pct is-bd-bottom" :key="keytr" v-for="(tr, keytr) in data" :class="{ 'is-bd-right': keytr !== 0 }">
      <div class="is-bd-top is-bd-left pd-5px h-45px pd-10px" :key="keytd" v-for="(td, keytd) in tr">
        <div v-if="isColorCode(td)">
          <div :style="{ backgroundColor: td }" class="f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px"></div>
          <div :class="{ 'f-w-bold cl-black': keytd === 0, 'cl-777': keytd !== 0 }" class="f-left pd-t-5px pd-l-10px">{{ td }}</div>
        </div>
        <span :class="{ 'f-w-bold cl-black': keytd === 0, 'cl-777': keytd !== 0 }" v-else>{{ td }}</span>
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
.is-bd-top {
  border-top: 1px solid #dbdbdb;
}
.is-bd-right {
  border-right: 1px solid #dbdbdb;
}
.is-bd-bottom {
  border-bottom: 1px solid #dbdbdb;
}
.is-bd-left {
  border-left: 1px solid #dbdbdb;
}
.cl-777 {
  color: #777;
}
</style>