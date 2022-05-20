var K=Object.defineProperty,Q=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var b=(e,a,u)=>a in e?K(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,o=(e,a)=>{for(var u in a||(a={}))w.call(a,u)&&b(e,u,a[u]);if(f)for(var u of f(a))P.call(a,u)&&b(e,u,a[u]);return e},k=(e,a)=>Q(e,j(a));import{j as h,a5 as $,bb as A,a6 as D,bc as T,r as q,k as l,l as r,v as F,a8 as N,ai as W,A as M,m as O}from"./index.47b7fabf.js";var G=h({name:"QItem",props:k(o(o({},$),A),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:a,emit:u}){const{proxy:{$q:c}}=F(),y=D(e,c),{hasRouterLink:g,hasLink:v,linkProps:_,linkClass:B,linkTag:C,navigateToRouterLink:L}=T(),i=q(null),s=q(null),d=l(()=>e.clickable===!0||v.value===!0||e.tag==="label"),n=l(()=>e.disable!==!0&&d.value===!0),x=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(y.value===!0?" q-item--dark":"")+(v.value===!0?B.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(n.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=l(()=>{if(e.insetLevel===void 0)return null;const t=c.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function R(t){n.value===!0&&(s.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===i.value?s.value.focus():document.activeElement===s.value&&i.value.focus()),g.value===!0&&L(t),u("click",t))}function S(t){if(n.value===!0&&N(t,13)===!0){W(t),t.qKeyEvent=!0;const m=new MouseEvent("click",t);m.qKeyEvent=!0,i.value.dispatchEvent(m)}u("keyup",t)}function I(){const t=M(a.default,[]);return n.value===!0&&t.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:s})),t}return()=>{const t={ref:i,class:x.value,style:E.value,onClick:R,onKeyup:S};return n.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,_.value)):d.value===!0&&(t["aria-disabled"]="true"),r(C.value,t,I())}}}),H=h({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const u=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:u.value},O(a.default))}});export{H as Q,G as a};
