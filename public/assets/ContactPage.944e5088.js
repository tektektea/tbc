import{Q as s}from"./QPage.18b38c29.js";import{J as r,q as i,T as l,o as m,c as u,w as d,h as n,U as p}from"./index.bad63095.js";import{u as _}from"./use-meta.2ce68c2a.js";import{u as f}from"./use-quasar.e471b983.js";const h={class:"container bg-white"},w=["innerHTML"],T={setup(b){const c={title:"Contact us",titleTemplate:t=>`${t} - Contact us`,meta:{description:{name:"description",content:"Mobile : 918974626947 Email:tbccarrental@gmail.com"},keywords:{name:"keywords",content:"mizo car rental service, mizo car, tbc car rental"}}},e=f(),a=r({content:""});return _(()=>c),i(()=>{e.loading.show(),l.get("public/web-resource/contact").then(t=>{const{data:o}=t.data;a.content=o.content}).finally(()=>e.loading.hide())}),(t,o)=>(m(),u(s,null,{default:d(()=>[n("div",h,[n("div",{innerHTML:p(a).content},null,8,w)])]),_:1}))}};export{T as default};