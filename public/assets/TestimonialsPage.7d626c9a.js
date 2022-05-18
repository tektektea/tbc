import{J as k,k as q,q as V,o as p,c as m,w as l,T as g,h as i,f as s,g as _,Y as B,Z as C,U as r,$ as S,Q as b,i as f,M as h}from"./index.ed0a09ec.js";import{a as N,Q as u}from"./QItemSection.55c7a9e5.js";import{Q}from"./QItemLabel.8abedde1.js";import{Q as P}from"./QPagination.5edfd372.js";import{Q as T}from"./QList.2e185af7.js";import{Q as I}from"./QPage.ccc683a0.js";import{u as L}from"./use-quasar.d76ea416.js";const M=i("p",{class:"title"},"Testimonials",-1),$={class:"full-width flex items-center bg-white q-pa-md q-ma-md"},U=i("p",{class:"text-dark q-ma-md"},"Create a new testimonial",-1),A=["src"],E={class:"col-12"},K={setup(F){const d=L(),o=k({listData:{per_page:15,data:[],current_page:1,total:1}}),y=n=>{g.delete(`testimony/${n.id}`).then(t=>{const{message:a}=t.data;d.notify({type:"positive",message:a}),c(0)}).catch(t=>{var a,e;return d.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},D=n=>c(n),v=q(()=>Math.ceil(o.listData.total/o.listData.per_page)),x=n=>{const{current_page:t,total:a,per_page:e,data:w}=n;o.listData.current_page=t,o.listData.data=w,o.listData.total=a,o.listData.per_page=e},c=n=>{g.get("testimony/index",{params:{page:n}}).then(t=>{const{message:a,list:e}=t.data;x(e)}).catch(t=>{var a,e;return d.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>d.loading.hide())};return V(()=>c(1)),(n,t)=>(p(),m(I,null,{default:l(()=>[M,i("div",$,[s(_,{to:{name:"testimonial:create"},rounded:"",label:"New Testimony",outline:"",color:"primary"}),U]),s(T,{separator:"",class:"bg-white full-width"},{default:l(()=>[(p(!0),B(S,null,C(r(o).listData.data,a=>(p(),m(N,{to:{name:"testimonial:detail",params:{id:a.id}},key:a.id},{default:l(()=>[s(u,{avatar:""},{default:l(()=>[s(b,null,{default:l(()=>[i("img",{style:{width:"90px"},src:a==null?void 0:a.image_url},null,8,A)]),_:2},1024)]),_:2},1024),s(u,null,{default:l(()=>[s(Q,null,{default:l(()=>[f(h(a==null?void 0:a.name),1)]),_:2},1024),s(Q,{caption:""},{default:l(()=>[f(h(a==null?void 0:a.quote),1)]),_:2},1024)]),_:2},1024),s(u,{side:""},{default:l(()=>[s(_,{round:"",onClick:e=>y(a),icon:"delete",color:"negative"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["to"]))),128)),i("div",E,[s(P,{"onUpdate:modelValue":[D,t[0]||(t[0]=a=>r(o).listData.current_page=a)],modelValue:r(o).listData.current_page,max:r(v),input:""},null,8,["modelValue","max"])])]),_:1})]),_:1}))}};export{K as default};
