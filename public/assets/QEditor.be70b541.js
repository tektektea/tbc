var rt=Object.defineProperty,st=Object.defineProperties;var ut=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var qe=(e,t,o)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))ct.call(t,o)&&qe(e,o,t[o]);if(Se)for(var o of Se(t))dt.call(t,o)&&qe(e,o,t[o]);return e},q=(e,t)=>st(e,ut(t));import{t as ft,j as re,k,l as p,m as se,r as O,a7 as ht,ap as ce,q as Le,an as de,y as $,p as Ce,s as ae,u as ue,as as ye,v as be,aU as Be,al as mt,H as vt,at as Oe,a4 as $e,aV as Re,au as Me,a5 as _e,aW as Ae,av as Ne,aX as We,aw as Fe,aY as De,aZ as gt,ar as pt,a_ as yt,a$ as Pe,E as je,b0 as bt,a2 as Ie,b1 as wt,ai as Qe,b2 as kt,ah as Te,b3 as Ct,U as Ue,g as V,aq as Ke,b4 as Ge,b5 as Tt,b6 as xt}from"./index.4d63b74e.js";import{c as we}from"./selection.4ec8e81b.js";import{Q as ze,a as St}from"./QItemSection.da3e2aed.js";import{u as qt,a as Bt,b as Pt}from"./use-fullscreen.967f37ee.js";function Xe(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const n=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,l=n.display;return l==="block"||l==="table"?e:Xe(e.parentNode)}function pe(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Ye(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let n=0;t.count!==0&&n<e.childNodes.length;n++)o=Ye(e.childNodes[n],t,o);return o}const zt=/^https?:\/\//;class Et{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(pe(t.anchorNode,this.el,!0)&&pe(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Xe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),n=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),n.removeAllRanges(),n.addRange(o)):(n.selectAllChildren(this.el),n.collapseToEnd())}savePosition(){let t=-1,o;const n=document.getSelection(),l=this.el.parentNode;if(n.focusNode&&pe(n.focusNode,l))for(o=n.focusNode,t=n.focusOffset;o&&o!==l;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),n=Ye(this.el,{count:this.savedPos});n&&(n.collapse(!1),o.removeAllRanges(),o.addRange(n))}}hasParent(t,o){const n=o?this.parent:this.blockParent;return n!==null?n.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,n=this.parent){return n===null?!1:t.includes(n.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,n.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const n=document.queryCommandValue(t);return n===`"${o}"`||n===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(t);return o!==void 0?l===o:l}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,n=ft){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){n();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(t==="link"){const l=this.getParentAttribute("href");if(l===null){const u=this.selectWord(this.selection),r=u?u.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=zt.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(u.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),n();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),n();return}document.execCommand(t,!1,o),n()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const n=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const l=t.focusNode,u=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",n[0],"character"),t.modify("move",n[1],"word"),t.extend(l,u),t.modify("extend",n[1],"character"),t.modify("extend",n[0],"word"),t}}var Ht=re({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=k(()=>{const n=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${n.length>0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>p("div",{class:o.value},se(t.default))}});const Ze={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Je({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:u}=ue(),r=O(null);let d;function f(s){return r.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const c={};o===void 0&&(Object.assign(c,{hide(s){l.hide(s)},toggle(s){l.toggle(s),s.qAnchorHandled=!0},toggleKey(s){ht(s,13)===!0&&c.toggle(s)},contextClick(s){l.hide(s),ce(s),Le(()=>{l.show(s),s.qAnchorHandled=!0})},prevent:ce,mobileTouch(s){if(c.mobileCleanup(s),f(s)!==!0)return;l.hide(s),r.value.classList.add("non-selectable");const b=s.target;de(c,"anchor",[[b,"touchmove","mobileCleanup","passive"],[b,"touchend","mobileCleanup","passive"],[b,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{l.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){r.value.classList.remove("non-selectable"),clearTimeout(d),e.value===!0&&s!==void 0&&we()}}),o=function(s=n.contextMenu){if(n.noParentEvent===!0||r.value===null)return;let b;s===!0?l.$q.platform.is.mobile===!0?b=[[r.value,"touchstart","mobileTouch","passive"]]:b=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:b=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],de(c,"anchor",b)});function h(){ye(c,"anchor")}function C(s){for(r.value=s;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;o()}function g(){if(n.target===!1||n.target==="")r.value=null;else if(n.target===!0)C(l.$el.parentNode);else{let s=n.target;if(typeof n.target=="string")try{s=document.querySelector(n.target)}catch{s=void 0}s!=null?(r.value=s.$el||s,o()):(r.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return $(()=>n.contextMenu,s=>{r.value!==null&&(h(),o(s))}),$(()=>n.target,()=>{r.value!==null&&h(),g()}),$(()=>n.noParentEvent,s=>{r.value!==null&&(s===!0?h():o())}),Ce(()=>{g(),t!==!0&&n.modelValue===!0&&r.value===null&&u("update:modelValue",!1)}),ae(()=>{clearTimeout(d),h()}),{anchorEl:r,canShow:f,anchorEvents:c}}function Ve(e,t){const o=O(null);let n;function l(d,f){const c=`${f!==void 0?"add":"remove"}EventListener`,h=f!==void 0?f:n;d!==window&&d[c]("scroll",h,be.passive),window[c]("scroll",h,be.passive),n=f}function u(){o.value!==null&&(l(o.value),o.value=null)}const r=$(()=>e.noParentEvent,()=>{o.value!==null&&(u(),t())});return ae(r),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:l}}let et;const{notPassiveCapture:fe}=be,K=[];function he(e){clearTimeout(et);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=Be.length-1;for(;o>=0;){const n=Be[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=K.length-1;n>=0;n--){const l=K[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function tt(e){K.push(e),K.length===1&&(document.addEventListener("mousedown",he,fe),document.addEventListener("touchstart",he,fe))}function me(e){const t=K.findIndex(o=>o===e);t>-1&&(K.splice(t,1),K.length===0&&(clearTimeout(et),document.removeEventListener("mousedown",he,fe),document.removeEventListener("touchstart",he,fe)))}let Ee,He;function ve(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ke={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ke[`${e}#ltr`]=e,ke[`${e}#rtl`]=e});function ge(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:ke[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function Lt(e,t){let{top:o,left:n,right:l,bottom:u,width:r,height:d}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],u+=t[1],l+=t[0],r+=t[0],d+=t[1]),{top:o,left:n,right:l,bottom:u,width:r,height:d,middle:n+(l-n)/2,center:o+(u-o)/2}}function Ot(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function nt(e){if(mt.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:c}=window.visualViewport;f!==Ee&&(d.setProperty("--q-pe-left",f+"px"),Ee=f),c!==He&&(d.setProperty("--q-pe-top",c+"px"),He=c)}let t;const{scrollLeft:o,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=Lt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:d,left:f}=e.anchorEl.getBoundingClientRect(),c=d+e.absoluteOffset.top,h=f+e.absoluteOffset.left;t={top:c,left:h,width:1,height:1,right:h+1,center:c,middle:h,bottom:c+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const u=Ot(e.el),r={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};$t(r,t,u,e.anchorOrigin,e.selfOrigin),l={top:r.top+"px",left:r.left+"px"},r.maxHeight!==void 0&&(l.maxHeight=r.maxHeight+"px",t.height>r.maxHeight&&(l.minHeight=l.maxHeight)),r.maxWidth!==void 0&&(l.maxWidth=r.maxWidth+"px",t.width>r.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function $t(e,t,o,n,l){const u=o.bottom,r=o.right,d=vt(),f=window.innerHeight-d,c=document.body.clientWidth;if(e.top<0||e.top+u>f)if(l.vertical==="center")e.top=t[n.vertical]>f/2?Math.max(0,f-u):0,e.maxHeight=Math.min(u,f);else if(t[n.vertical]>f/2){const h=Math.min(f,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,h),e.top=Math.max(0,h-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,f-e.top);if(e.left<0||e.left+r>c)if(e.maxWidth=Math.min(r,c),l.horizontal==="middle")e.left=t[n.horizontal]>c/2?Math.max(0,c-r):0;else if(t[n.horizontal]>c/2){const h=Math.min(c,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(r,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(r,c-e.left)}var Rt=re({name:"QMenu",inheritAttrs:!1,props:q(w(w(w(w({},Ze),Oe),$e),Re),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ve},self:{type:String,validator:ve},offset:{type:Array,validator:ot},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...Me,"click","escape-key"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,u,r,d;const f=ue(),{proxy:c}=f,{$q:h}=c,C=O(null),g=O(!1),s=k(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),b=_e(e,h),{registerTick:B,removeTick:P}=Ae(),{registerTimeout:m,removeTimeout:N}=Ne(),{transition:W,transitionStyle:ee}=We(e,g),{localScrollTarget:M,changeScrollEvent:z,unconfigureScrollTarget:x}=Ve(e,T),{anchorEl:E,canShow:te}=Je({showing:g}),{hide:F}=Fe({showing:g,canShow:te,handleShow:Z,handleHide:le,hideOnRouteChange:s,processOnMount:!0}),{showPortal:D,hidePortal:j,renderPortal:oe}=De(f,C,ie),I={anchorEl:E,innerRef:C,onClickOutside(v){if(e.persistent!==!0&&g.value===!0)return F(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&Te(v),!0}},G=k(()=>ge(e.anchor||(e.cover===!0?"center middle":"bottom start"),h.lang.rtl)),X=k(()=>e.cover===!0?G.value:ge(e.self||"top start",h.lang.rtl)),_=k(()=>(e.square===!0?" q-menu--square":"")+(b.value===!0?" q-menu--dark q-dark":"")),ne=k(()=>e.autoClose===!0?{onClick:U}:{}),Y=k(()=>g.value===!0&&e.persistent!==!0);$(Y,v=>{v===!0?(wt(R),tt(I)):(Pe(R),me(I))});function Q(){Qe(()=>{let v=C.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function Z(v){if(P(),N(),l=e.noRefocus===!1?document.activeElement:null,gt(H),D(),T(),u=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const i=pt(v);if(i.left!==void 0){const{top:a,left:y}=E.value.getBoundingClientRect();u={left:i.left-y,top:i.top-a}}}r===void 0&&(r=$(()=>h.screen.width+"|"+h.screen.height+"|"+e.self+"|"+e.anchor+"|"+h.lang.rtl,L)),e.noFocus!==!0&&document.activeElement.blur(),B(()=>{L(),e.noFocus!==!0&&Q()}),m(()=>{h.platform.is.ios===!0&&(d=e.autoClose,C.value.click()),L(),D(!0),o("show",v)},e.transitionDuration)}function le(v){P(),N(),j(),J(!0),l!==null&&(v===void 0||v.qClickOutside!==!0)&&(l.focus(),l=null),m(()=>{j(!0),o("hide",v)},e.transitionDuration)}function J(v){u=void 0,r!==void 0&&(r(),r=void 0),(v===!0||g.value===!0)&&(yt(H),x(),me(I),Pe(R)),v!==!0&&(l=null)}function T(){(E.value!==null||e.scrollTarget!==void 0)&&(M.value=je(E.value,e.scrollTarget),z(M.value,L))}function U(v){d!==!0?(bt(c,v),o("click",v)):d=!1}function H(v){Y.value===!0&&e.noFocus!==!0&&kt(C.value,v.target)!==!0&&Q()}function R(v){o("escape-key"),F(v)}function L(){const v=C.value;v===null||E.value===null||nt({el:v,offset:e.offset,anchorEl:E.value,anchorOrigin:G.value,selfOrigin:X.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(){return p(Ie,{name:W.value,appear:!0},()=>g.value===!0?p("div",w(q(w({},n),{ref:C,tabindex:-1,class:["q-menu q-position-engine scroll"+_.value,n.class],style:[n.style,ee.value]}),ne.value),se(t.default)):null)}return ae(J),Object.assign(c,{focus:Q,updatePosition:L}),oe}}),Mt=re({name:"QBtnDropdown",props:q(w({},Ct),{modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean}),emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:o}){const{proxy:n}=ue(),l=O(e.modelValue),u=O(null),r=k(()=>{const m={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true"};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(m["aria-disabled"]="true"),m}),d=k(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));$(()=>e.modelValue,m=>{u.value!==null&&u.value[m?"show":"hide"]()}),$(()=>e.split,P);function f(m){l.value=!0,o("before-show",m)}function c(m){o("show",m),o("update:modelValue",!0)}function h(m){l.value=!1,o("before-hide",m)}function C(m){o("hide",m),o("update:modelValue",!1)}function g(m){o("click",m)}function s(m){Ke(m),P(),o("click",m)}function b(m){u.value!==null&&u.value.toggle(m)}function B(m){u.value!==null&&u.value.show(m)}function P(m){u.value!==null&&u.value.hide(m)}return Object.assign(n,{show:B,hide:P,toggle:b}),Ce(()=>{e.modelValue===!0&&B()}),()=>{const m=[p(Ue,{class:d.value,name:e.dropdownIcon||n.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&m.push(p(Rt,{ref:u,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:f,onShow:c,onBeforeHide:h,onHide:C},t.default)),e.split===!1?p(V,q(w(q(w({class:"q-btn-dropdown q-btn-dropdown--simple"},e),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1}),r.value),{onClick:g}),()=>se(t.label,[]).concat(m)):p(Ht,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[p(V,q(w({class:"q-btn-dropdown--current"},e),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:s}),t.label),p(V,q(w({class:"q-btn-dropdown__arrow-container q-anchor--skip"},r.value),{disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple}),()=>m)])}}}),_t=re({name:"QTooltip",inheritAttrs:!1,props:q(w(w(w({},Ze),Oe),Re),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ve},self:{type:String,default:"top middle",validator:ve},offset:{type:Array,default:()=>[14,14],validator:ot},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[...Me],setup(e,{slots:t,emit:o,attrs:n}){let l,u;const r=ue(),{proxy:{$q:d}}=r,f=O(null),c=O(!1),h=k(()=>ge(e.anchor,d.lang.rtl)),C=k(()=>ge(e.self,d.lang.rtl)),g=k(()=>e.persistent!==!0),{registerTick:s,removeTick:b}=Ae(),{registerTimeout:B,removeTimeout:P}=Ne(),{transition:m,transitionStyle:N}=We(e,c),{localScrollTarget:W,changeScrollEvent:ee,unconfigureScrollTarget:M}=Ve(e,Z),{anchorEl:z,canShow:x,anchorEvents:E}=Je({showing:c,configureAnchorEl:Q}),{show:te,hide:F}=Fe({showing:c,canShow:x,handleShow:I,handleHide:G,hideOnRouteChange:g,processOnMount:!0});Object.assign(E,{delayShow:ne,delayHide:Y});const{showPortal:D,hidePortal:j,renderPortal:oe}=De(r,f,J);if(d.platform.is.mobile===!0){const T={anchorEl:z,innerRef:f,onClickOutside(H){return F(H),H.target.classList.contains("q-dialog__backdrop")&&Te(H),!0}},U=k(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);$(U,H=>{(H===!0?tt:me)(T)}),ae(()=>{me(T)})}function I(T){b(),P(),D(),s(()=>{u=new MutationObserver(()=>_()),u.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),_(),Z()}),l===void 0&&(l=$(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,_)),B(()=>{D(!0),o("show",T)},e.transitionDuration)}function G(T){b(),P(),j(),X(),B(()=>{j(!0),o("hide",T)},e.transitionDuration)}function X(){u!==void 0&&(u.disconnect(),u=void 0),l!==void 0&&(l(),l=void 0),M(),ye(E,"tooltipTemp")}function _(){const T=f.value;z.value===null||!T||nt({el:T,offset:e.offset,anchorEl:z.value,anchorOrigin:h.value,selfOrigin:C.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ne(T){if(d.platform.is.mobile===!0){we(),document.body.classList.add("non-selectable");const U=z.value,H=["touchmove","touchcancel","touchend","click"].map(R=>[U,R,"delayHide","passiveCapture"]);de(E,"tooltipTemp",H)}B(()=>{te(T)},e.delay)}function Y(T){P(),d.platform.is.mobile===!0&&(ye(E,"tooltipTemp"),we(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),B(()=>{F(T)},e.hideDelay)}function Q(){if(e.noParentEvent===!0||z.value===null)return;const T=d.platform.is.mobile===!0?[[z.value,"touchstart","delayShow","passive"]]:[[z.value,"mouseenter","delayShow","passive"],[z.value,"mouseleave","delayHide","passive"]];de(E,"anchor",T)}function Z(){if(z.value!==null||e.scrollTarget!==void 0){W.value=je(z.value,e.scrollTarget);const T=e.noParentEvent===!0?_:F;ee(W.value,T)}}function le(){return c.value===!0?p("div",q(w({},n),{ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,N.value],role:"complementary"}),se(t.default)):null}function J(){return p(Ie,{name:m.value,appear:!0},le)}return ae(X),Object.assign(r.proxy,{updatePosition:_}),oe}});function lt(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function xe(e){return p("div",{class:"q-editor__toolbar-group"},e)}function it(e,t,o,n=!1){const l=n||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),u=[];if(t.tip&&e.$q.platform.is.desktop){const r=t.key?p("div",[p("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;u.push(p(_t,{delay:1e3},()=>[p("div",{innerHTML:t.tip}),r]))}return p(V,q(w({},e.buttonProps.value),{icon:t.icon!==null?t.icon:void 0,color:l?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:l&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(r){o&&o(),lt(r,t,e)}}),()=>u)}function At(e,t){const o=t.list==="only-icons";let n=t.label,l=t.icon!==null?t.icon:void 0,u,r;function d(){c.component.proxy.hide()}if(o)r=t.options.map(h=>{const C=h.type===void 0?e.caret.is(h.cmd,h.param):!1;return C&&(n=h.tip,l=h.icon!==null?h.icon:void 0),it(e,h,d,C)}),u=e.toolbarBackgroundClass.value,r=[xe(r)];else{const h=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,C=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,g=t.list==="no-icons";r=t.options.map(s=>{const b=s.disable?s.disable(e):!1,B=s.type===void 0?e.caret.is(s.cmd,s.param):!1;B&&(n=s.tip,l=s.icon!==null?s.icon:void 0);const P=s.htmlTip;return p(St,{active:B,activeClass:h,clickable:!0,disable:b,dense:!0,onClick(m){d(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),lt(m,s,e)}},()=>[g===!0?null:p(ze,{class:B?h:C,side:!0},()=>p(Ue,{name:s.icon!==null?s.icon:void 0})),p(ze,P?()=>p("div",{class:"text-no-wrap",innerHTML:s.htmlTip}):s.tip?()=>p("div",{class:"text-no-wrap"},s.tip):void 0)])}),u=[e.toolbarBackgroundClass.value,C]}const f=t.highlight&&n!==t.label,c=p(Mt,q(w({},e.buttonProps.value),{noCaps:!0,noWrap:!0,color:f?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:f&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:n,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:l,contentClass:u}),()=>r);return c}function Nt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>xe(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?se(e.slots[o.slot]):o.type==="dropdown"?At(e,o):it(e,o))))}function Wt(e,t,o,n={}){const l=Object.keys(n);if(l.length===0)return{};const u={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return l.forEach(r=>{const d=n[r];u[r]={cmd:"fontName",param:d,icon:o,tip:d,htmlTip:`<font face="${d}">${d}</font>`}}),u}function Ft(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const n=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[p("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),p("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:l=>{Ke(l),o=l.target.value},onKeydown:l=>{if(Ge(l)!==!0)switch(l.keyCode){case 13:return ce(l),n();case 27:ce(l),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),xe([p(V,q(w({key:"qedt_btm_rem",tabindex:-1},e.buttonProps.value),{label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}})),p(V,q(w({key:"qedt_btm_upd"},e.buttonProps.value),{label:e.$q.lang.label.update,noCaps:!0,onClick:n}))])]}}var Kt=re({name:"QEditor",props:q(w(w({},$e),qt),{modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean}),emits:[...Bt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(e,{slots:t,emit:o,attrs:n}){const{proxy:l,vnode:u}=ue(),{$q:r}=l,d=_e(e,r),{inFullscreen:f,toggleFullscreen:c}=Pt(),h=Tt(n,u),C=O(null),g=O(null),s=O(null),b=O(!1),B=k(()=>!e.readonly&&!e.disable);let P,m,N=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),P=window.getComputedStyle(document.body).fontFamily;const W=k(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),ee=k(()=>{const i=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:i,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!B.value,size:"sm"}}),M=k(()=>{const i=r.lang.editor,a=r.iconSet.editor;return{bold:{cmd:"bold",icon:a.bold,tip:i.bold,key:66},italic:{cmd:"italic",icon:a.italic,tip:i.italic,key:73},strike:{cmd:"strikeThrough",icon:a.strikethrough,tip:i.strikethrough,key:83},underline:{cmd:"underline",icon:a.underline,tip:i.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:a.unorderedList,tip:i.unorderedList},ordered:{cmd:"insertOrderedList",icon:a.orderedList,tip:i.orderedList},subscript:{cmd:"subscript",icon:a.subscript,tip:i.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:a.superscript,tip:i.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:y=>y.caret&&!y.caret.can("link"),icon:a.hyperlink,tip:i.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:a.toggleFullscreen,tip:i.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:a.viewSource,tip:i.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:a.quote,tip:i.quote,key:81},left:{cmd:"justifyLeft",icon:a.left,tip:i.left},center:{cmd:"justifyCenter",icon:a.center,tip:i.center},right:{cmd:"justifyRight",icon:a.right,tip:i.right},justify:{cmd:"justifyFull",icon:a.justify,tip:i.justify},print:{type:"no-state",cmd:"print",icon:a.print,tip:i.print,key:80},outdent:{type:"no-state",disable:y=>y.caret&&!y.caret.can("outdent"),cmd:"outdent",icon:a.outdent,tip:i.outdent},indent:{type:"no-state",disable:y=>y.caret&&!y.caret.can("indent"),cmd:"indent",icon:a.indent,tip:i.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:a.removeFormat,tip:i.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:a.hr,tip:i.hr},undo:{type:"no-state",cmd:"undo",icon:a.undo,tip:i.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:a.redo,tip:i.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:a.heading1||a.heading,tip:i.heading1,htmlTip:`<h1 class="q-ma-none">${i.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:a.heading2||a.heading,tip:i.heading2,htmlTip:`<h2 class="q-ma-none">${i.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:a.heading3||a.heading,tip:i.heading3,htmlTip:`<h3 class="q-ma-none">${i.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:a.heading4||a.heading,tip:i.heading4,htmlTip:`<h4 class="q-ma-none">${i.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:a.heading5||a.heading,tip:i.heading5,htmlTip:`<h5 class="q-ma-none">${i.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:a.heading6||a.heading,tip:i.heading6,htmlTip:`<h6 class="q-ma-none">${i.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:a.heading,tip:i.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:a.code,htmlTip:`<code>${i.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:a.size1||a.size,tip:i.size1,htmlTip:`<font size="1">${i.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:a.size2||a.size,tip:i.size2,htmlTip:`<font size="2">${i.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:a.size3||a.size,tip:i.size3,htmlTip:`<font size="3">${i.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:a.size4||a.size,tip:i.size4,htmlTip:`<font size="4">${i.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:a.size5||a.size,tip:i.size5,htmlTip:`<font size="5">${i.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:a.size6||a.size,tip:i.size6,htmlTip:`<font size="6">${i.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:a.size7||a.size,tip:i.size7,htmlTip:`<font size="7">${i.size7}</font>`}}}),z=k(()=>{const i=e.definitions||{},a=e.definitions||e.fonts?xt(!0,{},M.value,i,Wt(P,r.lang.editor.defaultFont,r.iconSet.editor.font,e.fonts)):M.value;return e.toolbar.map(y=>y.map(S=>{if(S.options)return{type:"dropdown",icon:S.icon,label:S.label,size:"sm",dense:!0,fixedLabel:S.fixedLabel,fixedIcon:S.fixedIcon,highlight:S.highlight,list:S.list,options:S.options.map(at=>a[at])};const A=a[S];return A?A.type==="no-state"||i[S]&&(A.cmd===void 0||M.value[A.cmd]&&M.value[A.cmd].type==="no-state")?A:Object.assign({type:"toggle"},A):{type:"slot",slot:S}}))}),x={$q:r,props:e,slots:t,inFullscreen:f,toggleFullscreen:c,runCmd:R,isViewingSource:b,editLinkUrl:s,toolbarBackgroundClass:W,buttonProps:ee,contentRef:g,buttons:z,setContent:H};$(()=>e.modelValue,i=>{N!==i&&(N=i,H(i,!0))});const E=k(()=>e.toolbar&&e.toolbar.length>0),te=k(()=>{const i={},a=y=>{y.key&&(i[y.key]={cmd:y.cmd,param:y.param})};return z.value.forEach(y=>{y.forEach(S=>{S.options?S.options.forEach(a):a(S)})}),i}),F=k(()=>f.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),D=k(()=>`q-editor q-editor--${b.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(f.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(d.value===!0?" q-editor--dark q-dark":"")),j=k(()=>[e.contentClass,"q-editor__content",{col:f.value,"overflow-auto":f.value||e.maxHeight}]),oe=k(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function I(){if(g.value!==null){const i=`inner${b.value===!0?"Text":"HTML"}`,a=g.value[i];a!==e.modelValue&&(N=a,o("update:modelValue",a))}}function G(i){if(o("keydown",i),i.ctrlKey!==!0||Ge(i)===!0){L();return}const a=i.keyCode,y=te.value[a];if(y!==void 0){const{cmd:S,param:A}=y;Te(i),R(S,A,!1)}}function X(i){L(),o("click",i)}function _(i){if(g.value!==null){const{scrollTop:a,scrollHeight:y}=g.value;m=y-a}x.caret.save(),o("blur",i)}function ne(i){Le(()=>{g.value!==null&&m!==void 0&&(g.value.scrollTop=g.value.scrollHeight-m)}),o("focus",i)}function Y(i){const a=C.value;if(a!==null&&a.contains(i.target)===!0&&(i.relatedTarget===null||a.contains(i.relatedTarget)!==!0)){const y=`inner${b.value===!0?"Text":"HTML"}`;x.caret.restorePosition(g.value[y].length),L()}}function Q(i){const a=C.value;a!==null&&a.contains(i.target)===!0&&(i.relatedTarget===null||a.contains(i.relatedTarget)!==!0)&&(x.caret.savePosition(),L())}function Z(){m=void 0}function le(i){x.caret.save(),o("mouseup",i)}function J(){m=void 0}function T(i){x.caret.save(),o("keyup",i)}function U(i){x.caret.save(),o("touchend",i)}function H(i,a){if(g.value!==null){a===!0&&x.caret.savePosition();const y=`inner${b.value===!0?"Text":"HTML"}`;g.value[y]=i,a===!0&&(x.caret.restorePosition(g.value[y].length),L())}}function R(i,a,y=!0){ie(),x.caret.restore(),x.caret.apply(i,a,()=>{ie(),x.caret.save(),y&&L()})}function L(){setTimeout(()=>{s.value=null,l.$forceUpdate()},1)}function ie(){Qe(()=>{g.value!==null&&g.value.focus({preventScroll:!0})})}function v(){return g.value}return Object.assign(l,{runCmd:R,refreshToolbar:L,focus:ie,getContentEl:v}),Ce(()=>{x.caret=l.caret=new Et(g.value,x),H(e.modelValue),L()}),()=>{let i;if(E.value){const a=[p("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+W.value},Nt(x))];s.value!==null&&a.push(p("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+W.value},Ft(x))),i=p("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},a)}return p("div",q(w({ref:C,class:D.value,style:{height:f.value===!0?"100%":null}},oe.value),{onFocusin:Y,onFocusout:Q}),[i,p("div",q(w({ref:g,style:F.value,class:j.value,contenteditable:B.value,placeholder:e.placeholder},h.listeners.value),{onInput:I,onKeydown:G,onClick:X,onBlur:_,onFocus:ne,onMousedown:Z,onTouchstartPassive:J,onMouseup:le,onKeyup:T,onTouchend:U}))])}}});export{Kt as Q};
