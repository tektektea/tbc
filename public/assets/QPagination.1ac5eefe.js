var T=Object.defineProperty,A=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(e,l,n)=>l in e?T(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,m=(e,l)=>{for(var n in l||(l={}))R.call(l,n)&&F(e,n,l[n]);if(w)for(var n of w(l))U.call(l,n)&&F(e,n,l[n]);return e},O=(e,l)=>A(e,K(l));import{j as W,a0 as G,a1 as H,r as J,k as u,a2 as X,y as Y,l as S,g as Z,a3 as p,R as ee,u as ae}from"./index.5244c262.js";var ne=W({name:"QPagination",props:O(m({},G),{modelValue:{type:Number,required:!0},min:{type:Number,default:1},max:{type:Number,required:!0},color:{type:String,default:"primary"},textColor:String,activeColor:String,activeTextColor:String,inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},maxPages:{type:Number,default:0,validator:e=>e>=0},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,dense:Boolean,padding:{type:String,default:"3px 2px"}}),emits:["update:modelValue"],setup(e,{emit:l}){const{proxy:n}=ae(),{$q:b}=n,Q=H(e,b),g=J(null),f=u({get:()=>e.modelValue,set:a=>{if(a=parseInt(a,10),e.disable||isNaN(a))return;const t=X(a,e.min,e.max);e.modelValue!==t&&l("update:modelValue",t)}});Y(()=>e.min+e.max,()=>{f.value=e.modelValue});function x(a,t){return[!0,!1].includes(a)?a:t}const q=u(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),V=u(()=>f.value+" / "+e.max),$=u(()=>x(e.boundaryLinks,e.input)),v=u(()=>x(e.boundaryNumbers,!e.input)),z=u(()=>x(e.directionLinks,e.input)),k=u(()=>x(e.ellipses,!e.input)),h=u(()=>{const a=[e.iconFirst||b.iconSet.pagination.first,e.iconPrev||b.iconSet.pagination.prev,e.iconNext||b.iconSet.pagination.next,e.iconLast||b.iconSet.pagination.last];return b.lang.rtl===!0?a.reverse():a}),D=u(()=>e.disable===!0?{"aria-disabled":"true"}:{}),E=u(()=>({round:e.round,rounded:e.rounded,outline:e.outline,unelevated:e.unelevated,push:e.push,glossy:e.glossy,dense:e.dense,padding:e.padding,color:e.color,flat:!0,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),B=u(()=>({flat:e.flat,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor}));function C(a){f.value=a}function I(a){f.value=f.value+a}function P(){f.value=g.value,g.value=null}function o(a,t){const c=m(m({},E.value),a);return t!==void 0&&(e.toFn!==void 0?c.to=e.toFn(t):c.onClick=()=>C(t)),S(Z,c)}return Object.assign(n,{set:C,setByOffset:I}),()=>{const a=[],t=[],c=[];if($.value&&(a.push(o({key:"bls",disable:e.disable||e.modelValue<=e.min,icon:h.value[0]},e.min)),t.unshift(o({key:"ble",disable:e.disable||e.modelValue>=e.max,icon:h.value[3]},e.max))),z.value&&(a.push(o({key:"bdp",disable:e.disable||e.modelValue<=e.min,icon:h.value[1]},e.modelValue-1)),t.unshift(o({key:"bdn",disable:e.disable||e.modelValue>=e.max,icon:h.value[2]},e.modelValue+1))),e.input===!0)c.push(S(ee,{class:"inline",style:{width:`${V.value.length/1.5}em`},type:"number",dense:!0,value:g.value,disable:e.disable,dark:Q.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:V.value,min:e.min,max:e.max,"onUpdate:modelValue"(d){g.value=d},onKeyup(d){p(d,13)===!0&&P()},onBlur:P}));else{let d=Math.max(e.maxPages,1+(k.value?2:0)+(v.value?2:0)),s=e.min,r=e.max,N=!1,M=!1,L=!1,_=!1;e.maxPages&&d<e.max-e.min+1&&(d=1+Math.floor(d/2)*2,s=Math.max(e.min,Math.min(e.max-d+1,e.modelValue-Math.floor(d/2))),r=Math.min(e.max,s+d-1),v.value&&(L=!0,s+=1),k.value&&s>e.min+(v.value?1:0)&&(N=!0,s+=1),v.value&&(_=!0,r-=1),k.value&&r<e.max-(v.value?1:0)&&(M=!0,r-=1));const y={minWidth:`${Math.max(2,String(e.max).length)}em`};if(L){const i=e.min===e.modelValue;a.push(o(m({key:"bns",style:y,disable:e.disable,flat:!i,label:e.min},i?B.value:{}),e.min))}if(_){const i=e.max===e.modelValue;t.unshift(o(m({key:"bne",style:y,disable:e.disable,flat:!i,label:e.max},i?B.value:{}),e.max))}N&&a.push(o({key:"bes",style:y,disable:e.disable,label:"\u2026",ripple:!1},s-1)),M&&t.unshift(o({key:"bee",style:y,disable:e.disable,label:"\u2026",ripple:!1},r+1));for(let i=s;i<=r;i++){const j={key:`bpg${i}`,style:y,disable:e.disable,label:i};i===e.modelValue&&Object.assign(j,B.value),c.push(o(j,i))}}return S("div",m({class:q.value},D.value),[a,S("div",{class:"row justify-center"},[c]),t])}}});export{ne as Q};
