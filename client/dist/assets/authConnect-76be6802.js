import{d as n,Q as r}from"./api-ccc87ef9.js";const u=async t=>{var e,a;try{return(await n.post("/auth/register",t)).data.status==="success"?(r.success("Registration successful"),"success"):(r.error("Registration failed"),!1)}catch(s){const o=((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"An error occurred during registration";throw r.error(o),new Error(o)}},i=async t=>{var e,a;try{const s=await n.post("/auth/login",t);return s.data.status==="success"?(r.success("Login successful"),s.data.token):!1}catch(s){const o=((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"An error occurred during Login";r.error(o)}},g=async t=>{try{const e=await n.post("/auth/google_auth",t);return e.data.status==="Google login success"?(r.success("Google Login success"),e.data):(r.error("Login failed"),!1)}catch{}},l=async t=>{var e,a;try{const s=await n.post("/admin/login",t);return s.data.status==="success"?(r.success("Login successful"),s.data.token):(r.error("Login failed"),!1)}catch(s){const o=((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"An error occurred during Login";r.error(o)}},d=async t=>{try{return(await n.patch(`/auth/user/block/${t}`)).data}catch(e){throw e}};export{l as a,d as b,g,i as l,u as r};
