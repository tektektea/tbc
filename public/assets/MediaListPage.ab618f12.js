import{J as x,k as C,q as D,o as r,c as b,w as g,T as m,h as i,f as n,g as c,Y as _,Z as Q,U as p,$ as w}from"./index.e058ad87.js";import{Q as B}from"./QImg.cd50de6b.js";import{Q as V}from"./QPagination.9478a4d1.js";import{Q as $}from"./QPage.7570ba6e.js";import{u as q}from"./use-quasar.b18e3096.js";const I=i("h1",{class:"title"},"Media",-1),P={class:"q-col-gutter-md row items-start"},M={class:"col-12 flex items-center bg-white"},S=i("p",{class:"text-dark q-ma-md"},"Click here to upload image",-1),U={class:"col-12"},Y={setup(N){const l=q(),s=x({listData:{per_page:15,data:[],current_page:1,total:1}}),h=o=>{m.delete(`media/${o.id}`).then(t=>{const{message:a}=t.data;l.notify({type:"positive",message:a}),d(0)}).catch(t=>{var a,e;return l.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},f=o=>d(o),y=C(()=>Math.ceil(s.listData.total/s.listData.per_page)),v=o=>{const{current_page:t,total:a,per_page:e,data:k}=o;s.listData.current_page=t,s.listData.data=k,s.listData.total=a,s.listData.per_page=e},u=o=>{navigator==null||navigator.clipboard.writeText(o),l.notify({type:"positive",message:"Image path copied"})},d=o=>{m.get("media/index",{params:o}).then(t=>{const{message:a,list:e}=t.data;v(e)}).catch(t=>{var a,e;return l.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>l.loading.hide())};return D(()=>d(1)),(o,t)=>(r(),b($,null,{default:g(()=>[I,i("div",P,[i("div",M,[n(c,{to:{name:"media:upload"},rounded:"",label:"Upload Image",outline:"",color:"primary"}),S]),(r(!0),_(w,null,Q(p(s).listData.data,a=>(r(),_("div",{key:a.id,class:"col-6"},[n(B,{src:a.thumbnail_path,"no-native-menu":""},{default:g(()=>[n(c,{onClick:e=>h(a),round:"",icon:"delete",class:"absolute all-pointer-events",flat:"",style:{top:"8px",left:"8px"}},null,8,["onClick"])]),_:2},1032,["src"]),n(c,{onClick:e=>u(a==null?void 0:a.thumbnail_path),icon:"content_copy",label:"Copy thumbnail"},null,8,["onClick"]),n(c,{onClick:e=>u(a==null?void 0:a.full_path),icon:"content_copy",label:"Copy original"},null,8,["onClick"])]))),128)),i("div",U,[n(V,{"onUpdate:modelValue":[f,t[0]||(t[0]=a=>p(s).listData.current_page=a)],modelValue:p(s).listData.current_page,max:p(y),input:""},null,8,["modelValue","max"])])])]),_:1}))}};export{Y as default};
