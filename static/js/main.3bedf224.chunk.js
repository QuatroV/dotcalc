(this.webpackJsonpdotcalc=this.webpackJsonpdotcalc||[]).push([[0],{69:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,s,b,d,u,l,j,p,f,x,g,h,O,m,y,k,v,w,C=t(1),S=t(23),z=t.n(S),I=t(10),T=t(3),L=t(4),R=t(2),E=L.a.button(r||(r=Object(T.a)(['\n  box-shadow: 0px 0px 0px 1px #a633bd;\n  background: linear-gradient(0.47turn, #c92ce8 5%, #5f0dbd 100%);\n  background-color: #c92ce8;\n  border-radius: 10px;\n  border: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 19px;\n  padding: 12px 37px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #88199e;\n  :hover {\n    background: linear-gradient(0.47turn, #5f0dbd 5%, #c92ce8 100%);\n    background-color: #5f0dbd;\n  }\n  :active {\n    position: relative;\n    top: 1px;\n  }\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  width: 100%;\n']))),F=L.a.button(c||(c=Object(T.a)(['\n  font-size: 19px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  padding: 12px 37px;\n  :active {\n    position: relative;\n    top: 1px;\n    background: rgba(119, 119, 119, 0.2);\n    border: 1px solid rgba(119, 119, 119, 0.2);\n  }\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  opacity: 0.9;\n']))),V=L.a.button(a||(a=Object(T.a)(['\n  font-size: 19px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  border-radius: 50%;\n  padding: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  :active {\n    position: relative;\n    top: 1px;\n    background: rgba(119, 119, 119, 0.2);\n    border: 1px solid rgba(119, 119, 119, 0.2);\n  }\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  opacity: 0.9;\n  width: 49px;\n  color: #ffffff;\n  text-shadow: 2px 3px 8px rgba(0, 0, 0, 1);\n']))),N=function(n){var e=n.type,t=n.children,r=n.onClick;switch(e){case"primary":return Object(R.jsx)(E,{onClick:r,children:t});case"round":return Object(R.jsx)(V,{onClick:r,children:t});default:return Object(R.jsx)(F,{onClick:r,children:t})}},q=t(38),B=Object(L.a)(q.animated.div)(i||(i=Object(T.a)(["\n  ","\n  ",'\n  background: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(5.5px);\n  -webkit-backdrop-filter: blur(5.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  padding: 8px;\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  text-shadow: 1px 1px 11px rgba(0, 0, 0, 0.35);\n  color: #ffffff;\n  margin: 8px;\n'])),(function(n){return n.width&&"width: ".concat(n.width,";")}),(function(n){return n.height&&"height: ".concat(n.height,";")})),G=function(n){var e=n.children,t=Object(q.useSpring)({to:{opacity:1,marginTop:0},from:{opacity:0,marginTop:100},delay:100});return Object(R.jsx)(B,{style:t,children:e})},J=L.a.div(o||(o=Object(T.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  background: #4568dc; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to left,\n    #b06ab3,\n    #4568dc\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to left,\n    #b06ab3,\n    #4568dc\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),P=L.a.div(s||(s=Object(T.a)(["\n  background: rgba(208, 208, 208, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 10px;\n"]))),W=L.a.div(b||(b=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-column-gap: ",";\n  grid-row-gap: ",";\n"])),(function(n){return n.columns}),(function(n){return n.gap}),(function(n){return n.gap})),Y=L.a.img(d||(d=Object(T.a)(["\n  ","\n  ","\n"])),(function(n){return n.height&&"height: ".concat(n.height,";")}),(function(n){return n.width&&"height: ".concat(n.width,";")})),A=function(n){var e=n.src,t=n.width,r=n.height;return Object(R.jsx)(Y,{src:e,width:t,height:r,alt:""})},D=t.p+"static/media/calculator.f860884b.png",H=L.a.div(u||(u=Object(T.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 8px;\n"]))),K=L.a.h1(l||(l=Object(T.a)(['\n  font-family: "Lato", sans-serif;\n  font-size: 100px;\n  padding-right: 30px;\n']))),M=function(n){var e=n.children,t=n.hasIcon;return Object(R.jsxs)(H,{children:[t&&Object(R.jsx)(A,{src:D,width:"170px"}),Object(R.jsx)(K,{children:e})]})},Q=L.a.div(j||(j=Object(T.a)(["\n  display: block;\n  max-width: 570px;\n"]))),U=t(7),X=L.a.h1(p||(p=Object(T.a)(['\n  font-family: "Lato", sans-serif;\n  font-size: 30px;\n  display: inline;\n']))),Z=L.a.h1(f||(f=Object(T.a)(['\n  font-family: "Lato", sans-serif;\n  font-size: 80px;\n  display: inline;\n']))),$=L.a.div(x||(x=Object(T.a)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-around;\n"]))),_=function(){var n=Object(U.c)((function(n){return n.game.steps})),e=Object(U.c)((function(n){return n.game.target}));return Object(R.jsx)(G,{children:Object(R.jsxs)($,{children:[Object(R.jsx)(X,{children:"the target is"}),Object(R.jsx)(Z,{children:e}),Object(R.jsx)(X,{children:"steps"}),Object(R.jsx)(Z,{children:n})]})})},nn=t(19),en=t(22),tn=t.n(en),rn=function(n,e,t){switch(e){case"+":return n+t;case"-":return n-t;case"*":return n*t;default:return null}},cn=function(n){var e=n.setCurrentValue,t=n.currentValue,r=Object(U.c)((function(n){return n.game.operands})),c=Object(U.c)((function(n){return n.game.operations})),a=Object(U.c)((function(n){return n.game.gameState})),i=Object(U.c)((function(n){return n.game.current})),o=Object(C.useState)([t]),s=Object(I.a)(o,2),b=s[0],d=s[1];Object(C.useEffect)((function(){d([i])}),[a]);var u=function(n){if(c.includes(b[1])){var t=rn(b[0],b[1],n);e(t),d([t])}},l=function(n){d((function(e){return[].concat(Object(nn.a)(e),[n])}))};return Object(R.jsxs)(W,{columns:"3",gap:"4px",children:[Object(R.jsx)(N,{type:"round",onClick:function(){return l(c[0])},children:c[0]}),Object(R.jsx)(N,{type:"round",onClick:function(){return u(r[1])},children:r[1]}),Object(R.jsx)(N,{type:"round",onClick:function(){return l(c[1])},children:c[1]}),Object(R.jsx)(N,{type:"round",onClick:function(){return u(r[0])},children:r[0]}),Object(R.jsx)(N,{type:"round",onClick:function(){return l(c[2])},children:c[2]}),Object(R.jsx)(N,{type:"round",onClick:function(){return u(r[2])},children:r[2]})]})},an=t(34),on=["+","-","*"],sn=[1,2,3,4,5,6,7,8,9],bn=Object(an.b)({name:"game",initialState:{target:0,current:0,steps:0,operations:[],operands:[],gameState:""},reducers:{gameInit:function(n){return n.current=tn.a.random(1,10),n.steps=tn.a.random(2,3),n.operations=tn.a.sampleSize(on,3),n.operands=tn.a.sampleSize(sn,3),n.target=function(n,e,t,r){for(var c=0;c<e;++c){var a=tn.a.sample(t),i=tn.a.sample(r);n=rn(n,a,i)}return n}(n.current,n.steps,n.operations,n.operands),n.gameState="in progress",n},updateCurrent:function(n,e){n.steps-=1,n.current=e.payload},updateGameState:function(n,e){n.gameState=e.payload}}}),dn=bn.actions,un=dn.gameInit,ln=(dn.generateTarget,dn.updateCurrent),jn=dn.updateGameState,pn=bn.reducer,fn=function(n,e){var t=Object(C.useRef)(!1);Object(C.useEffect)((function(){t.current?n():t.current=!0}),e)},xn=L.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  width: 100%;\n"]))),gn=L.a.h1(h||(h=Object(T.a)(['\n  font-family: "Lato", sans-serif;\n  font-size: 80px;\n  display: inline;\n']))),hn=L.a.div(O||(O=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n"]))),On=Object(L.a)(P)(m||(m=Object(T.a)(["\n  margin-right: 8px;\n  flex: 2;\n"]))),mn=function(){var n=Object(U.c)((function(n){return n.game.current})),e=Object(U.c)((function(n){return n.game.gameState})),t=Object(C.useState)(n),r=Object(I.a)(t,2),c=r[0],a=r[1],i=Object(U.b)();return fn((function(){console.log(e,n),a(n)}),[e]),fn((function(){i(ln(c))}),[c]),Object(R.jsx)(G,{children:Object(R.jsxs)(xn,{children:[Object(R.jsx)(On,{children:Object(R.jsx)(hn,{children:Object(R.jsx)(gn,{children:n})})}),Object(R.jsx)(P,{children:Object(R.jsx)(cn,{currentValue:c,setCurrentValue:a})})]})})},yn=Object(L.a)(P)(y||(y=Object(T.a)(["\n  margin-bottom: 8px;\n  background: rgb(218 94 47 / 61%);\n  border: 2px solid rgb(218 94 47 / 61%);\n"]))),kn=Object(L.a)(P)(k||(k=Object(T.a)(["\n  margin-bottom: 8px;\n  background: rgb(87 128 8 / 61%);\n  border: 2px solid rgb(18 99 9 / 61%);\n"]))),vn=function(){var n=Object(U.c)((function(n){return n.game.steps})),e=Object(U.c)((function(n){return n.game.target})),t=Object(U.c)((function(n){return n.game.current})),r=Object(U.c)((function(n){return n.game.gameState})),c=Object(U.b)();if(n<0)return Object(R.jsxs)(G,{children:[Object(R.jsx)(yn,{children:"You've made too many steps!"}),Object(R.jsx)(N,{type:"primary",children:"Restart game"})]});switch(r){case"in progress":return Object(R.jsx)(G,{children:Object(R.jsx)(N,{type:"primary",onClick:function(){c(jn("results"))},children:"Compare"})});case"results":return Object(R.jsxs)(G,{children:[t===e?Object(R.jsx)(kn,{children:"Numbers are equal, you're right! "}):Object(R.jsx)(yn,{children:"Numbers are not equal!"}),Object(R.jsx)(N,{type:"primary",onClick:function(){c(un())},children:"Restart game"})]})}},wn=function(){return Object(R.jsx)(J,{children:Object(R.jsxs)(Q,{children:[Object(R.jsx)(G,{children:Object(R.jsx)(M,{hasIcon:!0,children:"dotCalc"})}),Object(R.jsx)(_,{}),Object(R.jsx)(mn,{}),Object(R.jsx)(vn,{})]})})},Cn=t(28),Sn=L.a.div(v||(v=Object(T.a)(["\n  padding: 4px;\n  line-height: 20px;\n  text-align: justify;\n"]))),zn=L.a.div(w||(w=Object(T.a)(['\n  padding-left: 4px;\n  font-size: 30px;\n  font-family: "Lato", sans-serif;\n']))),In=function(){var n=Object(U.b)();return Object(R.jsx)(J,{children:Object(R.jsxs)(Q,{children:[Object(R.jsx)(G,{children:Object(R.jsx)(M,{hasIcon:!0,children:"dotCalc"})}),Object(R.jsxs)(G,{children:[Object(R.jsx)(zn,{children:"Welcome to the dotCalc game!"}),Object(R.jsxs)(Sn,{children:["The rules are simple - at the begging of the game you will be given two numbers - initial and target. The goal is to get the target number from the initial one. You can do that by using given math operations with other numbers. The number of math operations you can apply to the initial number is limited - you'll lose if you exceed that number. ",Object(R.jsx)("br",{}),"Start the game by pressing the button below"]})]}),Object(R.jsx)(G,{children:Object(R.jsx)(Cn.b,{to:"/game",onClick:function(){n(un())},children:Object(R.jsx)(N,{type:"primary",children:"Start game"})})})]})})},Tn=t(8),Ln=function(){var n=Object(C.useState)(0),e=Object(I.a)(n,2);e[0],e[1];return Object(R.jsx)("div",{className:"App",children:Object(R.jsxs)(Tn.c,{children:[Object(R.jsx)(Tn.a,{path:"/game",children:Object(R.jsx)(wn,{})}),Object(R.jsx)(Tn.a,{path:"/",children:Object(R.jsx)(In,{})})]})})},Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))},En=Object(an.a)({reducer:{game:pn}});z.a.render(Object(R.jsx)(U.a,{store:En,children:Object(R.jsx)(Cn.a,{children:Object(R.jsx)(Ln,{})})}),document.getElementById("root")),Rn()}},[[69,1,2]]]);
//# sourceMappingURL=main.3bedf224.chunk.js.map