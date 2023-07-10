import{c as xt,j as k,r as _,R as z,N as un,q as de,a as dn,u as fn,O as hn,P as pn,z as mn}from"./index-2ab7c783.js";import{a as vn,s as gn,b as bn}from"./chatConnection-af3e2d82.js";import{g as Ct}from"./userConnection-2995ef4d.js";import{F as ve}from"./DisplayFlex-59a7b644.js";import{A as _e}from"./Avatar-73d98879.js";import{t as le,N as _n}from"./Navbar-a01dddcf.js";import{T as We,I as Ee,k as yn}from"./api-91ebeae1.js";import{S as wn}from"./Send-36e728da.js";import"./MenuItem-797a791f.js";import"./FormControl-35d2143d.js";const kn=xt([k.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),k.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera"),xn=xt(k.jsx("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"}),"VideoCall");const Cn=({data:e,userId:t,token:n,online:r})=>{const[i,o]=_.useState(null);return _.useEffect(()=>{const s=e.members.find(c=>c!==t);(async()=>{try{const c=await Ct(s,n);o(c)}catch(c){throw c}})()},[]),k.jsx(k.Fragment,{children:k.jsx("div",{className:"chat-header",children:k.jsx("div",{className:"follower",children:k.jsxs(ve,{sx:{justifyContent:"flex-start"},children:[i!=null&&i.dp?k.jsxs("div",{className:"profile-picture",children:[r&&k.jsx("div",{className:"online-dot"}),k.jsx(_e,{alt:i.userName,src:i.dp,sx:{mr:"10px"}})]}):k.jsx(_e,{alt:i==null?void 0:i.userName,sx:{m:"10px"}}),k.jsx("div",{className:"name",style:{fontSize:"0.8rem"}}),k.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[k.jsx("span",{children:i==null?void 0:i.userName}),k.jsx("span",{children:r?"online":"offline"})]})]})})})})};var $n=["second","minute","hour","day","week","month","year"];function Sn(e,t){if(t===0)return["just now","right now"];var n=$n[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}var jn=["秒","分钟","小时","天","周","个月","年"];function En(e,t){if(t===0)return["刚刚","片刻后"];var n=jn[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}var Te={},$t=function(e,t){Te[e]=t},Ln=function(e){return Te[e]||Te.en_US},Le=[60,60,24,7,365/7/12,12];function qe(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function Mn(e,t){var n=e<0?1:0;e=Math.abs(e);for(var r=e,i=0;e>=Le[i]&&i<Le.length;i++)e/=Le[i];return e=Math.floor(e),i*=2,e>(i===0?9:1)&&(i+=1),t(e,i,r)[n].replace("%s",e.toString())}function zn(e,t){var n=t?qe(t):new Date;return(+n-+qe(e))/1e3}var Rn=function(e,t,n){var r=zn(e,n&&n.relativeDate);return Mn(r,Ln(t))};$t("en_US",Sn);$t("zh_CN",En);function Pn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Tn=`.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;Pn(Tn);function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ke(Object(n),!0).forEach(function(r){An(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ue(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ue=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=typeof Symbol=="function"?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(b,p,C){return Object.defineProperty(b,p,{value:C,enumerable:!0,configurable:!0,writable:!0}),b[p]}try{l({},"")}catch{l=function(p,C,L){return p[C]=L}}function c(b,p,C,L){var S=p&&p.prototype instanceof v?p:v,A=Object.create(S.prototype),T=new V(L||[]);return A._invoke=function(F,W,P){var I="suspendedStart";return function(U,ee){if(I==="executing")throw new Error("Generator is already running");if(I==="completed"){if(U==="throw")throw ee;return B()}for(P.method=U,P.arg=ee;;){var he=P.delegate;if(he){var re=x(he,P);if(re){if(re===a)continue;return re}}if(P.method==="next")P.sent=P._sent=P.arg;else if(P.method==="throw"){if(I==="suspendedStart")throw I="completed",P.arg;P.dispatchException(P.arg)}else P.method==="return"&&P.abrupt("return",P.arg);I="executing";var te=u(F,W,P);if(te.type==="normal"){if(I=P.done?"completed":"suspendedYield",te.arg===a)continue;return{value:te.arg,done:P.done}}te.type==="throw"&&(I="completed",P.method="throw",P.arg=te.arg)}}}(b,C,T),A}function u(b,p,C){try{return{type:"normal",arg:b.call(p,C)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var a={};function v(){}function d(){}function g(){}var h={};l(h,i,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(ce([])));m&&m!==t&&n.call(m,i)&&(h=m);var $=g.prototype=v.prototype=Object.create(h);function E(b){["next","throw","return"].forEach(function(p){l(b,p,function(C){return this._invoke(p,C)})})}function w(b,p){function C(S,A,T,F){var W=u(b[S],b,A);if(W.type!=="throw"){var P=W.arg,I=P.value;return I&&typeof I=="object"&&n.call(I,"__await")?p.resolve(I.__await).then(function(U){C("next",U,T,F)},function(U){C("throw",U,T,F)}):p.resolve(I).then(function(U){P.value=U,T(P)},function(U){return C("throw",U,T,F)})}F(W.arg)}var L;this._invoke=function(S,A){function T(){return new p(function(F,W){C(S,A,F,W)})}return L=L?L.then(T,T):T()}}function x(b,p){var C=b.iterator[p.method];if(C===void 0){if(p.delegate=null,p.method==="throw"){if(b.iterator.return&&(p.method="return",p.arg=void 0,x(b,p),p.method==="throw"))return a;p.method="throw",p.arg=new TypeError("The iterator does not provide a 'throw' method")}return a}var L=u(C,b.iterator,p.arg);if(L.type==="throw")return p.method="throw",p.arg=L.arg,p.delegate=null,a;var S=L.arg;return S?S.done?(p[b.resultName]=S.value,p.next=b.nextLoc,p.method!=="return"&&(p.method="next",p.arg=void 0),p.delegate=null,a):S:(p.method="throw",p.arg=new TypeError("iterator result is not an object"),p.delegate=null,a)}function M(b){var p={tryLoc:b[0]};1 in b&&(p.catchLoc=b[1]),2 in b&&(p.finallyLoc=b[2],p.afterLoc=b[3]),this.tryEntries.push(p)}function O(b){var p=b.completion||{};p.type="normal",delete p.arg,b.completion=p}function V(b){this.tryEntries=[{tryLoc:"root"}],b.forEach(M,this),this.reset(!0)}function ce(b){if(b){var p=b[i];if(p)return p.call(b);if(typeof b.next=="function")return b;if(!isNaN(b.length)){var C=-1,L=function S(){for(;++C<b.length;)if(n.call(b,C))return S.value=b[C],S.done=!1,S;return S.value=void 0,S.done=!0,S};return L.next=L}}return{next:B}}function B(){return{value:void 0,done:!0}}return d.prototype=g,l($,"constructor",g),l(g,"constructor",d),d.displayName=l(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(b){var p=typeof b=="function"&&b.constructor;return!!p&&(p===d||(p.displayName||p.name)==="GeneratorFunction")},e.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,g):(b.__proto__=g,l(b,s,"GeneratorFunction")),b.prototype=Object.create($),b},e.awrap=function(b){return{__await:b}},E(w.prototype),l(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(b,p,C,L,S){S===void 0&&(S=Promise);var A=new w(c(b,p,C,L),S);return e.isGeneratorFunction(p)?A:A.next().then(function(T){return T.done?T.value:A.next()})},E($),l($,s,"Generator"),l($,i,function(){return this}),l($,"toString",function(){return"[object Generator]"}),e.keys=function(b){var p=[];for(var C in b)p.push(C);return p.reverse(),function L(){for(;p.length;){var S=p.pop();if(S in b)return L.value=S,L.done=!1,L}return L.done=!0,L}},e.values=ce,V.prototype={constructor:V,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!b)for(var p in this)p.charAt(0)==="t"&&n.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=void 0)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var p=this;function C(W,P){return A.type="throw",A.arg=b,p.next=W,P&&(p.method="next",p.arg=void 0),!!P}for(var L=this.tryEntries.length-1;L>=0;--L){var S=this.tryEntries[L],A=S.completion;if(S.tryLoc==="root")return C("end");if(S.tryLoc<=this.prev){var T=n.call(S,"catchLoc"),F=n.call(S,"finallyLoc");if(T&&F){if(this.prev<S.catchLoc)return C(S.catchLoc,!0);if(this.prev<S.finallyLoc)return C(S.finallyLoc)}else if(T){if(this.prev<S.catchLoc)return C(S.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return C(S.finallyLoc)}}}},abrupt:function(b,p){for(var C=this.tryEntries.length-1;C>=0;--C){var L=this.tryEntries[C];if(L.tryLoc<=this.prev&&n.call(L,"finallyLoc")&&this.prev<L.finallyLoc){var S=L;break}}S&&(b==="break"||b==="continue")&&S.tryLoc<=p&&p<=S.finallyLoc&&(S=null);var A=S?S.completion:{};return A.type=b,A.arg=p,S?(this.method="next",this.next=S.finallyLoc,a):this.complete(A)},complete:function(b,p){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&p&&(this.next=p),a},finish:function(b){for(var p=this.tryEntries.length-1;p>=0;--p){var C=this.tryEntries[p];if(C.finallyLoc===b)return this.complete(C.completion,C.afterLoc),O(C),a}},catch:function(b){for(var p=this.tryEntries.length-1;p>=0;--p){var C=this.tryEntries[p];if(C.tryLoc===b){var L=C.completion;if(L.type==="throw"){var S=L.arg;O(C)}return S}}throw new Error("illegal catch attempt")},delegateYield:function(b,p,C){return this.delegate={iterator:ce(b),resultName:p,nextLoc:C},this.method==="next"&&(this.arg=void 0),a}},e}function Ye(e,t,n,r,i,o,s){try{var l=e[o](s),c=l.value}catch(u){n(u);return}l.done?t(c):Promise.resolve(c).then(r,i)}function Xe(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function s(c){Ye(o,r,i,s,l,"next",c)}function l(c){Ye(o,r,i,s,l,"throw",c)}s(void 0)})}}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function In(e,t){if(e==null)return{};var n=Dn(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function J(e,t){return Hn(e)||Nn(e,t)||jt(e,t)||Un()}function St(e){return On(e)||Bn(e)||jt(e)||Fn()}function On(e){if(Array.isArray(e))return Ae(e)}function Hn(e){if(Array.isArray(e))return e}function Bn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(c){o=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function jt(e,t){if(e){if(typeof e=="string")return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}}function Ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vn="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";function Et(e){var t=Wn(e);return t&&(t=St(new Set(t)),t.forEach(function(n){e=Lt(e,n,Mt(n))})),e}function Lt(e,t,n){return e.replace(new RegExp(t,"g"),n)}function Wn(e){return e.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g)}function qn(e){var t,n=document.querySelector("em-emoji-picker");if(!n)return Ze(e.native);var r=n==null||(t=n.shadowRoot)===null||t===void 0?void 0:t.querySelector('[title="'.concat(e.name,'"] > span > span'));if(!r)return Ze(e.native);var i=Lt(r.style.cssText,'"',"'");return Mt(i,e.native)}function Mt(e,t){return'<img style="'.concat(e,'; display: inline-block" data-emoji="').concat(t,'" src="').concat(Vn,'" />')}function Ze(e){return'<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(e,"</span>")}function Kn(e){var t=document.createElement("div");t.innerHTML=e;var n=Array.prototype.slice.call(t.querySelectorAll("img"));return n.forEach(function(r){t.innerHTML=t.innerHTML.replace(r.outerHTML,r.dataset.emoji)}),t.innerHTML}function Gn(e){var t,n;if(window.getSelection){if(t=window.getSelection(),t===null)return;if(t.getRangeAt&&t.rangeCount){n=t.getRangeAt(0),n.deleteContents();var r=document.createElement("div");r.innerHTML=e;for(var i=document.createDocumentFragment(),o,s;o=r.firstChild;)s=i.appendChild(o);n.insertNode(i),s&&(n=n.cloneRange(),n.setStartAfter(s),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}}function Je(e){var t=e.text,n=e.html,r=t.length,i=(n.match(/<img/g)||[]).length;return r+i}function zt(){var e=_.useRef([]),t=_.useRef(""),n=_.useCallback(function(i){e.current.push(i)},[]),r=_.useCallback(function(i){var o=e.current.reduce(function(s,l){return l(s)},i);return o=Yn(o),t.current=o,o},[]);return{addSanitizeFn:n,sanitize:r,sanitizedTextRef:t}}function Yn(e){var t=document.createElement("div");t.innerHTML=e;var n=t.innerText||"";return n=n.replace(/\n/gi,""),n}function Xn(e){var t=e.ref,n=e.textInputRef,r=e.setValue,i=e.emitChange,o=zt(),s=o.sanitize,l=o.sanitizedTextRef;_.useImperativeHandle(t,function(){return{get value(){return l.current},set value(c){r(c)},focus:function(){n.current!==null&&n.current.focus()},blur:function(){n.current!==null&&s(n.current.html),i()}}})}function Zn(e,t,n){var r=_.useRef(null),i=_.useRef(n),o=_.useCallback(function(){if(e.current!==null){var l=r.current,c=e.current.size;(!l||l.width!==c.width||l.height!==c.height)&&typeof t=="function"&&t(c),r.current=c}},[t,e]),s=_.useCallback(function(l){typeof i.current=="function"&&i.current(l),typeof t=="function"&&o()},[o,t]);return _.useEffect(function(){e.current&&o()},[o,e]),s}var Jn=["placeholder","style","tabIndex","className","onChange"],Qn=function(t,n){var r=t.placeholder,i=t.style,o=t.tabIndex,s=t.className,l=t.onChange,c=In(t,Jn);_.useImperativeHandle(n,function(){return{appendContent:function(y){a.current&&a.current.focus(),Gn(y),a.current&&a.current.focus(),a.current&&u.current&&a.current.innerHTML.trim()===""?u.current.style.visibility="visible":u.current&&(u.current.style.visibility="hidden"),a.current&&typeof l=="function"&&l(a.current.innerHTML)},set html(h){a.current&&(a.current.innerHTML=h),u.current&&(h.trim()===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"),typeof l=="function"&&a.current&&l(a.current.innerHTML)},get html(){return a.current?a.current.innerHTML:""},get text(){return a.current?a.current.innerText:""},get size(){return a.current?{width:a.current.offsetWidth,height:a.current.offsetHeight}:{width:0,height:0}},focus:function(){a.current&&a.current.focus()}}});var u=_.useRef(null),a=_.useRef(null);function v(h){h.key==="Enter"?c.onEnter(h):h.key==="ArrowUp"?c.onArrowUp(h):h.key==="ArrowDown"?c.onArrowDown(h):h.key.length===1&&u.current&&(u.current.style.visibility="hidden"),c.onKeyDown(h)}function d(){c.onFocus()}function g(h){c.onKeyUp(h);var y=a.current;if(u.current){var m;(y==null||(m=y.innerText)===null||m===void 0?void 0:m.trim())===""?u.current.style.visibility="visible":u.current.style.visibility="hidden"}typeof l=="function"&&a.current&&l(a.current.innerHTML)}return z.createElement("div",{className:"react-input-emoji--container",style:i},z.createElement("div",{className:"react-input-emoji--wrapper",onClick:d},z.createElement("div",{ref:u,className:"react-input-emoji--placeholder"},r),z.createElement("div",{ref:a,onKeyDown:v,onKeyUp:g,tabIndex:o,contentEditable:!0,className:"react-input-emoji--input".concat(s?" ".concat(s):""),onBlur:c.onBlur,onCopy:c.onCopy,onPaste:c.onPaste,"data-testid":"react-input-emoji--input"})))},er=_.forwardRef(Qn);function Qe(e){var t=e.showPicker,n=e.toggleShowPicker,r=e.buttonElement,i=_.useRef(null),o=_.useState(!1),s=J(o,2),l=s[0],c=s[1];return _.useEffect(function(){var u,a;((u=r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)!==null&&u!==void 0?u:0)>2&&(i.current.appendChild(r==null?void 0:r.childNodes[0]),c(!0))},[r==null?void 0:r.childNodes]),z.createElement("button",{ref:i,type:"button",className:"react-input-emoji--button".concat(t?" react-input-emoji--button__show":""),onClick:n},!l&&z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"react-input-emoji--button--icon"},z.createElement("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z.createElement("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})))}function Rt(e){return e&&e.__esModule?e.default:e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Se,j,Pt,fe,Tt,et,ye={},At=[],tr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Z(e,t){for(var n in t)e[n]=t[n];return e}function Dt(e){var t=e.parentNode;t&&t.removeChild(e)}function De(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?Se.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return ge(e,s,r,i,null)}function ge(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Pt};return i==null&&j.vnode!=null&&j.vnode(o),o}function Y(){return{current:null}}function ae(e){return e.children}function G(e,t){this.props=e,this.context=t}function se(e,t){if(t==null)return e.__?se(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?se(e):null}function It(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return It(e)}}function tt(e){(!e.__d&&(e.__d=!0)&&fe.push(e)&&!we.__r++||et!==j.debounceRendering)&&((et=j.debounceRendering)||Tt)(we)}function we(){for(var e;we.__r=fe.length;)e=fe.sort(function(t,n){return t.__v.__b-n.__v.__b}),fe=[],e.some(function(t){var n,r,i,o,s,l;t.__d&&(s=(o=(n=t).__v).__e,(l=n.__P)&&(r=[],(i=Z({},o)).__v=o.__v+1,Ue(l,o,i,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??se(o),o.__h),Nt(r,o),o.__e!=s&&It(o)))})}function Ot(e,t,n,r,i,o,s,l,c,u){var a,v,d,g,h,y,m,$=r&&r.__k||At,E=$.length;for(n.__k=[],a=0;a<t.length;a++)if((g=n.__k[a]=(g=t[a])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?ge(null,g,null,null,g):Array.isArray(g)?ge(ae,{children:g},null,null,null):g.__b>0?ge(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(d=$[a])===null||d&&g.key==d.key&&g.type===d.type)$[a]=void 0;else for(v=0;v<E;v++){if((d=$[v])&&g.key==d.key&&g.type===d.type){$[v]=void 0;break}d=null}Ue(e,g,d=d||ye,i,o,s,l,c,u),h=g.__e,(v=g.ref)&&d.ref!=v&&(m||(m=[]),d.ref&&m.push(d.ref,null,g),m.push(v,g.__c||h,g)),h!=null?(y==null&&(y=h),typeof g.type=="function"&&g.__k===d.__k?g.__d=c=Ht(g,c,e):c=Bt(e,g,d,$,h,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=se(d))}for(n.__e=y,a=E;a--;)$[a]!=null&&(typeof n.type=="function"&&$[a].__e!=null&&$[a].__e==n.__d&&(n.__d=se(r,a+1)),Ut($[a],$[a]));if(m)for(a=0;a<m.length;a++)Ft(m[a],m[++a],m[++a])}function Ht(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Ht(r,t,n):Bt(n,r,r,i,r.__e,t));return t}function ke(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){ke(n,t)}):t.push(e)),t}function Bt(e,t,n,r,i,o){var s,l,c;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),s=null;else{for(l=o,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==i)break e;e.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function nr(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||xe(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||xe(e,o,t[o],n[o],r)}function nt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||tr.test(t)?n:n+"px"}function xe(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||nt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||nt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?it:rt,o):e.removeEventListener(t,o?it:rt,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function rt(e){this.l[e.type+!1](j.event?j.event(e):e)}function it(e){this.l[e.type+!0](j.event?j.event(e):e)}function Ue(e,t,n,r,i,o,s,l,c){var u,a,v,d,g,h,y,m,$,E,w,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,o=[l]),(u=j.__b)&&u(t);try{e:if(typeof x=="function"){if(m=t.props,$=(u=x.contextType)&&r[u.__c],E=u?$?$.props.value:u.__:r,n.__c?y=(a=t.__c=n.__c).__=a.__E:("prototype"in x&&x.prototype.render?t.__c=a=new x(m,E):(t.__c=a=new G(m,E),a.constructor=x,a.render=ir),$&&$.sub(a),a.props=m,a.state||(a.state={}),a.context=E,a.__n=r,v=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),x.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=Z({},a.__s)),Z(a.__s,x.getDerivedStateFromProps(m,a.__s))),d=a.props,g=a.state,v)x.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==d&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(m,E),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(m,a.__s,E)===!1||t.__v===n.__v){a.props=m,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(m,a.__s,E),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(d,g,h)})}a.context=E,a.props=m,a.state=a.__s,(u=j.__r)&&u(t),a.__d=!1,a.__v=t,a.__P=e,u=a.render(a.props,a.state,a.context),a.state=a.__s,a.getChildContext!=null&&(r=Z(Z({},r),a.getChildContext())),v||a.getSnapshotBeforeUpdate==null||(h=a.getSnapshotBeforeUpdate(d,g)),w=u!=null&&u.type===ae&&u.key==null?u.props.children:u,Ot(e,Array.isArray(w)?w:[w],t,n,r,i,o,s,l,c),a.base=t.__e,t.__h=null,a.__h.length&&s.push(a),y&&(a.__E=a.__=null),a.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=rr(n.__e,t,n,r,i,o,s,c);(u=j.diffed)&&u(t)}catch(M){t.__v=null,(c||o!=null)&&(t.__e=l,t.__h=!!c,o[o.indexOf(l)]=null),j.__e(M,t,n)}}function Nt(e,t){j.__c&&j.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){j.__e(r,n.__v)}})}function rr(e,t,n,r,i,o,s,l){var c,u,a,v=n.props,d=t.props,g=t.type,h=0;if(g==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((c=o[h])&&"setAttribute"in c==!!g&&(g?c.localName===g:c.nodeType===3)){e=c,o[h]=null;break}}if(e==null){if(g===null)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),o=null,l=!1}if(g===null)v===d||l&&e.data===d||(e.data=d);else{if(o=o&&Se.call(e.childNodes),u=(v=n.props||ye).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!l){if(o!=null)for(v={},h=0;h<e.attributes.length;h++)v[e.attributes[h].name]=e.attributes[h].value;(a||u)&&(a&&(u&&a.__html==u.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(nr(e,d,v,i,l),a)t.__k=[];else if(h=t.props.children,Ot(e,Array.isArray(h)?h:[h],t,n,r,i&&g!=="foreignObject",o,s,o?o[0]:n.__k&&se(n,0),l),o!=null)for(h=o.length;h--;)o[h]!=null&&Dt(o[h]);l||("value"in d&&(h=d.value)!==void 0&&(h!==v.value||h!==e.value||g==="progress"&&!h)&&xe(e,"value",h,v.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==e.checked&&xe(e,"checked",h,v.checked,!1))}return e}function Ft(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){j.__e(r,n)}}function Ut(e,t,n){var r,i;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ft(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){j.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ut(r[i],t,typeof e.type!="function");n||e.__e==null||Dt(e.__e),e.__e=e.__d=void 0}function ir(e,t,n){return this.constructor(e,n)}function Vt(e,t,n){var r,i,o;j.__&&j.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Ue(t,e=(!r&&n||t).__k=De(ae,null,[e]),i||ye,ye,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Se.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Nt(o,e)}Se=At.slice,j={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(o){e=o}throw e}},Pt=0,G.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),tt(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),tt(this))},G.prototype.render=ae,fe=[],Tt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,we.__r=0;var or=0;function f(e,t,n,r,i){var o,s,l={};for(s in t)s=="ref"?o=t[s]:l[s]=t[s];var c={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--or,__source:r,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(s in o)l[s]===void 0&&(l[s]=o[s]);return j.vnode&&j.vnode(c),c}function ar(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function sr(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Q={set:ar,get:sr};const Me=new Map,cr=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function lr(){for(const{v:e,emoji:t}of cr)if(Wt(t))return e}function ur(){return!Wt("🇨🇦")}function Wt(e){if(Me.has(e))return Me.get(e);const t=dr(e);return Me.set(e,t),t}const dr=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,r=Math.floor(t/2);return e.font=r+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,i=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(i,0,22),e.fillStyle="#0000FF",e.fillText(i,n,22);const o=e.getImageData(0,0,n,t).data,s=o.length;let l=0;for(;l<s&&!o[l+3];l+=4);if(l>=s)return!1;const c=n+l/4%n,u=Math.floor(l/4/n),a=e.getImageData(c,u,1,1).data;return!(o[l]!==a[0]||o[l+2]!==a[2]||e.measureText(i).width>=n)}})();var ot={latestVersion:lr,noCountryFlags:ur};const Ie=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let H=null;function fr(e){H||(H=Q.get("frequently")||{});const t=e.id||e;t&&(H[t]||(H[t]=0),H[t]+=1,Q.set("last",t),Q.set("frequently",H))}function hr({maxFrequentRows:e,perLine:t}){if(!e)return[];H||(H=Q.get("frequently"));let n=[];if(!H){H={};for(let o in Ie.slice(0,t)){const s=Ie[o];H[s]=t-o,n.push(s)}return n}const r=e*t,i=Q.get("last");for(let o in H)n.push(o);if(n.sort((o,s)=>{const l=H[s],c=H[o];return l==c?o.localeCompare(s):l-c}),n.length>r){const o=n.slice(r);n=n.slice(0,r);for(let s of o)s!=i&&delete H[s];i&&n.indexOf(i)==-1&&(delete H[n[n.length-1]],n.splice(-1,1,i)),Q.set("frequently",H)}return n}var qt={add:fr,get:hr,DEFAULTS:Ie},Kt={};Kt=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var X={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let N=null,R=null;const ze={};async function at(e){if(ze[e])return ze[e];const n=await(await fetch(e)).json();return ze[e]=n,n}let Re=null,Gt=null,Yt=!1;function je(e,{caller:t}={}){return Re||(Re=new Promise(n=>{Gt=n})),e?pr(e):t&&!Yt&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Re}async function pr(e){Yt=!0;let{emojiVersion:t,set:n,locale:r}=e;if(t||(t=X.emojiVersion.value),n||(n=X.set.value),r||(r=X.locale.value),R)R.categories=R.categories.filter(c=>!c.name);else{R=(typeof e.data=="function"?await e.data():e.data)||await at(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),R.emoticons={},R.natives={},R.categories.unshift({id:"frequent",emojis:[]});for(const c in R.aliases){const u=R.aliases[c],a=R.emojis[u];a&&(a.aliases||(a.aliases=[]),a.aliases.push(c))}R.originalCategories=R.categories}if(N=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(r=="en"?Rt(Kt):await at(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),e.custom)for(let c in e.custom){c=parseInt(c);const u=e.custom[c],a=e.custom[c-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${c+1}`),u.name||(u.name=N.categories.custom),a&&!u.icon&&(u.target=a.target||a),R.categories.push(u);for(const v of u.emojis)R.emojis[v.id]=v}}e.categories&&(R.categories=R.originalCategories.filter(c=>e.categories.indexOf(c.id)!=-1).sort((c,u)=>{const a=e.categories.indexOf(c.id),v=e.categories.indexOf(u.id);return a-v}));let i=null,o=null;n=="native"&&(i=ot.latestVersion(),o=e.noCountryFlags||ot.noCountryFlags());let s=R.categories.length,l=!1;for(;s--;){const c=R.categories[s];if(c.id=="frequent"){let{maxFrequentRows:v,perLine:d}=e;v=v>=0?v:X.maxFrequentRows.value,d||(d=X.perLine.value),c.emojis=qt.get({maxFrequentRows:v,perLine:d})}if(!c.emojis||!c.emojis.length){R.categories.splice(s,1);continue}const{categoryIcons:u}=e;if(u){const v=u[c.id];v&&!c.icon&&(c.icon=v)}let a=c.emojis.length;for(;a--;){const v=c.emojis[a],d=v.id?v:R.emojis[v],g=()=>{c.emojis.splice(a,1)};if(!d||e.exceptEmojis&&e.exceptEmojis.includes(d.id)){g();continue}if(i&&d.version>i){g();continue}if(o&&c.id=="flags"&&!_r.includes(d.id)){g();continue}if(!d.search){if(l=!0,d.search=","+[[d.id,!1],[d.name,!0],[d.keywords,!1],[d.emoticons,!1]].map(([y,m])=>{if(y)return(Array.isArray(y)?y:[y]).map($=>(m?$.split(/[-|_|\s]+/):[$]).map(E=>E.toLowerCase())).flat()}).flat().filter(y=>y&&y.trim()).join(","),d.emoticons)for(const y of d.emoticons)R.emoticons[y]||(R.emoticons[y]=d.id);let h=0;for(const y of d.skins){if(!y)continue;h++;const{native:m}=y;m&&(R.natives[m]=d.id,d.search+=`,${m}`);const $=h==1?"":`:skin-tone-${h}:`;y.shortcodes=`:${d.id}:${$}`}}}}l&&oe.reset(),Gt()}function Xt(e,t,n){e||(e={});const r={};for(let i in t)r[i]=Zt(i,e,t,n);return r}function Zt(e,t,n,r){const i=n[e];let o=r&&r.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return i&&(o!=null&&i.value&&typeof i.value!=typeof o&&(typeof i.value=="boolean"?o=o!="false":o=i.value.constructor(o)),i.transform&&o&&(o=i.transform(o)),(o==null||i.choices&&i.choices.indexOf(o)==-1)&&(o=i.value)),o}const mr=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Oe=null;function vr(e){return e.id?e:R.emojis[e]||R.emojis[R.aliases[e]]||R.emojis[R.natives[e]]}function gr(){Oe=null}async function br(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await je(null,{caller:n||"SearchIndex.search"});const r=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,c,u)=>l.trim()&&u.indexOf(l)==c);if(!r.length)return;let i=Oe||(Oe=Object.values(R.emojis)),o,s;for(const l of r){if(!i.length)break;o=[],s={};for(const c of i){if(!c.search)continue;const u=c.search.indexOf(`,${l}`);u!=-1&&(o.push(c),s[c.id]||(s[c.id]=0),s[c.id]+=c.id==l?0:u+1)}i=o}return o.length<2||(o.sort((l,c)=>{const u=s[l.id],a=s[c.id];return u==a?l.id.localeCompare(c.id):u-a}),o.length>t&&(o=o.slice(0,t))),o}var oe={search:br,get:vr,reset:gr,SHORTCODES_REGEX:mr};const _r=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function yr(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,r)=>n==t[r])}async function wr(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function kr(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),r={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(r.skin=t+1),n.src&&(r.src=n.src),e.aliases&&e.aliases.length&&(r.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(r.emoticons=e.emoticons),r}const xr={activity:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:f("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),f("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),f("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:f("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),f("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:f("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),f("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[f("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),f("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:f("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},Cr={loupe:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:f("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:f("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ce={categories:xr,search:Cr};function He(e){let{id:t,skin:n,emoji:r}=e;if(e.shortcodes){const l=e.shortcodes.match(oe.SHORTCODES_REGEX);l&&(t=l[1],l[2]&&(n=l[2]))}if(r||(r=oe.get(t||e.native)),!r)return e.fallback;const i=r.skins[n-1]||r.skins[0],o=i.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${i.unified}.png`:void 0),s=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return f("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:o?f("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:i.native||i.shortcodes,src:o}):e.set=="native"?f("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:i.native}):f("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${s})`,backgroundSize:`${100*R.sheet.cols}% ${100*R.sheet.rows}%`,backgroundPosition:`${100/(R.sheet.cols-1)*i.x}% ${100/(R.sheet.rows-1)*i.y}%`}})})}const $r=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Jt extends $r{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,r){if(!this.component)return;const i=Zt(t,{[t]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:i}):(this.component.props[t]=i,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const r=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class Sr extends Jt{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Qt={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:X.set,skin:X.skin};class en extends Jt{async connectedCallback(){const t=Xt(this.props,Qt,this);t.element=this,t.ref=n=>{this.component=n},await je(),!this.disconnected&&Vt(f(He,{...t}),this)}constructor(t){super(t)}}q(en,"Props",Qt);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",en);var st,Be=[],ct=j.__b,lt=j.__r,ut=j.diffed,dt=j.__c,ft=j.unmount;function jr(){var e;for(Be.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Be.pop();)if(e.__P)try{e.__H.__h.forEach(be),e.__H.__h.forEach(Ne),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}j.__b=function(e){ct&&ct(e)},j.__r=function(e){lt&&lt(e);var t=e.__c.__H;t&&(t.__h.forEach(be),t.__h.forEach(Ne),t.__h=[])},j.diffed=function(e){ut&&ut(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Be.push(t)!==1&&st===j.requestAnimationFrame||((st=j.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),ht&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);ht&&(r=requestAnimationFrame(i))})(jr))},j.__c=function(e,t){t.some(function(n){try{n.__h.forEach(be),n.__h=n.__h.filter(function(r){return!r.__||Ne(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],j.__e(r,n.__v)}}),dt&&dt(e,t)},j.unmount=function(e){ft&&ft(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{be(r)}catch(i){t=i}}),t&&j.__e(t,n.__v))};var ht=typeof requestAnimationFrame=="function";function be(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Ne(e){e.__c=e.__()}function Er(e,t){for(var n in t)e[n]=t[n];return e}function pt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function $e(e){this.props=e}($e.prototype=new G).isPureReactComponent=!0,$e.prototype.shouldComponentUpdate=function(e,t){return pt(this.props,e)||pt(this.state,t)};var mt=j.__b;j.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),mt&&mt(e)};var Lr=j.__e;j.__e=function(e,t,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Lr(e,t,n)};var vt=j.unmount;function Pe(){this.__u=0,this.t=null,this.__b=null}function tn(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function pe(){this.u=null,this.o=null}j.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),vt&&vt(e)},(Pe.prototype=new G).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=tn(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function v(d,g,h){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(y){return v(y,g,h)}),d.__c&&d.__c.__P===g&&(d.__e&&h.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=h)),d}(u,u.__c.__P,u.__c.__O)}var a;for(r.setState({__e:r.__b=null});a=r.t.pop();)a.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(s,s)},Pe.prototype.componentWillUnmount=function(){this.t=[]},Pe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,l,c){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),s.__c.__H=null),(s=Er({},s)).__c!=null&&(s.__c.__P===c&&(s.__c.__P=l),s.__c=null),s.__k=s.__k&&s.__k.map(function(u){return o(u,l,c)})),s}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&De(ae,null,e.fallback);return i&&(i.__h=null),[De(ae,null,t.__e?null:e.children),i]};var gt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(pe.prototype=new G).__e=function(e){var t=this,n=tn(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),gt(t,e,r)):i()};n?n(o):o()}},pe.prototype.render=function(e){this.u=null,this.o=new Map;var t=ke(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},pe.prototype.componentDidUpdate=pe.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){gt(e,n,t)})};var Mr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,zr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Rr=typeof document<"u",Pr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};G.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(G.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var bt=j.event;function Tr(){}function Ar(){return this.cancelBubble}function Dr(){return this.defaultPrevented}j.event=function(e){return bt&&(e=bt(e)),e.persist=Tr,e.isPropagationStopped=Ar,e.isDefaultPrevented=Dr,e.nativeEvent=e};var _t={configurable:!0,get:function(){return this.class}},yt=j.vnode;j.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var s=n[o];Rr&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&s==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Pr(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():i&&zr.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),r[o]=s)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=ke(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=ke(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(_t.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",_t))}e.$$typeof=Mr,yt&&yt(e)};var wt=j.__r;j.__r=function(e){wt&&wt(e),e.__c};const Ir={light:"outline",dark:"solid"};class Or extends $e{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return f("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return f("img",{src:n.src})}const r=Ce.categories[t.id]||Ce.categories.custom,i=this.props.icons=="auto"?Ir[this.props.theme]:this.props.icons;return r[i]||r}render(){let t=null;return f("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:f("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const i=n.name||N.categories[n.id],o=!this.props.unfocused&&n.id==this.state.categoryId;return o&&(t=r),f("button",{"aria-label":i,"aria-selected":o||void 0,title:i,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),f("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=R.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class Hr extends $e{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const me={rowsPerRender:10};class Br extends G{getInitialState(t=this.props){return{skin:Q.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=N.rtl?"rtl":"ltr",this.refs={menu:Y(),navigation:Y(),scroll:Y(),search:Y(),searchInput:Y(),skinToneButton:Y(),skinToneRadio:Y()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const i in this.nextState)this.props[i]=this.nextState[i],(i==="custom"||i==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(t={}){await je(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=R;this.refs.categories=new Map;const n=R.categories.map(i=>i.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(i,o)=>{const s=[];s.__categoryId=o.id,s.__index=i.length,this.grid.push(s);const l=this.grid.length-1,c=l%me.rowsPerRender?{}:Y();return c.index=l,c.posinset=this.grid.setsize+1,i.push(c),s};for(let i of t){const o=[];let s=r(o,i);for(let l of i.emojis)s.length==this.getPerLine()&&(s=r(o,i)),this.grid.setsize+=1,s.push(l);this.refs.categories.set(i.id,{root:Y(),rows:o})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:r}=t,i=()=>{const{width:s}=n.getBoundingClientRect();return Math.floor(s/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:i()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(n),this.observers.push(o),i()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const r=this.state.searchResults||this.grid,i=r[t]&&r[t][n];if(i)return oe.get(i)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,r=s=>{s!=t.state.categoryId&&t.setState({categoryId:s})},i={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(s=>{for(const c of s){const u=c.target.dataset.id;n.set(u,c.intersectionRatio)}const l=[...n];for(const[c,u]of l)if(u){r(c);break}},i);for(const{root:s}of this.refs.categories.values())o.observe(s.current);this.observers.push(o)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const i of r){const o=parseInt(i.target.dataset.index);i.isIntersecting?t[o]=!0:delete t[o]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(me.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*me.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const i of r)i.current&&n.observe(i.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:r,right:i,up:o,down:s}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[c,u]=this.state.pos;const a=(()=>{if(c==0&&u==0&&!t.repeat&&(r||o))return null;if(c==-1)return!t.repeat&&(i||s)&&n.selectionStart==n.value.length?[0,0]:null;if(r||i){let v=l[c];const d=r?-1:1;if(u+=d,!v[u]){if(c+=d,v=l[c],!v)return c=r?0:l.length-1,u=r?0:l[c].length-1,[c,u];u=r?v.length-1:0}return[c,u]}if(o||s){c+=o?-1:1;const v=l[c];return v?(v[u]||(u=v.length-1),[c,u]):(c=o?0:l.length-1,u=o?0:l[c].length-1,[c,u])}})();if(a)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:a,keyboard:!0},()=>{this.scrollTo({row:a[0]})})}scrollTo({categoryId:t,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const i=this.refs.scroll.current,o=i.getBoundingClientRect();let s=0;if(n>=0&&(t=r[n].__categoryId),t&&(s=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(o.top-i.scrollTop)+1),n>=0)if(!n)s=0;else{const l=r[n].__index,c=s+l*this.props.emojiButtonSize,u=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<i.scrollTop)s=c;else if(u>i.scrollTop+o.height)s=u-o.height;else return}this.ignoreMouse(),i.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const i=kr(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&qt.add(i,this.props),this.props.onEmojiSelect(i,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Q.set("skin",t)}renderNav(){return f(Or,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return f("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[f("div",{class:"flex flex-middle flex-grow",children:[f("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:f(He,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),f("div",{class:`margin-${this.dir[0]}`,children:t||n?f("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[f("div",{class:"preview-title ellipsis",children:t?t.name:N.search_no_results_1}),f("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:N.search_no_results_2})]}):f("div",{class:"preview-placeholder color-c",children:N.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:r,grid:i}){const o=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,c=(t.skins[s-1]||t.skins[0]).native,u=yr(this.state.pos,n),a=n.concat(t.id).join("");return f(Hr,{selected:u,skin:s,size:o,children:f("button",{"aria-label":c,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":i.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:v=>this.handleEmojiClick({e:v,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[f("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),f(He,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},a)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return f("div",{children:[f("div",{class:"spacer"}),f("div",{class:"flex flex-middle",children:[f("div",{class:"search relative flex-grow",children:[f("input",{type:"search",ref:this.refs.searchInput,placeholder:N.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),f("span",{class:"icon loupe flex",children:Ce.search.loupe}),this.state.searchResults&&f("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ce.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?f("div",{class:"category",ref:this.refs.search,children:[f("div",{class:`sticky padding-small align-${this.dir[0]}`,children:N.categories.search}),f("div",{children:t.length?t.map((n,r)=>f("div",{class:"flex",children:n.map((i,o)=>this.renderEmojiButton(i,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:t}))})):f("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&f("a",{onClick:this.props.onAddCustomEmoji,children:N.add_custom})})})]}):null}renderCategories(){const{categories:t}=R,n=!!this.state.searchResults,r=this.getPerLine();return f("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(i=>{const{root:o,rows:s}=this.refs.categories.get(i.id);return f("div",{"data-id":i.target?i.target.id:i.id,class:"category",ref:o,children:[f("div",{class:`sticky padding-small align-${this.dir[0]}`,children:i.name||N.categories[i.id]}),f("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((l,c)=>{const u=l.index-l.index%me.rowsPerRender,a=this.state.visibleRows[u],v="current"in l?l:void 0;if(!a&&!v)return null;const d=c*r,g=d+r,h=i.emojis.slice(d,g);return h.length<r&&h.push(...new Array(r-h.length)),f("div",{"data-index":l.index,ref:v,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:a&&h.map((y,m)=>{if(!y)return f("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const $=oe.get(y);return this.renderEmojiButton($,{pos:[l.index,m],posinset:l.posinset+m,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:f("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:f("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":N.skins.choose,title:N.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:f("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return f("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),i={};return this.dir=="ltr"?i.right=r.right-n.right-3:i.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?i.bottom=r.bottom-n.top+6:(i.top=n.bottom-r.top+3,i.bottom="auto"),f("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":N.skins.choose,class:"menu hidden","data-position":i.top?"top":"bottom",style:i,children:[...Array(6).keys()].map(o=>{const s=o+1,l=this.state.skin==s;return f("div",{children:[f("input",{type:"radio",name:"skin-tone",value:s,"aria-label":N.skins[s],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(s))}}),f("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[f("span",{class:`skin-tone skin-tone-${s}`}),f("span",{class:"margin-small-lr",children:N.skins[s]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return f("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&f("div",{class:"padding-lr",children:this.renderSearch()}),f("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:f("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),q(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),q(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),q(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),q(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),q(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,i=await oe.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!i)return this.setState({searchResults:i,pos:[-1,-1]},o);const s=n.selectionStart==n.value.length?[0,0]:[-1,-1],l=[];l.setsize=i.length;let c=null;for(let u of i)(!l.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=l.length,l.push(c)),c.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:s},o)}),q(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),q(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),q(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),q(this,"openSkins",n=>{const{currentTarget:r}=n,i=r.getBoundingClientRect();this.setState({showSkins:i},async()=>{await wr(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Ve extends Sr{async connectedCallback(){const t=Xt(this.props,X,this);t.element=this,t.ref=n=>{this.component=n},await je(t),!this.disconnected&&Vt(f(Br,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Rt(nn)})}}q(Ve,"Props",X);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Ve);var nn={};nn=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function Nr(e){const t=_.useRef(null),n=_.useRef(null);return n.current&&n.current.update(e),_.useEffect(()=>(n.current=new Ve({...e,ref:t}),()=>{n.current=null}),[]),z.createElement("div",{ref:t})}function rn(e){var t=e.theme,n=e.onSelectEmoji,r=e.disableRecent,i=e.customEmojis,o=_.useMemo(function(){var s=[];return r||s.push("frequent"),s=[].concat(St(s),["people","nature","foods","activity","places","objects","symbols","flags"]),s},[r]);return z.createElement(Nr,{data:void 0,theme:t,previewPosition:"none",onEmojiSelect:n,custom:i,categories:o,set:"apple"})}rn.propTypes={theme:le.oneOf(["light","dark","auto"]),onSelectEmoji:le.func,disableRecent:le.bool,customEmojis:le.array};var Fr=_.memo(rn);function kt(e){var t=e.showPicker,n=e.theme,r=e.handleSelectEmoji,i=e.disableRecent,o=e.customEmojis;return z.createElement("div",{className:"react-emoji-picker--container"},t&&z.createElement("div",{className:"react-emoji-picker--wrapper",onClick:function(l){return l.stopPropagation()}},z.createElement("div",{className:"react-emoji-picker"},z.createElement(Fr,{theme:n,onSelectEmoji:r,disableRecent:i,customEmojis:o}))))}var Ur=function(t){var n=t.theme,r=t.keepOpened,i=t.disableRecent,o=t.customEmojis,s=t.addSanitizeFn,l=t.addPolluteFn,c=t.appendContent,u=t.buttonElement,a=_.useState(!1),v=J(a,2),d=v[0],g=v[1],h=_.useState(),y=J(h,2),m=y[0],$=y[1];_.useEffect(function(){s(Kn)},[s]),_.useEffect(function(){l(Et)},[l]),_.useEffect(function(){function x(M){var O=M.target;O.classList.contains("react-input-emoji--button")||O.classList.contains("react-input-emoji--button--icon")||g(!1)}return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}},[]);function E(x){x.stopPropagation(),x.preventDefault(),g(function(M){return!M})}function w(x){c(qn(x)),r||g(function(M){return!M})}return _.useEffect(function(){u!=null&&u.style&&(u.style.position="relative",$(u))},[u]),m?un.createPortal(z.createElement(z.Fragment,null,z.createElement(kt,{showPicker:d,theme:n,handleSelectEmoji:w,disableRecent:i,customEmojis:o}),z.createElement(Qe,{showPicker:d,toggleShowPicker:E,buttonElement:m})),m):z.createElement(z.Fragment,null,z.createElement(kt,{showPicker:d,theme:n,handleSelectEmoji:w,disableRecent:i,customEmojis:o}),z.createElement(Qe,{showPicker:d,toggleShowPicker:E}))};function Vr(){var e=on();if(!e)return null;var t=e.text.substring(e.begin,e.end);return t||null}function Wr(){var e=on();e&&e.element.deleteData(e.begin,e.end-e.begin)}function on(){var e=Fe();if(!e)return null;var t=e.element,n=e.caretOffset,r=t.textContent,i=r.lastIndexOf("@");return i===-1||i>=n||i!==0&&r[i-1]!==" "?null:{begin:i,end:n,text:r,element:t}}function Fe(){var e=qr();if(e===null)return null;var t=0;if(typeof window.getSelection<"u"){var n=window.getSelection().getRangeAt(0),r=n.cloneRange();r.selectNodeContents(e),r.setEnd(n.endContainer,n.endOffset),t=r.toString().length}else if(typeof document.selection<"u"&&document.selection.type!="Control"){var i=document.selection.createRange(),o=document.body.createTextRange();o.moveToElementText(e),o.setEndPoint("EndToEnd",i),t=o.text.length}return{element:e,caretOffset:t}}function qr(){var e=document.getSelection().anchorNode;return(e==null?void 0:e.nodeType)==3?e:null}function Kr(e){var t=_.useState(!1),n=J(t,2),r=n[0],i=n[1],o=_.useState([]),s=J(o,2),l=s[0],c=s[1],u=_.useState(null),a=J(u,2),v=a[0],d=a[1],g=_.useCallback(function(){Wr(),c([])},[]),h=_.useCallback(Xe(ue().mark(function $(){var E,w;return ue().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(E=Vr(),d(E),E!==null){M.next=6;break}c([]),M.next=12;break;case 6:return i(!0),M.next=9,e(E);case 9:w=M.sent,i(!1),c(w);case 12:case"end":return M.stop()}},$)})),[e]),y=_.useCallback(function(){var $=Xe(ue().mark(function E(w){var x,M;return ue().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(typeof e=="function"){V.next=2;break}return V.abrupt("return");case 2:w.key==="Backspace"&&(x=Fe())!==null&&x!==void 0&&x.element.parentElement.hasAttribute("data-mention-id")?(M=Fe(),M.element.parentElement.remove()):["ArrowUp","ArrowDown","Esc","Escape"].includes(w.key)||h();case 3:case"end":return V.stop()}},E)}));return function(E){return $.apply(this,arguments)}}(),[h,e]),m=_.useCallback(function(){h()},[h]);return{mentionSearchText:v,mentionUsers:l,onKeyUp:y,onFocus:m,onSelectUser:g,loading:r}}var Gr=function(t,n){var r=t.users,i=t.mentionSearchText,o=t.onSelect,s=t.addEventListener,l=_.useState(0),c=J(l,2),u=c[0],a=c[1];_.useImperativeHandle(n,function(){return{prevUser:function(){a(function(y){return y===0?0:y-1})},nextUser:function(){a(function(y){return y===r.length-1?r.length-1:y+1})}}}),_.useEffect(function(){a(0)},[r]);function v(h,y){return'<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'.concat(h,"</span>").concat(y)}var d=_.useMemo(function(){var h=i?i.substring(1).toLocaleLowerCase():"";return r.map(function(y){var m=y.name;if(i&&i.length>1)if(y.name.toLowerCase().startsWith(h))m=v(y.name.substring(0,h.length),y.name.substring(h.length));else{var $=y.name.split(" ");m=$.map(function(E){return E.toLocaleLowerCase().startsWith(h)?v(E.substring(0,h.length),E.substring(h.length)):E}).join(" ")}return Ge(Ge({},y),{},{nameHtml:m})})},[i,r]);function g(h){return function(y){y.stopPropagation(),y.preventDefault(),o(h)}}return _.useEffect(function(){var h=s("enter",function(y){y.stopPropagation(),y.preventDefault(),o(d[u])});return function(){h()}},[s,o,u,d]),z.createElement("ul",{className:"react-input-emoji--mention--list","data-testid":"mention-user-list"},d.map(function(h,y){return z.createElement("li",{key:h.id},z.createElement("button",{type:"button",onClick:g(h),className:"react-input-emoji--mention--item".concat(u===y?" react-input-emoji--mention--item__selected":""),onMouseOver:function(){return a(y)}},z.createElement("img",{className:"react-input-emoji--mention--item--img",src:h.image}),z.createElement("div",{className:"react-input-emoji--mention--item--name",dangerouslySetInnerHTML:{__html:h.nameHtml}})))}))},an=_.forwardRef(Gr);an.propTypes={users:le.array.isRequired};var Yr=function(t){var n=t.searchMention,r=t.addEventListener,i=t.appendContent,o=t.addSanitizeFn,s=_.useRef(null),l=_.useState(!1),c=J(l,2),u=c[0],a=c[1],v=Kr(n),d=v.mentionSearchText,g=v.mentionUsers,h=v.loading,y=v.onKeyUp,m=v.onFocus,$=v.onSelectUser;_.useEffect(function(){o(function(w){var x=document.createElement("div");x.innerHTML=w;var M=Array.prototype.slice.call(x.querySelectorAll(".react-input-emoji--mention--text"));return M.forEach(function(O){x.innerHTML=x.innerHTML.replace(O.outerHTML,"@[".concat(O.dataset.mentionName,"](userId:").concat(O.dataset.mentionId,")"))}),x.innerHTML})},[o]),_.useEffect(function(){a(g.length>0)},[g]),_.useEffect(function(){function w(){a(!1)}return document.addEventListener("click",w),function(){document.removeEventListener("click",w)}},[]),_.useEffect(function(){var w=r("keyUp",y);return function(){w()}},[r,y]),_.useEffect(function(){function w(M){switch(M.key){case"Esc":case"Escape":a(!1);break}}var x=r("keyDown",w);return function(){x()}},[r]),_.useEffect(function(){var w=r("focus",m);return function(){w()}},[r,m]),_.useEffect(function(){if(u){var w=r("arrowUp",function(M){M.stopPropagation(),M.preventDefault(),s.current.prevUser()}),x=r("arrowDown",function(M){M.stopPropagation(),M.preventDefault(),s.current.nextUser()});return function(){w(),x()}}},[r,u]);function E(w){$(),i('<span class="react-input-emoji--mention--text" data-mention-id="'.concat(w.id,'" data-mention-name="').concat(w.name,'">@').concat(w.name,"</span> "))}return z.createElement(z.Fragment,null,h?z.createElement("div",{className:"react-input-emoji--mention--container"},z.createElement("div",{className:"react-input-emoji--mention--loading"},z.createElement("div",{className:"react-input-emoji--mention--loading--spinner"},"Loading..."))):u&&z.createElement("div",{className:"react-input-emoji--mention--container",onClick:function(x){return x.stopPropagation()}},z.createElement(an,{ref:s,mentionSearchText:d,users:g,onSelect:E,addEventListener:r})))};function ne(){var e=[];return{subscribe:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},publish:function(n){e.forEach(function(r){return r(n)})},get currentListerners(){return e}}}function Xr(){var e=_.useMemo(function(){return{keyDown:ne(),keyUp:ne(),arrowUp:ne(),arrowDown:ne(),enter:ne(),focus:ne(),blur:ne()}},[]),t=_.useCallback(function(n,r){return e[n].subscribe(r)},[e]);return{addEventListener:t,listeners:e}}function Zr(){var e=_.useRef([]),t=_.useCallback(function(r){e.current.push(r)},[]),n=_.useCallback(function(r){var i=e.current.reduce(function(o,s){return s(o)},r);return i},[]);return{addPolluteFn:t,pollute:n}}function Jr(e,t){var n=e.onChange,r=e.onEnter,i=e.onResize,o=e.onClick,s=e.onFocus,l=e.onBlur,c=e.onKeyDown,u=e.theme,a=e.cleanOnEnter,v=e.placeholder,d=e.maxLength,g=e.keepOpened,h=e.inputClass,y=e.disableRecent,m=e.tabIndex,$=e.value,E=e.customEmojis,w=e.searchMention,x=e.buttonElement,M=e.borderRadius,O=e.borderColor,V=e.fontSize,ce=e.fontFamily,B=_.useRef(null),b=Xr(),p=b.addEventListener,C=b.listeners,L=zt(),S=L.addSanitizeFn,A=L.sanitize,T=L.sanitizedTextRef,F=Zr(),W=F.addPolluteFn,P=F.pollute,I=_.useCallback(function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";B.current!==null&&(B.current.html=Et(D),T.current=D)},[T]),U=_.useCallback(function(D){I(D)},[I]),ee=Zn(B,i,n);Xn({ref:t,setValue:U,textInputRef:B,emitChange:ee}),_.useEffect(function(){T.current!==$&&U($)},[T,U,$]),_.useEffect(function(){I()},[I]),_.useEffect(function(){function D(ie){if(typeof d<"u"&&ie.key!=="Backspace"&&B.current!==null&&Je(B.current)>=d&&ie.preventDefault(),ie.key==="Enter"&&B.current){ie.preventDefault();var ln=A(B.current.html);return ee(T.current),typeof r=="function"&&C.enter.currentListerners.length===0&&r(ln),a&&C.enter.currentListerners.length===0&&I(""),typeof c=="function"&&c(ie.nativeEvent),!1}return typeof c=="function"&&c(ie.nativeEvent),!0}var K=p("keyDown",D);return function(){K()}},[p,a,ee,C.enter.currentListerners.length,d,r,c,A,T,I]),_.useEffect(function(){function D(){typeof o=="function"&&o(),typeof s=="function"&&s()}var K=p("focus",D);return function(){K()}},[p,o,s]),_.useEffect(function(){function D(){typeof l=="function"&&l()}var K=p("blur",D);return function(){K()}},[p,l]);function he(D){A(D),ee(T.current)}function re(D){typeof d<"u"&&B.current!==null&&Je(B.current)>=d||B.current!==null&&B.current.appendContent(D)}function te(D){D.clipboardData.setData("text",T.current),D.preventDefault()}function cn(D){D.preventDefault();var K;D.clipboardData&&(K=D.clipboardData.getData("text/plain"),K=P(K),document.execCommand("insertHTML",!1,K))}return z.createElement("div",{className:"react-emoji"},z.createElement(Yr,{searchMention:w,addEventListener:p,appendContent:re,addSanitizeFn:S}),z.createElement(er,{ref:B,onCopy:te,onPaste:cn,onBlur:C.blur.publish,onFocus:C.focus.publish,onArrowUp:C.arrowUp.publish,onArrowDown:C.arrowDown.publish,onKeyUp:C.keyUp.publish,onKeyDown:C.keyDown.publish,onEnter:C.enter.publish,placeholder:v,style:{borderRadius:M,borderColor:O,fontSize:V,fontFamily:ce},tabIndex:m,className:h,onChange:he}),z.createElement(Ur,{theme:u,keepOpened:g,disableRecent:y,customEmojis:E,addSanitizeFn:S,addPolluteFn:W,appendContent:re,buttonElement:x}))}var sn=_.forwardRef(Jr);sn.defaultProps={theme:"auto",height:30,placeholder:"Type a message",borderRadius:21,borderColor:"#EAEAEA",fontSize:15,fontFamily:"sans-serif",tabIndex:0,customEmojis:[]};const Qr=({chat:e,currentUser:t,setSendMessage:n,receiveMessage:r,online:i})=>{const[o,s]=_.useState(null),[l,c]=_.useState([]),[u,a]=_.useState(""),v=de(w=>w.token),d=de(w=>w.user._id),g=_.useRef(null),h=_.useRef(null),y=dn();_.useEffect(()=>{r!==null&&(r==null?void 0:r.chatId)===(e==null?void 0:e._id)&&c(w=>[...w,r])},[r]),_.useEffect(()=>{(async()=>{try{const{messages:x}=await vn(e._id,v);c(x)}catch(x){console.log(x)}})()},[e,v]),_.useEffect(()=>{var M;const w=(M=e==null?void 0:e.members)==null?void 0:M.find(O=>O!==t);(async()=>{try{const O=await Ct(w,v);s(O)}catch(O){console.log(O)}})()},[e,t,v]);const m=async()=>{try{await gn({chatId:e._id,senderId:d,message:u},v),c(x=>[...x,{senderId:d,message:u}]),a("")}catch(x){console.log(x)}const w=e.members.find(x=>x!==d);n({chatId:e._id,senderId:d,message:u,receiverId:w})},$=()=>{var w,x;(x=(w=g.current)==null?void 0:w.files)==null||x[0]},E=()=>{var w;(w=g.current)==null||w.click()};return _.useEffect(()=>{var w;(w=h.current)==null||w.scrollIntoView({behavior:"smooth"})},[l]),k.jsxs("div",{className:"ChatBox-container",children:[e?k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"chat-header",children:k.jsx("div",{className:"follower",children:k.jsxs(ve,{children:[k.jsxs(ve,{sx:{justifyContent:"flex-start"},children:[o!=null&&o.dp?k.jsx("div",{className:"profile-picture",children:k.jsx(_e,{alt:o.userName,src:o.dp,sx:{m:"10px"}})}):k.jsx(_e,{alt:o==null?void 0:o.userName,sx:{m:"10px"}}),k.jsxs(ve,{flexDirection:"column",children:[k.jsx("div",{style:{display:"flex",flexDirection:"column"},children:k.jsx("span",{className:"name",style:{fontSize:"0.8rem",fontStyle:"initial"},children:o==null?void 0:o.userName})}),i?k.jsx(We,{children:"Online"}):k.jsx(We,{children:"Offline"})]})]}),k.jsx(Ee,{onClick:()=>y("/chat/video_call"),children:k.jsx(xn,{})})]})})}),k.jsx("div",{className:"chat-body",children:l.map((w,x)=>k.jsxs("div",{ref:x===l.length-1?h:null,className:w.senderId===t?"message own":"message",children:[k.jsx("span",{children:w.message}),k.jsx("span",{children:Rn(w.createdAt)})]},x))}),k.jsxs("div",{className:"chat-sender",children:[k.jsx("input",{type:"file",ref:g,style:{display:"none"},accept:"image/*",onChange:$}),k.jsx(Ee,{onClick:E,children:k.jsx(kn,{})}),k.jsx(sn,{value:u,onChange:a}),k.jsx(Ee,{onClick:m,children:k.jsx(wn,{})})]})]}):k.jsx("div",{style:{textAlign:"center",marginTop:"50px",fontSize:"1.5rem",color:"#888"},children:"Tap to chat"}),k.jsx(yn,{position:"bottom-left"})]})},ui=()=>{const[e,t]=_.useState([]),[n,r]=_.useState([]),[i,o]=_.useState(null),[s,l]=_.useState(null),c=de(m=>{var $;return($=m.user)==null?void 0:$._id}),u=de(m=>m.token),a=_.useRef(null),v=de(m=>m.currentchat),d=fn(),g=m=>{d(mn({currentchat:m}))};_.useEffect(()=>(a.current=hn("https://connectfy.online",{transports:["websocket"]}),c&&(a.current.emit("new-user-add",c),a.current.on("get-users",m=>{r(m)})),a.current.on("connect",()=>{console.log("Connected to the server")}),a.current.on("connect_error",m=>{console.error("Connection error:",m)}),()=>{a.current&&a.current.disconnect()}),[c]),_.useEffect(()=>{var m;i!==null&&((m=a.current)==null||m.emit("send-message",i))},[i]),_.useEffect(()=>{var $;const m=E=>{l(E)};return($=a.current)==null||$.on("receive-message",m),()=>{var E;(E=a.current)==null||E.off("receive-message",m)}},[]),_.useEffect(()=>{d(pn())},[]);const h=async()=>{try{const{chats:m}=await bn(c,u);console.log(m,"chats"),t(m)}catch(m){throw m}};_.useEffect(()=>{c&&h()},[v,u,c]);const y=m=>{const $=m==null?void 0:m.members.find(w=>w!==c);return!!(n==null?void 0:n.find(w=>w.userId===$))};return k.jsxs(k.Fragment,{children:[k.jsx(_n,{}),k.jsxs("div",{className:"Chat",children:[k.jsx("div",{className:"Left-side-chat",children:k.jsxs("div",{className:"Chat-container",children:[k.jsx("h2",{children:"Chats"}),k.jsx("div",{className:"Chat-list",children:e.map(m=>k.jsx("div",{onClick:()=>g(m),style:{cursor:"pointer"},children:k.jsx(Cn,{data:m,userId:c,token:u,online:y(m)})},m._id))})]})}),k.jsx("div",{className:"Right-side-chat",children:k.jsx("div",{children:k.jsx(Qr,{chat:v,currentUser:c,setSendMessage:o,receiveMessage:s,online:y(v)})})})]})]})};export{ui as default};
