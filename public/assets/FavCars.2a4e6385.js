var re=Object.defineProperty,le=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var Y=(e,t,i)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))se.call(t,i)&&Y(e,i,t[i]);if(X)for(var i of X(t))ce.call(t,i)&&Y(e,i,t[i]);return e},k=(e,t)=>le(e,ue(t));import{Q as de}from"./QImg.4054e834.js";import{b6 as ve,aH as D,t as fe,b7 as pe,aE as M,b8 as z,aR as Z,ag as F,aF as O,r as K,k as v,y as W,q as me,u as oe,l as f,Z as ge,b9 as he,ba as ye,m as H,j as ie,a0 as _e,a1 as be,bb as xe,p as Ce,s as Pe,an as qe,D as we,g as Q,K as Se,o as U,T as G,f as J,w as ee,V as ke,U as Ie,P as Te,c as Ae,h as j,L as Be}from"./index.5c86de95.js";import{c as $e,u as Ve,a as De,b as Ne}from"./use-fullscreen.dc35d85b.js";const R={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ee=Object.keys(R);R.all=!0;function te(e){const t={};for(const i of Ee)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?R:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ne(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Le(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,p)=>{const r=parseFloat(i);r&&(t[p]=r)}),t}var Me=ve({name:"touch-swipe",beforeMount(e,{value:t,arg:i,modifiers:p}){if(p.mouse!==!0&&D.has.touch!==!0)return;const r=p.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Le(i),direction:te(p),noop:fe,mouseStart(o){ne(o,n)&&pe(o)&&(M(n,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(o,!0))},touchStart(o){if(ne(o,n)){const u=o.target;M(n,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),n.start(o)}},start(o,u){D.is.firefox===!0&&z(e,!0);const y=Z(o);n.event={x:y.left,y:y.top,time:Date.now(),mouse:u===!0,dir:!1}},move(o){if(n.event===void 0)return;if(n.event.dir!==!1){F(o);return}const u=Date.now()-n.event.time;if(u===0)return;const y=Z(o),_=y.left-n.event.x,s=Math.abs(_),b=y.top-n.event.y,c=Math.abs(b);if(n.event.mouse!==!0){if(s<n.sensitivity[1]&&c<n.sensitivity[1]){n.end(o);return}}else if(s<n.sensitivity[2]&&c<n.sensitivity[2])return;const m=s/u,x=c/u;n.direction.vertical===!0&&s<c&&s<100&&x>n.sensitivity[0]&&(n.event.dir=b<0?"up":"down"),n.direction.horizontal===!0&&s>c&&c<100&&m>n.sensitivity[0]&&(n.event.dir=_<0?"left":"right"),n.direction.up===!0&&s<c&&b<0&&s<100&&x>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&s<c&&b>0&&s<100&&x>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&s>c&&_<0&&c<100&&m>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&s>c&&_>0&&c<100&&m>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(F(o),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$e(),n.styleCleanup=I=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(C,50):C()}),n.handler({evt:o,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:u,distance:{x:s,y:c}})):n.end(o)},end(o){n.event!==void 0&&(O(n,"temp"),D.is.firefox===!0&&z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),o!==void 0&&n.event.dir!==!1&&F(o),n.event=void 0)}};e.__qtouchswipe=n,p.mouse===!0&&M(n,"main",[[e,"mousedown","mouseStart",`passive${r}`]]),D.has.touch===!0&&M(n,"main",[[e,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const i=e.__qtouchswipe;i!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&i.end(),i.handler=t.value),i.direction=te(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(O(t,"main"),O(t,"temp"),D.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function ze(){const e=new Map;return{getCache:function(t,i){return e[t]===void 0?e[t]=i:e[t]},getCacheWithFn:function(t,i){return e[t]===void 0?e[t]=i():e[t]}}}const Fe={name:{required:!0},disable:Boolean},ae={setup(e,{slots:t}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},H(t.default))}},Oe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Qe=["update:modelValue","before-transition","transition"];function Ue(){const{props:e,emit:t,proxy:i}=oe(),{getCacheWithFn:p}=ze();let r,n;const o=K(null),u=K(null);function y(a){const l=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(a.direction===l?1:-1))}const _=v(()=>[[Me,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),c=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),m=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);W(()=>e.modelValue,(a,l)=>{const g=q(a)===!0?B(a):-1;n!==!0&&T(g===-1?0:g<B(l)?-1:1),o.value!==g&&(o.value=g,t("before-transition",a,l),me(()=>{t("transition",a,l)}))});function C(){P(1)}function N(){P(-1)}Object.assign(i,{next:C,previous:N,goTo:A});function A(a){t("update:modelValue",a)}function q(a){return a!=null&&a!==""}function B(a){return r.findIndex(l=>l.props.name===a&&l.props.disable!==""&&l.props.disable!==!0)}function E(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const l=a!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?s.value:b.value):null;u.value!==l&&(u.value=l)}function P(a,l=o.value){let g=l+a;for(;g>-1&&g<r.length;){const S=r[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){T(a),n=!0,t("update:modelValue",S.props.name),setTimeout(()=>{n=!1});return}g+=a}e.infinite===!0&&r.length>0&&l!==-1&&l!==r.length&&P(a,a===-1?r.length:-1)}function $(){const a=B(e.modelValue);return o.value!==a&&(o.value=a),!0}function L(){const a=q(e.modelValue)===!0&&$()&&r[o.value];return e.keepAlive===!0?[f(he,x.value,[f(I.value===!0?p(m.value,()=>k(h({},ae),{name:m.value})):ae,{key:m.value,style:c.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:c.value,key:m.value,role:"tabpanel"},[a])]}function d(){if(r.length!==0)return e.animated===!0?[f(ge,{name:u.value},L)]:L()}function w(a){return r=ye(H(a.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&q(l.props.name)===!0),r.length}function V(){return r}return{panelIndex:o,panelDirectives:_,updatePanelsList:w,updatePanelIndex:$,getPanelContent:d,getEnabledPanels:E,getPanels:V,isValidPanelName:q,keepAliveProps:x,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:P,goToPanel:A,nextPanel:C,previousPanel:N}}var je=ie({name:"QCarouselSlide",props:k(h({},Fe),{imgSrc:String}),setup(e,{slots:t}){const i=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:i.value},H(t.default))}});const Ke=["top","right","bottom","left"],We=["regular","flat","outline","push","unelevated"];var He=ie({name:"QCarousel",props:k(h(h(h({},_e),Oe),Ve),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>We.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ke.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...De,...Qe],setup(e,{slots:t}){const{proxy:{$q:i}}=oe(),p=be(e,i);let r,n;const{updatePanelsList:o,getPanelContent:u,panelDirectives:y,goToPanel:_,previousPanel:s,nextPanel:b,getEnabledPanels:c,panelIndex:m}=Ue(),{inFullscreen:x}=Ne(),I=v(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=v(()=>e.vertical===!0?"vertical":"horizontal"),N=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(p.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),A=v(()=>{const d=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?d.reverse():d}),q=v(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),B=v(()=>e.navigationActiveIcon||q.value),E=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));W(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),P())}),W(()=>e.autoplay,d=>{d?P():clearInterval(r)});function P(){const d=xe(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(d>=0?b:s,Math.abs(d))}Ce(()=>{e.autoplay&&P()}),Pe(()=>{clearInterval(r)});function $(d,w){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},c().map(w))])}function L(){const d=[];if(e.navigation===!0){const w=t["navigation-icon"]!==void 0?t["navigation-icon"]:a=>f(Q,k(h({key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`},a.btnProps),{onClick:a.onClick})),V=n-1;d.push($("buttons",(a,l)=>{const g=a.props.name,S=m.value===l;return w({index:l,maxIndex:V,name:g,active:S,btnProps:h({icon:S===!0?B.value:q.value,size:"sm"},T.value),onClick:()=>{_(g)}})}))}else if(e.thumbnails===!0){const w=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push($("thumbnails",V=>{const a=V.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+w,src:a.imgSrc||a["img-src"],onClick:()=>{_(a.name)}})}))}return e.arrows===!0&&m.value>=0&&((e.infinite===!0||m.value>0)&&d.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[f(Q,k(h({icon:A.value[0]},T.value),{onClick:s}))])),(e.infinite===!0||m.value<n-1)&&d.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[f(Q,k(h({icon:A.value[1]},T.value),{onClick:b}))]))),we(t.control,d)}return()=>(n=o(t),f("div",{class:N.value,style:I.value},[qe("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>y.value)].concat(L())))}});const Re={class:"q-pa-md full-height"},Xe={class:"full-width primary-card"},Ye={class:"text-md text-dark"},Ze=["innerHTML"],nt={setup(e){const t=K(0),{fav_cars:i}=Se(),p=v(()=>i);return(r,n)=>(U(),G("div",Re,[J(He,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",animated:"","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",autoplay:"","control-color":"primary",class:"bg-transparent full-height"},{default:ee(()=>[(U(!0),G(ke,null,Ie(Te(p),(o,u)=>(U(),Ae(je,{name:u,class:"q-pa-none q-ma-none column no-wrap flex-center"},{default:ee(()=>[j("div",Xe,[J(de,{src:o.image_url,style:{height:"350px"}},null,8,["src"]),j("p",Ye,Be(o==null?void 0:o.name),1),j("div",{innerHTML:o==null?void 0:o.description},null,8,Ze)])]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])]))}};export{nt as default};