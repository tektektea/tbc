import{Q as c}from"./QEditor.9e6e5c46.js";import{ag as u,r as m,q as p,T as r,o as f,c as g,w as b,h as n,f as l,g as h}from"./index.e058ad87.js";import{Q as q}from"./QPage.7570ba6e.js";import{u as _}from"./use-quasar.b18e3096.js";import"./selection.1e901efe.js";import"./QItemSection.34480467.js";import"./use-fullscreen.c7bb5ace.js";const w=n("p",{class:"title"},"Edit Contact us",-1),v=n("br",null,null,-1),$={class:"q-pa-md q-gutter-sm"},L={setup(y){const t=_();u();const a=m(""),d=e=>{t.loading.show(),r.put("web-resource/contact",{content:a.value}).then(o=>{const{message:i}=o.data;t.notify({type:"positive",message:i})}).catch(o=>{var i,s;return t.notify({type:"negative",message:((s=(i=o.response)==null?void 0:i.data)==null?void 0:s.message)||o.toString()})}).finally(()=>t.loading.hide())};return p(()=>{t.loading.show(),r.get("web-resource/contact").then(e=>{const{data:o}=e.data;a.value=o.content}).finally(()=>t.loading.hide())}),(e,o)=>(f(),g(q,null,{default:b(()=>[w,v,n("div",$,[l(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value=i),dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"]),l(h,{onClick:d,color:"primary",label:"Update"})])]),_:1}))}};export{L as default};
