(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"1b66":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n("85ee");function o(){const e=localStorage.getItem(r["d"])||sessionStorage.getItem(r["d"]);return e}function a(e,t){t?localStorage.setItem(r["d"],e):sessionStorage.setItem(r["d"],e)}function i(){localStorage.removeItem(r["d"]),sessionStorage.removeItem(r["d"])}},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("967e"),o=n.n(r),a=(n("96cf"),n("fa84")),i=n.n(a),s=(n("1867"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),u=n("b05d"),c=n("4d5a"),l=n("9898"),h=n("f2cc"),d=n("c7a0"),g=n("2ea3"),p=n("65c6"),m=n("6ac5"),f=n("9c40"),v=n("0016"),b=n("497d"),w=n("6ab5"),k=n("033f"),y=n("e208"),T=n("429b"),S=n("7867"),x=n("07d0"),P=n("cb32"),A=n("0378"),q=n("27f9"),Q=n("9564"),R=n("f09f"),L=n("a370"),E=n("4b7e"),I=n("eb85"),D=n("2c91"),_=n("156b"),B=n("ee89"),H=n("cc04"),Y=n("05c0"),C=n("0d59"),O=n("8f8e"),J=n("c1d0"),M=n("58a8"),N=n("714f"),U=n("7f67"),j=n("2a19");s["default"].use(u["a"],{config:{},components:{QLayout:c["a"],QHeader:l["a"],QDrawer:h["a"],QPageContainer:d["a"],QPage:g["a"],QToolbar:p["a"],QToolbarTitle:m["a"],QBtn:f["a"],QIcon:v["a"],QList:b["a"],QItem:w["a"],QItemSection:k["a"],QItemLabel:y["a"],QTabs:T["a"],QRouteTab:S["a"],QFooter:x["a"],QAvatar:P["a"],QForm:A["a"],QInput:q["a"],QToggle:Q["a"],QCard:R["a"],QCardSection:L["a"],QCardActions:E["a"],QSeparator:I["a"],QSpace:D["a"],QBtnDropdown:_["a"],QUploader:B["a"],QUploaderAddTrigger:H["a"],QTooltip:Y["a"],QSpinner:C["a"],QCheckbox:O["a"],QSlider:J["a"],QBadge:M["a"]},directives:{Ripple:N["a"],ClosePopup:U["a"]},plugins:{Notify:j["a"]}});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},V=[],$=s["default"].extend({name:"App"}),W=$,G=n("2877"),z=Object(G["a"])(W,F,V,!1,null,null,null),K=z.exports,X=n("2f62");const Z={user:void 0,error:!1},ee={fullName(e){const{user:t}=e,n=t&&t.firstName||"",r=t&&t.lastName||"";return`${n} ${r}`}},te={profileLoaded(e,t){e.error=!1,e.user=t},profileError(e){e.error=!0,e.user=void 0}};var ne=n("bc3a"),re=n.n(ne);const oe={fetchData({commit:e}){re()({url:"https://...."}).then(t=>{const n=t&&t.data;e("profileLoaded",n)},t=>{console.log(t),e("profileError")})}},ae=!0,ie={namespaced:ae,state:Z,getters:ee,actions:oe,mutations:te},se={getDrawerState:e=>{return e.drawerState},dismissSecs:e=>e.dismissSecs,dismissCountDown:e=>e.dismissCountDown,alertType:e=>e.alertType,alertMessage:e=>e.alertMessage,currentLanguage:e=>e.currentLanguage,languages:e=>e.languages,logon:e=>e.logon,account:e=>e.userIdentity,authenticated:e=>e.authenticated,activeProfiles:e=>e.activeProfiles,ribbonOnProfiles:e=>e.ribbonOnProfiles};var ue;(function(e){e["UPDATE_DRAWER_STATE"]="updateDrawerState",e["INVERT_DRAWER_STATE"]="invertDrawerState",e["ACT_LOGOUT"]="logout"})(ue||(ue={}));const ce={[ue.UPDATE_DRAWER_STATE]:(e,t)=>{e.drawerState=t},[ue.INVERT_DRAWER_STATE]:e=>{e.drawerState=!e.drawerState},initAlert(e){e.dismissSecs=0,e.dismissCountDown=0,e.alertType="",e.alertMessage={}},setAlertType(e,t){e.alertType=t},setAlertMessage(e,t){e.dismissSecs=5,e.dismissCountDown=5,e.alertMessage=t},countDownChanged(e,t){e.dismissCountDown=t},currentLanguage(e,t){e.currentLanguage=t},authenticate(e){e.logon=!0},authenticated(e,t){e.userIdentity=t,e.authenticated=!0,e.logon=!1},[ue.ACT_LOGOUT](e){e.userIdentity=null,e.authenticated=!1,e.logon=!1},setActiveProfiles(e,t){e.activeProfiles=t},setRibbonOnProfiles(e,t){e.ribbonOnProfiles=t}},le={updDrawerState:({commit:e},t)=>{e(ue.UPDATE_DRAWER_STATE,t)},invertDrawerState:({commit:e})=>{e(ue.INVERT_DRAWER_STATE)},logout:({commit:e})=>{e(ue.ACT_LOGOUT)}};s["default"].use(X["a"]);const he={state:{version:"1.0.0",drawerState:!1,dismissSecs:0,dismissCountDown:0,alertType:"",alertMessage:{},logon:!1,userIdentity:null,authenticated:!1,ribbonOnProfiles:"",activeProfiles:"",currentLanguage:"en",languages:{en:{name:"English"},vi:{name:"Tiếng Việt"}}},getters:se,mutations:ce,actions:le,modules:{profile:ie},strict:!1};var de=function(){return new X["a"].Store(he)},ge=n("8c4f"),pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("router-view")],1)],1)},me=[],fe={name:"MyLayoutLogin",data:function(){return{}}},ve=fe,be=Object(G["a"])(ve,pe,me,!1,null,null,null),we=be.exports;const ke=()=>n.e("b503bea8").then(n.bind(null,"521f")),ye=[{path:"/",component:()=>Promise.all([n.e("7c3d0181"),n.e("2f0ac7d2")]).then(n.bind(null,"f241")),children:[{path:"",component:()=>Promise.all([n.e("7c3d0181"),n.e("2d0e8be2")]).then(n.bind(null,"8b24"))}]},{path:"/forbidden",name:"Forbidden",component:ke,meta:{error403:!0}},{path:"/not-found",name:"NotFound",component:ke,meta:{error404:!0}},{path:"/login",component:we,children:[{path:"",component:()=>Promise.all([n.e("64136c66"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}]},{path:"/register",component:we,children:[{path:"",component:()=>Promise.all([n.e("64136c66"),n.e("2d0c8f69")]).then(n.bind(null,"56b4"))}]}];ye.push({path:"*",component:()=>n.e("4b47640d").then(n.bind(null,"e51e"))});var Te=ye;s["default"].use(ge["a"]);const Se={scrollBehavior:()=>({x:0,y:0}),routes:Te,mode:"hash",base:""};var xe=function(){return new ge["a"](Se)},Pe=function(){var e="function"===typeof de?de({Vue:s["default"]}):de,t="function"===typeof xe?xe({Vue:s["default"],store:e}):xe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(K)}};return{app:n,store:e,router:t}},Ae=n("a925"),qe={global:{messages:{info:{authenticated:{prefix:"If you want to ",link:"sign in",suffix:', you can try the default accounts:<br/>- Administrator (login="admin" and password="admin") <br/>- User (login="user" and password="user").'},register:{noaccount:"You don't have an account yet?",link:"Register a new account"}},error:{dontmatch:"The password and its confirmation do not match!"},validate:{newpassword:{required:"Your password is required.",minlength:"Your password is required to be at least 4 characters.",maxlength:"Your password cannot be longer than 50 characters.",strength:"Password strength:"},confirmpassword:{sameAsPassword:"Passwords must be identical.",required:"Your confirmation password is required.",minlength:"Your confirmation password is required to be at least 4 characters.",maxlength:"Your confirmation password cannot be longer than 50 characters."},email:{required:"Your email is required.",invalid:"Your email is invalid.",minlength:"Your email is required to be at least 5 characters.",maxlength:"Your email cannot be longer than 50 characters."}}}},home:{title:"Welcome, Java Hipster!",subtitle:"This is your homepage",logged:{message:'You are logged in as user "{{username}}".'},question:"If you have any question on JHipster:",link:{homepage:"JHipster homepage",stackoverflow:"JHipster on Stack Overflow",bugtracker:"JHipster bug tracker",chat:"JHipster public chat room",follow:"follow @java_hipster on Twitter"},like:"If you like JHipster, don't forget to give us a star on",github:"GitHub"},register:{title:"Registration",form:{button:"Register"},messages:{validate:{login:{required:"Your username is required.",minlength:"Your username is required to be at least 1 character.",maxlength:"Your username cannot be longer than 50 characters.",pattern:"Your username can only contain letters and digits."}},success:"<strong>Registration saved!</strong> Please check your email for confirmation.",error:{fail:"<strong>Registration failed!</strong> Please try again later.",userexists:"<strong>Login name already registered!</strong> Please choose another one.",emailexists:"<strong>Email is already in use!</strong> Please choose another one."}}},error:{title:"Error page!",http:{400:"Bad request.",403:"You are not authorized to access this page.",404:"The page does not exist.",405:"The HTTP verb you used is not supported for this URL.",500:"Internal server error."},concurrencyFailure:"Another user modified this data at the same time as you. Your changes were rejected.",validation:"Validation error on the server."},login:{title:"Sign in",form:{password:"Password","password.placeholder":"Your password",rememberme:"Remember me",button:"Sign in"},messages:{error:{authentication:"<strong>Failed to sign in!</strong> Please check your credentials and try again."}},password:{forgot:"Did you forget your password?"}}},Qe={global:{messages:{info:{authenticated:{prefix:"Nếu bạn muốn ",link:"đăng nhập",suffix:', bạn có thể thử với tài khoản mặc định:<br/>- Quản trị viên (tài khoản="admin" và mật khẩu="admin") <br/>- Người dùng (tài khoản="user" và mật khẩu="user").'},register:{noaccount:"Bạn vẫn chưa có tài khoản?",link:"Đăng ký tài khoản mới"}},error:{dontmatch:"Xác nhận mật khẩu không khớp!"},validate:{newpassword:{required:"Bạn phải nhập mật khẩu.",minlength:"Mật khẩu phải có ít nhất 4 ký tự.",maxlength:"Mật khẩu không được vượt quá 50 ký tự.",strength:"Độ mạnh của mật khẩu:"},confirmpassword:{sameAsPassword:"Bạn phải nhập đúng mật khẩu ở trên để xác nhận.",required:"Bạn phải nhập lại mật khẩu để xác nhận.",minlength:"Mật khẩu phải có ít nhất 4 ký tự.",maxlength:"Mật khẩu không được vượt quá 50 ký tự."},email:{required:"Bạn phải nhập email.",invalid:"Email bạn nhập không hợp lệ.",minlength:"Email phải có ít nhất 5 ký tự.",maxlength:"Email không được vượt quá 50 ký tự."}}}},home:{title:"Chào mừng bạn đến với Java Hipster!",subtitle:"Đây là trang chủ của bạn",logged:{message:'Bạn đang đăng nhập bằng tài khoản "{username}".'},question:"Nếu bạn có bất kỳ câu hỏi nào về JHipster vui lòng truy cập:",link:{homepage:"Trang chủ JHipster",stackoverflow:"JHipster trên Stack Overflow",bugtracker:"Theo dõi các lỗi JHipster",chat:"Phòng chat công cộng JHipster",follow:"Theo dõi @java_hipster trên Twitter"},like:"Nếu bạn thích JHipster, đừng quên cho chúng tôi thêm một ngôi sao trên",github:"GitHub"},register:{title:"Đăng ký",form:{button:"Đăng ký"},messages:{validate:{login:{required:"Bạn phải nhập tên tài khoản.",minlength:"Tên tài khoản phải có ít nhất 1 ký tự.",maxlength:"Tên tài khoản không được vượt quá 50 ký tự.",pattern:"Tên tài khoản chỉ có thể chứa các ký tự in thường và số."}},success:"<strong>Đăng ký thành công!</strong> Bạn vui lòng kiểm tra hộp thư để xác nhận tài khoản.",error:{fail:"<strong>Đăng ký thất bại!</strong> Vui lòng thử lại sau.",userexists:"<strong>Tên tài khoản này đã được sử dụng!</strong> Bạn vui lòng chọn tên tài khoản khác.",emailexists:"<strong>Email này đã được sử dụng!</strong> Bạn vui lòng nhập email khác."}}},error:{title:"Trang thông tin lỗi!",http:{400:"Bad request.",403:"Bạn không có quyền xem trang này.",404:"Trang không tồn tại.",405:"The HTTP verb you used is not supported for this URL.",500:"Internal server error."},concurrencyFailure:"Another user modified this data at the same time as you. Your changes were rejected.",validation:"Validation error on the server."},login:{title:"Đăng nhập",form:{password:"Mật khẩu","password.placeholder":"Nhập mật khầu của bạn",rememberme:"Nhớ tài khoản",button:"Đăng nhập"},messages:{error:{authentication:"<strong>Đăng nhập thất bại!</strong> Bạn vui lòng kiểm tra thông tin đăng nhập và thử lại."}},password:{forgot:"Bạn quên mật khẩu?"}}},Re={"en-us":qe,"vi-vn":Qe},Le=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function s(e){try{u(r["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):o(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))},Ee=({app:e,Vue:t})=>Le(void 0,void 0,void 0,(function*(){t.use(Ae["a"]),e.i18n=new Ae["a"]({locale:"vi-vn",fallbackLocale:"en-us",messages:Re})})),Ie=n("a748"),De=n("1dce"),_e=n.n(De),Be=n("1b66");class He{constructor(e,t,n){this.store=e,this.router=t,this.translationService=n,this.init()}init(){const e=Be["a"]();this.store.getters.account||this.store.getters.logon||!e||this.retrieveAccount()}retrieveProfiles(){Ie["a"].get("management/info").then(e=>{e.data&&e.data.activeProfiles&&(this.store.commit("setRibbonOnProfiles",e.data["display-ribbon-on-profiles"]),this.store.commit("setActiveProfiles",e.data["activeProfiles"]))})}retrieveAccount(){this.store.commit("authenticate"),Ie["a"].get("api/account").then(e=>{const t=e.data;if(t){if(this.store.commit("authenticated",t),this.store.getters.currentLanguage!==t.langKey&&this.store.commit("currentLanguage",t.langKey),sessionStorage.getItem("requested-url")){const e=null!=sessionStorage.getItem("requested-url")?sessionStorage.getItem("requested-url"):"";this.router.replace(e),sessionStorage.removeItem("requested-url")}}else this.store.commit("logout"),this.router.push("/"),sessionStorage.removeItem("requested-url");this.translationService.refreshTranslation(this.store.getters.currentLanguage)}).catch(()=>{this.store.commit("logout"),this.router.push("/")})}hasAnyAuthority(e){if("string"===typeof e&&(e=[e]),!this.authenticated||!this.userAuthorities)return!1;for(let t=0;t<e.length;t++)if(this.userAuthorities.includes(e[t]))return!0;return!1}get authenticated(){return this.store.getters.authenticated}get userAuthorities(){return this.store.getters.account.authorities}}class Ye{processRegistration(e){return Ie["a"].post("api/register",e)}}class Ce{constructor(e,t){this.store=e,this.i18n=t}refreshTranslation(e){let t=this.store.getters.currentLanguage;t=e||"en",this.i18n&&!this.i18n.messages[t]?(this.i18n.setLocaleMessage(t,{}),Ie["a"].get("i18n/"+t+".json").then(e=>{e.data&&(this.i18n.setLocaleMessage(t,e.data),this.i18n.locale=t,this.store.commit("currentLanguage",t))})):this.i18n&&(this.i18n.locale=t,this.store.commit("currentLanguage",t))}}class Oe{constructor(e,t){this.store=e,this.router=t}openLogin(e){e.$emit("bv::show::modal","login-page")}logOut(){Be["b"](),this.store.dispatch("logout"),this.router.push("/")}}var Je=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function s(e){try{u(r["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):o(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))},Me=({store:e,router:t,i18n:n,app:r})=>Je(void 0,void 0,void 0,(function*(){s["default"].use(_e.a);const o=new Ce(e,n),a=new Oe(e,t),i=new He(e,t,o),u={accountService:()=>i,loginService:()=>a,translationService:()=>o,registerService:()=>new Ye};r.provide=u})),Ne=(n("551c"),n("ac6a"),n("cadf"),n("06db"),n("456d"),K.options||K),Ue="function"===typeof Ne.preFetch;function je(e,t){var n=e?e.matched?e:t.resolve(e).route:t.currentRoute;return n?[].concat.apply([],n.matched.map((function(e){return Object.keys(e.components).map((function(t){var n=e.components[t];return{path:e.path,c:n.options||n}}))}))):[]}function Fe(e,t){e.beforeResolve((function(n,r,o){var a=je(n,e),i=je(r,e),s=!1,u=a.filter((function(e,t){return s||(s=!i[t]||i[t].c!==e.c||e.path.indexOf("/:")>-1)})).filter((function(e){return e.c&&"function"===typeof e.c.preFetch})).map((function(e){return e.c}));if(Ue&&(Ue=!1,u.unshift(Ne)),!u.length)return o();var c=!0,l=function(e){c=!1,o(e)},h=function(){c&&o()};u.filter((function(e){return e&&e.preFetch})).reduce((function(e,o){return e.then((function(){return c&&o.preFetch({store:t,currentRoute:n,previousRoute:r,redirect:l})}))}),Promise.resolve()).then(h).catch((function(e){console.error(e),h()}))}))}var Ve=Pe(),$e=Ve.app,We=Ve.store,Ge=Ve.router;function ze(){return Ke.apply(this,arguments)}function Ke(){return Ke=i()(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[Ee,Ie["b"],Me],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:$e,router:Ge,store:We,Vue:s["default"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:Fe(Ge,We),new s["default"]($e);case 22:case"end":return e.stop()}}),e,null,[[5,10]])}))),Ke.apply(this,arguments)}ze()},"7e6d":function(e,t,n){},"85ee":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return c}));const r="jhi-authenticationToken",o="jhi-authenticationRefreshToken",a="https://www.jhipster.tech/problem",i=a+"/email-already-used",s=a+"/login-already-used",u="https://api.cuocsongdongian.com/rest/v2/upload",c="user:CtLaAc3A"},a748:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("bc3a"),o=n.n(r),a=n("1b66"),i=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function s(e){try{u(r["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):o(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))};const s=1e6,u=e=>{const t=a["a"]();return t&&(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${t}`),e.timeout=s,e.url=`${e.url}`,e},c=o.a.create({baseURL:"https://prod.api.com"}),l=e=>{const t=e.response&&e.response.status;return 403!==t&&401!==t||console.log("Unauthorized!"),Promise.reject(e)};c.interceptors&&(c.interceptors.request.use(u),c.interceptors.response.use(e=>e,l)),t["b"]=({Vue:e})=>i(void 0,void 0,void 0,(function*(){e.prototype.$axios=c}))}},[[0,"runtime","vendor"]]]);