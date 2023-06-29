import{r,j as e,q as I,B as j}from"./index-bf33396f.js";import{P as L,u as O,I as u,Q as $,m as H,T as Q,k as q}from"./api-ccc87ef9.js";/* empty css                      */import{T as G,a as W,b as z,c as m,d as t,e as J,f as K,g as V,D as X,h as v,i as w,j as A,k as B,A as Y}from"./LastPage-6ba9a792.js";import{a as Z}from"./userConnection-a0238410.js";import{b as ee}from"./authConnect-76be6802.js";import{d as se}from"./makeStyles-f89d6ef3.js";import{A as U}from"./Avatar-efc85e3e.js";import{D as te,a as ne,b as ie,c as ae}from"./DialogTitle-d3cd385d.js";import{B as k,u as le}from"./MenuItem-dbe7b88d.js";function oe(n){const l=O(),{count:c,page:a,rowsPerPage:d,onPageChange:i}=n,p=o=>{i(o,0)},h=o=>{i(o,a-1)},f=o=>{i(o,a+1)},b=o=>{i(o,Math.max(0,Math.ceil(c/d)-1))};return e.jsxs(k,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(u,{onClick:p,disabled:a===0,"aria-label":"first page",children:l.direction==="rtl"?e.jsx(v,{}):e.jsx(w,{})}),e.jsx(u,{onClick:h,disabled:a===0,"aria-label":"previous page",children:l.direction==="rtl"?e.jsx(A,{}):e.jsx(B,{})}),e.jsx(u,{onClick:f,disabled:a>=Math.ceil(c/d)-1,"aria-label":"next page",children:l.direction==="rtl"?e.jsx(B,{}):e.jsx(A,{})}),e.jsx(u,{onClick:b,disabled:a>=Math.ceil(c/d)-1,"aria-label":"last page",children:l.direction==="rtl"?e.jsx(w,{}):e.jsx(v,{})})]})}const N=[5,10,25,{label:"All",value:-1}],re=r.forwardRef(function(l,c){return e.jsx(se,{direction:"up",ref:c,...l})});function ce(){const[n,l]=r.useState([]),c=I(s=>s.admintoken),[a,d]=r.useState(0),[i,p]=r.useState(N[0]),[h,f]=r.useState({}),[b,o]=r.useState(!1),[P,D]=r.useState(!1),M=async()=>{const s=await Z(c,"undefined");l(s)};r.useEffect(()=>{M()},[P]);const _=n==null?void 0:n.length;r.useEffect(()=>{d(0)},[i]);const x=n?n.slice(a*i,a*i+i):n==null?void 0:n.slice(a*i,a*i+i),y=Math.max(0,i-(x==null?void 0:x.length)),R=s=>{d(s)},E=s=>{p(parseInt(s.target.value,10))},T=(s,g)=>{o(!0),f({userId:s,status:g})},C=()=>{o(!1)},F=async()=>{console.log(h),C();let{status:s}=await ee(h.userId);$.success(s),D(()=>!P)};return e.jsxs(G,{component:L,children:[e.jsxs(W,{sx:{minWidth:500},"aria-label":"custom pagination table",children:[e.jsxs(z,{children:[" ",e.jsxs(m,{children:[e.jsx(t,{children:"Avatar"}),e.jsx(t,{children:"Name"}),e.jsx(t,{align:"right",children:"UserName"}),e.jsx(t,{align:"right",children:"Email"}),e.jsx(t,{align:"right",children:"Gender"}),e.jsx(t,{align:"right",children:"Followers"}),e.jsx(t,{align:"right",children:"Followings"}),e.jsx(t,{align:"right",children:"Actions"})]})]}),e.jsxs(J,{children:[x.map(s=>{var g,S;return e.jsxs(m,{children:[e.jsx(t,{component:"th",scope:"row",children:s.dp?e.jsx("div",{children:e.jsx(U,{sx:{width:"3rem",height:"3rem"},alt:s.userName,src:s.dp})}):e.jsx(U,{sx:{width:"3rem",height:"3rem"},alt:s.userName})}),e.jsx(t,{component:"th",scope:"row",children:s.name}),e.jsx(t,{style:{width:160},align:"right",children:s.userName}),e.jsx(t,{style:{width:160},align:"right",children:s.email}),e.jsx(t,{style:{width:160},align:"right",children:s.gender}),e.jsx(t,{style:{width:160},align:"right",children:(g=s.followers)==null?void 0:g.length}),e.jsx(t,{style:{width:160},align:"right",children:(S=s.following)==null?void 0:S.length}),e.jsx(t,{style:{width:160},align:"right",children:s.isBlock==!0?e.jsx(j,{variant:"outlined",onClick:()=>T(s._id,"Unblock"),children:"unblock"}):e.jsx(j,{variant:"outlined",color:"error",onClick:()=>T(s._id,"Block"),children:"block"})})]},s._id)}),y>0&&e.jsx(m,{style:{height:53*y},children:e.jsx(t,{colSpan:7})})]}),e.jsx(K,{children:e.jsx(m,{children:e.jsx(V,{rowsPerPageOptions:N,colSpan:7,count:_,rowsPerPage:i,page:a,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:R,onRowsPerPageChange:E,ActionsComponent:oe})})})]}),e.jsx("div",{children:e.jsxs(te,{open:b,TransitionComponent:re,keepMounted:!0,onClose:C,"aria-describedby":"alert-dialog-slide-description",children:[e.jsx(ne,{children:`Are you sure do you want to ${h.status} this user ?`}),e.jsx(ie,{children:e.jsx(X,{id:"alert-dialog-slide-description"})}),e.jsxs(ae,{children:[e.jsx(j,{color:"info",onClick:C,children:"Cancel"}),e.jsx(j,{color:"info",onClick:F,children:"Ok"})]})]})})]})}const de=H(n=>({contentContainer:{justifyContent:"center",[n.breakpoints.down("sm")]:{flexDirection:"column"}},navbar:{height:50}})),ke=()=>{const n=de(),l=le("(min-width: 800px)");return e.jsxs(e.Fragment,{children:[e.jsxs(k,{className:n.contentContainer,children:[e.jsx("div",{className:n.navbar,children:e.jsx(Q,{textAlign:"center",variant:"h3",p:2,children:"User list"})}),l&&e.jsx(Y,{}),e.jsx(k,{marginLeft:l?30:void 0,children:e.jsx(ce,{})})]}),e.jsx(q,{position:"bottom-left"})]})};export{ke as default};
