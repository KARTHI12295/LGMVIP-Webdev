(this["webpackJsonpget-users"]=this["webpackJsonpget-users"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(5),a=n.n(r),i=(n(11),n(3)),j=n.n(i),u=n(6),l=n(4),d=(n(13),n(0));var o=function(){var e=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=Object(s.useState)([]),n=Object(l.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(!1),i=Object(l.a)(a,2),o=i[0],b=i[1];function h(){return(h=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r([]),b(!0),t.next=4,fetch("https://reqres.in/api/users?page=1");case 4:return t.next=6,t.sent.json();case 6:return n=t.sent.data,t.next=9,e(1e3);case 9:r(n),b(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"title",children:"Let's Grow More Internship"}),Object(d.jsx)("button",{onClick:function(){return function(){return h.apply(this,arguments)}()},className:"btn push",children:"Get Users"})]}),Object(d.jsx)("div",{className:"users",children:c.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"avatar",children:Object(d.jsx)("img",{src:e.avatar,alt:e.first_name})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("div",{className:"name",children:e.first_name+" "+e.last_name}),Object(d.jsx)("div",{className:"email",children:e.email})]})]})}))}),o&&Object(d.jsx)("div",{className:"loading",children:Object(d.jsxs)("div",{class:"lds-ripple",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.649647c4.chunk.js.map