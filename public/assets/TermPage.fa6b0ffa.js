import{r as c,q as i,T as u,o as t,c as n,w as d,g as m,aC as r,Y as _,h as l}from"./index.47b7fabf.js";import{Q as p}from"./QPage.37a2fb85.js";import{u as h}from"./use-quasar.b4857f66.js";const f=l("p",{class:"title"},"Terms and condition",-1),g=l("br",null,null,-1),k=["innerHTML"],q={setup(v){const a=h(),e=c("");return i(()=>{a.loading.show(),u.get("web-resource/term").then(o=>{const{data:s}=o.data;e.value=s.content}).finally(()=>a.loading.hide())}),(o,s)=>(t(),n(p,null,{default:d(()=>[f,e.value?(t(),n(m,{key:0,to:{name:"term:edit"},class:"absolute-top-right q-ma-md",icon:"edit",round:"",flat:""})):r("",!0),g,e.value?(t(),_("div",{key:1,class:"q-pa-md bg-white",innerHTML:e.value},null,8,k)):r("",!0)]),_:1}))}};export{q as default};
