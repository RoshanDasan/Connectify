import{g as Ie,d as Le,k as Y,e as T,f as z,_ as D,h as G,r as a,i as ze,l as De,j as e,m as Be,n as Ue,o as Te,p as Ee,c as A,a as ie,q as R,u as le,t as He,R as J,B as Q,v as qe,w as Ke,x as me,y as Qe}from"./index-423ecf94.js";import{T as Xe,N as Ye}from"./Navbar-8492a480.js";import{u as Oe,T as $,a as he,I as L,M as Ge,b as Ze,Q as oe,m as Je,k as es}from"./api-180f25a0.js";/* empty css                      */import{g as ce,f as ss,s as pe,a as ts}from"./userConnection-b2d224d4.js";import{s as rs,F as y}from"./DisplayFlex-d28fcd2f.js";import{B as S,M as xe,u as os}from"./MenuItem-7c471efa.js";import{S as V,d as ns,a as as}from"./Sidebar-825b2ab9.js";import{A as W}from"./Avatar-8ba7cd52.js";import{A as is,D as ls,v as cs}from"./v4-f069db64.js";import{u as ds,r as us,l as ms,a as hs,p as ps,g as te,d as xs,b as fs}from"./postConnection-cc32d56f.js";import{r as gs,b as js,u as fe,g as ge}from"./GoogleAuth-5ad9a5a3.js";import{I as je}from"./InputAdornment-9003bdce.js";import{S as ne}from"./Send-9352790a.js";import{T as de}from"./TextField-314fdea5.js";import{D as X}from"./makeStyles-5c70c144.js";import{d as ve}from"./MoreVert-49077241.js";import{D as vs,a as bs,b as Cs,c as ks}from"./DialogTitle-c1b335c5.js";import"./FormControl-e04fab4b.js";function ys(s){return Ie("MuiCircularProgress",s)}Le("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ws=["className","color","disableShrink","size","style","thickness","value","variant"];let se=s=>s,be,Ce,ke,ye;const F=44,Ss=Y(be||(be=se`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Ps=Y(Ce||(Ce=se`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),$s=s=>{const{classes:t,variant:r,color:i,disableShrink:f}=s,c={root:["root",r,`color${z(i)}`],svg:["svg"],circle:["circle",`circle${z(r)}`,f&&"circleDisableShrink"]};return Ue(c,ys,t)},Rs=T("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.root,t[r.variant],t[`color${z(r.color)}`]]}})(({ownerState:s,theme:t})=>D({display:"inline-block"},s.variant==="determinate"&&{transition:t.transitions.create("transform")},s.color!=="inherit"&&{color:(t.vars||t).palette[s.color].main}),({ownerState:s})=>s.variant==="indeterminate"&&G(ke||(ke=se`
      animation: ${0} 1.4s linear infinite;
    `),Ss)),Ms=T("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(s,t)=>t.svg})({display:"block"}),Is=T("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.circle,t[`circle${z(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:s,theme:t})=>D({stroke:"currentColor"},s.variant==="determinate"&&{transition:t.transitions.create("stroke-dashoffset")},s.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink&&G(ye||(ye=se`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Ps)),Ls=a.forwardRef(function(t,r){const i=ze({props:t,name:"MuiCircularProgress"}),{className:f,color:c="primary",disableShrink:m=!1,size:u=40,style:h,thickness:j=3.6,value:g=0,variant:p="indeterminate"}=i,x=De(i,ws),o=D({},i,{color:c,disableShrink:m,size:u,thickness:j,value:g,variant:p}),l=$s(o),n={},b={},k={};if(p==="determinate"){const w=2*Math.PI*((F-j)/2);n.strokeDasharray=w.toFixed(3),k["aria-valuenow"]=Math.round(g),n.strokeDashoffset=`${((100-g)/100*w).toFixed(3)}px`,b.transform="rotate(-90deg)"}return e.jsx(Rs,D({className:Be(l.root,f),style:D({width:u,height:u},b,h),ownerState:o,ref:r,role:"progressbar"},k,x,{children:e.jsx(Ms,{className:l.svg,ownerState:o,viewBox:`${F/2} ${F/2} ${F} ${F}`,children:e.jsx(Is,{className:l.circle,style:n,ownerState:o,cx:F,cy:F,r:(F-j)/2,fill:"none",strokeWidth:j})})}))}),_e=Ls;function zs(s){return Ie("MuiLinearProgress",s)}Le("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Ds=["className","color","value","valueBuffer","variant"];let q=s=>s,we,Se,Pe,$e,Re,Me;const ae=4,Bs=Y(we||(we=q`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Us=Y(Se||(Se=q`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Os=Y(Pe||(Pe=q`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),_s=s=>{const{classes:t,variant:r,color:i}=s,f={root:["root",`color${z(i)}`,r],dashed:["dashed",`dashedColor${z(i)}`],bar1:["bar",`barColor${z(i)}`,(r==="indeterminate"||r==="query")&&"bar1Indeterminate",r==="determinate"&&"bar1Determinate",r==="buffer"&&"bar1Buffer"],bar2:["bar",r!=="buffer"&&`barColor${z(i)}`,r==="buffer"&&`color${z(i)}`,(r==="indeterminate"||r==="query")&&"bar2Indeterminate",r==="buffer"&&"bar2Buffer"]};return Ue(f,zs,t)},ue=(s,t)=>t==="inherit"?"currentColor":s.vars?s.vars.palette.LinearProgress[`${t}Bg`]:s.palette.mode==="light"?Te(s.palette[t].main,.62):Ee(s.palette[t].main,.5),Ns=T("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.root,t[`color${z(r.color)}`],t[r.variant]]}})(({ownerState:s,theme:t})=>D({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:ue(t,s.color)},s.color==="inherit"&&s.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},s.variant==="buffer"&&{backgroundColor:"transparent"},s.variant==="query"&&{transform:"rotate(180deg)"})),As=T("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.dashed,t[`dashedColor${z(r.color)}`]]}})(({ownerState:s,theme:t})=>{const r=ue(t,s.color);return D({position:"absolute",marginTop:0,height:"100%",width:"100%"},s.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},G($e||($e=q`
    animation: ${0} 3s infinite linear;
  `),Os)),Fs=T("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.bar,t[`barColor${z(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar1Indeterminate,r.variant==="determinate"&&t.bar1Determinate,r.variant==="buffer"&&t.bar1Buffer]}})(({ownerState:s,theme:t})=>D({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:s.color==="inherit"?"currentColor":(t.vars||t).palette[s.color].main},s.variant==="determinate"&&{transition:`transform .${ae}s linear`},s.variant==="buffer"&&{zIndex:1,transition:`transform .${ae}s linear`}),({ownerState:s})=>(s.variant==="indeterminate"||s.variant==="query")&&G(Re||(Re=q`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Bs)),Vs=T("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.bar,t[`barColor${z(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar2Indeterminate,r.variant==="buffer"&&t.bar2Buffer]}})(({ownerState:s,theme:t})=>D({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},s.variant!=="buffer"&&{backgroundColor:s.color==="inherit"?"currentColor":(t.vars||t).palette[s.color].main},s.color==="inherit"&&{opacity:.3},s.variant==="buffer"&&{backgroundColor:ue(t,s.color),transition:`transform .${ae}s linear`}),({ownerState:s})=>(s.variant==="indeterminate"||s.variant==="query")&&G(Me||(Me=q`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Us)),Ws=a.forwardRef(function(t,r){const i=ze({props:t,name:"MuiLinearProgress"}),{className:f,color:c="primary",value:m,valueBuffer:u,variant:h="indeterminate"}=i,j=De(i,Ds),g=D({},i,{color:c,variant:h}),p=_s(g),x=Oe(),o={},l={bar1:{},bar2:{}};if((h==="determinate"||h==="buffer")&&m!==void 0){o["aria-valuenow"]=Math.round(m),o["aria-valuemin"]=0,o["aria-valuemax"]=100;let n=m-100;x.direction==="rtl"&&(n=-n),l.bar1.transform=`translateX(${n}%)`}if(h==="buffer"&&u!==void 0){let n=(u||0)-100;x.direction==="rtl"&&(n=-n),l.bar2.transform=`translateX(${n}%)`}return e.jsxs(Ns,D({className:Be(p.root,f),ownerState:g,role:"progressbar"},o,{ref:r},j,{children:[h==="buffer"?e.jsx(As,{className:p.dashed,ownerState:g}):null,e.jsx(Fs,{className:p.bar1,ownerState:g,style:l.bar1}),h==="determinate"?null:e.jsx(Vs,{className:p.bar2,ownerState:g,style:l.bar2})]}))}),Ts=Ws,re=A(e.jsx("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"CameraAltOutlined"),Es=A(e.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"}),"ChatBubbleOutlineOutlined"),Ne=A(e.jsx("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}),"DeleteOutlined"),Hs=A(e.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined"),qs=A(e.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorderOutlined"),Ks=A(e.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"FavoriteOutlined"),Qs=A(e.jsx("path",{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"ManageAccountsOutlined"),Xs=A(e.jsx("path",{d:"M4.34 2.93 2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17 7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"}),"VolumeOffOutlined"),Ys=A(e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"}),"VolumeUpOutlined"),ee=rs(S)(({})=>({padding:"1.5rem 1.5rem 0.75rem 1.5rem",borderRadius:"0.75rem"})),Gs=({userId:s,data:t})=>{const[r,i]=a.useState(null),[f,c]=a.useState(!0),m=Oe(),u=ie(),h=R(n=>n.token),j=m.palette.text.primary,g=m.palette.text.secondary,p=async()=>{try{const n=await ce(s,h);i(n),c(!1)}catch(n){throw n}};if(a.useEffect(()=>{p()},[t]),f)return e.jsx(ee,{children:e.jsxs(y,{gap:"0.5rem",pb:"1.1rem",children:[e.jsx("div",{children:e.jsxs(y,{children:[e.jsx(V,{variant:"circular",width:40,height:40}),e.jsx("div",{children:e.jsxs(S,{ml:5,children:[e.jsx(V,{width:90,height:40}),e.jsx(V,{width:70,height:15}),e.jsx(V,{width:70,height:15})]})})]})}),e.jsx(V,{width:55,height:55})]})});const{userName:x,followers:o,following:l}=r;return e.jsx(ee,{children:e.jsxs(y,{gap:"0.5rem",pb:"1.1rem",onClick:()=>u(`/profile/${s}`),children:[e.jsxs(y,{gap:"1rem",alignItems:"center",children:[r.dp?e.jsx("div",{className:"profile-picture",children:e.jsx(W,{alt:r.userName,src:r.dp})}):e.jsx(W,{alt:r.userName}),e.jsxs(S,{children:[e.jsx($,{variant:"h4",color:j,fontWeight:"bold",sx:{cursor:"pointer"},children:x}),e.jsxs($,{color:g,variant:"subtitle2",children:[o.length," followers"]}),e.jsxs($,{color:g,variant:"subtitle2",children:[l.length," following"]})]})]}),e.jsx(Xe,{title:"Profile settings",placement:"bottom",children:e.jsx(Qs,{sx:{fontSize:24,cursor:"pointer"}})})]})})};const Zs=({onButtonClick:s})=>{const[t,r]=a.useState(!1),[i,f]=a.useState(""),[c,m]=a.useState(null),[u,h]=a.useState(""),[j,g]=a.useState(!0),[p,x]=a.useState(!1),[o,l]=a.useState(0),[n,b]=a.useState(""),{_id:k,userName:w}=R(d=>d.user),O=R(d=>d.token),B=R(d=>d.mode),K=le();a.useEffect(()=>{(async()=>{const{dp:M}=await ce(k,O);f(M)})()},[k,O]);const E=async()=>{x(!0),setTimeout(()=>{x(!1)},4e3);const d=new FormData;if(d.append("userId",k),d.append("userName",w),d.append("description",u),c){const C=gs(js,`posts/${c.name+cs()}`);if(c.name.toLowerCase().endsWith(".mp4")){await fe(C,c);const U=await ge(C);d.append("video",U),d.append("videoPath",c.name)}else{await fe(C,c);const U=await ge(C);d.append("image",U),d.append("picturePath",c.name)}}const M=await ds(O,d);K(He({posts:M.newPost})),m(null),h(""),x(!1),s()},_=d=>{h(d.target.value),/^\s*$/.test(d.target.value)?g(!0):g(!1)};return a.useEffect(()=>{const d=setInterval(()=>{l(M=>{if(M===100)return 0;const C=Math.random()*10;return Math.min(M+C,100)})},500);return()=>{clearInterval(d)}},[]),e.jsxs(e.Fragment,{children:[n.length>0&&e.jsx(is,{severity:"error",children:n}),e.jsxs(ee,{children:[e.jsxs(y,{gap:"1.5rem",children:[i?e.jsx("div",{className:"profile-picture",children:e.jsx(W,{alt:w,src:i})}):e.jsx(W,{alt:w}),B==="dark"?e.jsxs(e.Fragment,{children:[e.jsx(he,{placeholder:"Enter your thoughts",onChange:_,value:u,sx:{width:"100%",border:"2px solid black",color:"black",borderRadius:"2rem",padding:".5rem 1.5rem"},endAdornment:e.jsx(je,{position:"end",children:e.jsx(L,{onClick:()=>r(!t),children:e.jsx(re,{})})})}),e.jsx(L,{onClick:E,disabled:p||j,children:e.jsx(ne,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx(he,{placeholder:"Enter your thoughts",onChange:_,value:u,sx:{width:"100%",border:"2px solid black",color:"black",borderRadius:"2rem",padding:".5rem .2rem .5rem 1.5rem"},endAdornment:e.jsx(je,{position:"end",children:e.jsx(L,{onClick:()=>r(!t),children:e.jsx(re,{})})})}),e.jsx(L,{onClick:E,disabled:p||j,children:e.jsx(ne,{})})]})]}),t&&e.jsx(S,{border:"1px solid black",borderRadius:"5px",mt:"1rem",p:"1rem",children:e.jsx(ls,{multiple:!0,onDrop:(d,M)=>{console.log(d[0].name.endsWith("mp4"),"acc"),console.log(M,"rej"),d[0]&&d[0]&&(d[0].name.endsWith(".jpg")||d[0].name.endsWith(".png")||d[0].name.endsWith(".mp4"))?(m(d[0]),b("")):b("Please select a valid file")},children:({getRootProps:d,getInputProps:M})=>e.jsxs(y,{children:[e.jsxs(S,{...d(),sx:{"&:hover":{cursor:"pointer"}},children:[e.jsx(de,{...M()}),c?e.jsxs(y,{alignItems:"center",children:[e.jsx($,{children:c.name}),e.jsx(Hs,{fontSize:"small"})]}):e.jsx("p",{children:"Upload image or video here"})]}),e.jsx(re,{}),c&&e.jsx(L,{onClick:()=>m(null),sx:{width:"15%"},children:e.jsx(Ne,{fontSize:"small"})})]})})}),p&&e.jsx(Ts,{variant:"determinate",value:o}),!j&&e.jsx($,{variant:"body2",children:"Please enter a post"}),e.jsx(X,{sx:{mt:"1rem"}})]})]})},Js=({postId:s,name:t,friendId:r,buttonClick:i})=>{const[f,c]=J.useState(null),[m,u]=J.useState(!1),h=ie(),j=R(C=>C.user._id),g=R(C=>C.token),p=le(),[x,o]=J.useState(!1),[l,n]=a.useState(""),b=!!f,k=C=>{c(C.currentTarget)},w=()=>{c(null)},O=()=>{o(!0)},B=()=>{o(!1)},K=async(C,H)=>{w();const U=await ss(C,H,g);p(qe({unfollower:U==null?void 0:U.data.friend._id})),i(),oe.success(`You unfollowed ${t}`)},E=()=>{w(),u(!0)},_=()=>{u(!1)},d=async C=>{console.log(C),console.log(l);const H=await us(j,s,l,g);console.log(H),_(),B()},M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,borderRadios:"5px",p:2,height:"16rem",width:"30rem"};return e.jsxs(y,{m:"0.5rem 0 1.5rem 0",children:[e.jsxs(y,{gap:"1rem",onClick:()=>h(`/profile/${r}`),children:[e.jsx(W,{alt:t}),e.jsx(S,{children:e.jsx($,{variant:"h5",fontWeight:"500",sx:{"&:hover":{color:"blue",cursor:"pointer"}},children:t})})]}),e.jsxs("div",{children:[r===j?e.jsx(e.Fragment,{children:e.jsx(L,{"aria-label":"more",id:"long-button","aria-controls":b?"long-menu":void 0,"aria-expanded":b?"true":void 0,"aria-haspopup":"true",onClick:k,children:e.jsx(ve,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(L,{"aria-label":"more",id:"long-button","aria-controls":b?"long-menu":void 0,"aria-expanded":b?"true":void 0,"aria-haspopup":"true",onClick:k,children:e.jsx(ve,{})}),e.jsxs(Ge,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:f,open:b,onClose:w,PaperProps:{style:{width:"20ch"}},children:[e.jsx(xe,{onClick:E,sx:{color:"red"},children:"Report"}),e.jsx(xe,{onClick:()=>K(j,r),children:"Unfollow"})]})]}),e.jsx(Ze,{open:m,onClose:_,children:e.jsxs(S,{sx:M,children:[e.jsx($,{variant:"h4",textAlign:"center",gutterBottom:!0,children:"Report User"}),e.jsx($,{variant:"body1",gutterBottom:!0,children:"Enter the reason for report:"}),e.jsx(S,{sx:{width:"98%"},children:e.jsx(de,{name:"bio",label:"Enter....",fullWidth:!0,multiline:!0,rows:4,onChange:C=>n(C.target.value),value:l})}),e.jsxs(S,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:[e.jsx(Q,{onClick:_,sx:{marginRight:1},children:"Cancel"}),e.jsx(Q,{variant:"contained",color:"primary",onClick:O,children:"Report"})]})]})}),e.jsxs(vs,{open:x,onClose:B,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(bs,{id:"alert-dialog-title",children:`Are you sure want to report ${t}?`}),e.jsx(Cs,{}),e.jsxs(ks,{children:[e.jsx(Q,{onClick:B,color:"error",children:"Disagree"}),e.jsx(Q,{onClick:()=>d(r),autoFocus:!0,color:"info",children:"Agree"})]})]})]})]})},et=({id:s,userId:t,description:r,userName:i,image:f,video:c,likes:m,commentList:u,globalClick:h})=>{const[j,g]=a.useState(!1),[p,x]=a.useState(""),[o,l]=a.useState([]),[n,b]=a.useState({}),k=R(v=>v.token),w=R(v=>v.user._id),{name:O}=R(v=>v.user),[B,K]=a.useState(m.includes(w)),[E,_]=a.useState(m.length),[d,M]=a.useState({status:!1,index:-1}),C=async(v,I)=>{ms(v,I,k),_(B?P=>P-1:P=>P+1),K(P=>!P)},H=async()=>{if(p&&!p.match(/^\s/)){if(n.userId)await hs(s,n.userId,n.comment,p),b({}),h();else{await ps(s,w,`${O} : ${p}`,k);const v=await te(s,k),{comments:I}=v.data.post;l(I),h()}x("")}},U=async()=>{const v=await te(s,k),{comments:I}=v.data.post;l(I),g(P=>!P),h()},Ae=async v=>{xs(s,v,k);const I=await te(s,k),{comments:P}=I.data.post;l(P),U(),h()},Fe=(v,I)=>{const P=v.split(":"),N=P[0].slice(0,P[0].length-1);b({name:`@${N}`,userId:I,comment:v}),h()},Ve=()=>{const[v,I]=a.useState(!0),P=()=>{I(N=>!N)};return e.jsxs("div",{style:{position:"relative"},children:[c?e.jsx("video",{src:c,width:"100%",style:{borderRadius:"0.75rem",marginTop:"0.75rem"},autoPlay:!0,loop:!0,muted:v,children:e.jsx("p",{children:"Your browser does not support the video tag."})}):e.jsx(S,{sx:{display:"flex"},children:e.jsx(_e,{})}),e.jsx("button",{style:{position:"absolute",top:"20px",right:"10px",background:"transparent",border:"none",cursor:"pointer"},onClick:P,children:v?e.jsx(Xs,{}):e.jsx(Ys,{})})]})};return e.jsxs(ee,{width:"30rem",children:[e.jsx(Js,{postId:s,name:i,image:f,video:c,friendId:t,buttonClick:h}),e.jsx($,{sx:{mt:"1rem"},children:r}),f&&e.jsx("img",{src:f,alt:"img",width:"100%",loading:"lazy",style:{borderRadius:"0.75rem",marginTop:"0.75rem"}}),c&&e.jsx(Ve,{}),e.jsx(y,{mt:"0.25rem",children:e.jsxs(y,{gap:"1rem",children:[e.jsxs(y,{gap:"0.3rem",children:[e.jsx(L,{onClick:()=>C(s,w),children:B?e.jsx(Ks,{sx:{color:"red"}}):e.jsx(qs,{})}),e.jsx($,{children:E})]}),e.jsxs(y,{gap:"0.3rem",children:[e.jsx(L,{onClick:()=>U(),children:e.jsx(Es,{})}),e.jsx($,{children:u.length})]})]})}),j&&e.jsxs(S,{mt:"0.5rem",bgcolor:"#f5f5f5",borderRadius:"8px",padding:"1rem",children:[o.map(({comment:v,userId:I,reply:P},N)=>e.jsxs(J.Fragment,{children:[e.jsxs(S,{children:[e.jsx(X,{}),e.jsxs(y,{alignItems:"center",children:[e.jsxs("div",{children:[e.jsx($,{sx:{"&:hover":{cursor:"pointer"},m:"0.5rem 0",pl:"1rem"},color:"black",children:v}),e.jsx("p",{onClick:()=>M(Z=>({...Z,[N]:!Z[N]})),style:{cursor:"pointer"},children:"Reply comments"}),d[N]&&P.map((Z,We)=>e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsx("p",{children:Z.reply},We)]}))]}),e.jsxs("div",{children:[e.jsx(Q,{variant:"text",sx:{color:"black"},onClick:()=>Fe(v,I),children:"Reply"}),I===w&&e.jsx(L,{size:"small",onClick:()=>Ae(N),children:e.jsx(Ne,{})})]})]})]}),e.jsx(X,{})]},N)),e.jsxs(S,{display:"flex",alignItems:"center",mt:"0.5rem",children:[e.jsx(de,{variant:"outlined",fullWidth:!0,label:n.name?n.name:"Add a comment",size:"small",value:p,onChange:v=>x(v.target.value)}),n.name&&e.jsx(L,{onClick:()=>b({}),children:e.jsx(ns,{})}),e.jsx(L,{onClick:H,children:e.jsx(ne,{})})]})]}),e.jsx(X,{sx:{marginTop:"4rem"}})]})},st=({data:s,onButtonClick:t})=>{const r=R(o=>o.token),i=R(o=>o.user._id),f=R(o=>o.user),[c,m]=a.useState([]),[u,h]=a.useState(!1),[j,g]=a.useState(!0),p=()=>{h(()=>!u)},x=async()=>{try{const l=(await fs(r)).filter(n=>f.followers.includes(n.userId)||n.userId==i);m(l),g(!1)}catch(o){throw o}};return a.useEffect(()=>{x()},[u,s]),e.jsxs(e.Fragment,{children:[j&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(_e,{})}),e.jsx("div",{children:c.map(({_id:o,userId:l,description:n,userName:b,image:k,video:w,likes:O,comments:B})=>e.jsx(et,{id:o,userId:l,description:n,userName:b,image:k,video:w,likes:O,commentList:B,click:p,globalClick:t},o))})]})},tt=({friendId:s,image:t,userName:r,handleshowFreind:i,onButtonClick:f})=>{const{_id:c,requested:m}=R(x=>x.user),u=ie(),[h,j]=a.useState(m.some(x=>x.id===s)),g=async(x,o)=>{const l=await pe(x,o);console.log(l,"requse send"),oe.success(l),j(!0),i(),f()},p=async(x,o)=>{j(!1);const l=await pe(x,o);oe.success(l),console.log(l)};return e.jsxs(y,{m:"0.5rem 0 1.5rem 0",children:[e.jsxs(y,{gap:"1rem",children:[t?e.jsx("div",{className:"profile-picture",children:e.jsx(W,{alt:r,src:t})}):e.jsx(W,{alt:r}),e.jsx(S,{children:e.jsx($,{variant:"h5",fontWeight:"500",sx:{"&:hover":{color:"blue",cursor:"pointer"}},onClick:()=>u(`/profile/${s}`),children:r})})]}),h?e.jsx(L,{onClick:()=>p(c,s),children:e.jsx($,{variant:"h6",color:"blue",children:"Requested"})}):e.jsx(L,{onClick:()=>g(c,s),children:e.jsx($,{variant:"h6",color:"blue",children:"Follow"})})]})},rt=({onButtonClick:s})=>{const t=R(o=>o.token),r=R(o=>o.user._id),[i,f]=a.useState(!1),[c,m]=a.useState([]),[u,h]=a.useState(!1),[j,g]=a.useState(!0),p=async()=>{const o=await ts(t,r),l=await ce(r,t),n=o.filter(b=>!l.followers.includes(b._id));if(i)m(n);else{const b=n.slice(0,5);m(b)}g(!1)},x=()=>{h(()=>!u)};return a.useEffect(()=>{p()},[u,s,i]),e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx($,{children:"Suggested for you"}),e.jsx(Ke,{onClick:()=>f(!i),children:"See all"})]}),j?e.jsxs(y,{children:[e.jsx(V,{variant:"circular",width:50,height:50}),e.jsx(V,{width:80,height:45,sx:{alignItems:"start"}}),e.jsx(V,{width:70,height:50})]}):c.map(({userName:o,_id:l,dp:n})=>l!==r&&e.jsx(tt,{friendId:l,image:n,userName:o,handleshowFreind:x,onButtonClick:s},l))]})},ot=Je(s=>({contentContainer:{display:"flex",justifyContent:"space-evenly",[s.breakpoints.down("sm")]:{flexDirection:"column"}}})),wt=()=>{const s=ot(),t=os("(min-width: 800px)"),r=le(),[i,f]=a.useState(!1),c=R(u=>u.user._id);a.useEffect(()=>{r(me());const u=setTimeout(()=>{r(me())},1500);return()=>clearTimeout(u)},[]),a.useEffect(()=>{r(Qe())},[]);const m=()=>{f(()=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),e.jsxs(S,{className:s.contentContainer,children:[t&&e.jsx(as,{}),e.jsxs(S,{flexBasis:t?"26%":"100%",mt:t?void 0:"2rem",children:[e.jsx(Zs,{onButtonClick:m}),e.jsx(st,{data:i,onButtonClick:m})]}),t&&e.jsxs(S,{flexBasis:t?"26%":"100%",ml:"2rem",children:[e.jsx(Gs,{userId:c,picturePath:"",data:i}),e.jsx(rt,{onButtonClick:m})]})]}),e.jsx(es,{position:"bottom-left"})]})};export{wt as default};
