webpackJsonp([21,27],{242:function(e,t,s){s(394);var a=s(159)(s(336),s(416),null,null);e.exports=a.exports},336:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(24),o=s(1);s.n(o);t.default={data:function(){return{credentials:{username:"",password:""},error:"",showPass:!1,loaded:!1}},computed:{access_token:function(){return o.LocalStorage.get.item("access_token")}},methods:{submit:function(){if(this.error={message:!1},!this.credentials.username.trim()||!this.credentials.password.trim())return void(this.error={message:!0,response:{data:{message:"Enter both Username & Password"}}});var e={username:this.credentials.username.toLowerCase(),password:this.credentials.password};a.a.login(this,e,{name:"pg-list"})}},beforeCreate:function(){o.Loading.hide()},mounted:function(){if(this.access_token)return void this.$router.replace({name:"pg-list"});this.loaded=!0},beforeDestroy:function(){}}},376:function(e,t,s){t=e.exports=s(225)(),t.push([e.i,".logo-container{height:268px;position:absolute;top:20%;width:90%;left:5%;background-color:#fff}.contact-link{margin-top:40px}",""])},394:function(e,t,s){var a=s(376);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(226)("91b2b858",a,!0)},416:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",[s("div",{staticClass:"toolbar",slot:"header"},[s("q-toolbar-title",{attrs:{padding:0}},[e._v("\n      Roomoy - PG Manager\n    ")])],1),e._v(" "),s("div",{staticClass:"layout-view bg-landscape-img login-gradient"},[e.loaded?s("div",{staticClass:"logo-container"},[s("div",{staticClass:"floating-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.credentials.username},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit()},input:function(t){t.target.composing||(e.credentials.username=t.target.value)}}}),e._v(" "),s("label",[e._v(e._s(e.$t("login_page.phone_number_label")))])]),e._v(" "),s("div",{staticClass:"floating-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"},{name:"show",rawName:"v-show",value:!e.showPass,expression:"!showPass"}],staticClass:"full-width",attrs:{required:"",type:"password"},domProps:{value:e.credentials.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit()},input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"},{name:"show",rawName:"v-show",value:e.showPass,expression:"showPass"}],staticClass:"full-width",attrs:{required:"",type:"text"},domProps:{value:e.credentials.password},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit()},input:function(t){t.target.composing||(e.credentials.password=t.target.value)}}}),e._v(" "),s("label",[e._v(e._s(e.$t("login_page.password_label")))])]),s("br"),s("br"),e._v(" "),s("label",[s("q-checkbox",{model:{value:e.showPass,callback:function(t){e.showPass=t},expression:"showPass"}}),e._v("\n        "+e._s(e.$t("login_page.show_password_label"))+"\n      ")],1),e._v(" "),s("br"),s("br"),e._v(" "),s("button",{staticClass:"primary full-width",on:{click:function(t){e.submit()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit()}}},[e._v(e._s(e.$t("login_page.login")))]),e._v(" "),s("button",{staticClass:"tertiary full-width contact-link",on:{click:function(t){e.$refs.contactModal.open()}}},[e._v("Create Free Account ➤")]),e._v(" "),s("q-modal",{ref:"contactModal",staticClass:"minimized",attrs:{"content-css":{padding:"20px"}}},[s("p",[e._v("Contact support to get the free account")]),e._v(" "),s("i",[e._v("call")]),e._v(" "),s("a",{attrs:{href:"tel:+919074165751"}},[e._v("+91 907 416 5751")]),e._v(" "),s("br"),s("br"),e._v(" "),s("i",[e._v("email")]),e._v(" "),s("a",{attrs:{href:"mailto:anoop@roomoy.com"}},[e._v("anoop@roomoy.com")])])],1):e._e()])])},staticRenderFns:[]}}});