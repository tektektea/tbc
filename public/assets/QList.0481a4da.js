var i=Object.defineProperty,u=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(e,a,s)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,o=(e,a)=>{for(var s in a||(a={}))m.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))p.call(a,s)&&r(e,s,a[s]);return e},n=(e,a)=>u(e,c(a));import{j as q,a5 as v,a6 as k,k as g,l as B,m as b,v as D}from"./index.301fe4b6.js";var h=q({name:"QList",props:n(o({},v),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const s=D(),d=k(e,s.proxy.$q),l=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>B("div",{class:l.value},b(a.default))}});export{h as Q};
