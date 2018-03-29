<template>
  <div class="mg-5px is-bd-bottom w-90pct">
    <div  class="dp-flex f-drt-row flex-1" :key="keytd" v-for="(free, keytd) in data[0]">
      <div class="dp-flex w-100pct f-drt-column pd-10px is-bd-top is-bd-right jtf-ct-center" :class="{'is-bd-left': keytr === 0}" :key="keytr" v-for="(free,keytr) in length">
        <div v-if="isColorCode(data[keytr][keytd])">
          <div :style="{ backgroundColor: data[keytr][keytd] }" class="f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px"></div>
          <div :class="{ 'f-w-bold cl-black': keytd === 0, 'cl-777': keytd !== 0 }" class="f-left pd-t-5px pd-l-10px">{{ data[keytr][keytd] }}</div>
        </div>
        <span :class="{ 'f-w-bold cl-black': keytd === 0, 'cl-777': keytd !== 0 }" v-else>
          <div v-if="type !== '' && keytd !== 0 && keytr === 0">
           <div v-if="type === 'property'" class="property">
              {{ data[keytr][keytd] }}
           </div>
           <div v-else-if="type === 'value'" class="value">
              {{ data[keytr][keytd] }}
           </div>
           <div v-else-if="type === 'responsive'" class="responsive">
              {{ data[keytr][keytd] }}
           </div>
          </div>
          <div v-else>
            {{ data[keytr][keytd] }}
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    length () {
      return Array(this.data.length).fill(0)
    }
  },
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
.property {
  width: fit-content;
  border-radius: 4px;
  background-color: #0050ff;
  padding: 5px 10px;
  color: white;
}

.value {
  width: fit-content;
  border-radius: 4px;
  background-color: #23d160;
  padding: 5px 10px;
  color: white;  
}
.responsive {
  width: fit-content;
  border-radius: 4px;
  background-color: #f5f5f5;
  padding: 5px 10px;
}
</style>