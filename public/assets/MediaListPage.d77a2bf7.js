import{I as y,k as x,p as k,o as p,c as Q,w as r,N as u,h as l,f as i,g,T as m,U as V,P as c,V as B,L as C}from"./index.67db5a7e.js";import{Q as P}from"./QImg.6d80a676.js";import{Q as b}from"./QPagination.33bbc2f8.js";import{Q as w}from"./QPage.4637a194.js";import{u as I}from"./use-quasar.71312e04.js";const S=l("h1",{class:"title"},"Media",-1),q={class:"q-col-gutter-md row items-start"},M={class:"col-12 flex items-center bg-white"},N=l("p",{class:"text-dark q-ma-md"},"Click here to upload image",-1),U={class:"col-12"},z={setup(L){const n=I(),s=y({listData:{per_page:15,data:[],current_page:1,total:1}}),_=o=>{u.delete(`media/${o.id}`).then(t=>{const{message:a}=t.data;n.notify({type:"positive",message:a}),d(0)}).catch(t=>{var a,e;return n.notify({type:"negative",message:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})})},f=o=>d(o),h=x(()=>Math.ceil(s.listData.total/s.listData.per_page)),D=o=>{const{current_page:t,total:a,per_page:e,data:v}=o;s.listData.current_page=t,s.listData.data=v,s.listData.total=a,s.listData.per_page=e},d=o=>{u.get("media/index",{params:o}).then(t=>{const{message:a,list:e}=t.data;D(e)}).catch(t=>{var a,e;return n.notify({type:"negative",message:((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||t.toString()})}).finally(()=>n.loading.hide())};return k(()=>d(1)),(o,t)=>(p(),Q(w,null,{default:r(()=>[S,l("div",q,[l("div",M,[i(g,{to:{name:"media:upload"},rounded:"",label:"Upload Image",outline:"",color:"primary"}),N]),(p(!0),m(B,null,V(c(s).listData.data,a=>(p(),m("div",{key:a.id,class:"col-6"},[i(P,{src:a.full_path,"no-native-menu":""},{default:r(()=>[i(g,{onClick:e=>_(a),round:"",icon:"delete",class:"absolute all-pointer-events",flat:"",style:{top:"8px",left:"8px"}},null,8,["onClick"])]),_:2},1032,["src"]),l("p",null,C(a==null?void 0:a.thumbnail_path),1)]))),128)),l("div",U,[i(b,{"onUpdate:modelValue":[f,t[0]||(t[0]=a=>c(s).listData.current_page=a)],modelValue:c(s).listData.current_page,max:c(h),input:""},null,8,["modelValue","max"])])])]),_:1}))}};export{z as default};
