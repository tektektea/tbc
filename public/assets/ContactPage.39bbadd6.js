import{Q as s}from"./QPage.12b83cb2.js";import{I as r,p as i,S as l,o as m,c as u,w as d,h as n,T as p}from"./index.4d63b74e.js";import{u as _}from"./use-meta.f85cfcf6.js";import{u as f}from"./use-quasar.4d0d1f1f.js";const h={class:"container bg-white"},w=["innerHTML"],T={setup(b){const c={title:"Contact us",titleTemplate:t=>`${t} - Contact us`,meta:{description:{name:"description",content:"Mobile : 918974626947 Email:tbccarrental@gmail.com"},keywords:{name:"keywords",content:"mizo car rental service, mizo car, tbc car rental"}}},e=f(),a=r({content:""});return _(()=>c),i(()=>{e.loading.show(),l.get("public/web-resource/contact").then(t=>{const{data:o}=t.data;a.content=o.content}).finally(()=>e.loading.hide())}),(t,o)=>(m(),u(s,null,{default:d(()=>[n("div",h,[n("div",{innerHTML:p(a).content},null,8,w)])]),_:1}))}};export{T as default};
