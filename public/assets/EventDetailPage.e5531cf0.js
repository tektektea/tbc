import{Q as r}from"./QPage.faa3a615.js";import{ae as p,I as u,p as _,o as f,c as h,w as m,S as g,h as e,L as v,T as i}from"./index.d49de93d.js";import{u as x}from"./use-quasar.4b809612.js";const y={class:"container"},S={class:"text-lg text-dark"},k={class:"q-my-md"},w=["innerHTML"],T={setup(B){const d=p(),o=x(),n=u({data:{}}),l=c=>{o.loading.show(),g.get(`event/${c}`).then(t=>{const{data:a}=t.data;n.data=a}).catch(t=>{var a,s;return o.notify({type:"negative",message:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||t.toString()})}).finally(()=>o.loading.hide())};return _(()=>{l(d.params.id)}),(c,t)=>(f(),h(r,{class:"flex justify-center"},{default:m(()=>{var a,s;return[e("div",y,[e("p",S,v(((a=i(n).data)==null?void 0:a.title)||"No title"),1),e("div",k,[e("div",{innerHTML:(s=i(n).data)==null?void 0:s.content},null,8,w)])])]}),_:1}))}};export{T as default};
