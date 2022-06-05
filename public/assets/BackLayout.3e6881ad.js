var ze=Object.defineProperty,Ne=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var me=(t,i,r)=>i in t?ze(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,Q=(t,i)=>{for(var r in i||(i={}))He.call(i,r)&&me(t,r,i[r]);if(fe)for(var r of fe(i))Re.call(i,r)&&me(t,r,i[r]);return t},K=(t,i)=>Ne(t,Ie(i));import{al as Xe,am as S,u as Ye,an as je,ao as V,ap as G,aq as he,ar as J,as as ne,at as Z,ai as Ue,j as Ke,au as Ge,a5 as Je,av as Ze,a6 as et,aw as tt,y as at,r as $,k as f,ax as ot,ay as nt,z as h,a7 as F,q as it,s as pe,t as rt,az as ut,l as W,aA as ye,m as lt,B as st,v as dt,aB as ct,_ as vt,d as ft,a as be,ag as mt,ah as ht,J as pt,b as z,o as ee,c as te,w as B,e as ge,T as yt,f as C,g as we,aC as Ce,Q as bt,h as ie,i as gt}from"./index.e058ad87.js";import{Q as wt,a as Ct,b as _t,c as qt,d as kt,e as Bt}from"./QLayout.b98be1a8.js";import{g as _e,s as qe}from"./touch.70a9dd44.js";import{c as Tt}from"./selection.1e901efe.js";import{Q as xt}from"./QPage.7570ba6e.js";import{u as $t}from"./use-quasar.b18e3096.js";import{_ as Dt}from"./logo.9361aec2.js";function ae(t,i,r){const m=ne(t);let e,n=m.left-i.event.x,l=m.top-i.event.y,d=Math.abs(n),c=Math.abs(l);const o=i.direction;o.horizontal===!0&&o.vertical!==!0?e=n<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?e=l<0?"up":"down":o.up===!0&&l<0?(e="up",d>c&&(o.left===!0&&n<0?e="left":o.right===!0&&n>0&&(e="right"))):o.down===!0&&l>0?(e="down",d>c&&(o.left===!0&&n<0?e="left":o.right===!0&&n>0&&(e="right"))):o.left===!0&&n<0?(e="left",d<c&&(o.up===!0&&l<0?e="up":o.down===!0&&l>0&&(e="down"))):o.right===!0&&n>0&&(e="right",d<c&&(o.up===!0&&l<0?e="up":o.down===!0&&l>0&&(e="down")));let y=!1;if(e===void 0&&r===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,y=!0,e==="left"||e==="right"?(m.left-=n,d=0,n=0):(m.top-=l,c=0,l=0)}return{synthetic:y,payload:{evt:t,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:m,direction:e,isFirst:i.event.isFirst,isFinal:r===!0,duration:Date.now()-i.event.time,distance:{x:d,y:c},offset:{x:n,y:l},delta:{x:m.left-i.event.lastX,y:m.top-i.event.lastY}}}}let Et=0;var oe=Xe({name:"touch-pan",beforeMount(t,{value:i,modifiers:r}){if(r.mouse!==!0&&S.has.touch!==!0)return;function m(n,l){r.mouse===!0&&l===!0?Ue(n):(r.stop===!0&&J(n),r.prevent===!0&&he(n))}const e={uid:"qvtp_"+Et++,handler:i,modifiers:r,direction:_e(r),noop:Ye,mouseStart(n){qe(n,e)&&je(n)&&(V(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(qe(n,e)){const l=n.target;V(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,l){if(S.is.firefox===!0&&G(t,!0),e.lastEvt=n,l===!0||r.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0)){const o=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&he(o),n.cancelBubble===!0&&J(o),Object.assign(o,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:o}}J(n)}const{left:d,top:c}=ne(n);e.event={x:d,y:c,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(n){if(e.event===void 0)return;const l=ne(n),d=l.left-e.event.x,c=l.top-e.event.y;if(d===0&&c===0)return;e.lastEvt=n;const o=e.event.mouse===!0,y=()=>{m(n,o),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),e.styleCleanup=s=>{if(e.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),o===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};s!==void 0?setTimeout(()=>{q(),s()},50):q()}else s!==void 0&&s()}};if(e.event.detected===!0){e.event.isFirst!==!0&&m(n,e.event.mouse);const{payload:s,synthetic:q}=ae(n,e,!1);s!==void 0&&(e.handler(s)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&y(),e.event.lastX=s.position.left,e.event.lastY=s.position.top,e.event.lastDir=q===!0?void 0:s.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||o===!0&&e.modifiers.mouseAllDir===!0){y(),e.event.detected=!0,e.move(n);return}const _=Math.abs(d),b=Math.abs(c);_!==b&&(e.direction.horizontal===!0&&_>b||e.direction.vertical===!0&&_<b||e.direction.up===!0&&_<b&&c<0||e.direction.down===!0&&_<b&&c>0||e.direction.left===!0&&_>b&&d<0||e.direction.right===!0&&_>b&&d>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,l){if(e.event!==void 0){if(Z(e,"temp"),S.is.firefox===!0&&G(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ae(n===void 0?e.lastEvt:n,e).payload);const{payload:d}=ae(n===void 0?e.lastEvt:n,e,!0),c=()=>{e.handler(d)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,r.mouse===!0&&V(e,"main",[[t,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),S.has.touch===!0&&V(e,"main",[[t,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const r=t.__qtouchpan;r!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&r.end(),r.handler=i.value),r.direction=_e(i.modifiers))},beforeUnmount(t){const i=t.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),Z(i,"main"),Z(i,"temp"),S.is.firefox===!0&&G(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchpan)}});const ke=150;var Mt=Ke({name:"QDrawer",inheritAttrs:!1,props:K(Q(Q({},Ge),Je),{side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Ze,"on-layout","mini-state"],setup(t,{slots:i,emit:r,attrs:m}){const e=dt(),{proxy:{$q:n}}=e,l=et(t,n),{preventBodyScroll:d}=ct(),{registerTimeout:c}=tt(),o=at(st,()=>{console.error("QDrawer needs to be child of QLayout")});let y,_,b;const s=$(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),q=f(()=>t.mini===!0&&s.value!==!0),g=f(()=>q.value===!0?t.miniWidth:t.width),v=$(t.showIfAbove===!0&&s.value===!1?!0:t.modelValue===!0),re=f(()=>t.persistent!==!0&&(s.value===!0||xe.value===!0));function ue(a,u){if(Be(),a!==!1&&o.animate(),w(0),s.value===!0){const p=o.instances[P.value];p!==void 0&&p.belowBreakpoint===!0&&p.hide(!1),T(1),o.isContainer.value!==!0&&d(!0)}else T(0),a!==!1&&Y(!1);c(()=>{a!==!1&&Y(!0),u!==!0&&r("show",a)},ke)}function le(a,u){Te(),a!==!1&&o.animate(),T(0),w(D.value*g.value),j(),u!==!0&&c(()=>{r("hide",a)},ke)}const{show:N,hide:M}=ot({showing:v,hideOnRouteChange:re,handleShow:ue,handleHide:le}),{addToHistory:Be,removeFromHistory:Te}=nt(v,M,re),O={belowBreakpoint:s,hide:M},k=f(()=>t.side==="right"),D=f(()=>(n.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),se=$(0),E=$(!1),I=$(!1),de=$(g.value*D.value),P=f(()=>k.value===!0?"left":"right"),H=f(()=>v.value===!0&&s.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:g.value:0),R=f(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(k.value?"R":"L")>-1||n.platform.is.ios===!0&&o.isContainer.value===!0),A=f(()=>t.overlay===!1&&v.value===!0&&s.value===!1),xe=f(()=>t.overlay===!0&&v.value===!0&&s.value===!1),$e=f(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&E.value===!1?" hidden":"")),De=f(()=>({backgroundColor:`rgba(0,0,0,${se.value*.4})`})),ce=f(()=>k.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ee=f(()=>k.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Me=f(()=>{const a={};return o.header.space===!0&&ce.value===!1&&(R.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&Ee.value===!1&&(R.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),Ae=f(()=>{const a={width:`${g.value}px`,transform:`translateX(${de.value}px)`};return s.value===!0?a:Object.assign(a,Me.value)}),Se=f(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=f(()=>`q-drawer q-drawer--${t.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(R.value===!0||A.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ce.value===!0?" q-drawer--top-padding":""))),Pe=f(()=>{const a=n.lang.rtl===!0?t.side:P.value;return[[oe,Fe,void 0,{[a]:!0,mouse:!0}]]}),Le=f(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[oe,ve,void 0,{[a]:!0,mouse:!0}]]}),Qe=f(()=>{const a=n.lang.rtl===!0?P.value:t.side;return[[oe,ve,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function X(){We(s,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}h(s,a=>{a===!0?(y=v.value,v.value===!0&&M(!1)):t.overlay===!1&&t.behavior!=="mobile"&&y!==!1&&(v.value===!0?(w(0),T(0),j()):N(!1))}),h(()=>t.side,(a,u)=>{o.instances[u]===O&&(o.instances[u]=void 0,o[u].space=!1,o[u].offset=0),o.instances[a]=O,o[a].size=g.value,o[a].space=A.value,o[a].offset=H.value}),h(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&X()}),h(()=>t.behavior+t.breakpoint,X),h(o.isContainer,a=>{v.value===!0&&d(a!==!0),a===!0&&X()}),h(o.scrollbarWidth,()=>{w(v.value===!0?0:void 0)}),h(H,a=>{x("offset",a)}),h(A,a=>{r("on-layout",a),x("space",a)}),h(k,()=>{w()}),h(g,a=>{w(),U(t.miniToOverlay,a)}),h(()=>t.miniToOverlay,a=>{U(a,g.value)}),h(()=>n.lang.rtl,()=>{w()}),h(()=>t.mini,()=>{t.modelValue===!0&&(Ve(),o.animate())}),h(q,a=>{r("mini-state",a)});function w(a){a===void 0?pe(()=>{a=v.value===!0?0:g.value,w(D.value*a)}):(o.isContainer.value===!0&&k.value===!0&&(s.value===!0||Math.abs(a)===g.value)&&(a+=D.value*o.scrollbarWidth.value),de.value=a)}function T(a){se.value=a}function Y(a){const u=a===!0?"remove":o.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Ve(){clearTimeout(_),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,_=setTimeout(()=>{I.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Fe(a){if(v.value!==!1)return;const u=g.value,p=F(a.distance.x,0,u);if(a.isFinal===!0){p>=Math.min(75,u)===!0?N():(o.animate(),T(0),w(D.value*u)),E.value=!1;return}w((n.lang.rtl===!0?k.value!==!0:k.value)?Math.max(u-p,0):Math.min(0,p-u)),T(F(p/u,0,1)),a.isFirst===!0&&(E.value=!0)}function ve(a){if(v.value!==!0)return;const u=g.value,p=a.direction===t.side,L=(n.lang.rtl===!0?p!==!0:p)?F(a.distance.x,0,u):0;if(a.isFinal===!0){Math.abs(L)<Math.min(75,u)===!0?(o.animate(),T(1),w(0)):M(),E.value=!1;return}w(D.value*L),T(F(1-L/u,0,1)),a.isFirst===!0&&(E.value=!0)}function j(){d(!1),Y(!0)}function x(a,u){o.update(t.side,a,u)}function We(a,u){a.value!==u&&(a.value=u)}function U(a,u){x("size",a===!0?t.miniWidth:u)}return o.instances[t.side]=O,U(t.miniToOverlay,g.value),x("space",A.value),x("offset",H.value),t.showIfAbove===!0&&t.modelValue!==!0&&v.value===!0&&t["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),it(()=>{r("on-layout",A.value),r("mini-state",q.value),y=t.showIfAbove===!0;const a=()=>{(v.value===!0?ue:le)(!1,!0)};if(o.totalWidth.value!==0){pe(a);return}b=h(o.totalWidth,()=>{b(),b=void 0,v.value===!1&&t.showIfAbove===!0&&s.value===!1?N(!1):a()})}),rt(()=>{b!==void 0&&b(),clearTimeout(_),v.value===!0&&j(),o.instances[t.side]===O&&(o.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];s.value===!0&&(t.noSwipeOpen===!1&&a.push(ut(W("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Pe.value)),a.push(ye("div",{ref:"backdrop",class:$e.value,style:De.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",t.noSwipeBackdrop!==!0&&v.value===!0,()=>Qe.value)));const u=q.value===!0&&i.mini!==void 0,p=[W("div",K(Q({},m),{key:""+u,class:[Se.value,m.class]}),u===!0?i.mini():lt(i.default))];return t.elevated===!0&&v.value===!0&&p.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ye("aside",{ref:"content",class:Oe.value,style:Ae.value},p,"contentclose",t.noSwipeClose!==!0&&s.value===!0,()=>Le.value)),W("div",{class:"q-drawer-container"},a)}}});const At=ft({components:{AdminNav:be(()=>ge(()=>import("./AdminNav.9513b309.js"),["assets/AdminNav.9513b309.js","assets/QImg.cd50de6b.js","assets/index.e058ad87.js","assets/index.7c58b253.css","assets/QItemSection.34480467.js","assets/QItemLabel.f8abfc41.js","assets/QList.f22ba76e.js","assets/logo.9361aec2.js"])),Footer:be(()=>ge(()=>import("./Footer.b4e4d12a.js"),["assets/Footer.b4e4d12a.js","assets/QItemLabel.f8abfc41.js","assets/index.e058ad87.js","assets/index.7c58b253.css","assets/QItemSection.34480467.js","assets/QImg.cd50de6b.js","assets/logo.9361aec2.js"]))},setup(t,i){$t();const r=mt(),{setLoginData:m}=ht(),e=$(!1),n=pt({cmsMenus:[{id:1,title:"Vehicles",route:"vehicle:list",icon:"car_rental"},{id:2,title:"Privacy policy",route:"privacy:detail",icon:"description"},{id:2,title:"Gallery",route:"gallery:list",icon:"image"},{id:3,title:"Terms and Conditions",route:"term:detail",icon:"thumb_up_alt"},{id:4,title:"About",route:"about:detail",icon:"self_improvement"},{id:5,title:"Contact",route:"contact:detail",icon:"contact_page"},{id:6,title:"Testimonials",route:"testimonial:list",icon:"chat"}],adminMenus:[{id:1,title:"Accounts",route:"account:list",icon:"supervisor_account"},{id:2,title:"Our Events",route:"event:list",icon:"event_available"},{id:3,title:"Media",route:"media:list",icon:"image"},{id:4,title:"Contact Request",route:"contact-request:list",icon:"phone"}]});return{open:e,localState:n,logout:()=>{yt.post("auth/logout").then(d=>{m(null,null),r.replace({name:"home"})}).catch(d=>{m(null,null)})}}}}),St=ie("img",{src:Dt},null,-1),Ot=gt(" TBC Car Rental "),Pt={class:"col-sm-3 xs-hide bg-white rounded-borders"},Lt={class:"col-xs-12 col-sm-9"};function Qt(t,i,r,m,e,n){const l=z("AdminNav"),d=z("admin-nav"),c=z("router-view"),o=z("Footer");return ee(),te(wt,{view:"hHh lpR fff"},{default:B(()=>[C(qt,{class:"header flex justify-center text-primary"},{default:B(()=>[C(Ct,{class:"container",style:{height:"70px"}},{default:B(()=>[t.$q.screen.lt.sm?(ee(),te(we,{key:0,onClick:i[0]||(i[0]=y=>t.open=!t.open),flat:"",icon:"menu",color:"dark"})):Ce("",!0),C(_t,{onClick:i[1]||(i[1]=y=>t.$router.replace({name:"home"})),class:"text-bold cursor-pointer"},{default:B(()=>[t.$q.screen.gt.xs?(ee(),te(bt,{key:0,class:"q-mr-lg"},{default:B(()=>[St]),_:1})):Ce("",!0),Ot]),_:1}),C(we,{onClick:t.logout,color:"danger",label:"Logout",flat:"",rounded:""},null,8,["onClick"])]),_:1})]),_:1}),C(Mt,{side:"left",behavior:"mobile",modelValue:t.open,"onUpdate:modelValue":i[2]||(i[2]=y=>t.open=y)},{default:B(()=>[C(l)]),_:1},8,["modelValue"]),C(kt,{class:"q-pa-sm bg-grey-1"},{default:B(()=>[C(xt,{class:"row q-col-gutter-sm container q-pa-sm"},{default:B(()=>[ie("div",Pt,[C(d)]),ie("div",Lt,[C(c,{class:"q-pa-md"})])]),_:1})]),_:1}),C(Bt,null,{default:B(()=>[C(o)]),_:1})]),_:1})}var Yt=vt(At,[["render",Qt]]);export{Yt as default};
