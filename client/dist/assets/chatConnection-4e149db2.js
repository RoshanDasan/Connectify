import{d as s}from"./api-ccc87ef9.js";const c=async(a,e)=>{try{return(await s.get(`/chat/${a}`,{headers:{Authorization:`Bearer ${e}`}})).data}catch(t){throw t}},n=async(a,e)=>{try{return(await s.get(`/message/${a}`,{headers:{Authorization:`Bearer ${e}`}})).data}catch(t){console.log(t)}},h=async(a,e)=>{try{const t=await s.post("/message",a,{headers:{Authorization:`Bearer ${e}`}});console.log(t)}catch(t){throw t}},i=async(a,e,t)=>{try{const r=await s.post(`/chat/${a}/${e}`,{headers:{Authorization:`Bearer ${t}`}});console.log(r)}catch(r){throw r}},g=async(a,e,t)=>{try{const r=await s.get(`/chat/${a}/${e}`,{headers:{Authorization:`Bearer ${t}`}});return console.log(r),r.data}catch(r){throw r}};export{n as a,c as b,i as c,g,h as s};
