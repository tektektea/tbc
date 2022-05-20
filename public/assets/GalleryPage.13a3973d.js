import{J as C,k as D,q as x,o as d,c as b,w as g,T as m,h as n,f as l,g as i,Y as _,Z as Q,U as p,$ as w}from"./index.c957a6f5.js";import{Q as B}from"./QImg.56aa9d85.js";import{Q as I}from"./QPagination.a56a516b.js";import{Q as V}from"./QPage.f7812483.js";import{u as $}from"./use-quasar.6f123a5e.js";const q=n("p",{class:"title"},"Gallery",-1),P=n("br",null,null,-1),S={class:"q-col-gutter-md row items-start"},U={class:"col-12 flex items-center bg-white"},M=n("p",{class:"text-dark q-ma-md"},"Click here to upload Image",-1),N={class:"col-12"},Y={setup(T){const c=$(),s=C({listData:{per_page:15,data:[],current_page:1,total:1}}),u=o=>{navigator==null||navigator.clipboard.writeText(o),c.notify({type:"positive",message:"Image path copied"})},f=o=>{m.put(`media/gallery/${o.id}`).then(t=>{const{message:a}=t.data;c.notify({type:"positive",message:a}),r(1)}).catch(t=>{var a,e;return c.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},h=o=>r(o),y=D(()=>Math.ceil(s.listData.total/s.listData.per_page)),v=o=>{const{current_page:t,total:a,per_page:e,data:k}=o;s.listData.current_page=t,s.listData.data=k,s.listData.total=a,s.listData.per_page=e},r=o=>{m.get("media/gallery",{params:o}).then(t=>{const{message:a,list:e}=t.data;v(e)}).catch(t=>{var a,e;return c.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>c.loading.hide())};return x(()=>r(1)),(o,t)=>(d(),b(V,null,{default:g(()=>[q,P,n("div",S,[n("div",U,[l(i,{to:{name:"media:upload"},rounded:"",label:"Upload Image",outline:"",color:"primary"}),M]),(d(!0),_(w,null,Q(p(s).listData.data,a=>(d(),_("div",{key:a.id,class:"col-6"},[l(B,{src:a.full_path,"no-native-menu":""},{default:g(()=>[l(i,{color:"negative",onClick:e=>f(a),round:"",icon:"close",class:"absolute all-pointer-events",flat:"",style:{top:"8px",left:"8px"}},null,8,["onClick"])]),_:2},1032,["src"]),l(i,{onClick:e=>u(a==null?void 0:a.thumbnail_path),icon:"content_copy",label:"Copy thumbnail"},null,8,["onClick"]),l(i,{onClick:e=>u(a==null?void 0:a.full_path),icon:"content_copy",label:"Copy original"},null,8,["onClick"])]))),128)),n("div",N,[l(I,{"onUpdate:modelValue":[h,t[0]||(t[0]=a=>p(s).listData.current_page=a)],modelValue:p(s).listData.current_page,max:p(y),input:""},null,8,["modelValue","max"])])])]),_:1}))}};export{Y as default};