import{r as v,b7 as b,y as f,b8 as y,p as F,s as h,u as x,b9 as p}from"./index.4d63b74e.js";let s=0;const E={fullscreen:Boolean,noRouteFullscreenExit:Boolean},g=["update:fullscreen","fullscreen"];function B(){const d=x(),{props:u,emit:m,proxy:e}=d;let n,o,c;const l=v(!1);b(d)===!0&&f(()=>e.$route.fullPath,()=>{u.noRouteFullscreenExit!==!0&&t()}),f(()=>u.fullscreen,r=>{l.value!==r&&a()}),f(l,r=>{m("update:fullscreen",r),m("fullscreen",r)});function a(){l.value===!0?t():i()}function i(){l.value!==!0&&(l.value=!0,c=e.$el.parentNode,c.replaceChild(o,e.$el),document.body.appendChild(e.$el),s++,s===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},p.add(n))}function t(){l.value===!0&&(n!==void 0&&(p.remove(n),n=void 0),c.replaceChild(e.$el,o),l.value=!1,s=Math.max(0,s-1),s===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return y(()=>{o=document.createElement("span")}),F(()=>{u.fullscreen===!0&&i()}),h(t),Object.assign(e,{toggleFullscreen:a,setFullscreen:i,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:a}}export{g as a,B as b,E as u};
