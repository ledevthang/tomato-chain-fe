(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1158:function(t,e,r){t.exports=r.p+"img/not-found-image.427fd08.svg"},1163:function(t,e,r){"use strict";r(27),r(8),r(23),r(120),r(41),r(631),r(1159),r(106),r(121);var n=r(3);var o,c=r(157);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},1165:function(t,e,r){var content=r(1166);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("3c0eddd7",content,!0,{sourceMap:!1})},1166:function(t,e,r){var n=r(32)(!1);n.push([t.i,".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}",""]),t.exports=n},1167:function(t,e,r){var content=r(1168);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("7132a15d",content,!0,{sourceMap:!1})},1168:function(t,e,r){var n=r(32)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},1169:function(t,e,r){var content=r(1170);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("5939d713",content,!0,{sourceMap:!1})},1170:function(t,e,r){var n=r(32)(!1);n.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=n},1186:function(t,e,r){"use strict";r(23),r(20),r(27),r(8),r(28),r(19),r(29);var n=r(4),o=(r(1165),r(1172)),c=r(51),l=r(18);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a,c.a).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,v({},o.a.options.methods.genData.call(this)))}}})},1187:function(t,e,r){"use strict";r(23),r(20),r(27),r(8),r(28),r(19),r(29);var n=r(4),o=(r(1167),r(38));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},1206:function(t,e,r){"use strict";r(34),r(311),r(78),r(1169);var n=r(123),o=r(51),c=r(313),l=r(132),d=r(310),v=r(3).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),h=r(38),f=r(2),m=r(18);e.a=Object(m.a)(o.a,c.a,v,l.a,h.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,r=t.large,n=t.light,o=t.medium,small=t.small;return{dark:e,large:r,light:n,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var r=t.genHoverIndex(e,i);t.clearable&&t.internalValue===r?t.internalValue=0:t.internalValue=r}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,r=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:r?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var r={click:e.click};return this.hover&&(r.mouseenter=function(e){return t.onMouseEnter(e,i)},r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(n.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(e)])}},render:function(t){var e=this,r=Object(f.h)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},r)}})},1225:function(t,e,r){var content=r(1262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("f30a6b88",content,!0,{sourceMap:!1})},1261:function(t,e,r){"use strict";r(1225)},1262:function(t,e,r){var n=r(32)(!1);n.push([t.i,"@media screen and (max-width:960px){.product-detail{flex-direction:column}.product-detail>*{width:100%!important;text-align:center}#qrid>img{margin:auto}}",""]),t.exports=n},1275:function(t,e,r){"use strict";r.r(e);r(23),r(20),r(28),r(19),r(29);var n=r(4),o=r(11),c=(r(58),r(27),r(8),r(57),r(87)),l=r(81),d=r.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=+r.id,e.next=4,d.a.get("https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json");case 4:for(c in data=e.sent,o=[],data.data)o.push(h({},data.data[c]));return l=o.filter((function(t){return t.productID===n}))[0],e.abrupt("return",{product:l,id:n});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,selection:1,url:""}},computed:h(h({},Object(c.c)("walletStore",["currentAddress"])),Object(c.c)("companyStore",["allProduct","companyInfo"])),mounted:function(){this.url=window.location.href},methods:{goToLink:function(t){var e=this.$getScanLink(t,"address");window.open(e,"_blank")},reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},download:function(){var t=document.getElementById("qrid").getElementsByTagName("img")[0].src,e=document.getElementById("download");e.href=t,e.click()}}},m=(r(1261),r(86)),y=r(131),x=r.n(y),O=r(324),w=r(299),_=r(85),j=r(1149),P=r(1186),C=r(1163),I=r(1187),k=r(301),S=r(1206),D=r(1266),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("h2",{staticClass:"text-center py-6 mb-5",staticStyle:{background:"#c8e4cc","border-radius":"6px"}},[n("b",{staticStyle:{"font-family":"'Montserrat-Bold'","font-size":"30px",color:"#4f5f6e"}},[t._v("\n        PRODUCT DETAILS\n      ")])])]),t._v(" "),n("div",[t.product&&"0"!==t.product.productID?n("div",{staticClass:"product-detail d-flex flex-wrap justify-space-between page my-12"},[n("v-card",{staticClass:"text-center",staticStyle:{width:"50%"},attrs:{loading:t.loading,"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("img",{staticClass:"mt-3",attrs:{height:"130",src:r(1158)}}),t._v(" "),n("v-card-title",[t._v(t._s(t.product.productName))]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),n("div",{staticClass:"grey--text ms-4"},[t._v("\n              4.5 (413)\n            ")])],1),t._v(" "),n("div",{staticClass:"mt-4 text-left text-subtitle-1"},[t._v("\n            $ • Italian, Vegetable\n          ")])],1),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("v-chip",[t._v("ID: TMT"+t._s(t.product.productID))]),t._v(" "),n("v-chip",[t._v("Product Price: $"+t._s(t.product.productPrice))]),t._v(" "),n("v-chip",[t._v("Description: "+t._s(t.product.productDescription))]),t._v(" "),n("v-chip",[t._v("Date Of Manufacture: "+t._s(t.product.dateOfManufacture))]),t._v(" "),n("v-chip",[t._v("Expiration Date: "+t._s(t.product.expirationDate))]),t._v(" "),n("v-chip",[t._v("Quantity: "+t._s(t.product.quantity))]),t._v(" "),n("v-chip",{on:{click:function(e){return e.stopPropagation(),t.goToLink(t.product.Provider)}}},[t._v("\n              TxHash: "+t._s(t.$shortAddress(t.product.txHash,15))+"\n            ")])],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(e){return e.stopPropagation(),t.goToLink(t.product.Provider)}}},[t._v("\n            Provider: "+t._s(t.$shortAddress(t.product.Provider,10))+"\n          ")])],1)],2),t._v(" "),n("div",{staticStyle:{width:"50%"}},[n("div",{staticStyle:{color:"red","margin-bottom":"20px","font-weight":"bold"}},[t._v("Go to Product Retrieval to scan product")]),t._v(" "),n("qr-code",{attrs:{id:"qrid",text:t.url}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{rounded:"",color:"#c8e4cc"},on:{click:t.download}},[n("b",[t._v("Download QRcode")])]),t._v(" "),n("a",{attrs:{id:"download",href:"",download:""}})],1)],1):n("div",[t._v("\n      Not found product\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:O.a,VCard:w.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VChip:j.a,VChipGroup:P.a,VContainer:C.a,VDivider:I.a,VProgressLinear:k.a,VRating:S.a,VRow:D.a})}}]);