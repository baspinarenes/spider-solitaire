(this["webpackJsonpspider-solitaire"]=this["webpackJsonpspider-solitaire"]||[]).push([[0],{33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o,s,d,l,b,u,g,p,h=t(0),j=t.n(h),x=t(6),m=t.n(x),f=t(2),O=t(4),w=t(1),v=Object(h.createContext)(),k=function(e){var n=e.children,t=Object(h.useState)({username:""}),r=Object(O.a)(t,2),i=r[0],c=r[1],a=Object(h.useState)(!1),o=Object(O.a)(a,2),s=o[0],d=o[1];return Object(h.useEffect)((function(){var e=sessionStorage.getItem("user");e&&"Guest"!==e.username&&c(JSON.parse(e))}),[]),Object(h.useEffect)((function(){sessionStorage.setItem("user",JSON.stringify(i))}),[i]),Object(w.jsx)(v.Provider,{value:{user:i,setUser:c,isUserSelected:s,setIsUserSelected:d},children:n})},y=t(3),C=t.p+"static/media/normal.85d4fca4.cur",S=t.p+"static/media/clickable.8631aaab.cur",B={whiteA03:"rgba(255, 255, 255, 0.3)",white:"rgb(255, 255, 255)",yellow:"rgb(255,255,0)",black:"rgb(0,0,0)",lightBlue:"rgb(83, 163, 255)",blue:"rgb(80, 143, 217)",darkBlue:"rgb(49, 106, 197)",navyBlue:"rgb(0, 77, 163)",orange:"rgb(240, 150, 68)",beige:"rgb(236, 233, 216)",pink:"rgb(255, 38, 231)",aqua:"rgb(0, 171, 246)",transparent:"transparent",green:"rgb(0,128,0)",brightGreen:"#00DB02"},D={colors:{taskBg:B.blue,loginScreenText:B.white,loginScreenHeaderBg:B.navyBlue,loginScreenFooterText:B.white,loginScreenFooterBg:B.navyBlue,loginScreenTextColor:B.white,buttonBg:B.white,buttonText:B.black,xpWindowBg:B.beige,titleBarText:B.white,hintAreaBg:B.green,hintAreaText:B.white,subMenuButtonText:B.black,subMenuButtonText$hover:B.white,subMenuButtonBg$hover:B.darkBlue,menuButtonText:B.black,menuButtonBg$hover:B.darkBlue,menuButtonText$hover:B.white,menuBg:B.beige,menuBarBg:B.beige,toolbarText:B.white,taskBg$hover:B.lightBlue,loaderBorder:B.white,splashScreenText:B.white,splashScreenBg:B.black,loginAccountInputText:B.white,loginAccountInputBg:B.transparent,loginAccountText:B.white,loginAccountBorder$hover:B.yellow,windowBorder:B.blue},gradients:{barBg:"\n      linear-gradient(\n        to bottom,\n        #222e9d,\n        #3043d5,\n        #5f80fc,\n        #6f8dfd,\n        #859ffe,\n        #8da6ff,\n        #5b7af9,\n        #3346d7,\n        #2d3ed2\n      )\n    ",loginScreenFooterBorderColor:"\n      linear-gradient(\n        90deg,\n        ".concat(B.navyBlue," 0%,\n        ").concat(B.orange," 50%,\n        ").concat(B.navyBlue," 100%\n      )\n    "),loginScreenHeaderBorderColor:"\n      linear-gradient(\n        90deg,\n        transparent 0%,\n        rgba(255, 255, 255, 0.8) 30%,\n        rgba(255, 255, 255, 0.9) 50%,\n        rgba(255, 255, 255, 0.8) 70%,\n        transparent 100%\n      )\n    ",loginScreenMiddleBorderColor:"\n      linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0) 5%,\n        rgba(255, 255, 255, 0.5) 15%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0.5) 85%,\n        rgba(255, 255, 255, 0) 95%,\n        rgba(255, 255, 255, 0) 100%\n      )\n    ",titleBarBg:"\n      linear-gradient(\n        180deg,\n        rgba(9, 151, 255, 1) 0%,\n        rgba(0, 83, 238, 1) 8%,\n        rgba(0, 80, 238, 1) 40%,\n        rgba(0, 102, 255, 1) 88%,\n        rgba(0, 102, 255, 1) 93%,\n        rgba(0, 91, 255, 1) 95%,\n        rgba(0, 61, 215, 1) 96%,\n        rgba(0, 61, 215, 1) 100%\n      )\n    ",loginScreenMainBg:"\n      linear-gradient(\n        130deg,\n        rgba(221, 221, 221, 1) 0%,\n        rgba(80, 143, 217, 1) 35%,\n        rgba(80, 143, 217, 1) 100%\n      )\n    ",toolbarBg:"\n      linear-gradient(\n        rgb(12, 89, 185) 1%,\n        rgb(19, 158, 233) 6%,\n        rgb(24, 181, 242) 10%,\n        rgb(19, 155, 235) 14%,\n        rgb(18, 144, 232) 19%,\n        rgb(13, 141, 234) 63%,\n        rgb(13, 159, 241) 81%,\n        rgb(15, 158, 237) 88%,\n        rgb(17, 155, 233) 91%,\n        rgb(19, 146, 226) 94%,\n        rgb(19, 126, 215) 97%,\n        rgb(9, 91, 201) 100%\n      )\n    ",taskbarBg:"\n      linear-gradient(\n        rgb(31, 47, 134) 0px,\n        rgb(49, 101, 196) 3%,\n        rgb(54, 130, 229) 6%,\n        rgb(68, 144, 230) 10%,\n        rgb(56, 131, 229) 12%,\n        rgb(43, 113, 224) 15%,\n        rgb(38, 99, 218) 18%,\n        rgb(35, 91, 214) 20%,\n        rgb(34, 88, 213) 23%,\n        rgb(33, 87, 214) 38%,\n        rgb(36, 93, 219) 54%,\n        rgb(37, 98, 223) 86%,\n        rgb(36, 95, 220) 89%,\n        rgb(33, 88, 212) 92%,\n        rgb(29, 78, 192) 95%,\n        rgb(25, 65, 165) 98%\n      )\n    "},keyFrames:{loadingKeyFrame:Object(f.c)(r||(r=Object(y.a)(["\n      0% {\n        transform: translate(-40px);\n      }\n      100% {\n        transform: translate(200px);\n      }\n    "]))),colorChange:Object(f.c)(i||(i=Object(y.a)(["\n      0% {\n        color: ",";\n      }\n      20% {\n        color: ",";\n      }\n      40% { \n        color: ",";\n      }\n      60% { \n        color: ","; \n      }\n      80% { \n        color: ","; \n      }\n      100% { \n        color: ","; \n      }\n    "])),B.red,B.yellow,B.brightGreen,B.aqua,B.navyBlue,B.pink)},boxShadows:{emptyDeck:"inset 0 0 0 2px ".concat(B.white),task:"".concat(B.black," 1px 0px 1px, ").concat(B.whiteA03," 1px 1px 1px inset"),windowButton$hover:"".concat(B.orange," 0px 0px 0px 1px inset"),windowButton$active:"".concat(B.blue," 0px 0px 0px 1px inset")},breakpoints:{smallTablet:"600px"}},I={Button:f.b.button(c||(c=Object(y.a)(["\n    background: transparent;\n    border: 0;\n    color: white;\n\n    &:not(:disabled):hover {\n      cursor: url(","), auto;\n    }\n  "])),S),Screen:f.b.div(a||(a=Object(y.a)(["\n    height: 100%;\n    cursor: url(","), auto;\n    overflow: hidden;\n  "])),C)},T=Object(f.b)(I.Screen)(o||(o=Object(y.a)(["\n  background-color: ",";\n  padding: 7px 33px;\n  color: ",";\n  cursor: none;\n"])),(function(e){return e.theme.colors.splashScreenBg}),(function(e){return e.theme.colors.splashScreenText})),z=f.b.main(s||(s=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  // main = fullHeight - footer - top and bottom padding\n  height: calc(100% - 60px - 14px);\n  justify-content: center;\n"]))),G=f.b.img(d||(d=Object(y.a)(["\n  margin-bottom: 70px;\n  max-width: 300px;\n  width: 50vw;\n  height: auto;\n"]))),A=f.b.div(l||(l=Object(y.a)(["\n  border: 1px solid ",";\n  border-radius: 5px;\n  height: 20px;\n  overflow: hidden;\n  padding: 2px 1px;\n  width: 200px;\n"])),(function(e){return e.theme.colors.loaderBorder})),M=f.b.div(b||(b=Object(y.a)(["\n  align-items: center;\n  animation: "," 2s\n    linear infinite;\n  display: flex;\n  gap: 3px;\n  height: 100%;\n"])),(function(e){return e.theme.keyFrames.loadingKeyFrame})),$=f.b.div(u||(u=Object(y.a)(["\n  background: ",";\n  height: 100%;\n  width: 10px;\n"])),(function(e){return e.theme.gradients.barBg})),H=f.b.footer(g||(g=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 0.7em;\n  height: 60px;\n  justify-content: space-between;\n"]))),E=f.b.img(p||(p=Object(y.a)(["\n  filter: invert(100%); // black logo -> white logo\n  height: 60px;\n"]))),N=t.p+"static/media/winxp-logo.9dee7f33.webp",P=t.p+"static/media/microsoft-logo.63a04c35.webp",F=function(){return Object(w.jsxs)(T,{children:[Object(w.jsxs)(z,{children:[Object(w.jsx)(G,{src:N,width:"300",height:"205",alt:"windows xp logo"}),Object(w.jsx)(A,{children:Object(w.jsxs)(M,{children:[Object(w.jsx)($,{}),Object(w.jsx)($,{}),Object(w.jsx)($,{})]})})]}),Object(w.jsxs)(H,{children:[Object(w.jsx)("span",{children:"Copyright \xa9 Microsoft Corporation"}),Object(w.jsx)(E,{src:P,width:"120",height:"60",alt:"microsoft logo"})]})]})},R=t(5),U={"cannot-deal":t.p+"static/media/cannot-deal.719a6f61.ogg",deal:t.p+"static/media/deal.d303474b.ogg",hint:t.p+"static/media/hint.14af02d0.ogg","mouse-down":t.p+"static/media/mouse-down.2c3d79bd.ogg","mouse-up":t.p+"static/media/mouse-up.58aa9060.ogg","no-hint":t.p+"static/media/no-hint.2b127c57.ogg",opening:t.p+"static/media/opening.f12b1f09.ogg",shutdown:t.p+"static/media/shutdown.ee31f59a.ogg",win:t.p+"static/media/win.fc702605.ogg"};function W(){for(var e=[],n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.forEach((function(n){e.push(new Audio(U[n]))})),e}var L,q,J,Y,K,V,X,Q,Z,_,ee,ne,te,re,ie,ce,ae,oe,se,de,le,be,ue,ge,pe,he,je,xe,me,fe,Oe,we,ve,ke,ye,Ce,Se,Be,De,Ie,Te=t.p+"static/media/cannot-clickable.82628c61.cur",ze=t.p+"static/media/beam.80b9bea2.cur",Ge=Object(f.b)(I.Button)(L||(L=Object(y.a)(["\n  align-items: center;\n  color: white;\n  display: flex;\n  font-size: 1.3rem;\n  gap: 10px;\n  opacity: 0.6;\n\n  &:hover {\n    cursor: ",";\n    opacity: 1;\n    transition: opacity 400ms;\n  }\n\n  input {\n    background: transparent;\n    border: 0;\n    color: white;\n    font-size: 1.3rem;\n    height: 30px;\n    outline: 0;\n\n    &:hover {\n      cursor: url(","), pointer;\n    }\n  }\n\n  &:nth-child(2) {\n    display: none;\n  }\n\n  @media (min-width: ",") {\n    &:nth-child(2) {\n      display: flex;\n    }\n  }\n"])),(function(e){return!e.$isGuest&&!e.$isUsernameWritten&&"url(".concat(Te,"), pointer")}),ze,(function(e){return e.theme.breakpoints.smallTablet})),Ae=f.b.img(q||(q=Object(y.a)(["\n  border: 2px solid white;\n  border-radius: 5px;\n  height: 60px;\n  width: 60px;\n\n  &:hover {\n    border-color: yellow;\n  }\n"]))),Me=t.p+"static/media/account-image.20ce40ff.webp",$e=function(e){var n=e.isGuest,t=Object(h.useContext)(v),r=t.user,i=t.setUser,c=t.setIsUserSelected,a=Object(h.useState)(r.username),o=Object(O.a)(a,2),s=o[0],d=o[1],l=W("opening"),b=Object(O.a)(l,1)[0],u=function(e){e.preventDefault(),i(n?Object(R.a)(Object(R.a)({},r),{},{username:"Guest"}):Object(R.a)(Object(R.a)({},r),{},{username:s})),c(!0),b.play()};return Object(w.jsxs)(Ge,{"data-cy":n?"login-account":"login-account-guest",$isGuest:n,$isUsernameWritten:s&&"Guest"!==s,onClick:u,disabled:!n&&"Guest"===s&&""!==s,children:[Object(w.jsx)(Ae,{src:Me,alt:"avatar",width:"60",height:"60"}),n?Object(w.jsx)("span",{children:"Guest"}):Object(w.jsx)("input",{type:"text",placeholder:"Or write your username",value:"Guest"===s?"":s,onClick:function(e){e.stopPropagation()},onChange:function(e){d(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&u(e)}})]})},He=Object(f.b)(I.Screen)(J||(J=Object(y.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.loginScreenTextColor})),Ee=f.b.header(Y||(Y=Object(y.a)(["\n  background-color: ",";\n  border-bottom: 3px solid;\n  border-image-slice: 1;\n  border-image-source: ",";\n  height: 90px;\n"])),(function(e){return e.theme.colors.loginScreenHeaderBg}),(function(e){return e.theme.gradients.loginScreenHeaderBorderColor})),Ne=f.b.main(K||(K=Object(y.a)(["\n  background: ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2fr 1fr;\n  // main = fullHeight - header - footer\n  height: calc(100% - 90px - 130px);\n  padding: 20px;\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n"])),(function(e){return e.theme.gradients.loginScreenMainBg}),(function(e){return e.theme.breakpoints.smallTablet})),Pe=f.b.section(V||(V=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.9rem;\n  gap: 30px;\n  justify-content: center;\n\n  @media (min-width: ",") {\n    align-items: flex-end;\n    border-image-slice: 0 1 0 0;\n    border-image-source: ",";\n    border-right: 1px solid;\n    padding-right: 60px;\n  }\n\n  img {\n    width: 205px;\n    height: auto;\n  }\n\n  span {\n    font-size: 1.3rem;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet}),(function(e){return e.theme.gradients.loginScreenMiddleBorderColor})),Fe=f.b.section(X||(X=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n  margin: 0 auto;\n  width: minmax(70vw, 90vw);\n\n  @media (min-width: ",") {\n    padding-left: 30px;\n    width: 100%;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet})),Re=f.b.footer(Q||(Q=Object(y.a)(["\n  align-items: center;\n  background-color: ",";\n  border-image-slice: 1;\n  border-image-source: ",";\n  border-top: 3px solid;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n  gap: 10px;\n  height: 130px;\n  padding: 20px 50px;\n  text-align: center;\n\n  p {\n    max-width: 450px;\n  }\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    gap: 30px;\n    justify-content: space-between;\n    text-align: initial;\n  }\n"])),(function(e){return e.theme.colors.loginScreenFooterBg}),(function(e){return e.theme.gradients.loginScreenFooterBorderColor}),(function(e){return e.theme.breakpoints.smallTablet})),Ue=Object(f.b)(I.Button)(Z||(Z=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  gap: 10px;\n\n  img {\n    height: 25px;\n    width: 25px;\n  }\n\n  span {\n    font-size: 1rem;\n  }\n"]))),We=t.p+"static/media/winxp-shutdown.ce8f45e9.webp",Le=t.p+"static/media/login-logo.eb4729f1.webp",qe=function(){var e=W("shutdown"),n=Object(O.a)(e,1)[0];return Object(w.jsxs)(He,{children:[Object(w.jsx)(Ee,{}),Object(w.jsxs)(Ne,{children:[Object(w.jsxs)(Pe,{children:[Object(w.jsx)("img",{src:Le,alt:"windows xp logo",width:"205",height:"118"}),Object(w.jsx)("span",{children:"To begin, select your user"})]}),Object(w.jsxs)(Fe,{children:[Object(w.jsx)($e,{isGuest:!0}),Object(w.jsx)($e,{})]})]}),Object(w.jsxs)(Re,{children:[Object(w.jsx)("div",{children:Object(w.jsxs)(Ue,{onClick:function(){return n.play()},children:[Object(w.jsx)("img",{src:We,alt:"shutdown icon",height:"25",width:"25"}),Object(w.jsx)("span",{children:"Turn off computer"})]})}),Object(w.jsx)("p",{children:"This XP cannot be turned off. After all these years we have been away, we wouldnt want to close, would we? But out of respect for you, I will play a shutdown sound."})]})]})},Je=Object(f.b)(I.Screen)(_||(_=Object(y.a)([""]))),Ye=function(){var e=Object(h.useState)(!0),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(h.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2500);return function(){clearTimeout(e)}}),[]),Object(w.jsx)(Je,{children:t?Object(w.jsx)(F,{}):Object(w.jsx)(qe,{})})},Ke=t(11),Ve=t(9),Xe={0:t.p+"static/media/card-back.6ac6f05d.webp",1:t.p+"static/media/1.9ff91e18.webp",2:t.p+"static/media/2.4f8109e5.webp",3:t.p+"static/media/3.16b7a3a8.webp",4:t.p+"static/media/4.045ab1ef.webp",5:t.p+"static/media/5.ff1357b2.webp",6:t.p+"static/media/6.b268e2f4.webp",7:t.p+"static/media/7.ffb8dc20.webp",8:t.p+"static/media/8.8bfd9f02.webp",9:t.p+"static/media/9.db441ad5.webp",10:t.p+"static/media/10.c2721a7a.webp",11:t.p+"static/media/11.1defe000.webp",12:t.p+"static/media/12.4396ddf4.webp",13:t.p+"static/media/13.c59c5592.webp"},Qe={back:0,ace:1,two:2,three:3,four:4,five:5,siv:6,seven:7,eight:8,nine:9,ten:10,jack:11,queen:12,king:13},Ze={ace:8,two:8,three:8,four:8,five:8,siv:8,seven:8,eight:8,nine:8,ten:8,jack:8,queen:8,king:8},_e=function(e){for(var n=Object(Ve.a)(e),t=n.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),i=[n[r],n[t]];n[t]=i[0],n[r]=i[1]}return n},en=function(e,n,t){var r=Object(Ve.a)(n);if(Object.values(e).every((function(e){return e.cards.length>0}))){var i=r.pop();i&&Object.entries(e).forEach((function(e){var n=Object(O.a)(e,2)[1];n.cards.push(i.shift()),n.visibleCardCount+=1}))}else t.play();return[Object(R.a)({},e),Object(Ve.a)(r)]},nn=function(){var e=Object.entries(Ze).map((function(e){var n=Object(O.a)(e,2),t=n[0],r=n[1];return Array(r).fill(Qe[t])})).flat(),n=_e(e);return[{deck1:{cards:n.slice(0,6),visibleCardCount:1},deck2:{cards:n.slice(6,12),visibleCardCount:1},deck3:{cards:n.slice(12,18),visibleCardCount:1},deck4:{cards:n.slice(18,24),visibleCardCount:1},deck5:{cards:n.slice(24,29),visibleCardCount:1},deck6:{cards:n.slice(29,34),visibleCardCount:1},deck7:{cards:n.slice(34,39),visibleCardCount:1},deck8:{cards:n.slice(39,44),visibleCardCount:1},deck9:{cards:n.slice(44,49),visibleCardCount:1},deck10:{cards:n.slice(49,54),visibleCardCount:1}},[n.slice(54,64),n.slice(64,74),n.slice(74,84),n.slice(84,94),n.slice(94,104)]]},tn=function(){return nn()},rn=function(e){for(var n,t,r=e.cards.length-e.visibleCardCount,i=r,c=r;c<e.cards.length;c+=1)t=e.cards[c],(n=e.cards[c+1])&&t+1!==n&&(i=c+1);return i},cn=function(e){for(var n=function(e){var n=[];return Object.entries(e).forEach((function(e){var t=Object(O.a)(e,2)[1];n.push({startingIndex:rn(t),cards:t.cards.slice(rn(t))})})),n}(e),t=[],r=0;r<n.length;r+=1)for(var i=n[r],c=0;c<i.cards.length;c+=1)for(var a=0;a<n.length;a+=1){var o=n[a];(i.cards.slice(c)[0]===o.cards.slice(-1)[0]+1&&i.cards[c-1]!==o.cards.slice(-1)[0]||i.cards.slice(c)[0]===o.cards.slice(-1)[0]+1&&o.cards.length>c)&&t.push({sourceDeckId:"deck".concat(r+1),destinationDeckId:"deck".concat(a+1),sourceStartingIndex:i.startingIndex+c,destinationStartingIndex:o.startingIndex})}return _e(t)[0]},an=Object(h.createContext)(),on=function(e){var n=e.children,t=Object(h.useState)({deck1:{},deck2:{},deck3:{},deck4:{},deck5:{},deck6:{},deck7:{},deck8:{},deck9:{},deck10:{}}),r=Object(O.a)(t,2),i=r[0],c=r[1],a=Object(h.useState)([]),o=Object(O.a)(a,2),s=o[0],d=o[1],l=Object(h.useState)(!1),b=Object(O.a)(l,2),u=b[0],g=b[1],p=Object(h.useState)({completedDeckCount:0,score:500,moves:0}),j=Object(O.a)(p,2),x=j[0],m=j[1];return Object(h.useEffect)((function(){var e=nn(),n=Object(O.a)(e,2),t=n[0],r=n[1];c(t),d(r)}),[]),Object(w.jsx)(an.Provider,{value:{cardDecks:i,setCardDecks:c,isAnyDragging:u,setIsAnyDragging:g,dealingDecks:s,setDealingDecks:d,gameStats:x,setGameStats:m},children:n})},sn=Object(h.createContext)(),dn=function(e){var n=e.children,t=Object(h.useState)(!1),r=Object(O.a)(t,2),i=r[0],c=r[1];return Object(w.jsx)(sn.Provider,{value:{isGameRunning:i,setIsGameRunning:c},children:n})},ln=Object(h.createContext)(),bn=function(e){var n=e.children,t=Object(h.useState)({}),r=Object(O.a)(t,2),i=r[0],c=r[1];return Object(h.useEffect)((function(){var e;return Object.keys(i).length>0&&(e=setTimeout((function(){c({})}),1e3)),function(){clearTimeout(e)}}),[i]),Object(w.jsx)(ln.Provider,{value:{hint:i,setHint:c},children:n})},un=Object(h.createContext)(),gn=function(e){var n=e.children,t=Object(h.useState)({deckId:"",items:[]}),r=Object(O.a)(t,2),i=r[0],c=r[1];return Object(w.jsx)(un.Provider,{value:{indicesOfSelectedCards:i,setIndicesOfSelectedCards:c},children:n})},pn=f.b.div(ee||(ee=Object(y.a)(["\n  background-color: #ece9d8;\n  display: flex;\n  font-size: 11px;\n"]))),hn=f.b.div(ne||(ne=Object(y.a)(["\n  display: flex;\n  padding: 3px 5px;\n  position: relative;\n\n  &:hover {\n    background-color: #316ac5;\n\n    & > button {\n      color: white;\n    }\n\n    div {\n      display: flex;\n    }\n  }\n"]))),jn=Object(f.b)(I.Button)(te||(te=Object(y.a)(["\n  color: black;\n  font-size: 11px;\n  text-align: left;\n\n  :hover + div {\n    display: flex;\n  }\n"]))),xn=f.b.div(re||(re=Object(y.a)(["\n  background-color: white;\n  border: 1px solid gray;\n  display: none;\n  flex-direction: column;\n  left: 0;\n  padding: 1px;\n  position: absolute;\n  top: 20px;\n  width: 200px;\n  z-index: 5;\n"]))),mn=Object(f.b)(I.Button)(ie||(ie=Object(y.a)(["\n  color: black;\n  font-size: 11px;\n  padding: 2px 2px 4px 12px;\n  text-align: left;\n  width: 100%;\n\n  &:hover {\n    background-color: #316ac5;\n    color: white;\n  }\n"]))),fn=function(){var e=Object(h.useContext)(an),n=e.cardDecks,t=e.setCardDecks,r=e.dealingDecks,i=e.setDealingDecks,c=e.setGameStats,a=W("cannot-deal","deal"),o=Object(O.a)(a,2),s=o[0],d=o[1];return Object(w.jsxs)(pn,{children:[Object(w.jsxs)(hn,{children:[Object(w.jsx)(jn,{children:"Game"}),Object(w.jsx)(xn,{children:Object(w.jsx)(mn,{onClick:function(){var e=tn(),n=Object(O.a)(e,2),r=n[0],a=n[1];t(r),i(a),c({completedDeckCount:0,score:500,moves:0})},children:"New Game"})})]}),Object(w.jsx)(hn,{children:Object(w.jsx)(jn,{onClick:function(){d.play();var e=en(n,r,s),c=Object(O.a)(e,2),a=c[0],o=c[1];t(a),i(o)},disabled:0===r.length,children:"Deal!"})})]})},On=t.p+"static/media/close.c7e9aa2a.webp",wn=t.p+"static/media/close-hover.7a6651df.webp",vn=t.p+"static/media/close-active.f788ade2.webp",kn=f.b.div(ce||(ce=Object(y.a)(["\n  background-color: ",";\n  display: grid;\n  grid-template-rows: 30px 20px 1fr;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n"])),(function(e){return e.theme.colors.xpWindowBg})),yn=f.b.div(ae||(ae=Object(y.a)(["\n  align-items: center;\n  background: ",";\n  color: ",";\n  display: flex;\n  font-family: 'Trebuchet MS';\n  font-size: 13px;\n  padding: 6px;\n\n  img {\n    height: 100%;\n  }\n"])),(function(e){return e.theme.gradients.titleBarBg}),(function(e){return e.theme.colors.titleBarText})),Cn=Object(f.b)(I.Button)(oe||(oe=Object(y.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 23px;\n  margin-left: auto;\n  width: 23px;\n\n  &:hover {\n    background-image: url(",");\n  }\n\n  &:not(:disabled):active {\n    background-image: url(",");\n  }\n"])),On,wn,vn),Sn=f.b.div(se||(se=Object(y.a)(["\n  height: 100%;\n"]))),Bn=t.p+"static/media/solitaire-icon.949145f2.webp",Dn=function(e){var n=e.children,t=e.title,r=Object(h.useContext)(sn).setIsGameRunning;return Object(w.jsxs)(kn,{children:[Object(w.jsxs)(yn,{children:[Object(w.jsx)("img",{src:Bn,alt:"solitaire icon"}),Object(w.jsx)("span",{children:t}),Object(w.jsx)(Cn,{onClick:function(){r(!1)}})]}),Object(w.jsx)(fn,{}),Object(w.jsx)(Sn,{children:n})]})},In=f.b.div(de||(de=Object(y.a)(["\n  animation: "," 10s\n    infinite;\n  align-items: center;\n  display: flex;\n  font-size: 4rem;\n  font-weight: bold;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])),(function(e){return e.theme.keyFrames.colorChange})),Tn=f.b.div(le||(le=Object(y.a)(["\n  background-color: ",";\n  bottom: 10px;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  display: grid;\n  grid-template-rows: 30px 1fr;\n  height: 150px;\n  left: 0;\n  margin: 0 auto;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  width: 300px;\n  z-index: 2;\n"])),(function(e){return e.theme.colors.xpWindowBg})),zn=f.b.div(be||(be=Object(y.a)(["\n  align-items: center;\n  background: ",";\n  color: ",";\n  display: flex;\n  font-family: 'Trebuchet MS';\n  font-size: 13px;\n  padding: 6px 15px;\n\n  img {\n    height: 100%;\n  }\n"])),(function(e){return e.theme.gradients.titleBarBg}),(function(e){return e.theme.colors.titleBarText})),Gn=Object(f.b)(I.Button)(ue||(ue=Object(y.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 16px;\n  margin-left: auto;\n  width: 16px;\n\n  &:hover {\n    background-image: url(",");\n  }\n\n  &:not(:disabled):active {\n    background-image: url(",");\n  }\n"])),On,wn,vn),An=f.b.div(ge||(ge=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n  gap: 10px;\n  height: 100%;\n  text-align: center;\n  justify-content: center;\n"])),(function(e){return e.theme.colors.windowBorder})),Mn=(f.b.div(pe||(pe=Object(y.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  font-size: 0.6rem;\n  gap: 8px;\n  margin-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n\n  p {\n    line-height: 0.9rem;\n  }\n\n  button {\n    background-color: ",";\n    border: 1px solid black;\n    border-radius: 3px;\n    color: ",";\n    font-size: 0.55rem;\n    height: 20px;\n    margin: 0 auto;\n    width: 60px;\n\n    &:hover {\n      box-shadow: ",";\n    }\n\n    &:active {\n      box-shadow: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.xpWindowBg}),(function(e){return e.theme.colors.buttonBg}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.boxShadows.windowButton$hover}),(function(e){return e.theme.boxShadows.windowButton$active})),Object(f.b)(I.Button)(he||(he=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid black;\n  border-radius: 3px;\n  color: ",";\n  font-size: 0.55rem;\n  height: 20px;\n  margin: 0 auto;\n  width: 60px;\n\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:active {\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.colors.buttonBg}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.boxShadows.windowButton$hover}),(function(e){return e.theme.boxShadows.windowButton$active}))),$n=function(e){var n=e.setCardDecks,t=e.setDealingDecks,r=e.gameStats,i=e.setGameStats,c=Object(h.useContext)(sn).setIsGameRunning,a=Object(h.useContext)(v).user,o=W("win"),s=Object(O.a)(o,1)[0];Object(h.useEffect)((function(){s.play()}),[]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(In,{children:Object(w.jsx)("span",{children:"You Won!"})}),Object(w.jsxs)(Tn,{children:[Object(w.jsxs)(zn,{children:[Object(w.jsx)("span",{children:"Game Over"}),Object(w.jsx)(Gn,{onClick:function(){c(!1)}})]}),Object(w.jsxs)(An,{children:[Object(w.jsxs)("p",{children:["Congratulations ",a.username,"!",Object(w.jsx)("br",{}),"You won with ",null===r||void 0===r?void 0:r.score," points in"," ",null===r||void 0===r?void 0:r.moves," moves."]}),Object(w.jsx)("p",{children:" Do you want to start another game?"}),Object(w.jsx)(Mn,{onClick:function(){var e=tn(),r=Object(O.a)(e,2),c=r[0],a=r[1];n(c),t(a),i({completedDeckCount:0,score:500,moves:0})},children:"Yes"})]})]})]})},Hn=j.a.memo($n),En=t(7),Nn=f.b.div(je||(je=Object(y.a)(["\n  z-index: 1;\n"]))),Pn=function(e){var n=e.index,t=e.deckNo,r=e.cardNo,i=e.isClose,c=e.isDragDisabled,a=e.isInSelectedCards,o=e.isSourceInHint,s=e.isDestinationInHint,d=W("mouse-down"),l=Object(O.a)(d,1)[0],b=function(e){e.preventDefault(),l.play()};function u(e,n){return n.isDropAnimating?Object(R.a)(Object(R.a)({},e),{},{transitionDuration:"0.001s"}):n.isDragging?e:a?Object(R.a)(Object(R.a)({},e),{},{display:"none",transform:"none"}):Object(R.a)(Object(R.a)({},e),{},{transform:"none",filter:o||s?"invert(100%)":"",transition:s?"filter 400ms 300ms":""})}return t?Object(w.jsx)(En.b,{draggableId:"deck".concat(t).concat(n),index:n,isDragDisabled:c,children:function(e,n){return Object(w.jsx)(Nn,Object(R.a)(Object(R.a)(Object(R.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:u(e.draggableProps.style,n),onMouseDown:c?void 0:b,children:Object(w.jsx)("div",{className:"card",children:Object(w.jsx)("img",{draggable:!1,src:i?Xe[0]:Xe[r],alt:"card"})})}))}}):Object(w.jsx)("div",{className:"card",children:Object(w.jsx)("img",{draggable:!1,src:i?Xe[0]:Xe[r],alt:"card"})})},Fn=j.a.memo(Pn),Rn=f.b.div(xe||(xe=Object(y.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    min(16px, 2.5vw)\n  );\n  height: fit-content;\n  justify-self: center;\n  max-width: 71px;\n  position: relative;\n  width: 100%;\n\n  @media (min-width: ",") {\n    grid-template-rows: repeat(\n      ",",\n      min(17px, 3vh)\n    );\n  }\n"])),(function(e){return e.deckLength+5}),(function(e){return e.theme.breakpoints.smallTablet}),(function(e){return e.deckLength+5})),Un=f.b.div(me||(me=Object(y.a)(["\n  border-radius: 4px;\n  box-shadow: ",";\n  display: grid;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 0;\n\n  & > * {\n    grid-area: 1/1;\n  }\n"])),(function(e){return e.theme.boxShadows.emptyDeck})),Wn=(f.b.div(fe||(fe=Object(y.a)(["\n  z-index: 1;\n"]))),function(e){var n,t=e.deckNo,r=e.deck,i=Object(h.useContext)(un).indicesOfSelectedCards,c=Object(h.useContext)(ln).hint;return"cards"in r&&(n=rn(r)),"cards"in r&&Object(w.jsx)(En.c,{droppableId:"deck".concat(t),children:function(e){return Object(w.jsxs)(Rn,Object(R.a)(Object(R.a)({ref:e.innerRef},e.droppableProps),{},{deckLength:r.cards.length,children:[Object(w.jsx)(Un,{children:Object(w.jsx)("svg",{"data-testid":"deneme",viewBox:"0 0 71 96"})}),r.cards.map((function(e,a){return Object(w.jsx)(Fn,{index:a,deckNo:t,cardNo:e,isClose:a<r.cards.length-r.visibleCardCount,isDragDisabled:a<n,isInSelectedCards:i.deckId==="deck".concat(t)&&i.items.slice(1).includes(a),isDestinationInHint:c.destinationDeckId==="deck".concat(t)&&c.destinationStartingIndex<=a,isSourceInHint:c.sourceDeckId==="deck".concat(t)&&c.sourceStartingIndex<=a},"deck".concat(t).concat(a))})),e.placeholder]}))}})}),Ln=j.a.memo(Wn),qn=f.b.div(Oe||(Oe=Object(y.a)(["\n  display: grid;\n  gap: 0.4vw;\n  grid-template-columns: repeat(10, 1fr);\n  justify-content: space-evenly;\n  padding: 0 0.9vw;\n\n  .card {\n    height: 100%;\n    width: auto;\n\n    img {\n      height: auto;\n      width: 100%;\n    }\n  }\n\n  @media (min-width: ",") {\n    grid-template-rows: 1fr;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet})),Jn=(f.b.div(we||(we=Object(y.a)(["\n  height: fit-content;\n"]))),function(){var e=Object(h.useContext)(an),n=e.cardDecks,t=e.gameStats,r=e.setGameStats,i=e.setCardDecks,c=Object(h.useContext)(un).setIndicesOfSelectedCards;return Object(w.jsx)(En.a,{onDragEnd:function(e){var a=e.source,o=e.destination;if((c({deckId:"",items:[]}),o)&&a.droppableId!==o.droppableId){var s=function(e,n,t){var r,i,c,a=n.index,o=n.droppableId,s=Object(R.a)({},e[o]),d=t.index,l=t.droppableId,b=Object(R.a)({},e[l]),u=s.cards.splice(a),g=b.cards[d-1],p=!1;0===d||u[0]===g+1?((i=b.cards).push.apply(i,Object(Ve.a)(u)),p=!0,s.visibleCardCount===u.length?s.visibleCardCount=1:s.visibleCardCount-=u.length,b.visibleCardCount+=u.length):(c=s.cards).push.apply(c,Object(Ve.a)(u));var h=b.cards.join().includes([1,2,3,4,5,6,7,8,9,10,11,12,13].join());return h&&(b.cards.splice(-13),b.visibleCardCount-=13===b.visibleCardCount?12:13),{newCardDecks:Object(R.a)(Object(R.a)({},e),{},(r={},Object(Ke.a)(r,o,s),Object(Ke.a)(r,l,b),r)),isThereACompletedDeck:h,isDragSuccessful:p}}(n,a,o),d=s.newCardDecks,l=s.isThereACompletedDeck;if(s.isDragSuccessful){var b=Object(R.a)({},t);b.moves+=1,b.score-=1,l&&(b.completedDeckCount+=1,b.score+=100),r(b),i(d)}}},onDragStart:function(e){var t=e.source,r=t.index,i=t.droppableId,a=Object(R.a)({},n[i]);c({deckId:i,items:Array.from({length:a.cards.length-r},(function(e,n){return n+r}))})},children:Object(w.jsx)(qn,{children:Array.from({length:10},(function(e,n){return n+1})).map((function(e){return Object(w.jsx)(Ln,{deckNo:e,deck:n["deck".concat(e)]},e)}))})})}),Yn=f.b.div(ve||(ve=Object(y.a)(["\n  width: 110px;\n  height: 100%;\n  display: inline-flex;\n\n  .card {\n    &:not(:first-child) {\n      margin-left: -30px;\n\n      @media (min-width: ",") {\n        margin-left: -62px;\n      }\n    }\n\n    img {\n      height: 100%;\n    }\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet})),Kn=function(e){var n=e.completedDeckCount;return Object(w.jsx)(Yn,{children:j.a.Children.toArray(Array(n).fill(Object(w.jsx)(Fn,{cardNo:1})))})},Vn=j.a.memo(Kn),Xn=f.b.div(ke||(ke=Object(y.a)(["\n  background-color: green;\n  border: 1px solid black;\n  color: white;\n  cursor: url(","), pointer;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  font-size: 0.5rem;\n  height: 100%;\n  justify-content: center;\n  margin: 0 10px;\n  max-width: 130px;\n  min-width: 100px;\n  padding: 7px;\n\n  @media (min-width: ",") {\n    font-size: 0.8rem;\n    max-width: 180px;\n  }\n"])),S,(function(e){return e.theme.breakpoints.smallTablet})),Qn=f.b.div(ye||(ye=Object(y.a)(["\n  background-color: green;\n  display: flex;\n  gap: 10px;\n  padding: 2px;\n\n  span {\n    display: inline-block;\n    width: 50%;\n\n    &:first-of-type {\n      text-align: right;\n    }\n  }\n"]))),Zn=function(e){var n=e.cardDecks,t=e.gameStats,r=e.setGameStats,i=Object(h.useContext)(ln).setHint,c=W("hint","no-hint"),a=Object(O.a)(c,2),o=a[0],s=a[1];return Object(w.jsxs)(Xn,{onClick:function(){var e=cn(n);if(e){o.play(),i({sourceDeckId:e.sourceDeckId,sourceStartingIndex:e.sourceStartingIndex,destinationDeckId:e.destinationDeckId,destinationStartingIndex:e.destinationStartingIndex});var c=Object(R.a)({},t);c.score-=10,r(c)}else s.play()},"data-cy":"hint-area",children:[Object(w.jsxs)(Qn,{children:[Object(w.jsx)("span",{children:"Score:"}),Object(w.jsx)("span",{"data-cy":"score-span",children:null===t||void 0===t?void 0:t.score})]}),Object(w.jsxs)(Qn,{children:[Object(w.jsx)("span",{children:"Moves:"}),Object(w.jsx)("span",{"data-cy":"moves-span",children:null===t||void 0===t?void 0:t.moves})]})]})},_n=j.a.memo(Zn),et=f.b.div(Ce||(Ce=Object(y.a)(["\n  cursor: ",";\n  display: inline-flex;\n  flex-direction: row-reverse;\n  height: 100%;\n  width: 110px;\n\n  .card {\n    &:not(:last-child) {\n      margin-left: -30px;\n\n      @media (min-width: ",") {\n        margin-left: -62px;\n      }\n    }\n\n    img {\n      height: 100%;\n    }\n  }\n"])),(function(e){return e.dealingDecksLength>0&&"url(".concat(S,"), pointer")}),(function(e){return e.theme.breakpoints.smallTablet})),nt=function(e){var n=e.setCardDecks,t=e.cardDecks,r=W("cannot-deal","deal"),i=Object(O.a)(r,2),c=i[0],a=i[1],o=Object(h.useContext)(an),s=o.dealingDecks,d=o.setDealingDecks;return Object(w.jsx)(et,{"data-cy":"deal-area",onClick:s.length?function(){a.play();var e=en(t,s,c),r=Object(O.a)(e,2),i=r[0],o=r[1];n(i),d(o)}:void 0,dealingDecksLength:s.length,children:j.a.Children.toArray(Array(s.length).fill(Object(w.jsx)(Fn,{isClose:!0})))})},tt=j.a.memo(nt),rt=f.b.div(Se||(Se=Object(y.a)(["\n  background-image: url(",");\n  background-size: fill;\n  display: grid;\n  grid-template-rows: 1fr 50px;\n  height: 100%;\n  padding: 10px;\n  position: relative;\n\n  @media (min-width: ",") {\n    grid-template-rows: 1fr 100px;\n    padding: 20px 30px;\n  }\n"])),"".concat("/spider-solitaire","/solitaire-background.webp"),(function(e){return e.theme.breakpoints.smallTablet})),it=f.b.div(Be||(Be=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  width: 100%;\n\n  @media (min-width: ",") {\n    height: 100px;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet})),ct=function(){var e=Object(h.useContext)(an),n=e.setDealingDecks,t=e.cardDecks,r=e.setCardDecks,i=e.gameStats,c=e.setGameStats;return Object(w.jsx)(gn,{children:Object(w.jsx)(bn,{children:Object(w.jsx)(Dn,{title:"Spider Solitaire",children:Object(w.jsxs)(rt,{children:[Object(w.jsx)(Jn,{cardDecks:t}),Object(w.jsxs)(it,{children:[Object(w.jsx)(Vn,{completedDeckCount:i.completedDeckCount}),Object(w.jsx)(_n,{cardDecks:t,gameStats:i,setGameStats:c}),Object(w.jsx)(tt,{setCardDecks:r,cardDecks:t})]}),8===i.completedDeckCount&&Object(w.jsx)(Hn,{setCardDecks:r,setDealingDecks:n,gameStats:i,setGameStats:c})]})})})})},at=Object(f.b)(I.Button)(De||(De=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n  gap: 5px;\n  line-height: 0.8rem;\n  text-align: center;\n  width: 70px;\n"]))),ot=function(){var e=Object(h.useContext)(sn).setIsGameRunning,n=function(){e(!0)};return Object(w.jsxs)(at,{"data-cy":"spider-solitaire-program",onDoubleClick:n,onTouchStart:n,children:[Object(w.jsx)("img",{src:Bn,alt:"",width:"40",height:"40"}),Object(w.jsx)("span",{children:"Spider Solitaire"})]})};function st(){var e=new Date,n=e.getHours(),t=e.getMinutes(),r=n>=12?"PM":"AM";return n=(n%=12)||12,t=t<10?"0".concat(t):t,"".concat(n,":").concat(t," ").concat(r)}var dt,lt,bt,ut,gt,pt,ht,jt=f.b.div(Ie||(Ie=Object(y.a)(["\n  align-items: center;\n  background: ",";\n  border-left: 3px solid rgb(16, 66, 175);\n  color: ",";\n  display: flex;\n  font-size: 0.65rem;\n  gap: 5px;\n  height: 100%;\n  padding: 4px 15px 3px 10px;\n  width: fit-content;\n"])),(function(e){return e.theme.gradients.toolbarBg}),(function(e){return e.theme.colors.toolbarText})),xt=t.p+"static/media/msn-icon.75a562a3.webp",mt=function(){var e=Object(h.useState)(st()),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(h.useEffect)((function(){var e=setInterval((function(){return r(st())}),3e4);return function(){clearInterval(e)}}),[]),Object(w.jsxs)(jt,{children:[Object(w.jsx)("img",{src:xt,alt:"msn icon",width:"32",height:"21"}),Object(w.jsx)("span",{children:t})]})},ft=f.b.section(dt||(dt=Object(y.a)(["\n  background: ",";\n  display: flex;\n  height: 35px;\n  overflow: hidden;\n"])),(function(e){return e.theme.gradients.taskbarBg})),Ot=Object(f.b)(I.Button)(lt||(lt=Object(y.a)(["\n  &:hover {\n    filter: brightness(105%);\n  }\n  img {\n    height: 100%;\n  }\n"]))),wt=f.b.div(bt||(bt=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  gap: 1px;\n  padding-left: 20px;\n  padding-top: 4px;\n"]))),vt=Object(f.b)(I.Button)(ut||(ut=Object(y.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 2px;\n  box-shadow: ",";\n  display: flex;\n  gap: 3px;\n  height: 65%;\n  max-width: 120px;\n  min-width: 100px;\n  padding: 4px 8px;\n  width: 40%;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  span {\n    font-size: 0.55rem;\n    line-height: 0.6rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])),(function(e){return e.theme.colors.taskBg}),(function(e){return e.theme.boxShadows.task}),(function(e){return e.theme.colors.taskBg$hover})),kt=t.p+"static/media/winxp-start-button.1f1eee78.webp",yt=function(){var e=Object(h.useContext)(sn).isGameRunning;return Object(w.jsxs)(ft,{children:[Object(w.jsx)(Ot,{children:Object(w.jsx)("img",{src:kt,alt:"win xp start",height:"35",width:"110"})}),Object(w.jsx)(wt,{children:e&&Object(w.jsxs)(vt,{children:[Object(w.jsx)("img",{src:Bn,alt:"solitaire icon",width:"15",height:"15"}),Object(w.jsx)("span",{children:"Spider Solitaire"})]})}),Object(w.jsx)(mt,{})]})},Ct=f.b.div(gt||(gt=Object(y.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n"])),"".concat("/spider-solitaire","/winxp-background.webp")),St=f.b.main(pt||(pt=Object(y.a)(["\n  height: calc(100% - 35px);\n"]))),Bt=f.b.div(ht||(ht=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 40px;\n"]))),Dt=function(){var e=Object(h.useContext)(sn).isGameRunning;return Object(w.jsxs)(Ct,{children:[Object(w.jsx)(St,{children:e?Object(w.jsx)(on,{children:Object(w.jsx)(ct,{})}):Object(w.jsx)(Bt,{children:Object(w.jsx)(ot,{})})}),Object(w.jsx)(yt,{})]})};var It=function(){var e=Object(h.useContext)(v).isUserSelected;return Object(w.jsx)("div",{id:"app",children:e?Object(w.jsx)(dn,{children:Object(w.jsx)(Dt,{})}):Object(w.jsx)(Ye,{})})};t(33);console.log("%cHi, I'm Enes. Welcome to my project. You can find more at https://enesbaspinar.me. Oh by the way, feel free to look at my CV :)","background: #222; color: #bada55; padding: 4px;"),m.a.render(Object(w.jsx)(j.a.StrictMode,{children:Object(w.jsx)(k,{children:Object(w.jsx)(f.a,{theme:D,children:Object(w.jsx)(It,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0d79aae6.chunk.js.map