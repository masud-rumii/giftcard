(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[50],{1e3:function(e,t,n){"use strict";var a=n(3),i=n(4),c=n(85),l=n(6),s=n.n(l),r=n(1),o=n(52),m=n(23),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},j=function(e){var t,n,c=e.prefixCls,l=e.className,m=e.color,j=void 0===m?"blue":m,d=e.dot,p=e.pending,h=void 0!==p&&p,u=(e.position,e.label),O=e.children,x=b(e,["prefixCls","className","color","dot","pending","position","label","children"]),v=(0,r.useContext(o.b).getPrefixCls)("timeline",c),g=s()((t={},Object(i.a)(t,"".concat(v,"-item"),!0),Object(i.a)(t,"".concat(v,"-item-pending"),h),t),l),f=s()((n={},Object(i.a)(n,"".concat(v,"-item-head"),!0),Object(i.a)(n,"".concat(v,"-item-head-custom"),!!d),Object(i.a)(n,"".concat(v,"-item-head-").concat(j),!0),n)),N=/blue|red|green|gray/.test(j||"")?void 0:j;return r.createElement("li",Object(a.a)({},x,{className:g}),u&&r.createElement("div",{className:"".concat(v,"-item-label")},u),r.createElement("div",{className:"".concat(v,"-item-tail")}),r.createElement("div",{className:f,style:{borderColor:N,color:N}},d),r.createElement("div",{className:"".concat(v,"-item-content")},O))},d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},p=function(e){var t,n=r.useContext(o.b),l=n.getPrefixCls,b=n.direction,p=e.prefixCls,h=e.pending,u=void 0===h?null:h,O=e.pendingDot,x=e.children,v=e.className,g=e.reverse,f=void 0!==g&&g,N=e.mode,T=void 0===N?"":N,I=d(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),y=l("timeline",p),k="boolean"===typeof u?null:u,w=u?r.createElement(j,{pending:!!u,dot:O||r.createElement(c.a,null)},k):null,C=r.Children.toArray(x);C.push(w),f&&C.reverse();var S=function(e,t){return"alternate"===T?"right"===e.props.position?"".concat(y,"-item-right"):"left"===e.props.position?"".concat(y,"-item-left"):"".concat(y,t%2===0?"-item-left":"-item-right"):"left"===T?"".concat(y,"-item-left"):"right"===T||"right"===e.props.position?"".concat(y,"-item-right"):""},R=C.filter((function(e){return!!e})),E=r.Children.count(R),q="".concat(y,"-item-last"),P=r.Children.map(R,(function(e,t){var n=t===E-2?q:"",a=t===E-1?q:"";return Object(m.a)(e,{className:s()([e.props.className,!f&&u?n:a,S(e,t)])})})),A=C.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),D=s()(y,(t={},Object(i.a)(t,"".concat(y,"-pending"),!!u),Object(i.a)(t,"".concat(y,"-reverse"),!!f),Object(i.a)(t,"".concat(y,"-").concat(T),!!T&&!A),Object(i.a)(t,"".concat(y,"-label"),A),Object(i.a)(t,"".concat(y,"-rtl"),"rtl"===b),t),v);return r.createElement("ul",Object(a.a)({},I,{className:D}),P)};p.Item=j;var h=p;t.a=h},1085:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(1),i=n(76),c=n(49),l=n(510),s=n(7),r=n(1081),o=n(1010),m=n(475),b=n(84),j=n(1e3),d=n(45),p=n(2);function h(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],h=Object(a.useState)(!1),u=Object(s.a)(h,2),O=u[0],x=u[1];return Object(p.jsxs)(m.a,{className:"hp-border-color-black-40",children:[Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(c.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(p.jsx)("h4",{children:"Basic"}),Object(p.jsx)("p",{className:"hp-p1-body hp-text-color-dark-30 hp-mb-24",children:"Basic timeline."})]}),Object(p.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(p.jsx)(b.a,{onClick:function(){setTimeout((function(){return x(!O)}),100),l(!n)},type:"text",icon:Object(p.jsx)(d.w,{className:"hp-text-color-black-80"})})}),Object(p.jsx)(c.a,{span:24,children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(j.a.Item,{children:"Create a services site 2015-09-01"}),Object(p.jsx)(j.a.Item,{children:"Solve initial network problems 2015-09-01"}),Object(p.jsx)(j.a.Item,{children:"Technical testing 2015-09-01"}),Object(p.jsx)(j.a.Item,{children:"Network problems being solved 2015-09-01"})]})})]}),n&&Object(p.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport { Timeline } from "antd";\n\nreturn (\n  <Timeline>\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n  </Timeline>\n);\n'})]})}function u(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],h=Object(a.useState)(!1),u=Object(s.a)(h,2),O=u[0],x=u[1];return Object(p.jsxs)(m.a,{className:"hp-border-color-black-40",children:[Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(c.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(p.jsx)("h4",{children:"Alternate"}),Object(p.jsx)("p",{className:"hp-p1-body hp-text-color-dark-30 hp-mb-24",children:"Alternate timeline."})]}),Object(p.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(p.jsx)(b.a,{onClick:function(){setTimeout((function(){return x(!O)}),100),l(!n)},type:"text",icon:Object(p.jsx)(d.w,{className:"hp-text-color-black-80"})})}),Object(p.jsx)(c.a,{span:24,children:Object(p.jsxs)(j.a,{mode:"alternate",children:[Object(p.jsx)(j.a.Item,{children:"Create a services site 2015-09-01"}),Object(p.jsx)(j.a.Item,{color:"green",children:"Solve initial network problems 2015-09-01"}),Object(p.jsx)(j.a.Item,{dot:Object(p.jsx)("i",{className:"ri-time-line ri-lg"}),children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),Object(p.jsx)(j.a.Item,{color:"red",children:"Network problems being solved 2015-09-01"}),Object(p.jsx)(j.a.Item,{children:"Create a services site 2015-09-01"}),Object(p.jsx)(j.a.Item,{dot:Object(p.jsx)("i",{className:"ri-time-line ri-lg"}),children:"Technical testing 2015-09-01"})]})})]}),n&&Object(p.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(O&&"show-code-active"),style:o.a,children:'\nimport {  Timeline } from "antd";\n\nreturn (\n  <Timeline mode="alternate">\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n\n    <Timeline.Item color="green">\n      Solve initial network problems 2015-09-01\n    </Timeline.Item>\n\n    <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n      quae ab illo inventore veritatis et quasi architecto beatae vitae\n      dicta sunt explicabo.\n    </Timeline.Item>\n\n    <Timeline.Item color="red">\n      Network problems being solved 2015-09-01\n    </Timeline.Item>\n\n    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n\n    <Timeline.Item dot={<i className="ri-time-line ri-lg" />}>\n      Technical testing 2015-09-01\n    </Timeline.Item>\n  </Timeline>\n);\n'})]})}var O=n(477);function x(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],h=Object(a.useState)(!1),u=Object(s.a)(h,2),x=u[0],v=u[1];var g=Object(a.useState)("left"),f=Object(s.a)(g,2),N=f[0],T=f[1];return Object(p.jsxs)(m.a,{className:"hp-border-color-black-40",children:[Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(c.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(p.jsx)("h4",{children:"Label"}),Object(p.jsx)("p",{className:"hp-p1-body hp-text-color-dark-30 hp-mb-24",children:"Use label show time alone."})]}),Object(p.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(p.jsx)(b.a,{onClick:function(){setTimeout((function(){return v(!x)}),100),l(!n)},type:"text",icon:Object(p.jsx)(d.w,{className:"hp-text-color-black-80"})})}),Object(p.jsxs)(c.a,{span:24,children:[Object(p.jsxs)(O.a.Group,{onChange:function(e){T(e.target.value)},value:N,className:"hp-mb-24",children:[Object(p.jsx)(O.a,{value:"left",children:"Left"}),Object(p.jsx)(O.a,{value:"right",children:"Right"}),Object(p.jsx)(O.a,{value:"alternate",children:"Alternate"})]}),Object(p.jsxs)(j.a,{mode:N,children:[Object(p.jsx)(j.a.Item,{label:"2015-09-01",children:"Create a services"}),Object(p.jsx)(j.a.Item,{label:"2015-09-01 09:12:11",children:"Solve initial network problems"}),Object(p.jsx)(j.a.Item,{children:"Technical testing"}),Object(p.jsx)(j.a.Item,{label:"2015-09-01 09:12:11",children:"Network problems being solved"})]})]})]}),n&&Object(p.jsx)(r.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:o.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio, Timeline } from "antd";\n\nconst [mode, setMode] = useState("left");\n\nconst onChange = (e) => {\n  setMode(e.target.value);\n};\n\nreturn (\n  <>\n    <Radio.Group onChange={onChange} value={mode} className="hp-mb-24">\n      <Radio value="left">Left</Radio>\n      <Radio value="right">Right</Radio>\n      <Radio value="alternate">Alternate</Radio>\n    </Radio.Group>\n\n    <Timeline mode={mode}>\n      <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>\n      \n      <Timeline.Item label="2015-09-01 09:12:11">\n        Solve initial network problems\n      </Timeline.Item>\n      \n      <Timeline.Item>Technical testing</Timeline.Item>\n      \n      <Timeline.Item label="2015-09-01 09:12:11">\n        Network problems being solved\n      </Timeline.Item>\n    </Timeline>\n  </>\n);\n'})]})}function v(){return Object(p.jsxs)(i.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(p.jsx)(c.a,{span:24,children:Object(p.jsx)(l.a,{title:"Timeline",desc:"Vertical display timeline.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Data Display"},{title:"Timeline"}]})}),Object(p.jsx)(c.a,{span:24,children:Object(p.jsx)(h,{})}),Object(p.jsx)(c.a,{span:24,children:Object(p.jsx)(x,{})}),Object(p.jsx)(c.a,{span:24,children:Object(p.jsx)(u,{})})]})}},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(1);var a=n(29),i=n(49),c=n(76),l=n(512),s=n(2);function r(e){var t=e.title,n=e.breadcrumb,r=e.desc;return Object(s.jsxs)(i.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(s.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(s.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(s.jsx)("defs",{children:Object(s.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(s.jsx)("stop",{stopColor:"#fff"}),Object(s.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(s.jsx)(c.a,{children:Object(s.jsx)(i.a,{sm:12,span:24,children:Object(s.jsxs)(c.a,{children:[t&&Object(s.jsx)(i.a,{span:24,children:Object(s.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:t})}),n&&Object(s.jsx)(i.a,{span:24,children:Object(s.jsxs)(l.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(s.jsx)(l.a.Item,{children:Object(s.jsx)(a.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),n.map((function(e,t){return Object(s.jsx)(l.a.Item,{children:Object(s.jsx)(a.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},t)}))]})}),r&&Object(s.jsx)(i.a,{span:24,children:Object(s.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:r})})]})})})]})}}}]);
//# sourceMappingURL=50.8cde60d5.chunk.js.map