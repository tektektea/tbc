import{I as D,k,p as x,o as p,c as Q,w as d,S as u,h as l,f as i,g,X as m,Y as b,T as c,Z as B,L as C}from"./index.17306579.js";import{Q as I}from"./QImg.dd19ea48.js";import{Q as S}from"./QPagination.ef41f5a3.js";import{Q as V}from"./QPage.c6818e93.js";import{u as w}from"./use-quasar.64290232.js";const P=l("p",{class:"title"},"Gallery",-1),q=l("br",null,null,-1),L={class:"q-col-gutter-md row items-start"},M={class:"col-12 flex items-center bg-white"},N=l("p",{class:"text-dark q-ma-md"},"Click here to upload Image",-1),U={class:"col-12"},Y={setup($){const n=w(),s=D({listData:{per_page:15,data:[],current_page:1,total:1}}),_=o=>{u.put(`media/gallery/${o.id}`).then(t=>{const{message:a}=t.data;n.notify({type:"positive",message:a}),r(1)}).catch(t=>{var a,e;return n.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},f=o=>r(o),h=k(()=>Math.ceil(s.listData.total/s.listData.per_page)),y=o=>{const{current_page:t,total:a,per_page:e,data:v}=o;s.listData.current_page=t,s.listData.data=v,s.listData.total=a,s.listData.per_page=e},r=o=>{u.get("media/gallery",{params:o}).then(t=>{const{message:a,list:e}=t.data;y(e)}).catch(t=>{var a,e;return n.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>n.loading.hide())};return x(()=>r(1)),(o,t)=>(p(),Q(V,null,{default:d(()=>[P,q,l("div",L,[l("div",M,[i(g,{to:{name:"media:upload"},rounded:"",label:"Upload Image",outline:"",color:"primary"}),N]),(p(!0),m(B,null,b(c(s).listData.data,a=>(p(),m("div",{key:a.id,class:"col-6"},[i(I,{src:a.full_path,"no-native-menu":""},{default:d(()=>[i(g,{color:"negative",onClick:e=>_(a),round:"",icon:"close",class:"absolute all-pointer-events",flat:"",style:{top:"8px",left:"8px"}},null,8,["onClick"])]),_:2},1032,["src"]),l("p",null,C(a==null?void 0:a.thumbnail_path),1)]))),128)),l("div",U,[i(S,{"onUpdate:modelValue":[f,t[0]||(t[0]=a=>c(s).listData.current_page=a)],modelValue:c(s).listData.current_page,max:c(h),input:""},null,8,["modelValue","max"])])])]),_:1}))}};export{Y as default};
