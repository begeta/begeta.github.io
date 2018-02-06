import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 768,
    tablet: 1023,
    desktop: 1215,
    widescreen: 1407,
    fullhd: Infinity
  }
})