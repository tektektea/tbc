import{r,q as u,T as i,o as e,c as n,w as d,g as m,aC as c,Y as _,h as l}from"./index.ed0a09ec.js";import{Q as p}from"./QPage.ccc683a0.js";import{u as h}from"./use-quasar.d76ea416.js";const f=l("p",{class:"title"},"Contact us",-1),g=l("br",null,null,-1),k=["innerHTML"],q={setup(v){const a=h(),t=r("");return u(()=>{a.loading.show(),i.get("web-resource/contact").then(o=>{const{data:s}=o.data;t.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(e(),n(p,null,{default:d(()=>[f,t.value?(e(),n(m,{key:0,to:{name:"contact:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):c("",!0),g,t.value?(e(),_("div",{key:1,class:"q-pa-md bg-white",innerHTML:t.value},null,8,k)):c("",!0)]),_:1}))}};export{q as default};