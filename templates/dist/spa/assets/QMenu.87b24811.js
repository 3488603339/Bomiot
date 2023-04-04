import{m as S,c as m,h as y,p,K as F,M as K,g as H,an as we,ao as Te,ap as Ce,r as w,ai as oe,I as ue,x as Se,D as J,t as Be,B as X,w as k,o as Ee,s as Q,H as Le,u as O,aq as Z,l as pe,$ as He,J as Me,ar as Pe,L as We,as as _e,O as Re,at as $e,P as Ae,au as Oe,av as ze,G as Fe,aw as Ke,ax as ee,Y as Qe,ay as De,az as Ie,aA as je,aB as Ne,aC as Ve}from"./index.bad2be5e.js";var it=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=m(()=>parseInt(e.lines,10)),n=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),l=m(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>y("div",{style:l.value,class:n.value},p(t.default))}}),ot=S({name:"QList",props:{...F,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=H(),n=K(e,o.proxy.$q),l=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>y(e.tag,{class:l.value},p(t.default))}});function Ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),we.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var ut=S({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:o.value},p(t.default))}}),st=S({name:"QItem",props:{...F,...Te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=H(),l=K(e,n),{hasLink:c,linkAttrs:a,linkClass:f,linkTag:d,navigateOnClick:s}=Ce(),r=w(null),h=w(null),b=m(()=>e.clickable===!0||c.value===!0||e.tag==="label"),i=m(()=>e.disable!==!0&&b.value===!0),g=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),M=m(()=>{if(e.insetLevel===void 0)return null;const v=n.lang.rtl===!0?"Right":"Left";return{["padding"+v]:16+e.insetLevel*56+"px"}});function P(v){i.value===!0&&(h.value!==null&&(v.qKeyEvent!==!0&&document.activeElement===r.value?h.value.focus():document.activeElement===h.value&&r.value.focus()),s(v))}function B(v){if(i.value===!0&&oe(v,13)===!0){ue(v),v.qKeyEvent=!0;const T=new MouseEvent("click",v);T.qKeyEvent=!0,r.value.dispatchEvent(T)}o("keyup",v)}function W(){const v=Se(t.default,[]);return i.value===!0&&v.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:h})),v}return()=>{const v={ref:r,class:g.value,style:M.value,role:"listitem",onClick:P,onKeyup:B};return i.value===!0?(v.tabindex=e.tabindex||"0",Object.assign(v,a.value)):b.value===!0&&(v["aria-disabled"]="true"),y(d.value,v,W())}}});const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ge({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:c}=H(),a=w(null);let f;function d(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){oe(i,13)===!0&&s.toggle(i)},contextClick(i){l.hide(i),J(i),Be(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:J,mobileTouch(i){if(s.mobileCleanup(i),d(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const g=i.target;X(s,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&i!==void 0&&Ue()}}),o=function(i=n.contextMenu){if(n.noParentEvent===!0||a.value===null)return;let g;i===!0?l.$q.platform.is.mobile===!0?g=[[a.value,"touchstart","mobileTouch","passive"]]:g=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:g=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],X(s,"anchor",g)});function r(){Le(s,"anchor")}function h(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function b(){if(n.target===!1||n.target===""||l.$el.parentNode===null)a.value=null;else if(n.target===!0)h(l.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,o()):(a.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return k(()=>n.contextMenu,i=>{a.value!==null&&(r(),o(i))}),k(()=>n.target,()=>{a.value!==null&&r(),b()}),k(()=>n.noParentEvent,i=>{a.value!==null&&(i===!0?r():o())}),Ee(()=>{b(),t!==!0&&n.modelValue===!0&&a.value===null&&c("update:modelValue",!1)}),Q(()=>{clearTimeout(f),r()}),{anchorEl:a,canShow:d,anchorEvents:s}}function Je(e,t){const o=w(null);let n;function l(f,d){const s=`${d!==void 0?"add":"remove"}EventListener`,r=d!==void 0?d:n;f!==window&&f[s]("scroll",r,O.passive),window[s]("scroll",r,O.passive),n=d}function c(){o.value!==null&&(l(o.value),o.value=null)}const a=k(()=>e.noParentEvent,()=>{o.value!==null&&(c(),t())});return Q(a),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}let se;const{notPassiveCapture:E}=O,x=[];function L(e){clearTimeout(se);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=Z.length-1;for(;o>=0;){const n=Z[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=x.length-1;n>=0;n--){const l=x[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Xe(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",L,E),document.addEventListener("touchstart",L,E))}function te(e){const t=x.findIndex(o=>o===e);t>-1&&(x.splice(t,1),x.length===0&&(clearTimeout(se),document.removeEventListener("mousedown",L,E),document.removeEventListener("touchstart",L,E)))}let ne,le;function ae(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function ie(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:z[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function et(e,t){let{top:o,left:n,right:l,bottom:c,width:a,height:f}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],c+=t[1],l+=t[0],a+=t[0],f+=t[1]),{top:o,left:n,right:l,bottom:c,width:a,height:f,middle:n+(l-n)/2,center:o+(c-o)/2}}function tt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function nt(e){if(pe.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:s}=window.visualViewport;d!==ne&&(f.setProperty("--q-pe-left",d+"px"),ne=d),s!==le&&(f.setProperty("--q-pe-top",s+"px"),le=s)}let t;const{scrollLeft:o,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=et(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:d}=e.anchorEl.getBoundingClientRect(),s=f+e.absoluteOffset.top,r=d+e.absoluteOffset.left;t={top:s,left:r,width:1,height:1,right:r+1,center:s,middle:r,bottom:s+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=tt(e.el),a={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};lt(a,t,c,e.anchorOrigin,e.selfOrigin),l={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(l.maxHeight=a.maxHeight+"px",t.height>a.maxHeight&&(l.minHeight=l.maxHeight)),a.maxWidth!==void 0&&(l.maxWidth=a.maxWidth+"px",t.width>a.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function lt(e,t,o,n,l){const c=o.bottom,a=o.right,f=He(),d=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>d)if(l.vertical==="center")e.top=t[n.vertical]>d/2?Math.max(0,d-c):0,e.maxHeight=Math.min(c,d);else if(t[n.vertical]>d/2){const r=Math.min(d,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,r),e.top=Math.max(0,r-c)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,d-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),l.horizontal==="middle")e.left=t[n.horizontal]>s/2?Math.max(0,s-a):0;else if(t[n.horizontal]>s/2){const r=Math.min(s,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,s-e.left)}var rt=S({name:"QMenu",inheritAttrs:!1,props:{...Ye,...Me,...F,...Pe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ae},self:{type:String,validator:ae},offset:{type:Array,validator:Ze},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,c,a,f;const d=H(),{proxy:s}=d,{$q:r}=s,h=w(null),b=w(!1),i=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),g=K(e,r),{registerTick:M,removeTick:P}=_e(),{registerTimeout:B}=Re(),{transitionProps:W,transitionStyle:v}=$e(e),{localScrollTarget:T,changeScrollEvent:re,unconfigureScrollTarget:ce}=Je(e,Y),{anchorEl:q,canShow:de}=Ge({showing:b}),{hide:D}=Ae({showing:b,canShow:de,handleShow:ge,handleHide:be,hideOnRouteChange:i,processOnMount:!0}),{showPortal:I,hidePortal:j,renderPortal:fe}=Oe(d,h,ye),_={anchorEl:q,innerRef:h,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return D(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&ue(u),!0}},N=m(()=>ie(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),ve=m(()=>e.cover===!0?N.value:ie(e.self||"top start",r.lang.rtl)),me=m(()=>(e.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),he=m(()=>e.autoClose===!0?{onClick:xe}:{}),V=m(()=>b.value===!0&&e.persistent!==!0);k(V,u=>{u===!0?(je($),Xe(_)):(ee($),te(_))});function R(){Ne(()=>{let u=h.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function ge(u){if(l=e.noRefocus===!1?document.activeElement:null,ze(G),I(),Y(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const A=Fe(u);if(A.left!==void 0){const{top:qe,left:ke}=q.value.getBoundingClientRect();c={left:A.left-ke,top:A.top-qe}}}a===void 0&&(a=k(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,C)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{C(),e.noFocus!==!0&&R()}),B(()=>{r.platform.is.ios===!0&&(f=e.autoClose,h.value.click()),C(),I(!0),o("show",u)},e.transitionDuration)}function be(u){P(),j(),U(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),B(()=>{j(!0),o("hide",u)},e.transitionDuration)}function U(u){c=void 0,a!==void 0&&(a(),a=void 0),(u===!0||b.value===!0)&&(Ke(G),ce(),te(_),ee($)),u!==!0&&(l=null)}function Y(){(q.value!==null||e.scrollTarget!==void 0)&&(T.value=Qe(q.value,e.scrollTarget),re(T.value,C))}function xe(u){f!==!0?(De(s,u),o("click",u)):f=!1}function G(u){V.value===!0&&e.noFocus!==!0&&Ve(h.value,u.target)!==!0&&R()}function $(u){o("escapeKey"),D(u)}function C(){const u=h.value;u===null||q.value===null||nt({el:u,offset:e.offset,anchorEl:q.value,anchorOrigin:N.value,selfOrigin:ve.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ye(){return y(Ie,W.value,()=>b.value===!0?y("div",{role:"menu",...n,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+me.value,n.class],style:[n.style,v.value],...he.value},p(t.default)):null)}return Q(U),Object.assign(s,{focus:R,updatePosition:C}),fe}});export{ut as Q,it as a,st as b,Ue as c,ot as d,rt as e,Ze as f,Je as g,Ge as h,Xe as i,ie as p,te as r,nt as s,Ye as u,ae as v};
