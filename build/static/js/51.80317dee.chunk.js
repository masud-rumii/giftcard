(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[51],{1052:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(1),c=t(76),o=t(49),l=t(510),i=t(7),s=t(1081),r=t(1010),d=t(475),u=t(84),j=t(477),b=t(45),h=t(2);function p(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],m=O[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Basic"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"The simplest use."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return m(!x)}),100),l(!t)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:12,children:Object(h.jsx)(j.a,{children:"Radio"})})]}),t&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport { Radio } from "antd";\n\nreturn (\n  <Radio>Radio</Radio>\n);\n'})]})}function O(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],m=O[1];var v=Object(n.useState)(!0),R=Object(i.a)(v,2),g=R[0],B=R[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Disabled"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"Radio unavailable."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return m(!x)}),100),l(!t)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsxs)(o.a,{span:12,children:[Object(h.jsx)(j.a,{defaultChecked:!1,disabled:g,children:"Disabled"}),Object(h.jsx)(j.a,{defaultChecked:!0,disabled:g,children:"Disabled"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{className:"hp-mt-16",type:"primary",onClick:function(){B(!g)},children:"Toggle disabled"})]})]}),t&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio } from "antd";\n\nconst [disabled, setDisabled] = useState(true);\n\nconst toggleDisabled = () => {\n  setDisabled(!disabled);\n};\n    \nreturn (\n  <>\n    <Radio defaultChecked={false} disabled={disabled}>\n      Disabled\n    </Radio>\n\n    <Radio defaultChecked disabled={disabled}>\n      Disabled\n    </Radio>\n\n    <Button className="hp-mt-16" type="primary" onClick={toggleDisabled}>\n      Toggle disabled\n    </Button>\n  </>\n);\n'})]})}function x(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],m=O[1];var v=Object(n.useState)(1),R=Object(i.a)(v,2),g=R[0],B=R[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Radio Group"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"A group of radio components."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return m(!x)}),100),l(!t)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:12,children:Object(h.jsxs)(j.a.Group,{onChange:function(e){console.log("radio checked",e.target.value),B(e.target.value)},value:g,children:[Object(h.jsx)(j.a,{value:1,children:"Radio"}),Object(h.jsx)(j.a,{value:2,children:"Radio"}),Object(h.jsx)(j.a,{value:3,children:"Radio"}),Object(h.jsx)(j.a,{value:4,children:"Radio"})]})})]}),t&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio } from "antd";\n\nconst [value, setValue] = useState(1);\n\nconst onChange = (e) => {\n  console.log("radio checked", e.target.value);\n  setValue(e.target.value);\n};\n\nreturn (\n  <Radio.Group onChange={onChange} value={value}>\n    <Radio value={1}>Radio</Radio>\n    <Radio value={2}>Radio</Radio>\n    <Radio value={3}>Radio</Radio>\n    <Radio value={4}>Radio</Radio>\n  </Radio.Group>\n);\n'})]})}var m=t(523),v=t(479);function R(){var e=Object(n.useState)(1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],R=O[1],g=Object(n.useState)(!1),B=Object(i.a)(g,2),f=B[0],y=B[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Radio Group Vertical"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"A group of radio components."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return y(!f)}),100),R(!x)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:12,children:Object(h.jsx)(j.a.Group,{onChange:function(e){console.log("radio checked",e.target.value),l(e.target.value)},value:t,children:Object(h.jsxs)(m.b,{direction:"vertical",children:[Object(h.jsx)(j.a,{value:1,children:"Radio"}),Object(h.jsx)(j.a,{value:2,children:"Radio"}),Object(h.jsx)(j.a,{value:3,children:"Radio"}),Object(h.jsxs)(j.a,{value:4,children:["More...",4===t?Object(h.jsx)(v.a,{size:"small",style:{width:100,marginLeft:10}}):null]})]})})})]}),x&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(f&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio, Space } from "antd";\n\nconst [value, setValue] = useState(1);\n\nconst onChange = (e) => {\n  console.log("radio checked", e.target.value);\n  setValue(e.target.value);\n};\n\nreturn (\n  <Radio.Group onChange={onChange} value={value}>\n    <Space direction="vertical">\n      <Radio value={1}>Radio</Radio>\n      <Radio value={2}>Radio</Radio>\n      <Radio value={3}>Radio</Radio>\n      <Radio value={4}>\n        More...\n        {value === 4 ? (\n          <Input size="small" style={{ width: 100, marginLeft: 10 }} />\n        ) : null}\n      </Radio>\n    </Space>\n  </Radio.Group>\n);\n'})]})}function g(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],v=O[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Solid Radio Button"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"Solid radio button style."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return v(!x)}),100),l(!t)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsxs)(m.b,{direction:"vertical",children:[Object(h.jsxs)(j.a.Group,{defaultValue:"a",buttonStyle:"solid",children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]}),Object(h.jsxs)(j.a.Group,{defaultValue:"c",buttonStyle:"solid",style:{marginTop:16},children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",disabled:!0,children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]})]})})]}),t&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio, Space } from "antd";\n\nreturn (\n  <Space direction="vertical">\n    <Radio.Group defaultValue="a" buttonStyle="solid">\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n\n    <Radio.Group\n      defaultValue="c"\n      buttonStyle="solid"\n      style={{ marginTop: 16 }}\n    >\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b" disabled>London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n  </Space>\n);\n'})]})}function B(){function e(e){console.log("radio checked:".concat(e.target.value))}var a=Object(n.useState)(!1),t=Object(i.a)(a,2),l=t[0],p=t[1],O=Object(n.useState)(!1),x=Object(i.a)(O,2),v=x[0],R=x[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Radio Style"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"The combination of radio button style."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return R(!v)}),100),p(!l)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsxs)(m.b,{direction:"vertical",children:[Object(h.jsxs)(j.a.Group,{onChange:e,defaultValue:"a",children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]}),Object(h.jsxs)(j.a.Group,{onChange:e,defaultValue:"a",style:{marginTop:16},children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",disabled:!0,children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]}),Object(h.jsxs)(j.a.Group,{disabled:!0,onChange:e,defaultValue:"a",style:{marginTop:16},children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]})]})})]}),l&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(v&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio, Space } from "antd";\n\nfunction onChange(e) {\n  console.log("radio checked:", e.target.value);\n}\n\nreturn (\n  <Space direction="vertical"> \n    <Radio.Group onChange={onChange} defaultValue="a">\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n\n    <Radio.Group\n      onChange={onChange}\n      defaultValue="a"\n      style={{ marginTop: 16 }}\n    >\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b" disabled>London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n\n    <Radio.Group\n      disabled\n      onChange={onChange}\n      defaultValue="a"\n      style={{ marginTop: 16 }}\n    >\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n  </Space>\n);\n'})]})}function f(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),x=O[0],v=O[1];return Object(h.jsxs)(d.a,{className:"hp-border-color-black-40",children:[Object(h.jsxs)(c.a,{children:[Object(h.jsxs)(o.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(h.jsx)("h4",{children:"Size"}),Object(h.jsx)("p",{className:"hp-p1-body",children:"There are three sizes available: large, medium, and small. It can coordinate with input box."})]}),Object(h.jsx)(o.a,{lg:12,span:4,className:"hp-text-right",children:Object(h.jsx)(u.a,{onClick:function(){setTimeout((function(){return v(!x)}),100),l(!t)},type:"text",icon:Object(h.jsx)(b.w,{className:"hp-text-color-black-80"})})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsxs)(m.b,{direction:"vertical",children:[Object(h.jsxs)(j.a.Group,{defaultValue:"a",size:"large",children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]}),Object(h.jsxs)(j.a.Group,{defaultValue:"a",className:"hp-mt-16",children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]}),Object(h.jsxs)(j.a.Group,{defaultValue:"a",size:"small",className:"hp-mt-16",children:[Object(h.jsx)(j.a.Button,{value:"a",children:"Istanbul"}),Object(h.jsx)(j.a.Button,{value:"b",children:"London"}),Object(h.jsx)(j.a.Button,{value:"c",children:"Berlin"}),Object(h.jsx)(j.a.Button,{value:"d",children:"Paris"})]})]})})]}),t&&Object(h.jsx)(s.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Radio, Space } from "antd";\n\nreturn (\n  <Space direction="vertical">\n    <Radio.Group defaultValue="a" size="large">\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n\n    <Radio.Group defaultValue="a" className="hp-mt-16">\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n\n    <Radio.Group defaultValue="a" size="small" className="hp-mt-16">\n      <Radio.Button value="a">Istanbul</Radio.Button>\n      <Radio.Button value="b">London</Radio.Button>\n      <Radio.Button value="c">Berlin</Radio.Button>\n      <Radio.Button value="d">Paris</Radio.Button>\n    </Radio.Group>\n  </Space>\n);\n'})]})}function y(){return Object(h.jsxs)(c.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(l.a,{title:"Radio",desc:"Radio.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Data Entry"},{title:"Radio"}]})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(p,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(R,{})}),Object(h.jsx)(o.a,{span:24,children:Object(h.jsx)(B,{})})]})}},510:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t(1);var n=t(29),c=t(49),o=t(76),l=t(512),i=t(2);function s(e){var a=e.title,t=e.breadcrumb,s=e.desc;return Object(i.jsxs)(c.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(i.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(i.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#fff"}),Object(i.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(i.jsx)(o.a,{children:Object(i.jsx)(c.a,{sm:12,span:24,children:Object(i.jsxs)(o.a,{children:[a&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:a})}),t&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsxs)(l.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(n.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),t.map((function(e,a){return Object(i.jsx)(l.a.Item,{children:Object(i.jsx)(n.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},a)}))]})}),s&&Object(i.jsx)(c.a,{span:24,children:Object(i.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:s})})]})})})]})}},523:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t(3),c=t(4),o=t(7),l=t(6),i=t.n(l),s=t(43),r=t(1),d=t(52),u=t(204);function j(e){var a=e.className,t=e.direction,o=e.index,l=e.marginDirection,i=e.children,s=e.split,d=e.wrap,u=r.useContext(h),j=u.horizontalSize,b=u.verticalSize,p=u.latestIndex,O={};return u.supportFlexGap||("vertical"===t?o<p&&(O={marginBottom:j/(s?2:1)}):O=Object(n.a)(Object(n.a)({},o<p&&Object(c.a)({},l,j/(s?2:1))),d&&{paddingBottom:b})),null===i||void 0===i?null:r.createElement(r.Fragment,null,r.createElement("div",{className:a,style:O},i),o<p&&s&&r.createElement("span",{className:"".concat(a,"-split"),style:O},s))}var b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)a.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t},h=r.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};a.b=function(e){var a,t=r.useContext(d.b),l=t.getPrefixCls,O=t.space,x=t.direction,m=e.size,v=void 0===m?(null===O||void 0===O?void 0:O.size)||"small":m,R=e.align,g=e.className,B=e.children,f=e.direction,y=void 0===f?"horizontal":f,N=e.prefixCls,S=e.split,k=e.style,w=e.wrap,C=void 0!==w&&w,G=b(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),I=Object(u.a)(),z=r.useMemo((function(){return(Array.isArray(v)?v:[v,v]).map((function(e){return function(e){return"string"===typeof e?p[e]:e||0}(e)}))}),[v]),P=Object(o.a)(z,2),V=P[0],L=P[1],T=Object(s.a)(B,{keepEmpty:!0}),D=void 0===R&&"horizontal"===y?"center":R,E=l("space",N),M=i()(E,"".concat(E,"-").concat(y),(a={},Object(c.a)(a,"".concat(E,"-rtl"),"rtl"===x),Object(c.a)(a,"".concat(E,"-align-").concat(D),D),a),g),A="".concat(E,"-item"),F="rtl"===x?"marginLeft":"marginRight",J=0,U=T.map((function(e,a){null!==e&&void 0!==e&&(J=a);var t=e&&e.key||"".concat(A,"-").concat(a);return r.createElement(j,{className:A,key:t,direction:y,index:a,marginDirection:F,split:S,wrap:C},e)})),W=r.useMemo((function(){return{horizontalSize:V,verticalSize:L,latestIndex:J,supportFlexGap:I}}),[V,L,J,I]);if(0===T.length)return null;var _={};return C&&(_.flexWrap="wrap",I||(_.marginBottom=-L)),I&&(_.columnGap=V,_.rowGap=L),r.createElement("div",Object(n.a)({className:M,style:Object(n.a)(Object(n.a)({},_),k)},G),r.createElement(h.Provider,{value:W},U))}}}]);
//# sourceMappingURL=51.80317dee.chunk.js.map