import{Q as r}from"./QPage.ccc683a0.js";import{af as u,J as _,q as p,o as f,c as h,w as m,T as g,h as e,M as v,U as i}from"./index.ed0a09ec.js";import{u as x}from"./use-quasar.d76ea416.js";const y={class:"container"},M={class:"text-lg text-dark"},k={class:"q-my-md"},q=["innerHTML"],T={setup(w){const d=u(),o=x(),n=_({data:{}}),l=c=>{o.loading.show(),g.get(`event/${c}`).then(t=>{const{data:a}=t.data;n.data=a}).catch(t=>{var a,s;return o.notify({type:"negative",message:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||t.toString()})}).finally(()=>o.loading.hide())};return p(()=>{l(d.params.id)}),(c,t)=>(f(),h(r,{class:"flex justify-center"},{default:m(()=>{var a,s;return[e("div",y,[e("p",M,v(((a=i(n).data)==null?void 0:a.title)||"No title"),1),e("div",k,[e("div",{innerHTML:(s=i(n).data)==null?void 0:s.content},null,8,q)])])]}),_:1}))}};export{T as default};