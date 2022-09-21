(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[85],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(1),c=n(76),s=n(49),l=n(510),i=n(7),r=n(1081),o=n(1010),j=n(475),h=n(84),b=n(272),p=n(45),d=n(2);function x(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Basic Usage"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"The simplest use."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(b.a,{defaultCurrent:1,total:50})})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nreturn (\n  <Pagination defaultCurrent={1} total={50} />\n);\n'})]})}function u(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"More"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"More pages."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(b.a,{defaultCurrent:6,total:500})})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nreturn (\n  <Pagination defaultCurrent={6} total={500} />\n);\n'})]})}function O(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];function g(e,t){console.log(e,t)}return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Changer"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"Change pageSize."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsxs)(s.a,{span:24,children:[Object(d.jsx)(b.a,{showSizeChanger:!0,onShowSizeChange:g,defaultCurrent:3,total:500}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{showSizeChanger:!0,onShowSizeChange:g,defaultCurrent:3,total:500,disabled:!0})]})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nfunction onShowSizeChange(current, pageSize) {\n  console.log(current, pageSize);\n}\n\nreturn (\n  <>\n    <Pagination\n      showSizeChanger\n      onShowSizeChange={onShowSizeChange}\n      defaultCurrent={3}\n      total={500}\n    />\n\n    <br />\n\n    <Pagination\n      showSizeChanger\n      onShowSizeChange={onShowSizeChange}\n      defaultCurrent={3}\n      total={500}\n      disabled\n    />\n  </>\n);\n'})]})}function m(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];function g(e){console.log("Page: ",e)}return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Jumper"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"Jump to a page directly."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsxs)(s.a,{span:24,children:[Object(d.jsx)(b.a,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:g}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{showQuickJumper:!0,defaultCurrent:2,total:500,onChange:g,disabled:!0})]})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nfunction onChange(pageNumber) {\n  console.log("Page: ", pageNumber);\n}\n\nreturn (\n  <>\n    <Pagination\n      showQuickJumper\n      defaultCurrent={2}\n      total={500}\n      onChange={onChange}\n    />\n\n    <br />\n\n    <Pagination\n      showQuickJumper\n      defaultCurrent={2}\n      total={500}\n      onChange={onChange}\n      disabled\n    />\n  </>\n);\n'})]})}var g=n(470);function f(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];function f(e){return"Total ".concat(e," items")}return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Mini size"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"Mini size pagination."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsxs)(s.a,{span:24,children:[Object(d.jsx)(b.a,{size:"small",total:50,className:"hp-mb-16"}),Object(d.jsx)(g.a,{}),Object(d.jsx)(b.a,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0,className:"hp-mb-16"}),Object(d.jsx)(g.a,{}),Object(d.jsx)(b.a,{size:"small",total:50,showTotal:f,className:"hp-mb-16"}),Object(d.jsx)(g.a,{}),Object(d.jsx)(b.a,{size:"small",total:50,disabled:!0,showTotal:f,showSizeChanger:!0,showQuickJumper:!0})]})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination, Divider } from "antd";\n\nfunction showTotal(total) {\n  return "Total " + total + " items";\n}\n\nreturn (\n  <>\n    <Pagination size="small" total={50} className="hp-mb-16" />\n\n    <Divider />\n\n    <Pagination\n      size="small"\n      total={50}\n      showSizeChanger\n      showQuickJumper\n      className="hp-mb-16"\n    />\n\n    <Divider />\n\n    <Pagination\n      size="small"\n      total={50}\n      showTotal={showTotal}\n      className="hp-mb-16"\n    />\n\n    <Divider />\n\n    <Pagination\n      size="small"\n      total={50}\n      disabled\n      showTotal={showTotal}\n      showSizeChanger\n      showQuickJumper\n    />\n  </>\n);\n'})]})}function w(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Simple mode"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"Simple mode."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsxs)(s.a,{span:24,children:[Object(d.jsx)(b.a,{simple:!0,defaultCurrent:2,total:50}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{disabled:!0,simple:!0,defaultCurrent:2,total:50})]})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nreturn (\n  <>\n    <Pagination simple defaultCurrent={2} total={50} />\n    \n    <br />\n    \n    <Pagination disabled simple defaultCurrent={2} total={50} />\n  </>\n);\n'})]})}function N(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],x=Object(a.useState)(!1),u=Object(i.a)(x,2),O=u[0],m=u[1];return Object(d.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(s.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(d.jsx)("h4",{children:"Prev and next"}),Object(d.jsx)("p",{className:"hp-p1-body",children:"Use text link for prev and next button."})]}),Object(d.jsx)(s.a,{lg:12,span:4,className:"hp-text-right",children:Object(d.jsx)(h.a,{onClick:function(){setTimeout((function(){return m(!O)}),100),l(!n)},type:"text",icon:Object(d.jsx)(p.w,{className:"hp-text-color-black-80"})})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(b.a,{total:500,itemRender:function(e,t,n){return"prev"===t?Object(d.jsx)("a",{href:"#",children:"Previous"}):"next"===t?Object(d.jsx)("a",{href:"#",children:"Next"}):n}})})]}),n&&Object(d.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Pagination } from "antd";\n\nfunction itemRender(current, type, originalElement) {\n  if (type === "prev") {\n    return <a href="#">Previous</a>;\n  }\n  if (type === "next") {\n    return <a href="#">Next</a>;\n  }\n  return originalElement;\n}\n\nreturn (\n  <Pagination total={500} itemRender={itemRender} />\n);\n'})]})}function C(){return Object(d.jsxs)(c.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(l.a,{title:"Pagination",desc:"A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Navigation"},{title:"Pagination"}]})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(x,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(u,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(O,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(m,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(f,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(w,{})}),Object(d.jsx)(s.a,{span:24,children:Object(d.jsx)(N,{})})]})}},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(1);var a=n(29),c=n(49),s=n(76),l=n(512),i=n(2);function r(e){var t=e.title,n=e.breadcrumb,r=e.desc;return Object(i.jsxs)(c.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(i.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(i.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#fff"}),Object(i.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(i.jsx)(s.a,{children:Object(i.jsx)(c.a,{sm:12,span:24,children:Object(i.jsxs)(s.a,{children:[t&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:t})}),n&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsxs)(l.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(a.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),n.map((function(e,t){return Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(a.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},t)}))]})}),r&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:r})})]})})})]})}}}]);
//# sourceMappingURL=85.6c23e7d0.chunk.js.map