import{r as d,q as u,T as p,o as a,Y as t,$ as _,Z as i,h as o,f as h,V as x,M as r}from"./index.301fe4b6.js";const f={class:"row q-col-gutter-sm"},k={class:"column full-width"},v={class:"text-dark"},g={class:"text-dark text-caption"},V={setup(w){const c=d([]);return u(()=>{p.get("public/cta").then(e=>{const{list:n}=e.data;c.value=n})}),(e,n)=>(a(),t("div",f,[(a(!0),t(_,null,i(c.value,(s,l)=>(a(),t("div",{class:"col-xs-12 col-sm-3",key:l},[o("div",k,[h(x,{size:"32px",color:"accent",name:s.icon},null,8,["name"]),o("p",v,r(s==null?void 0:s.head),1),o("p",g,r(s==null?void 0:s.caption),1)])]))),128))]))}};export{V as default};