import{c as j,j as u,g as w,d as C,e as m,_ as n,r as p,i as I,l as S,m as D,n as M}from"./index-423ecf94.js";const P=j(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function z(e){return w("MuiAvatar",e)}C("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const F=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],N=e=>{const{classes:a,variant:t,colorDefault:r}=e;return M({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},z,a)},U=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),_=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),E=m(P,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function L({crossOrigin:e,referrerPolicy:a,src:t,srcSet:r}){const[s,l]=p.useState(!1);return p.useEffect(()=>{if(!t&&!r)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{i&&l("loaded")},o.onerror=()=>{i&&l("error")},o.crossOrigin=e,o.referrerPolicy=a,o.src=t,r&&(o.srcset=r),()=>{i=!1}},[e,a,t,r]),s}const q=p.forwardRef(function(a,t){const r=I({props:a,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:A,src:f,srcSet:v,variant:y="circular"}=r,R=S(r,F);let c=null;const k=L(n({},h,{src:f,srcSet:v})),b=f||v,x=b&&k!=="error",d=n({},r,{colorDefault:!x,component:o,variant:y}),g=N(d);return x?c=u.jsx(_,n({alt:s,src:f,srcSet:v,sizes:A,ownerState:d,className:g.img},h)):l!=null?c=l:b&&s?c=s[0]:c=u.jsx(E,{ownerState:d,className:g.fallback}),u.jsx(U,n({as:o,ownerState:d,className:D(g.root,i),ref:t},R,{children:c}))}),B=q;export{B as A};
