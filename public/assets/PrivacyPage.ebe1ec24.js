import{Q as s}from"./QPage.4a85597f.js";import{J as c,q as r,T as i,o as l,c as u,w as d,h as n,U as p}from"./index.301fe4b6.js";import{u as _}from"./use-quasar.5618e4dc.js";const h={class:"container bg-white"},f=["innerHTML"],b={setup(m){const t=_(),e=c({content:""});return r(()=>{t.loading.show(),i.get("public/web-resource/privacy").then(a=>{const{data:o}=a.data;e.content=o.content}).finally(()=>t.loading.hide())}),(a,o)=>(l(),u(s,null,{default:d(()=>[n("div",h,[n("div",{innerHTML:p(e).content},null,8,f)])]),_:1}))}};export{b as default};