import{q,r as B,G as E,a5 as P,a6 as R,x as V,t as I,u as Q,A as O,a7 as F,y as j,a8 as k,a9 as D}from"./index.52899536.js";var K=q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(n,{slots:S,emit:m}){const A=O(),f=B(null);let u=0;const r=[];function v(e){const o=[],c=typeof e=="boolean"?e:n.noErrorFocus!==!0,h=++u,d=(s,t)=>{m("validation-"+(s===!0?"success":"error"),t)};for(let s=0;s<r.length;s++){const t=r[s],i=t.validate();if(typeof i.then=="function")o.push(i.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})));else if(i!==!0){if(n.greedy===!1)return d(!1,t),c===!0&&typeof t.focus=="function"&&t.focus(),Promise.resolve(!1);o.push({valid:!1,comp:t})}}return o.length===0?(d(!0),Promise.resolve(!0)):Promise.all(o).then(s=>{const t=s.filter(C=>C.valid!==!0);if(t.length===0)return h===u&&d(!0),!0;const{valid:i,comp:a,err:x}=t[0];return h===u&&(x!==void 0&&console.error(x),d(!1,a),c===!0&&i!==!0&&typeof a.focus=="function"&&a.focus()),!1})}function p(){u++,r.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&F(e);const o=u+1;v().then(c=>{o===u&&c===!0&&(n.onSubmit!==void 0?m("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&F(e),m("reset"),j(()=>{p(),n.autofocus===!0&&n.noResetFocus!==!0&&l()})}function l(){k(()=>{if(f.value===null)return;const e=f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}E(D,{bindComponent(e){r.push(e)},unbindComponent(e){const o=r.indexOf(e);o>-1&&r.splice(o,1)}});let g=!1;return P(()=>{g=!0}),R(()=>{g===!0&&n.autofocus===!0&&l()}),V(()=>{n.autofocus===!0&&l()}),Object.assign(A.proxy,{validate:v,resetValidation:p,submit:y,reset:b,focus:l,getValidationComponents:()=>r}),()=>I("form",{class:"q-form",ref:f,onSubmit:y,onReset:b},Q(S.default))}});export{K as Q};
