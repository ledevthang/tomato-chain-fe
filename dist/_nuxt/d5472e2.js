(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1173:function(t,e,r){var content=r(1185);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("7895f710",content,!0,{sourceMap:!1})},1184:function(t,e,r){"use strict";r(1173)},1185:function(t,e,r){var n=r(32)(!1);n.push([t.i,".btn-zone[data-v-6ae8af83]{color:#ff0;font-weight:700;display:flex;align-items:center;justify-content:space-between}@media screen and (max-width:960px){.btn-zone[data-v-6ae8af83]{flex-direction:column}.btn-zone>*[data-v-6ae8af83]{margin-bottom:15px}}",""]),t.exports=n},1226:function(t,e,r){"use strict";r.r(e);r(23),r(20),r(27),r(8),r(28),r(19),r(29);var n=r(11),c=r(4),o=(r(58),r(57),r(87)),l=r(81),d=r.n(l),f=r(192);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{valid:!0,productRule:[function(t){return!!t||"This field cannot be left blank"},function(t){return t&&t.length<=42||"Too long"}],productName:"Tomato",productPrice:99,productDescription:"Tomato from Viet Nam",retailer:"Vinmart",expirationDate:null,quantity:1e3,dateOfManufacture:null,showPriceDialog:!1,showSuccessDialog:!1,hash:null,msg:null}},computed:h(h({},Object(o.c)("walletStore",["currentAddress"])),Object(o.c)("companyStore",["currentCompany","allProduct"])),created:function(){this.dateOfManufacture=this.getDate(),this.expirationDate=this.getDate()},methods:h(h({},Object(o.b)("companyStore",["changeTriggerUpdate"])),{},{checkValid:function(){this.$refs.form.validate()&&(this.showPriceDialog=!0)},getDate:function(){var t=new Date,e=t.getUTCMonth()+1,r=t.getUTCDate();return t.getUTCFullYear()+"/"+e+"/"+r},createProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showPriceDialog=!1,e.prev=1,console.log(t.allProduct.length,"this.allProduct.length"),r=t.allProduct.length,c={productID:r+1,productName:t.productName,productPrice:+t.productPrice,productDescription:t.productDescription,Provider:t.currentAddress,retailer:t.retailer,isConfirmByRetailer:!1,dateOfManufacture:t.dateOfManufacture,expirationDate:t.expirationDate,quantity:t.quantity,currentAddress:t.currentAddress,amount:1e-4},e.next=8,f.a(c);case 8:data=e.sent,setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!data.tx.txHash){e.next=10;break}return t.msg=data.tx.msg,t.hash=data.tx.txHash,t.showSuccessDialog=!0,c.txHash=data.tx.txHash,e.next=7,d.a.post("https://tomato-chain-default-rtdb.asia-southeast1.firebasedatabase.app/product.json",c);case 7:t.reset(),e.next=13;break;case 10:t.msg=data.tx.msg,t.hash=null,t.showSuccessDialog=!0;case 13:t.changeTriggerUpdate();case 14:case"end":return e.stop()}}),e)}))),2e3),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),t.msg="Something wrong, please try again XD",t.hash=null,t.showSuccessDialog=!0;case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))()},update:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.d(1,"data.tx.txHash");case 2:e=t.sent,console.log(e,"22222");case 4:case"end":return t.stop()}}),t)})))()},reset:function(){this.$refs.form.reset(),this.dateOfManufacture=this.getDate()},resetValidation:function(){this.$refs.form.resetValidation()}})},x=(r(1184),r(86)),y=r(131),w=r.n(y),D=r(324),_=r(299),O=r(85),k=r(1155),P=r(1265),S=r(1150),j=r(1268),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentCompany?n("div",[t._m(0),t._v(" "),n("v-form",{ref:"form",staticStyle:{padding:"0 30px"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.productRule,label:"Name",required:"",outlined:""},model:{value:t.productName,callback:function(e){t.productName=e},expression:"productName"}}),t._v(" "),n("v-text-field",{attrs:{label:"Price",type:"number",required:"",outlined:""},model:{value:t.productPrice,callback:function(e){t.productPrice=e},expression:"productPrice"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.productRule,label:"Description",required:"",outlined:""},model:{value:t.productDescription,callback:function(e){t.productDescription=e},expression:"productDescription"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.productRule,label:"Retailer",required:"",outlined:""},model:{value:t.retailer,callback:function(e){t.retailer=e},expression:"retailer"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.productRule,label:"Date of Manufacture",required:"",outlined:""},model:{value:t.dateOfManufacture,callback:function(e){t.dateOfManufacture=e},expression:"dateOfManufacture"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.productRule,label:"Expiration Date",required:"",outlined:""},model:{value:t.expirationDate,callback:function(e){t.expirationDate=e},expression:"expirationDate"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",label:"Quantity",required:"",outlined:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),n("div",{staticClass:"btn-zone"},[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.checkValid}},[n("b",[t._v("Upload Your Product")])]),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"warning"},on:{click:t.reset}},[n("b",[t._v("Reset Form")])])],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"300px"},model:{value:t.showPriceDialog,callback:function(e){t.showPriceDialog=e},expression:"showPriceDialog"}},[n("v-card",{staticStyle:{padding:"10px","text-align":"center"},attrs:{light:""}},[n("div",{staticStyle:{"text-align":"center","font-size":"15px",padding:"10px 0"}},[n("span",[n("b",[t._v("Your product upload fee")])])]),t._v(" "),n("v-card-actions",{staticStyle:{"flex-direction":"column"}},[n("div",{staticClass:"text-zone d-flex align-center justify-center",staticStyle:{width:"100%"}},[n("b",[t._v("0.0001")]),t._v(" "),n("img",{staticClass:"ml-3",staticStyle:{width:"25px",height:"25px"},attrs:{src:r(633),alt:""}})]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"action-zone",staticStyle:{margin:"20px 0",width:"100%",display:"flex","justify-content":"space-between"}},[n("v-btn",{attrs:{color:"#28a745",medium:"",depressed:"",dark:""},on:{click:function(e){return t.createProduct()}}},[t._v("\n              Upload\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"red",medium:"",depressed:"",dark:""},on:{click:function(e){t.showPriceDialog=!1}}},[t._v("\n              Cancel\n            ")])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"300px"},model:{value:t.showSuccessDialog,callback:function(e){t.showSuccessDialog=e},expression:"showSuccessDialog"}},[n("v-card",{staticStyle:{padding:"10px","text-align":"center"},attrs:{light:""}},[n("v-card-actions",{staticStyle:{"flex-direction":"column"}},[n("div",{staticClass:"text-zone",staticStyle:{width:"100%"}},[n("b",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.msg))]),t._v(" "),t.hash?n("div",[n("a",{attrs:{href:t.$getScanLink(t.hash,"tx")}},[t._v("\n                "+t._s(t.hash)+"\n              ")])]):t._e()]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"action-zone",staticStyle:{margin:"20px 0"}},[n("v-btn",{attrs:{color:"#28a745",medium:"",depressed:"",dark:""},on:{click:function(e){t.showSuccessDialog=!1}}},[t._v("\n              Good!\n            ")])],1)],1)],1)],1)],1):n("div",[t._v("\n    Please register your company\n  ")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"text-center py-6 mb-5",staticStyle:{background:"#c8e4cc","border-radius":"6px"}},[r("b",{staticStyle:{"font-family":"'Montserrat-Bold'","font-size":"30px",color:"#4f5f6e"}},[t._v("Create Your Product")])])])}],!1,null,"6ae8af83",null);e.default=component.exports;w()(component,{VBtn:D.a,VCard:_.a,VCardActions:O.a,VDialog:k.a,VForm:P.a,VSpacer:S.a,VTextField:j.a})}}]);