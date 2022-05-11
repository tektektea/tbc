var K=Object.defineProperty,A=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&p(e,a,t[a]);if(L)for(var a of L(t))F.call(t,a)&&p(e,a,t[a]);return e},C=(e,t)=>A(e,V(t));import{e as q,f as i,h as f,g as I,U,V as W,W as O,X as H,r as w,m as J,Y as M,Z as X,t as Y,_ as Z,H as z,T as G,O as h,L as n,J as u,P as b}from"./index.8b1f3208.js";import{Q as ee}from"./QImg.50aedb30.js";var v=q({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=i(()=>parseInt(e.lines,10)),s=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),c=i(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>f("div",{style:c.value,class:s.value},I(t.default))}}),m=q({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:a.value},I(t.default))}}),_=q({name:"QItem",props:C(k(k({},U),W),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:s}}=J(),c=O(e,s),{hasRouterLink:y,hasLink:x,linkProps:E,linkClass:Q,linkTag:$,navigateToRouterLink:P}=H(),r=w(null),d=w(null),g=i(()=>e.clickable===!0||x.value===!0||e.tag==="label"),o=i(()=>e.disable!==!0&&g.value===!0),R=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(x.value===!0?Q.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=i(()=>{if(e.insetLevel===void 0)return null;const l=s.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function N(l){o.value===!0&&(d.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===r.value?d.value.focus():document.activeElement===d.value&&r.value.focus()),y.value===!0&&P(l),a("click",l))}function T(l){if(o.value===!0&&M(l,13)===!0){X(l),l.qKeyEvent=!0;const B=new MouseEvent("click",l);B.qKeyEvent=!0,r.value.dispatchEvent(B)}a("keyup",l)}function j(){const l=Y(t.default,[]);return o.value===!0&&l.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:d})),l}return()=>{const l={ref:r,class:R.value,style:S.value,onClick:N,onKeyup:T};return o.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,E.value)):g.value===!0&&(l["aria-disabled"]="true"),f($.value,l,j())}}}),te="/assets/quasar-logo-vertical.55e9c854.svg";const ae={setup(e,t){return{}}},le={class:"flex justify-evenly bg-dark text-white q-pa-xl"},ne={class:"column"},ue=b("Privacy Policy"),ie=b("Terms And Conditions"),se={class:"column items-center justify-center"},oe={class:"column"},ce=b("About Us"),re=b("Contact");function de(e,t,a,s,c,y){return z(),G("div",le,[h("div",ne,[n(_,{clickable:"",to:{name:"privacy"}},{default:u(()=>[n(m,null,{default:u(()=>[n(v,null,{default:u(()=>[ue]),_:1})]),_:1})]),_:1}),n(_,{clickable:"",to:{name:"term"}},{default:u(()=>[n(m,null,{default:u(()=>[n(v,null,{default:u(()=>[ie]),_:1})]),_:1})]),_:1})]),h("div",se,[n(ee,{style:{width:"90px"},src:te})]),h("div",oe,[n(_,{clickable:"",to:{name:"about"}},{default:u(()=>[n(m,null,{default:u(()=>[n(v,null,{default:u(()=>[ce]),_:1})]),_:1})]),_:1}),n(_,{clickable:"",to:{name:"contact"}},{default:u(()=>[n(m,null,{default:u(()=>[n(v,null,{default:u(()=>[re]),_:1})]),_:1})]),_:1})])])}var fe=Z(ae,[["render",de]]);export{fe as default};