import{k as i,z as o,N as t,O as u,P as l,K as v,R as c}from"./index.ed0a09ec.js";function d(a){{const e={active:!0};if(typeof a=="function"){const n=i(a);e.val=n.value,o(n,s=>{e.val=s,e.active===!0&&t()})}else e.val=a;c.push(e),t(),u(()=>{e.active=!0,t()}),l(()=>{e.active=!1,t()}),v(()=>{c.splice(c.indexOf(e),1),t()})}}export{d as u};