import{J as k,k as C,q as V,o as u,c as q,w as c,T as _,h as o,f as l,V as w,U as d,W as b,g,Y as h,Z as M,$ as S,a0 as f,M as p,a1 as B,a2 as P}from"./index.bad63095.js";import{Q as U}from"./QPagination.9b9322b3.js";import{Q as I}from"./QPage.18b38c29.js";import{u as L}from"./use-quasar.e471b983.js";const N=o("p",{class:"title"},"Vehicles",-1),T={class:"flex justify-between bg-white q-pa-md q-my-md"},$={class:"row q-col-gutter-sm"},H=["src"],K={class:"text-h6"},R={class:"text-subtitle2"},j={class:"text-subtitle2"},A=["innerHTML"],E={class:"flex q-my-md"},Z={setup(F){const r=L(),t=k({search:"",listData:{per_page:15,data:[],current_page:1,total:1}}),m=s=>i(s),v=C(()=>Math.ceil(t.listData.total/t.listData.per_page)),y=s=>{const{current_page:e,total:a,per_page:n,data:Q}=s;t.listData.current_page=e,t.listData.data=Q,t.listData.total=a,t.listData.per_page=n},D=s=>{r.dialog({title:"Confirm Delete",message:"Do you want to delete?",cancel:!0}).onOk(()=>{_.delete(`vehicle/${s.id}`).then(e=>{const{message:a}=e.data;r.notify({type:"positive",message:a}),i(1)})}).onCancel(()=>{}).onDismiss(()=>{})},x=s=>{s.keyCode===13&&i(1)},i=s=>{_.get("vehicle/index",{params:s,search:t.search}).then(e=>{const{message:a,list:n}=e.data;y(n)}).catch(e=>{var a,n;return r.notify({type:"negative",message:((n=(a=e.response)==null?void 0:a.data)==null?void 0:n.message)||e.toString()})}).finally(()=>r.loading.hide())};return V(()=>i(1)),(s,e)=>(u(),q(I,null,{default:c(()=>[N,o("div",T,[l(b,{onKeyup:x,modelValue:d(t).search,"onUpdate:modelValue":e[0]||(e[0]=a=>d(t).search=a),outlined:"",rounded:"",dense:"",placeholder:"Search"},{append:c(()=>[l(w,{name:"search"})]),_:1},8,["modelValue"]),l(g,{to:{name:"vehicle:create"},color:"primary",rounded:"",label:"New vehicle"})]),o("div",$,[(u(!0),h(S,null,M(d(t).listData.data,a=>(u(),h("div",{key:a.id},[l(P,{style:{padding:"0 !important"},flat:"",class:"tcard"},{default:c(()=>[o("img",{src:a==null?void 0:a.image_url},null,8,H),l(f,null,{default:c(()=>[o("div",K,p(a==null?void 0:a.name),1),o("div",R,"KM Rate: "+p(a==null?void 0:a.km_rate),1),o("div",j,"DUty Rate : "+p(a==null?void 0:a.duty_rate),1)]),_:2},1024),l(f,{class:"q-pt-none"},{default:c(()=>[o("div",{innerHTML:a.description},null,8,A)]),_:2},1024),l(B,null,{default:c(()=>[l(g,{onClick:n=>D(a),label:"Delete",color:"negative",flat:""},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]))),128))]),o("div",E,[l(U,{"onUpdate:modelValue":[m,e[1]||(e[1]=a=>d(t).listData.current_page=a)],modelValue:d(t).listData.current_page,max:d(v),input:""},null,8,["modelValue","max"])])]),_:1}))}};export{Z as default};
