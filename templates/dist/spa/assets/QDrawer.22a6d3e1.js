import{Y as De,l as $,n as Ee,aw as $e,ac as z,ax as Q,ab as le,ay as U,ao as Z,ad as K,aa as Le,m as _e,af as Pe,a5 as ze,ah as Ae,a6 as We,aj as Fe,i as Ie,v as R,r as O,c as v,al as Xe,az as Ye,w as y,aA as A,o as Ve,t as se,s as je,V as He,h as W,aB as de,p as Ne,y as Qe,g as Ue,aC as Ke}from"./index.24eb1808.js";import{e as Re}from"./QMenu.ef937d92.js";const ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ge=Object.keys(ee);ee.all=!0;function ce(t){const u={};for(const n of Ge)t[n]===!0&&(u[n]=!0);return Object.keys(u).length===0?ee:(u.horizontal===!0?u.left=u.right=!0:u.left===!0&&u.right===!0&&(u.horizontal=!0),u.vertical===!0?u.up=u.down=!0:u.up===!0&&u.down===!0&&(u.vertical=!0),u.horizontal===!0&&u.vertical===!0&&(u.all=!0),u)}function ve(t,u){return u.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof u.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(u.uid)===-1)}function G(t,u,n){const b=Z(t);let e,r=b.left-u.event.x,l=b.top-u.event.y,f=Math.abs(r),m=Math.abs(l);const s=u.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",f>m&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&l>0?(e="down",f>m&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&r>0&&(e="right",f<m&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let i=!1;if(e===void 0&&n===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};e=u.event.lastDir,i=!0,e==="left"||e==="right"?(b.left-=r,f=0,r=0):(b.top-=l,m=0,l=0)}return{synthetic:i,payload:{evt:t,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:b,direction:e,isFirst:u.event.isFirst,isFinal:n===!0,duration:Date.now()-u.event.time,distance:{x:f,y:m},offset:{x:r,y:l},delta:{x:b.left-u.event.lastX,y:b.top-u.event.lastY}}}}let Je=0;var J=De({name:"touch-pan",beforeMount(t,{value:u,modifiers:n}){if(n.mouse!==!0&&$.has.touch!==!0)return;function b(r,l){n.mouse===!0&&l===!0?Le(r):(n.stop===!0&&U(r),n.prevent===!0&&le(r))}const e={uid:"qvtp_"+Je++,handler:u,modifiers:n,direction:ce(n),noop:Ee,mouseStart(r){ve(r,e)&&$e(r)&&(z(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(ve(r,e)){const l=r.target;z(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,l){if($.is.firefox===!0&&Q(t,!0),e.lastEvt=r,l===!0||n.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&le(s),r.cancelBubble===!0&&U(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}U(r)}const{left:f,top:m}=Z(r);e.event={x:f,y:m,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:m}},move(r){if(e.event===void 0)return;const l=Z(r),f=l.left-e.event.x,m=l.top-e.event.y;if(f===0&&m===0)return;e.lastEvt=r;const s=e.event.mouse===!0,i=()=>{b(r,s);let h;n.preserveCursor!==!0&&n.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),e.styleCleanup=d=>{if(e.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),s===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{B(),d()},50):B()}else d!==void 0&&d()}};if(e.event.detected===!0){e.event.isFirst!==!0&&b(r,e.event.mouse);const{payload:h,synthetic:d}=G(r,e,!1);h!==void 0&&(e.handler(h)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=h.position.left,e.event.lastY=h.position.top,e.event.lastDir=d===!0?void 0:h.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(r);return}const C=Math.abs(f),q=Math.abs(m);C!==q&&(e.direction.horizontal===!0&&C>q||e.direction.vertical===!0&&C<q||e.direction.up===!0&&C<q&&m<0||e.direction.down===!0&&C<q&&m>0||e.direction.left===!0&&C>q&&f<0||e.direction.right===!0&&C>q&&f>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,l){if(e.event!==void 0){if(K(e,"temp"),$.is.firefox===!0&&Q(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(G(r===void 0?e.lastEvt:r,e).payload);const{payload:f}=G(r===void 0?e.lastEvt:r,e,!0),m=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";z(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}$.has.touch===!0&&z(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,u){const n=t.__qtouchpan;n!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&n.end(),n.handler=u.value),n.direction=ce(u.modifiers))},beforeUnmount(t){const u=t.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),K(u,"main"),K(u,"temp"),$.is.firefox===!0&&Q(t,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete t.__qtouchpan)}});const fe=150;var at=_e({name:"QDrawer",inheritAttrs:!1,props:{...Pe,...ze,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ae,"onLayout","miniState"],setup(t,{slots:u,emit:n,attrs:b}){const e=Ue(),{proxy:{$q:r}}=e,l=We(t,r),{preventBodyScroll:f}=Ke(),{registerTimeout:m,removeTimeout:s}=Fe(),i=Ie(Qe,R);if(i===R)return console.error("QDrawer needs to be child of QLayout"),R;let C,q,h;const d=O(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),B=v(()=>t.mini===!0&&d.value!==!0),w=v(()=>B.value===!0?t.miniWidth:t.width),c=O(t.showIfAbove===!0&&d.value===!1?!0:t.modelValue===!0),te=v(()=>t.persistent!==!0&&(d.value===!0||ye.value===!0));function ae(a,o){if(me(),a!==!1&&i.animate(),g(0),d.value===!0){const p=i.instances[_.value];p!==void 0&&p.belowBreakpoint===!0&&p.hide(!1),S(1),i.isContainer.value!==!0&&f(!0)}else S(0),a!==!1&&j(!1);m(()=>{a!==!1&&j(!0),o!==!0&&n("show",a)},fe)}function re(a,o){he(),a!==!1&&i.animate(),S(0),g(T.value*w.value),H(),o!==!0?m(()=>{n("hide",a)},fe):s()}const{show:F,hide:D}=Xe({showing:c,hideOnRouteChange:te,handleShow:ae,handleHide:re}),{addToHistory:me,removeFromHistory:he}=Ye(c,D,te),L={belowBreakpoint:d,hide:D},k=v(()=>t.side==="right"),T=v(()=>(r.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),ue=O(0),M=O(!1),I=O(!1),ie=O(w.value*T.value),_=v(()=>k.value===!0?"left":"right"),X=v(()=>c.value===!0&&d.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),Y=v(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(k.value?"R":"L")>-1||r.platform.is.ios===!0&&i.isContainer.value===!0),E=v(()=>t.overlay===!1&&c.value===!0&&d.value===!1),ye=v(()=>t.overlay===!0&&c.value===!0&&d.value===!1),pe=v(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&M.value===!1?" hidden":"")),be=v(()=>({backgroundColor:`rgba(0,0,0,${ue.value*.4})`})),oe=v(()=>k.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),we=v(()=>k.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),ge=v(()=>{const a={};return i.header.space===!0&&oe.value===!1&&(Y.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&we.value===!1&&(Y.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),Ce=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${ie.value}px)`};return d.value===!0?a:Object.assign(a,ge.value)}),qe=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ke=v(()=>`q-drawer q-drawer--${t.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(Y.value===!0||E.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(oe.value===!0?" q-drawer--top-padding":""))),Be=v(()=>{const a=r.lang.rtl===!0?t.side:_.value;return[[J,Me,void 0,{[a]:!0,mouse:!0}]]}),Se=v(()=>{const a=r.lang.rtl===!0?_.value:t.side;return[[J,ne,void 0,{[a]:!0,mouse:!0}]]}),xe=v(()=>{const a=r.lang.rtl===!0?_.value:t.side;return[[J,ne,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function V(){Oe(d,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}y(d,a=>{a===!0?(C=c.value,c.value===!0&&D(!1)):t.overlay===!1&&t.behavior!=="mobile"&&C!==!1&&(c.value===!0?(g(0),S(0),H()):F(!1))}),y(()=>t.side,(a,o)=>{i.instances[o]===L&&(i.instances[o]=void 0,i[o].space=!1,i[o].offset=0),i.instances[a]=L,i[a].size=w.value,i[a].space=E.value,i[a].offset=X.value}),y(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&V()}),y(()=>t.behavior+t.breakpoint,V),y(i.isContainer,a=>{c.value===!0&&f(a!==!0),a===!0&&V()}),y(i.scrollbarWidth,()=>{g(c.value===!0?0:void 0)}),y(X,a=>{x("offset",a)}),y(E,a=>{n("onLayout",a),x("space",a)}),y(k,()=>{g()}),y(w,a=>{g(),N(t.miniToOverlay,a)}),y(()=>t.miniToOverlay,a=>{N(a,w.value)}),y(()=>r.lang.rtl,()=>{g()}),y(()=>t.mini,()=>{t.modelValue===!0&&(Te(),i.animate())}),y(B,a=>{n("miniState",a)});function g(a){a===void 0?se(()=>{a=c.value===!0?0:w.value,g(T.value*a)}):(i.isContainer.value===!0&&k.value===!0&&(d.value===!0||Math.abs(a)===w.value)&&(a+=T.value*i.scrollbarWidth.value),ie.value=a)}function S(a){ue.value=a}function j(a){const o=a===!0?"remove":i.isContainer.value!==!0?"add":"";o!==""&&document.body.classList[o]("q-body--drawer-toggle")}function Te(){clearTimeout(q),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,q=setTimeout(()=>{I.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Me(a){if(c.value!==!1)return;const o=w.value,p=A(a.distance.x,0,o);if(a.isFinal===!0){p>=Math.min(75,o)===!0?F():(i.animate(),S(0),g(T.value*o)),M.value=!1;return}g((r.lang.rtl===!0?k.value!==!0:k.value)?Math.max(o-p,0):Math.min(0,p-o)),S(A(p/o,0,1)),a.isFirst===!0&&(M.value=!0)}function ne(a){if(c.value!==!0)return;const o=w.value,p=a.direction===t.side,P=(r.lang.rtl===!0?p!==!0:p)?A(a.distance.x,0,o):0;if(a.isFinal===!0){Math.abs(P)<Math.min(75,o)===!0?(i.animate(),S(1),g(0)):D(),M.value=!1;return}g(T.value*P),S(A(1-P/o,0,1)),a.isFirst===!0&&(M.value=!0)}function H(){f(!1),j(!0)}function x(a,o){i.update(t.side,a,o)}function Oe(a,o){a.value!==o&&(a.value=o)}function N(a,o){x("size",a===!0?t.miniWidth:o)}return i.instances[t.side]=L,N(t.miniToOverlay,w.value),x("space",E.value),x("offset",X.value),t.showIfAbove===!0&&t.modelValue!==!0&&c.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Ve(()=>{n("onLayout",E.value),n("miniState",B.value),C=t.showIfAbove===!0;const a=()=>{(c.value===!0?ae:re)(!1,!0)};if(i.totalWidth.value!==0){se(a);return}h=y(i.totalWidth,()=>{h(),h=void 0,c.value===!1&&t.showIfAbove===!0&&d.value===!1?F(!1):a()})}),je(()=>{h!==void 0&&h(),clearTimeout(q),c.value===!0&&H(),i.instances[t.side]===L&&(i.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];d.value===!0&&(t.noSwipeOpen===!1&&a.push(He(W("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Be.value)),a.push(de("div",{ref:"backdrop",class:pe.value,style:be.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",t.noSwipeBackdrop!==!0&&c.value===!0,()=>xe.value)));const o=B.value===!0&&u.mini!==void 0,p=[W("div",{...b,key:""+o,class:[qe.value,b.class]},o===!0?u.mini():Ne(u.default))];return t.elevated===!0&&c.value===!0&&p.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(de("aside",{ref:"content",class:ke.value,style:Ce.value},p,"contentclose",t.noSwipeClose!==!0&&d.value===!0,()=>Se.value)),W("div",{class:"q-drawer-container"},a)}}});export{at as Q};
