(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{129:function(t,e,n){},218:function(t,e,n){},220:function(t,e,n){"use strict";n.r(e);n(129);var r=function(t){t&&t instanceof Function&&n.e(10).then(n.bind(null,296)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))},a=n(0),c=n.n(a),s=n(43),i=n.n(s),u=n(12),o=n(29),l=n(24),f=n(67),b=n(74),d={friends:[{id:1,name:"Aaaa"},{id:2,name:"Bbb"},{id:3,name:"Ccc"}]},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return t},j=n(75),h=n(77),O=n(3),m="INIT_SUCCESS",g={init:!1},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;return e.type===m?Object(O.a)(Object(O.a)({},t),{},{init:!0}):t},x=n(73),w=Object(o.c)({profilePage:b.b,dialogsPage:f.a,sidebar:p,usersPage:j.a,auth:l.a,app:v,form:x.a}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,_=Object(o.e)(w,k(Object(o.a)(h.a))),y=n(39),C=n(40),E=n(42),P=n(41),N=n(20),S=n(4),A=(n(218),n(50)),T=n(52),I=n.n(T),U=n(2),L=function(t){var e=t.userData,n=t.logoutUser;return Object(U.jsxs)("header",{className:I.a.header,children:[Object(U.jsx)("img",{className:I.a.img,src:"https://i.imgur.com/BrIpiK6.png"}),Object(U.jsx)("div",{children:"authorized"===e.isAuth?Object(U.jsxs)("div",{children:[Object(U.jsxs)("span",{children:[" ",e.login," (",e.email,") "]}),Object(U.jsx)("button",{onClick:n,children:"Exit"})]}):Object(U.jsx)(u.b,{to:"/login",children:"Login"})})]})},D=function(t){Object(E.a)(n,t);var e=Object(P.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(U.jsx)(L,Object(O.a)(Object(O.a)({},this.props),{},{logoutUser:this.props.logoutUser}))}}]),n}(c.a.Component),F=Object(N.b)((function(t){return{userData:t.auth}}),{logoutUser:l.d})(D),R=n(9),z=n.n(R),G=function(){var t="".concat(z.a.active," ").concat(z.a.link);return Object(U.jsx)("nav",{className:z.a.nav,children:Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{className:z.a.item,children:Object(U.jsx)(u.b,{className:function(e){return e.isActive?t:z.a.link},to:"/profile",children:"Profile"})}),Object(U.jsx)("li",{className:z.a.item,children:Object(U.jsx)(u.b,{className:function(e){return e.isActive?t:z.a.link},to:"/dialogs",children:"Dialogs"})}),Object(U.jsx)("li",{className:z.a.item,children:Object(U.jsx)(u.b,{className:function(e){return e.isActive?t:z.a.link},to:"/news",children:"News"})}),Object(U.jsx)("li",{className:z.a.item,children:Object(U.jsx)(u.b,{className:function(e){return e.isActive?t:z.a.link},to:"/music",children:"Music"})}),Object(U.jsx)("li",{className:z.a.item,children:Object(U.jsx)(u.b,{className:function(e){return e.isActive?t:z.a.link},to:"/users",children:"Users"})})]})})},H=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,301))})),W=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,302))})),K=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,299))})),B=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,300))})),M=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,297))})),Y=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,298))})),J=function(t){Object(E.a)(n,t);var e=Object(P.a)(n);function n(){return Object(y.a)(this,n),e.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return this.props.init?Object(U.jsxs)("div",{className:"app-wrapper",children:[Object(U.jsx)(F,{}),Object(U.jsx)(G,{}),Object(U.jsx)("div",{className:"app-content-wrapper",children:Object(U.jsx)(a.Suspense,{fallback:Object(U.jsx)(A.a,{}),children:Object(U.jsxs)(S.d,{children:[Object(U.jsx)(S.b,{path:"/login",element:Object(U.jsx)(W,{})}),Object(U.jsx)(S.b,{path:"/profile/:userId",element:Object(U.jsx)(K,{})}),Object(U.jsx)(S.b,{path:"/profile",element:Object(U.jsx)(K,{})}),Object(U.jsx)(S.b,{path:"/dialogs/*",element:Object(U.jsx)(H,{})}),Object(U.jsx)(S.b,{path:"/users",element:Object(U.jsx)(B,{})}),Object(U.jsx)(S.b,{path:"/news",element:Object(U.jsx)(Y,{})}),Object(U.jsx)(S.b,{path:"/music",element:Object(U.jsx)(M,{})})]})})})]}):Object(U.jsx)(A.a,{})}}]),n}(c.a.Component),V=Object(N.b)((function(t){return{init:t.app.init}}),{initApp:function(){return function(t){t(Object(l.b)()).then((function(){t({type:m})}))}}})(J);i.a.render(Object(U.jsx)(u.a,{children:Object(U.jsx)(N.a,{store:_,children:Object(U.jsx)(V,{})})}),document.getElementById("root")),window.store=_,window.props=[],r()},24:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return x}));var r=n(3),a=n(6),c=n.n(a),s=n(11),i=n(21),u=n(16),o=n.n(u),l=o.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"9d799735-d786-4c1b-bde9-09779c3bba07"}}),f=function(){return l.get("/auth/me").then((function(t){return t.data}))},b=function(t){return l.post("/auth/login",t).then((function(t){return t.data}))},d=function(){return l.post("/auth/logout")},p=o.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"9d799735-d786-4c1b-bde9-09779c3bba07"}}),j=function(){return p.get("/security/get-captcha-url").then((function(t){return t.data}))},h="social-network/auth/SET_AUTH_USER_DATA",O="social-network/auth/SET_CAPTCHA_URL",m=function(t,e){return{type:h,data:t,isAuth:e}},g=function(){return function(t){return f().then((function(e){0===e.resultCode&&t(m(e.data,"authorized"))}))}},v=function(t){return function(){var e=Object(s.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:0===(r=e.sent).resultCode?n(g()):(10===r.resultCode&&n(w()),n(Object(i.b)("login",{_error:r.messages[0]})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var t=Object(s.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:0===t.sent.data.resultCode&&e(m({id:null,login:null,email:null},"notAuthorized"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(){return function(){var t=Object(s.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:n=t.sent,e((r=n.url,{type:O,url:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},k={id:null,login:null,email:null,isAuth:"notAuthorized",captchaUrl:null};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(r.a)(Object(r.a)(Object(r.a)({},t),e.data),{},{isAuth:e.isAuth});case O:return Object(r.a)(Object(r.a)({},t),{},{captchaUrl:e.url});default:return t}}},50:function(t,e,n){"use strict";n(0);var r=n(79),a=n.n(r),c=n(2);e.a=function(){return Object(c.jsx)("div",{className:a.a.spinner})}},52:function(t,e,n){t.exports={header:"Header_header__1VCKf",img:"Header_img__3ifQS"}},67:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var r=n(18),a=n(3),c="SEND-MESSAGE",s=function(t){return{type:c,text:t}},i={dialogs:[{id:1,name:"Aaaa"},{id:2,name:"Bbb"},{id:3,name:"Ccc"}],messages:[{id:1,message:"Hey!",status:"from"},{id:2,message:"How are you?",status:"from"},{id:3,message:"Im ok)",status:"to"}]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;return e.type===c?Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:t.messages.length+1,status:"to",message:e.text}])}):t}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return C})),n.d(e,"g",(function(){return E})),n.d(e,"e",(function(){return P})),n.d(e,"f",(function(){return N}));var r=n(18),a=n(3),c=n(44),s=n(6),i=n.n(s),u=n(11),o=n(21),l=n(16),f=n.n(l).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"9d799735-d786-4c1b-bde9-09779c3bba07"}}),b=function(t){return f.get("/profile/".concat(t)).then((function(t){return t.data}))},d=function(t){return f.get("/profile/status/".concat(t)).then((function(t){return t.data}))},p=function(t){return f.put("/profile/status",{status:t}).then((function(t){return t.data}))},j=function(t){var e=new FormData;return e.append("image",t),f.put("/profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return t.data}))},h=function(t){return f.put("/profile",t).then((function(t){return t.data}))},O="social-network/profile/ADD-POST",m="social-network/profile/SET_USER_PROFILE",g="social-network/profile/SET_USER_STATUS",v="social-network/profile/SET_PHOTO",x="social-network/profile/TOGGLE_IN_WAITING",w=function(t){return{type:O,text:t}},k=function(t){return{type:g,text:t}},_=function(t){return{type:x,inWaiting:t}},y=function(t){return function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:r=e.sent,n({type:m,userData:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(t){return function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:r=e.sent,n(k(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:0===e.sent.resultCode&&n(k(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(t){return function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(_(!0)),e.next=3,j(t);case 3:r=e.sent,n((a=r.data.photos,{type:v,photos:a})),n(_(!1));case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r().auth.id,e.next=3,h(t);case 3:if(0!==(s=e.sent).resultCode){e.next=8;break}n(y(a)),e.next=14;break;case 8:if(!(s.messages[0].indexOf("->")>-1)){e.next=12;break}return u=s.messages[0].substring(s.messages[0].indexOf("->")+2,s.messages[0].length-1).toLowerCase(),n(Object(o.b)("profileDataForm",{contacts:Object(c.a)({},u,s.messages[0])})),e.abrupt("return",Promise.reject(s.messages[0]));case 12:return n(Object(o.b)("profileDataForm",{_error:s.messages[0]})),e.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},S={posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"Its my first post",likesCount:15},{id:3,message:"Da",likesCount:120},{id:4,message:"Ok, its cool",likesCount:110},{id:5,message:";)",likesCount:40}],userProfile:null,userStatus:"",inWaiting:!1};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(a.a)(Object(a.a)({},t),{},{posts:[].concat(Object(r.a)(t.posts),[{id:t.posts.length+1,message:e.text,likesCount:0}])});case m:return Object(a.a)(Object(a.a)({},t),{},{userProfile:e.userData});case g:return Object(a.a)(Object(a.a)({},t),{},{userStatus:e.text});case v:return Object(a.a)(Object(a.a)({},t),{},{userProfile:Object(a.a)(Object(a.a)({},t.userProfile),{},{photos:e.photos})});case x:return Object(a.a)(Object(a.a)({},t),{},{inWaiting:e.inWaiting});default:return t}}},75:function(t,e,n){"use strict";n.d(e,"b",(function(){return P})),n.d(e,"d",(function(){return N})),n.d(e,"c",(function(){return S}));var r=n(18),a=n(3),c=n(6),s=n.n(c),i=n(11),u=n(16),o=n.n(u).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"9d799735-d786-4c1b-bde9-09779c3bba07"}}),l=function(t){return o.post("/follow/".concat(t)).then((function(t){return t.data}))},f=function(t){return o.delete("/follow/".concat(t)).then((function(t){return t.data}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return o.get("/users?count=".concat(t,"&page=").concat(e,"&term=").concat(n)).then((function(t){return t.data}))},d="social-network/users/FOLLOW",p="social-network/users/UNFOLLOW",j="social-network/users/SET_USERS",h="social-network/users/SET_CURRENT_PAGE",O="social-network/users/SET_TOTAL_COUNT",m="social-network/users/TOGGLE_IS_FETCHING",g="social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS",v=function(t){return{type:d,userId:t}},x=function(t){return{type:p,userId:t}},w=function(t){return{type:j,users:t}},k=function(t){return{type:h,page:t}},_=function(t){return{type:O,totalCount:t}},y=function(t){return{type:m,isFetching:t}},C=function(t,e){return{type:g,inProgress:t,id:e}},E=function(){var t=Object(i.a)(s.a.mark((function t(e,n,r,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C(!0,a)),t.next=3,n(a);case 3:0===t.sent.resultCode&&e(r(a)),e(C(!1,a));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),P=function(t){return function(e){E(e,l,v,t)}},N=function(t){return function(e){E(e,f,x,t)}},S=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var r=Object(i.a)(s.a.mark((function r(a){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(y(!0)),r.next=3,b(t,e,n);case 3:c=r.sent,a(w(c.items)),a(_(c.totalCount)),a(y(!1)),a(k(e));case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},A={items:[],pageSize:50,currentPage:1,totalCount:null,isFetching:!1,followingInProgress:[]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(a.a)(Object(a.a)({},t),{},{items:Object(r.a)(t.items.map((function(t){return t.id===e.userId?Object(a.a)(Object(a.a)({},t),{},{followed:!0}):t})))});case p:return Object(a.a)(Object(a.a)({},t),{},{items:Object(r.a)(t.items.map((function(t){return t.id===e.userId?Object(a.a)(Object(a.a)({},t),{},{followed:!1}):t})))});case j:return Object(a.a)(Object(a.a)({},t),{},{items:e.users});case h:return Object(a.a)(Object(a.a)({},t),{},{currentPage:e.page});case O:return Object(a.a)(Object(a.a)({},t),{},{totalCount:e.totalCount});case m:return Object(a.a)(Object(a.a)({},t),{},{isFetching:e.isFetching});case g:return Object(a.a)(Object(a.a)({},t),{},{followingInProgress:e.inProgress?[].concat(Object(r.a)(t.followingInProgress),[e.id]):t.followingInProgress.filter((function(t){return t!==e.id}))});default:return t}}},79:function(t,e,n){t.exports={spinner:"Preloader_spinner__1CHfh"}},9:function(t,e,n){t.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",link:"Navbar_link__TNvz9",active:"Navbar_active__3mbhk"}}},[[220,2,3]]]);
//# sourceMappingURL=main.21c9686b.chunk.js.map