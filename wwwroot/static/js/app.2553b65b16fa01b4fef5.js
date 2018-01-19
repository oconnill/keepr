webpackJsonp([1],{HLLU:function(e,t){},LWNL:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e.loginFormActive?n("v-form",{on:{submit:function(t){t.preventDefault(),e.submitLogin()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,counter:10},model:{value:e.login.email,callback:function(t){e.$set(e.login,"email",t)},expression:"login.email"}}),e._v(" "),n("v-text-field",{attrs:{label:"Password",rules:e.passwordRules,type:"password"},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}}),e._v(" "),n("div",[n("v-btn",{attrs:{type:"submit",flat:""}},[e._v("Login")])],1),e._v(" "),n("div",[n("v-btn",{attrs:{type:"button",flat:""},on:{click:e.toggleFormState}},[e._v("Signup")])],1)],1):n("v-form",{on:{submit:function(t){t.preventDefault(),e.submitRegister()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",rules:e.nameRules,counter:10,required:""},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}}),e._v(" "),n("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",label:"Password",rules:e.passwordRules,counter:4,required:""},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),e._v(" "),n("div",[n("v-btn",{attrs:{type:"submit",flat:""}},[e._v("Submit")])],1),e._v(" "),n("div")],1),e._v(" "),n("div",[n("h2",[e._v("KEEPS OF THE WORLD!!!")]),e._v(" "),e._l(e.keeps,function(t){return n("div",[n("div",{staticClass:"col-xs-4"},[n("div",[e._v(e._s(t.name))]),e._v(" "),n("img",{attrs:{src:t.keepImage}})])])})],2)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"login",components:{},data:function(){return{register:{username:"",email:"",password:""},login:{email:"",password:""},nameRules:[function(e){return!!e||"Username is required"},function(e){return e.length<=10||"Name must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length<=4||"Password must be less than 4 characters"}],valid:!1,loginFormActive:!0}},mounted:function(){this.$store.dispatch("getAllKeeps")},methods:{toggleFormState:function(){this.loginFormActive=!this.loginFormActive},submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""}},submitRegister:function(){this.$store.dispatch("addNewUser",this.register),this.register={username:"",email:"",password:""}},logout:function(){this.$store.dispatch("logout")}},computed:{keeps:function(){return this.$store.state.keeps}}},s,!1,function(e){n("HLLU")},"data-v-8ad70056",null).exports,i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("div",{attrs:{id:"app"}},[e.activeUser.hasOwnProperty("username")?n("div",{staticClass:"text-right logout-bar"},[n("h4",[e._v("Hello, "+e._s(e.activeUser.username))]),e._v(" "),n("button",{staticClass:"btn btn-default",on:{click:e.logout}},[e._v("Logout")])]):e._e(),e._v(" "),n("h1",{staticClass:"main-title"},[e._v("KEEPr")]),e._v(" "),n("router-view")],1)])],1)},staticRenderFns:[]};var o=n("VU/8")({name:"app",mounted:function(){this.$store.dispatch("authenticate")},methods:{logout:function(){this.$store.dispatch("logout")}},computed:{activeUser:function(){return this.$store.state.activeUser}}},i,!1,function(e){n("WNXp")},null,null).exports,r=n("7+uW"),c=n("/ocq"),l={name:"Vaults",data:function(){return{newBoard:{}}},mounted:function(){},computed:{vaults:function(){return this.$store.state.vaults},activeVault:function(){return this.$store.state.activeVault},keeps:function(){return this.$store.state.keeps}},methods:{deleteVault:function(e){this.$store.dispatch("deleteVault",e)},getVaultKeep:function(e){console.log("get vault in compnent"),this.$store.dispatch("getVaultKeep",e)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e._m(0),e._v(" "),e._l(e.vaults,function(t){return n("div",[n("div",[e._v(e._s(t.name))]),e._v(" "),n("v-btn",{attrs:{type:"submit",flat:""},on:{click:function(n){e.getVaultKeep(t.id)}}},[e._v("GO")]),e._v(" "),n("v-btn",{attrs:{type:"button",flat:""},on:{click:function(n){e.deleteVault(t)}}},[e._v("Delete This Vault")])],1)})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-12"},[t("h2",[this._v("My Vaults")])])}]},d=n("VU/8")(l,u,!1,null,null,null).exports,v={name:"Keeps",data:function(){return{newBoard:{},active:!1,show:!1,newVaultKeep:{VaultId:"",UserId:"",keepId:""}}},mounted:function(){},components:{},computed:{vaults:function(){return this.$store.state.vaults},keeps:function(){return this.$store.state.keeps},activeUser:function(){return this.$store.state.activeUser}},methods:{deleteKeep:function(e){this.$store.dispatch("deleteKeep",e)},addLike:function(e){e.keepCount++,this.$store.dispatch("addLike",e)},getVault:function(e){console.log("get vault in compnent"),this.$store.dispatch("getVault",e)},moveToVault:function(e,t){this.newVaultKeep.UserId=this.activeUser.id,this.newVaultKeep.KeepId=e.id,this.newVaultKeep.VaultId=t.id,this.$store.dispatch("moveToVault",this.newVaultKeep),this.newVaultKeep={VaultId:"",UserId:"",KeepId:""}},mouseOver:function(){this.active=!this.active}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("h2",[e._v("My Keeps")]),e._v(" "),e._l(e.keeps,function(t){return n("div",{staticClass:"col-sm-3"},[n("div",[e._v(e._s(t.name))]),e._v(" "),n("img",{attrs:{src:t.keepImage}}),e._v(" "),n("v-btn",{attrs:{flat:"",icon:"",color:"white"},on:{click:function(n){e.addLike(t)}}},[n("v-icon",{attrs:{dark:"",right:""}},[e._v("check_circle")])],1),e._v(" "),n("div",[n("h4",[e._v("Views: "+e._s(t.keepCount))])]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Add to Vault")]),e._v(" "),n("v-list",e._l(e.vaults,function(s){return n("v-list-tile",{key:s.name,on:{click:function(n){e.moveToVault(t,s)}}},[n("v-list-tile-title",[e._v(e._s(s.name))])],1)}))],1)],1),e._v(" "),n("v-btn",{attrs:{type:"button",flat:""},on:{click:function(n){e.deleteKeep(t)}}},[e._v("Delete")])],1)})],2)},staticRenderFns:[]};var m=n("VU/8")(v,p,!1,function(e){n("rmIz")},null,null).exports,h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("h3",[e._v("Vault View")]),e._v(" "),e._l(e.vkeeps,function(t){return n("div",{staticClass:"col-sm-3"},[n("div",[e._v(e._s(t.name))]),e._v(" "),n("img",{attrs:{src:t.keepImage}}),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-menu",{attrs:{"offset-y":""}},[n("v-list",e._l(e.vaults,function(s){return n("v-list-tile",{key:s.name,on:{click:function(n){e.moveToVault(t,s)}}},[n("v-list-tile-title",[e._v(e._s(s.name))])],1)}))],1)],1),e._v(" "),n("v-btn",{attrs:{type:"button",flat:""},on:{click:function(n){e.deleteKeep(t)}}},[e._v("Delete")])],1)})],2)},staticRenderFns:[]},f={name:"Home",data:function(){return{newVault:{name:"",description:"",userid:""},newKeep:{name:"",description:"",keepImage:"",keepId:"",keepCount:0}}},components:{Vaults:d,Keeps:m,Vault:n("VU/8")({name:"Vault",data:function(){return{newKeep:{}}},mounted:function(){},methods:{createKeep:function(e){this.$store.dispatch("createKeep",{id:e,list:this.newKeep}),this.newList={}},getKeeps:function(e){this.$store.dispatch("getKeeps",e)},removeList:function(e){this.$store.dispatch("removeKeep",e)},deleteKeep:function(e){this.$store.dispatch("deleteKeep",e)},deleteVault:function(e){this.$store.dispatch("deleteVault",e)}},computed:{vaults:function(){return this.$store.state.activeVault},keeps:function(){return this.$store.state.keeps},vkeeps:function(){return this.$store.state.activeVaultKeeps}},components:{}},h,!1,null,null,null).exports},mounted:function(){},computed:{vaults:function(){return this.$store.state.vaults},activeVault:function(){return this.$store.state.activeVault},activeUser:function(){return this.$store.state.activeUser}},methods:{createVault:function(){this.newVault.userid=this.activeUser.id,this.$store.dispatch("createVault",this.newVault),this.newVault={name:"",description:"",userid:""}},createKeep:function(){this.newKeep.userid=this.activeUser.id,this.$store.dispatch("createKeep",this.newKeep),this.newKeep={name:"",description:"",keepImage:"",keepId:"",keepCount:0}},removeBoard:function(e){this.$store.dispatch("removeVault",e)},getVault:function(e){console.log("get vault in component"),this.$store.dispatch("getVault",e)}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("h2",[e._v("Create Vault")]),e._v(" "),n("v-form",{on:{submit:function(t){t.preventDefault(),e.createVault()}}},[n("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.newVault.name,callback:function(t){e.$set(e.newVault,"name",t)},expression:"newVault.name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Description",required:""},model:{value:e.newVault.description,callback:function(t){e.$set(e.newVault,"description",t)},expression:"newVault.description"}}),e._v(" "),n("div",[n("v-btn",{attrs:{type:"submit",flat:""}},[e._v("Submit")])],1)],1)],1),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("h2",[e._v("Create Keep")]),e._v(" "),n("v-form",{on:{submit:function(t){t.preventDefault(),e.createKeep()}}},[n("v-text-field",{attrs:{label:"Title",required:""},model:{value:e.newKeep.name,callback:function(t){e.$set(e.newKeep,"name",t)},expression:"newKeep.name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Description",required:""},model:{value:e.newKeep.description,callback:function(t){e.$set(e.newKeep,"description",t)},expression:"newKeep.description"}}),e._v(" "),n("v-text-field",{attrs:{label:"Image",required:""},model:{value:e.newKeep.keepImage,callback:function(t){e.$set(e.newKeep,"keepImage",t)},expression:"newKeep.keepImage"}}),e._v(" "),n("div",[n("v-btn",{attrs:{type:"submit",flat:""}},[e._v("Submit")])],1)],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("vaults")],1),e._v(" "),n("keeps"),e._v(" "),n("vault")],1)])},staticRenderFns:[]};var _=n("VU/8")(f,g,!1,function(e){n("LWNL")},"data-v-15749f26",null).exports,V=n("mtWM"),w=n.n(V),k=n("NYxO"),K=window.location.host.indexOf("localhost")>-1?"//localhost:5000/":"/",b=w.a.create({baseURL:K+"api/",timeout:2e3,withCredentials:!0}),$=w.a.create({baseURL:K+"accounts/",timeout:2e3,withCredentials:!0});r.a.use(k.a);var U=new k.a.Store({state:{vaults:[],activeVaults:{},keeps:[],error:{},activeUser:{},activeVaultKeeps:[]},mutations:{setVaults:function(e,t){e.vaults=t},handleError:function(e,t){e.error=t},setActiveUser:function(e,t){r.a.set(e.activeUser=t),console.log("activeUser: ",e.activeUser)},setActiveVault:function(e,t){e.activeBoard=t,console.log("activeBoard: ",e.activeBoard)},setKeeps:function(e,t){e.keeps=t},setActiveVaultKeeps:function(e,t){e.activeVaultKeeps=t,console.log("VaultKeeps: ",e.activeUser)}},actions:{addNewUser:function(e,t){var n=e.commit,s=e.dispatch;$.post("register",t).then(function(e){console.log("Response to addNewUser: ",e),n("setActiveUser",e.data),s("authenticate"),x.push({name:"Home"})}).catch(function(e){n("handleError",e)})},login:function(e,t){var n=e.commit,s=e.dispatch;$.post("login",t).then(function(e){console.log("Response to login: ",e),e.data.error?n("handleError",e.data):(n("setActiveUser",e.data),s("authenticate"),x.push({name:"Home"}))}).catch(function(e){n("handleError",e)})},logout:function(e){var t=e.commit;e.dispatch;$.delete("logout").then(function(e){console.log("Response to logout: ",e),t("setActiveUser",{}),t("keeps",[]),x.push({name:"Login"})}).catch(function(e){t("handleError",e)})},authenticate:function(e){var t=e.commit,n=e.dispatch;$("authenticate").then(function(e){console.log("Response to authenticate: ",e),t("setActiveUser",e.data),n("getVaults",e.data.id),n("getKeeps",e.data.id),x.push({name:"Home"})}).catch(function(e){x.push({name:"Login"})})},getVaults:function(e,t){var n=e.commit;e.dispatch;b("vaults/user/"+t).then(function(e){console.log("Response to GetVaults: ",e),n("setVaults",e.data)}).catch(function(e){n("handleError",e)})},getVaultKeep:function(e,t){var n=e.commit;e.dispatch;console.log("get vaultkeep by vault id"),b("vaultkeeps/user/"+t).then(function(e){console.log("res to get vault: ",e),n("setActiveVaultKeeps",e.data)}).catch(function(e){n("handleError",e)})},createVault:function(e,t){var n=e.commit,s=e.dispatch;b.post("vaults",t).then(function(e){console.log("res to create vault: ",e),s("authenticate")}).catch(function(e){n("handleError",e)})},moveToVault:function(e,t){var n=e.commit,s=e.dispatch,a={VaultId:t.VaultId,UserId:t.UserId,keepId:t.KeepId};b.post("vaultkeeps",a).then(function(e){console.log("res to create vault: ",e),s("authenticate")}).catch(function(e){n("handleError",e)})},removeVault:function(e,t){var n=e.commit,s=e.dispatch;b.delete("vaults/"+vault._id).then(function(e){s("getVaults")}).catch(function(e){n("handleError",e)})},getKeeps:function(e,t){var n=e.commit;e.dispatch;b("keeps/user/"+t).then(function(e){console.log("Response to GetKeeps: ",e),n("setKeeps",e.data)}).catch(function(e){n("handleError",e)})},getAllKeeps:function(e){var t=e.commit;e.dispatch;b("keeps").then(function(e){console.log("Response to GetKeeps: ",e),t("setKeeps",e.data)}).catch(function(e){t("handleError",e)})},createKeep:function(e,t){var n=e.commit,s=e.dispatch;b.post("keeps",t).then(function(e){console.log("res to create keep: ",e),s("authenticate")}).catch(function(e){n("handleError",e)})},addLike:function(e,t){var n=e.commit,s=e.dispatch;b.put("keeps/"+t.id,t).then(function(e){console.log("res to create keep: ",e),n("setKeeps",e.data),s("authenticate")}).catch(function(e){n("handleError",e)})},deleteKeep:function(e,t){var n=e.commit,s=e.dispatch;b.delete("keeps/"+t.id).then(function(e){s("authenticate")}).catch(function(e){n("handleError",e)})},deleteVault:function(e,t){var n=e.commit,s=e.dispatch;b.delete("vaults/"+t.id).then(function(e){console.log("Delete Vault: ",e),s("authenticate")}).catch(function(e){n("handleError",e)})}}});r.a.use(c.a);var x=new c.a({routes:[{path:"/home",name:"Home",component:_,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:a},{path:"/keeps",name:"Keeps",component:m}]}),E=n("3EgV"),I=n.n(E);r.a.use(I.a),r.a.use(k.a),r.a.config.productionTip=!1,new r.a({el:"#app",store:U,router:x,template:"<App/>",components:{App:o}})},WNXp:function(e,t){},rmIz:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2553b65b16fa01b4fef5.js.map