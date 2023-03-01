import{r as x,s as g,O as Y,a6 as Z,t as P,a5 as F,b3 as ee,m as te,b4 as ae,b5 as ne,b6 as oe,b7 as le,b2 as ie,C as ue,aU as re,H as se,b8 as ce,L as X,y as z,b9 as de,aQ as ve,ba as me,aX as fe,q as he,bb as ge,a4 as be,bc as we,bd as ye,n as _e,be as pe,d as r,Y as ke,a_ as Se,X as Q,ae as Ee,aq as Me,as as Te,o as xe,al as Be,w as C,bf as Ve,bg as Ce,b as j}from"./index.c2e833b5.js";import{V as A,a as L}from"./VList.685f1cc1.js";import{V as Le}from"./VDivider.5c649184.js";function Re(e){let{rootEl:c,isSticky:s,layoutItemStyles:a}=e;const o=x(!1),t=x(0),m=g(()=>{const h=typeof o.value=="boolean"?"top":o.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[h]:Y(t.value)}:{top:a.value.top}]});Z(()=>{P(s,h=>{h?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),F(()=>{document.removeEventListener("scroll",k)});let b=0;function k(){var E;const h=b>window.scrollY?"up":"down",l=c.value.getBoundingClientRect(),f=parseFloat((E=a.value.top)!=null?E:0),v=window.scrollY-Math.max(0,t.value-f),i=l.height+Math.max(t.value,f)-window.scrollY-window.innerHeight;l.height<window.innerHeight-f?(o.value="top",t.value=f):h==="up"&&o.value==="bottom"||h==="down"&&o.value==="top"?(t.value=window.scrollY+l.top,o.value=!0):h==="down"&&i<=0?(t.value=0,o.value="bottom"):h==="up"&&v<=0&&(t.value=l.top+v,o.value="top"),b=window.scrollY}return{isStuck:o,stickyStyles:m}}const He=100,Ye=20;function q(e){const c=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*c}function U(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let c=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const a=q(c),o=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);c+=(o-a)*Math.abs(o),s===e.length-1&&(c*=.5)}return q(c)*1e3}function Pe(){const e={};function c(o){Array.from(o.changedTouches).forEach(t=>{var b;((b=e[t.identifier])!=null?b:e[t.identifier]=new ee(Ye)).push([o.timeStamp,t])})}function s(o){Array.from(o.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(o){var t;const m=(t=e[o])==null?void 0:t.values().reverse();if(!m)throw new Error(`No samples for touch id ${o}`);const b=m[0],k=[],h=[];for(const l of m){if(b[0]-l[0]>He)break;k.push({t:l[0],d:l[1].clientX}),h.push({t:l[0],d:l[1].clientY})}return{x:U(k),y:U(h),get direction(){const{x:l,y:f}=this,[v,i]=[Math.abs(l),Math.abs(f)];return v>i&&l>=0?"right":v>i&&l<=0?"left":i>v&&f>=0?"down":i>v&&f<=0?"up":Ne()}}}return{addMovement:c,endTouch:s,getVelocity:a}}function Ne(){throw new Error}function $e(e){let{isActive:c,isTemporary:s,width:a,touchless:o,position:t}=e;Z(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})}),F(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",_)});const m=g(()=>t.value!=="bottom"),{addMovement:b,endTouch:k,getVelocity:h}=Pe();let l=!1;const f=x(!1),v=x(0),i=x(0);let E;function B(n,u){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="bottom"?document.documentElement.clientHeight-n:R())-(u?a.value:0)}function M(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const d=t.value==="left"?(n-i.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-n-i.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-n-i.value)/a.value:R();return u?Math.max(0,Math.min(1,d)):d}function V(n){if(o.value)return;const u=n.changedTouches[0].clientX,d=n.changedTouches[0].clientY,w=25,S=t.value==="left"?u<w:t.value==="right"?u>document.documentElement.clientWidth-w:t.value==="bottom"?d>document.documentElement.clientHeight-w:R(),y=c.value&&(t.value==="left"?u<a.value:t.value==="right"?u>document.documentElement.clientWidth-a.value:t.value==="bottom"?d>document.documentElement.clientHeight-a.value:R());(S||y||c.value&&s.value)&&(l=!0,E=[u,d],i.value=B(m.value?u:d,c.value),v.value=M(m.value?u:d),k(n),b(n))}function T(n){const u=n.changedTouches[0].clientX,d=n.changedTouches[0].clientY;if(l){if(!n.cancelable){l=!1;return}const S=Math.abs(u-E[0]),y=Math.abs(d-E[1]);(m.value?S>y&&S>3:y>S&&y>3)?(f.value=!0,l=!1):(m.value?y:S)>3&&(l=!1)}if(!f.value)return;n.preventDefault(),b(n);const w=M(m.value?u:d,!1);v.value=Math.max(0,Math.min(1,w)),w>1?i.value=B(m.value?u:d,!0):w<0&&(i.value=B(m.value?u:d,!1))}function _(n){if(l=!1,!f.value)return;b(n),f.value=!1;const u=h(n.changedTouches[0].identifier),d=Math.abs(u.x),w=Math.abs(u.y);(m.value?d>w&&d>400:w>d&&w>3)?c.value=u.direction===({left:"right",right:"left",bottom:"up"}[t.value]||R()):c.value=v.value>.5}const H=g(()=>f.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*a.value}px))`:R(),transition:"none"}:void 0);return{isDragging:f,dragProgress:v,dragStyles:H}}function R(){throw new Error}const Ie=["start","end","left","right","bottom"],Oe=te({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ie.includes(e)},sticky:Boolean,...ae(),...ne(),...oe(),...le(),...ie({tag:"nav"}),...ue()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:s,slots:a}=c;const{isRtl:o}=re(),{themeClasses:t}=se(e),{borderClasses:m}=ce(e),{backgroundColorClasses:b,backgroundColorStyles:k}=X(z(e,"color")),{elevationClasses:h}=de(e),{mobile:l}=ve(),{roundedClasses:f}=me(e),v=fe(),i=he(e,"modelValue",null,p=>!!p),{ssrBootStyles:E}=ge(),B=x(),M=x(!1),V=g(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),T=g(()=>pe(e.location,o.value)),_=g(()=>!e.permanent&&(l.value||e.temporary)),H=g(()=>e.sticky&&!_.value&&T.value!=="bottom");e.disableResizeWatcher||P(_,p=>!e.permanent&&Ee(()=>i.value=!p)),!e.disableRouteWatcher&&v&&P(v.currentRoute,()=>_.value&&(i.value=!1)),P(()=>e.permanent,p=>{p&&(i.value=!0)}),be(()=>{e.modelValue!=null||_.value||(i.value=e.permanent||!l.value)});const{isDragging:n,dragProgress:u,dragStyles:d}=$e({isActive:i,isTemporary:_,width:V,touchless:z(e,"touchless"),position:T}),w=g(()=>{const p=_.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return n.value?p*u.value:p}),{layoutItemStyles:S,layoutRect:y,layoutItemScrimStyles:N}=we({id:e.name,order:g(()=>parseInt(e.order,10)),position:T,layoutSize:w,elementSize:V,active:g(()=>i.value||n.value),disableTransitions:g(()=>n.value),absolute:g(()=>e.absolute||H.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:G}=Re({rootEl:B,isSticky:H,layoutItemStyles:S}),I=X(g(()=>typeof e.scrim=="string"?e.scrim:null)),J=g(()=>({...n.value?{opacity:u.value*.2,transition:"none"}:void 0,...y.value?{left:Y(y.value.left),right:Y(y.value.right),top:Y(y.value.top),bottom:Y(y.value.bottom)}:void 0,...N.value}));return ye({VList:{bgColor:"transparent"}}),_e(()=>{var p,O,W,D;const K=a.image||e.image;return r(Q,null,[r(e.tag,ke({ref:B,onMouseenter:()=>M.value=!0,onMouseleave:()=>M.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${T.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":_.value,"v-navigation-drawer--active":i.value,"v-navigation-drawer--sticky":H.value},t.value,b.value,m.value,h.value,f.value],style:[k.value,S.value,d.value,E.value,G.value]},s),{default:()=>[K&&r("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(p=a.image)==null?void 0:p.call(a,{image:e.image}):r("img",{src:e.image,alt:""},null)]),a.prepend&&r("div",{class:"v-navigation-drawer__prepend"},[(O=a.prepend)==null?void 0:O.call(a)]),r("div",{class:"v-navigation-drawer__content"},[(W=a.default)==null?void 0:W.call(a)]),a.append&&r("div",{class:"v-navigation-drawer__append"},[(D=a.append)==null?void 0:D.call(a)])]}),r(Se,{name:"fade-transition"},{default:()=>[_.value&&(n.value||i.value)&&!!e.scrim&&r("div",{class:["v-navigation-drawer__scrim",I.backgroundColorClasses.value],style:[J.value,I.backgroundColorStyles.value],onClick:()=>i.value=!1},null)]})])}),{isStuck:$}}}),We={},De=j("h1",{class:"text-center"},"OO\u6A21\u578B\xA0",-1),Xe=j("h3",{class:"text-center"},"\u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71",-1);function ze(e,c){const s=Te("router-view");return xe(),Be(Q,null,[r(Oe,{permanent:"permanent",class:"bg-secondary"},{default:C(()=>[r(A,null,{default:C(()=>[r(L,null,{default:C(()=>[De,Xe]),_:1})]),_:1}),r(Le),r(A,null,{default:C(()=>[r(L,{to:"/admin/products",title:"\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-shopping"}),r(L,{to:"/admin/orders",title:"\u8A02\u55AE\u7BA1\u7406","prepend-icon":"mdi-format-list-bulleted"}),r(L,{to:"/admin/events",title:"\u6D3B\u52D5\u7BA1\u7406","prepend-icon":"mdi-image-filter-hdr"}),r(L,{to:"/admin/biddings",title:"\u7AF6\u6A19\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-pokeball"}),r(L,{to:"/",title:"\u56DE\u9996\u9801","prepend-icon":"mdi-home"})]),_:1})]),_:1}),r(Ve,null,{default:C(()=>[r(Ce,null,{default:C(()=>[r(s)]),_:1})]),_:1})],64)}const Ze=Me(We,[["render",ze]]);export{Ze as default};