import{g as T,d as $,e as D,_ as d,f as P,r as s,i as I,l as w,a9 as F,j as R,m as k,n as G}from"./index-bf33396f.js";import{q as H,r as A,j as J}from"./api-ccc87ef9.js";function K(e){return T("MuiFormControl",e)}$("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const O=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Q=e=>{const{classes:t,margin:a,fullWidth:n}=e,r={root:["root",a!=="none"&&`margin${P(a)}`,n&&"fullWidth"]};return G(r,K,t)},V=D("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>d({},t.root,t[`margin${P(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>d({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),X=s.forwardRef(function(t,a){const n=I({props:t,name:"MuiFormControl"}),{children:r,className:U,color:u="primary",component:x="div",disabled:i=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:_="none",required:p=!1,size:g="medium",variant:h="outlined"}=n,q=w(n,O),S=d({},n,{color:u,component:x,disabled:i,error:m,fullWidth:c,hiddenLabel:f,margin:_,required:p,size:g,variant:h}),z=Q(S),[W,B]=s.useState(()=>{let l=!1;return r&&s.Children.forEach(r,o=>{if(!F(o,["Input","Select"]))return;const N=F(o,["Select"])?o.props.input:o;N&&H(N.props)&&(l=!0)}),l}),[b,y]=s.useState(()=>{let l=!1;return r&&s.Children.forEach(r,o=>{F(o,["Input","Select"])&&(A(o.props,!0)||A(o.props.inputProps,!0))&&(l=!0)}),l}),[E,C]=s.useState(!1);i&&E&&C(!1);const j=v!==void 0&&!i?v:E;let M;const L=s.useMemo(()=>({adornedStart:W,setAdornedStart:B,color:u,disabled:i,error:m,filled:b,focused:j,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:M,required:p,variant:h}),[W,u,i,m,b,j,c,f,M,p,g,h]);return R.jsx(J.Provider,{value:L,children:R.jsx(V,d({as:x,ownerState:S,className:k(z.root,U),ref:a},q,{children:r}))})}),ee=X;export{ee as F};
