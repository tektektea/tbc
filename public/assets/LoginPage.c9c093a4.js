import{Q as m}from"./QImg.ac5cb675.js";import{af as _,ae as y,ag as b,I as x,p as v,o as V,X as D,h as d,f as a,w as Q,S as q,W as B,V as u,T as r,g as c}from"./index.d49de93d.js";import{Q as S}from"./QForm.dfda63a1.js";import{_ as k}from"./logo.9361aec2.js";import{u as E}from"./use-quasar.4b809612.js";var I="/assets/login.5b35ccd0.svg";const j={class:"bg-grey-1 flex items-center justify-center fullscreen"},A={style:{width:"650px"},class:"row shadow-5 rounded-borders bg-white"},L={class:"col-xs-12 col-sm-6 flex justify-center items-center"},N={class:"col-xs-12 col-sm-6 bg-secondary"},T={setup(P){const i=E(),n=_(),p=y(),{setLoginData:f,isAuthenticated:h}=b(),t=x({formData:{email:"",password:""}}),g=w=>{const{query:e}=p;i.loading.show(),q.post("auth/login",t.formData).then(s=>{const{user:o,token:l}=s.data;f(l,o),n.push((e==null?void 0:e.redirect)||"admin")}).catch(s=>{var o,l;return i.notify({type:"negative",message:((l=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:l.message)||s.toString()})}).finally(()=>i.loading.hide())};return v(()=>{h&&n.push({name:"dashboard"})}),(w,e)=>(V(),D("div",j,[d("div",A,[d("div",L,[a(S,{onSubmit:g,class:"text-center q-ma-md relative-position"},{default:Q(()=>[a(m,{style:{width:"70px"},src:k}),a(B,{class:"full-width q-my-md"}),a(u,{outlined:"",type:"email",modelValue:r(t).formData.email,"onUpdate:modelValue":e[0]||(e[0]=s=>r(t).formData.email=s),label:"Email",rules:[s=>!!s||"Email is required"]},null,8,["modelValue","rules"]),a(u,{outlined:"",class:"q-my-md",type:"password",modelValue:r(t).formData.password,"onUpdate:modelValue":e[1]||(e[1]=s=>r(t).formData.password=s),label:"Password",rules:[s=>!!s||"Password is required"]},null,8,["modelValue","rules"]),a(c,{type:"submit",color:"primary",class:"full-width",rounded:"",label:"Login"}),a(c,{to:{name:"home"},label:"Back to home",flat:"",class:"full-width"})]),_:1})]),d("div",N,[a(m,{style:{width:"240px"},src:I})])])]))}};export{T as default};
