(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[96],{1069:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ie}));var n=a(7),l=a(0),r=a(491),c=a(503),i=a(76),s=a(84),d=a(474),o=a(48),u=a(49),h=a(5),p=a(1004),b=a(687),j=a(991),v=a(993),m=a(2),f=function(e){var t=Object(l.useRef)(null),a=e.store,n=e.dispatch,r=e.blankEvent,c=e.calendarApi,i=e.selectEvent,s=e.updateEvent,d=e.calendarsColor,o=e.setCalendarApi,u=e.showModal;Object(l.useEffect)((function(){null===c&&o(t.current.getApi())}),[c]);var f={events:a.events.length?a.events:[],plugins:[v.a,b.b,j.a],initialView:"dayGridMonth",headerToolbar:{start:"prev,next,title",end:"dayGridMonth,timeGridWeek,timeGridDay"},editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames:function(e){var t=e.event,a=d[t._def.extendedProps.calendar];return["bg-light-".concat(a)]},eventClick:function(e){var t=e.event;n(i(t)),u()},dateClick:function(e){var t=r;t.start=e.date,t.end=e.date,n(i(t))},eventDrop:function(e){var t=e.event;n(s(t))},eventResize:function(e){var t=e.event;n(s(t))},ref:t};return Object(m.jsx)(p.a,Object(h.a)({},f))},O=Object(l.memo)(f),g=a(477),x=a.p+"static/media/sidebar.87505a9b.svg",y=[{label:"Travel",color:"travel"},{label:"Social",color:"social"},{label:"Work",color:"work"},{label:"Important",color:"important"}],D=function(e){var t=e.updateFilter,a=e.updateAllFilters,n=e.showModal,l=e.store,r=e.dispatch;return Object(m.jsxs)(i.a,{className:"hp-h-100 hp-pr-24",children:[Object(m.jsxs)(o.a,{span:24,children:[Object(m.jsx)("h3",{children:"YodaCalendar"}),Object(m.jsx)(s.a,{className:"hp-mt-16",type:"primary",onClick:n,block:!0,icon:Object(m.jsx)(u.o,{className:"remix-icon",size:17}),children:"New Event"}),Object(m.jsx)("h5",{className:"hp-mt-48",children:"Calendars"}),Object(m.jsx)(g.a,{className:"hp-mb-8",id:"view-all",checked:l.selectedCalendars.length===y.length,onChange:function(e){return r(a(e.target.checked))},children:"Select All"}),Object(m.jsx)("div",{className:"hp-calendar-checkbox-list",children:y.length&&y.map((function(e,a){return Object(m.jsx)(g.a,{id:e.label,onChange:function(){return r(t(e.label))},checked:l.selectedCalendars.includes(e.label),defaultChecked:!0,className:"hp-mb-8","data-color":e.color,children:e.label},a)}))})]}),Object(m.jsx)(i.a,{className:"hp-calendar-menu-footer hp-w-100",align:"bottom",justify:"center",children:Object(m.jsx)("img",{src:x,alt:"illustration"})})]})},k=a(13),w=a(548),E=a(1002),C=(a(994),a(995)),F=a.n(C),M=a(1005),N=a(478),T=a(505),S=a(999),P=a(500),I=["data"],A=function(e){return 0===Object.keys(e).length},Y=N.a.TextArea,V=function(e){var t=e.store,a=e.dispatch,r=e.addEvent,c=e.selectEvent,d=e.updateEvent,p=e.removeEvent,b=e.calendarApi,j=e.refetchEvents,v=e.handleCancel,f=e.isModalVisible,O=e.setIsModalVisible,g=(e.showModal,t.selectedEvent),x=Object(M.a)(),y=(x.errors,x.handleSubmit),D=Object(l.useState)(""),C=Object(n.a)(D,2),V=C[0],_=C[1],W=Object(l.useState)(""),R=Object(n.a)(W,2),L=R[0],z=R[1],U=Object(l.useState)(!1),G=Object(n.a)(U,2),H=G[0],J=(G[1],Object(l.useState)(new Date)),B=Object(n.a)(J,2),q=B[0],K=B[1],X=Object(l.useState)(new Date),Q=Object(n.a)(X,2),Z=Q[0],$=Q[1],ee=Object(l.useState)([{value:"Travel",label:"Travel"}]),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],le=function(){var e={title:L,start:Z,end:q,allDay:H,display:"block",extendedProps:{calendar:ae[0].label,desc:V.length?V:void 0}};a(r(e)),j(),v()},re=function(){a(c({})),z(""),_(""),ne([{value:"Travel",label:"Travel"}]),$(new Date),K(new Date),O(!1)},ce=function(){var e={id:g.id,title:L,allDay:H,start:Z,end:q,extendedProps:{description:V,calendar:ae[0].label}};a(d(e)),function(e,t,a){for(var n=b.getEventById(e.id),l=0;l<t.length;l++){var r=t[l];n.setProp(r,e[r])}n.setDates(e.start,e.end,{allDay:e.allDay});for(var c=0;c<a.length;c++){var i=a[c];n.setExtendedProp(i,e.extendedProps[i])}}(e,["id","title"],["calendar","description"]),O(!1)},ie=function(){var e;a(p(g.id)),e=g.id,b.getEventById(e).remove(),O(!1)},se=function(){return A(g)||!A(g)&&!g.title.length?Object(m.jsx)(l.Fragment,{children:Object(m.jsx)(s.a,{onClick:function(){le(),re()},type:"primary",block:!0,children:"Add"})}):Object(m.jsx)(l.Fragment,{children:Object(m.jsx)(s.a,{type:"primary",onClick:function(){O(!0),re(),ce()},block:!0,children:"Update"})})},de=function(){return A(g)||!A(g)&&!g.title.length?Object(m.jsx)(l.Fragment,{children:Object(m.jsx)(s.a,{onClick:function(){re()},type:"primary",block:!0,ghost:!0,children:"Cancel"})}):Object(m.jsx)(l.Fragment,{children:Object(m.jsx)(s.a,{type:"danger",onClick:function(){O(!0),re(),ie()},block:!0,ghost:!0,children:"Delete"})})},oe=Object(m.jsxs)("h5",{className:"modal-title",children:[g&&g.title&&g.title.length?"Update":"Add","Event"]});return Object(m.jsx)(S.a,{visible:f,title:oe,onCancel:function(){re(),v()},className:"hp-modal-p-24",footer:Object(m.jsxs)(i.a,{justify:"center",children:[Object(m.jsx)(o.a,{span:12,className:"hp-pr-4",children:Object(m.jsx)(de,{})}),Object(m.jsx)(o.a,{span:12,className:"hp-pl-4",children:Object(m.jsx)(se,{})})]}),centered:!0,closeIcon:Object(m.jsx)(u.u,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(m.jsxs)(P.a,{layout:"vertical",onSubmit:y((function(){A(g)||!A(g)&&!g.title.length?le():ce()})),children:[Object(m.jsx)(P.a.Item,{label:"Event Title :",children:Object(m.jsx)(N.a,{id:"title",name:"title",style:{width:"100%"},placeholder:"Title",value:L,onChange:function(e){return z(e.target.value)}})}),Object(m.jsx)(P.a.Item,{label:"From :",children:Object(m.jsx)(F.a,{required:!0,id:"startDate",name:"startDate",style:{width:"100%"},onChange:function(e){return $(e[0])},value:Z,options:{enableTime:!1===H,dateFormat:"d M Y - H:i K",static:!0}})}),Object(m.jsx)(P.a.Item,{label:"To :",children:Object(m.jsx)(F.a,{required:!0,id:"endDate",name:"endDate",style:{width:"100%"},onChange:function(e){return K(e[0])},value:q,options:{enableTime:!1===H,dateFormat:"d M Y - H:i K",static:!0}})}),Object(m.jsx)(P.a.Item,{label:"Event :",children:Object(m.jsx)(E.a,{id:"label",value:ae,options:[{value:"Travel",label:"Travel",badge:"#C903FF"},{value:"Social",label:"Social",badge:"#00F7BF"},{value:"Work",label:"Work",badge:"#FFC700"},{value:"Important",label:"Important",badge:"#FF0022"}],classNamePrefix:"select",isClearable:!1,onChange:function(e){return ne([e])},components:{Option:function(e){var t=e.data,a=Object(k.a)(e,I);return Object(m.jsxs)(w.l.Option,Object(h.a)(Object(h.a)({},a),{},{children:[Object(m.jsx)(T.a,{color:t.badge}),t.label]}))}}})}),Object(m.jsx)(P.a.Item,{label:"Description :",children:Object(m.jsx)(Y,{style:{width:"100%"},type:"textarea",name:"text",id:"description",rows:4,value:V,onChange:function(e){return _(e.target.value)},placeholder:"Description"})})]})})},_=a(20),W=a(207),R=a.n(W),L=a(653),z=a.n(L),U=R.a.create({baseURL:"https://localhost:3000/",timeout:1e3,headers:{"X-Custom-Header":"foobar"}}),G=new z.a(U),H=new Date,J=new Date((new Date).getTime()+864e5),B=11===H.getMonth()?new Date(H.getFullYear()+1,0,1):new Date(H.getFullYear(),H.getMonth()+1,1),q=11===H.getMonth()?new Date(H.getFullYear()-1,0,1):new Date(H.getFullYear(),H.getMonth()-1,1),K={events:[{id:1,url:"",title:"Design Review",start:H,end:J,allDay:!1,extendedProps:{calendar:"Work"}},{id:2,url:"",title:"Meeting With Client",start:new Date(H.getFullYear(),H.getMonth()+1,-11),end:new Date(H.getFullYear(),H.getMonth()+1,-10),allDay:!0,extendedProps:{calendar:"Work"}},{id:3,url:"",title:"Family Trip",allDay:!0,start:new Date(H.getFullYear(),H.getMonth()+1,-9),end:new Date(H.getFullYear(),H.getMonth()+1,-7),extendedProps:{calendar:"Travel"}},{id:4,url:"",title:"Doctor's Appointment",start:new Date(H.getFullYear(),H.getMonth()+1,-11),end:new Date(H.getFullYear(),H.getMonth()+1,-10),allDay:!0,extendedProps:{calendar:"Important"}},{id:6,url:"",title:"Meditation",start:new Date(H.getFullYear(),H.getMonth()+1,-13),end:new Date(H.getFullYear(),H.getMonth()+1,-12),allDay:!0,extendedProps:{calendar:"Important"}},{id:7,url:"",title:"Dinner",start:new Date(H.getFullYear(),H.getMonth()+1,-13),end:new Date(H.getFullYear(),H.getMonth()+1,-12),allDay:!0,extendedProps:{calendar:"Social"}},{id:8,url:"",title:"Product Review",start:new Date(H.getFullYear(),H.getMonth()+1,-13),end:new Date(H.getFullYear(),H.getMonth()+1,-12),allDay:!0,extendedProps:{calendar:"Work"}},{id:9,url:"",title:"Monthly Meeting",start:B,end:B,allDay:!0,extendedProps:{calendar:"Work"}},{id:10,url:"",title:"Monthly Checkup",start:q,end:q,allDay:!0,extendedProps:{calendar:"Important"}}]};G.onGet("/apps/calendar/events").reply((function(e){var t=e.calendars;return[200,K.events.filter((function(e){return t.includes(e.extendedProps.calendar)}))]})),G.onPost("/apps/calendar/add-event").reply((function(e){var t=JSON.parse(e.data).event,a=K.events.length,n=0;return a&&(n=K.events[a-1].id),t.id=n+1,K.events.push(t),[201,{event:t}]})),G.onPost("/apps/calendar/update-event").reply((function(e){var t=JSON.parse(e.data).event;t.id=Number(t.id);var a=K.events.find((function(e){return e.id===Number(t.id)}));return Object.assign(a,t),[200,{event:a}]})),G.onDelete("/apps/calendar/remove-event").reply((function(e){var t=e.id,a=Number(t),n=K.events.findIndex((function(e){return e.id===a}));return K.events.splice(n,1),[200]}));var X=U,Q=function(e){return function(t){X.get("/apps/calendar/events",{calendars:e}).then((function(e){t({type:"FETCH_EVENTS",events:e.data})}))}},Z=function(e){return function(t,a){X.post("/apps/calendar/add-event",{event:e}).then((function(){t({type:"ADD_EVENT"}),t(Q(a().calendar.selectedCalendars))}))}},$=function(e){return function(t){X.post("/apps/calendar/update-event",{event:e}).then((function(){t({type:"UPDATE_EVENT"})}))}},ee=function(e){return function(t,a){t({type:"UPDATE_FILTERS",filter:e}),t(Q(a().calendar.selectedCalendars))}},te=function(e){return function(t,a){t({type:"UPDATE_ALL_FILTERS",value:e}),t(Q(a().calendar.selectedCalendars))}},ae=function(e){return function(t){X.delete("/apps/calendar/remove-event",{id:e}).then((function(){t({type:"REMOVE_EVENT"})}))}},ne=function(e){return function(t){t({type:"SELECT_EVENT",event:e})}},le={Travel:"travel",Social:"social",Work:"work",Important:"important"},re=r.a.Sider,ce=r.a.Content;function ie(){var e=Object(l.useState)(null),t=Object(n.a)(e,2),a=t[0],h=t[1],p=Object(l.useState)(!1),b=Object(n.a)(p,2),j=b[0],v=b[1],f=Object(l.useState)(!1),g=Object(n.a)(f,2),x=g[0],y=g[1],k=Object(_.b)(),w=Object(_.c)((function(e){return e.calendar})),E=Object(_.c)((function(e){return e.customise})),C=function(){v(!0)},F=function(){v(!1)},M=function(){v(!1)};return Object(l.useEffect)((function(){k(Q(w.selectedCalendars))}),[]),Object(m.jsxs)(r.a,{className:"hp-calendar hp-mb-32 hp-bg-dark-90",children:[Object(m.jsx)(c.a,{title:" ",className:"hp-calendar-mobile-menu",placement:"left",closable:!0,onClose:function(){y(!1)},visible:x,closeIcon:Object(m.jsx)(u.u,{className:"remix-icon hp-text-color-black-80 hp-text-color-dark-30",size:24}),children:Object(m.jsx)(D,{store:w,dispatch:k,updateFilter:ee,updateAllFilters:te,showModal:C,handleOk:F,handleCancel:M,isModalVisible:j})}),Object(m.jsxs)(ce,{children:[Object(m.jsx)(i.a,{className:"hp-calendar-mobile-menu-btn hp-bg-color-black-0 hp-bg-color-dark-100 hp-border-radius hp-py-12 hp-px-sm-8 hp-px-24 hp-mb-16",children:Object(m.jsx)(s.a,{className:"hp-p-0",type:"text",icon:Object(m.jsx)(u.cb,{size:24,className:"remix-icon hp-text-color-black-80 hp-text-color-dark-30"}),onClick:function(){y(!0)}})}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(re,{className:"hp-bg-dark-100 hp-border-right-1 hp-border-color-dark-80 hp-py-24 hp-mr-24",theme:"light"==E.theme?"light":"dark",width:256,children:Object(m.jsx)(D,{store:w,dispatch:k,updateFilter:ee,updateAllFilters:te,showModal:C,handleOk:F,handleCancel:M,isModalVisible:j})}),Object(m.jsx)(o.a,{flex:"1 1",className:"hp-py-24",children:Object(m.jsx)(O,{store:w,dispatch:k,blankEvent:{title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:"",guests:[],location:"",description:""}},calendarApi:a,selectEvent:ne,updateEvent:$,calendarsColor:le,setCalendarApi:h,showModal:C})})]})}),Object(m.jsx)(V,{store:w,dispatch:k,addEvent:Z,selectEvent:ne,updateEvent:$,removeEvent:ae,calendarApi:a,refetchEvents:function(){null!==a&&a.refetchEvents()},handleCancel:M,isModalVisible:j,setIsModalVisible:v,showModal:C})]})]})}}}]);
//# sourceMappingURL=96.a6d07e2b.chunk.js.map