import{r as l,p as i,N as u,o as t,c as n,w as d,g as p,az as r,T as m,h as c}from"./index.5244c262.js";import{Q as _}from"./QPage.69d4d896.js";import{u as h}from"./use-quasar.525e2ea7.js";const f=c("p",{class:"title"},"Privacy Policy",-1),v=c("br",null,null,-1),g=["innerHTML"],b={setup(y){const a=h(),e=l("");return i(()=>{a.loading.show(),u.get("web-resource/privacy").then(o=>{const{data:s}=o.data;e.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(t(),n(_,null,{default:d(()=>[f,e.value?(t(),n(p,{key:0,to:{name:"privacy:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):r("",!0),v,e.value?(t(),m("div",{key:1,class:"q-pa-md bg-white",innerHTML:e.value},null,8,g)):r("",!0)]),_:1}))}};export{b as default};