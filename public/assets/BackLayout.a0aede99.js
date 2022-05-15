import{_ as T,d as k,a as A,ac as N,ad as I,I as L,b as f,o as s,c as m,w as e,e as S,N as w,f as t,Q as x,g as M,h as c,T as h,U as v,V as g,S as B,i as r,O as Q,L as b}from"./index.5c86de95.js";import{Q as E,a as R,b as V,c as $,d as D,e as F}from"./QLayout.ee2c5120.js";import{Q as n}from"./QItemLabel.54c30435.js";import{Q as i,a as o}from"./QItem.38ec3fa3.js";import{Q as O}from"./QList.d3ce400a.js";import{Q as P}from"./QPage.87ecf7e3.js";import{u as G}from"./use-quasar.20adbb22.js";import{_ as H}from"./logo.9361aec2.js";const j=k({components:{Footer:A(()=>S(()=>import("./Footer.0413dc97.js"),["assets/Footer.0413dc97.js","assets/QItemLabel.54c30435.js","assets/index.5c86de95.js","assets/index.f425d93f.css","assets/QItem.38ec3fa3.js","assets/QImg.4054e834.js","assets/logo.9361aec2.js"]))},setup(l,u){G();const p=N(),{setLoginData:d}=I();return{localState:L({cmsMenus:[{id:1,title:"Vehicles",route:"vehicle:list",icon:"car_rental"},{id:2,title:"Privacy policy",route:"privacy:detail",icon:"description"},{id:2,title:"Gallery",route:"gallery:list",icon:"image"},{id:3,title:"Terms and Conditions",route:"term:detail",icon:"thumb_up_alt"},{id:4,title:"About",route:"about:detail",icon:"self_improvement"},{id:5,title:"Contact",route:"contact:detail",icon:"contact_page"},{id:6,title:"Testimonials",route:"testimonial:list",icon:"chat"}],adminMenus:[{id:1,title:"Accounts",route:"account:list",icon:"supervisor_account"},{id:2,title:"Our Events",route:"event:list",icon:"event_available"},{id:3,title:"Media",route:"media:list",icon:"image"},{id:4,title:"Contact Request",route:"contact-request:list",icon:"phone"}]}),logout:()=>{w.post("auth/logout").then(_=>{d(null,null),p.replace({name:"home"})}).catch(_=>{d(null,null)})}}}}),U=c("img",{src:H},null,-1),z=r(" TBC Car Rental "),J={class:"row q-col-gutter-sm container q-pa-md"},K={class:"col-3 bg-white rounded-borders"},W=r("CONTENT MANAGEMENT"),X=r("ADMINISTRATION"),Y={class:"col-9"};function Z(l,u,p,d,y,q){const _=f("router-view"),C=f("Footer");return s(),m(E,{view:"hHh lpR fff"},{default:e(()=>[t($,{class:"header flex justify-center text-primary"},{default:e(()=>[t(R,{class:"container",style:{height:"70px"}},{default:e(()=>[t(V,{onClick:u[0]||(u[0]=a=>l.$router.replace({name:"home"})),class:"text-bold cursor-pointer"},{default:e(()=>[t(x,{class:"q-mr-lg"},{default:e(()=>[U]),_:1}),z]),_:1}),t(M,{onClick:l.logout,color:"danger",label:"Logout",flat:"",rounded:""},null,8,["onClick"])]),_:1})]),_:1}),t(D,{class:"q-pa-sm bg-grey-1"},{default:e(()=>[t(P,null,{default:e(()=>[c("div",J,[c("div",K,[t(O,{class:"shadow-0 q-pa-xs"},{default:e(()=>[t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,null,{default:e(()=>[W]),_:1})]),_:1})]),_:1}),(s(!0),h(g,null,v(l.localState.cmsMenus,a=>(s(),m(i,{to:{name:a.route},clickable:"",key:a.id,class:"q-pa-xs"},{default:e(()=>[t(o,{avatar:"",class:"q-pa-none q-ma-none"},{default:e(()=>[t(Q,{color:"dark",name:a.icon},null,8,["name"])]),_:2},1024),t(o,null,{default:e(()=>[t(n,null,{default:e(()=>[r(b(a==null?void 0:a.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128)),t(B,{class:"q-my-md"}),t(i,null,{default:e(()=>[t(o,null,{default:e(()=>[t(n,null,{default:e(()=>[X]),_:1})]),_:1})]),_:1}),(s(!0),h(g,null,v(l.localState.adminMenus,a=>(s(),m(i,{to:{name:a.route},clickable:"",key:a.id},{default:e(()=>[t(o,{avatar:"",class:"q-pa-none q-ma-none"},{default:e(()=>[t(Q,{color:"dark",name:a.icon},null,8,["name"])]),_:2},1024),t(o,null,{default:e(()=>[t(n,null,{default:e(()=>[r(b(a==null?void 0:a.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),c("div",Y,[t(_,{class:"q-pa-md"})])])]),_:1})]),_:1}),t(F,null,{default:e(()=>[t(C)]),_:1})]),_:1})}var it=T(j,[["render",Z]]);export{it as default};
