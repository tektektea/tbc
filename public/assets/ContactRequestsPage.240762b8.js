import{J as v,k,q,o as c,c as f,w as o,T as _,h as g,f as s,V as C,U as r,W as w,Y as I,Z as B,$ as S,Q as b,i as u,M as p,g as P}from"./index.47b7fabf.js";import{a as U,Q as m}from"./QItemSection.c60c26f6.js";import{Q}from"./QItemLabel.18e87629.js";import{Q as L}from"./QList.84a12ba9.js";import{Q as M}from"./QPagination.a737531c.js";import{Q as N}from"./QPage.37a2fb85.js";import{u as $}from"./use-quasar.b4857f66.js";const T={class:"flex justify-between bg-white q-pa-md q-my-md"},j=g("p",{class:"title"},"Contact request",-1),A={class:"flex q-my-md"},G={setup(E){const i=$(),a=v({listData:{per_page:15,data:[],current_page:1,total:1}}),h=l=>d(l),D=k(()=>Math.ceil(a.listData.total/a.listData.per_page)),y=l=>{const{current_page:t,total:e,per_page:n,data:V}=l;a.listData.current_page=t,a.listData.data=V,a.listData.total=e,a.listData.per_page=n},x=l=>{i.dialog({title:"Confirm Delete",message:"Do you want to delete?",cancel:!0}).onOk(()=>{_.delete(`contact-request/${l.id}`).then(t=>{const{message:e}=t.data;i.notify({type:"positive",message:e}),d(1)})}).onCancel(()=>{}).onDismiss(()=>{})},d=l=>{_.get("contact-request/index",{params:l}).then(t=>{const{message:e,list:n}=t.data;y(n)}).catch(t=>{var e,n;return i.notify({type:"negative",message:((n=(e=t.response)==null?void 0:e.data)==null?void 0:n.message)||t.toString()})}).finally(()=>i.loading.hide())};return q(()=>d(1)),(l,t)=>(c(),f(N,null,{default:o(()=>[g("div",T,[j,s(w,{modelValue:r(a).search,"onUpdate:modelValue":t[0]||(t[0]=e=>r(a).search=e),outlined:"",rounded:"",dense:"",placeholder:"Search"},{append:o(()=>[s(C,{name:"search"})]),_:1},8,["modelValue"])]),s(L,{separator:"",class:"bg-white"},{default:o(()=>[(c(!0),I(S,null,B(r(a).listData.data,e=>(c(),f(U,{key:e.id},{default:o(()=>[s(m,{avatar:""},{default:o(()=>[s(b,{color:"primary","text-color":"text-white"},{default:o(()=>[u(p(e.name[0].toUpperCase()),1)]),_:2},1024)]),_:2},1024),s(m,null,{default:o(()=>[s(Q,null,{default:o(()=>[u(p(e.name),1)]),_:2},1024),s(Q,{caption:""},{default:o(()=>[u(p(e.message),1)]),_:2},1024)]),_:2},1024),s(m,{side:""},{default:o(()=>[s(P,{onClick:n=>x(e),round:"",color:"negative",icon:"delete"},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),g("div",A,[s(M,{"onUpdate:modelValue":[h,t[1]||(t[1]=e=>r(a).listData.current_page=e)],modelValue:r(a).listData.current_page,max:r(D),input:""},null,8,["modelValue","max"])])]),_:1}))}};export{G as default};
