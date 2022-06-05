var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var R=(e,a,i)=>a in e?W(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,f=(e,a)=>{for(var i in a||(a={}))Z.call(a,i)&&R(e,i,a[i]);if(D)for(var i of D(a))ee.call(a,i)&&R(e,i,a[i]);return e},h=(e,a)=>X(e,Y(a));import{j as z,a5 as te,aE as ae,a6 as le,aF as ie,k as o,aA as ne,aG as ue,v as O,l as r,V as F,aH as oe,ai as se,aI as ce,aJ as de,aK as re,aL as me,aM as fe,aN as ve,r as k,aO as ge,aP as be,aQ as he,aR as j,aS as ye,aT as xe,aq as Se,o as Ce,c as _e,w as V,f as x,aU as qe,g as Ve,h as L,i as Fe,T as ke}from"./index.e058ad87.js";import{Q as pe}from"./QForm.26629945.js";import{Q as Be}from"./QPage.7570ba6e.js";import{u as Ie}from"./use-quasar.b18e3096.js";const Qe={xs:8,sm:10,md:14,lg:20,xl:24};var we=z({name:"QChip",props:h(f(f({},te),ae),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:a,emit:i}){const{proxy:{$q:v}}=O(),y=le(e,v),u=ie(e,Qe),c=o(()=>e.selected===!0||e.icon!==void 0),s=o(()=>e.selected===!0?e.iconSelected||v.iconSet.chip.selected:e.icon),g=o(()=>e.iconRemove||v.iconSet.chip.remove),b=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),p=o(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(b.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(y.value===!0?" q-chip--dark q-dark":"")}),S=o(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function B(l){l.keyCode===13&&C(l)}function C(l){e.disable||(i("update:selected",!e.selected),i("click",l))}function _(l){(l.keyCode===void 0||l.keyCode===13)&&(se(l),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function n(){const l=[];b.value===!0&&l.push(r("div",{class:"q-focus-helper"})),c.value===!0&&l.push(r(F,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const I=e.label!==void 0?[r("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(r("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},oe(a.default,I))),e.iconRight&&l.push(r(F,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(r(F,h(f({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value},S.value),{onClick:_,onKeyup:_}))),l}return()=>{if(e.modelValue===!1)return;const l={class:p.value,style:u.value};return b.value===!0&&Object.assign(l,S.value,{onClick:C,onKeyup:B}),ne("div",l,n(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ue,e.ripple]])}}}),Ne=z({name:"QFile",inheritAttrs:!1,props:h(f(f(f({},ce),de),re),{modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...me,...fe],setup(e,{slots:a,emit:i,attrs:v}){const{proxy:y}=O(),u=ve(),c=k(null),s=k(!1),g=ge(e),{pickFiles:b,onDragover:p,onDragleave:S,processFiles:B,getDndNode:C}=be({editable:u.editable,dnd:s,getFileInput:M,addFilesToQueue:A}),_=he(e),n=o(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),l=o(()=>j(n.value)),I=o(()=>n.value.map(t=>t.name).join(", ")),N=o(()=>ye(n.value.reduce((t,d)=>t+d.size,0))),U=o(()=>({totalSize:N.value,filesNumber:n.value.length,maxFiles:e.maxFiles})),$=o(()=>h(f({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:g.value},v),{id:u.targetUid.value,disabled:u.editable.value!==!0})),P=o(()=>e.multiple===!0&&e.append===!0);function Q(t){const d=n.value.slice();d.splice(t,1),w(d)}function K(t){const d=n.value.findIndex(t);d>-1&&Q(d)}function w(t){i("update:modelValue",e.multiple===!0?t:t[0])}function E(t){t.keyCode===13&&Se(t)}function T(t){(t.keyCode===13||t.keyCode===32)&&b(t)}function M(){return c.value}function A(t,d){const m=B(t,d,n.value,P.value);m!==void 0&&((e.multiple===!0?e.modelValue&&m.every(J=>n.value.includes(J)):e.modelValue===m[0])||w(P.value===!0?n.value.concat(m):m))}function q(){return[r("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function G(){if(a.file!==void 0)return n.value.length===0?q():n.value.map((d,m)=>a.file({index:m,file:d,ref:this}));if(a.selected!==void 0)return n.value.length===0?q():a.selected({files:n.value,ref:this});if(e.useChips===!0)return n.value.length===0?q():n.value.map((d,m)=>r(we,{key:"file-"+m,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{Q(m)}},()=>r("span",{class:"ellipsis",textContent:d.name})));const t=e.displayValue!==void 0?e.displayValue:I.value;return t.length>0?[r("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:q()}function H(){const t=h(f(f({ref:c},$.value),_.value),{class:"q-field__input fit absolute-full cursor-pointer",onChange:A});return e.multiple===!0&&(t.multiple=!0),r("input",t)}return Object.assign(u,{fieldClass:{value:"q-file q-field--auto-height"},emitValue:w,hasValue:l,inputRef:c,innerValue:n,floatingLabel:o(()=>l.value===!0||j(e.displayValue)),computedCounter:o(()=>{if(e.counterLabel!==void 0)return e.counterLabel(U.value);const t=e.maxFiles;return`${n.value.length}${t!==void 0?" / "+t:""} (${N.value})`}),getControlChild:()=>C("file"),getControl:()=>{const t={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(t,{onDragover:p,onDragleave:S,onKeydown:E,onKeyup:T}),r("div",t,[H()].concat(G()))}}),Object.assign(y,{removeAtIndex:Q,removeFile:K,getNativeElement:()=>c.value}),xe(u)}});const Pe=L("h1",{class:"title"},"Upload Image",-1),Ae=Fe(" 4md is Maximum size of image "),De=L("br",null,null,-1),Ue={setup(e){const a=Ie(),i=k(null),v=k(!1),y=()=>{a.loading.show();let u=new FormData;const c={headers:{enctype:"multipart/form-data"}};u.append("gallery_image",v.value),u.append("attachment",i.value),ke.post("media",u,c).then(s=>{const{message:g}=s.data;a.notify({type:"positive",message:g}),i.value=null}).catch(s=>{var g,b;return a.notify({type:"negative",message:((b=(g=s==null?void 0:s.response)==null?void 0:g.data)==null?void 0:b.message)||s.toString()})}).finally(()=>a.loading.hide())};return(u,c)=>(Ce(),_e(Be,null,{default:V(()=>[Pe,x(pe,{onSubmit:y,flat:"",class:"bg-white q-pa-md"},{default:V(()=>[x(Ne,{accept:"image/*","max-file-size":"4048576",filled:"","bottom-slots":"",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=s=>i.value=s),label:"Upload Image"},{before:V(()=>[x(F,{name:"image"})]),hint:V(()=>[Ae]),_:1},8,["modelValue"]),x(qe,{modelValue:v.value,"onUpdate:modelValue":c[1]||(c[1]=s=>v.value=s),label:"Do you want to display in gallery?"},null,8,["modelValue"]),De,x(Ve,{class:"q-mt-md",type:"submit",label:"Upload",color:"primary",icon:"send"})]),_:1})]),_:1}))}};export{Ue as default};
