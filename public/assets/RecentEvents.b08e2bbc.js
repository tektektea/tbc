import{L as m,o,Y as r,$ as p,Z as x,U as i,h as e,f as s,w as a,a0 as c,M as l,X as h,g as d,i as n,a1 as g}from"./index.e058ad87.js";import{Q}from"./QImg.cd50de6b.js";import{u as k}from"./useUtils.08fd39f9.js";import{s as b}from"./pinia.4c52c525.js";const q={class:"row q-col-gutter-xs"},y={class:"tcard",flat:"",bordered:""},B={class:"text-lg text-dark q-mt-sm q-mb-xs"},C={class:"text-caption text-grey"},w=n(" Read More "),T={setup(D){const{formatDate:_}=k(),{recent_events:u}=b(m());return(N,S)=>(o(),r("div",q,[(o(!0),r(p,null,x(i(u),(t,f)=>(o(),r("div",{class:"col-xs-12 col-sm-6",key:`xs-${f}`},[e("div",y,[s(c,{horizontal:""},{default:a(()=>[s(c,{class:"q-pt-xs col-7"},{default:a(()=>[e("div",B,l(t==null?void 0:t.title),1),e("div",C,l(t==null?void 0:t.description),1)]),_:2},1024),s(c,{class:"col-5 flex flex-center"},{default:a(()=>[s(Q,{class:"rounded-borders",src:t.thumbnail_path},null,8,["src"])]),_:2},1024)]),_:2},1024),s(h),s(g,null,{default:a(()=>[s(d,{color:"dark",flat:"",round:"",icon:"event"}),s(d,{flat:""},{default:a(()=>[n(l(i(_)(t.created_at)),1)]),_:2},1024),s(d,{to:{name:"event:detail",params:{id:t.id}},flat:"",color:"primary"},{default:a(()=>[w]),_:2},1032,["to"])]),_:2},1024)])]))),128))]))}};export{T as default};
