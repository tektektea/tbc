var Be=Object.defineProperty,Ne=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var re=(o,e,t)=>e in o?Be(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,S=(o,e)=>{for(var t in e||(e={}))oe.call(e,t)&&re(o,t,e[t]);if(R)for(var t of R(e))ie.call(e,t)&&re(o,t,e[t]);return o},F=(o,e)=>Ne(o,Ze(e));var ne=(o,e)=>{var t={};for(var r in o)oe.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&R)for(var r of R(o))e.indexOf(r)<0&&ie.call(o,r)&&(t[r]=o[r]);return t};import{e as Ae,r as v,u as I,al as Te,am as Re,an as Fe,o as Q,h as Ve,g as $e,m as De,Z as se,k as Ue,ao as Ge,E as _,w as O,ap as E,l as B,aq as Ce,ar as we,H as N,I as D,L as M,as as Y,q as C,at as xe,au as Ke,av as Je,a1 as We,f as _e,aw as Qe,ax as Ye,ay as Me,_ as Se,G as K,J as Oe,C as He,T as Xe,O as le,az as U,M as et}from"./index.8b1f3208.js";var tt=Ae({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(o,{slots:e,emit:t}){const r=De(),i=v(null);let s=0;const l=[];function n(h){const m=[],g=typeof h=="boolean"?h:o.noErrorFocus!==!0,f=++s,y=(w,k)=>{t("validation-"+(w===!0?"success":"error"),k)};for(let w=0;w<l.length;w++){const k=l[w],b=k.validate();if(typeof b.then=="function")m.push(b.then(x=>({valid:x,comp:k}),x=>({valid:!1,comp:k,err:x})));else if(b!==!0){if(o.greedy===!1)return y(!1,k),g===!0&&typeof k.focus=="function"&&k.focus(),Promise.resolve(!1);m.push({valid:!1,comp:k})}}return m.length===0?(y(!0),Promise.resolve(!0)):Promise.all(m).then(w=>{const k=w.filter(ze=>ze.valid!==!0);if(k.length===0)return f===s&&y(!0),!0;const{valid:b,comp:x,err:te}=k[0];return f===s&&(te!==void 0&&console.error(te),y(!1,x),g===!0&&b!==!0&&typeof x.focus=="function"&&x.focus()),!1})}function c(){s++,l.forEach(h=>{typeof h.resetValidation=="function"&&h.resetValidation()})}function u(h){h!==void 0&&se(h);const m=s+1;n().then(g=>{m===s&&g===!0&&(o.onSubmit!==void 0?t("submit",h):h!==void 0&&h.target!==void 0&&typeof h.target.submit=="function"&&h.target.submit())})}function d(h){h!==void 0&&se(h),t("reset"),Ue(()=>{c(),o.autofocus===!0&&o.noResetFocus!==!0&&a()})}function a(){Ge(()=>{if(i.value===null)return;const h=i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),m=>m.tabIndex>-1);h!=null&&h.focus({preventScroll:!0})})}I(Te,{bindComponent(h){l.push(h)},unbindComponent(h){const m=l.indexOf(h);m>-1&&l.splice(m,1)}});let p=!1;return Re(()=>{p=!0}),Fe(()=>{p===!0&&o.autofocus===!0&&a()}),Q(()=>{o.autofocus===!0&&a()}),Object.assign(r.proxy,{validate:n,resetValidation:c,submit:u,reset:d,focus:a,getValidationComponents:()=>l}),()=>Ve("form",{class:"q-form",ref:i,onSubmit:u,onReset:d},$e(e.default))}});let Z=Symbol("map"),A=Symbol("api"),be=Symbol("marker"),qe=Symbol("markerCluster"),Ie=Symbol("mapTilesLoaded"),ae=v(null),P="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var rt=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=i;r--!==0;)if(i=s[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class q{constructor({apiKey:e,channel:t,client:r,id:i="__googleMapsScriptId",libraries:s=[],language:l,region:n,version:c,mapIds:u,nonce:d,retries:a=3,url:p="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=c,this.apiKey=e,this.channel=t,this.client=r,this.id=i||"__googleMapsScriptId",this.libraries=s,this.language=l,this.region=n,this.mapIds=u,this.nonce=d,this.retries=a,this.url=p,q.instance){if(!rt(this.options,q.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(q.instance.options)}`);return q.instance}q.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}let ue="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var H=_({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:ue,setup(o,{emit:e}){let t=v(null),r=v(!1),i=v(null),s=v(null),l=v(!1);I(Z,i),I(A,s),I(Ie,l);let n=()=>{const d=S({},o);Object.keys(d).forEach(p=>{d[p]===void 0&&delete d[p]});var a=p=>{var h;return p?{position:(h=s.value)===null||h===void 0?void 0:h.ControlPosition[p]}:{}};return a={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:a(o.panControlPosition),zoomControlOptions:a(o.zoomControlPosition),rotateControlOptions:a(o.rotateControlPosition),streetViewControlOptions:a(o.streetViewControlPosition),fullscreenControlOptions:a(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi},S(S({},d),a)},c=O([s,i],([d,a])=>{d&&a&&(d.event.addListenerOnce(a,"tilesloaded",()=>{l.value=!0}),setTimeout(c,0))},{immediate:!0}),u=()=>{try{const{apiKey:d,region:a,version:p,language:h,libraries:m}=o;ae.value=new q({apiKey:d,region:a,version:p,language:h,libraries:m})}catch(d){console.error(d)}};return Q(()=>{u(),ae.value.load().then(()=>{s.value=google.maps,i.value=new google.maps.Map(t.value,n()),ue.forEach(a=>{var p;(p=i.value)===null||p===void 0||p.addListener(a,h=>e(a,h))}),r.value=!0;let d=Object.keys(o).filter(a=>!["center","zoom"].includes(a)).map(a=>E(o,a));O([()=>o.center,()=>o.zoom,...d],([a,p],[h,m])=>{var g,f,y;let x=n(),{center:w,zoom:k}=x,b=ne(x,["center","zoom"]);(g=i.value)===null||g===void 0||g.setOptions(b),p!==void 0&&p!==m&&((f=i.value)===null||f===void 0||f.setZoom(p)),p=!h||a.lng!==h.lng||a.lat!==h.lat,a&&p&&((y=i.value)===null||y===void 0||y.panTo(a))})})}),B(()=>{var d;l.value=!1,i.value&&((d=s.value)===null||d===void 0||d.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:r,map:i,api:s,mapTilesLoaded:l}}});function Pe(o,e){if(e===void 0&&(e={}),e=e.insertAt,o&&typeof document!="undefined"){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}Pe(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let ot=Me();Ce("data-v-177d06e3");let it={ref:"mapRef",class:"mapdiv"};we();let nt=ot(o=>(N(),D("div",null,[M("div",it,null,512),Y(o.$slots,"default",{ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded},void 0,!0)])));H.render=nt;H.__scopeId="data-v-177d06e3";let T=(o,e,t,r)=>{let i=null;const s=v(null),l=C(Z,v()),n=C(A,v()),c=C(qe,v()),u=_e(()=>!!(c.value&&n.value&&i instanceof n.value.Marker));return O([l,t],(d,[a,p])=>{var h,m,g;d=JSON.stringify(t.value)!==JSON.stringify(p)||l.value!==a,l.value&&n.value&&d&&(i?(i.setOptions(t.value),u.value&&((h=c.value)===null||h===void 0||h.removeMarker(i),(m=c.value)===null||m===void 0||m.addMarker(i))):(s.value=o==="Marker"?i=new n.value[o](t.value):i=new n.value[o](F(S({},t.value),{map:l.value})),u.value?(g=c.value)===null||g===void 0||g.addMarker(i):i.setMap(l.value),e.forEach(f=>{i==null||i.addListener(f,y=>r(f,y))})))},{immediate:!0}),B(()=>{var d,a;i&&((d=n.value)===null||d===void 0||d.event.clearInstanceListeners(i),u.value?(a=c.value)===null||a===void 0||a.removeMarker(i):i.setMap(null))}),s},de="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var st=_({name:"Marker",props:{options:{type:Object,required:!0}},emits:de,setup(o,{emit:e,expose:t,slots:r}){return o=E(o,"options"),e=T("Marker",de,o,e),I(be,e),t({marker:e}),()=>{var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});_({name:"Polyline",props:{options:{type:Object,required:!0}},emits:P,setup(o,{emit:e}){return o=E(o,"options"),{polyline:T("Polyline",P,o,e)}},render:()=>null});_({name:"Polygon",props:{options:{type:Object,required:!0}},emits:P,setup(o,{emit:e}){return o=E(o,"options"),{polygon:T("Polygon",P,o,e)}},render:()=>null});let ce=P.concat(["bounds_changed"]);_({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:ce,setup(o,{emit:e}){return o=E(o,"options"),{rectangle:T("Rectangle",ce,o,e)}},render:()=>null});let pe=P.concat(["center_changed","radius_changed"]);_({name:"Circle",props:{options:{type:Object,required:!0}},emits:pe,setup(o,{emit:e}){return o=E(o,"options"),{circle:T("Circle",pe,o,e)}},render:()=>null});var lt=_({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(o,{emit:e}){let t=v(null),r=C(Z,v()),i=C(A,v()),s=C(Ie,v(!1)),l=v(!1),n=O([s,i,t],([d,a,p])=>{a&&d&&p&&(c(o.position),l.value=!0,e("content:loaded"),setTimeout(n,0))},{immediate:!0}),c=d=>{r.value&&i.value&&t.value&&r.value.controls[i.value.ControlPosition[d]].push(t.value)},u=d=>{if(r.value&&i.value){let a=null;d=i.value.ControlPosition[d],r.value.controls[d].forEach((p,h)=>{p===t.value&&(a=h)}),a!==null&&r.value.controls[d].removeAt(a)}};return B(()=>u(o.position)),O(()=>o.position,(d,a)=>{u(a),c(d)}),O(()=>o.index,d=>{d&&t.value&&(t.value.index=o.index)}),{controlRef:t,showContent:l}}});let at={ref:"controlRef"};lt.render=function(o){return N(),D(We,null,[xe(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Ke(M("div",at,[Y(o.$slots,"default")],512),[[Je,o.showContent]])],2112)};let he="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var Ee=_({props:{options:{type:Object,default:()=>({})}},emits:he,setup(o,{slots:e,emit:t}){let r,i=v(),s=v(),l=C(Z,v()),n=C(A,v()),c=C(be,v()),u,d=_e(()=>{var a;return(a=e.default)===null||a===void 0?void 0:a.call(e).some(p=>p.type!==Qe)});return Q(()=>{O([l,()=>o.options],([,a],[p,h])=>{p=JSON.stringify(a)!==JSON.stringify(h)||l.value!==p,l.value&&n.value&&p&&(r?(r.setOptions(F(S({},a),{content:d.value?s.value:a.content})),c.value||r.open({map:l.value})):(i.value=r=new n.value.InfoWindow(F(S({},a),{content:d.value?s.value:a.content})),c.value?u=c.value.addListener("click",()=>{r.open({map:l.value,anchor:c.value})}):r.open({map:l.value}),he.forEach(m=>{r==null||r.addListener(m,g=>t(m,g))})))},{immediate:!0})}),B(()=>{var a;u&&u.remove(),r&&((a=n.value)===null||a===void 0||a.event.clearInstanceListeners(r),r.close())}),{infoWindow:i,infoWindowRef:s,hasSlotContent:d,anchor:c}}});Pe(`
.info-window-content[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-content[data-v-5b373d6e] {
  display: block;
}
`);let ut=Me();Ce("data-v-5b373d6e");let dt={key:0,ref:"infoWindowRef",class:"info-window-content"};we();let ct=ut(o=>o.hasSlotContent?(N(),D("div",dt,[Y(o.$slots,"default",{},void 0,!0)],512)):xe("v-if",!0));Ee.render=ct;Ee.__scopeId="data-v-5b373d6e";function J(o,e,t,r,i,s){if(!(i-r<=t)){var l=r+i>>1;Le(o,e,l,r,i,s%2),J(o,e,t,r,l-1,s+1),J(o,e,t,l+1,i,s+1)}}function Le(o,e,t,r,i,s){for(;i>r;){if(600<i-r){var l=i-r+1,n=t-r+1,c=Math.log(l),u=.5*Math.exp(2*c/3);c=.5*Math.sqrt(c*u*(l-u)/l)*(0>n-l/2?-1:1),Le(o,e,t,Math.max(r,Math.floor(t-n*u/l+c)),Math.min(i,Math.floor(t+(l-n)*u/l+c)),s)}for(l=e[2*t+s],n=r,u=i,L(o,e,r,t),e[2*i+s]>l&&L(o,e,r,i);n<u;){for(L(o,e,n,u),n++,u--;e[2*n+s]<l;)n++;for(;e[2*u+s]>l;)u--}e[2*r+s]===l?L(o,e,r,u):(u++,L(o,e,u,i)),u<=t&&(r=u+1),t<=u&&(i=u-1)}}function L(o,e,t,r){G(o,t,r),G(e,2*t,2*r),G(e,2*t+1,2*r+1)}function G(o,e,t){let r=o[e];o[e]=o[t],o[t]=r}let pt=o=>o[0],ht=o=>o[1];class me{constructor(e,t=pt,r=ht,i=64,s=Float64Array){this.nodeSize=i,this.points=e;let l=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);s=this.coords=new s(2*e.length);for(let n=0;n<e.length;n++)l[n]=n,s[2*n]=t(e[n]),s[2*n+1]=r(e[n]);J(l,s,i,0,l.length-1,0)}range(e,t,r,i){{var s=this.ids,l=this.coords,n=this.nodeSize;let u=[0,s.length-1,0],d=[],a,p;for(;u.length;){var c=u.pop();let h=u.pop(),m=u.pop();if(h-m<=n){for(c=m;c<=h;c++)a=l[2*c],p=l[2*c+1],a>=e&&a<=r&&p>=t&&p<=i&&d.push(s[c]);continue}let g=Math.floor((m+h)/2);a=l[2*g],p=l[2*g+1],a>=e&&a<=r&&p>=t&&p<=i&&d.push(s[g]);let f=(c+1)%2;(c===0?e<=a:t<=p)&&(u.push(m),u.push(g-1),u.push(f)),(c===0?r>=a:i>=p)&&(u.push(g+1),u.push(h),u.push(f))}e=d}return e}within(e,t,r){{var i=this.ids,s=this.coords,l=this.nodeSize;let a=[0,i.length-1,0],p=[],h=r*r;for(;a.length;){var n=a.pop();let m=a.pop();var c=a.pop();if(m-c<=l){for(n=c;n<=m;n++){c=s[2*n]-e;var u=s[2*n+1]-t;c=c*c+u*u,c<=h&&p.push(i[n])}continue}u=Math.floor((c+m)/2);let g=s[2*u],f=s[2*u+1];{var d=g-e;let y=f-t;d=d*d+y*y}d<=h&&p.push(i[u]),d=(n+1)%2,(n===0?e-r<=g:t-r<=f)&&(a.push(c),a.push(u-1),a.push(d)),(n===0?e+r>=g:t+r>=f)&&(a.push(u+1),a.push(m),a.push(d))}e=p}return e}}let mt={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:o=>o},$=Math.fround||(o=>e=>(o[0]=+e,o[0]))(new Float32Array(1));class gt{constructor(e){this.options=j(Object.create(mt),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:r,maxZoom:i,nodeSize:s}=this.options;t&&console.time("total time");var l=`prepare ${e.length} points`;t&&console.time(l),this.points=e;let n=[];for(let c=0;c<e.length;c++)e[c].geometry&&n.push(ft(e[c],c));for(this.trees[i+1]=new me(n,ve,fe,s,Float32Array),t&&console.timeEnd(l),e=i;e>=r;e--)l=+Date.now(),n=this._cluster(n,e),this.trees[e]=new me(n,ve,fe,s,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,n.length,+Date.now()-l);return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;var i=Math.max(-90,Math.min(90,e[1])),s=e[2]===180?180:((e[2]+180)%360+360)%360-180;let l=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])r=-180,s=180;else if(r>s){var n=this.getClusters([r,i,180,l],t);return i=this.getClusters([-180,i,s,l],t),n.concat(i)}t=this.trees[this._limitZoom(t)],s=t.range(r/360+.5,V(l),s/360+.5,V(i)),i=[];for(n of s)s=t.points[n],i.push(s.numPoints?ge(s):this.points[s.index]);return i}getChildren(e){var t=this._getOriginId(e),r=this._getOriginZoom(e);let i=this.trees[r];if(!i||(t=i.points[t],!t))throw Error("No cluster with the specified id.");t=i.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,r-1))),r=[];for(let s of t)t=i.points[s],t.parentId===e&&r.push(t.numPoints?ge(t):this.points[t.index]);if(r.length===0)throw Error("No cluster with the specified id.");return r}getLeaves(e,t,r){let i=[];return this._appendLeaves(i,e,t||10,r||0,0),i}getTile(e,t,r){let i=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:s,radius:l}=this.options,n=l/s,c=(r-n)/e,u=(r+1+n)/e,d={features:[]};return this._addTileFeatures(i.range((t-n)/e,c,(t+1+n)/e,u),i.points,t,r,e,d),t===0&&this._addTileFeatures(i.range(1-n/e,c,1,u),i.points,e,r,e,d),t===e-1&&this._addTileFeatures(i.range(0,c,n/e,u),i.points,-1,r,e,d),d.features.length?d:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,r,i,s){t=this.getChildren(t);for(let l of t)if((t=l.properties)&&t.cluster?s=s+t.point_count<=i?s+t.point_count:this._appendLeaves(e,t.cluster_id,r,i,s):s<i?s++:e.push(l),e.length===r)break;return s}_addTileFeatures(e,t,r,i,s,l){for(let u of e){e=t[u];let d=e.numPoints;var n=void 0;let a;var c=void 0;d?(n=je(e),a=e.x,c=e.y):(c=this.points[e.index],n=c.properties,a=c.geometry.coordinates[0]/360+.5,c=V(c.geometry.coordinates[1])),n={type:1,geometry:[[Math.round(this.options.extent*(a*s-r)),Math.round(this.options.extent*(c*s-i))]],tags:n};let p;d?p=e.id:this.options.generateId?p=e.index:this.points[e.index].id&&(p=this.points[e.index].id),p!==void 0&&(n.id=p),l.features.push(n)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let r=[],{radius:i,extent:s,reduce:l,minPoints:n}=this.options,c=i/(s*Math.pow(2,t));for(let h=0;h<e.length;h++){var u=e[h];if(u.zoom<=t)continue;u.zoom=t;let m=this.trees[t+1];var d=m.within(u.x,u.y,c),a=u.numPoints||1;let g=a;for(let f of d){var p=m.points[f];p.zoom>t&&(g+=p.numPoints||1)}if(g>a&&g>=n){p=u.x*a;let f=u.y*a;a=l&&1<a?this._map(u,!0):null;let y=(h<<5)+(t+1)+this.points.length;for(let w of d){if(d=m.points[w],d.zoom<=t)continue;d.zoom=t;let k=d.numPoints||1;p+=d.x*k,f+=d.y*k,d.parentId=y,l&&(a||(a=this._map(u,!0)),l(a,this._map(d)))}u.parentId=y,r.push(vt(p/g,f/g,y,g,a))}else if(r.push(u),1<g)for(let f of d)u=m.points[f],u.zoom<=t||(u.zoom=t,r.push(u))}return r}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?j({},e.properties):e.properties;e=this.points[e.index].properties;let r=this.options.map(e);return t&&r===e?j({},r):r}}function vt(o,e,t,r,i){return{x:$(o),y:$(e),zoom:1/0,id:t,parentId:-1,numPoints:r,properties:i}}function ft(o,e){let[t,r]=o.geometry.coordinates;return{x:$(t/360+.5),y:$(V(r)),zoom:1/0,index:e,parentId:-1}}function ge(o){var e=o.id,t=je(o);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(o.x-.5),360*Math.atan(Math.exp((180-360*o.y)*Math.PI/180))/Math.PI-90]}}}function je(o){let e=o.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return j(j({},o.properties),{cluster:!0,cluster_id:o.id,point_count:e,point_count_abbreviated:t})}function V(o){return o=Math.sin(o*Math.PI/180),o=.5-.25*Math.log((1+o)/(1-o))/Math.PI,0>o?0:1<o?1:o}function j(o,e){for(let t in e)o[t]=e[t];return o}function ve(o){return o.x}function fe(o){return o.y}var ye=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=i;r--!==0;)if(i=s[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class W{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class yt{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return kt(e)}}let kt=o=>o.map(e=>new W({position:e.getPosition(),markers:[e]}));class Ct extends yt{constructor(e){var{maxZoom:t,radius:r=60}=e,i=["maxZoom","radius"],s={},l;for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>i.indexOf(l)&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>i.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(s[l[n]]=e[l[n]])}super({maxZoom:t});this.superCluster=new gt(Object.assign({maxZoom:this.maxZoom,radius:r},s)),this.state={zoom:null}}calculate(e){let t=!1;if(!ye(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var r=this.markers.map(i=>({type:"Feature",geometry:{type:"Point",coordinates:[i.getPosition().lng(),i.getPosition().lat()]},properties:{marker:i}}));this.superCluster.load(r)}return r={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(t=t||!ye(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){return r.cluster?new W({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=r.marker,new W({markers:[e],position:e.getPosition()}))}}class wt{constructor(e,t){this.markers={sum:e.length},e=t.map(i=>i.count);let r=e.reduce((i,s)=>i+s,0);this.clusters={count:t.length,markers:{mean:r/t.length,sum:r,min:Math.min(...e),max:Math.max(...e)}}}}class xt{render({count:e,position:t},r){return r=window.btoa(`
  <svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class X{constructor(){var e=X,t=google.maps.OverlayView;for(let r in t.prototype)e.prototype[r]=t.prototype[r]}}var z,ee=z||(z={});ee.CLUSTERING_BEGIN="clusteringbegin";ee.CLUSTERING_END="clusteringend";ee.CLUSTER_CLICK="click";let _t=(o,e,t)=>{t.fitBounds(e.bounds)};class Mt extends X{constructor({map:e,markers:t=[],algorithm:r=new Ct({}),renderer:i=new xt,onClusterClick:s=_t}){super();this.markers=[...t],this.clusters=[],this.algorithm=r,this.renderer=i,this.onClusterClick=s,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){let r=this.markers.indexOf(e);return r===-1?!1:(e.setMap(null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(i=>{r=this.removeMarker(i,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,z.CLUSTERING_BEGIN,this);let{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,z.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new wt(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e),this.onClusterClick&&r.marker.addListener("click",i=>{google.maps.event.trigger(this,z.CLUSTER_CLICK,r),this.onClusterClick(i,r,t)})),r.marker.setMap(t)})}}let ke=["clusteringbegin","clusteringend","click"];_({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:ke,setup(o,{emit:e,expose:t,slots:r}){let i=v(),s=C(Z,v()),l=C(A,v());return I(qe,i),O(s,()=>{s.value&&(i.value=Ye(new Mt(S({map:s.value},o.options))),ke.forEach(n=>{var c;(c=i.value)===null||c===void 0||c.addListener(n,u=>e(n,u))}))},{immediate:!0}),B(()=>{var n;i.value&&((n=l.value)===null||n===void 0||n.event.clearInstanceListeners(i.value),i.value.clearMarkers(),i.value.setMap(null))}),t({markerCluster:i}),()=>{var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}}});const St=_({components:{GoogleMap:H,Marker:st},setup(){return{center:{lat:40.689247,lng:-74.044502}}}});function Ot(o,e,t,r,i,s){const l=K("Marker"),n=K("GoogleMap");return N(),D(n,{"api-key":"AIzaSyCYjOcq9F1v_VGx2k2WtlRgbyOGNvk-qYY",style:{width:"100%",height:"500px"},center:o.center,zoom:15},{default:Oe(()=>[M(l,{options:{position:o.center}},null,8,["options"])]),_:1},8,["center"])}var bt=Se(St,[["render",Ot]]);const qt={components:{MyMap:bt},setup(o){return{localState:He({formData:{name:"",mobile:"",message:""}})}}},It={class:"row"},Pt={class:"col-xs-12 col-sm-8"},Et={class:"col-xs-12 col-sm-4"};function Lt(o,e,t,r,i,s){const l=K("MyMap");return N(),Xe("div",It,[le("div",Pt,[M(l)]),le("div",Et,[M(tt,{style:{"max-width":"380px"},class:"tcard q-pa-md q-ml-md"},{default:Oe(()=>[M(U,{modelValue:r.localState.formData.name,"onUpdate:modelValue":e[0]||(e[0]=n=>r.localState.formData.name=n),outlined:"",label:"Name",rules:[n=>!!n||"Name is required"]},null,8,["modelValue","rules"]),M(U,{modelValue:r.localState.formData.mobile,"onUpdate:modelValue":e[1]||(e[1]=n=>r.localState.formData.mobile=n),outlined:"",label:"Mobile",rules:[n=>!!n||"Mobile is required"]},null,8,["modelValue","rules"]),M(U,{modelValue:r.localState.formData.message,"onUpdate:modelValue":e[2]||(e[2]=n=>r.localState.formData.message=n),type:"textarea",outlined:"",label:"Mobile",rules:[n=>!!n||"Content is required"]},null,8,["modelValue","rules"]),M(et,{style:{"min-width":"120px"},color:"primary",rounded:"",label:"Submit"})]),_:1})])])}var Bt=Se(qt,[["render",Lt]]);export{Bt as default};
