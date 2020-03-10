(this["webpackJsonpreact-redux-pasv-counters-app"]=this["webpackJsonpreact-redux-pasv-counters-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),u=(n(32),n(33),n(34),n(35),n(11));n(36);var i=function(e){var t=Object(r.useState)(e.counter.counterName),n=Object(u.a)(t,2),o=n[0],c=n[1];return a.a.createElement("div",{className:"card m-3"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"row"},a.a.createElement("input",{type:"text",className:"col-sm-4",value:o,disabled:e.counter.isVisibleEditButton,onChange:function(e){return c(e.target.value)}}),a.a.createElement("div",{className:"col-sm-3"},a.a.createElement("button",{className:"btn btn-info mr-1",onClick:function(){return e.decrement(e.counter.counterId)}},"-"),e.counter.counterValue,a.a.createElement("button",{className:"btn btn-info ml-1",onClick:function(){return e.increment(e.counter.counterId)}},"+")),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("button",{className:"btn btn-warning mr-1",onClick:function(){return e.reset(e.counter.counterId)}},"Reset"),e.counter.isVisibleSaveButton?a.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){return e.save(e.counter.counterId,o)}},"Save"):a.a.createElement("button",{className:"btn btn-secondary mr-1",onClick:function(){return e.edit(e.counter.counterId)}},"Edit"),a.a.createElement("button",{className:"btn btn-danger mr-1",onClick:function(){return e.removeConfirm(e.counter)}},"Delete")))))};function l(e,t){return function(n){n({type:"COUNTER_ADD",payload:{counterName:e,counterValue:t}})}}var s=n(8);var m={counterInc:function(e){return function(t){t({type:"COUNTER_INC_ONE",payload:e})}},counterDec:function(e){return function(t){t({type:"COUNTER_DEC_ONE",payload:e})}},counterRes:function(e){return function(t){t({type:"COUNTER_RESET",payload:e})}},counterDeleteConfirm:function(e){return function(t){t({type:"COUNTER_DELETE_CONFIRM",payload:e})}},editCounterName:function(e){return function(t){t({type:"COUNTER_EDIT_NAME",payload:e})}},saveCounterName:function(e,t){return function(n){n({type:"COUNTER_SAVE_NAME",payload:{counterId:e,counterName:t}})}}},d=Object(s.b)((function(e){return{countersList:e.countersList,deleteConfirm:e.deleteConfirm}}),m)((function(e){return a.a.createElement(a.a.Fragment,null,e.countersList.map((function(t){return a.a.createElement(i,{key:t.counterId,counter:t,increment:e.counterInc,decrement:e.counterDec,reset:e.counterRes,removeConfirm:e.counterDeleteConfirm,edit:e.editCounterName,save:e.saveCounterName})})))})),E=n(55),f=n(51),b=n(52),p=n(53),N=n(54),C=n(24);var O={counterDelete:function(e){return function(t){t({type:"COUNTER_DELETE",payload:e})}},counterDeleteCancel:function(e){return function(t){t({type:"COUNTER_DELETE_CANCEL",payload:e})}}},v=Object(s.b)((function(e){return{countersList:e.countersList,confirmCounter:e.confirmCounter}}),O)((function(e){var t=Object(r.useState)(!0),n=Object(u.a)(t,2),o=n[0],c=n[1];return a.a.createElement("div",null,a.a.createElement(E.a,{isOpen:Boolean(e.confirmCounter.name),toggle:e.counterDeleteCancel},a.a.createElement(f.a,null,"Delete confirmation"),a.a.createElement(b.a,null,"Enter counter name ",a.a.createElement("strong",null,e.confirmCounter.name)," to delete it",a.a.createElement(C.a,{onChange:function(t){var n=t.target.value;c(n.trim().toLowerCase()!==e.confirmCounter.name.trim().toLowerCase())}})),a.a.createElement(p.a,null,a.a.createElement(N.a,{color:"danger",disabled:o,onClick:function(){e.counterDelete(e.confirmCounter.id),c(!0)}},"Delete")," ",a.a.createElement(N.a,{color:"secondary",onClick:function(){e.counterDeleteCancel(),c(!0)}},"Cancel"))))}));var y={counterAdd:l},L=Object(s.b)((function(e){return{countersList:e.countersList}}),y)((function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(r.useState)(""),l=Object(u.a)(i,2),s=l[0],m=l[1];return a.a.createElement("div",{className:"input-group m-3 mr-8 "},a.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"Counter name",value:o,onChange:function(e){return c(e.target.value)}}),a.a.createElement("input",{type:"text",className:"form-control col-sm-3",placeholder:"Counter value",value:s,onChange:function(e){return m(e.target.value)}}),a.a.createElement("div",{className:"input-group-append pr-3 mr-3"},a.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){""===o?alert("Please add a counter name"):isNaN(+s)?alert("PLease add as a Counter value"):(e.counterAdd(o,Number(s)),c(""),m(""))}},"Add counter")))}));var T={counterAdd:l,countersResetAll:function(){return function(e){e({type:"COUNTER_RESET_ALL"})}}},j=Object(s.b)((function(e){return{countersList:e.countersList,total:e.countersTotalValue}}),T)((function(e){return a.a.createElement("div",{className:"input-group m-3 mr-8 "},a.a.createElement("span",{className:"form-control col-sm-3"}," Counters Total:"),a.a.createElement("span",{className:"form-control col-sm-9"},e.countersList.reduce((function(e,t){return e+t.counterValue}),0)),a.a.createElement("div",{className:"input-group-append pr-3 mr-3"},a.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.countersResetAll},"Reset All")))}));var _=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(j,null),a.a.createElement(d,null),a.a.createElement(v,null),a.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(13),V=n(25),g=n(26),D=n(6),I=n(12),h={countersList:[{counterId:97,counterName:"1st counter",counterValue:1,isVisibleEditButton:!0,isVisibleSaveButton:!1},{counterId:98,counterName:"2d counter",counterValue:2,isVisibleEditButton:!0,isVisibleSaveButton:!1},{counterId:99,counterName:"3d counter",counterValue:3,isVisibleEditButton:!0,isVisibleSaveButton:!1}],confirmCounter:{id:0,name:""},countersTotalValue:""},A=function(e,t,n){var r=Object(I.a)(e.countersList.map((function(e){return e.counterId===t?"reset"===n?Object(D.a)({},e,{counterValue:0}):Object(D.a)({},e,{counterValue:e.counterValue+n}):Object(D.a)({},e)})));return Object(D.a)({},e,{countersList:r})},S=function(e){var t=Object(I.a)(e.countersList.map((function(e){return Object(D.a)({},e,{counterValue:0})})));return Object(D.a)({},e,{countersList:t})},U=function(e){var t=Object(I.a)(e.countersList).reduce((function(e,t){return e+t.counterValue}),0);return Object(D.a)({},e,{countersTotalValue:t})},B=function(e,t){var n=e.countersList.filter((function(e){return e.counterId!==t}));return Object(D.a)({},e,{countersList:n,confirmCounter:{id:0,name:""}})};var k=function(e,t,n){var r,a,o=Object(I.a)(e.countersList);return o.push({counterId:(r=100,a=1e3,r=Math.ceil(r),a=Math.floor(a),Math.floor(Math.random()*(a-r))+r),counterName:t,counterValue:n,isVisibleEditButton:!0,isVisibleSaveButton:!1}),Object(D.a)({},e,{countersList:o})},w=function(e,t){var n=Object(I.a)(e.countersList.map((function(e){return e.counterId===t?Object(D.a)({},e,{isVisibleEditButton:!1,isVisibleSaveButton:!0}):Object(D.a)({},e)})));return Object(D.a)({},e,{countersList:n})},M=function(e,t,n){var r=Object(I.a)(e.countersList.map((function(e){return e.counterId===t?Object(D.a)({},e,{counterName:n,isVisibleEditButton:!0,isVisibleSaveButton:!1}):Object(D.a)({},e)})));return console.log("HERE SAVE newLIST",r),Object(D.a)({},e,{countersList:r})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTER_INC_ONE":return A(e,t.payload,1);case"COUNTER_DEC_ONE":return A(e,t.payload,-1);case"COUNTER_RESET":return A(e,t.payload,"reset");case"COUNTER_RESET_ALL":return S(e);case"COUNTERS_TOTAL":return U(e);case"COUNTER_DELETE_CONFIRM":return Object(D.a)({},e,{confirmCounter:{id:t.payload.counterId,name:t.payload.counterName}});case"COUNTER_DELETE":return B(e,t.payload);case"COUNTER_DELETE_CANCEL":return Object(D.a)({},e,{confirmCounter:{id:0,name:""}});case"COUNTER_ADD":return k(e,t.payload.counterName,t.payload.counterValue);case"COUNTER_EDIT_NAME":return w(e,t.payload);case"COUNTER_SAVE_NAME":return M(e,t.payload.counterId,t.payload.counterName);default:return e}},F=Object(R.createStore)(x,Object(g.composeWithDevTools)(Object(R.applyMiddleware)(V.a)));c.a.render(a.a.createElement(s.a,{store:F},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.14d326f4.chunk.js.map