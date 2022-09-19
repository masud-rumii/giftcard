(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[74],{1073:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var c=a(0),s=a(76),n=a(48),r=a(511),l=a(7),i=a(1082),j=a(1011),o=a(474),h=a(84),p=a(501),d=a(49),b=a(2);function x(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],x=Object(c.useState)(!1),m=Object(l.a)(x,2),u=m[0],O=m[1];return Object(b.jsxs)(o.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(s.a,{gutter:[32,32],children:[Object(b.jsx)(n.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(n.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Basic"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Basic slider."})]}),Object(b.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(h.a,{onClick:function(){setTimeout((function(){return O(!u)}),100),r(!a)},type:"text",icon:Object(b.jsx)(d.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(n.a,{xxl:8,xl:12,md:18,span:20,children:[Object(b.jsx)(p.a,{defaultValue:30}),Object(b.jsx)(p.a,{className:"hp-mt-48",range:!0,defaultValue:[10,70]})]})]}),a&&Object(b.jsx)(i.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(u&&"show-code-active"),style:j.a,children:'\nimport { Slider } from "antd";\n\nreturn (\n  <Slider defaultValue={30} />\n\n  <Slider className="hp-mt-48" range defaultValue={[10, 70]} />\n);\n'})]})}var m=a(5);function u(e){var t=Object(c.useState)(0),a=Object(l.a)(t,2),s=a[0],n=a[1],r=((e.max-e.min)/2).toFixed(5),i=s>=r?"":" icon-wrapper-active",j=s>=r?" icon-wrapper-active":"";return Object(b.jsxs)("div",{className:"hp-slider-icon-wrapper",children:[Object(b.jsx)(d.Ab,{className:"hp-text-color-dark-0"+j}),Object(b.jsx)(p.a,Object(m.a)(Object(m.a)({},e),{},{onChange:function(e){n(e)},value:s})),Object(b.jsx)(d.Cb,{className:"hp-text-color-dark-0"+i})]})}function O(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],p=Object(c.useState)(!1),x=Object(l.a)(p,2),m=x[0],O=x[1];return Object(b.jsxs)(o.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(s.a,{children:[Object(b.jsx)(n.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(n.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Slider with icon"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"You can add an icon beside the slider to make it meaningful."})]}),Object(b.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(h.a,{onClick:function(){setTimeout((function(){return O(!m)}),100),r(!a)},type:"text",icon:Object(b.jsx)(d.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsx)(n.a,{xxl:8,xl:12,md:18,span:20,children:Object(b.jsx)(u,{min:0,max:20})})]}),a&&Object(b.jsx)(i.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(m&&"show-code-active"),style:j.a,children:'\nimport React, { useState } from "react";\n\nimport { Slider } from "antd";\nimport { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";\n\nexport default function IconItem(props) {\n  const [value, setValue] = useState(0);\n\n  const handleChange = (value) => {\n    setValue(value);\n  };\n\n  const { max, min } = props;\n  const mid = ((max - min) / 2).toFixed(5);\n  const nextColorCls = value >= mid ? "" : "icon-wrapper-active";\n  const preColorCls = value >= mid ? "icon-wrapper-active" : "";\n\n  return (\n    <div className="hp-slider-icon-wrapper">\n      <RiThumbDownLine className={preColorCls} />\n      <Slider {...props} onChange={handleChange} value={value} />\n      <RiThumbUpLine className={nextColorCls} />\n    </div>\n  );\n}\n\nreturn (\n  <IconItem min={0} max={20} />\n);\n'})]})}function f(){var e=Object(c.useState)({0:"0",30:"8",70:"16",100:"24"}),t=Object(l.a)(e,1)[0],a=Object(c.useState)(!1),r=Object(l.a)(a,2),x=r[0],m=r[1],u=Object(c.useState)(!1),O=Object(l.a)(u,2),f=O[0],g=O[1];return Object(b.jsxs)(o.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(s.a,{gutter:[32,32],children:[Object(b.jsx)(n.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(n.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Graduated "}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Graduated slider."})]}),Object(b.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(h.a,{onClick:function(){setTimeout((function(){return g(!f)}),100),m(!x)},type:"text",icon:Object(b.jsx)(d.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(n.a,{xxl:8,xl:12,md:18,span:20,children:[Object(b.jsx)(p.a,{className:"hp-mx-4",marks:t,defaultValue:50}),Object(b.jsx)(p.a,{marks:t,className:"hp-mt-48 hp-mx-4",range:!0,defaultValue:[10,70]})]})]}),x&&Object(b.jsx)(i.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(f&&"show-code-active"),style:j.a,children:'\nimport React, { useState } from "react";\n\nimport { Slider } from "antd";\n\nconst [marks, setMarks] = useState({\n  0: "0",\n  30: "8",\n  70: "16",\n  100: "24",\n});\n\nreturn (\n  <Slider className="hp-mx-4" marks={marks} defaultValue={50} />\n\n  <Slider\n    marks={marks}\n    className="hp-mt-48 hp-mx-4"\n    range\n    defaultValue={[10, 70]}\n  />\n);\n'})]})}function g(){return Object(b.jsxs)(s.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(b.jsx)(n.a,{span:24,children:Object(b.jsx)(r.a,{title:"Slider",desc:"A Slider component for displaying current value and intervals in range.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Data Entry"},{title:"Slider"}]})}),Object(b.jsx)(n.a,{span:24,children:Object(b.jsx)(x,{})}),Object(b.jsx)(n.a,{span:24,children:Object(b.jsx)(O,{})}),Object(b.jsx)(n.a,{span:24,children:Object(b.jsx)(f,{})})]})}},511:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var c=a(28),s=a(48),n=a(76),r=a(513),l=a(2);function i(e){var t=e.title,a=e.breadcrumb,i=e.desc;return Object(l.jsxs)(s.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(l.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(l.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(l.jsx)("stop",{stopColor:"#fff"}),Object(l.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(l.jsx)(n.a,{children:Object(l.jsx)(s.a,{sm:12,span:24,children:Object(l.jsxs)(n.a,{children:[t&&Object(l.jsx)(s.a,{span:24,children:Object(l.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:t})}),a&&Object(l.jsx)(s.a,{span:24,children:Object(l.jsxs)(r.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(l.jsx)(r.a.Item,{children:Object(l.jsx)(c.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),a.map((function(e,t){return Object(l.jsx)(r.a.Item,{children:Object(l.jsx)(c.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},t)}))]})}),i&&Object(l.jsx)(s.a,{span:24,children:Object(l.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:i})})]})})})]})}}}]);
//# sourceMappingURL=74.2d9e6a18.chunk.js.map