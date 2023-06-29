import{g as ae,d as re,k as W,e as ie,_ as g,I as oe,h as L,r as c,i as ne,l as le,j as e,m as ce,n as de,c as K,G as he,H as ue,q as X,u as G,B as w,J as M,K as me,a as pe,L as xe}from"./index-bf33396f.js";import{r as P,c as fe}from"./userConnection-a0238410.js";import{F as V}from"./DisplayFlex-abd62217.js";import{T as N,I as ge,Q as U,L as C}from"./api-ccc87ef9.js";import{A as $}from"./Avatar-efc85e3e.js";import{m as je,a as I,L as m,b as x,H as ve,c as p,S as be,D as ke,E as we}from"./makeStyles-f89d6ef3.js";import{M as Se,B as ye}from"./Navbar-af09f3f9.js";import{T as Ce}from"./TextField-f331c2a9.js";function Ie(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ne(t){return parseFloat(t)}function Re(t){return ae("MuiSkeleton",t)}re("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const _e=["animation","className","component","height","style","variant","width"];let S=t=>t,q,B,F,z;const Te=t=>{const{classes:s,variant:r,animation:l,hasChildren:d,width:o,height:i}=t;return de({root:["root",r,l,d&&"withChildren",d&&!o&&"fitContent",d&&!i&&"heightAuto"]},Re,s)},De=W(q||(q=S`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Le=W(B||(B=S`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Me=ie("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,s[r.variant],r.animation!==!1&&s[r.animation],r.hasChildren&&s.withChildren,r.hasChildren&&!r.width&&s.fitContent,r.hasChildren&&!r.height&&s.heightAuto]}})(({theme:t,ownerState:s})=>{const r=Ie(t.shape.borderRadius)||"px",l=Ne(t.shape.borderRadius);return g({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:oe(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},s.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${l}${r}/${Math.round(l/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},s.variant==="circular"&&{borderRadius:"50%"},s.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},s.hasChildren&&{"& > *":{visibility:"hidden"}},s.hasChildren&&!s.width&&{maxWidth:"fit-content"},s.hasChildren&&!s.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&L(F||(F=S`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),De),({ownerState:t,theme:s})=>t.animation==="wave"&&L(z||(z=S`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Le,(s.vars||s).palette.action.hover)),Pe=c.forwardRef(function(s,r){const l=ne({props:s,name:"MuiSkeleton"}),{animation:d="pulse",className:o,component:i="span",height:n,style:h,variant:y="text",width:j}=l,v=le(l,_e),b=g({},l,{animation:d,component:i,variant:y,hasChildren:!!v.children}),k=Te(b);return e.jsx(Me,g({as:i,ref:r,className:ce(k.root,o),ownerState:b},v,{style:g({width:j,height:n},h)}))}),Ue=Pe,$e=K(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),A=K(e.jsx("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");let E=!1;const O=c.forwardRef(function(s,r){return E||(console.warn(["MUI: The Skeleton component was moved from the lab to the core.","","You should use `import { Skeleton } from '@mui/material'`","or `import Skeleton from '@mui/material/Skeleton'`"].join(`
`)),E=!0),e.jsx(Ue,g({ref:r},s))});var R={},qe=ue;Object.defineProperty(R,"__esModule",{value:!0});var J=R.default=void 0,Be=qe(he()),Fe=e,ze=(0,Be.default)((0,Fe.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");J=R.default=ze;const Ae=()=>{const{_id:t,requests:s}=X(o=>o.user),r=G();c.useEffect(()=>{},[s]);const l=async(o,i,n)=>{console.log(n);const h=await P(o,i,n);r(M({id:i})),U.success(h),r(me({followers:i}))},d=async(o,i,n)=>{console.log(n);const h=await P(o,i,n);r(M({id:i})),U.success(h)};return e.jsx(e.Fragment,{children:s.map(({id:o,userName:i,dp:n})=>e.jsxs(V,{sx:{marginBottom:2},children:[n?e.jsx("div",{className:"profile-picture",children:e.jsx($,{alt:i,src:n})}):e.jsx($,{alt:i}),e.jsx("div",{style:{width:130},children:e.jsx(N,{variant:"h6",children:`${i} started following you`})}),e.jsx(w,{variant:"contained",color:"info",onClick:()=>l(t,o,"accept"),children:"accept"}),e.jsx(ge,{onClick:()=>d(t,o,"reject"),children:e.jsx(J,{})})]},o))})},H=240,Ee=je(t=>({root:{display:"flex"},drawer:{width:H,flexShrink:0},drawerPaper:{width:H,backgroundColor:t.palette.background.default},toolbar:t.mixins.toolbar,listItem:{"&:hover":{backgroundColor:t.palette.background.default}},listItemText:{fontWeight:t.typography.fontWeightBold},searchDrawer:{width:300,flexShrink:0,marginLeft:"auto"},searchDrawerPaper:{width:350,padding:20,backgroundColor:t.palette.background.default},searchField:{marginTop:t.spacing(2),marginLeft:t.spacing(2),marginRight:t.spacing(2)}})),Qe=()=>{const[t,s]=c.useState(!1),[r,l]=c.useState(""),[d,o]=c.useState([]),[i,n]=c.useState("userName"),[h,y]=c.useState([]),[j,v]=c.useState(!1),[b,k]=c.useState(!1),{_id:Q,requests:_}=X(u=>u.user),Y={user:!0},a=Ee(),f=pe(),Z=G(),T=()=>{s(!t)},D=()=>{v(!j)},ee=u=>{l(u.target.value)},te=async()=>{k(!0);var u=await fe(r,i);y(u),k(!1)};c.useEffect(()=>{te()},[r]),c.useEffect(()=>{h&&o(h)},[h]);const se=()=>{Z(xe()),f("/")};return e.jsxs("div",{className:a.root,children:[e.jsxs(I,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},children:[e.jsx("div",{className:a.toolbar}),e.jsxs(C,{children:[e.jsxs(m,{button:!0,className:a.listItem,children:[e.jsx(x,{children:e.jsx(ve,{})}),e.jsx(p,{primary:"Home",classes:{primary:a.listItemText},onClick:()=>f("/")})]}),e.jsxs(m,{button:!0,className:a.listItem,children:[e.jsx(x,{children:e.jsx(be,{})}),e.jsx(p,{primary:"Search",classes:{primary:a.listItemText},onClick:T})]}),e.jsxs(m,{button:!0,className:a.listItem,onClick:()=>f("/chat"),children:[e.jsx(x,{children:e.jsx(Se,{})}),e.jsx(p,{primary:"Message",classes:{primary:a.listItemText}})]}),e.jsxs(m,{button:!0,className:a.listItem,children:[e.jsx(x,{children:_.length?e.jsx(ye,{color:"info",badgeContent:_.length,children:e.jsx(A,{sx:{fontSize:"25px"}})}):e.jsx(A,{sx:{fontSize:"25px"}})}),e.jsx(p,{primary:"Requests",classes:{primary:a.listItemText},onClick:D})]}),e.jsxs(m,{button:!0,className:a.listItem,onClick:()=>f(`/profile/${Q}`,{state:Y}),children:[e.jsx(x,{children:e.jsx($e,{})}),e.jsx(p,{primary:"Profile",classes:{primary:a.listItemText}})]})]}),e.jsx(ke,{}),e.jsx(C,{children:e.jsxs(m,{button:!0,className:a.listItem,onClick:se,children:[e.jsx(x,{children:e.jsx(we,{})}),e.jsx(p,{primary:"Logout",classes:{primary:a.listItemText}})]})})]}),e.jsxs(I,{className:a.searchDrawer,anchor:"left",open:t,onClose:T,classes:{paper:a.searchDrawerPaper},children:[e.jsx(N,{variant:"h3",children:"Search"}),e.jsx("div",{className:a.toolbar}),e.jsxs(V,{children:[e.jsx(w,{variant:i==="userName"?"outlined":"text",onClick:()=>n("userName"),children:"User"}),e.jsx(w,{variant:i==="gender"?"outlined":"text",onClick:()=>n("gender"),children:"Gender"}),e.jsx(w,{variant:i==="city"?"outlined":"text",onClick:()=>n("city"),children:"Location"})]}),e.jsx(Ce,{onKeyUp:ee,className:a.searchField,label:"Search.....",variant:"outlined",size:"small",fullWidth:!0}),b?e.jsxs(e.Fragment,{children:[e.jsx(O,{sx:{margin:".2rem",width:"95%",height:"50px"}}),e.jsx(O,{sx:{margin:".2rem",width:"95%",height:"50px"}})]}):d.length>0&&e.jsx(C,{children:d.map(u=>e.jsx(m,{button:!0,className:a.listItem,children:e.jsx(p,{primary:u.userName,classes:{primary:a.listItemText},onClick:()=>f(`/profile/${u._id}`)})},u._id))})]}),e.jsxs(I,{className:a.searchDrawer,anchor:"left",open:j,onClose:D,classes:{paper:a.searchDrawerPaper},children:[e.jsx(N,{variant:"h3",children:"Notifications"}),e.jsx("div",{className:a.toolbar}),e.jsx(Ae,{})]})]})};export{Ue as S,Qe as a,J as d};
