import{a3 as W,_ as c,a4 as k,f as l,a5 as v,r as R,l as $,j as G,m as S,n as y,g as T,e as M,i as P}from"./index-bf33396f.js";const j=W(),L=j,N=["className","component","disableGutters","fixed","maxWidth","classes"],_=k(),U=L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),w=a=>v({props:a,name:"MuiContainer",defaultTheme:_}),z=(a,e)=>{const o=n=>T(e,n),{classes:u,fixed:p,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,p&&"fixed",x&&"disableGutters"]};return y(s,o,u)};function E(a={}){const{createStyledComponent:e=U,useThemeProps:o=w,componentName:u="MuiContainer"}=a,p=e(({theme:t,ownerState:s})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((n,i)=>{const d=i,r=t.breakpoints.values[d];return r!==0&&(n[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),n},{}),({theme:t,ownerState:s})=>c({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return R.forwardRef(function(s,n){const i=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=i,g=$(i,N),m=c({},i,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=z(m,u);return G.jsx(p,c({as:r,ownerState:m,className:S(h.root,d),ref:n},g))})}const D=E({createStyledComponent:M("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>P({props:a,name:"MuiContainer"})}),q=D;export{q as C};
