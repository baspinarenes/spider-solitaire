(this["webpackJsonpspider-solitaire"]=this["webpackJsonpspider-solitaire"]||[]).push([[0],{33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var i,r,c,a,o,s,d,l,b,u,g,p,h,j,x=t(0),m=t.n(x),f=t(6),O=t.n(f),w=t(2),v=t(4),k=t(1),y=Object(x.createContext)(),C=function(e){var n=e.children,t=Object(x.useState)({username:""}),i=Object(v.a)(t,2),r=i[0],c=i[1],a=Object(x.useState)(!1),o=Object(v.a)(a,2),s=o[0],d=o[1];return Object(x.useEffect)((function(){var e=sessionStorage.getItem("user");e&&"Guest"!==e.username&&c(JSON.parse(e))}),[]),Object(x.useEffect)((function(){sessionStorage.setItem("user",JSON.stringify(r))}),[r]),Object(k.jsx)(y.Provider,{value:{user:r,setUser:c,isUserSelected:s,setIsUserSelected:d},children:n})},S=t(3),B=t.p+"static/media/normal.85d4fca4.cur",D=t.p+"static/media/clickable.8631aaab.cur",I={whiteA03:"rgba(255, 255, 255, 0.3)",white:"rgb(255, 255, 255)",yellow:"rgb(255,255,0)",black:"rgb(0,0,0)",lightBlue:"rgb(83, 163, 255)",blue:"rgb(80, 143, 217)",darkBlue:"rgb(49, 106, 197)",navyBlue:"rgb(0, 77, 163)",orange:"rgb(240, 150, 68)",beige:"rgb(236, 233, 216)",pink:"rgb(255, 38, 231)",aqua:"rgb(0, 171, 246)",transparent:"transparent",green:"rgb(0,128,0)",brightGreen:"#00DB02"},G={colors:{taskBg:I.blue,loginScreenText:I.white,loginScreenHeaderBg:I.navyBlue,loginScreenFooterText:I.white,loginScreenFooterBg:I.navyBlue,loginScreenTextColor:I.white,buttonBg:I.white,buttonText:I.black,xpWindowBg:I.beige,titleBarText:I.white,hintAreaBg:I.green,hintAreaText:I.white,subMenuButtonText:I.black,subMenuButtonText$hover:I.white,subMenuButtonBg$hover:I.darkBlue,menuButtonText:I.black,menuButtonBg$hover:I.darkBlue,menuButtonText$hover:I.white,menuBg:I.beige,menuBarBg:I.beige,toolbarText:I.white,taskBg$hover:I.lightBlue,loaderBorder:I.white,splashScreenText:I.white,splashScreenBg:I.black,loginAccountInputText:I.white,loginAccountInputBg:I.transparent,loginAccountText:I.white,loginAccountBorder$hover:I.yellow},gradients:{barBg:"\n      linear-gradient(\n        to bottom,\n        #222e9d,\n        #3043d5,\n        #5f80fc,\n        #6f8dfd,\n        #859ffe,\n        #8da6ff,\n        #5b7af9,\n        #3346d7,\n        #2d3ed2\n      )\n    ",loginScreenFooterBorderColor:"\n      linear-gradient(\n        90deg,\n        ".concat(I.navyBlue," 0%,\n        ").concat(I.orange," 50%,\n        ").concat(I.navyBlue," 100%\n      )\n    "),loginScreenHeaderBorderColor:"\n      linear-gradient(\n        90deg,\n        transparent 0%,\n        rgba(255, 255, 255, 0.8) 30%,\n        rgba(255, 255, 255, 0.9) 50%,\n        rgba(255, 255, 255, 0.8) 70%,\n        transparent 100%\n      )\n    ",loginScreenMiddleBorderColor:"\n      linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0) 5%,\n        rgba(255, 255, 255, 0.5) 15%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0.5) 85%,\n        rgba(255, 255, 255, 0) 95%,\n        rgba(255, 255, 255, 0) 100%\n      )\n    ",titleBarBg:"\n      linear-gradient(\n        180deg,\n        rgba(9, 151, 255, 1) 0%,\n        rgba(0, 83, 238, 1) 8%,\n        rgba(0, 80, 238, 1) 40%,\n        rgba(0, 102, 255, 1) 88%,\n        rgba(0, 102, 255, 1) 93%,\n        rgba(0, 91, 255, 1) 95%,\n        rgba(0, 61, 215, 1) 96%,\n        rgba(0, 61, 215, 1) 100%\n      )\n    ",loginScreenMainBg:"\n      linear-gradient(\n        130deg,\n        rgba(221, 221, 221, 1) 0%,\n        rgba(80, 143, 217, 1) 35%,\n        rgba(80, 143, 217, 1) 100%\n      )\n    ",toolbarBg:"\n      linear-gradient(\n        rgb(12, 89, 185) 1%,\n        rgb(19, 158, 233) 6%,\n        rgb(24, 181, 242) 10%,\n        rgb(19, 155, 235) 14%,\n        rgb(18, 144, 232) 19%,\n        rgb(13, 141, 234) 63%,\n        rgb(13, 159, 241) 81%,\n        rgb(15, 158, 237) 88%,\n        rgb(17, 155, 233) 91%,\n        rgb(19, 146, 226) 94%,\n        rgb(19, 126, 215) 97%,\n        rgb(9, 91, 201) 100%\n      )\n    ",taskbarBg:"\n      linear-gradient(\n        rgb(31, 47, 134) 0px,\n        rgb(49, 101, 196) 3%,\n        rgb(54, 130, 229) 6%,\n        rgb(68, 144, 230) 10%,\n        rgb(56, 131, 229) 12%,\n        rgb(43, 113, 224) 15%,\n        rgb(38, 99, 218) 18%,\n        rgb(35, 91, 214) 20%,\n        rgb(34, 88, 213) 23%,\n        rgb(33, 87, 214) 38%,\n        rgb(36, 93, 219) 54%,\n        rgb(37, 98, 223) 86%,\n        rgb(36, 95, 220) 89%,\n        rgb(33, 88, 212) 92%,\n        rgb(29, 78, 192) 95%,\n        rgb(25, 65, 165) 98%\n      )\n    "},keyFrames:{loadingKeyFrame:Object(w.d)(i||(i=Object(S.a)(["\n      0% {\n        transform: translate(-40px);\n      }\n      100% {\n        transform: translate(200px);\n      }\n    "]))),colorChange:Object(w.d)(r||(r=Object(S.a)(["\n      0% {\n        color: ",";\n      }\n      20% {\n        color: ",";\n      }\n      40% { \n        color: ",";\n      }\n      60% { \n        color: ","; \n      }\n      80% { \n        color: ","; \n      }\n      100% { \n        color: ","; \n      }\n    "])),I.red,I.yellow,I.brightGreen,I.aqua,I.navyBlue,I.pink)},boxShadows:{emptyDeck:"inset 0 0 0 2px ".concat(I.white),task:"".concat(I.black," 1px 0px 1px, ").concat(I.whiteA03," 1px 1px 1px inset"),windowButton$hover:"".concat(I.orange," 0px 0px 0px 1px inset"),windowButton$active:"".concat(I.blue," 0px 0px 0px 1px inset")},breakpoints:{smallTablet:"600px"}},T={Button:w.c.button(c||(c=Object(S.a)(["\n    background: transparent;\n    border: 0;\n    color: white;\n\n    &:hover {\n      cursor: url(","), auto;\n    }\n  "])),D),Screen:w.c.div(a||(a=Object(S.a)(["\n    height: 100%;\n    cursor: url(","), auto;\n    overflow: hidden;\n  "])),B)},z=Object(w.c)(T.Screen)(o||(o=Object(S.a)(["\n  background-color: ",";\n  padding: 7px 33px;\n  color: ",";\n  cursor: none;\n"])),(function(e){return e.theme.colors.splashScreenBg}),(function(e){return e.theme.colors.splashScreenText})),A=w.c.main(s||(s=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  // main = fullHeight - footer - top and bottom padding\n  height: calc(100% - 60px - 14px);\n  justify-content: center;\n"]))),F=w.c.img(d||(d=Object(S.a)(["\n  margin-bottom: 70px;\n  max-width: 300px;\n  width: 50vw;\n"]))),M=w.c.div(l||(l=Object(S.a)(["\n  border: 1px solid ",";\n  border-radius: 5px;\n  height: 20px;\n  overflow: hidden;\n  padding: 2px 1px;\n  width: 200px;\n"])),(function(e){return e.theme.colors.loaderBorder})),$=w.c.div(b||(b=Object(S.a)(["\n  align-items: center;\n  animation: "," 2s\n    linear infinite;\n  display: flex;\n  gap: 3px;\n  height: 100%;\n"])),(function(e){return e.theme.keyFrames.loadingKeyFrame})),E=w.c.div(u||(u=Object(S.a)(["\n  background: ",";\n  height: 100%;\n  width: 10px;\n"])),(function(e){return e.theme.gradients.barBg})),H=w.c.footer(g||(g=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 0.7em;\n  height: 60px;\n  justify-content: space-between;\n"]))),W=w.c.img(p||(p=Object(S.a)(["\n  filter: invert(100%); // black logo -> white logo\n  height: 60px;\n"]))),P=t.p+"static/media/winxp-logo.9dee7f33.webp",R=t.p+"static/media/microsoft-logo.63a04c35.webp",U=function(){return Object(k.jsxs)(z,{children:[Object(k.jsxs)(A,{children:[Object(k.jsx)(F,{src:P,width:"300",height:"205",alt:"windows xp logo"}),Object(k.jsx)(M,{children:Object(k.jsxs)($,{children:[Object(k.jsx)(E,{}),Object(k.jsx)(E,{}),Object(k.jsx)(E,{})]})})]}),Object(k.jsxs)(H,{children:[Object(k.jsx)("span",{children:"Copyright \xa9 Microsoft Corporation"}),Object(k.jsx)(W,{src:R,width:"120",height:"60",alt:"microsoft logo"})]})]})},N=t(5),q=t.p+"static/media/account-image.b872599f.webp",J=t.p+"static/media/cannot-clickable.82628c61.cur",K=t.p+"static/media/beam.80b9bea2.cur",Y=Object(w.c)(T.Button)(h||(h=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  opacity: 0.6;\n  color: white;\n  font-size: 1.3rem;\n\n  &:hover {\n    opacity: 1;\n    transition: opacity 400ms;\n\n    cursor: ",";\n  }\n\n  input {\n    background: transparent;\n    border: 0;\n    height: 30px;\n    outline: 0;\n    font-size: 1.3rem;\n    color: white;\n\n    &:hover {\n      cursor: url(","), pointer;\n    }\n  }\n\n  &:nth-child(2) {\n    display: none;\n  }\n\n  @media (min-width: 600px) {\n    &:nth-child(2) {\n      display: flex;\n    }\n  }\n"])),(function(e){return!e.$isGuest&&!e.$isUsernameWritten&&"url(".concat(J,"), pointer")}),K),L=w.c.img(j||(j=Object(S.a)(["\n  height: 60px;\n  width: 60px;\n  border: 2px solid white;\n  border-radius: 5px;\n\n  &:hover {\n    border-color: yellow;\n  }\n"]))),V={"cannot-deal":t.p+"static/media/cannot-deal.c73ea08a.ogg",deal:t.p+"static/media/deal.55b04c16.ogg",hint:t.p+"static/media/hint.a3cb1791.ogg","mouse-down":t.p+"static/media/mouse-down.76ee1488.ogg","mouse-up":t.p+"static/media/mouse-up.f3d8384f.ogg","no-hint":t.p+"static/media/no-hint.08835341.ogg",opening:t.p+"static/media/opening.06e92163.ogg",shutdown:t.p+"static/media/shutdown.dddbce6a.ogg",win:t.p+"static/media/win.6c8a4ec5.ogg"};function X(){for(var e=[],n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return t.forEach((function(n){e.push(new Audio(V[n]))})),e}var Q,Z,_,ee,ne,te,ie,re,ce,ae,oe,se,de,le,be,ue,ge,pe,he,je,xe,me,fe,Oe,we,ve,ke,ye,Ce,Se,Be,De,Ie,Ge=function(e){var n=e.isGuest,t=Object(x.useContext)(y),i=t.user,r=t.setUser,c=t.setIsUserSelected,a=Object(x.useState)(i.username),o=Object(v.a)(a,2),s=o[0],d=o[1],l=X("opening"),b=Object(v.a)(l,1)[0],u=function(e){e.preventDefault(),r(n?Object(N.a)(Object(N.a)({},i),{},{username:"Guest"}):Object(N.a)(Object(N.a)({},i),{},{username:s})),c(!0),b.play()};return Object(k.jsxs)(Y,{$isGuest:n,$isUsernameWritten:s&&"Guest"!==s,onClick:u,disabled:!n&&"Guest"===s&&""!==s,children:[Object(k.jsx)(L,{src:q,alt:"avatar",width:"60",height:"60"}),n?Object(k.jsx)("span",{children:"Guest"}):Object(k.jsx)("input",{type:"text",placeholder:"Or write your username",value:"Guest"===s?"":s,onClick:function(e){e.stopPropagation()},onChange:function(e){d(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&u(e)}})]})},Te=Object(w.c)(T.Screen)(Q||(Q=Object(S.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.loginScreenTextColor})),ze=w.c.header(Z||(Z=Object(S.a)(["\n  background-color: ",";\n  border-bottom: 3px solid;\n  border-image-slice: 1;\n  border-image-source: ",";\n  height: 90px;\n"])),(function(e){return e.theme.colors.loginScreenHeaderBg}),(function(e){return e.theme.gradients.loginScreenHeaderBorderColor})),Ae=w.c.main(_||(_=Object(S.a)(["\n  background: ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2fr 1fr;\n  // main = fullHeight - header - footer\n  height: calc(100% - 90px - 130px);\n  padding: 20px;\n\n  @media (min-width: ",") {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n"])),(function(e){return e.theme.gradients.loginScreenMainBg}),(function(e){return e.theme.breakpoints.smallTablet})),Fe=w.c.section(ee||(ee=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  font-size: 1.9rem;\n\n  @media (min-width: ",") {\n    padding-right: 60px;\n    border-right: 1px solid;\n    border-image-source: ",";\n    border-image-slice: 0 1 0 0;\n    align-items: flex-end;\n  }\n\n  img {\n    width: 200px;\n  }\n\n  span {\n    font-size: 1.3rem;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet}),(function(e){return e.theme.gradients.loginScreenMiddleBorderColor})),Me=w.c.section(ne||(ne=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  width: minmax(70vw, 90vw);\n  margin: 0 auto;\n\n  @media (min-width: ",") {\n    padding-left: 30px;\n    width: 100%;\n  }\n"])),(function(e){return e.theme.breakpoints.smallTablet})),$e=w.c.footer(te||(te=Object(S.a)(["\n  align-items: center;\n  background-color: ",";\n  border-image-slice: 1;\n  border-image-source: ",";\n  border-top: 3px solid;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n  gap: 10px;\n  height: 130px;\n  padding: 20px 50px;\n  text-align: center;\n\n  p {\n    max-width: 450px;\n  }\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    gap: 30px;\n    justify-content: space-between;\n    text-align: initial;\n  }\n"])),(function(e){return e.theme.colors.loginScreenFooterBg}),(function(e){return e.theme.gradients.loginScreenFooterBorderColor}),(function(e){return e.theme.breakpoints.smallTablet})),Ee=Object(w.c)(T.Button)(ie||(ie=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  img {\n    width: 25px;\n    height: 25px;\n  }\n\n  span {\n    font-size: 1rem;\n  }\n"]))),He=t.p+"static/media/winxp-shutdown.5a2ac0c4.webp",We=t.p+"static/media/winxp-logo2.928167b6.webp",Pe=function(){var e=X("shutdown"),n=Object(v.a)(e,1)[0];return Object(k.jsxs)(Te,{children:[Object(k.jsx)(ze,{}),Object(k.jsxs)(Ae,{children:[Object(k.jsxs)(Fe,{children:[Object(k.jsx)("img",{src:We,alt:"windows xp logo",width:"200",height:"118"}),Object(k.jsx)("span",{children:"To begin, select your user"})]}),Object(k.jsxs)(Me,{children:[Object(k.jsx)(Ge,{isGuest:!0}),Object(k.jsx)(Ge,{})]})]}),Object(k.jsxs)($e,{children:[Object(k.jsx)("div",{children:Object(k.jsxs)(Ee,{onClick:function(){return n.play()},children:[Object(k.jsx)("img",{src:He,alt:"shutdown icon",height:"25",width:"25"}),Object(k.jsx)("span",{children:"Turn off computer"})]})}),Object(k.jsx)("p",{children:"This XP cannot be turned off. After all these years we have been away, we wouldnt want to close, would we? But out of respect for you, I will play a shutdown sound."})]})]})},Re=Object(w.c)(T.Screen)(re||(re=Object(S.a)([""]))),Ue=function(){var e=Object(x.useState)(!0),n=Object(v.a)(e,2),t=n[0],i=n[1];return Object(x.useEffect)((function(){setTimeout((function(){i(!1)}),2500)}),[]),Object(k.jsx)(Re,{children:t?Object(k.jsx)(U,{}):Object(k.jsx)(Pe,{})})},Ne=t(11),qe=t(9),Je={0:t.p+"static/media/card-back.205fe8c2.webp",1:t.p+"static/media/1.9ff91e18.webp",2:t.p+"static/media/2.b1c765e0.webp",3:t.p+"static/media/3.2321343a.webp",4:t.p+"static/media/4.5244efb4.webp",5:t.p+"static/media/5.ddd891be.webp",6:t.p+"static/media/6.c0c31eb5.webp",7:t.p+"static/media/7.d4d42486.webp",8:t.p+"static/media/8.8e0ab8b0.webp",9:t.p+"static/media/9.4258b064.webp",10:t.p+"static/media/10.4f33b091.webp",11:t.p+"static/media/11.4aaeca48.webp",12:t.p+"static/media/12.a1614c7e.webp",13:t.p+"static/media/13.69318912.webp"},Ke={back:0,ace:1,two:2,three:3,four:4,five:5,siv:6,seven:7,eight:8,nine:9,ten:10,jack:11,queen:12,king:13},Ye={ace:8,two:8,three:8,four:8,five:8,siv:8,seven:8,eight:8,nine:8,ten:8,jack:8,queen:8,king:8},Le=function(e){for(var n=Object(qe.a)(e),t=n.length-1;t>0;t-=1){var i=Math.floor(Math.random()*(t+1)),r=[n[i],n[t]];n[t]=r[0],n[i]=r[1]}return n},Ve=function(e,n,t){var i=Object(N.a)({},e),r=Object(qe.a)(n);if(Object.values(i).every((function(e){return e.cards.length>0}))){var c=r.pop();c&&Object.entries(i).forEach((function(e){var n=Object(v.a)(e,2)[1];n.cards.push(c.shift()),n.visibleCardCount+=1}))}else t.play();return[Object(N.a)({},i),Object(qe.a)(r)]},Xe=function(){var e=Object.entries(Ye).map((function(e){var n=Object(v.a)(e,2),t=n[0],i=n[1];return Array(i).fill(Ke[t])})).flat(),n=Le(e);return[{deck1:{cards:n.slice(0,6),visibleCardCount:1},deck2:{cards:n.slice(6,12),visibleCardCount:1},deck3:{cards:n.slice(12,18),visibleCardCount:1},deck4:{cards:n.slice(18,24),visibleCardCount:1},deck5:{cards:n.slice(24,29),visibleCardCount:1},deck6:{cards:n.slice(29,34),visibleCardCount:1},deck7:{cards:n.slice(34,39),visibleCardCount:1},deck8:{cards:n.slice(39,44),visibleCardCount:1},deck9:{cards:n.slice(44,49),visibleCardCount:1},deck10:{cards:n.slice(49,54),visibleCardCount:1}},[n.slice(54,64),n.slice(64,74),n.slice(74,84),n.slice(84,94),n.slice(94,104)]]},Qe=function(){return Xe()},Ze=function(e){for(var n,t,i=e.cards.length-e.visibleCardCount,r=i,c=i;c<e.cards.length;c+=1)t=e.cards[c],(n=e.cards[c+1])&&t+1!==n&&(r=c+1);return r},_e=function(e){for(var n=function(e){var n=[];return Object.entries(e).forEach((function(e){var t=Object(v.a)(e,2)[1];n.push({startingIndex:Ze(t),cards:t.cards.slice(Ze(t))})})),n}(e),t=[],i=0;i<n.length;i+=1)for(var r=n[i],c=0;c<r.cards.length;c+=1)for(var a=0;a<n.length;a+=1){var o=n[a];(r.cards.slice(c).at(0)===o.cards.at(-1)+1&&r.cards.at(c-1)!==o.cards.at(-1)||r.cards.slice(c).at(0)===o.cards.at(-1)+1&&o.cards.length>c)&&t.push({sourceDeckId:"deck".concat(i+1),destinationDeckId:"deck".concat(a+1),sourceStartingIndex:r.startingIndex+c,destinationStartingIndex:o.startingIndex})}return Le(t)[0]},en=Object(x.createContext)(),nn=function(e){var n=e.children,t=Object(x.useState)({deck1:{},deck2:{},deck3:{},deck4:{},deck5:{},deck6:{},deck7:{},deck8:{},deck9:{},deck10:{}}),i=Object(v.a)(t,2),r=i[0],c=i[1],a=Object(x.useState)([]),o=Object(v.a)(a,2),s=o[0],d=o[1],l=Object(x.useState)(!1),b=Object(v.a)(l,2),u=b[0],g=b[1],p=Object(x.useState)({deckId:"",items:[]}),h=Object(v.a)(p,2),j=h[0],m=h[1],f=Object(x.useState)({completedDeckCount:0,score:500,moves:0}),O=Object(v.a)(f,2),w=O[0],y=O[1],C=Object(x.useState)({}),S=Object(v.a)(C,2),B=S[0],D=S[1];return Object(x.useEffect)((function(){Object.keys(B).length>0&&setTimeout((function(){D({})}),1500)}),[B]),Object(x.useEffect)((function(){var e=Xe(),n=Object(v.a)(e,2),t=n[0],i=n[1];c(t),d(i)}),[]),Object(k.jsx)(en.Provider,{value:{cardDecks:r,setCardDecks:c,isAnyDragging:u,setIsAnyDragging:g,selectedCards:j,setSelectedCards:m,dealingDecks:s,setDealingDecks:d,gameStats:w,setGameStats:y,hint:B,setHint:D},children:n})},tn=Object(x.createContext)(),rn=function(e){var n=e.children,t=Object(x.useState)(!1),i=Object(v.a)(t,2),r=i[0],c=i[1];return Object(k.jsx)(tn.Provider,{value:{isGameRunning:r,setIsGameRunning:c},children:n})},cn=t(7),an=t.p+"static/media/close.b5796a71.svg",on=t.p+"static/media/close-hover.ac0a6081.svg",sn=t.p+"static/media/close-active.4f1a7f52.svg",dn=w.c.div(ce||(ce=Object(S.a)(["\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 30px 20px 1fr;\n  z-index: 2;\n  background-color: ",";\n\n  ","\n"])),(function(e){return e.theme.colors.xpWindowBg}),(function(e){return e.isGameOverWindow&&Object(w.b)(ae||(ae=Object(S.a)(["\n      height: ",";\n      width: ",";\n      left: 0;\n      right: 0;\n      bottom: 10px;\n      position: absolute;\n      margin: 0 auto;\n      display: ",";\n      grid-template-rows: 30px 1fr;\n    "])),null===e||void 0===e?void 0:e.size.height,null===e||void 0===e?void 0:e.size.width,!e.isGameFinished&&"none")})),ln=w.c.div(oe||(oe=Object(S.a)(["\n  font-family: 'Trebuchet MS';\n  background: ",";\n  font-size: 13px;\n  padding: 6px;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  img {\n    height: 100%;\n  }\n"])),(function(e){return e.theme.gradients.titleBarBg}),(function(e){return e.theme.colors.titleBarText})),bn=Object(w.c)(T.Button)(se||(se=Object(S.a)(["\n  margin-left: auto;\n  width: 23px;\n  height: 23px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n\n  &:hover {\n    background-image: url(",");\n  }\n\n  &:not(:disabled):active {\n    background-image: url(",");\n  }\n"])),an,on,sn),un=w.c.div(de||(de=Object(S.a)(["\n  height: 100%;\n"]))),gn=t.p+"static/media/solitaire-icon.949145f2.webp",pn=w.c.div(le||(le=Object(S.a)(["\n  background-color: #ece9d8;\n  display: flex;\n  font-size: 11px;\n"]))),hn=w.c.div(be||(be=Object(S.a)(["\n  padding: 3px 5px;\n  display: flex;\n  position: relative;\n\n  &:hover {\n    background-color: #316ac5;\n\n    & > button {\n      color: white;\n    }\n\n    div {\n      display: flex;\n    }\n  }\n"]))),jn=Object(w.c)(T.Button)(ue||(ue=Object(S.a)(["\n  font-size: 11px;\n  text-align: left;\n  color: black;\n\n  :hover + div {\n    display: flex;\n  }\n"]))),xn=w.c.div(ge||(ge=Object(S.a)(["\n  display: none;\n  position: absolute;\n  z-index: 5;\n  top: 20px;\n  left: 0;\n  background-color: white;\n  border: 1px solid gray;\n  width: 200px;\n  padding: 1px;\n  flex-direction: column;\n"]))),mn=Object(w.c)(T.Button)(pe||(pe=Object(S.a)(["\n  color: black;\n  padding: 2px 2px 4px 12px;\n  font-size: 11px;\n  width: 100%;\n  text-align: left;\n\n  &:hover {\n    background-color: #316ac5;\n    color: white;\n  }\n"]))),fn=function(){var e=Object(x.useContext)(en),n=e.cardDecks,t=e.setCardDecks,i=e.dealingDecks,r=e.setDealingDecks,c=(e.setGameStats,X("cannot-deal","deal")),a=Object(v.a)(c,2),o=a[0],s=a[1];return Object(k.jsxs)(pn,{children:[Object(k.jsxs)(hn,{children:[Object(k.jsx)(jn,{children:"Game"}),Object(k.jsx)(xn,{children:Object(k.jsx)(mn,{onClick:function(){Qe()},children:"New Game"})})]}),Object(k.jsx)(hn,{children:Object(k.jsx)(jn,{onClick:function(){s.play();var e=Ve(n,i,o),c=Object(v.a)(e,2),a=c[0],d=c[1];t(a),r(d)},children:"Deal!"})})]})},On=function(e){var n=e.children,t=e.title,i=e.isGameOverWindow,r=e.size,c=e.isGameFinished,a=Object(x.useContext)(tn).setIsGameRunning;return Object(k.jsxs)(dn,{size:r,isGameOverWindow:i,isGameFinished:c,children:[Object(k.jsxs)(ln,{children:[!i&&Object(k.jsx)("img",{src:gn,alt:"solitaire icon"}),Object(k.jsx)("span",{children:t}),Object(k.jsx)(bn,{onClick:function(){a(!1)}})]}),!i&&Object(k.jsx)(fn,{}),Object(k.jsx)(un,{children:n})]})},wn=w.c.div(he||(he=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n  font-weight: bold;\n  animation: "," 10s\n    infinite;\n"])),(function(e){return e.isGameFinished?"flex":"none"}),(function(e){return e.theme.keyFrames.colorChange})),vn=w.c.div(je||(je=Object(S.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.6rem;\n  text-align: center;\n  margin-top: 10px;\n\n  p {\n    line-height: 0.9rem;\n  }\n\n  button {\n    font-size: 0.55rem;\n    color: ",";\n    background-color: ",";\n    width: 60px;\n    height: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    margin: 0 auto;\n\n    &:hover {\n      box-shadow: ",";\n    }\n\n    &:active {\n      box-shadow: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.xpWindowBg}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.colors.buttonBg}),(function(e){return e.theme.boxShadows.windowButton$hover}),(function(e){return e.theme.boxShadows.windowButton$active})),kn=function(e){var n=e.setCardDecks,t=e.setDealingDecks,i=e.gameStats,r=e.setGameStats,c=Object(x.useContext)(y).user,a=Object(x.useState)(!1),o=Object(v.a)(a,2),s=o[0],d=o[1],l=X("win"),b=Object(v.a)(l,1)[0];return 8===i.completedDeckCount&&(b.play(),d(!0)),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(wn,{isGameFinished:s,children:Object(k.jsx)("span",{children:"You Won!"})}),Object(k.jsx)(On,{title:"Game Over",isGameOverWindow:!0,size:{height:"140px",width:"320px"},isGameFinished:s,children:Object(k.jsxs)(vn,{children:[Object(k.jsxs)("p",{children:["Congratulations ",c.username,",",Object(k.jsx)("br",{})," you won with"," ",i.score," points in ",i.moves," moves!"]}),Object(k.jsx)("p",{children:" Do you want to start another game?"}),Object(k.jsx)("button",{type:"button",onClick:function(){d(!1);var e=Qe(),i=Object(v.a)(e,2),c=i[0],a=i[1];n(c),t(a),r({completedDeckCount:0,score:500,moves:0})},children:"Yes"})]})})]})},yn=m.a.memo(kn),Cn=w.c.div(xe||(xe=Object(S.a)(["\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n\n  justify-content: space-evenly;\n  gap: 1px;\n\n  .card {\n    height: 100%;\n    width: auto;\n\n    img {\n      height: auto;\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 500px) {\n    grid-template-columns: repeat(10, min(9%, 71px));\n    grid-template-rows: 1fr;\n    gap: 10px;\n  }\n"]))),Sn=m.a.forwardRef((function(e,n){var t=e.isClose,i=e.cardId;return Object(k.jsx)("div",{className:"card",ref:n,children:Object(k.jsx)("img",{draggable:!1,src:t?Je[0]:Je[i],alt:"card"})})})),Bn=m.a.memo(Sn),Dn=w.c.div(me||(me=Object(S.a)(["\n  display: grid;\n  grid-template-rows: repeat(27, min(16px, 2.5vw));\n  max-width: 71px;\n  position: relative;\n\n  .empty-border {\n    position: absolute;\n    box-shadow: inset 0 0 0 2px white;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 6.3vw;\n    z-index: 0;\n    border-radius: 4px;\n  }\n\n  div {\n    z-index: 1;\n  }\n\n  @media (min-width: 500px) {\n    grid-template-rows: repeat(\n      ",",\n      min(17px, 3vh)\n    );\n  }\n"])),(function(e){return e.deckLength+5})),In=m.a.forwardRef((function(e,n){var t,i=e.deckId,r=e.deck,c=Object(x.useContext)(en),a=c.selectedCards,o=c.hint,s=X("mouse-down"),d=Object(v.a)(s,1)[0],l=function(e){e.preventDefault(),d.play()};function b(e,n,t,i){return n.isDropAnimating?Object(N.a)(Object(N.a)({},e),{},{transitionDuration:"0.001s"}):n.isDragging?e:a.deckId===t&&a.items.includes(i)?Object(N.a)(Object(N.a)({},e),{},{display:"none",transform:"none"}):Object(N.a)(Object(N.a)({},e),{},{transform:"none",filter:o.sourceDeckId===t&&o.sourceStartingIndex<=i||o.destinationDeckId===t&&o.destinationStartingIndex<=i?"invert(100%)":"",transition:o.destinationDeckId===t&&o.destinationStartingIndex<=i?"filter 150ms 150ms":""})}return"cards"in r&&(t=Ze(r)),"cards"in r&&Object(k.jsxs)(Dn,{ref:n,deckLength:r.cards.length,children:[Object(k.jsx)("div",{className:"empty-border"}),r.cards.map((function(e,n){return Object(k.jsx)(cn.b,{draggableId:"deck".concat(i).concat(n),index:n,isDragDisabled:n<t,children:function(c,a){return Object(k.jsx)("div",Object(N.a)(Object(N.a)(Object(N.a)({role:"none",ref:c.innerRef},c.draggableProps),c.dragHandleProps),{},{style:b(c.draggableProps.style,a,"deck".concat(i),n),onMouseDown:n>=t?l:void 0,children:Object(k.jsx)(Bn,{deckId:i,cardId:e,isClose:n<r.cards.length-r.visibleCardCount})}))}},"deck".concat(i).concat(n))}))]})})),Gn=function(e){var n=e.cardDecks;return Object(k.jsx)(Cn,{children:Array.from({length:10},(function(e,n){return n+1})).map((function(e){return Object(k.jsx)(cn.c,{droppableId:"deck".concat(e),children:function(t){return Object(k.jsxs)("div",Object(N.a)(Object(N.a)({ref:t.innerRef},t.droppableProps),{},{style:{height:"fit-content"},children:[Object(k.jsx)(In,{deckId:e,deck:n["deck".concat(e)]}),t.placeholder]}))}},"deck".concat(e))}))})},Tn=m.a.memo(Gn),zn=w.c.div(fe||(fe=Object(S.a)(["\n  position: relative;\n  height: 100%;\n  padding: 10px;\n  background-image: url(",");\n  background-size: cover;\n  display: grid;\n  grid-template-rows: 1fr 50px;\n\n  @media (min-width: 500px) {\n    padding: 20px 30px;\n    grid-template-rows: 1fr 100px;\n  }\n"])),"".concat("/spider-solitaire","/solitaire-background.webp")),An=w.c.div(Oe||(Oe=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n\n  @media (min-width: 500px) {\n    height: 100px;\n  }\n"]))),Fn=w.c.div(we||(we=Object(S.a)(["\n  width: 110px;\n  height: 100%;\n  display: inline-flex;\n\n  .card {\n    &:not(:first-child) {\n      margin-left: -30px;\n\n      @media (min-width: 500px) {\n        margin-left: -62px;\n      }\n    }\n\n    img {\n      height: 100%;\n    }\n  }\n"]))),Mn=function(e){var n=e.completedDeckCount;return Object(k.jsx)(Fn,{children:m.a.Children.toArray(Array(n).fill(Object(k.jsx)(Bn,{cardId:1})))})},$n=m.a.memo(Mn),En=w.c.div(ve||(ve=Object(S.a)(["\n  padding: 7px;\n  height: 100%;\n  margin: 0 10px;\n  flex-grow: 1;\n  max-width: 130px;\n  min-width: 100px;\n  background-color: green;\n  border: 1px solid black;\n  color: white;\n  font-size: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: url(","), pointer;\n\n  @media (min-width: 500px) {\n    font-size: 0.8rem;\n    max-width: 180px;\n  }\n"])),D),Hn=w.c.div(ke||(ke=Object(S.a)(["\n  padding: 2px;\n  background-color: green;\n  display: flex;\n  gap: 10px;\n\n  span {\n    display: inline-block;\n    width: 50%;\n\n    &:first-of-type {\n      text-align: right;\n    }\n  }\n"]))),Wn=function(e){var n=e.setHint,t=e.cardDecks,i=e.gameStats,r=e.setGameStats,c=X("hint","no-hint"),a=Object(v.a)(c,2),o=a[0],s=a[1];return Object(k.jsxs)(En,{onClick:function(){var e=_e(t);if(e){o.play(),n({sourceDeckId:e.sourceDeckId,sourceStartingIndex:e.sourceStartingIndex,destinationDeckId:e.destinationDeckId,destinationStartingIndex:e.destinationStartingIndex});var c=Object(N.a)({},i);c.score-=10,r(c)}else s.play()},children:[Object(k.jsxs)(Hn,{children:[Object(k.jsx)("span",{children:"Score:"}),Object(k.jsx)("span",{children:i.score})]}),Object(k.jsxs)(Hn,{children:[Object(k.jsx)("span",{children:"Moves:"}),Object(k.jsx)("span",{children:i.moves})]})]})},Pn=m.a.memo(Wn),Rn=w.c.div(ye||(ye=Object(S.a)(["\n  width: 110px;\n  height: 100%;\n  display: inline-flex;\n  flex-direction: row-reverse;\n  cursor: url(","), pointer;\n\n  .card {\n    &:not(:last-child) {\n      margin-left: -30px;\n\n      @media (min-width: 500px) {\n        margin-left: -62px;\n      }\n    }\n\n    img {\n      height: 100%;\n    }\n  }\n"])),D),Un=function(e){var n=e.setCardDecks,t=e.cardDecks,i=X("cannot-deal","deal"),r=Object(v.a)(i,2),c=r[0],a=r[1],o=Object(x.useContext)(en),s=o.dealingDecks,d=o.setDealingDecks;return Object(k.jsx)(Rn,{onClick:s.length?function(){a.play();var e=Ve(t,s,c),i=Object(v.a)(e,2),r=i[0],o=i[1];n(r),d(o)}:void 0,children:m.a.Children.toArray(Array(s.length).fill(Object(k.jsx)(Bn,{isClose:!0})))})},Nn=m.a.memo(Un),qn=function(){var e=Object(x.useContext)(en),n=e.cardDecks,t=e.setCardDecks,i=e.setSelectedCards,r=e.setDealingDecks,c=e.gameStats,a=e.setGameStats,o=e.setHint;return Object(k.jsx)(On,{title:"Spider Solitaire",children:Object(k.jsx)(cn.a,{onDragEnd:function(e){var r=e.source,o=e.destination;if((i({deckId:"",items:[]}),o)&&r.droppableId!==o.droppableId){var s=function(e,n,t){var i,r,c,a=n.index,o=n.droppableId,s=Object(N.a)({},e[o]),d=t.index,l=t.droppableId,b=Object(N.a)({},e[l]),u=s.cards.splice(a),g=!1,p=b.cards[d-1];0===d||u[0]===p+1?((r=b.cards).push.apply(r,Object(qe.a)(u)),g=!0,s.visibleCardCount===u.length?s.visibleCardCount=1:s.visibleCardCount-=u.length,b.visibleCardCount+=u.length):(c=s.cards).push.apply(c,Object(qe.a)(u));var h=b.cards.join().includes([1,2,3,4,5,6,7,8,9,10,11,12,13].join());return h&&(b.cards.splice(-13),b.visibleCardCount-=13===b.visibleCardCount?12:13),{newCardDecks:Object(N.a)(Object(N.a)({},e),{},(i={},Object(Ne.a)(i,o,s),Object(Ne.a)(i,l,b),i)),isThereACompletedDeck:h,isDragSuccessful:g}}(n,r,o),d=s.newCardDecks,l=s.isThereACompletedDeck;if(s.isDragSuccessful){var b=Object(N.a)({},c);b.moves+=1,b.score-=1,l&&(b.completedDeckCount+=1,b.score+=100),a(b),t(d)}}},onDragStart:function(e){var t=e.source,r=t.index,c=t.droppableId,a=Object(N.a)({},n[c]);i({deckId:c,items:Array.from({length:a.cards.length-r},(function(e,n){return n+r}))})},children:Object(k.jsxs)(zn,{children:[Object(k.jsx)(Tn,{cardDecks:n}),Object(k.jsxs)(An,{children:[Object(k.jsx)($n,{completedDeckCount:c.completedDeckCount}),Object(k.jsx)(Pn,{setHint:o,cardDecks:n,gameStats:c,setGameStats:a}),Object(k.jsx)(Nn,{setCardDecks:t,cardDecks:n})]}),Object(k.jsx)(yn,{setCardDecks:t,setDealingDecks:r,gameStats:c,setGameStats:a})]})})})},Jn=w.c.section(Ce||(Ce=Object(S.a)(["\n  background: ",";\n  display: flex;\n  height: 35px;\n  overflow: hidden;\n"])),(function(e){return e.theme.gradients.taskbarBg})),Kn=Object(w.c)(T.Button)(Se||(Se=Object(S.a)(["\n  &:hover {\n    filter: brightness(105%);\n  }\n  img {\n    height: 100%;\n  }\n"]))),Yn=w.c.div(Be||(Be=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  gap: 1px;\n  padding-left: 20px;\n  padding-top: 4px;\n"]))),Ln=Object(w.c)(T.Button)(De||(De=Object(S.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 2px;\n  box-shadow: ",";\n  display: flex;\n  gap: 3px;\n  height: 65%;\n  max-width: 120px;\n  min-width: 100px;\n  padding: 4px 8px;\n  width: 40%;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  span {\n    font-size: 0.55rem;\n    line-height: 0.6rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])),(function(e){return e.theme.colors.taskBg}),(function(e){return e.theme.boxShadows.task}),(function(e){return e.theme.colors.taskBg$hover})),Vn=t.p+"static/media/winxp-start-button.5316ea67.webp";function Xn(){var e=new Date,n=e.getHours(),t=e.getMinutes(),i=n>=12?"PM":"AM";return n=(n%=12)||12,t=t<10?"0".concat(t):t,"".concat(n,":").concat(t," ").concat(i)}var Qn,Zn,_n,et,nt=w.c.div(Ie||(Ie=Object(S.a)(["\n  align-items: center;\n  background: ",";\n  border-left: 3px solid rgb(16, 66, 175);\n  color: ",";\n  display: flex;\n  font-size: 0.65rem;\n  gap: 5px;\n  height: 100%;\n  padding: 4px 15px 3px 10px;\n  width: fit-content;\n"])),(function(e){return e.theme.gradients.toolbarBg}),(function(e){return e.theme.colors.toolbarText})),tt=t.p+"static/media/msn-icon.81c25df4.webp",it=function(){var e=Object(x.useState)(Xn()),n=Object(v.a)(e,2),t=n[0],i=n[1];return Object(x.useEffect)((function(){setInterval((function(){return i(Xn())}),3e4)}),[]),Object(k.jsxs)(nt,{children:[Object(k.jsx)("img",{src:tt,alt:"msn icon",width:"32",height:"21"}),Object(k.jsx)("span",{children:t})]})},rt=function(){var e=Object(x.useContext)(tn).isGameRunning;return Object(k.jsxs)(Jn,{children:[Object(k.jsx)(Kn,{children:Object(k.jsx)("img",{src:Vn,alt:"win xp start",height:"35",width:"110"})}),Object(k.jsx)(Yn,{children:e&&Object(k.jsxs)(Ln,{children:[Object(k.jsx)("img",{src:gn,alt:"solitaire icon",width:"15",height:"15"}),Object(k.jsx)("span",{children:"Spider Solitaire"})]})}),Object(k.jsx)(it,{})]})},ct=w.c.div(Qn||(Qn=Object(S.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: auto;\n  height: 100%;\n"])),"".concat("/spider-solitaire","/winxp-background.webp")),at=w.c.main(Zn||(Zn=Object(S.a)(["\n  height: calc(100% - 35px);\n"]))),ot=w.c.main(_n||(_n=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 40px;\n"]))),st=Object(w.c)(T.Button)(et||(et=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n  gap: 5px;\n  line-height: 0.8rem;\n  text-align: center;\n  width: 70px;\n"]))),dt=function(){var e=Object(x.useContext)(tn).setIsGameRunning,n=function(){e(!0)};return Object(k.jsxs)(st,{onDoubleClick:n,onTouchStart:n,children:[Object(k.jsx)("img",{src:gn,alt:"",width:"40",height:"40"}),Object(k.jsx)("span",{children:"Spider Solitaire"})]})},lt=function(){var e=Object(x.useContext)(tn).isGameRunning;return Object(k.jsxs)(ct,{children:[Object(k.jsx)(at,{children:e?Object(k.jsx)(nn,{children:Object(k.jsx)(qn,{})}):Object(k.jsx)(ot,{children:Object(k.jsx)(dt,{})})}),Object(k.jsx)(rt,{})]})};var bt=function(){var e=Object(x.useContext)(y).isUserSelected;return Object(k.jsx)("div",{id:"app",children:e?Object(k.jsx)(rn,{children:Object(k.jsx)(lt,{})}):Object(k.jsx)(Ue,{})})};t(33);console.log("%cHi, I'm Enes. Welcome to my project. You can find more at https://enesbaspinar.me. Oh by the way, feel free to look at my CV :)","background: #222; color: #bada55; padding: 4px;"),O.a.render(Object(k.jsx)(m.a.StrictMode,{children:Object(k.jsx)(C,{children:Object(k.jsx)(w.a,{theme:G,children:Object(k.jsx)(bt,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0b2ae791.chunk.js.map