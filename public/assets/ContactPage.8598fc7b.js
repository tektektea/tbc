import{Q as s}from"./QPage.7570ba6e.js";import{J as r,q as i,T as l,o as m,c as u,w as d,h as n,U as p}from"./index.e058ad87.js";import{u as _}from"./use-meta.1ca22824.js";import{u as f}from"./use-quasar.b18e3096.js";const h={class:"container q-mx-auto bg-white"},w=["innerHTML"],x={setup(b){const c={title:"Contact us",titleTemplate:t=>`${t} - Contact us`,meta:{description:{name:"description",content:"Mobile : 918974626947 Email:tbccarrental@gmail.com"},keywords:{name:"keywords",content:"mizo car rental service, mizo car, tbc car rental"}}},e=f(),a=r({content:""});return _(()=>c),i(()=>{e.loading.show(),l.get("public/web-resource/contact").then(t=>{const{data:o}=t.data;a.content=o.content}).finally(()=>e.loading.hide())}),(t,o)=>(m(),u(s,null,{default:d(()=>[n("div",h,[n("div",{innerHTML:p(a).content},null,8,w)])]),_:1}))}};export{x as default};