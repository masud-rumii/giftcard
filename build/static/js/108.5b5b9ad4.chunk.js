(this.webpackJsonpsochitel_giftcard=this.webpackJsonpsochitel_giftcard||[]).push([[108],{1105:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var o=n(0),r=n(76),i=n(48),a=n(9);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function f(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function h(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",i=o?o[3]:"",a=o?o[2]:n,s=a.length>=e?a:(h(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(r).concat(s).concat(i)}var b={daysInHours:!1,zeroPadTime:2};function j(t,e){var n=t.days,o=t.hours,r=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},b),e),s=a.daysInHours,c=a.zeroPadTime,l=a.zeroPadDays,u=void 0===l?c:l,p=Math.min(2,c),m=s?y(o+24*n,c):y(o,p);return{days:s?"":y(n,u),hours:m,minutes:y(r,p),seconds:y(i,p)}}var T=function(t){u(n,t);var e=d(n);function n(){var t;return s(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return l(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);T.propTypes={count:a.number,children:a.element,onComplete:a.func};var O=function(t){u(n,t);var e=d(n);function n(t){var r;if(s(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(t){r.props.onComplete&&r.props.onComplete(t)},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return l(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,i=n.precision,a=void 0===i?0:i,s=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=l);var p=s?e:e-r(),m=Math.min(20,Math.max(0,a)),f=Math.round(1e3*parseFloat(((u?p:Math.max(0,p))/1e3).toFixed(m))),d=Math.abs(f)/1e3;return{total:f,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:f<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:j(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return Object(o.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,l=i.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!s)return Object(o.cloneElement)(c,{countdown:u});var p=u.formatted,m=p.days,f=p.hours,d=p.minutes,h=p.seconds;return Object(o.createElement)("span",{className:a},u.total<0?"-":"",m,m?":":"",f,":",d,":",h)}}]),n}(o.Component);O.defaultProps=Object.assign(Object.assign({},b),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),O.propTypes={date:Object(a.oneOfType)([Object(a.instanceOf)(Date),a.string,a.number]),daysInHours:a.bool,zeroPadTime:a.number,zeroPadDays:a.number,controlled:a.bool,intervalDelay:a.number,precision:a.number,autoStart:a.bool,overtime:a.bool,className:a.string,children:a.element,renderer:a.func,now:a.func,onMount:a.func,onStart:a.func,onPause:a.func,onStop:a.func,onTick:a.func,onComplete:a.func};var S=O,g=n(204),D=n(205),w=n(206),P=n(2);function x(){var t=function(){return Object(P.jsx)("span",{children:"You are good to go!"})},e="hp-d-block hp-font-weight-300 hp-text-color-primary-1",n="hp-d-block hp-font-weight-300 hp-text-color-black-100 hp-text-color-dark-30 h4";return Object(P.jsxs)(r.a,{className:"hp-text-center hp-overflow-hidden",children:[Object(P.jsx)(g.a,{}),Object(P.jsx)(D.a,{}),Object(P.jsx)(i.a,{className:"hp-error-content hp-py-32",span:24,children:Object(P.jsx)(r.a,{className:"hp-h-100",align:"middle",justify:"center",children:Object(P.jsxs)(i.a,{children:[Object(P.jsx)("h2",{className:"h1 hp-mb-16",children:"We are launching soon"}),Object(P.jsx)(S,{date:"2030-02-01",renderer:function(o){var i=o.days,a=o.hours,s=o.minutes,c=o.seconds;return o.completed?Object(P.jsx)(t,{}):Object(P.jsxs)(r.a,{align:"middle",justify:"center",children:[Object(P.jsxs)("div",{className:"hp-comingsoon-timer-item",children:[Object(P.jsx)("span",{className:e,children:i}),Object(P.jsx)("span",{className:n,children:"DAYS"})]}),Object(P.jsxs)("div",{className:"hp-comingsoon-timer-item",children:[Object(P.jsx)("span",{className:e,children:a}),Object(P.jsx)("span",{className:n,children:"HOURS"})]}),Object(P.jsxs)("div",{className:"hp-comingsoon-timer-item",children:[Object(P.jsx)("span",{className:e,children:s}),Object(P.jsx)("span",{className:n,children:"MINUTES"})]}),Object(P.jsxs)("div",{className:"hp-comingsoon-timer-item",children:[Object(P.jsx)("span",{className:e,children:c}),Object(P.jsx)("span",{className:n,children:"SECONDS"})]})]})}})]})})}),Object(P.jsx)(w.a,{})]})}}}]);
//# sourceMappingURL=108.5b5b9ad4.chunk.js.map