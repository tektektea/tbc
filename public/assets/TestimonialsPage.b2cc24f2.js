import{I as k,k as V,p as q,o as p,c as m,w as l,N as g,h as i,f as s,g as _,T as B,U as C,P as r,V as N,Q as P,i as f,L as h}from"./index.3c048af8.js";import{Q as S,a as u}from"./QItem.ac24ba8b.js";import{Q}from"./QItemLabel.e46d6432.js";import{Q as b}from"./QPagination.17b37c89.js";import{Q as I}from"./QList.eeb0163a.js";import{Q as L}from"./QPage.2000b5c5.js";import{u as T}from"./use-quasar.dd5c13cf.js";const M=i("p",{class:"title"},"Testimonials",-1),U={class:"full-width flex items-center bg-white q-pa-md q-ma-md"},$=i("p",{class:"text-dark q-ma-md"},"Create a new testimonial",-1),A=["src"],E={class:"col-12"},R={setup(F){const d=T(),o=k({listData:{per_page:15,data:[],current_page:1,total:1}}),y=n=>{g.delete(`testimony/${n.id}`).then(t=>{const{message:a}=t.data;d.notify({type:"positive",message:a}),c(0)}).catch(t=>{var a,e;return d.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},D=n=>c(n),v=V(()=>Math.ceil(o.listData.total/o.listData.per_page)),x=n=>{const{current_page:t,total:a,per_page:e,data:w}=n;o.listData.current_page=t,o.listData.data=w,o.listData.total=a,o.listData.per_page=e},c=n=>{g.get("testimony/index",{params:{page:n}}).then(t=>{const{message:a,list:e}=t.data;x(e)}).catch(t=>{var a,e;return d.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>d.loading.hide())};return q(()=>c(1)),(n,t)=>(p(),m(L,null,{default:l(()=>[M,i("div",U,[s(_,{to:{name:"testimonial:create"},rounded:"",label:"New Testimony",outline:"",color:"primary"}),$]),s(I,{separator:"",class:"bg-white full-width"},{default:l(()=>[(p(!0),B(N,null,C(r(o).listData.data,a=>(p(),m(S,{to:{name:"testimonial:detail",params:{id:a.id}},key:a.id},{default:l(()=>[s(u,{avatar:""},{default:l(()=>[s(P,null,{default:l(()=>[i("img",{style:{width:"90px"},src:a==null?void 0:a.image_url},null,8,A)]),_:2},1024)]),_:2},1024),s(u,null,{default:l(()=>[s(Q,null,{default:l(()=>[f(h(a==null?void 0:a.name),1)]),_:2},1024),s(Q,{caption:""},{default:l(()=>[f(h(a==null?void 0:a.quote),1)]),_:2},1024)]),_:2},1024),s(u,{side:""},{default:l(()=>[s(_,{round:"",onClick:e=>y(a),icon:"delete",color:"negative"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["to"]))),128)),i("div",E,[s(b,{"onUpdate:modelValue":[D,t[0]||(t[0]=a=>r(o).listData.current_page=a)],modelValue:r(o).listData.current_page,max:r(v),input:""},null,8,["modelValue","max"])])]),_:1})]),_:1}))}};export{R as default};