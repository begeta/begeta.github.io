webpackJsonp([20],{"6qce":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("zrWr"),a=s("vubX"),o=s("VU/8")(i.a,a.a,!1,null,null,null);o.options.__file="pages/boxposition.vue",e.default=o.exports},L26m:function(t,e,s){"use strict";var i=s("p5hY"),a=s("gOg8"),o=!1;var r=function(t){o||s("MYkw")},l=s("VU/8")(i.a,a.a,!1,r,"data-v-644ccde4",null);l.options.__file="components/TableAtomic.vue",e.a=l.exports},Lwyv:function(t,e,s){"use strict";var i=s("SdWF"),a=s("kxtF"),o=s("VU/8")(i.a,a.a,!1,null,null,null);o.options.__file="components/Responsive.vue",e.a=o.exports},MYkw:function(t,e,s){var i=s("T0XP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("603ce41e",i,!1,{sourceMap:!1})},SdWF:function(t,e,s){"use strict";var i=s("L26m");e.a={components:{TableAtomic:i.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop","desktop-only","widescreen"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px","1024px to 1215px","from 1216px"]]}}}},T0XP:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}",""])},gOg8:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dp-flex mg-5px"},t._l(t.data,function(e,i){return s("div",{key:i,staticClass:"dp-flex f-drt-column w-40pct is-bd-bottom",class:{"is-bd-right":0!==i}},t._l(e,function(e,i){return s("div",{key:i,staticClass:"is-bd-top is-bd-left pd-5px h-45px pd-10px"},[t.isColorCode(e)?s("div",[s("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:e}}),s("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[t._v(t._s(e))])]):s("span",{class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[t._v(t._s(e))])])}))}))};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},kxtF:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data}})],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},p5hY:function(t,e,s){"use strict";e.a={props:["data"],methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}},vubX:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pd-10px"},[s("h1",[t._v("Box Position")]),s("div",[t._v("เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ การกำหนดรูปแบบการวาง และ ตำแหน่งของ Element ประกอบด้วย")]),s("ui",[s("li",[t._v("Position")]),s("li",[t._v("Top")]),s("li",[t._v("Bottom")]),s("li",[t._v("Left")]),s("li",[t._v("Right")])]),s("h3",[t._v("Property")]),s("table-atomic",{attrs:{data:t.property}}),s("h3",[t._v("Value (Position)")]),s("table-atomic",{attrs:{data:t.valuePosition}}),s("h3",[t._v("Value (Top, Bottom, Left, Right)")]),s("table-atomic",{attrs:{data:t.value}}),t._m(0),s("responsive"),t._m(1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=a},zrWr:function(t,e,s){"use strict";var i=s("L26m"),a=s("Lwyv");e.a={components:{TableAtomic:i.a,Responsive:a.a},data:function(){return{property:[["Class","pst-[value]-[responsive]","t-[value]-[responsive]","bt-[value]-[responsive]","l-[value]-[responsive]","r-[value]-[responsive]"],["Property","position","top","bottom","left","right"]],valuePosition:[["Class","static","relative","absolute","fixed"],["Value Description",'สำหรับ "static"','สำหรับ "relative"','สำหรับ "absolute"','สำหรับ "fixed"']],value:[["Class","0px","1px","2px","3px","4px","5px","10px","15px","20px","25px","30px"],["Value Description","0px","1px","2px","3px","4px","5px","10px","15px","20px","25px","30px"]]}}}}});