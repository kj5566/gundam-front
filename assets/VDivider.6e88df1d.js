import{m as d,C as c,H as v,L as u,y as h,s as m,O as i,n as g,d as k}from"./index.83dc9114.js";const b=d({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...c()},setup(e,a){let{attrs:t}=a;const{themeClasses:n}=v(e),{backgroundColorClasses:o,backgroundColorStyles:s}=u(h(e,"color")),l=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return g(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,o.value],style:[l.value,s.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{b as V};