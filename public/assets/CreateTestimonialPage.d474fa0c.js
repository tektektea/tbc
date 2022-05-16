import{I as f,o as c,c as q,w as r,f as s,V as m,T as l,W as V,h as n,g as d,S as y}from"./index.7b70c0b8.js";import{Q as D}from"./QForm.3d6a2f76.js";import{Q as b}from"./QPage.ac60cf0c.js";import{u as Q}from"./use-quasar.8c5294cc.js";const _=n("p",{class:"title"},"New testimony",-1),w=n("br",null,null,-1),h={class:"q-gutter-sm"},B={setup(v){const o=Q(),t=f({formData:{name:"",designation:"",quote:"",image_url:""}}),p=()=>{Object.assign(t.formData,{name:"",designation:"",quote:"",image_url:""})},g=u=>{o.loading.show(),y.post("testimony",t.formData).then(a=>{const{message:e}=a.data;u.target.reset(),o.notify({type:"positive",message:e})}).catch(a=>{var e,i;return o.notify({type:"negative",message:((i=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:i.message)||a.toString()})}).finally(()=>o.loading.hide())};return(u,a)=>(c(),q(b,null,{default:r(()=>[_,w,s(D,{onSubmit:g,onReset:p,class:"column q-gutter-sm q-pa-md bg-white"},{default:r(()=>[s(m,{class:"q-mt-sm",modelValue:l(t).formData.name,"onUpdate:modelValue":a[0]||(a[0]=e=>l(t).formData.name=e),outlined:"",rules:[e=>!!e||"Name is required"],label:"Name"},null,8,["modelValue","rules"]),s(m,{class:"q-mt-sm",modelValue:l(t).formData.designation,"onUpdate:modelValue":a[1]||(a[1]=e=>l(t).formData.designation=e),outlined:"",rules:[e=>!!e||"Designation is required"],label:"Designation"},null,8,["modelValue","rules"]),s(m,{class:"q-mt-sm",type:"textarea",modelValue:l(t).formData.quote,"onUpdate:modelValue":a[2]||(a[2]=e=>l(t).formData.quote=e),outlined:"",rules:[e=>!!e||"Quote is required"],label:"Quote"},null,8,["modelValue","rules"]),s(m,{class:"q-mt-sm",modelValue:l(t).formData.image_url,"onUpdate:modelValue":a[3]||(a[3]=e=>l(t).formData.image_url=e),outlined:"",rules:[e=>!!e||"Image url is required"],label:"Image Url"},null,8,["modelValue","rules"]),s(V,{class:"full-width q-my-sm"}),n("div",h,[s(d,{style:{"min-width":"120px"},type:"submit",label:"save",color:"primary",rounded:""}),s(d,{style:{"min-width":"120px"},type:"reset",label:"cancel",color:"negative",outline:"",rounded:""})])]),_:1})]),_:1}))}};export{B as default};
