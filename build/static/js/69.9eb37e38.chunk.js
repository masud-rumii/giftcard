(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[69],{1093:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var c=n(0),o=n(76),a=n(48),l=n(511),i=n(7),s=n(1082),r=n(1011),p=n(474),m=n(84),h=n(92),j=n(49),x=n(2);function b(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],l=e[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),T=d[0],O=d[1];return Object(x.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(o.a,{children:[Object(x.jsxs)(a.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Basic"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"Tooltip will show on mouse enter."})]}),Object(x.jsx)(a.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(m.a,{onClick:function(){setTimeout((function(){return O(!T)}),100),l(!n)},type:"text",icon:Object(x.jsx)(j.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(a.a,{span:24,children:Object(x.jsx)(h.a,{title:"prompt text",children:Object(x.jsx)("span",{className:"hp-text-color-dark-40",children:"This is a tooltip"})})})]}),n&&Object(x.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(T&&"show-code-active"),style:r.a,children:'\nimport { Tooltip } from "antd";\n\nreturn (\n  <Tooltip title="prompt text">\n    <span>This  is a tooltip</span>\n  </Tooltip>\n);\n'})]})}var d=n(20);function T(){var t=Object(x.jsx)("span",{children:"This is tooltip"}),e=Object(c.useState)(!1),n=Object(i.a)(e,2),l=n[0],b=n[1],T=Object(c.useState)(!1),O=Object(i.a)(T,2),f=O[0],u=O[1];var y=Object(d.c)((function(t){return t.customise.direction}));return Object(x.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(o.a,{children:[Object(x.jsxs)(a.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Placement"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"There are 12 placement options available."})]}),Object(x.jsx)(a.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(m.a,{onClick:function(){setTimeout((function(){return u(!f)}),100),b(!l)},type:"text",icon:Object(x.jsx)(j.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(a.a,{span:24,children:Object(x.jsxs)("div",{className:"hp-placement",children:[Object(x.jsxs)("div",{style:"rtl"==y?{marginRight:90,whiteSpace:"nowrap"}:{marginLeft:90,whiteSpace:"nowrap"},children:[Object(x.jsx)(h.a,{placement:"topLeft",title:t,okText:"Yes",cancelText:"No",children:Object(x.jsx)(m.a,{type:"primary",children:"TL"})}),Object(x.jsx)(h.a,{placement:"top",title:t,okText:"Yes",cancelText:"No",className:"hp-ml-8",children:Object(x.jsx)(m.a,{type:"primary",children:"Top"})}),Object(x.jsx)(h.a,{placement:"topRight",title:t,okText:"Yes",cancelText:"No",className:"hp-ml-8",children:Object(x.jsx)(m.a,{type:"primary",children:"TR"})})]}),Object(x.jsxs)("div",{style:"rtl"==y?{width:90,float:"right"}:{width:90,float:"left"},children:[Object(x.jsx)(h.a,{placement:"leftTop",title:t,okText:"Yes",cancelText:"No",children:Object(x.jsx)(m.a,{type:"primary",children:"LT"})}),Object(x.jsx)(h.a,{placement:"left",title:t,okText:"Yes",cancelText:"No",className:"hp-mt-8",children:Object(x.jsx)(m.a,{type:"primary",children:"Left"})}),Object(x.jsx)(h.a,{placement:"leftBottom",title:t,okText:"Yes",cancelText:"No",className:"hp-mt-8",children:Object(x.jsx)(m.a,{type:"primary",children:"LB"})})]}),Object(x.jsxs)("div",{style:"rtl"==y?{width:90,marginRight:358}:{width:90,marginLeft:358},children:[Object(x.jsx)(h.a,{placement:"rightTop",title:t,okText:"Yes",cancelText:"No",children:Object(x.jsx)(m.a,{type:"primary",children:"RT"})}),Object(x.jsx)(h.a,{placement:"right",title:t,okText:"Yes",cancelText:"No",className:"hp-mt-8",children:Object(x.jsx)(m.a,{type:"primary",children:"Right"})}),Object(x.jsx)(h.a,{placement:"rightBottom",title:t,okText:"Yes",cancelText:"No",className:"hp-mt-8",children:Object(x.jsx)(m.a,{type:"primary",children:"RB"})})]}),Object(x.jsxs)("div",{style:"rtl"==y?{marginRight:90,clear:"both",whiteSpace:"nowrap"}:{marginLeft:90,clear:"both",whiteSpace:"nowrap"},children:[Object(x.jsx)(h.a,{placement:"bottomLeft",title:t,okText:"Yes",cancelText:"No",children:Object(x.jsx)(m.a,{type:"primary",children:"BL"})}),Object(x.jsx)(h.a,{placement:"bottom",title:t,okText:"Yes",cancelText:"No",className:"hp-ml-8",children:Object(x.jsx)(m.a,{type:"primary",children:"Bottom"})}),Object(x.jsx)(h.a,{placement:"bottomRight",title:t,okText:"Yes",cancelText:"No",className:"hp-ml-8",children:Object(x.jsx)(m.a,{type:"primary",children:"BR"})})]})]})})]}),l&&Object(x.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(f&&"show-code-active"),style:r.a,children:'\nimport { Tooltip, Button } from "antd";\n\nconst text = <span>This is tooltip</span>;\n\nreturn (\n  <div className="hp-placement">\n    <div style={{ marginLeft: 90, whiteSpace: "nowrap" }}>\n      <Tooltip\n        placement="topLeft"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n      >\n        <Button type="primary">TL</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="top"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-ml-8"\n      >\n        <Button type="primary">Top</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="topRight"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-ml-8"\n      >\n        <Button type="primary">TR</Button>\n      </Tooltip>\n    </div>\n    \n    <div style={{ width: 90, float: "left" }}>\n      <Tooltip\n        placement="leftTop"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n      >\n        <Button type="primary">LT</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="left"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-mt-8"\n      >\n        <Button type="primary">Left</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="leftBottom"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-mt-8"\n      >\n        <Button type="primary">LB</Button>\n      </Tooltip>\n    </div>\n\n    <div style={{ width: 90, marginLeft: 358 }}>\n      <Tooltip\n        placement="rightTop"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n      >\n        <Button type="primary">RT</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="right"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-mt-8"\n      >\n        <Button type="primary">Right</Button>\n      </Tooltip>\n\n      <Tooltip\n        placement="rightBottom"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-mt-8"\n      >\n        <Button type="primary">RB</Button>\n      </Tooltip>\n    </div>\n\n    <div\n      style={{ marginLeft: 90, clear: "both", whiteSpace: "nowrap" }}\n    >\n      <Tooltip\n        placement="bottomLeft"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n      >\n        <Button type="primary">BL</Button>\n      </Tooltip>\n      \n      <Tooltip\n        placement="bottom"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-ml-8"\n      >\n        <Button type="primary">Bottom</Button>\n      </Tooltip>\n      \n      <Tooltip\n        placement="bottomRight"\n        title={text}\n        onConfirm={confirm}\n        okText="Yes"\n        cancelText="No"\n        className="hp-ml-8"\n      >\n        <Button type="primary">BR</Button>\n      </Tooltip>\n    </div>\n  </div>\n);\n'})]})}function O(){return Object(x.jsxs)(o.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(x.jsx)(a.a,{span:24,children:Object(x.jsx)(l.a,{title:"Tooltip",desc:"A simple text popup tip.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Data Display"},{title:"Tooltip"}]})}),Object(x.jsx)(a.a,{span:24,children:Object(x.jsx)(b,{})}),Object(x.jsx)(a.a,{span:24,children:Object(x.jsx)(T,{})})]})}},511:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(0);var c=n(28),o=n(48),a=n(76),l=n(513),i=n(2);function s(t){var e=t.title,n=t.breadcrumb,s=t.desc;return Object(i.jsxs)(o.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(i.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(i.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#fff"}),Object(i.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(i.jsx)(a.a,{children:Object(i.jsx)(o.a,{sm:12,span:24,children:Object(i.jsxs)(a.a,{children:[e&&Object(i.jsx)(o.a,{span:24,children:Object(i.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:e})}),n&&Object(i.jsx)(o.a,{span:24,children:Object(i.jsxs)(l.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(c.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),n.map((function(t,e){return Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(c.b,{to:t.link?t.link:"#",className:"hp-text-color-black-0".concat(t.link?" hp-hover-text-color-primary-2":""),children:t.title})},e)}))]})}),s&&Object(i.jsx)(o.a,{span:24,children:Object(i.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:s})})]})})})]})}}}]);
//# sourceMappingURL=69.9eb37e38.chunk.js.map