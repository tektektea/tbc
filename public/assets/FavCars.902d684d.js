var ie=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var R=(e,n,o)=>n in e?ie(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))se.call(n,o)&&R(e,o,n[o]);if(j)for(var o of j(n))ue.call(n,o)&&R(e,o,n[o]);return e},k=(e,n)=>re(e,le(n));import{Q as ce}from"./QImg.dd19ea48.js";import{ak as ve,al as V,t as de,am as fe,an as L,ao as F,ar as H,ah as Q,as as z,r as W,k as d,y as X,q as pe,u as ae,l as f,a2 as me,bh as ge,bi as he,m as Y,j as oe,a4 as _e,a5 as ye,bj as xe,p as be,s as Ce,az as Pe,D as qe,g as K,K as Se,o as O,X as Z,f as G,w as J,Z as we,Y as ke,T as Ie,c as Te,h as U,L as Ae}from"./index.17306579.js";import{g as ee,s as te}from"./touch.70a9dd44.js";import{c as $e}from"./selection.5904358f.js";import{u as Be,a as De,b as Ve}from"./use-fullscreen.d91aceb9.js";import{s as Ne}from"./pinia.971b36cb.js";function Ee(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,m)=>{const r=parseFloat(o);r&&(n[m]=r)}),n}var Me=ve({name:"touch-swipe",beforeMount(e,{value:n,arg:o,modifiers:m}){if(m.mouse!==!0&&V.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ee(o),direction:ee(m),noop:de,mouseStart(i){te(i,t)&&fe(i)&&(L(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(te(i,t)){const v=i.target;L(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,v){V.is.firefox===!0&&F(e,!0);const _=H(i);t.event={x:_.left,y:_.top,time:Date.now(),mouse:v===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){Q(i);return}const v=Date.now()-t.event.time;if(v===0)return;const _=H(i),y=_.left-t.event.x,s=Math.abs(y),x=_.top-t.event.y,u=Math.abs(x);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&u<t.sensitivity[1]){t.end(i);return}}else if(s<t.sensitivity[2]&&u<t.sensitivity[2])return;const p=s/v,b=u/v;t.direction.vertical===!0&&s<u&&s<100&&b>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&s>u&&u<100&&p>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&s<u&&x<0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<u&&x>0&&s<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>u&&y<0&&u<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>u&&y>0&&u<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Q(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$e(),t.styleCleanup=I=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(C,50):C()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:s,y:u}})):t.end(i)},end(i){t.event!==void 0&&(z(t,"temp"),V.is.firefox===!0&&F(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&Q(i),t.event=void 0)}};e.__qtouchswipe=t,m.mouse===!0&&L(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]]),V.has.touch===!0&&L(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchswipe;o!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&o.end(),o.handler=n.value),o.direction=ee(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(z(n,"main"),z(n,"temp"),V.is.firefox===!0&&F(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Le(){const e=new Map;return{getCache:function(n,o){return e[n]===void 0?e[n]=o:e[n]},getCacheWithFn:function(n,o){return e[n]===void 0?e[n]=o():e[n]}}}const Fe={name:{required:!0},disable:Boolean},ne={setup(e,{slots:n}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},Y(n.default))}},Qe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ze=["update:modelValue","before-transition","transition"];function Ke(){const{props:e,emit:n,proxy:o}=ae(),{getCacheWithFn:m}=Le();let r,t;const i=W(null),v=W(null);function _(a){const l=e.vertical===!0?"up":"left";P((o.$q.lang.rtl===!0?-1:1)*(a.direction===l?1:-1))}const y=d(()=>[[Me,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),s=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),u=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);X(()=>e.modelValue,(a,l)=>{const g=q(a)===!0?$(a):-1;t!==!0&&T(g===-1?0:g<$(l)?-1:1),i.value!==g&&(i.value=g,n("before-transition",a,l),pe(()=>{n("transition",a,l)}))});function C(){P(1)}function N(){P(-1)}Object.assign(o,{next:C,previous:N,goTo:A});function A(a){n("update:modelValue",a)}function q(a){return a!=null&&a!==""}function $(a){return r.findIndex(l=>l.props.name===a&&l.props.disable!==""&&l.props.disable!==!0)}function E(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const l=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?s.value:x.value):null;v.value!==l&&(v.value=l)}function P(a,l=i.value){let g=l+a;for(;g>-1&&g<r.length;){const w=r[g];if(w!==void 0&&w.props.disable!==""&&w.props.disable!==!0){T(a),t=!0,n("update:modelValue",w.props.name),setTimeout(()=>{t=!1});return}g+=a}e.infinite===!0&&r.length>0&&l!==-1&&l!==r.length&&P(a,a===-1?r.length:-1)}function B(){const a=$(e.modelValue);return i.value!==a&&(i.value=a),!0}function M(){const a=q(e.modelValue)===!0&&B()&&r[i.value];return e.keepAlive===!0?[f(ge,b.value,[f(I.value===!0?m(p.value,()=>k(h({},ne),{name:p.value})):ne,{key:p.value,style:u.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:u.value,key:p.value,role:"tabpanel"},[a])]}function c(){if(r.length!==0)return e.animated===!0?[f(me,{name:v.value},M)]:M()}function S(a){return r=he(Y(a.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&q(l.props.name)===!0),r.length}function D(){return r}return{panelIndex:i,panelDirectives:y,updatePanelsList:S,updatePanelIndex:B,getPanelContent:c,getEnabledPanels:E,getPanels:D,isValidPanelName:q,keepAliveProps:b,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:P,goToPanel:A,nextPanel:C,previousPanel:N}}var Oe=oe({name:"QCarouselSlide",props:k(h({},Fe),{imgSrc:String}),setup(e,{slots:n}){const o=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:o.value},Y(n.default))}});const Ue=["top","right","bottom","left"],We=["regular","flat","outline","push","unelevated"];var Xe=oe({name:"QCarousel",props:k(h(h(h({},_e),Qe),Be),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>We.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ue.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...De,...ze],setup(e,{slots:n}){const{proxy:{$q:o}}=ae(),m=ye(e,o);let r,t;const{updatePanelsList:i,getPanelContent:v,panelDirectives:_,goToPanel:y,previousPanel:s,nextPanel:x,getEnabledPanels:u,panelIndex:p}=Ke(),{inFullscreen:b}=Ve(),I=d(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=d(()=>e.vertical===!0?"vertical":"horizontal"),N=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),A=d(()=>{const c=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?c.reverse():c}),q=d(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),$=d(()=>e.navigationActiveIcon||q.value),E=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));X(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),P())}),X(()=>e.autoplay,c=>{c?P():clearInterval(r)});function P(){const c=xe(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(c>=0?x:s,Math.abs(c))}be(()=>{e.autoplay&&P()}),Ce(()=>{clearInterval(r)});function B(c,S){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},u().map(S))])}function M(){const c=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>f(K,k(h({key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`},a.btnProps),{onClick:a.onClick})),D=t-1;c.push(B("buttons",(a,l)=>{const g=a.props.name,w=p.value===l;return S({index:l,maxIndex:D,name:g,active:w,btnProps:h({icon:w===!0?$.value:q.value,size:"sm"},T.value),onClick:()=>{y(g)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push(B("thumbnails",D=>{const a=D.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+S,src:a.imgSrc||a["img-src"],onClick:()=>{y(a.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[f(K,k(h({icon:A.value[0]},T.value),{onClick:s}))])),(e.infinite===!0||p.value<t-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[f(K,k(h({icon:A.value[1]},T.value),{onClick:x}))]))),qe(n.control,c)}return()=>(t=i(n),f("div",{class:N.value,style:I.value},[Pe("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>_.value)].concat(M())))}});const Ye={class:"q-pa-md full-height"},je={class:"full-width primary-card"},Re={class:"text-md text-dark"},He=["innerHTML"],ot={setup(e){const n=W(0),{fav_cars:o}=Ne(Se());return(m,r)=>(O(),Z("div",Ye,[G(Xe,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=t=>n.value=t),vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",animated:"","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",autoplay:"","control-color":"primary",class:"bg-transparent full-height"},{default:J(()=>[(O(!0),Z(we,null,ke(Ie(o),(t,i)=>(O(),Te(Oe,{name:i,class:"q-pa-none q-ma-none column no-wrap flex-center"},{default:J(()=>[U("div",je,[G(ce,{src:t.image_url,style:{height:"350px"}},null,8,["src"]),U("p",Re,Ae(t==null?void 0:t.name),1),U("div",{innerHTML:t==null?void 0:t.description},null,8,He)])]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])]))}};export{ot as default};
