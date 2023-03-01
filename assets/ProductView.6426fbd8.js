import{av as y,u as x,ag as w,r as _,a as C,l as k,aw as S,o as q,al as B,d as s,w as l,V as j,k as N,b as a,aj as d,e as O,f,ah as R,h as U,i as c,j as m,a3 as V}from"./index.83dc9114.js";import{V as $}from"./VForm.b69f8154.js";import{V as F}from"./VTextField.d8c0e7eb.js";import{V as M}from"./VOverlay.9239e89e.js";const T={id:"product"},A={class:"text-center h1-title m-a"},D=a("h1",{class:"space1"},null,-1),E=a("br",null,null,-1),I=a("br",null,null,-1),P={class:"br"},z=a("h1",{class:"space1"},null,-1),G={class:"pre big1"},H=a("h1",{class:"space1"},null,-1),J={class:"text-right"},K=a("h1",{class:"text-red"},"\u5DF2\u4E0B\u67B6",-1),Z={__name:"ProductView",setup(L){const h=y(),u=x(),g=w(),{editCart:v}=g,i=_(!1),n=_(0),p={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>0||"\u6578\u91CF\u932F\u8AA4"}},e=C({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),b=()=>{!i.value||v({_id:e._id,quantity:n.value})};return(async()=>{try{const{data:t}=await k.get("/products/"+h.params.id);e._id=t.result._id,e.name=t.result.name,e.price=t.result.price,e.description=t.result.description,e.image=t.result.image,e.sell=t.result.sell,e.category=t.result.category,document.title="OO\u6A21\u578B | "+e.name}catch{S.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),u.go(-1)}})(),(t,r)=>(q(),B("div",T,[s(j,{id:"app"},{default:l(()=>[s(N,{class:"card"},{default:l(()=>[a("h1",A,d(e.name),1),D,s(O,null,{default:l(()=>[s(f,{cols:"6"},{default:l(()=>[s(R,{src:e.image,height:"560"},null,8,["src"])]),_:1}),s(f,{cols:"6",class:"p-20"},{default:l(()=>[E,I,a("h1",null,[a("p",P,d(e.description),1)]),z,a("h2",null,[a("p",G,"$"+d(e.price),1)]),H,s($,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=o=>i.value=o),onSubmit:U(b,["prevent"])},{default:l(()=>[s(F,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=o=>n.value=o),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[p.required,p.number]},null,8,["modelValue","rules"]),a("h3",J,[s(c,{type:"submit",color:"primary"},{default:l(()=>[m("\u52A0\u5165\u8CFC\u7269\u8ECA")]),_:1}),s(c,{onClick:r[1]||(r[1]=o=>V(u).go(-1))},{default:l(()=>[m("\u56DE\u4E0A\u9801")]),_:1})])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}),s(M,{class:"align-center justify-center text-center","model-value":!e.sell,persistent:"persistent"},{default:l(()=>[K,s(c,{onClick:r[3]||(r[3]=o=>V(u).go(-1))},{default:l(()=>[m("\u56DE\u4E0A\u9801")]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1})]))}};export{Z as default};
