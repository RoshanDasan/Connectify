import{d as a}from"./api-180f25a0.js";import{ab as b,_ as d,ac as m,ad as p,ae as y,R as c,af as M,ag as O,ah as w}from"./index-423ecf94.js";var g=function(u){b(s,u);function s(n,r){var t;return t=u.call(this)||this,t.client=n,t.setOptions(r),t.bindMethods(),t.updateResult(),t}var e=s.prototype;return e.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},e.setOptions=function(r){this.options=this.client.defaultMutationOptions(r)},e.onUnsubscribe=function(){if(!this.listeners.length){var r;(r=this.currentMutation)==null||r.removeObserver(this)}},e.onMutationUpdate=function(r){this.updateResult();var t={listeners:!0};r.type==="success"?t.onSuccess=!0:r.type==="error"&&(t.onError=!0),this.notify(t)},e.getCurrentResult=function(){return this.currentResult},e.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},e.mutate=function(r,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,d({},this.options,{variables:typeof r<"u"?r:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},e.updateResult=function(){var r=this.currentMutation?this.currentMutation.state:m(),t=d({},r,{isLoading:r.status==="loading",isSuccess:r.status==="success",isError:r.status==="error",isIdle:r.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=t},e.notify=function(r){var t=this;p.batch(function(){t.mutateOptions&&(r.onSuccess?(t.mutateOptions.onSuccess==null||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):r.onError&&(t.mutateOptions.onError==null||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),r.listeners&&t.listeners.forEach(function(l){l(t.currentResult)})})},s}(y);function $(u,s,e){return typeof s=="function"?s.apply(void 0,e):typeof s=="boolean"?s:!!u}function S(u,s,e){var n=c.useRef(!1),r=c.useState(0),t=r[1],l=M(u,s,e),v=O(),o=c.useRef();o.current?o.current.setOptions(l):o.current=new g(v,l);var i=o.current.getCurrentResult();c.useEffect(function(){n.current=!0;var h=o.current.subscribe(p.batchCalls(function(){n.current&&t(function(f){return f+1})}));return function(){n.current=!1,h()}},[]);var R=c.useCallback(function(h,f){o.current.mutate(h,f).catch(w)},[]);if(i.error&&$(void 0,o.current.options.useErrorBoundary,[i.error]))throw i.error;return d({},i,{mutate:R,mutateAsync:i.mutate})}const x=async(u,s)=>{try{return(await a.get(`/user/${u}`,{headers:{Authorization:`Bearer ${s}`}})).data.user}catch(e){throw e}},A=async(u,s)=>{try{return(await a.get(`/user/all/${s}`,{headers:{Authorization:`Bearer ${u}`}})).data.users}catch(e){throw e}},E=async(u,s,e)=>{try{return await a.patch(`/user?id=${u}&friendId=${s}`,{headers:{Authorization:`Bearer ${e}`}})}catch{}},q=async(u,s)=>{try{const{data:e}=await a.patch(`/user/request/${u}/${s}`);return e.status}catch(e){throw console.error(e),e}},z=async(u,s,e)=>{try{const{data:n}=await a.patch(`/user/request/friend/${u}/${s}`,{response:{response:e}});return n.status}catch(n){throw console.error(n),n}},B=async(u="roshan",s)=>{const e=u||"qwertyuiop";return(await a.get(`/user/search/${e}`,{params:{type:s}})).data.users},L=()=>S(async({id:s,values:e,token:n})=>{try{return(await a.put(`/user/${s}`,e,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}})).data}catch(r){throw console.error(r),new Error("Failed to update profile")}}),P=async(u,s)=>(await a.patch(`/user/${u}/${s}`)).data;export{A as a,P as b,B as c,E as f,x as g,z as r,q as s,L as u};