import{ac as c,I as g,o as b,c as V,w as d,f as r,R as s,P as o,aD as y,h as n,g as u,N as D}from"./index.5c86de95.js";import{Q as _}from"./QEditor.34df1981.js";import{Q as q}from"./QForm.240c16ae.js";import{Q as w}from"./QPage.87ecf7e3.js";import{u as h}from"./use-quasar.20adbb22.js";import"./use-fullscreen.dc35d85b.js";import"./QItem.38ec3fa3.js";const k=n("p",{class:"title"},"Vehicle ",-1),v=n("br",null,null,-1),S={class:"flex q-gutter-sm q-my-md"},C={setup(Q){const i=h(),m=c(),t=g({formData:{name:"",image_url:"",km_rate:0,duty_rate:0,description:"",decorated:!1}}),p=l=>{i.loading.show(),D.post("vehicle",t.formData).then(a=>{const{message:e}=a.data;i.notify({type:"positive",message:e}),setTimeout(()=>{m.replace({name:"vehicle:list"})},500)}).catch(a=>i.notify({type:"negative",message:a.response.data.message||a.toString()})).finally(()=>i.loading.hide())},f=l=>{Object.assign(t.formData,{name:"",image_url:"",km_rate:0,duty_rate:0,description:"",decorated:!1})};return(l,a)=>(b(),V(w,null,{default:d(()=>[k,v,r(q,{onSubmit:p,onReset:f,class:"bg-white"},{default:d(()=>[r(s,{modelValue:o(t).formData.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o(t).formData.name=e),outlined:"",label:"Name",rules:[e=>!!e||"Name is required"]},null,8,["modelValue","rules"]),r(s,{modelValue:o(t).formData.image_url,"onUpdate:modelValue":a[1]||(a[1]=e=>o(t).formData.image_url=e),type:"url",outlined:"",label:"Image url",rules:[e=>!!e||"URL is required"]},null,8,["modelValue","rules"]),r(s,{modelValue:o(t).formData.km_rate,"onUpdate:modelValue":a[2]||(a[2]=e=>o(t).formData.km_rate=e),type:"number",outlined:"",label:"Rate per KM",rules:[e=>!!e||"KM rate is required"]},null,8,["modelValue","rules"]),r(s,{modelValue:o(t).formData.duty_rate,"onUpdate:modelValue":a[3]||(a[3]=e=>o(t).formData.duty_rate=e),outlined:"",label:"Duty Rate",rules:[e=>!!e||"Duty Rate is required"]},null,8,["modelValue","rules"]),r(_,{modelValue:o(t).formData.description,"onUpdate:modelValue":a[4]||(a[4]=e=>o(t).formData.description=e),dense:l.$q.screen.lt.md,toolbar:[[{label:l.$q.lang.editor.align,icon:l.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],[{label:l.$q.lang.editor.formatting,icon:l.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:l.$q.lang.editor.fontSize,icon:l.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:l.$q.lang.editor.defaultFont,icon:l.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"]),r(y,{modelValue:o(t).formData.decorated,"onUpdate:modelValue":a[5]||(a[5]=e=>o(t).formData.decorated=e),label:"I like to display as feature images"},null,8,["modelValue"]),n("div",S,[r(u,{style:{"min-width":"120px"},color:"primary",type:"submit",label:"Save",rounded:""}),r(u,{style:{"min-width":"120px"},color:"negative",outline:"",type:"reset",label:"Reset",rounded:""})])]),_:1})]),_:1}))}};export{C as default};
