import{r as l,q as i,T as u,o as t,c as n,w as d,g as m,aC as r,Y as p,h as c}from"./index.301fe4b6.js";import{Q as _}from"./QPage.4a85597f.js";import{u as h}from"./use-quasar.5618e4dc.js";const f=c("p",{class:"title"},"Privacy Policy",-1),v=c("br",null,null,-1),g=["innerHTML"],b={setup(y){const a=h(),e=l("");return i(()=>{a.loading.show(),u.get("web-resource/privacy").then(o=>{const{data:s}=o.data;e.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(t(),n(_,null,{default:d(()=>[f,e.value?(t(),n(m,{key:0,to:{name:"privacy:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):r("",!0),v,e.value?(t(),p("div",{key:1,class:"q-pa-md bg-white",innerHTML:e.value},null,8,g)):r("",!0)]),_:1}))}};export{b as default};
