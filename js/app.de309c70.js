(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},s={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-469e7e5c":"392599fe","chunk-48e5fa00":"e521f1a7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-469e7e5c":1,"chunk-48e5fa00":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-469e7e5c":"d6fafde6","chunk-48e5fa00":"dc5a714e"}[e]+".css",s=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===r||c===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],m.parentNode.removeChild(m),n(a)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"003f":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},"039a":function(e,t,n){"use strict";n("7174")},"274f":function(e,t,n){"use strict";n("f9c4")},"546f":function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"h",(function(){return $})),n.d(t,"q",(function(){return R})),n.d(t,"e",(function(){return V})),n.d(t,"c",(function(){return L})),n.d(t,"p",(function(){return B})),n.d(t,"d",(function(){return E})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return P})),n.d(t,"b",(function(){return q})),n.d(t,"m",(function(){return M})),n.d(t,"o",(function(){return N})),n.d(t,"n",(function(){return U})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return D}));var r,o,s,a,i,u,l,c,d,m,p,f,b,g,h,_,v,C,w,x=n("8785"),y=n("9530"),k=n.n(y),O=k()(r||(r=Object(x["a"])(["query checkUsername($username:String!) {\n    exists: usernameExists(username: $username)}\n    "]))),j=k()(o||(o=Object(x["a"])(["query register($username:String!,$password:String!) {\n    register(username: $username, password: $password) {\n      id\n      username\n      timestamp\n    }\n  }\n  "]))),$=k()(s||(s=Object(x["a"])(["query login($username:String!,$password:String!) {\n    token: login(username: $username, password: $password) \n  }\n  "]))),R=k()(a||(a=Object(x["a"])(["  query me {\n    me {\n      id\n      username\n      timestamp\n      rooms{\n        id\n        name\n      }\n      currentRoom {\n        id\n        name   \n        owner {\n          id\n          username\n        }\n        members{\n            id\n            username\n          }\n        lastMessages{\n          id\n          timestamp\n       \n          author{\n            id \n            username\n          }\n          text\n        }\n      }\n    }\n  }"]))),V=k()(i||(i=Object(x["a"])(["query rooms {\n  rooms {\n    id\n    name\n    owner {\n      id\n      username\n    }\n  }\n}"]))),L=(k()(u||(u=Object(x["a"])(["query users {\n  users {\n    id\n    username\n    currentRoom {\n      name\n    }\n    rooms {\n      name\n    }\n  }\n}"]))),k()(l||(l=Object(x["a"])(["mutation createRoom($room_name:String!) {\n    createRoom(name: $room_name) {\n      id\n      name\n      timestamp\n    }\n  }"])))),B=k()(c||(c=Object(x["a"])(["mutation updateRoom($name:String!,$id:ID!) {\n    updateRoom(id: $id, name: $name) {\n      id \n      name\n      timestamp\n    }\n  }"]))),E=k()(d||(d=Object(x["a"])(["mutation deleteRoom($id:ID!) {\n    deleteRoom(id: $id) {\n      id \n      name\n      timestamp\n    }\n  }"]))),S=k()(m||(m=Object(x["a"])(["mutation join($id:ID!) {\n    joinRoom(roomId: $id) {\n      id\n      name   \n      owner {\n        id\n        username\n      }\n      members{\n          id\n          username\n        }\n      lastMessages{\n        id\n        timestamp\n     \n        author{\n          id \n          username\n        }\n        text\n      }\n    }\n  }"]))),P=k()(p||(p=Object(x["a"])(["mutation leave {\n    leaveCurrentRoom {\n      id \n      name\n    }\n  }"]))),q=k()(f||(f=Object(x["a"])(["mutation createMessage($message:String!) {\n  createMessage(text: $message) {\n    id\n    timestamp\n    author {id username }\n    text\n  }\n}"]))),M=k()(b||(b=Object(x["a"])(["\nsubscription roomCreated {\n  roomCreated {\n    id name owner {id username}\n  }\n}"]))),N=k()(g||(g=Object(x["a"])(["\nsubscription roomUpdated {\n  roomUpdated {\n    id name owner {id username}\n  }\n}"]))),U=k()(h||(h=Object(x["a"])(["\nsubscription roomDeleted {\n  roomDeleted {\n    id name owner {id username}\n  }\n}"]))),I=(k()(_||(_=Object(x["a"])(["\nsubscription currentRoomChanged {\n  currentRoomChanged {\n    currentRoom { id name }\n  }\n}"]))),k()(v||(v=Object(x["a"])(["\nsubscription memberJoined {\n  memberJoined { id username }\n}"])))),A=k()(C||(C=Object(x["a"])(["\nsubscription memberLeft {\n  memberLeft { id username }\n}"]))),D=k()(w||(w=Object(x["a"])(["\nsubscription messageCreated {\n  messageCreated {\n    id\n    timestamp\n    author { id username }\n    text\n  }\n}"])))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e.isCreateButtonVisible?n("div",{staticClass:"left_logo"},[n("div",{staticClass:"create_chat"},[n("button",{staticClass:"btn button",attrs:{type:"button"},on:{click:e.showModal}},[n("span",{staticClass:"button__line button__line--top"}),n("span",{staticClass:"button__line button__line--right"}),n("span",{staticClass:"button__line button__line--bottom"}),n("span",{staticClass:"button__line button__line--left"}),e._v(" Create chat ")]),n("div",{staticClass:"vertical"},[e._v("|")]),n("ModalCreateChat",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal}})],1)]):e._e(),n("div",{staticClass:"right_btn"},[e.isLoginButtonVisible?n("div",{staticClass:"link_login"},[n("router-link",{staticClass:"button",attrs:{to:"/login"}},[n("span",{staticClass:"button__line button__line--top"}),n("span",{staticClass:"button__line button__line--right"}),n("span",{staticClass:"button__line button__line--bottom"}),n("span",{staticClass:"button__line button__line--left"}),e._v("Log in")])],1):e._e(),e.isRegistrationButtonVisible?n("div",{staticClass:"link_registration"},[e.isLoginButtonVisible?n("div",{staticClass:"vertical_1"},[e._v("|")]):e._e(),n("router-link",{staticClass:"button",attrs:{to:"/registration"}},[n("span",{staticClass:"button__line button__line--top"}),n("span",{staticClass:"button__line button__line--right"}),n("span",{staticClass:"button__line button__line--bottom"}),n("span",{staticClass:"button__line button__line--left"}),e._v("Sign up")])],1):e._e(),e.isLogoutButtonVisible?n("div",{staticClass:"link_logout"},[n("a",{staticClass:"button logout",attrs:{href:"/login"},on:{click:e.LogOut}},[e._m(0)])]):e._e()])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("span",{staticClass:"button__line button__line--top"}),n("span",{staticClass:"button__line button__line--right"}),n("span",{staticClass:"button__line button__line--bottom"}),n("span",{staticClass:"button__line button__line--left"}),e._v(" Logout ")])}],u=n("1da1"),l=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._t("header",[e._v(" Create chat "),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v(" x ")])])],2),n("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._t("body",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.chat_name,expression:"chat_name"}],staticClass:"chat_name_input",attrs:{type:"text"},domProps:{value:e.chat_name},on:{input:function(t){t.target.composing||(e.chat_name=t.target.value)}}})])],2),n("footer",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Create chat"},on:{click:e.CreateChat}},[e._v(" Create chat ")]),n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:e.close}},[e._v(" Close ")])])],2)])])])}),c=[],d=n("546f"),m={name:"ModalCreateChat",data:function(){return{chat_name:"",rooms:[]}},methods:{close:function(){this.$emit("close")},CreateChat:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.chat_name){t.next=7;break}return t.next=3,e.$apollo.mutate({mutation:d["c"],variables:{room_name:e.chat_name}});case 3:e.chat_name="",e.close(),t.next=8;break;case 7:console.log("Empty string");case 8:case"end":return t.stop()}}),t)})))()}}},p=m,f=(n("fd5e"),n("2877")),b=Object(f["a"])(p,l,c,!1,null,"f913e730",null),g=b.exports,h=n("5530"),_=n("522d"),v=n("efe7");r["a"].use(_["a"]);var C="apollo-token",w=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://webprogbase-lab6-graphql.herokuapp.com/",x={httpEndpoint:w,tokenName:C,persisting:!1,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"wss://webprogbase-lab6-graphql.herokuapp.com/graphql",websocketsOnly:!1,ssr:!1};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(v["createApolloClient"])(Object(h["a"])(Object(h["a"])({},x),e)),n=t.apolloClient,r=t.wsClient;n.wsClient=r;var o=new _["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return o}function k(e,t){return O.apply(this,arguments)}function O(){return O=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&n&&localStorage.setItem(C,n),t.wsClient&&Object(v["restartWebsockets"])(t.wsClient),e.prev=2,e.next=5,t.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),O.apply(this,arguments)}function j(e){return $.apply(this,arguments)}function $(){return $=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&localStorage.removeItem(C),t.wsClient&&Object(v["restartWebsockets"])(t.wsClient),e.prev=2,e.next=5,t.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (logout)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),$.apply(this,arguments)}var R={name:"Header",components:{ModalCreateChat:g},data:function(){return{isModalVisible:!1,isCreateButtonVisible:!0,isLogoutButtonVisible:!0,isLoginButtonVisible:!0,isRegistrationButtonVisible:!0}},created:function(){"/login"!==this.$router.currentRoute.path&&"/registration"!==this.$router.currentRoute.path||(this.isLoginButtonVisible=!0,this.isRegistrationButtonVisible=!0,this.isCreateButtonVisible=!1,this.isLogoutButtonVisible=!1),"/chats"===this.$router.currentRoute.path&&(this.isLoginButtonVisible=!1,this.isRegistrationButtonVisible=!1,this.isCreateButtonVisible=!0,this.isLogoutButtonVisible=!0)},watch:{$route:function(e){"/login"===e.path||"/registration"===e.path?(this.isLoginButtonVisible=!0,this.isRegistrationButtonVisible=!0,this.isCreateButtonVisible=!1,this.isLogoutButtonVisible=!1,console.log("Login or registration")):"/chats"===e.path?(this.isLoginButtonVisible=!1,this.isRegistrationButtonVisible=!1,this.isCreateButtonVisible=!0,this.isLogoutButtonVisible=!0,console.log("Chats")):(this.isLoginButtonVisible=!0,this.isRegistrationButtonVisible=!0,this.isCreateButtonVisible=!1,this.isLogoutButtonVisible=!1)}},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},LogOut:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Here"),e.isCreateButtonVisible=!1,e.isLogoutButtonVisible=!1,e.isLoginButtonVisible=!0,e.isRegistrationButtonVisible=!0,t.next=7,j(e.$apollo.provider.defaultClient);case 7:return t.next=9,e.$apollo.provider.defaultClient.resetStore();case 9:e.$router.push("/login");case 10:case"end":return t.stop()}}),t)})))()}}},V=R,L=(n("8baf"),Object(f["a"])(V,a,i,!1,null,null,null)),B=L.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[e._v("Chat party 2021")])},S=[],P={name:"Footer"},q=P,M=(n("274f"),Object(f["a"])(q,E,S,!1,null,"3cb506f5",null)),N=M.exports,U={name:"App",components:{Header:B,Footer:N}},I=U,A=(n("034f"),Object(f["a"])(I,o,s,!1,null,null,null)),D=A.exports,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"registration"},[n("div",{staticClass:"block"},[n("span",{staticClass:"reg_title"},[e._v("Registration")]),e.IsPasswordSame?e._e():n("div",{staticClass:"error"},[e._v("Passwords are different")]),e.IsUserExists?n("div",{staticClass:"error"},[e._v("Choose another login")]):e._e(),n("form",{staticClass:"registration_form",on:{submit:function(t){return t.preventDefault(),e.RegistrUser(t)}}},[n("div",{staticClass:"form_group"},[n("p",[e._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form_control",attrs:{type:"text",placeholder:"",required:""},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form_control",attrs:{type:"password",placeholder:"",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("p",[e._v("Confirm password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form_control",attrs:{type:"password",placeholder:"",requireds:""},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}})]),e._m(0)])])])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form_btn"},[n("button",{staticClass:"registration_btn btn"},[e._v("Sign Up")])])}],J={name:"Registration",data:function(){return{login:"",password:"",confirm_password:"",IsUserExists:!1,IsPasswordSame:!0}},methods:{RegistrUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:d["a"],variables:{username:e.login}});case 3:if(n=t.sent,!n.data.exists){t.next=10;break}console.log("change name"),e.IsUserExists=!0,e.IsPasswordSame=!0,t.next=25;break;case 10:if(e.password===e.confirm_password){t.next=16;break}console.log("passwords are different"),e.IsPasswordSame=!1,e.IsUserExists=!1,t.next=25;break;case 16:return e.IsUserExists=!1,e.IsPasswordSame=!0,t.next=20,e.$apollo.query({query:d["i"],variables:{username:e.login,password:e.password}});case 20:return t.next=22,e.$apollo.query({query:d["h"],variables:{username:e.login,password:e.password}});case 22:r=t.sent,k(e.$apollo.provider.defaultClient,r.data.token),e.$router.push("/chats");case 25:t.next=30;break;case 27:t.prev=27,t.t0=t["catch"](0),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[0,27]])})))()}}},W=J,G=(n("bc75"),Object(f["a"])(W,H,F,!1,null,"eea19512",null)),Q=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"block"},[n("span",{staticClass:"log_title"},[e._v("Login")]),e.error?n("div",{staticClass:"error"},[e._v("No user with such data")]):e._e(),n("form",{staticClass:"login_form",on:{submit:function(t){return t.preventDefault(),e.LoginUser(t)}}},[n("div",{staticClass:"form_group"},[n("p",[e._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form_control",attrs:{type:"text",placeholder:"",required:""},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form_control",attrs:{type:"password",placeholder:"",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])])])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form_btn"},[n("button",{staticClass:"login_btn btn"},[e._v("Login")])])}],X={name:"Login",data:function(){return{login:"",password:"",exists:!1,token:"",error:!1}},methods:{LoginUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:d["a"],variables:{username:e.login}});case 3:if(n=t.sent,!n.data.exists){t.next=14;break}return t.next=7,e.$apollo.query({query:d["h"],variables:{username:e.login,password:e.password}});case 7:return r=t.sent,t.next=10,k(e.$apollo.provider.defaultClient,r.data.token);case 10:e.error=!1,e.$router.push("/chats"),t.next=15;break;case 14:e.error=!0;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},Y=X,Z=(n("039a"),n("ebe1"),Object(f["a"])(Y,K,z,!1,null,"2d3cd8f4",null)),ee=Z.exports;r["a"].use(T["a"]);var te=new T["a"]({mode:"history",routes:[{path:"/registration",component:Q},{path:"/login",component:ee},{path:"/chats",component:function(){return n.e("chunk-469e7e5c").then(n.bind(null,"ac11"))}},{path:"*",component:function(){return n.e("chunk-48e5fa00").then(n.bind(null,"42ec"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:te,apolloProvider:y(),render:function(e){return e(D)}}).$mount("#app")},6860:function(e,t,n){},7174:function(e,t,n){},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")},b4f8:function(e,t,n){},bc75:function(e,t,n){"use strict";n("e3cd")},e3cd:function(e,t,n){},ebe1:function(e,t,n){"use strict";n("b4f8")},f9c4:function(e,t,n){},fd5e:function(e,t,n){"use strict";n("003f")}});
//# sourceMappingURL=app.de309c70.js.map