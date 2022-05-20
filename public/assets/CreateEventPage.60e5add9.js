import{J as f,o as b,c as g,w as d,f as i,W as s,U as l,X as h,h as r,g as u,T as q}from"./index.c957a6f5.js";import{Q as w}from"./QEditor.c97dde3b.js";import{Q as V}from"./QForm.4209f9f2.js";import{Q as _}from"./QPage.f7812483.js";import{u as D}from"./use-quasar.6f123a5e.js";import"./selection.3a26f61e.js";import"./QItemSection.9c5f9b14.js";import"./use-fullscreen.4a026d4e.js";const v=r("p",{class:"title"},"New Event",-1),y=r("br",null,null,-1),S={class:"q-gutter-sm"},C={setup(Q){const n=D(),o=f({formData:{title:"",description:"",content:"",thumbnail_path:""}}),c=()=>{Object.assign(o.formData,{title:"",description:"",content:"",thumbnail_path:""})},p=a=>{n.loading.show(),q.post("event",o.formData).then(t=>{const{message:e}=t.data;a.target.reset(),n.notify({type:"positive",message:e})}).catch(t=>{var e,m;return n.notify({type:"negative",message:((m=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:m.message)||t.toString()})}).finally(()=>n.loading.hide())};return(a,t)=>(b(),g(_,null,{default:d(()=>[v,y,i(V,{onSubmit:p,onReset:c,class:"column q-gutter-sm q-pa-md bg-white"},{default:d(()=>[i(s,{class:"q-mt-sm",modelValue:l(o).formData.title,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).formData.title=e),outlined:"",rules:[e=>!!e||"Title is required"],label:"Title"},null,8,["modelValue","rules"]),i(s,{class:"q-mt-sm",modelValue:l(o).formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).formData.description=e),outlined:"",rules:[e=>!!e||"Description is required"],label:"Description"},null,8,["modelValue","rules"]),i(s,{class:"q-mt-sm",modelValue:l(o).formData.thumbnail_path,"onUpdate:modelValue":t[2]||(t[2]=e=>l(o).formData.thumbnail_path=e),outlined:"",rules:[e=>!!e||"Image url is required"],label:"Thumbnail Url"},null,8,["modelValue","rules"]),i(w,{modelValue:l(o).formData.content,"onUpdate:modelValue":t[3]||(t[3]=e=>l(o).formData.content=e),dense:a.$q.screen.lt.md,toolbar:[[{label:a.$q.lang.editor.align,icon:a.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],[{label:a.$q.lang.editor.formatting,icon:a.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:a.$q.lang.editor.fontSize,icon:a.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:a.$q.lang.editor.defaultFont,icon:a.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"]),i(h,{class:"full-width q-my-sm"}),r("div",S,[i(u,{style:{"min-width":"120px"},type:"submit",label:"save",color:"primary",rounded:""}),i(u,{style:{"min-width":"120px"},type:"reset",label:"cancel",color:"negative",outline:"",rounded:""})])]),_:1})]),_:1}))}};export{C as default};
