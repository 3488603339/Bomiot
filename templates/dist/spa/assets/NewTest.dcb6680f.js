import{O as z,u as G,Q as q,a as R,b as V,c as J,d as K,e as W}from"./OperationNote.90b01902.js";import{I as E,r as k,c as T,o as X,_ as O,a3 as B,J as d,U as F,d as n,L as o,F as M,a1 as x,K as h,O as $,P as C,X as m,aE as j,Q,M as D,aD as S,aF as A}from"./index.24eb1808.js";import{api as H}from"./axios.0e9a8eba.js";import"./QMenu.ef937d92.js";import"./use-quasar.8a0a38f7.js";const Y=E({name:"MainTable",components:{OperationNote:z},setup(){const a=G(),r=k(),P=T(()=>a.tableData.column),p=T(()=>a.tableData.originalRow),g=k([]),y=k(""),f=k(!1),e=k({sortBy:"desc",descending:!1,page:1,rowsPerPage:30,rowsNumber:10});function t(c,b,i,u,_){const w=i?p.value.filter(v=>v.name.includes(i)):p.value.slice();if(u){const v=u==="desc"?_?(l,s)=>l.name>s.name?-1:l.name<s.name?1:0:(l,s)=>l.name>s.name?1:l.name<s.name?-1:0:_?(l,s)=>parseFloat(s[u])-parseFloat(l[u]):(l,s)=>parseFloat(l[u])-parseFloat(s[u]);w.sort(v)}return w.slice(c,c+b)}function N(c){if(!c)return p.value.length;let b=0;return p.value.forEach(i=>{i.name.includes(c)&&++b}),b}function I(c){H.get("user/list/").then(v=>{console.log(v)});const{page:b,rowsPerPage:i,sortBy:u,descending:_}=c.pagination,w=c.filter;f.value=!0,setTimeout(()=>{e.value.rowsNumber=N(w);const v=i===0?e.value.rowsNumber:i,l=(b-1)*i,s=t(l,v,w,u,_);g.value.splice(0,g.value.length,...s),g.value.forEach((L,U)=>{L.index=U+1}),e.value.page=b,e.value.rowsPerPage=i,e.value.sortBy=u,e.value.descending=_,f.value=!1},1e3)}return X(()=>{y.value,e.value,r.value.requestServerInteraction()}),{tableRef:r,filter:y,loading:f,pagination:e,columns:P,originalRows:p,rows:g,onRequest:I,pagesNumber:T(()=>Math.ceil(g.value.length/e.value.rowsPerPage))}}}),Z={class:"q-pa-md"},ee={class:"full-width row flex-center text-accent q-gutter-sm"};function ae(a,r,P,p,g,y){const f=B("OperationNote");return d(),F("div",Z,[n(W,{ref:"tableRef",class:"my-sticky-header-table",rows:a.rows,columns:a.columns,"row-key":"id",pagination:a.pagination,"onUpdate:pagination":r[2]||(r[2]=e=>a.pagination=e),"rows-per-page-label":"\u6BCF\u9875\u591A\u5C11\u884C",loading:a.loading,filter:a.filter,"binary-state-sort":"",onRequest:a.onRequest,style:A({height:a.$q.screen.height-85+"px"}),bordered:""},{header:o(e=>[n(q,{props:e},{default:o(()=>[n(R),(d(!0),F(M,null,x(e.cols,t=>(d(),h(R,{key:t.name,props:e},{default:o(()=>[$(C(t.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:o(e=>[(d(),h(q,{props:e,key:`m_${e.row.index}`},{default:o(()=>[n(V,null,{default:o(()=>[$(C(e.row.index),1)]),_:2},1024),(d(!0),F(M,null,x(e.cols,t=>(d(),h(V,{key:t.name,props:e},{default:o(()=>[$(C(t.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]))]),"top-left":o(()=>[n(J,{push:""},{default:o(()=>[n(m,{push:"",color:"primary",label:"\u5237\u65B0",icon:"refresh"}),n(m,{push:"",color:"primary",label:"\u65B0\u589E",icon:"add"}),n(m,{push:"",color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""})]),_:1}),n(f)]),"top-right":o(e=>[n(j,{borderless:"",dense:"",debounce:"300",modelValue:a.filter,"onUpdate:modelValue":r[0]||(r[0]=t=>a.filter=t),placeholder:"Search"},{append:o(()=>[n(Q,{name:"search"})]),_:1},8,["modelValue"]),n(m,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),pagination:o(e=>[e.pagesNumber>2?(d(),h(m,{key:0,icon:"first_page",color:"grey-8",round:"",dense:"",flat:"",disable:e.isFirstPage,onClick:e.firstPage},null,8,["disable","onClick"])):D("",!0),n(m,{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:e.isFirstPage,onClick:e.prevPage},null,8,["disable","onClick"]),n(K,{modelValue:a.pagination.page,"onUpdate:modelValue":r[1]||(r[1]=t=>a.pagination.page=t),max:e.pagesNumber,"max-pages":6,"boundary-numbers":"",onClick:t=>a.onRequest(e)},null,8,["modelValue","max","onClick"]),n(m,{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:e.isLastPage,onClick:e.nextPage},null,8,["disable","onClick"]),e.pagesNumber>2?(d(),h(m,{key:1,icon:"last_page",color:"grey-8",round:"",dense:"",flat:"",disable:e.isLastPage,onClick:e.lastPage},null,8,["disable","onClick"])):D("",!0)]),"no-data":o(({icon:e,message:t,filter:N})=>[S("div",ee,[n(Q,{size:"2em",name:"sentiment_dissatisfied"}),S("span",null," Well this is sad... "+C(t),1),n(Q,{size:"2em",name:N?"filter_b_and_w":e},null,8,["name"])])]),_:1},8,["rows","columns","pagination","loading","filter","onRequest","style"])])}var ne=O(Y,[["render",ae]]);const te=E({name:"NewTest",components:{MainTable:ne}});function oe(a,r,P,p,g,y){const f=B("MainTable");return d(),h(f)}var de=O(te,[["render",oe]]);export{de as default};
