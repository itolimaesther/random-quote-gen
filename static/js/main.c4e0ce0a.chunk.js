(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n.n(c),s=n(12),r=n.n(s),o=n(8),l=(n(40),n(3)),d=n(4),j=n(2);var u,b=function(e){var t=e.handleRandom,n=d.a.button(a||(a=Object(l.a)(["\n    background: none;\n    border: none;\n    display: flex;\n    width: 100px;\n    justify-content: space-evenly;\n    &:focus {\n        outline: none;\n    }\n    &:hover {\n        cursor: pointer;\n    }\n"])));return Object(j.jsxs)("nav",{className:"site-nav",children:[Object(j.jsx)("div",{className:"brand",children:Object(j.jsx)("h4",{children:"Quote Generator"})}),Object(j.jsxs)(n,{onClick:t,children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#000",width:"18px",height:"18px",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"})]}),"random"]})]})};var h,x,O,m,p,g,v=function(){var e=d.a.footer(u||(u=Object(l.a)(["\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n"])));return Object(j.jsx)(e,{className:"site-footer",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("p",{children:"\xa92021. Esther Itolima."})})})},f=n(77),N=n(34),y=n.n(N),k=n(33),q=n.n(k),w=n(76),F=n(14),S=n.n(F);var C=function(e){var t=e.lights,n=e.modal,a=e.setModal,i=e.author,s=e.toggleOpen,r=e.isOpen,u=Object(c.useState)([]),b=Object(o.a)(u,2),v=b[0],f=b[1],N=Object(c.useState)(!1),y=Object(o.a)(N,2),k=y[0],F=y[1],C="https://quote-garden.herokuapp.com/api/v3/quotes/random?author=".concat(i,"&count=10");Object(c.useEffect)((function(){return F(!0),S.a.get(C).then((function(e){f(e.data.data)})).catch((function(e){return console.log(e)})),function(){F(!1)}}),[k,C]);var z=Object(d.a)(w.a.div)(h||(h=Object(l.a)(["\n    \n "]))),L=d.a.div(x||(x=Object(l.a)(["\n    text-align: center;\n"]))),M=d.a.div(O||(O=Object(l.a)(["\n    cursor: pointer;\n    margin-right: 20px;\n    margin-top: 25px;\n    width: 25%;\n    text-align: right;\n"]))),R=d.a.div(m||(m=Object(l.a)(["\n    margin: 0px 25px 20px;\n    padding: 15px;\n"]))),T=d.a.div(p||(p=Object(l.a)(["\n    width: 100%;\n    text-align: right;\n    text-decoration: underline;\n"]))),E=function(e,t){return t+" ".concat("on"===e?"light-subtext":"dark-subtext")},B=d.a.div(g||(g=Object(l.a)(["\n    padding-top: 35px;\n"]))),G=function(e){return"".concat("on"===e?"light-dim":"dark-dim")};return Object(j.jsxs)("div",{style:n,variants:{open:{opacity:1,transition:{type:"spring"}},closed:{opacity:0,transition:{type:"spring",duration:.5,delay:.6}}},onClick:function(e){r&&(a({display:"none"}),s())},className:"modal-wrapper backdrop",children:[Object(j.jsx)(M,{style:{marginRight:"20px",marginTop:"25px"},onClick:s,className:"exit-modal",children:Object(j.jsx)(q.a,{className:"dark-text"})}),Object(j.jsx)(z,{variants:{open:{opacity:1,x:0,display:"block",transition:{type:"spring",stiffness:75,restDelta:2,duration:.5,delay:.5}},closed:{opacity:0,x:"75vw",transition:{type:"spring",duration:.5}}},animate:r?"open":"closed",className:"modal "+function(e){return"".concat("on"===e?"light-bg":"dark-bg")}(t),children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)(L,{className:"dark-text",children:[Object(j.jsx)("h5",{children:"Full list of quotes by"}),Object(j.jsx)("h1",{children:i})]}),Object(j.jsx)(B,{className:"list",children:v&&v.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(R,{className:"quote-container "+G(t)+" "+E(t),children:[e.quoteText,Object(j.jsx)(T,{children:e.quoteGenre})]},e.id)})}))})]})})]})};var z,L=function(e){var t=e.lights,n=e.fullname,a=e.genre,i=Object(c.useState)({display:"none"}),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(f.a)(!0),u=Object(o.a)(d,2),b=u[0],h=u[1];return Object(j.jsx)("div",{className:"author-summary ".concat("on"===t?"light-dim-bg":"dark-dim-bg"),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h4",{className:"".concat("on"===t?"light-text":"dark-text"),children:n}),Object(j.jsx)("p",{className:"".concat("on"===t?"light-subtext":"dark-subtext"),children:a})]}),Object(j.jsx)(y.a,{className:"icon",onClick:function(){l({display:"flex"}),h(!b)}}),Object(j.jsx)(C,{modal:r,setModal:l,animate:b?"closed":"open",lights:t,author:n,isOpen:b,toggleOpen:h})]})})};var M,R,T=function(e){var t=e.text,n=e.author,a=e.genre,c=d.a.h2(z||(z=Object(l.a)(["\n        font-size: 2.2em;\n        margin: 0px;\n        \n    "])));return Object(j.jsxs)("div",{className:"quote-wraper",children:[Object(j.jsx)("div",{className:"quote",id:"quote",children:Object(j.jsxs)("div",{className:"quote-block",children:[Object(j.jsx)("div",{className:"strip accent-dark"}),Object(j.jsx)("span",{children:Object(j.jsx)(c,{className:"quote-text",children:t})})]})}),Object(j.jsx)(L,{fullname:n,genre:a})]})};var E=function(e){var t=d.a.div(M||(M=Object(l.a)(["\n        text-align: center;\n        height: 100%;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        align-items: center;\n    "]))),n=d.a.div(R||(R=Object(l.a)(["\n        ","\n    "])),"on"===e.lights?"color: var(--almost-black)":"color: var(--lightest)");return Object(j.jsxs)(t,{children:[Object(j.jsx)(n,{className:"loader",children:"Loading"}),Object(j.jsx)("h4",{className:"on"===e.lights?"light-text":"dark-text",children:e.message})]})};var B=function(){return Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(E,{message:"Finding your daily inspiration"})})})};var G=function(){var e="https://quote-garden.herokuapp.com/api/v3/quotes/random",t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],d=r[1],u=Object(c.useState)(!0),h=Object(o.a)(u,2),x=h[0],O=h[1];function m(){window.location.reload()}return Object(c.useEffect)((function(){return S.a.get(e).then((function(e){var t=e.data.data[0];d(t)})).catch((function(e){console.log(e)})),function(){i(!1),O(!1)}}),[e]),a&&(d(null),m()),x&&!l?[Object(j.jsx)(B,{}),O(!1)]:Object(j.jsxs)(w.a.div,{className:"App",children:[Object(j.jsx)(b,{handleRandom:m}),Object(j.jsx)("main",{children:l?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(T,{text:l.quoteText,setRandom:i,author:l.quoteAuthor,genre:l.quoteGenre})}):Object(j.jsx)(E,{message:"Randomizing"})}),Object(j.jsx)(v,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),I()}},[[64,1,2]]]);
//# sourceMappingURL=main.c4e0ce0a.chunk.js.map