import{c as P,j as e,r as w,u as q,a as y,B as x,s as j,b as v}from"./index-423ecf94.js";import{V as I,a as k,u as A,b as G,c as b,d as o,e as L}from"./VisibilityOff-987dd55d.js";import{G as c}from"./Grid-4c55daed.js";import{T as U}from"./TextField-314fdea5.js";import{I as T}from"./InputAdornment-9003bdce.js";import{I as V,k as F,P as W,T as B,Q as f}from"./api-180f25a0.js";/* empty css                      */import{r as E,l as R,g as $}from"./authConnect-1f24b556.js";import{s as M,a as O,p as z}from"./GoogleAuth-5ad9a5a3.js";import{C as D}from"./Container-e46f6f64.js";import{A as H}from"./Avatar-8ba7cd52.js";import"./FormControl-e04fab4b.js";const Q=P(e.jsx("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google"),t=({name:i,handleChange:h,value:p,error:r,label:u,half:l,autoFocus:m,type:d,handleShowPassword:g})=>e.jsx(c,{item:!0,xs:12,sm:l?6:12,children:e.jsx(U,{name:i,onChange:h,value:p,variant:"outlined",fullWidth:!0,label:u,autoFocus:m,type:d,error:!!r,helperText:r,InputProps:i==="password"?{endAdornment:e.jsx(T,{position:"end",children:e.jsx(V,{onClick:g,children:d==="password"?e.jsx(I,{}):e.jsx(k,{})})})}:void 0})}),te=()=>{const i=A(),[h,p]=w.useState(!1),[r,u]=w.useState(!1),l=q(),m=y(),d=()=>{p(a=>!a)},g=async a=>{if(r)await E(a)==="success"&&u(!1);else{let n=await R(a);n&&(l(j({user:n.user,token:n.token})),l(v({user:n.user})),m("/home"),f.success("Login success"))}},C=async()=>{try{const a=await M(O,z),{user:n,token:S}=await $(a._tokenResponse);l(j({user:n,token:S})),l(v({user:n})),m("/home"),f.success("Login success")}catch(a){console.error("Google login error:",a),f.error("Google login failed")}},s=G({initialValues:{name:"",userName:"",number:"",email:"",password:"",confirmPassword:""},validationSchema:(()=>r?b().shape({name:o().required("Name is required"),userName:o().required("UserName is required"),number:o().required("Number is required"),email:o().email("Invalid email").required("Email is required"),password:o().required("Password is required"),confirmPassword:o().oneOf([L("password")],"Passwords must match")}):b().shape({userName:o().required("UserName is required"),password:o().required("Password is required")}))(),onSubmit:g}),N=()=>{u(a=>!a)};return e.jsxs(D,{component:"main",maxWidth:"xs",children:[e.jsx(F,{position:"bottom-left"}),e.jsxs(W,{className:i.paper,elevation:6,children:[e.jsx(H,{className:i.avatar}),e.jsx(B,{component:"h1",variant:"h5",children:r?"Sign up":"Sign in"}),e.jsxs("form",{className:i.form,onSubmit:s.handleSubmit,children:[e.jsxs(c,{container:!0,spacing:2,children:[r&&e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"name",label:"Name",handleChange:s.handleChange,value:s.values.name,error:s.errors.name,autoFocus:!0,half:!0}),e.jsx(t,{name:"userName",label:"UserName",handleChange:s.handleChange,value:s.values.userName,error:s.errors.userName,half:!0})]}),!r&&e.jsx(t,{name:"userName",label:"UserName",handleChange:s.handleChange,value:s.values.userName,error:s.errors.userName}),r&&e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"number",label:"Number",handleChange:s.handleChange,value:s.values.number,error:s.errors.number,type:"number"}),e.jsx(t,{name:"email",label:"Email Address",handleChange:s.handleChange,value:s.values.email,error:s.errors.email,type:"email"})]}),e.jsx(t,{name:"password",label:"Password",handleChange:s.handleChange,value:s.values.password,error:s.errors.password,type:h?"text":"password",handleShowPassword:d}),r&&e.jsx(t,{name:"confirmPassword",label:"Repeat Password",handleChange:s.handleChange,value:s.values.confirmPassword,error:s.errors.confirmPassword,type:"password"})]}),e.jsx(x,{type:"submit",fullWidth:!0,variant:"contained",color:"info",sx:{marginTop:"20px"},className:i.submit,children:r?"Sign Up":"Sign In"}),e.jsx(c,{container:!0,justifyContent:"flex-end",children:e.jsx(c,{item:!0,children:e.jsx(x,{onClick:N,color:"inherit",children:r?"Already have an account? Login In":"New user? Sign Up"})})}),e.jsx(x,{fullWidth:!0,variant:"contained",color:"info",startIcon:e.jsx(Q,{}),onClick:C,children:"Sign in with Google"})]})]})]})};export{te as default};