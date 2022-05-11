var te=Object.defineProperty;var M=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var W=(e,s,o)=>s in e?te(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,I=(e,s)=>{for(var o in s||(s={}))oe.call(s,o)&&W(e,o,s[o]);if(M)for(var o of M(s))ne.call(s,o)&&W(e,o,s[o]);return e};import{e as C,f,h as g,g as N,r as w,j,o as P,k as K,l as H,n as X,m as Q,p as k,q as A,s as O,w as z,t as le,u as Y,v as ae,x as Z,y as ie,z as re,A as se,B as E,C as R,D as ue,_ as ce,E as de,F as fe,G as U,H as ve,I as he,J as V,K as me,L as $,Q as ge,M as be,O as pe,P as ye}from"./index.8b1f3208.js";var we=C({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:o.value},N(s.default))}}),ze=C({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:o.value},N(s.default))}});function xe(){const e=w(!j.value);return e.value===!1&&P(()=>{e.value=!0}),e}const ee=typeof ResizeObserver!="undefined",G=ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let o=null,n,t={width:-1,height:-1};function r(c){c===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(clearTimeout(o),o=null,n){const{offsetWidth:c,offsetHeight:d}=n;(c!==t.width||d!==t.height)&&(t={width:c,height:d},s("resize",t))}}const m=Q();if(Object.assign(m.proxy,{trigger:r}),ee===!0){let c;return P(()=>{K(()=>{n=m.proxy.$el.parentNode,n&&(c=new ResizeObserver(r),c.observe(n),u())})}),H(()=>{clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():n&&c.unobserve(n))}),X}else{let x=function(){clearTimeout(o),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",r,k.passive),d=void 0)},b=function(){x(),n&&n.contentDocument&&(d=n.contentDocument.defaultView,d.addEventListener("resize",r,k.passive),u())};const c=xe();let d;return P(()=>{K(()=>{n=m.proxy.$el,n&&b()})}),H(x),()=>{if(c.value===!0)return g("object",{style:G.style,tabindex:-1,type:"text/html",data:G.url,"aria-hidden":"true",onLoad:b})}}}}),_e=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:o}){const{proxy:{$q:n}}=Q(),t=A(O,()=>{console.error("QHeader needs to be child of QLayout")}),r=w(parseInt(e.heightHint,10)),u=w(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?r.value:0;const a=r.value-t.scroll.value.position;return a>0?a:0}),d=f(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),x=f(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=f(()=>{const a=t.rows.value.top,y={};return a[0]==="l"&&t.left.space===!0&&(y[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(y[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function v(a,y){t.update("header",a,y)}function _(a,y){a.value!==y&&(a.value=y)}function p({height:a}){_(r,a),v("size",a)}function q(a){x.value===!0&&_(u,!0),o("focusin",a)}z(()=>e.modelValue,a=>{v("space",a),_(u,!0),t.animate()}),z(c,a=>{v("offset",a)}),z(()=>e.reveal,a=>{a===!1&&_(u,e.modelValue)}),z(u,a=>{t.animate(),o("reveal",a)}),z(t.scroll,a=>{e.reveal===!0&&_(u,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const T={};return t.instances.header=T,e.modelValue===!0&&v("size",r.value),v("space",e.modelValue),v("offset",c.value),H(()=>{t.instances.header===T&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const a=le(s.default,[]);return e.elevated===!0&&a.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(g(B,{debounce:0,onResize:p})),g("header",{class:b.value,style:S.value,onFocusin:q},a)}}}),Se=C({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:o}}=Q(),n=A(O,()=>{console.error("QPageContainer needs to be child of QLayout")});Y(ae,!0);const t=f(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:t.value},N(s.default))}}),qe=C({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:o}){const{proxy:{$q:n}}=Q(),t=A(O,()=>{console.error("QFooter needs to be child of QLayout")}),r=w(parseInt(e.heightHint,10)),u=w(!0),m=w(j.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),d=f(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),x=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?r.value:0;const l=t.scroll.value.position+d.value+r.value-t.height.value;return l>0?l:0}),b=f(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),S=f(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(b.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),_=f(()=>{const l=t.rows.value.bottom,h={};return l[0]==="l"&&t.left.space===!0&&(h[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(h[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function p(l,h){t.update("footer",l,h)}function q(l,h){l.value!==h&&(l.value=h)}function T({height:l}){q(r,l),p("size",l)}function a(){if(e.reveal!==!0)return;const{direction:l,position:h,inflectionPoint:L}=t.scroll.value;q(u,l==="up"||h-L<100||t.height.value-d.value-h-r.value<300)}function y(l){S.value===!0&&q(u,!0),o("focusin",l)}z(()=>e.modelValue,l=>{p("space",l),q(u,!0),t.animate()}),z(x,l=>{p("offset",l)}),z(()=>e.reveal,l=>{l===!1&&q(u,e.modelValue)}),z(u,l=>{t.animate(),o("reveal",l)}),z([r,t.scroll,t.height],a),z(()=>n.screen.height,l=>{t.isContainer.value!==!0&&q(m,l)});const i={};return t.instances.footer=i,e.modelValue===!0&&p("size",r.value),p("space",e.modelValue),p("offset",x.value),H(()=>{t.instances.footer===i&&(t.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const l=Z(s.default,[g(B,{debounce:0,onResize:T})]);return e.elevated===!0&&l.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:v.value,style:_.value,onFocusin:y},l)}}});const{passive:J}=k,$e=["both","horizontal","vertical"];var Ce=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$e.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,r;z(()=>e.scrollTarget,()=>{c(),m()});function u(){n!==null&&n();const b=Math.max(0,re(t)),S=se(t),v={top:b-o.position.top,left:S-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const _=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:b,left:S},o.directionChanged=o.direction!==_,o.delta=v,o.directionChanged===!0&&(o.direction=_,o.inflectionPoint=o.position),s("scroll",I({},o))}function m(){t=ie(r,e.scrollTarget),t.addEventListener("scroll",d,J),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,J),t=void 0)}function d(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[S,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{v(S),n=null}}}const x=Q();return P(()=>{r=x.proxy.$el.parentNode,m()}),H(()=>{n!==null&&n(),c()}),Object.assign(x.proxy,{trigger:d,getPosition:()=>o}),X}}),Te=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:o}){const{proxy:{$q:n}}=Q(),t=w(null),r=w(n.screen.height),u=w(e.container===!0?0:n.screen.width),m=w({position:0,direction:"down",inflectionPoint:0}),c=w(0),d=w(j.value===!0?0:E()),x=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),S=f(()=>d.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),v=f(()=>d.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function _(i){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};m.value=l,e.onScroll!==void 0&&o("scroll",l)}}function p(i){const{height:l,width:h}=i;let L=!1;r.value!==l&&(L=!0,r.value=l,e.onScrollHeight!==void 0&&o("scroll-height",l),T()),u.value!==h&&(L=!0,u.value=h),L===!0&&e.onResize!==void 0&&o("resize",i)}function q({height:i}){c.value!==i&&(c.value=i,T())}function T(){if(e.container===!0){const i=r.value>c.value?E():0;d.value!==i&&(d.value=i)}}let a;const y={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:r,containerHeight:c,scrollbarWidth:d,totalWidth:f(()=>u.value+d.value),rows:f(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:m,animate(){a!==void 0?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),a=void 0},155)},update(i,l,h){y[i][l]=h}};if(Y(O,y),E()>0){let h=function(){i=null,l.classList.remove("hide-scrollbar")},L=function(){if(i===null){if(l.scrollHeight>n.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(h,300)},F=function(D){i!==null&&D==="remove"&&(clearTimeout(i),h()),window[`${D}EventListener`]("resize",L)},i=null;const l=document.body;z(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),ue(()=>{F("remove")})}return()=>{const i=Z(s.default,[g(Ce,{onScroll:_}),g(B,{onResize:p})]),l=g("div",{class:x.value,style:b.value,ref:e.container===!0?void 0:t},i);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:t},[g(B,{onResize:q}),g("div",{class:"absolute-full",style:S.value},[g("div",{class:"scroll",style:v.value},[l])])]):l}}}),Le="/assets/quasar-logo-vertical.55e9c854.svg";const Ve=de({components:{Footer:fe(()=>me(()=>import("./Footer.74ff54ad.js"),["assets/Footer.74ff54ad.js","assets/index.8b1f3208.js","assets/index.2b9cce82.css","assets/QImg.50aedb30.js"]))},setup(e,s){const o=w(0);return{onScroll:t=>{o.value=t.position},position:o}}}),Qe=pe("img",{src:Le},null,-1),He=ye(" TBC Car Rental ");function Re(e,s,o,n,t,r){const u=U("router-view"),m=U("Footer");return ve(),he(Te,{view:"hHh lpR fff",onScroll:e.onScroll},{default:V(()=>[$(_e,{class:"header flex justify-center text-primary"},{default:V(()=>[$(ze,{class:"container",style:{height:"70px"}},{default:V(()=>[$(we,{onClick:s[0]||(s[0]=c=>e.$router.replace({name:"home"})),class:"text-bold cursor-pointer"},{default:V(()=>[$(ge,{class:"q-mr-lg"},{default:V(()=>[Qe]),_:1}),He]),_:1}),$(be,{to:{name:"booking"},color:"primary",label:"Booking",outline:"",rounded:""})]),_:1})]),_:1}),$(Se,{class:"q-pa-sm"},{default:V(()=>[$(u)]),_:1}),$(qe,null,{default:V(()=>[$(m)]),_:1})]),_:1},8,["onScroll"])}var Oe=ce(Ve,[["render",Re]]);export{Oe as default};