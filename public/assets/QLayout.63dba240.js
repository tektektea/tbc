var Y=Object.defineProperty;var W=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var D=(e,d,o)=>d in e?Y(e,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[d]=o,M=(e,d)=>{for(var o in d||(d={}))Z.call(d,o)&&D(e,o,d[o]);if(W)for(var o of W(d))ee.call(d,o)&&D(e,o,d[o]);return e};import{j as $,k as f,l as g,m as _,r as S,p as k,q as R,s as I,t as H,u as U,v as Q,x as E,y as N,z,A as te,B as O,C as G,D as oe,E as J,F as ne,G as le,H as ie,I as F,J as V,K as ae}from"./index.47b7fabf.js";var fe=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:o.value},_(d.default))}}),ve=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:o.value},_(d.default))}});function re(){const e=S(!k.value);return e.value===!1&&R(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",A=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var P=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let o=null,n,t={width:-1,height:-1};function r(u){u===!0||e.debounce===0||e.debounce==="0"?c():o===null&&(o=setTimeout(c,e.debounce))}function c(){if(clearTimeout(o),o=null,n){const{offsetWidth:u,offsetHeight:s}=n;(u!==t.width||s!==t.height)&&(t={width:u,height:s},d("resize",t))}}const m=Q();if(Object.assign(m.proxy,{trigger:r}),X===!0){let u;return R(()=>{I(()=>{n=m.proxy.$el.parentNode,n&&(u=new ResizeObserver(r),u.observe(n),c())})}),H(()=>{clearTimeout(o),u!==void 0&&(u.disconnect!==void 0?u.disconnect():n&&u.unobserve(n))}),U}else{let w=function(){clearTimeout(o),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",r,E.passive),s=void 0)},b=function(){w(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",r,E.passive),c())};const u=re();let s;return R(()=>{I(()=>{n=m.proxy.$el,n&&b()})}),H(w),()=>{if(u.value===!0)return g("object",{style:A.style,tabindex:-1,type:"text/html",data:A.url,"aria-hidden":"true",onLoad:b})}}}}),he=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:o}){const{proxy:{$q:n}}=Q(),t=N(O,()=>{console.error("QHeader needs to be child of QLayout")}),r=S(parseInt(e.heightHint,10)),c=S(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),u=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?r.value:0;const i=r.value-t.scroll.value.position;return i>0?i:0}),s=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),w=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=f(()=>{const i=t.rows.value.top,p={};return i[0]==="l"&&t.left.space===!0&&(p[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(p[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function v(i,p){t.update("header",i,p)}function x(i,p){i.value!==p&&(i.value=p)}function y({height:i}){x(r,i),v("size",i)}function T(i){w.value===!0&&x(c,!0),o("focusin",i)}z(()=>e.modelValue,i=>{v("space",i),x(c,!0),t.animate()}),z(u,i=>{v("offset",i)}),z(()=>e.reveal,i=>{i===!1&&x(c,e.modelValue)}),z(c,i=>{t.animate(),o("reveal",i)}),z(t.scroll,i=>{e.reveal===!0&&x(c,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const L={};return t.instances.header=L,e.modelValue===!0&&v("size",r.value),v("space",e.modelValue),v("offset",u.value),H(()=>{t.instances.header===L&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=te(d.default,[]);return e.elevated===!0&&i.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(g(P,{debounce:0,onResize:y})),g("header",{class:b.value,style:q.value,onFocusin:T},i)}}}),ge=$({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:o}}=Q(),n=N(O,()=>{console.error("QPageContainer needs to be child of QLayout")});G(oe,!0);const t=f(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:t.value},_(d.default))}}),me=$({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:o}){const{proxy:{$q:n}}=Q(),t=N(O,()=>{console.error("QFooter needs to be child of QLayout")}),r=S(parseInt(e.heightHint,10)),c=S(!0),m=S(k.value===!0||t.isContainer.value===!0?0:window.innerHeight),u=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),s=f(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),w=f(()=>{if(e.modelValue!==!0)return 0;if(u.value===!0)return c.value===!0?r.value:0;const l=t.scroll.value.position+s.value+r.value-t.height.value;return l>0?l:0}),b=f(()=>e.modelValue!==!0||u.value===!0&&c.value!==!0),q=f(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(u.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(b.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(u.value!==!0?" hidden":""):"")),x=f(()=>{const l=t.rows.value.bottom,h={};return l[0]==="l"&&t.left.space===!0&&(h[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(h[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function y(l,h){t.update("footer",l,h)}function T(l,h){l.value!==h&&(l.value=h)}function L({height:l}){T(r,l),y("size",l)}function i(){if(e.reveal!==!0)return;const{direction:l,position:h,inflectionPoint:C}=t.scroll.value;T(c,l==="up"||h-C<100||t.height.value-s.value-h-r.value<300)}function p(l){q.value===!0&&T(c,!0),o("focusin",l)}z(()=>e.modelValue,l=>{y("space",l),T(c,!0),t.animate()}),z(w,l=>{y("offset",l)}),z(()=>e.reveal,l=>{l===!1&&T(c,e.modelValue)}),z(c,l=>{t.animate(),o("reveal",l)}),z([r,t.scroll,t.height],i),z(()=>n.screen.height,l=>{t.isContainer.value!==!0&&T(m,l)});const a={};return t.instances.footer=a,e.modelValue===!0&&y("size",r.value),y("space",e.modelValue),y("offset",w.value),H(()=>{t.instances.footer===a&&(t.instances.footer=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const l=J(d.default,[g(P,{debounce:0,onResize:L})]);return e.elevated===!0&&l.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:v.value,style:x.value,onFocusin:p},l)}}});const{passive:K}=E,se=["both","horizontal","vertical"];var ue=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:d}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,r;z(()=>e.scrollTarget,()=>{u(),m()});function c(){n!==null&&n();const b=Math.max(0,le(t)),q=ie(t),v={top:b-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const x=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:b,left:q},o.directionChanged=o.direction!==x,o.delta=v,o.directionChanged===!0&&(o.direction=x,o.inflectionPoint=o.position),d("scroll",M({},o))}function m(){t=ne(r,e.scrollTarget),t.addEventListener("scroll",s,K),s(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",s,K),t=void 0)}function s(b){if(b===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[q,v]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{v(q),n=null}}}const w=Q();return R(()=>{r=w.proxy.$el.parentNode,m()}),H(()=>{n!==null&&n(),u()}),Object.assign(w.proxy,{trigger:s,getPosition:()=>o}),U}}),be=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:o}){const{proxy:{$q:n}}=Q(),t=S(null),r=S(n.screen.height),c=S(e.container===!0?0:n.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),u=S(0),s=S(k.value===!0?0:F()),w=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),q=f(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),v=f(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function x(a){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};m.value=l,e.onScroll!==void 0&&o("scroll",l)}}function y(a){const{height:l,width:h}=a;let C=!1;r.value!==l&&(C=!0,r.value=l,e.onScrollHeight!==void 0&&o("scroll-height",l),L()),c.value!==h&&(C=!0,c.value=h),C===!0&&e.onResize!==void 0&&o("resize",a)}function T({height:a}){u.value!==a&&(u.value=a,L())}function L(){if(e.container===!0){const a=r.value>u.value?F():0;s.value!==a&&(s.value=a)}}let i;const p={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:r,containerHeight:u,scrollbarWidth:s,totalWidth:f(()=>c.value+s.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:V({size:0,offset:0,space:!1}),right:V({size:300,offset:0,space:!1}),footer:V({size:0,offset:0,space:!1}),left:V({size:300,offset:0,space:!1}),scroll:m,animate(){i!==void 0?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),i=void 0},155)},update(a,l,h){p[a][l]=h}};if(G(O,p),F()>0){let h=function(){a=null,l.classList.remove("hide-scrollbar")},C=function(){if(a===null){if(l.scrollHeight>n.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(h,300)},B=function(j){a!==null&&j==="remove"&&(clearTimeout(a),h()),window[`${j}EventListener`]("resize",C)},a=null;const l=document.body;z(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ae(()=>{B("remove")})}return()=>{const a=J(d.default,[g(ue,{onScroll:x}),g(P,{onResize:y})]),l=g("div",{class:w.value,style:b.value,ref:e.container===!0?void 0:t},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:t},[g(P,{onResize:T}),g("div",{class:"absolute-full",style:q.value},[g("div",{class:"scroll",style:v.value},[l])])]):l}}});export{be as Q,ve as a,fe as b,he as c,ge as d,me as e};
