import{Q as r}from"./QPage.ccc683a0.js";import{J as c,q as i,T as l,o as u,c as d,w as m,h as o,U as h}from"./index.ed0a09ec.js";import{u as p}from"./use-meta.c0f34d68.js";import{u as _}from"./use-quasar.d76ea416.js";const f={class:"container bg-white"},g=["innerHTML"],T={setup(b){const s={title:"About us",titleTemplate:t=>`${t} - About us`,meta:{description:{name:"description",content:"Mizoram chhung a car rental service rinthlak leh changtlung ber te zing ami kan ni e"},keywords:{name:"keywords",content:"tbc car rental"}}},e=_(),a=c({content:""});return p(()=>s),i(()=>{e.loading.show(),l.get("public/web-resource/about").then(t=>{const{data:n}=t.data;a.content=n.content}).finally(()=>e.loading.hide())}),(t,n)=>(u(),d(r,null,{default:m(()=>[o("div",f,[o("div",{innerHTML:h(a).content},null,8,g)])]),_:1}))}};export{T as default};
