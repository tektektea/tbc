import{Q as s}from"./QPage.7570ba6e.js";import{J as c,q as r,T as i,o as l,c as u,w as d,h as n,U as _}from"./index.e058ad87.js";import{u as p}from"./use-quasar.b18e3096.js";const h={class:"container q-mx-auto bg-white"},m=["innerHTML"],b={setup(f){const t=p(),e=c({content:""});return r(()=>{t.loading.show(),i.get("public/web-resource/term").then(o=>{const{data:a}=o.data;e.content=a.content}).finally(()=>t.loading.hide())}),(o,a)=>(l(),u(s,null,{default:d(()=>[n("div",h,[n("div",{innerHTML:_(e).content},null,8,m)])]),_:1}))}};export{b as default};