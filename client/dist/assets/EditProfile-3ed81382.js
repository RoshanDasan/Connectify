import{c as W,j as e,z,q as E,r as o,u as R,B as N,J as L}from"./index-423ecf94.js";import{a as G}from"./Sidebar-825b2ab9.js";import{N as M,T as O}from"./Navbar-8492a480.js";import{u as q,g as J}from"./userConnection-b2d224d4.js";import{u as $,A as w,v as F}from"./v4-f069db64.js";import{T as u,I as H,k as K}from"./api-180f25a0.js";import{r as Q,b as X,u as Y,g as Z}from"./GoogleAuth-5ad9a5a3.js";import{C as _}from"./Container-e46f6f64.js";import{B as r}from"./MenuItem-7c471efa.js";import{G as n}from"./Grid-4c55daed.js";import{A as C}from"./Avatar-8ba7cd52.js";import{T as f}from"./TextField-314fdea5.js";import{I as ee}from"./InputAdornment-9003bdce.js";import"./DisplayFlex-d28fcd2f.js";import"./makeStyles-5c70c144.js";import"./FormControl-e04fab4b.js";const se=W(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),ge=()=>{const{id:j}=z(),S=q(),g=E(a=>a.token),[i,I]=o.useState({}),[b,D]=o.useState(!1),[P,c]=o.useState(!0),[m,x]=o.useState(""),[p,y]=o.useState(!1),k=R(),U=async()=>{const a=await J(j,g);I(a)};o.useEffect(()=>{U()},[b]);const{getRootProps:A,getInputProps:B}=$({onDrop:(a,s)=>{var l,d;console.log(a,s),s.length>0&&(x("Maximum file size exceeded"),c(!0)),a.length>0&&((d=(l=a[0])==null?void 0:l.type)!=null&&d.startsWith("image")?(v(V=>({...V,file:a[0]})),x("")):(c(!0),x("Select a valid image")))}}),[t,v]=o.useState({userName:"",file:"",bio:"",gender:"",city:""}),h=a=>{c(!1);const{name:s,value:l}=a.target;v(d=>({...d,[s]:l}))},T=async a=>{a.preventDefault(),console.log(t,"form value");const s=new FormData;if(t.file){const l=Q(X,`profile/${t.file.name+F()}`);await Y(l,t.file);const d=await Z(l);s.append("file",d),s.append("picturePath",t.file.name)}t.userName.trim()===""?s.append("userName",i.userName):s.append("userName",t.userName),t.bio.trim()===""?s.append("bio",i.bio):s.append("bio",t.bio),t.gender.trim()===""?s.append("gender",i.gender):s.append("gender",t.gender),t.city.trim()===""?s.append("city",i.city):s.append("city",t.city),S.mutate({id:j,values:s,token:g}),D(!b),k(L({userName:t.userName})),x("success")};return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsxs(_,{maxWidth:"sm",children:[e.jsx(G,{}),m.length>0&&m!=="success"&&e.jsx(w,{severity:"error",children:m}),m==="success"&&e.jsx(w,{severity:"success",children:"Profile updated"}),e.jsx(u,{variant:"h3",sx:{paddingTop:"3rem",textAlign:"left"},children:"Edit Profile"}),e.jsx(r,{children:e.jsxs("form",{onSubmit:T,children:[e.jsxs(n,{container:!0,alignItems:"center",children:[e.jsx(n,{item:!0,xs:3,children:e.jsx(r,{sx:{margin:"2rem 2rem 2rem 5rem"},children:i.dp?e.jsx("div",{className:"profile-picture",children:e.jsx(C,{alt:i.userName,src:i.dp})}):e.jsx(C,{alt:i.userName})})}),e.jsxs(n,{item:!0,xs:9,children:[e.jsxs("div",{...A({className:"dropzone"}),children:[e.jsx("input",{...B()}),e.jsx("p",{style:{cursor:"pointer",color:"blue",marginLeft:"20px"},onClick:()=>c(!1),children:"Upload profile picture"})]}),!p&&e.jsx(O,{title:"update",arrow:!0,children:e.jsx(N,{sx:{color:"black",marginLeft:"25px"},onClick:()=>y(!p),children:i.userName})})]})]}),e.jsxs(n,{container:!0,spacing:3,children:[p&&e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{width:"30%"},children:e.jsx(u,{variant:"subtitle1",children:"userName"})}),e.jsx(r,{sx:{width:"70%"},children:e.jsx(f,{name:"userName",fullWidth:!0,multiline:!0,defaultValue:i.userName,onChange:h,InputProps:{endAdornment:e.jsx(ee,{position:"start",children:e.jsx(H,{onClick:()=>y(!p),children:e.jsx(se,{})})})}})})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{width:"30%"},children:e.jsx(u,{variant:"subtitle1",children:"Bio"})}),e.jsx(r,{sx:{width:"70%"},children:e.jsx(f,{name:"bio",fullWidth:!0,multiline:!0,rows:4,defaultValue:i.bio,onChange:h})})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{width:"30%"},children:e.jsx(u,{variant:"subtitle1",children:"Gender"})}),e.jsx(r,{sx:{width:"70%"},children:e.jsx(f,{name:"gender",fullWidth:!0,multiline:!0,defaultValue:i.gender,onChange:h})})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(r,{sx:{width:"30%"},children:e.jsx(u,{variant:"subtitle1",children:"City"})}),e.jsx(r,{sx:{width:"70%"},children:e.jsx(f,{name:"city",fullWidth:!0,multiline:!0,defaultValue:i.city,onChange:h})})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(N,{type:"submit",disabled:P,variant:"contained",color:"info",sx:{borderRadius:"10px",marginLeft:"10rem"},children:"Submit"})})]})]})}),e.jsx(K,{position:"bottom-left"})]})]})};export{ge as default};
