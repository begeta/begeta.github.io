webpackJsonp([27],{KMT0:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pd-10px"},[s("h1",[t._v("Background Position")]),s("div",[t._v("ใช้กำหนดตำแหน่งการจัดวางของ Background")]),s("h3",[t._v("Property")]),s("table-atomic",{attrs:{data:t.property}}),s("h3",[t._v("Value")]),s("table-atomic",{attrs:{data:t.value}}),t._m(0),s("responsive"),t._m(1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=a},L26m:function(t,e,s){"use strict";var o=s("p5hY"),a=s("gOg8"),r=!1;var i=function(t){r||s("MYkw")},n=s("VU/8")(o.a,a.a,!1,i,"data-v-644ccde4",null);n.options.__file="components/TableAtomic.vue",e.a=n.exports},Lwyv:function(t,e,s){"use strict";var o=s("SdWF"),a=s("kxtF"),r=s("VU/8")(o.a,a.a,!1,null,null,null);r.options.__file="components/Responsive.vue",e.a=r.exports},MYkw:function(t,e,s){var o=s("T0XP");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("603ce41e",o,!1,{sourceMap:!1})},SdWF:function(t,e,s){"use strict";var o=s("L26m");e.a={components:{TableAtomic:o.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop","desktop-only","widescreen"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px","1024px to 1215px","from 1216px"]]}}}},T0XP:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}",""])},WDcO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("pxez"),a=s("KMT0"),r=s("VU/8")(o.a,a.a,!1,null,null,null);r.options.__file="pages/background/backgroundposition.vue",e.default=r.exports},gOg8:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dp-flex mg-5px"},t._l(t.data,function(e,o){return s("div",{key:o,staticClass:"dp-flex f-drt-column w-40pct is-bd-bottom",class:{"is-bd-right":0!==o}},t._l(e,function(e,o){return s("div",{key:o,staticClass:"is-bd-top is-bd-left pd-5px h-45px pd-10px"},[t.isColorCode(e)?s("div",[s("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:e}}),s("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===o,"cl-777":0!==o}},[t._v(t._s(e))])]):s("span",{class:{"f-w-bold cl-black":0===o,"cl-777":0!==o}},[t._v(t._s(e))])])}))}))};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},kxtF:function(t,e,s){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data}})],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},p5hY:function(t,e,s){"use strict";e.a={props:["data"],methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}},pxez:function(t,e,s){"use strict";var o=s("L26m"),a=s("Lwyv");e.a={components:{TableAtomic:o.a,Responsive:a.a},data:function(){return{property:[["Class","bg-pst-[value]-[responsive]"],["Property","background-position"]],value:[["Class","top","top-left","top-right","bottom","bottom-left","bottom-right","center","center-left","center-right"],["Value Description",'สำหรับ "top"','สำหรับ "top-left"','สำหรับ "bottom"','สำหรับ "bottom-left"','สำหรับ "bottom-right"','สำหรับ "center"','สำหรับ "center-left"','สำหรับ "center-right"']]}}}}});