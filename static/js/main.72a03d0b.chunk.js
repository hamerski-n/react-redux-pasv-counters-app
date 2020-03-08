(this["webpackJsonpreact-redux-pasv-counters-app"]=this["webpackJsonpreact-redux-pasv-counters-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),a=n.n(o);n(32),n(33),n(34),n(35),n(36);var u=function(e){return console.log("props in Items",e),c.a.createElement("div",{className:"card m-1"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4"},e.counter.counterName," "),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("button",{className:"btn btn-info mr-1",onClick:function(){return e.decrement(e.counter.counterId)}},"-"),e.counter.counterValue,c.a.createElement("button",{className:"btn btn-danger ml-1",onClick:function(){return e.increment(e.counter.counterId)}},"+")),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("button",{className:"btn btn-warning mr-1",onClick:function(){return e.reset(e.counter.counterId)}},"Reset"),c.a.createElement("button",{className:"btn btn-secondary mr-1"},"Edit"),c.a.createElement("button",{className:"btn btn-danger mr-1",onClick:function(){return e.removeConfirm(e.counter)}},"Delete")))))};var l=n(11);var i={counterInc:function(e){return function(t){t({type:"COUNTER_INC_ONE",payload:e})}},counterDec:function(e){return function(t){t({type:"COUNTER_DEC_ONE",payload:e})}},counterRes:function(e){return function(t){t({type:"COUNTER_RESET",payload:e})}},counterDeleteConfirm:function(e){return function(t){t({type:"COUNTER_DELETE_CONFIRM",payload:e})}}},s=Object(l.b)((function(e){return{countersList:e.countersList,deleteConfirm:e.deleteConfirm}}),i)((function(e){return console.log("List countersList",e.countersList),c.a.createElement(c.a.Fragment,null,e.countersList.map((function(t){return c.a.createElement(u,{key:t.counterId,counter:t,increment:e.counterInc,decrement:e.counterDec,reset:e.counterRes,removeConfirm:e.counterDeleteConfirm})})))})),m=n(26),E=n(55),d=n(51),f=n(52),C=n(53),p=n(54),N=n(22);var b={counterDelete:function(e){return function(t){t({type:"COUNTER_DELETE",payload:e})}},counterDeleteCancel:function(e){return function(t){t({type:"COUNTER_DELETE_CANCEL",payload:e})}}},O=Object(l.b)((function(e){return{countersList:e.countersList,confirmCounter:e.confirmCounter}}),b)((function(e){var t=Object(r.useState)(!0),n=Object(m.a)(t,2),o=n[0],a=n[1];return c.a.createElement("div",null,c.a.createElement(E.a,{isOpen:Boolean(e.confirmCounter.name),toggle:e.counterDeleteCancel},c.a.createElement(d.a,null,"Delete confirmation"),c.a.createElement(f.a,null,"Enter counter name ",c.a.createElement("strong",null,e.confirmCounter.name)," to delete it",c.a.createElement(N.a,{onChange:function(t){var n=t.target.value;a(n.trim().toLowerCase()!==e.confirmCounter.name.trim().toLowerCase())}})),c.a.createElement(C.a,null,c.a.createElement(p.a,{color:"danger",disabled:o,onClick:function(){e.counterDelete(e.confirmCounter.id),a(!0)}},"Delete")," ",c.a.createElement(p.a,{color:"secondary",onClick:function(){e.counterDeleteCancel(),a(!0)}},"Cancel"))))}));var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(10),L=n(23),D=n(24),T=n(9),_=n(25),g={countersList:[{counterId:97,counterName:"1st counter",counterValue:1},{counterId:98,counterName:"2d counter",counterValue:2},{counterId:99,counterName:"3d counter",counterValue:3}],confirmCounter:{id:0,name:""}},R=function(e,t,n){var r=Object(_.a)(e.countersList.map((function(e){return e.counterId===t?"reset"===n?Object(T.a)({},e,{counterValue:0}):Object(T.a)({},e,{counterValue:e.counterValue+n}):Object(T.a)({},e)})));return Object(T.a)({},e,{countersList:r})},I=function(e,t){var n=e.countersList.filter((function(e){return e.counterId!==t}));return Object(T.a)({},e,{countersList:n,confirmCounter:{id:0,name:""}})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTER_INC_ONE":return R(e,t.payload,1);case"COUNTER_DEC_ONE":return R(e,t.payload,-1);case"COUNTER_RESET":return R(e,t.payload,"reset");case"COUNTER_DELETE_CONFIRM":return Object(T.a)({},e,{confirmCounter:{id:t.payload.counterId,name:t.payload.counterName}});case"COUNTER_DELETE":return I(e,t.payload);case"COUNTER_DELETE_CANCEL":return Object(T.a)({},e,{confirmCounter:{id:0,name:""}});default:return e}},j=Object(y.createStore)(h,Object(D.composeWithDevTools)(Object(y.applyMiddleware)(L.a)));a.a.render(c.a.createElement(l.a,{store:j},c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.72a03d0b.chunk.js.map