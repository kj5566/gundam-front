import{ag as f,r as i,a as g,o as h,c as w,w as a,V as _,b as n,d as t,e as v,f as c,h as y,i as x,j as b,k}from"./index.83dc9114.js";import{V as B}from"./VForm.b69f8154.js";import{V as p}from"./VTextField.d8c0e7eb.js";const C=n("h1",{class:"space1"},null,-1),U={id:"login"},q=n("h1",{class:"text-center h1-title m-a"},"\u767B\u5165",-1),N=n("h1",{class:"space1"},null,-1),S={class:"text-center my-5"},A={__name:"LoginView",setup(F){const m=f(),u=i(!1),d=i(!1),l=g({account:"",password:""}),r={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},length(e){return e.length>=4&&e.length<=20||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 20 \u500B\u5B57"}},V=async()=>{d.value=!0,await m.login(l),d.value=!1};return(e,s)=>(h(),w(_,{id:"app"},{default:a(()=>[C,n("div",U,[t(k,{class:"logincard"},{default:a(()=>[q,N,t(v,null,{default:a(()=>[t(c,{cols:"3"}),t(c,{cols:"6",class:"text-center text-secondary"},{default:a(()=>[t(B,{modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=o=>u.value=o),onSubmit:y(V,["prevent"])},{default:a(()=>[t(p,{modelValue:l.account,"onUpdate:modelValue":s[0]||(s[0]=o=>l.account=o),type:"text",rules:[r.required,r.length],label:"\u5E33\u865F",counter:"20",maxlength:"18"},null,8,["modelValue","rules"]),t(p,{modelValue:l.password,"onUpdate:modelValue":s[1]||(s[1]=o=>l.password=o),type:e.show1?"text":"password",rules:[r.required,r.length],"append-icon":e.show1?"mdi-eye":"mdi-eye-off",label:"\u5BC6\u78BC",counter:"20","onClick:append":s[2]||(s[2]=o=>e.show1=!e.show1)},null,8,["modelValue","type","rules","append-icon"]),n("div",S,[t(x,{color:"success",type:"submit",size:"large",loading:d.value},{default:a(()=>[b("\u767B\u5165")]),_:1},8,["loading"])])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})])]),_:1}))}};export{A as default};