import{r as l,p as i,N as u,o as t,c as n,w as d,g as p,b4 as r,T as m,h as c}from"./index.3c048af8.js";import{Q as _}from"./QPage.2000b5c5.js";import{u as h}from"./use-quasar.dd5c13cf.js";const f=c("p",{class:"title"},"Privacy Policy",-1),v=c("br",null,null,-1),g=["innerHTML"],B={setup(y){const a=h(),e=l("");return i(()=>{a.loading.show(),u.get("web-resource/privacy").then(o=>{const{data:s}=o.data;e.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(t(),n(_,null,{default:d(()=>[f,e.value?(t(),n(p,{key:0,to:{name:"privacy:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):r("",!0),v,e.value?(t(),m("div",{key:1,class:"q-pa-md bg-white",innerHTML:e.value},null,8,g)):r("",!0)]),_:1}))}};export{B as default};
