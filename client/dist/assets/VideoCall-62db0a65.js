import{c as k,j as e,r as o,S as f,B as j,q as u,u as T,T as V}from"./index-67d43168.js";import{m as I,k as z,Q as D,P as N,T as b}from"./api-d1289068.js";import{g as A}from"./userConnection-7fd5fe15.js";import{G as h}from"./Grid-0e6dc73b.js";import{N as U}from"./Navbar-e0d66199.js";import"./DisplayFlex-8670f53a.js";import"./MenuItem-4b486c7a.js";import"./FormControl-663bf9fa.js";const B=k(e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),F=k(e.jsx("path",{d:"m17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54zm-2.82 2.81C11.63 19.64 7.97 21 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26z"}),"PhoneDisabled"),G=()=>{const{answerCall:s,call:a,callAccepted:n}=o.useContext(f);return e.jsx(e.Fragment,{children:a.isReceiveCall&&!n&&e.jsxs("div",{children:[e.jsxs("h1",{children:[a.name," is calling...."]}),e.jsx(j,{variant:"contained",color:"primary",onClick:s,children:"Answer Call"})]})})},H=I(()=>({root:{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"},buttonContainer:{display:"flex",justifyContent:"center",marginTop:"20px"}})),L=({children:s})=>{const{callAccepted:a,name:n,setName:r,setMe:l,callEnded:m,leaveCall:x,callUser:c,activeForCall:C,userToCall:v,setUserToCall:P}=o.useContext(f),g=u(t=>t.currentchat.members),p=u(t=>t.user._id),S=u(t=>t.token),y=H();o.useEffect(()=>{const t=g.filter(i=>i!==p);E(t).then(i=>{r(i),C.forEach(d=>{d.userId===t[0]&&P(d.socketId),p===d.userId&&l(d.socketId)})})},[C,g,n,r,p,c]);const w=()=>{v.length?c(v):D.error("User not available to call")},E=async t=>(await A(t,S)).userName;return e.jsxs("div",{className:y.root,children:[a&&!m?e.jsx(j,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(F,{fontSize:"large"}),onClick:x,children:"Hang up"}):e.jsx("div",{className:y.buttonContainer,children:e.jsxs(j,{variant:"contained",color:"primary",startIcon:e.jsx(B,{fontSize:"large"}),onClick:w,children:["Call ",n]})}),s,e.jsx(z,{position:"bottom-left"})]})},M=I(s=>({video:{width:"550px",[s.breakpoints.down("xs")]:{width:"300px"}},gridContainer:{justifyContent:"center",[s.breakpoints.down("xs")]:{flexDirection:"column"}},paper:{padding:"10px",border:"2px solid black",margin:"10px"}})),R=()=>{const s=M(),{name:a,callAccepted:n,myVideo:r,userVideo:l,callEnded:m,stream:x,call:c}=o.useContext(f);return console.log(r,"my"),console.log(l,"user"),e.jsxs(h,{container:!0,className:s.gridContainer,children:[x&&e.jsx(N,{className:s.paper,children:e.jsxs(h,{item:!0,xs:12,md:6,children:[e.jsx(b,{variant:"h5",children:a||"Name"}),e.jsx("video",{playsInline:!0,muted:!0,ref:r,autoPlay:!0,className:s.video})]})}),n&&!m&&e.jsx(N,{className:s.paper,children:e.jsxs(h,{item:!0,xs:12,md:6,children:[e.jsx(b,{variant:"h5",children:c.name||"Name"}),e.jsx("video",{playsInline:!0,ref:l,autoPlay:!0,className:s.video})]})})]})},X=()=>{const s=T();return o.useEffect(()=>{s(V())},[]),e.jsxs("div",{children:[e.jsx(U,{}),e.jsx(L,{children:e.jsx(G,{})}),e.jsx(R,{})]})};export{X as default};