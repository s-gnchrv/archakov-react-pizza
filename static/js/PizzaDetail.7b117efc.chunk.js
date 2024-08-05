/*! For license information please see PizzaDetail.7b117efc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_typescript=self.webpackChunkreact_typescript||[]).push([[292],{600:(e,t,r)=>{r.d(t,{A:()=>l,V:()=>s});var i=r(43),n=r(3),c=r(267),a=r(821),o=r(579);const s=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],l=e=>{let{pizza:t}=e;const{id:r,types:l,sizes:d,price:h}={...t},[p,u]=(0,i.useState)(0),[x,f]=(0,i.useState)(0),m=(0,a.j)(),g=(0,n.d4)((0,c.m8)(r,p,x));return(0,i.useEffect)((()=>{l.includes(0)||u(1)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"pizza-block__selector",children:[(0,o.jsx)("ul",{children:l.map((e=>(0,o.jsx)("li",{className:p===e?"active":"",onClick:()=>u(e),children:s[e]},e)))}),(0,o.jsx)("ul",{children:d.map(((e,t)=>(0,o.jsxs)("li",{className:x===t?"active":"",onClick:()=>f(t),children:[e," \u0441\u043c."]},t)))})]}),(0,o.jsxs)("div",{className:"pizza-block__bottom",children:[(0,o.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",h," \u20bd"]}),(0,o.jsxs)("div",{className:"button button--outline button--add",onClick:()=>{m((0,c.B5)({pizza:t,count:1,type:p,size:x}))},children:[(0,o.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,o.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),g>0&&(0,o.jsx)("i",{children:g})]})]})]})}},935:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(43);const n={block:"PizzaDetailBlock_block__MaPz4"};var c=r(600),a=r(216),o=r(3),s=r(231),l=r(739),d=r(579);const h=e=>(0,d.jsxs)(l.Ay,{speed:2,width:700,height:300,viewBox:"0 0 700 300",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",...e,children:[(0,d.jsx)("circle",{cx:"146",cy:"146",r:"146"}),(0,d.jsx)("rect",{x:"312",y:"0",rx:"10",ry:"10",width:"158",height:"30"}),(0,d.jsx)("rect",{x:"312",y:"45",rx:"10",ry:"10",width:"388",height:"45"}),(0,d.jsx)("rect",{x:"312",y:"120",rx:"10",ry:"10",width:"388",height:"90"}),(0,d.jsx)("rect",{x:"312",y:"257",rx:"5",ry:"5",width:"90",height:"27"}),(0,d.jsx)("rect",{x:"570",y:"247",rx:"30",ry:"30",width:"130",height:"44"})]});var p=r(821);const u=()=>{const e=(0,a.g)(),t=Number(e.id),r=(0,p.j)(),l=(0,o.d4)((e=>e.pizza.status)),u=(0,o.d4)((0,s.pE)(t)),{title:x,composition:f,imageUrl:m}={...u};if((0,i.useEffect)((()=>{u||r((0,s.zw)(t))}),[]),l===s.nW.Error)throw new Response("Not Found",{status:404});return(0,d.jsx)("div",{className:["pizza-block",n.block].join(" "),children:l===s.nW.Loading?(0,d.jsx)(h,{}):u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:n.left,children:(0,d.jsx)("img",{src:m,alt:"pizza"})}),(0,d.jsxs)("div",{className:n.right,children:[(0,d.jsx)("h2",{children:x}),(0,d.jsx)("p",{children:f}),(0,d.jsx)(c.A,{pizza:u})]})]})})};var x=r(475);const f=()=>(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)(x.N_,{className:"button button--outline button--add go-back-btn",to:"..",children:[(0,d.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),(0,d.jsx)(u,{})]})},739:(e,t,r)=>{r.d(t,{Ay:()=>s});var i=r(43),n=function(){return n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var c=function(e){var t=e.animate,r=void 0===t||t,c=e.backgroundColor,a=void 0===c?"#f5f6f7":c,o=e.backgroundOpacity,s=void 0===o?1:o,l=e.baseUrl,d=void 0===l?"":l,h=e.children,p=e.foregroundColor,u=void 0===p?"#eee":p,x=e.foregroundOpacity,f=void 0===x?1:x,m=e.gradientRatio,g=void 0===m?2:m,y=e.uniqueKey,j=e.rtl,v=void 0!==j&&j,b=e.speed,w=void 0===b?1.2:b,k=e.style,E=void 0===k?{}:k,z=e.title,C=void 0===z?"Loading...":z,O=e.beforeMask,N=void 0===O?null:O,_=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),P=y||Math.random().toString(36).substring(6),B="".concat(P,"-diff"),L="".concat(P,"-animated-diff"),M="".concat(P,"-aria"),V=v?{transform:"scaleX(-1)"}:null,S="".concat(w,"s"),A="".concat(-1*g," 0"),D="".concat(g," 0");return(0,i.createElement)("svg",n({"aria-labelledby":M,role:"img",style:n(n({},E),V)},_),C?(0,i.createElement)("title",{id:M},C):null,N&&(0,i.isValidElement)(N)?N:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(d,"#").concat(B,")"),style:{fill:"url(".concat(d,"#").concat(L,")")}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:B},h),(0,i.createElement)("linearGradient",{id:L,gradientTransform:"translate(".concat(A,")")},(0,i.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:s}),(0,i.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:f}),(0,i.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:s}),r&&(0,i.createElement)("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(A,"; 0 0; ").concat(D),dur:S,repeatCount:"indefinite"}))))},a=function(e){return e.children?(0,i.createElement)(c,n({},e)):(0,i.createElement)(o,n({},e))},o=function(e){return(0,i.createElement)(a,n({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s=a}}]);
//# sourceMappingURL=PizzaDetail.7b117efc.chunk.js.map