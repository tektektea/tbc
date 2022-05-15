var re=Object.defineProperty,le=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var Y=(e,t,o)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))se.call(t,o)&&Y(e,o,t[o]);if(X)for(var o of X(t))ce.call(t,o)&&Y(e,o,t[o]);return e},k=(e,t)=>le(e,ue(t));import{Q as de}from"./QImg.f5726523.js";import{b6 as ve,aH as D,t as fe,b7 as pe,aE as M,b8 as z,aR as Z,ag as F,aF as O,r as K,k as v,y as W,q as me,u as oe,l as f,Z as ge,b9 as he,ba as ye,m as H,j as ie,a0 as _e,a1 as be,bb as xe,p as Ce,s as Pe,an as qe,D as we,g as Q,K as Se,o as U,T as G,f as J,w as ee,V as ke,U as Ie,P as Te,c as Ae,h as j,L as Be}from"./index.3c048af8.js";import{c as $e,u as Ve,a as De,b as Ne}from"./use-fullscreen.3ec23912.js";const R={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ee=Object.keys(R);R.all=!0;function te(e){const t={};for(const o of Ee)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?R:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ne(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Le(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,m)=>{const r=parseFloat(o);r&&(t[m]=r)}),t}var Me=ve({name:"touch-swipe",beforeMount(e,{value:t,arg:o,modifiers:m}){if(m.mouse!==!0&&D.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Le(o),direction:te(m),noop:fe,mouseStart(i){ne(i,n)&&pe(i)&&(M(n,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(ne(i,n)){const d=i.target;M(n,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,d){D.is.firefox===!0&&z(e,!0);const y=Z(i);n.event={x:y.left,y:y.top,time:Date.now(),mouse:d===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){F(i);return}const d=Date.now()-n.event.time;if(d===0)return;const y=Z(i),_=y.left-n.event.x,u=Math.abs(_),b=y.top-n.event.y,s=Math.abs(b);if(n.event.mouse!==!0){if(u<n.sensitivity[1]&&s<n.sensitivity[1]){n.end(i);return}}else if(u<n.sensitivity[2]&&s<n.sensitivity[2])return;const p=u/d,x=s/d;n.direction.vertical===!0&&u<s&&u<100&&x>n.sensitivity[0]&&(n.event.dir=b<0?"up":"down"),n.direction.horizontal===!0&&u>s&&s<100&&p>n.sensitivity[0]&&(n.event.dir=_<0?"left":"right"),n.direction.up===!0&&u<s&&b<0&&u<100&&x>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&u<s&&b>0&&u<100&&x>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&u>s&&_<0&&s<100&&p>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&u>s&&_>0&&s<100&&p>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(F(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$e(),n.styleCleanup=I=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(C,50):C()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:d,distance:{x:u,y:s}})):n.end(i)},end(i){n.event!==void 0&&(O(n,"temp"),D.is.firefox===!0&&z(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&F(i),n.event=void 0)}};e.__qtouchswipe=n,m.mouse===!0&&M(n,"main",[[e,"mousedown","mouseStart",`passive${r}`]]),D.has.touch===!0&&M(n,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchswipe;o!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&o.end(),o.handler=t.value),o.direction=te(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(O(t,"main"),O(t,"temp"),D.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function ze(){const e=new Map;return{getCache:function(t,o){return e[t]===void 0?e[t]=o:e[t]},getCacheWithFn:function(t,o){return e[t]===void 0?e[t]=o():e[t]}}}const Fe={name:{required:!0},disable:Boolean},ae={setup(e,{slots:t}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},H(t.default))}},Oe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Qe=["update:modelValue","before-transition","transition"];function Ue(){const{props:e,emit:t,proxy:o}=oe(),{getCacheWithFn:m}=ze();let r,n;const i=K(null),d=K(null);function y(a){const l=e.vertical===!0?"up":"left";P((o.$q.lang.rtl===!0?-1:1)*(a.direction===l?1:-1))}const _=v(()=>[[Me,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);W(()=>e.modelValue,(a,l)=>{const g=q(a)===!0?B(a):-1;n!==!0&&T(g===-1?0:g<B(l)?-1:1),i.value!==g&&(i.value=g,t("before-transition",a,l),me(()=>{t("transition",a,l)}))});function C(){P(1)}function N(){P(-1)}Object.assign(o,{next:C,previous:N,goTo:A});function A(a){t("update:modelValue",a)}function q(a){return a!=null&&a!==""}function B(a){return r.findIndex(l=>l.props.name===a&&l.props.disable!==""&&l.props.disable!==!0)}function E(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const l=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?u.value:b.value):null;d.value!==l&&(d.value=l)}function P(a,l=i.value){let g=l+a;for(;g>-1&&g<r.length;){const S=r[g];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){T(a),n=!0,t("update:modelValue",S.props.name),setTimeout(()=>{n=!1});return}g+=a}e.infinite===!0&&r.length>0&&l!==-1&&l!==r.length&&P(a,a===-1?r.length:-1)}function $(){const a=B(e.modelValue);return i.value!==a&&(i.value=a),!0}function L(){const a=q(e.modelValue)===!0&&$()&&r[i.value];return e.keepAlive===!0?[f(he,x.value,[f(I.value===!0?m(p.value,()=>k(h({},ae),{name:p.value})):ae,{key:p.value,style:s.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[a])]}function c(){if(r.length!==0)return e.animated===!0?[f(ge,{name:d.value},L)]:L()}function w(a){return r=ye(H(a.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&q(l.props.name)===!0),r.length}function V(){return r}return{panelIndex:i,panelDirectives:_,updatePanelsList:w,updatePanelIndex:$,getPanelContent:c,getEnabledPanels:E,getPanels:V,isValidPanelName:q,keepAliveProps:x,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:P,goToPanel:A,nextPanel:C,previousPanel:N}}var je=ie({name:"QCarouselSlide",props:k(h({},Fe),{imgSrc:String}),setup(e,{slots:t}){const o=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:o.value},H(t.default))}});const Ke=["top","right","bottom","left"],We=["regular","flat","outline","push","unelevated"];var He=ie({name:"QCarousel",props:k(h(h(h({},_e),Oe),Ve),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>We.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ke.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...De,...Qe],setup(e,{slots:t}){const{proxy:{$q:o}}=oe(),m=be(e,o);let r,n;const{updatePanelsList:i,getPanelContent:d,panelDirectives:y,goToPanel:_,previousPanel:u,nextPanel:b,getEnabledPanels:s,panelIndex:p}=Ue(),{inFullscreen:x}=Ne(),I=v(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=v(()=>e.vertical===!0?"vertical":"horizontal"),N=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),A=v(()=>{const c=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?c.reverse():c}),q=v(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),B=v(()=>e.navigationActiveIcon||q.value),E=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));W(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),P())}),W(()=>e.autoplay,c=>{c?P():clearInterval(r)});function P(){const c=xe(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(c>=0?b:u,Math.abs(c))}Ce(()=>{e.autoplay&&P()}),Pe(()=>{clearInterval(r)});function $(c,w){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(w))])}function L(){const c=[];if(e.navigation===!0){const w=t["navigation-icon"]!==void 0?t["navigation-icon"]:a=>f(Q,k(h({key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`},a.btnProps),{onClick:a.onClick})),V=n-1;c.push($("buttons",(a,l)=>{const g=a.props.name,S=p.value===l;return w({index:l,maxIndex:V,name:g,active:S,btnProps:h({icon:S===!0?B.value:q.value,size:"sm"},T.value),onClick:()=>{_(g)}})}))}else if(e.thumbnails===!0){const w=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push($("thumbnails",V=>{const a=V.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+w,src:a.imgSrc||a["img-src"],onClick:()=>{_(a.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[f(Q,k(h({icon:A.value[0]},T.value),{onClick:u}))])),(e.infinite===!0||p.value<n-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[f(Q,k(h({icon:A.value[1]},T.value),{onClick:b}))]))),we(t.control,c)}return()=>(n=i(t),f("div",{class:N.value,style:I.value},[qe("div",{class:"q-carousel__slides-container"},d(),"sl-cont",e.swipeable,()=>y.value)].concat(L())))}});const Re={class:"q-pa-md"},Xe={class:"full-width primary-card"},Ye={class:"text-md text-dark"},Ze=["innerHTML"],nt={setup(e){const t=K(0),{fav_cars:o}=Se();return(m,r)=>(U(),G("div",Re,[J(He,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=n=>t.value=n),vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",animated:"","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",autoplay:"","control-color":"primary",class:"bg-transparent text-dark"},{default:ee(()=>[(U(!0),G(ke,null,Ie(Te(o),(n,i)=>(U(),Ae(je,{name:i,class:"q-pa-none q-ma-none column no-wrap flex-center"},{default:ee(()=>[j("div",Xe,[J(de,{src:n.image_url,style:{height:"200px"}},null,8,["src"]),j("p",Ye,Be(n==null?void 0:n.name),1),j("div",{innerHTML:n==null?void 0:n.description},null,8,Ze)])]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])]))}};export{nt as default};