(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[59],{1022:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));r(0);var a=r(76),n=r(48),c=r(511),l=r(2);function s(){return Object(l.jsx)(a.a,{gutter:[32,32],children:Object(l.jsx)(n.a,{span:24,children:Object(l.jsx)(c.a,{title:"Blank Page",breadcrumb:[{title:"Pages"},{title:"Blank Page"}]})})})}},511:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(0);var a=r(28),n=r(48),c=r(76),l=r(513),s=r(2);function o(e){var t=e.title,r=e.breadcrumb,o=e.desc;return Object(s.jsxs)(n.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(s.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(s.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(s.jsx)("defs",{children:Object(s.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(s.jsx)("stop",{stopColor:"#fff"}),Object(s.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(s.jsx)(c.a,{children:Object(s.jsx)(n.a,{sm:12,span:24,children:Object(s.jsxs)(c.a,{children:[t&&Object(s.jsx)(n.a,{span:24,children:Object(s.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:t})}),r&&Object(s.jsx)(n.a,{span:24,children:Object(s.jsxs)(l.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(s.jsx)(l.a.Item,{children:Object(s.jsx)(a.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),r.map((function(e,t){return Object(s.jsx)(l.a.Item,{children:Object(s.jsx)(a.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},t)}))]})}),o&&Object(s.jsx)(n.a,{span:24,children:Object(s.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:o})})]})})})]})}},513:function(e,t,r){"use strict";var a=r(3),n=r(4),c=r(8),l=r(6),s=r.n(l),o=r(43),i=r(0),p=r(52),b=r(128),h=r(23),u=r(200),m=r(201),d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},j=function(e){var t,r,n=e.prefixCls,c=e.separator,l=void 0===c?"/":c,s=e.children,o=e.overlay,b=e.dropdownProps,h=d(e,["prefixCls","separator","children","overlay","dropdownProps"]),j=(0,i.useContext(p.b).getPrefixCls)("breadcrumb",n);return t="href"in h?i.createElement("a",Object(a.a)({className:"".concat(j,"-link")},h),s):i.createElement("span",Object(a.a)({className:"".concat(j,"-link")},h),s),r=t,t=o?i.createElement(m.a,Object(a.a)({overlay:o,placement:"bottom"},b),i.createElement("span",{className:"".concat(j,"-overlay-link")},r,i.createElement(u.a,null))):r,s?i.createElement("li",null,t,l&&i.createElement("span",{className:"".concat(j,"-separator")},l)):null};j.__ANT_BREADCRUMB_ITEM=!0;var f=j,O=function(e){var t=e.children,r=(0,i.useContext(p.b).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(r,"-separator")},t||"/")};O.__ANT_BREADCRUMB_SEPARATOR=!0;var x=O,v=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function y(e,t,r,a){var n=r.indexOf(e)===r.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return n?i.createElement("span",null,c):i.createElement("a",{href:"#/".concat(a.join("/"))},c)}var g=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},k=function(e,t,r){var a=Object(c.a)(e),n=g(t||"",r);return n&&a.push(n),a},E=function(e){var t,r=e.prefixCls,c=e.separator,l=void 0===c?"/":c,u=e.style,m=e.className,d=e.routes,j=e.children,O=e.itemRender,x=void 0===O?y:O,E=e.params,N=void 0===E?{}:E,w=v(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=i.useContext(p.b),C=P.getPrefixCls,R=P.direction,_=C("breadcrumb",r);if(d&&d.length>0){var S=[];t=d.map((function(e){var t,r=g(e.path,N);return r&&S.push(r),e.children&&e.children.length&&(t=i.createElement(b.a,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:x(e,N,d,k(S,e.path,N))}}))})),i.createElement(f,{overlay:t,separator:l,key:r||e.breadcrumbName},x(e,N,d,S))}))}else j&&(t=Object(o.a)(j).map((function(e,t){return e?Object(h.a)(e,{separator:l,key:t}):e})));var A=s()(_,Object(n.a)({},"".concat(_,"-rtl"),"rtl"===R),m);return i.createElement("nav",Object(a.a)({className:A,style:u},w),i.createElement("ol",null,t))};E.Item=f,E.Separator=x;var N=E;t.a=N}}]);
//# sourceMappingURL=59.99e36d7d.chunk.js.map