import{q as l,C as s,D as h,H as g,s as o,t as p,u as d,A as y}from"./index.c2f7f24d.js";var v=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:r}){const{proxy:{$q:n}}=y(),e=s(h);s(g,()=>{console.error("QPage needs to be child of QPageContainer")});const i=o(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return a.styleFn(t,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":n.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}}),c=o(()=>`q-page ${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:c.value,style:i.value},d(r.default))}});export{v as Q};
