(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[47],{1063:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return N}));var a=c(1),s=c(76),n=c(49),r=c(510),i=c(7),o=c(1081),l=c(1010),j=c(475),d=c(84),b=c(504),h=c(45),x=c(2);function u(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],u=Object(a.useState)(!1),O=Object(i.a)(u,2),p=O[0],m=O[1];return Object(x.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsxs)(n.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Basic"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."})]}),Object(x.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(d.a,{onClick:function(){setTimeout((function(){return m(!p)}),100),r(!c)},type:"text",icon:Object(x.jsx)(h.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsxs)(s.a,{gutter:[16,16],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:5})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:0,showZero:!0})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:Object(x.jsx)(h.Db,{className:"remix-icon hp-text-color-primary-1",size:24})})})]})})]}),c&&Object(x.jsx)(o.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(p&&"show-code-active"),style:l.a,children:'\nimport { Badge } from "antd";\nimport { RiTimeLine } from "react-icons/ri";\n\nreturn (\n  <>\n    <Badge count={5} />\n    <Badge count={0} showZero />\n    <Badge\n      count={\n        <RiTimeLine\n          className="remix-icon hp-text-color-primary-1"\n          size={24}\n        />\n      }\n    />\n  </>\n);\n'})]})}var O=c(21);function p(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],u=Object(a.useState)(!1),p=Object(i.a)(u,2),m=p[0],g=p[1];var f=Object(O.c)((function(e){return e.customise.direction}));return Object(x.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsxs)(n.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Red badge"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot."})]}),Object(x.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(d.a,{onClick:function(){setTimeout((function(){return g(!m)}),100),r(!c)},type:"text",icon:Object(x.jsx)(h.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsxs)(s.a,{gutter:[16,16],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{dot:!0,offset:[-2,5],children:Object(x.jsx)(h.mb,{className:"remix-icon hp-text-color-dark-0",size:24})})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:0,dot:!0,offset:[-2,5],children:Object(x.jsx)(h.mb,{className:"remix-icon hp-text-color-dark-0",size:24})})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{dot:!0,offset:"rtl"==f?[-4,3]:[4,3],children:Object(x.jsx)("a",{href:"#",children:"Link something"})})})]})})]}),c&&Object(x.jsx)(o.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(m&&"show-code-active"),style:l.a,children:'\nimport { Badge } from "antd";\nimport { RiNotificationLine } from "react-icons/ri";\n\nreturn (\n  <>\n    <Badge dot offset={[-2, 5]}>\n      <RiNotificationLine className="remix-icon" size={24} />\n    </Badge>\n\n    <Badge count={0} dot offset={[-2, 5]}>\n      <RiNotificationLine className="remix-icon" size={24} />\n    </Badge>\n\n    <Badge dot offset={[4, 3]}>\n      <a href="#">Link something</a>\n    </Badge>\n  </>\n);\n'})]})}function m(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],u=Object(a.useState)(!1),O=Object(i.a)(u,2),p=O[0],m=O[1];return Object(x.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsxs)(n.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Size"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"Set size of numeral Badge."})]}),Object(x.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(d.a,{onClick:function(){setTimeout((function(){return m(!p)}),100),r(!c)},type:"text",icon:Object(x.jsx)(h.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsxs)(s.a,{gutter:[16,16],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{size:"default",count:5})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{size:"small",count:5})})]})})]}),c&&Object(x.jsx)(o.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(p&&"show-code-active"),style:l.a,children:'\nimport { Badge } from "antd";\n\nreturn (\n  <>\n    <Badge size="default" count={5}></Badge>\n    <Badge size="small" count={5}></Badge>\n  </>\n);\n'})]})}function g(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],u=Object(a.useState)(!1),O=Object(i.a)(u,2),p=O[0],m=O[1];return Object(x.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsxs)(n.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Status"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"Standalone badge with status."})]}),Object(x.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(d.a,{onClick:function(){setTimeout((function(){return m(!p)}),100),r(!c)},type:"text",icon:Object(x.jsx)(h.w,{className:"hp-text-color-black-80"})})}),Object(x.jsxs)(n.a,{span:24,children:[Object(x.jsxs)(s.a,{gutter:[8,8],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"success"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"error"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"default"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"processing"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"warning"})})]}),Object(x.jsx)("br",{}),Object(x.jsxs)(s.a,{gutter:[16,8],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"success",text:"Success"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"error",text:"Error"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"default",text:"Default"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"processing",text:"Processing"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{status:"warning",text:"Warning"})})]})]})]}),c&&Object(x.jsx)(o.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(p&&"show-code-active"),style:l.a,children:'\nimport { Badge } from "antd";\n\nreturn (\n  <>\n    <Badge status="success" />\n    <Badge status="error" />\n    <Badge status="default" />\n    <Badge status="processing" />\n    <Badge status="warning" />\n\n    <br />\n\n    <Badge status="success" text="Success" />\n    <Badge status="error" text="Error" />\n    <Badge status="default" text="Default" />\n    <Badge status="processing" text="Processing" />\n    <Badge status="warning" text="Warning" />\n  </>\n);\n'})]})}var f=c(524);function w(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],u=Object(a.useState)(!1),p=Object(i.a)(u,2),m=p[0],g=p[1],w=Object(a.useState)(!1),N=Object(i.a)(w,2),k=N[0],v=N[1];var y=Object(O.c)((function(e){return e.customise}));return Object(x.jsxs)(j.a,{className:"hp-border-color-black-40",children:[Object(x.jsxs)(s.a,{children:[Object(x.jsxs)(n.a,{className:"hp-mb-16",lg:12,span:20,children:[Object(x.jsx)("h4",{children:"Standalone"}),Object(x.jsx)("p",{className:"hp-p1-body",children:"Used in standalone when children is empty."})]}),Object(x.jsx)(n.a,{lg:12,span:4,className:"hp-text-right",children:Object(x.jsx)(d.a,{onClick:function(){setTimeout((function(){return v(!k)}),100),g(!m)},type:"text",icon:Object(x.jsx)(h.w,{className:"hp-text-color-black-80"})})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsxs)(s.a,{gutter:[16,16],children:[Object(x.jsx)(n.a,{children:Object(x.jsx)(f.a,{checked:c,onChange:function(){r(!c)}})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:c?25:0})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:c?Object(x.jsx)(h.Db,{className:"remix-icon hp-text-color-danger-1",size:24}):0})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{count:c?4:0,className:"site-badge-count-4"})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(b.a,{className:"site-badge-count-109",count:c?109:0,style:"dark"==y.theme?{backgroundColor:"#474747"}:{backgroundColor:"#B2BEC3"}})})]})})]}),m&&Object(x.jsx)(o.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(k&&"show-code-active"),style:l.a,children:'\nimport React, {useState} from "react";\n\nimport { Badge, Switch } from "antd";\nimport { RiTimeLine } from "react-icons/ri";\n\nconst [show, setShow] = useState(true);\n\nreturn (\n  <>\n    <Switch\n      checked={show}\n      onChange={() => {\n        setShow(!show);\n      }}\n    />\n\n    <Badge count={show ? 25 : 0} />\n\n    <Badge\n      count={\n        show ? (\n          <RiTimeLine\n            className="remix-icon hp-text-color-danger-1"\n            size={24}\n          />\n        ) : (\n          0\n        )\n      }\n    />\n\n    <Badge count={show ? 4 : 0} className="site-badge-count-4" />\n\n    <Badge\n      className="site-badge-count-109"\n      count={show ? 109 : 0}\n      style={{ backgroundColor: "#B2BEC3" }}\n    />\n  </>\n);\n'})]})}function N(){return Object(x.jsxs)(s.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(r.a,{title:"Badge",desc:"Small numerical value or status descriptor for UI elements.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Data Display"},{title:"Badge"}]})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(u,{})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(m,{})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(w,{})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(p,{})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(g,{})})]})}},510:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c(1);var a=c(29),s=c(49),n=c(76),r=c(512),i=c(2);function o(e){var t=e.title,c=e.breadcrumb,o=e.desc;return Object(i.jsxs)(s.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(i.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(i.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#fff"}),Object(i.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(i.jsx)(n.a,{children:Object(i.jsx)(s.a,{sm:12,span:24,children:Object(i.jsxs)(n.a,{children:[t&&Object(i.jsx)(s.a,{span:24,children:Object(i.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:t})}),c&&Object(i.jsx)(s.a,{span:24,children:Object(i.jsxs)(r.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(i.jsx)(r.a.Item,{children:Object(i.jsx)(a.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),c.map((function(e,t){return Object(i.jsx)(r.a.Item,{children:Object(i.jsx)(a.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},t)}))]})}),o&&Object(i.jsx)(s.a,{span:24,children:Object(i.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:o})})]})})})]})}},524:function(e,t,c){"use strict";var a=c(3),s=c(4),n=c(85),r=c(6),i=c.n(r),o=c(7),l=c(13),j=c(1),d=c(35),b=c(12),h=j.forwardRef((function(e,t){var c,a=e.prefixCls,n=void 0===a?"rc-switch":a,r=e.className,h=e.checked,x=e.defaultChecked,u=e.disabled,O=e.loadingIcon,p=e.checkedChildren,m=e.unCheckedChildren,g=e.onClick,f=e.onChange,w=e.onKeyDown,N=Object(l.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=Object(d.a)(!1,{value:h,defaultValue:x}),v=Object(o.a)(k,2),y=v[0],B=v[1];function C(e,t){var c=y;return u||(B(c=e),null===f||void 0===f||f(c,t)),c}var S=i()(n,r,(c={},Object(s.a)(c,"".concat(n,"-checked"),y),Object(s.a)(c,"".concat(n,"-disabled"),u),c));return j.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":y,disabled:u,className:S,ref:t,onKeyDown:function(e){e.which===b.a.LEFT?C(!1,e):e.which===b.a.RIGHT&&C(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var t=C(!y,e);null===g||void 0===g||g(t,e)}}),O,j.createElement("span",{className:"".concat(n,"-inner")},y?p:m))}));h.displayName="Switch";var x=h,u=c(52),O=c(55),p=c(41),m=c(147),g=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(c[a[s]]=e[a[s]])}return c},f=j.forwardRef((function(e,t){var c,r=e.prefixCls,o=e.size,l=e.disabled,d=e.loading,b=e.className,h=void 0===b?"":b,f=g(e,["prefixCls","size","disabled","loading","className"]),w=j.useContext(u.b),N=w.getPrefixCls,k=w.direction,v=j.useContext(p.b),y=j.useContext(O.b),B=l||y||d,C=N("switch",r),S=j.createElement("div",{className:"".concat(C,"-handle")},d&&j.createElement(n.a,{className:"".concat(C,"-loading-icon")})),z=i()((c={},Object(s.a)(c,"".concat(C,"-small"),"small"===(o||v)),Object(s.a)(c,"".concat(C,"-loading"),d),Object(s.a)(c,"".concat(C,"-rtl"),"rtl"===k),c),h);return j.createElement(m.a,{insertExtraNode:!0},j.createElement(x,Object(a.a)({},f,{prefixCls:C,className:z,disabled:B,ref:t,loadingIcon:S})))}));f.__ANT_SWITCH=!0;t.a=f}}]);
//# sourceMappingURL=47.6c439739.chunk.js.map