import{R as n}from"./index.24eb1808.js";const r=n("token",{state:()=>({token:""}),getters:{getToken:e=>e.token},actions:{tokenaction(e){this.token=e},tokencheck(){if(this.token==="")this.router.push({name:"logon"});else{let o=this.token.split(".");var e=JSON.parse(decodeURIComponent(escape(window.atob(o[1].replace(/-/g,"+").replace(/_/g,"/"))))),t=e.exp-Date.parse(new Date)/1e3;t<=0&&(this.token="",this.router.push({name:"logon"}))}}},persist:{enabled:!0}});export{r as u};
