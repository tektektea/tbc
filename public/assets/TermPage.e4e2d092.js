import{r as c,p as i,N as u,o as t,c as n,w as d,g as m,b4 as r,T as p,h as l}from"./index.5c86de95.js";import{Q as _}from"./QPage.87ecf7e3.js";import{u as h}from"./use-quasar.20adbb22.js";const f=l("p",{class:"title"},"Terms and condition",-1),g=l("br",null,null,-1),b=["innerHTML"],Q={setup(k){const a=h(),e=c("");return i(()=>{a.loading.show(),u.get("web-resource/term").then(o=>{const{data:s}=o.data;e.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(t(),n(_,null,{default:d(()=>[f,e.value?(t(),n(m,{key:0,to:{name:"term:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):r("",!0),g,e.value?(t(),p("div",{key:1,class:"q-pa-md bg-white",innerHTML:e.value},null,8,b)):r("",!0)]),_:1}))}};export{Q as default};
