import{Q as r}from"./QPage.e4ccf3f8.js";import{a3 as m,O as p,x as u,o as _,h as f,w as h,m as e,R as g,a4 as c}from"./index.52899536.js";import{api as x}from"./axios.304c0ac6.js";import{u as v}from"./use-quasar.cf78572c.js";import"./LocalStorage.8f3516bd.js";const y={class:"container"},k={class:"text-lg text-dark"},w={class:"q-my-md tcard"},B=["innerHTML"],N={setup(M){const d=m(),o=v(),n=p({data:{}}),l=i=>{o.loading.show(),x.get(`events/${i}`).then(t=>{const{data:a}=t.data;n.data=a}).catch(t=>{var a,s;return o.notify({type:"negative",message:((s=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:s.message)||t.toString()})}).finally(()=>o.loading.hide())};return u(()=>{l(d.params.id)}),(i,t)=>(_(),f(r,{class:"flex justify-center"},{default:h(()=>{var a,s;return[e("div",y,[e("p",k,g(((a=c(n).data)==null?void 0:a.title)||"No title"),1),e("div",w,[e("div",{innerHTML:(s=c(n).data)==null?void 0:s.content},null,8,B)])])]}),_:1}))}};export{N as default};
