var U=Object.defineProperty;var T=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var I=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&I(e,r,t[r]);if(T)for(var r of T(t))k.call(t,r)&&I(e,r,t[r]);return e};import{a4 as z,a5 as R,a6 as d,a7 as E,a8 as P}from"./index.67db5a7e.js";const M=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function B(e){return W(e)===0}function J(e,t){return t<=6?31:t<=11||B(e)?30:29}function W(e){const t=M.length;let r=M[0],n,s,a,c,o;if(e<r||e>=M[t-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<t&&(n=M[o],s=n-r,!(e<n));o+=1)r=n;return c=e-r,s-c<6&&(c=c-s+V(s+4,33)*33),a=O(O(c+1,33)-1,4),a===-1&&(a=4),a}function V(e,t){return~~(e/t)}function O(e,t){return e-~~(e/t)*t}const N=864e5,q=36e5,w=6e4,b="YYYY-MM-DDTHH:mm:ss.SSSZ",G=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,K=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Y={};function ee(e,t){const r="("+t.days.join("|")+")",n=e+r;if(Y[n]!==void 0)return Y[n];const s="("+t.daysShort.join("|")+")",a="("+t.months.join("|")+")",c="("+t.monthsShort.join("|")+")",o={};let i=0;const y=e.replace(K,l=>{switch(i++,l){case"YY":return o.YY=i,"(-?\\d{1,2})";case"YYYY":return o.YYYY=i,"(-?\\d{1,4})";case"M":return o.M=i,"(\\d{1,2})";case"MM":return o.M=i,"(\\d{2})";case"MMM":return o.MMM=i,c;case"MMMM":return o.MMMM=i,a;case"D":return o.D=i,"(\\d{1,2})";case"Do":return o.D=i++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=i,"(\\d{2})";case"H":return o.H=i,"(\\d{1,2})";case"HH":return o.H=i,"(\\d{2})";case"h":return o.h=i,"(\\d{1,2})";case"hh":return o.h=i,"(\\d{2})";case"m":return o.m=i,"(\\d{1,2})";case"mm":return o.m=i,"(\\d{2})";case"s":return o.s=i,"(\\d{1,2})";case"ss":return o.s=i,"(\\d{2})";case"S":return o.S=i,"(\\d{1})";case"SS":return o.S=i,"(\\d{2})";case"SSS":return o.S=i,"(\\d{3})";case"A":return o.A=i,"(AM|PM)";case"a":return o.a=i,"(am|pm)";case"aa":return o.aa=i,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return r;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=i,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=i,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=i,"(-?\\d+)";case"x":return o.x=i,"(-?\\d{4,})";default:return i--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),u={map:o,regex:new RegExp("^"+y)};return Y[n]=u,u}function L(e,t){return e!==void 0?e:t!==void 0?t.date:R.date}function Z(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=Math.floor(n/60),a=n%60;return r+d(s)+t+d(a)}function te(e,t,r){let n=e.getFullYear(),s=e.getMonth();const a=e.getDate();return t.year!==void 0&&(n+=r*t.year,delete t.year),t.month!==void 0&&(s+=r*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(s),e.setDate(Math.min(a,H(e))),t.date!==void 0&&(e.setDate(e.getDate()+r*t.date),delete t.date),e}function ne(e,t,r){const n=t.year!==void 0?t.year:e[`get${r}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${r}Month`](),a=new Date(n,s+1,0).getDate(),c=Math.min(a,t.date!==void 0?t.date:e[`get${r}Date`]());return e[`set${r}Date`](1),e[`set${r}Month`](2),e[`set${r}FullYear`](n),e[`set${r}Month`](s),e[`set${r}Date`](c),delete t.year,delete t.month,delete t.date,e}function $(e,t,r){const n=C(t),s=new Date(e),a=n.year!==void 0||n.month!==void 0||n.date!==void 0?te(s,n,r):s;for(const c in n){const o=P(c);a[`set${o}`](a[`get${o}`]()+r*n[c])}return a}function C(e){const t=x({},e);return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function j(e,t,r){const n=C(t),s=r===!0?"UTC":"",a=new Date(e),c=n.year!==void 0||n.month!==void 0||n.date!==void 0?ne(a,n,s):a;for(const o in n){const i=o.charAt(0).toUpperCase()+o.slice(1);c[`set${s}${i}`](n[o])}return c}function re(e,t,r){const n=ae(e,t,r),s=new Date(n.year,n.month===null?null:n.month-1,n.day,n.hour,n.minute,n.second,n.millisecond),a=s.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===a?s:$(s,{minutes:n.timezoneOffset-a},1)}function ae(e,t,r,n,s){const a={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(a,s),e==null||e===""||typeof e!="string")return a;t===void 0&&(t=b);const c=L(r,z.props),o=c.months,i=c.monthsShort,{regex:y,map:u}=ee(t,c),l=e.match(y);if(l===null)return a;let g="";if(u.X!==void 0||u.x!==void 0){const h=parseInt(l[u.X!==void 0?u.X:u.x],10);if(isNaN(h)===!0||h<0)return a;const D=new Date(h*(u.X!==void 0?1e3:1));a.year=D.getFullYear(),a.month=D.getMonth()+1,a.day=D.getDate(),a.hour=D.getHours(),a.minute=D.getMinutes(),a.second=D.getSeconds(),a.millisecond=D.getMilliseconds()}else{if(u.YYYY!==void 0)a.year=parseInt(l[u.YYYY],10);else if(u.YY!==void 0){const h=parseInt(l[u.YY],10);a.year=h<0?h:2e3+h}if(u.M!==void 0){if(a.month=parseInt(l[u.M],10),a.month<1||a.month>12)return a}else u.MMM!==void 0?a.month=i.indexOf(l[u.MMM])+1:u.MMMM!==void 0&&(a.month=o.indexOf(l[u.MMMM])+1);if(u.D!==void 0){if(a.day=parseInt(l[u.D],10),a.year===null||a.month===null||a.day<1)return a;const h=n!=="persian"?new Date(a.year,a.month,0).getDate():J(a.year,a.month);if(a.day>h)return a}u.H!==void 0?a.hour=parseInt(l[u.H],10)%24:u.h!==void 0&&(a.hour=parseInt(l[u.h],10)%12,(u.A&&l[u.A]==="PM"||u.a&&l[u.a]==="pm"||u.aa&&l[u.aa]==="p.m.")&&(a.hour+=12),a.hour=a.hour%24),u.m!==void 0&&(a.minute=parseInt(l[u.m],10)%60),u.s!==void 0&&(a.second=parseInt(l[u.s],10)%60),u.S!==void 0&&(a.millisecond=parseInt(l[u.S],10)*10**(3-l[u.S].length)),(u.Z!==void 0||u.ZZ!==void 0)&&(g=u.Z!==void 0?l[u.Z].replace(":",""):l[u.ZZ],a.timezoneOffset=(g[0]==="+"?-1:1)*(60*g.slice(1,3)+1*g.slice(3,5)))}return a.dateHash=d(a.year,6)+"/"+d(a.month)+"/"+d(a.day),a.timeHash=d(a.hour)+":"+d(a.minute)+":"+d(a.second)+g,a}function se(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function oe(e,t){return j(new Date,e,t)}function ue(e){const t=new Date(e).getDay();return t===0?7:t}function v(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const r=new Date(t.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);const n=t.getTimezoneOffset()-r.getTimezoneOffset();t.setHours(t.getHours()-n);const s=(t-r)/(N*7);return 1+Math.floor(s)}function ie(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function p(e,t){const r=new Date(e);return t===!0?ie(r):r.getTime()}function ce(e,t,r,n={}){const s=p(t,n.onlyDate),a=p(r,n.onlyDate),c=p(e,n.onlyDate);return(c>s||n.inclusiveFrom===!0&&c===s)&&(c<a||n.inclusiveTo===!0&&c===a)}function le(e,t){return $(e,t,1)}function de(e,t){return $(e,t,-1)}function f(e,t,r){const n=new Date(e),s=`set${r===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](0);case"month":case"months":n[`${s}Date`](1);case"day":case"days":case"date":n[`${s}Hours`](0);case"hour":case"hours":n[`${s}Minutes`](0);case"minute":case"minutes":n[`${s}Seconds`](0);case"second":case"seconds":n[`${s}Milliseconds`](0)}return n}function fe(e,t,r){const n=new Date(e),s=`set${r===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](11);case"month":case"months":n[`${s}Date`](H(n));case"day":case"days":case"date":n[`${s}Hours`](23);case"hour":case"hours":n[`${s}Minutes`](59);case"minute":case"minutes":n[`${s}Seconds`](59);case"second":case"seconds":n[`${s}Milliseconds`](999)}return n}function he(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(r=>{t=Math.max(t,new Date(r))}),t}function De(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(r=>{t=Math.min(t,new Date(r))}),t}function m(e,t,r){return(e.getTime()-e.getTimezoneOffset()*w-(t.getTime()-t.getTimezoneOffset()*w))/r}function Q(e,t,r="days"){const n=new Date(e),s=new Date(t);switch(r){case"years":case"year":return n.getFullYear()-s.getFullYear();case"months":case"month":return(n.getFullYear()-s.getFullYear())*12+n.getMonth()-s.getMonth();case"days":case"day":case"date":return m(f(n,"day"),f(s,"day"),N);case"hours":case"hour":return m(f(n,"hour"),f(s,"hour"),q);case"minutes":case"minute":return m(f(n,"minute"),f(s,"minute"),w);case"seconds":case"second":return m(f(n,"second"),f(s,"second"),1e3)}}function S(e){return Q(e,f(e,"year"),"days")+1}function ge(e){return E(e)===!0?"date":typeof e=="number"?"number":"string"}function Me(e,t,r){const n=new Date(e);if(t){const s=new Date(t);if(n<s)return s}if(r){const s=new Date(r);if(n>s)return s}return n}function me(e,t,r){const n=new Date(e),s=new Date(t);if(r===void 0)return n.getTime()===s.getTime();switch(r){case"second":case"seconds":if(n.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==s.getDate())return!1;case"month":case"months":if(n.getMonth()!==s.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${r}`)}return!0}function H(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function F(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const _={YY(e,t,r){const n=this.YYYY(e,t,r)%100;return n>0?d(n):"-"+d(Math.abs(n))},YYYY(e,t,r){return r!=null?r:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return d(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return F(this.Q(e))},D(e){return e.getDate()},Do(e){return F(e.getDate())},DD(e){return d(e.getDate())},DDD(e){return S(e)},DDDD(e){return d(S(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return v(e)},ww(e){return d(v(e))},H(e){return e.getHours()},HH(e){return d(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return d(this.h(e))},m(e){return e.getMinutes()},mm(e){return d(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return d(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return d(Math.floor(e.getMilliseconds()/10))},SSS(e){return d(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,r,n){const s=n==null?e.getTimezoneOffset():n;return Z(s,":")},ZZ(e,t,r,n){const s=n==null?e.getTimezoneOffset():n;return Z(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ye(e,t,r,n,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const a=new Date(e);if(isNaN(a))return;t===void 0&&(t=b);const c=L(r,z.props);return t.replace(G,(o,i)=>o in _?_[o](a,c,n,s):i===void 0?o:i.split("\\]").join("]"))}function Ye(e){return E(e)===!0?new Date(e.getTime()):e}var A={isValid:se,extractDate:re,buildDate:oe,getDayOfWeek:ue,getWeekOfYear:v,isBetweenDates:ce,addToDate:le,subtractFromDate:de,adjustDate:j,startOfDate:f,endOfDate:fe,getMaxDate:he,getMinDate:De,getDateDiff:Q,getDayOfYear:S,inferDateFormat:ge,getDateBetween:Me,isSameDate:me,daysInMonth:H,formatDate:ye,clone:Ye};function ve(){return{DEFAULT_TEST_PARAMS:{chest:"35 cm",expanded_chest:"38 cm",height:"165 cm",long_jump:"3 Meter",high_jump:"3 Meter",short_race:"10 Sec",long_race:"20 Min"},formatMoney:a=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number(a)),formatDate:a=>{try{return A.formatDate(new Date(a),"DD MMM YYYY")}catch{return"invalid Date"}},formatDateTime:a=>{try{return A.formatDate(new Date(a),"DD MMM YYYY hh:mm a")}catch{return"invalid Date"}},emailRegex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}}export{ve as u};
