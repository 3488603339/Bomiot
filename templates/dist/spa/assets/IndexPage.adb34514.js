import{c as g,h as d}from"./render.a5548ccb.js";import{p as t,c,h,a as i,q as f,I as y,g as m,_ as x,L as _,M as v,N as C,O as $,aa as P}from"./index.51dffd7c.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:s}){const{proxy:{$q:o}}=m(),e=i(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},d(s.default))}});const F=_({name:"IndexPage"}),q=P("img",{alt:"Quasar logo",src:"icons/logo.png",style:{width:"200px",height:"200px"}},null,-1);function B(n,s,o,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[q]),_:1})}var b=x(F,[["render",B]]);export{b as default};
