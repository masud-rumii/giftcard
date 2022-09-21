(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[78],{1054:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var s=t(1),a=t(76),c=t(49),o=t(510),i=t(7),l=t(1081),r=t(1010),p=t(475),m=t(84),d=t(998),h=t(45),b=t(2);function u(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),x=j[0],O=j[1],f=Object(s.useState)(!1),y=Object(i.a)(f,2),N=y[0],g=y[1];var k=function(){o(!1)},C=function(){o(!1)};return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Basic Modal"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Basic modal."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return g(!N)}),100),O(!x)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsx)(m.a,{type:"primary",onClick:function(){o(!0)},children:"Open Modal"}),Object(b.jsx)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"Basic Modal"}),width:416,visible:t,onOk:k,onCancel:C,footer:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{type:"text",onClick:C,children:"Cancel"},"back"),Object(b.jsx)(m.a,{type:"primary",onClick:k,children:"Confirm"})]}),closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:Object(b.jsx)("p",{className:"hp-p2-body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse."})})]})]}),x&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(N&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Button, Modal } from "antd";\nimport { RiCloseFill } from "react-icons/ri";\n\nconst [isModalVisible, setIsModalVisible] = useState(false);\n\nconst showModal = () => {\n  setIsModalVisible(true);\n};\n\nconst handleOk = () => {\n  setIsModalVisible(false);\n};\n\nconst handleCancel = () => {\n  setIsModalVisible(false);\n};\n\nreturn (\n  <>\n    <Button type="primary" onClick={showModal}>\n      Open Modal\n    </Button>\n\n    <Modal\n      title={<h5 className="hp-mb-0">Basic Modal</h5>}\n      width={416}\n      visible={isModalVisible}\n      onOk={handleOk}\n      onCancel={handleCancel}\n      footer={\n        <>\n          <Button type="text" key="back" onClick={handleCancel}>\n            Cancel\n          </Button>\n          <Button type="primary" onClick={handleOk}>\n            Confirm\n          </Button>\n        </>\n      }\n      closeIcon={\n        <RiCloseFill\n          className="remix-icon text-color-black-100"\n          size={24}\n        />\n      }\n    >\n      <p className="hp-p2-body">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n        vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex\n        turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.\n      </p>\n    </Modal>\n  </>\n);\n'})]})}function j(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),x=j[0],O=j[1];return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Information modal dialog"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"In the various types of information modal dialog, only one button to close dialog is provided."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return O(!x)}),100),o(!t)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){d.a.info({icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.T,{})}),title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"This is Info message"}),content:Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some contents."})}),onOk:function(){}})},children:"Info"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){d.a.success({icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.r,{})}),title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"This is Success message"}),content:Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some contents."})})})},children:"Success"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){d.a.error({icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.c,{})}),title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"This is Error message"}),content:Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some contents."})})})},children:"Error"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){d.a.warning({icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.c,{})}),title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"This is Warning message"}),content:Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some contents."})})})},children:"Warning"})]})]}),t&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(x&&"show-code-active"),style:r.a,children:'\nimport { Button, Modal } from "antd";\nimport {\n  RiCheckboxCircleLine,\n  RiAlertLine,\n  RiInformationLine,\n} from "react-icons/ri";\n\nfunction info() {\n  Modal.info({\n    icon: (\n      <span className="remix-icon">\n        <RiInformationLine />\n      </span>\n    ),\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">This is Info message</h5>\n    ),\n    content: (\n      <div>\n        <p className="hp-p1-body hp-text-color-black-80">Some contents.</p>\n      </div>\n    ),\n    onOk() {},\n  });\n}\n\nfunction success() {\n  Modal.success({\n    icon: (\n      <span className="remix-icon">\n        <RiCheckboxCircleLine />\n      </span>\n    ),\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">This is Success message</h5>\n    ),\n    content: (\n      <div>\n        <p className="hp-p1-body hp-text-color-black-80">Some contents.</p>\n      </div>\n    ),\n  });\n}\n\nfunction error() {\n  Modal.error({\n    icon: (\n      <span className="remix-icon">\n        <RiAlertLine />\n      </span>\n    ),\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">This is Error message</h5>\n    ),\n    content: (\n      <div>\n        <p className="hp-p1-body hp-text-color-black-80">Some contents.</p>\n      </div>\n    ),\n  });\n}\n\nfunction warning() {\n  Modal.warning({\n    icon: (\n      <span className="remix-icon">\n        <RiAlertLine />\n      </span>\n    ),\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">This is Warning message</h5>\n    ),\n    content: (\n      <div>\n        <p className="hp-p1-body hp-text-color-black-80">Some contents.</p>\n      </div>\n    ),\n  });\n}\n\nreturn (\n  <>\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={info}\n    >\n      Info\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={success}\n    >\n      Success\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={error}\n    >\n      Error\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={warning}\n    >\n      Warning\n    </Button>\n  </>\n);\n'})]})}function x(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),x=j[0],O=j[1],f=Object(s.useState)(!1),y=Object(i.a)(f,2),N=y[0],g=y[1];return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"To customize the width of modal"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Use width to set the width of the modal dialog."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return g(!N)}),100),O(!x)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsx)(m.a,{type:"primary",onClick:function(){return o(!0)},children:"Open Modal of 1000px width"}),Object(b.jsx)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"Modal 1000px width"}),centered:!0,visible:t,onOk:function(){return o(!1)},onCancel:function(){return o(!1)},width:1e3,footer:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{onClick:function(){return o(!1)},type:"text",children:"Cancel"}),Object(b.jsx)(m.a,{onClick:function(){return o(!1)},type:"primary",children:"Confirm"})]}),closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:Object(b.jsx)("p",{className:"hp-p2-body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse."})})]})]}),x&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(N&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Button, Modal } from "antd";\nimport { RiCloseFill } from "react-icons/ri";\n\nconst [visible, setVisible] = useState(false);\n\nreturn (\n  <>\n    <Button type="primary" onClick={() => setVisible(true)}>\n      Open Modal of 1000px width\n    </Button>\n\n    <Modal\n      title={<h5 className="hp-mb-0">Modal 1000px width</h5>}\n      centered\n      visible={visible}\n      onOk={() => setVisible(false)}\n      onCancel={() => setVisible(false)}\n      width={1000}\n      footer={\n        <>\n          <Button onClick={() => setVisible(false)} type="text">\n            Cancel\n          </Button>\n\n          <Button onClick={() => setVisible(false)} type="primary">\n            Confirm\n          </Button>\n        </>\n      }\n      closeIcon={\n        <RiCloseFill\n          className="remix-icon text-color-black-100"\n          size={24}\n        />\n      }\n    >\n      <p className="hp-p2-body">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n        vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex\n        turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.\n      </p>\n    </Modal>\n  </>\n);\n'})]})}function O(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),x=j[0],O=j[1],f=Object(s.useState)(!1),y=Object(i.a)(f,2),N=y[0],g=y[1],k=Object(s.useState)(!1),C=Object(i.a)(k,2),w=C[0],M=C[1];function v(e){o(e)}function B(e){O(e)}return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"To customize the position of modal"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"You can use centered,style.top or other styles to set position of modal dialog."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return M(!w)}),100),g(!N)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsxs)(c.a,{children:[Object(b.jsx)(m.a,{type:"primary",onClick:function(){return v(!0)},children:"Modal dialog at 20px to Top"}),Object(b.jsx)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"20px to Top"}),style:{top:20},visible:t,onOk:function(){return v(!1)},onCancel:function(){return v(!1)},closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:Object(b.jsx)("p",{className:"hp-p2-body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse."})})]}),Object(b.jsxs)(c.a,{className:"hp-mt-16",children:[Object(b.jsx)(m.a,{type:"primary",onClick:function(){return B(!0)},children:"Vertically centered modal dialog"}),Object(b.jsx)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"Vertically centered modal dialog"}),centered:!0,visible:x,onOk:function(){return B(!1)},onCancel:function(){return B(!1)},closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:Object(b.jsx)("p",{className:"hp-p2-body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum risus velit, ut placerat diam imperdiet nec. Aenean ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse."})})]})]})]}),N&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(w&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Button, Modal } from "antd";\nimport { RiCloseFill } from "react-icons/ri";\n\nconst [modal1Visible, setIsModal1Visible] = useState(false);\nconst [modal2Visible, setIsModal2Visible] = useState(false);\n\nfunction setModal1Visible(modal1Visible) {\n  setIsModal1Visible(modal1Visible);\n}\n\nfunction setModal2Visible(modal2Visible) {\n  setIsModal2Visible(modal2Visible);\n}\n\nreturn (\n  <>\n    <div>\n      <Button type="primary" onClick={() => setModal1Visible(true)}>\n        Modal dialog at 20px to Top\n      </Button>\n\n      <Modal\n        title={<h5 className="hp-mb-0">20px to Top</h5>}\n        style={{ top: 20 }}\n        visible={modal1Visible}\n        onOk={() => setModal1Visible(false)}\n        onCancel={() => setModal1Visible(false)}\n        closeIcon={\n          <RiCloseFill\n            className="remix-icon text-color-black-100"\n            size={24}\n          />\n        }\n      >\n        <p className="hp-p2-body">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          vestibulum risus velit, ut placerat diam imperdiet nec. Aenean\n          ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.\n        </p>\n      </Modal>\n    </div>\n\n    <div className="hp-mt-16">\n      <Button type="primary" onClick={() => setModal2Visible(true)}>\n        Vertically centered modal dialog\n      </Button>\n\n      <Modal\n        title={<h5 className="hp-mb-0">Vertically centered modal dialog</h5>}\n        centered\n        visible={modal2Visible}\n        onOk={() => setModal2Visible(false)}\n        onCancel={() => setModal2Visible(false)}\n        closeIcon={\n          <RiCloseFill\n            className="remix-icon text-color-black-100"\n            size={24}\n          />\n        }\n      >\n        <p className="hp-p2-body">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\n          vestibulum risus velit, ut placerat diam imperdiet nec. Aenean\n          ex turpis, feugiat sed euismod nec, iaculis id dui. Suspendisse.\n        </p>\n      </Modal>\n    </div>\n  </>\n);\n'})]})}var f=d.a.confirm;function y(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],d=Object(s.useState)(!1),u=Object(i.a)(d,2),j=u[0],x=u[1];return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Confirmation modal dialog"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Use confirm() to show a confirmation modal dialog. Let onCancel/onOk function return a promise object to delay closing the dialog."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return x(!j)}),100),o(!t)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){f({title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"Do you Want to delete these items?"}),icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.T,{})}),content:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some descriptions"}),onOk:function(){},onCancel:function(){}})},children:"Confirm"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){f({title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"Do you Want to delete these items?"}),icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.T,{})}),content:Object(b.jsx)("p",{className:"hp-p1-body",children:"When clicked the OK button, this dialog will be closed after 1 second"}),onOk:function(){return new Promise((function(e,n){setTimeout(Math.random()>.5?e:n,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})},children:"With promise"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){f({title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"Are you sure delete this task?"}),icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.T,{})}),content:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some descriptions"}),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){},onCancel:function(){}})},children:"Delete"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){f({title:Object(b.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"Are you sure delete this task?"}),icon:Object(b.jsx)("span",{className:"remix-icon",children:Object(b.jsx)(h.T,{})}),content:Object(b.jsx)("p",{className:"hp-p1-body",children:"Some descriptions"}),okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk:function(){},onCancel:function(){}})},children:"With extra props"})]})]}),t&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(j&&"show-code-active"),style:r.a,children:'\nimport { Button, Modal } from "antd";\nimport { RiInformationLine } from "react-icons/ri";\n\nconst { confirm } = Modal;\n\nfunction showConfirm() {\n  confirm({\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">\n        Do you Want to delete these items?\n      </h5>\n    ),\n    icon: (\n      <span className="remix-icon">\n        <RiInformationLine />\n      </span>\n    ),\n    content: (\n      <p className="hp-p1-body hp-text-color-black-80">Some descriptions</p>\n    ),\n    onOk() {},\n    onCancel() {},\n  });\n}\n\nfunction showPromiseConfirm() {\n  confirm({\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">\n        Do you Want to delete these items?\n      </h5>\n    ),\n    icon: (\n      <span className="remix-icon">\n        <RiInformationLine />\n      </span>\n    ),\n    content: (\n      <p className="hp-p1-body hp-text-color-black-80">\n        When clicked the OK button, this dialog will be closed after 1 second\n      </p>\n    ),\n    onOk() {\n      return new Promise((resolve, reject) => {\n        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);\n      }).catch(() => console.log("Oops errors!"));\n    },\n    onCancel() {},\n  });\n}\n\nfunction showDeleteConfirm() {\n  confirm({\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">\n        Are you sure delete this task?\n      </h5>\n    ),\n    icon: (\n      <span className="remix-icon">\n        <RiInformationLine />\n      </span>\n    ),\n    content: (\n      <p className="hp-p1-body hp-text-color-black-80">Some descriptions</p>\n    ),\n    okText: "Yes",\n    okType: "danger",\n    cancelText: "No",\n    onOk() {},\n    onCancel() {},\n  });\n}\n\nfunction showPropsConfirm() {\n  confirm({\n    title: (\n      <h5 className="hp-mb-0 hp-font-weight-500">\n        Are you sure delete this task?\n      </h5>\n    ),\n    icon: (\n      <span className="remix-icon">\n        <RiInformationLine />\n      </span>\n    ),\n    content: (\n      <p className="hp-p1-body hp-text-color-black-80">Some descriptions</p>\n    ),\n    okText: "Yes",\n    okType: "danger",\n    okButtonProps: {\n      disabled: true,\n    },\n    cancelText: "No",\n    onOk() {},\n    onCancel() {},\n  });\n}\n\nreturn (\n  <>\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showConfirm}\n    >\n      Confirm\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showPromiseConfirm}\n    >\n      With promise\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showDeleteConfirm}\n    >\n      Delete\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showPropsConfirm}\n    >\n      With extra props\n    </Button>\n  </>\n);\n'})]})}var N=t(499),g=t(479),k=t(478),C=t.p+"static/media/pop-up.71be9f23.svg";function w(){var e=Object(s.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(s.useState)(!1),j=Object(i.a)(u,2),x=j[0],O=j[1],f=Object(s.useState)(!1),y=Object(i.a)(f,2),w=y[0],M=y[1],v=Object(s.useState)(!1),B=Object(i.a)(v,2),I=B[0],F=B[1],S=Object(s.useState)(!1),V=Object(i.a)(S,2),P=V[0],T=V[1],R=Object(s.useState)(!1),W=Object(i.a)(R,2),A=W[0],L=W[1];var q=function(){M(!1)},z=function(){O(!1)},D=function(){M(!1)},U=function(){F(!1)};return Object(b.jsxs)(p.a,{className:"hp-border-color-black-40",children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{className:"hp-mb-16",span:24,children:Object(b.jsxs)(a.a,{children:[Object(b.jsxs)(c.a,{lg:12,span:20,children:[Object(b.jsx)("h4",{children:"Yoda Modal"}),Object(b.jsx)("p",{className:"hp-p1-body",children:"Special modals."})]}),Object(b.jsx)(c.a,{lg:12,span:4,className:"hp-text-right",children:Object(b.jsx)(m.a,{onClick:function(){setTimeout((function(){return L(!A)}),100),T(!P)},type:"text",icon:Object(b.jsx)(h.w,{className:"hp-text-color-black-80"})})})]})}),Object(b.jsxs)(c.a,{span:24,children:[Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){o(!0)},children:"Pop-up"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){O(!0)},children:"Pop-up Width"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){M(!0)},children:"Form"}),Object(b.jsx)(m.a,{className:"hp-mb-16 hp-mr-16",type:"primary",ghost:!0,onClick:function(){F(!0)},children:"Form Width"}),Object(b.jsx)(d.a,{width:416,visible:t,onCancel:function(){o(!1)},footer:!1,closable:!1,className:"popup-modal",children:Object(b.jsxs)("div",{className:"hp-text-center",children:[Object(b.jsx)("img",{src:C,alt:"Pop-up"}),Object(b.jsx)("h3",{className:"hp-text-color-dark-bg",children:"Pop-up Title"}),Object(b.jsx)("p",{className:"hp-p2-body",children:"Curabitur varius purus sed congue consectetur. Donec a leo malesuada,"}),Object(b.jsx)(m.a,{block:!0,className:"hp-mt-16",type:"primary",icon:Object(b.jsx)(h.X,{className:"remix-icon"}),onClick:function(){o(!1)},children:"Subscribe"})]})}),Object(b.jsx)(d.a,{width:1e3,visible:x,onCancel:z,footer:!1,closable:!1,className:"popup-modal",children:Object(b.jsxs)(c.a,{className:"hp-text-center",children:[Object(b.jsx)("img",{src:C,alt:"Pop-up"}),Object(b.jsx)(a.a,{justify:"center",children:Object(b.jsxs)(c.a,{md:14,children:[Object(b.jsx)("h3",{className:"hp-text-color-dark-bg",children:"Pop-up Title"}),Object(b.jsx)("p",{className:"hp-p2-body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, urna arcu mattis sagittis ut velit ornare scelerisque. Justo eget eleifend sed urna, risus. Augue ornare sit non auctor consectetur. Amet."})]})}),Object(b.jsxs)(a.a,{className:"hp-mt-16",children:[Object(b.jsx)(c.a,{span:12,children:Object(b.jsx)(m.a,{block:!0,type:"primary",ghost:!0,onClick:z,children:"Cancel"})}),Object(b.jsx)(c.a,{span:12,className:"hp-pl-8",children:Object(b.jsx)(m.a,{block:!0,type:"primary",icon:Object(b.jsx)(h.X,{className:"remix-icon"}),onClick:function(){O(!1)},children:"Subscribe"})})]})]})}),Object(b.jsxs)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"Basic Modal"}),width:416,visible:w,onCancel:D,footer:Object(b.jsx)(m.a,{block:!0,type:"primary",ghost:!0,onClick:q,children:"Signup"}),closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:[Object(b.jsxs)(N.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},children:[Object(b.jsx)(N.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(b.jsx)(g.a,{})}),Object(b.jsx)(N.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(b.jsx)(g.a.Password,{})}),Object(b.jsx)(N.a.Item,{name:"remember",valuePropName:"checked",children:Object(b.jsx)(k.a,{children:"Remember me"})}),Object(b.jsx)(N.a.Item,{children:Object(b.jsx)(m.a,{block:!0,type:"primary",htmlType:"submit",onClick:q,children:"Button"})})]}),Object(b.jsx)(m.a,{block:!0,type:"text",onClick:D,children:"Cancel"})]}),Object(b.jsx)(d.a,{title:Object(b.jsx)("h5",{className:"hp-mb-0",children:"Basic Modal"}),width:1e3,visible:I,onCancel:U,footer:Object(b.jsxs)(a.a,{gutter:[8,8],justify:"end",children:[Object(b.jsx)(c.a,{children:Object(b.jsx)(m.a,{type:"primary",ghost:!0,children:"Delete"})}),Object(b.jsx)(c.a,{children:Object(b.jsx)(m.a,{type:"test",onClick:U,children:"Cancel"})}),Object(b.jsx)(c.a,{children:Object(b.jsx)(m.a,{type:"primary",htmlType:"submit",onClick:function(){F(!1)},children:"Confirm"})})]}),closeIcon:Object(b.jsx)(h.u,{className:"remix-icon hp-text-color-black-100 hp-text-color-dark-0",size:24}),children:Object(b.jsxs)(N.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{md:12,span:24,children:Object(b.jsx)(N.a.Item,{label:"First Name",name:"firstname",rules:[{required:!0,message:"Please input your firstname!"}],children:Object(b.jsx)(g.a,{})})}),Object(b.jsx)(c.a,{md:12,span:24,children:Object(b.jsx)(N.a.Item,{className:"hp-pl-sm-0 hp-pl-16",label:"Last Name",name:"lastname",rules:[{required:!0,message:"Please input your lastname!"}],children:Object(b.jsx)(g.a,{})})})]}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)(c.a,{md:12,span:24,children:Object(b.jsx)(N.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"At least 6 Character"}],children:Object(b.jsx)(g.a.Password,{})})}),Object(b.jsx)(c.a,{md:12,span:24,children:Object(b.jsx)(N.a.Item,{className:"hp-pl-sm-0 hp-pl-16",label:"Zip Code",name:"zipcode",rules:[{required:!0,message:"1234"}],children:Object(b.jsx)(g.a,{})})})]}),Object(b.jsx)(a.a,{children:Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(N.a.Item,{label:"Address",name:"address",rules:[{required:!0,message:"St. 200 etc."}],children:Object(b.jsx)(g.a.TextArea,{})})})})]})})]})]}),P&&Object(b.jsx)(l.a,{language:"javascript",className:"show-code hp-mt-24 ".concat(A&&"show-code-active"),style:r.a,children:'\nimport React, { useState } from "react";\n\nimport { Row, Col, Form, Input, Checkbox, Button, Modal } from "antd";\nimport { RiCloseFill, RiMailAddLine } from "react-icons/ri";\n\nimport popUpImage from "../../../../assets/images/modal/pop-up.svg";\n\nconst [PopupModalVisible, setPopupModalVisible] = useState(false);\nconst [PopupWidthModalVisible, setPopupWidthModalVisible] = useState(false);\nconst [FormModalVisible, setFormModalVisible] = useState(false);\nconst [FormWidthModalVisible, setFormWidthModalVisible] = useState(false);\n\nconst showPopupModal = () => {\n  setPopupModalVisible(true);\n};\n\nconst showPopupWidthModal = () => {\n  setPopupWidthModalVisible(true);\n};\n\nconst showFormModal = () => {\n  setFormModalVisible(true);\n};\n\nconst showFormWidthModal = () => {\n  setFormWidthModalVisible(true);\n};\n\n//--\n\nconst handlePopupOk = () => {\n  setPopupModalVisible(false);\n};\n\nconst handlePopupWidthOk = () => {\n  setPopupWidthModalVisible(false);\n};\n\nconst handleFormOk = () => {\n  setFormModalVisible(false);\n};\n\nconst handleFormWidthOk = () => {\n  setFormWidthModalVisible(false);\n};\n\n//--\n\nconst handlePopupCancel = () => {\n  setPopupModalVisible(false);\n};\n\nconst handlePopupWidthCancel = () => {\n  setPopupWidthModalVisible(false);\n};\n\nconst handleFormCancel = () => {\n  setFormModalVisible(false);\n};\n\nconst handleFormWidthCancel = () => {\n  setFormWidthModalVisible(false);\n};\n\nreturn (\n  <>\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showPopupModal}\n    >\n      Pop-up\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showPopupWidthModal}\n    >\n      Pop-up Width\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showFormModal}\n    >\n      Form\n    </Button>\n\n    <Button\n      className="hp-mb-16 hp-mr-16"\n      type="primary"\n      ghost\n      onClick={showFormWidthModal}\n    >\n      Form Width\n    </Button>\n\n    <Modal\n      width={416}\n      visible={PopupModalVisible}\n      onCancel={handlePopupCancel}\n      footer={false}\n      closable={false}\n      className="popup-modal"\n    >\n      <div className="hp-text-center">\n        <img src={popUpImage} alt="Pop-up" />\n        <h3 className="hp-text-color-dark-bg">Pop-up Title</h3>\n        <p className="hp-p2-body">\n          Curabitur varius purus sed congue consectetur. Donec a leo\n          malesuada,\n        </p>\n        <Button\n          block\n          className="hp-mt-16"\n          type="primary"\n          icon={<RiMailAddLine className="remix-icon" />}\n          onClick={handlePopupOk}\n        >\n          Subscribe\n        </Button>\n      </div>\n    </Modal>\n\n    <Modal\n      width={1000}\n      visible={PopupWidthModalVisible}\n      onCancel={handlePopupWidthCancel}\n      footer={false}\n      closable={false}\n      className="popup-modal"\n    >\n      <Col className="hp-text-center">\n        <img src={popUpImage} alt="Pop-up" />\n        <Row justify="center">\n          <Col md={14}>\n            <h3 className="hp-text-color-dark-bg">Pop-up Title</h3>\n            <p className="hp-p2-body">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Nunc, urna arcu mattis sagittis ut velit ornare scelerisque.\n              Justo eget eleifend sed urna, risus. Augue ornare sit non\n              auctor consectetur. Amet.\n            </p>\n          </Col>\n        </Row>\n\n        <Row className="hp-mt-16">\n          <Col span={12}>\n            <Button\n              block\n              type="primary"\n              ghost\n              onClick={handlePopupWidthCancel}\n            >\n              Cancel\n            </Button>\n          </Col>\n\n          <Col span={12} className="hp-pl-8">\n            <Button\n              block\n              type="primary"\n              icon={<RiMailAddLine className="remix-icon" />}\n              onClick={handlePopupWidthOk}\n            >\n              Subscribe\n            </Button>\n          </Col>\n        </Row>\n      </Col>\n    </Modal>\n\n    <Modal\n      title="Basic Modal"\n      width={416}\n      visible={FormModalVisible}\n      onCancel={handleFormCancel}\n      footer={\n        <Button block type="primary" ghost onClick={handleFormOk}>\n          Signup\n        </Button>\n      }\n      closeIcon={\n        <RiCloseFill\n          className="remix-icon text-color-black-100"\n          size={24}\n        />\n      }\n    >\n      <Form\n        layout="vertical"\n        name="basic"\n        initialValues={{ remember: true }}\n      >\n        <Form.Item\n          label="Username"\n          name="username"\n          rules={[\n            { required: true, message: "Please input your username!" },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n\n        <Form.Item\n          label="Password"\n          name="password"\n          rules={[\n            { required: true, message: "Please input your password!" },\n          ]}\n        >\n          <Input.Password />\n        </Form.Item>\n\n        <Form.Item name="remember" valuePropName="checked">\n          <Checkbox>Remember me</Checkbox>\n        </Form.Item>\n\n        <Form.Item>\n          <Button\n            block\n            type="primary"\n            htmlType="submit"\n            onClick={handleFormOk}\n          >\n            Button\n          </Button>\n        </Form.Item>\n      </Form>\n\n      <Button block type="text" onClick={handleFormCancel}>\n        Cancel\n      </Button>\n    </Modal>\n\n    <Modal\n      title="Basic Modal"\n      width={1000}\n      visible={FormWidthModalVisible}\n      onCancel={handleFormWidthCancel}\n      footer={\n        <Row gutter={[8, 8]} justify="end">\n          <Col>\n            <Button type="primary" ghost>\n              Delete\n              </Button>\n          </Col>\n\n          <Col>\n            <Button type="test" onClick={handleFormWidthCancel}>\n              Cancel\n              </Button>\n          </Col>\n\n          <Col>\n            <Button\n              type="primary"\n              htmlType="submit"\n              onClick={handleFormWidthOk}\n            >\n              Confirm\n              </Button>\n          </Col>\n        </Row>\n      }\n      closeIcon={\n        <RiCloseFill\n          className="remix-icon text-color-black-100"\n          size={24}\n        />\n      }\n    >\n      <Form\n        layout="vertical"\n        name="basic"\n        initialValues={{ remember: true }}\n      >\n        <Row>\n          <Col md={12} span={24}>\n            <Form.Item\n              label="First Name"\n              name="firstname"\n              rules={[\n                {\n                  required: true,\n                  message: "Please input your firstname!",\n                },\n              ]}\n            >\n              <Input />\n            </Form.Item>\n          </Col>\n\n          <Col md={12} span={24}>\n            <Form.Item\n              className="hp-pl-sm-0 hp-pl-16"\n              label="Last Name"\n              name="lastname"\n              rules={[\n                {\n                  required: true,\n                  message: "Please input your lastname!",\n                },\n              ]}\n            >\n              <Input />\n            </Form.Item>\n          </Col>\n        </Row>\n\n        <Row>\n          <Col md={12} span={24}>\n            <Form.Item\n              label="Password"\n              name="password"\n              rules={[\n                { required: true, message: "At least 6 Character" },\n              ]}\n            >\n              <Input.Password />\n            </Form.Item>\n          </Col>\n\n          <Col md={12} span={24}>\n            <Form.Item\n              className="hp-pl-sm-0 hp-pl-16"\n              label="Zip Code"\n              name="zipcode"\n              rules={[{ required: true, message: "1234" }]}\n            >\n              <Input />\n            </Form.Item>\n          </Col>\n        </Row>\n\n        <Row>\n          <Col span={24}>\n            <Form.Item\n              label="Address"\n              name="address"\n              rules={[{ required: true, message: "St. 200 etc." }]}\n            >\n              <Input.TextArea />\n            </Form.Item>\n          </Col>\n        </Row>\n      </Form>\n    </Modal>\n  </>\n);\n'})]})}function M(){return Object(b.jsxs)(a.a,{gutter:[32,32],className:"hp-mb-32",children:[Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(o.a,{title:"Modal",desc:"Modal dialogs.",breadcrumb:[{title:"Components",link:"/components/components-page"},{title:"Feedback"},{title:"Modal"}]})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(u,{})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(j,{})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(x,{})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(y,{})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(O,{})}),Object(b.jsx)(c.a,{span:24,children:Object(b.jsx)(w,{})})]})}},510:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(1);var s=t(29),a=t(49),c=t(76),o=t(512),i=t(2);function l(e){var n=e.title,t=e.breadcrumb,l=e.desc;return Object(i.jsxs)(a.a,{span:24,className:"hp-bg-black-bg hp-py-sm-32 hp-py-64 hp-px-sm-24 hp-px-md-48 hp-px-80 hp-overflow-hidden",style:{borderRadius:32},children:[Object(i.jsxs)("svg",{width:358,height:336,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hp-position-absolute-bottom-right hp-rtl-scale-x-n1",children:[Object(i.jsx)("path",{d:"M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446",stroke:"url(#a)",strokeWidth:40,strokeLinejoin:"bevel"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"a",x1:315.467,y1:6.875,x2:397.957,y2:337.724,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#fff"}),Object(i.jsx)("stop",{offset:1,stopColor:"#fff",stopOpacity:0})]})})]}),Object(i.jsx)(c.a,{children:Object(i.jsx)(a.a,{sm:12,span:24,children:Object(i.jsxs)(c.a,{children:[n&&Object(i.jsx)(a.a,{span:24,children:Object(i.jsx)("h1",{className:"hp-mb-0 hp-text-color-black-0",children:n})}),t&&Object(i.jsx)(a.a,{span:24,children:Object(i.jsxs)(o.a,{className:"hp-d-flex hp-flex-wrap hp-mt-24",children:[Object(i.jsx)(o.a.Item,{children:Object(i.jsx)(s.b,{to:"/",className:"hp-text-color-black-0 hp-hover-text-color-primary-2",children:"Home"})}),t.map((function(e,n){return Object(i.jsx)(o.a.Item,{children:Object(i.jsx)(s.b,{to:e.link?e.link:"#",className:"hp-text-color-black-0".concat(e.link?" hp-hover-text-color-primary-2":""),children:e.title})},n)}))]})}),l&&Object(i.jsx)(a.a,{span:24,children:Object(i.jsx)("p",{className:"h5 hp-mb-0 hp-mt-24 hp-text-color-black-0",children:l})})]})})})]})}}}]);
//# sourceMappingURL=78.124e81fd.chunk.js.map