(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{362:function(e,o,r){"use strict";r.d(o,"b",(function(){return m})),r.d(o,"a",(function(){return u}));var t=r(10),a=r(7),s=(r(0),r(363)),n=r.n(s),c=r(360),i=r.n(c),l=r(1),m=function(e){var o=e.input,r=e.meta,t=r.touched,s=r.error,c=e.placeholder;return Object(l.jsxs)("div",{className:n.a.formControl,children:[Object(l.jsx)("textarea",Object(a.a)(Object(a.a)({},o),{},{placeholder:c,className:t&&s?"".concat(n.a.error," ").concat(n.a.formControlTextarea):n.a.formControlTextarea})),t&&s&&Object(l.jsxs)("span",{className:n.a.errorMessage,children:[" ",s," "]})]})},u=function(e){var o=e.input,r=e.meta,s=r.touched,c=r.error,m=e.type,u=e.label,d="checkbox"===m?n.a.formControlCheckbox:n.a.formControlInput;return Object(l.jsxs)("div",{className:n.a.formControl,children:[Object(l.jsx)("label",{children:u}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},o),{},{type:m,className:i()(d,Object(t.a)({},n.a.error,s&&c))})),s&&c&&Object(l.jsxs)("span",{className:n.a.errorMessage,children:[" ",c," "]})]})}},363:function(e,o,r){e.exports={formControl:"FormControls_formControl__2axsW",formControlTextarea:"FormControls_formControlTextarea__5AIlH",formControlInput:"FormControls_formControlInput__gNBr0",formControlCheckbox:"FormControls_formControlCheckbox__2ILOp",error:"FormControls_error__24y5C",errorMessage:"FormControls_errorMessage__NDl_o"}},392:function(e,o,r){},393:function(e,o,r){e.exports={message:"Message_message__1MOXo",from:"Message_from__215MN",to:"Message_to__3TBUh"}},394:function(e,o,r){e.exports={dialogs:"Dialogs_dialogs__2xRSA",messagesContainer:"Dialogs_messagesContainer__eYApo"}},460:function(e,o,r){"use strict";r.r(o);var t,a=r(0),s=r.n(a),n=r(41),c=r(392),i=r.n(c),l=r(1),m=function(e){var o=e.id,r=e.name;return Object(l.jsx)("li",{className:i.a.item,children:Object(l.jsx)(n.c,{to:"/dialogs/".concat(o),children:r})})},u=r(393),d=r.n(u),j=function(e){var o=e.status,r=e.text,t="".concat(d.a.message," ").concat(d.a.from),a="".concat(d.a.message," ").concat(d.a.to);return Object(l.jsx)("div",{className:"from"===o?t:a,children:r})},b=r(394),f=r.n(b),g=r(176),x=r(177),_=(t=300,function(e){return e?void 0:"Field is required"}),O=r(362),p=Object(x.a)({form:"dialogsAddMessageForm"})((function(e){var o=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:o,children:[Object(l.jsx)(g.a,{name:"newMessage",component:O.b,placeholder:"Enter your message",validate:[_]}),Object(l.jsx)("button",{children:"Send"})]})})),h=r(33),C=function(e){return e.dialogsPage.dialogs},v=function(e){return e.dialogsPage.messages},M=r(92),N=r(135),F=s.a.memo((function(){var e=Object(h.d)(C),o=Object(h.d)(v),r=Object(h.c)(),t=e.map((function(e){return Object(l.jsx)(m,{name:e.name,id:e.id},e.id)})),a=o.map((function(e){return Object(l.jsx)(j,{text:e.message,status:e.status},e.id)}));return Object(l.jsxs)("div",{className:f.a.dialogs,children:[Object(l.jsx)("ul",{className:f.a.list,children:t}),Object(l.jsxs)("div",{className:f.a.messagesContainer,children:[a,Object(l.jsx)(p,{onSubmit:function(e){var o,t;o=e.newMessage,r(N.a.sendMessage(o)),t="dialogsAddMessageForm",r(Object(M.a)(t))}})]})]})}));o.default=F}}]);
//# sourceMappingURL=5.26901ff3.chunk.js.map