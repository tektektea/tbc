var $=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var w=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&w(e,n,t[n]);if(C)for(var n of C(t))L.call(t,n)&&w(e,n,t[n]);return e},v=(e,t)=>E(e,F(t));import{k as d,j as M,r as o,y as O,s as P,l as r,a2 as U,m as W,a3 as x}from"./index.17306579.js";const A={ratio:[String,Number]};function D(e,t){return d(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const G=16/9;var V=M({name:"QImg",props:v(m({},A),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:G},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:t,emit:n}){const h=o(e.initialRatio),S=D(e,h);let l;const a=[o(null),o(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=o(0),c=o(!1),g=o(!1),T=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=d(()=>({width:e.width,height:e.height})),N=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=d(()=>v(m({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));O(()=>y(),_);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(i){if(clearTimeout(l),g.value=!1,i===null){c.value=!1,a[0].value=null,a[1].value=null;return}c.value=!0,a[s.value].value=i}function B({target:i}){l!==null&&(clearTimeout(l),h.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,b(i,1))}function b(i,u){l===null||u===1e3||(i.complete===!0?R(i):l=setTimeout(()=>{b(i,u+1)},50))}function R(i){l!==null&&(s.value=s.value===1?0:1,a[s.value].value=null,c.value=!1,g.value=!1,n("load",i.currentSrc||i.src))}function j(i){clearTimeout(l),c.value=!1,g.value=!0,a[0].value=null,a[1].value=null,n("error",i)}function I(i,u){return r("div",{class:"q-img__container absolute-full",key:i},u)}function q(i){const u=a[i].value,f=m({key:"img_"+i,class:N.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable},u);return s.value===i?(f.class+=" q-img__image--waiting",Object.assign(f,{onLoad:B,onError:j})):f.class+=" q-img__image--loaded",I("img"+i,r("img",f))}function Q(){return c.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},W(t[g.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[r(x,{color:e.spinnerColor,size:e.spinnerSize})])}return _(y()),P(()=>{clearTimeout(l),l=null}),()=>{const i=[];return S.value!==null&&i.push(r("div",{key:"filler",style:S.value})),g.value!==!0&&(a[0].value!==null&&i.push(q(0)),a[1].value!==null&&i.push(q(1))),i.push(r(U,{name:"q-transition--fade"},Q)),r("div",{class:T.value,style:z.value,role:"img","aria-label":e.alt},i)}}});export{V as Q};
