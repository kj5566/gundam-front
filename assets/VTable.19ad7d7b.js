import{l as d,a7 as r,b2 as v,m as h,p as b,a8 as m,v as u,d as a,s as f}from"./index.b84716e4.js";const g=d({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...r(),...v(),...h()},setup(e,s){let{slots:t}=s;const{themeClasses:i}=b(e),{densityClasses:n}=m(e);return u(()=>{var o,l;return a(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},i.value,n.value]},{default:()=>[(o=t.top)==null?void 0:o.call(t),t.default&&a("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[a("table",null,[t.default()])]),(l=t.bottom)==null?void 0:l.call(t)]})}),{}}});export{g as V};