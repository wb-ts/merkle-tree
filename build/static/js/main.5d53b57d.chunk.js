(this.webpackJsonpvc_sentinel_nft_dapp=this.webpackJsonpvc_sentinel_nft_dapp||[]).push([[0],{276:function(t,e){},284:function(t,e){},302:function(t,e){},304:function(t,e){},323:function(t,e){},324:function(t,e){},387:function(t,e){},389:function(t,e){},422:function(t,e){},424:function(t,e){},425:function(t,e){},430:function(t,e){},432:function(t,e){},438:function(t,e){},440:function(t,e){},453:function(t,e){},465:function(t,e){},468:function(t,e){},473:function(t,e){},481:function(t,e){},490:function(t,e){},492:function(t,e){},562:function(t,e,n){},563:function(t,e,n){"use strict";n.r(e);var a,c,r,o,i,s,l,u,d,x,p,b,j,h,f,O,g,m=n(1),v=n(88),y=n.n(v),w=n(13),C=n.n(w),A=n(25),k=n(33),S=n(14),E=n(46),_=n(15),T=_.a.div(a||(a=Object(S.a)(["\n  background-color: var(--base);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),N=(_.a.div(c||(c=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),_.a.div(r||(r=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"])))),D=_.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),I=_.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),M=_.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),K=_.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),F=(_.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),_.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),L=(_.a.div(x||(x=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(72)),U=n(234),R=n(19),W={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},W),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},W),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},t),{},{account:e.payload.account});default:return t}},z={loading:!1,minted:0,canClaimWithKimono:!1,shiburaiDiscountAtAmount:0,reverted:!1,error:!1,errorMsg:""},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,minted:e.payload.minted,canClaimWithKimono:e.payload.canClaimWithKimono,shiburaiDiscountAtAmount:e.payload.shiburaiDiscountAtAmount,reverted:e.payload.reverted,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},z),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},q=Object(L.b)({blockchain:P,data:Y}),B=[U.a],H=Object(L.c)(L.a.apply(void 0,B)),G=Object(L.d)(q,H),Q=n(71),V=n.n(Q),X=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},J=function(){return function(){var t=Object(A.a)(C.a.mark((function t(e){var n,a,c,r,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,G.getState().blockchain;case 4:return n=t.sent,t.next=7,n.smartContract.methods.totalSupply();case 7:return a=t.sent,t.next=10,n.smartContract.methods.canClaimWithKimono(0,n.account);case 10:return c=t.sent,t.t0=Number,t.next=14,n.smartContract.methods.shiburaiDiscountAtAmount().call();case 14:return t.t1=t.sent,r=(0,t.t0)(t.t1),o=!1,t.next=19,V.a.get("https://viral-crypto-minting.herokuapp.com?leaf=".concat(n.account));case 19:t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{minted:a,canClaimWithKimono:c,shiburaiDiscountAtAmount:r,reverted:o}}),t.next=27;break;case 23:t.prev=23,t.t2=t.catch(1),console.log(t.t2),e(X("Could not load data from contract."));case 27:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e){return t.apply(this,arguments)}}()},Z=n(70),$=n.n(Z),tt=n(237),et=n.n(tt),nt=function(t){return{type:"CONNECTION_FAILED",payload:t}},at=function(){var t=Object(A.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window,n=e.ethereum,t.prev=1,t.next=4,n.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x4"}]});case 4:t.next=16;break;case 6:if(t.prev=6,t.t0=t.catch(1),4902!==t.t0.code){t.next=16;break}return t.prev=9,t.next=12,n.request({method:"wallet_addEthereumChain",params:[{chainId:"0x4",chainName:"Rinkeby Test Network",rpcUrls:["https://rinkeby.infura.io/v3/"]}]});case 12:t.next=16;break;case 14:t.prev=14,t.t1=t.catch(9);case 16:case"end":return t.stop()}}),t,null,[[1,6],[9,14]])})));return function(){return t.apply(this,arguments)}}(),ct=function(t){return function(){var e=Object(A.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(J());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},rt=n(2),ot=_.a.button(p||(p=Object(S.a)(["\n  padding: 10px;\n  margin: 5px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),it=_.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),st=_.a.img(j||(j=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid var(--primary);\n  background-color: var(--accent);\n  border-radius: none;\n  width: 360px;\n  @media (max-width: 600px) {\n      width: 90%;\n  }\n  @media (min-width: 950px) {\n    width: 220px;\n  }\n  @media (min-width: 1200px) {\n    width: 280px;\n  }\n  @media (min-width: 1500px) {\n    width: 360px;\n  }\n  transition: width 0.5s;\n"]))),lt=_.a.a(h||(h=Object(S.a)(["\n  color: var(--primary);\n  text-decoration: none;\n"]))),ut=function(t){var e=t.CONFIG,n=e.CONTRACT_ADDRESS,a=e.SCAN_LINK,c=e.MARKETPLACE,r=e.MARKETPLACE_LINK,o=e.NETWORK,i=e.NFT_NAME,s=e.GAS_LIMIT,l=e.MEDIA,u=e.SYMBOL,d=e.MAX_SUPPLY,x=e.WEI_COST,p=e.DISPLAY_COST,b=t.index,j=t.api_key,h=Object(E.b)(),f=Object(E.c)((function(t){return t.blockchain})),O=Object(E.c)((function(t){return t.data})),g=Object(m.useState)("Click Mint below to obtain your Sentinel NFT."),v=Object(k.a)(g,2),y=v[0],w=v[1],S=Object(m.useState)(1),_=Object(k.a)(S,2),T=_[0],I=_[1],L=Object(m.useState)(0),U=Object(k.a)(L,2),R=U[0],W=U[1],P=Object(m.useState)(!1),z=Object(k.a)(P,2),Y=z[0],q=z[1],B=Object(m.useState)(null),H=Object(k.a)(B,2),G=H[0],Q=H[1],X=function(t){var e,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0==t&&(e=x);var c=s,r=a?0:e*T;O.shiburaiDiscountAtAmount;var o=String(c);console.log("Cost: ",r),console.log("Gas limit: ",o),w("Minting your ".concat(i,"...")),q(!0),f.smartContract.methods.mintPublic(a?1:T).send({gasLimit:String(o),to:n,from:f.account,value:String(r)}).once("error",(function(t){console.log(t),w("Sorry, something went wrong please try again later."),q(!1)})).then((function(t){console.log(t),w("WOW, the ".concat(i," is yours! go visit Opensea.io to view it.")),q(!1),h(J(f.account)),I(1)}))},Z=function(){var t=Object(A.a)(C.a.mark((function t(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.a.get("https://deep-index.moralis.io/api/v2/nft/".concat(n),{headers:{"Content-type":"application/json","X-API-Key":j}});case 2:return e=t.sent,Q(e.data.total),t.next=6,V.a.get("https://deep-index.moralis.io/api/v2/".concat(n,"/balance?chain=rinkeby"),{headers:{"Content-type":"application/json","X-API-Key":j}});case 6:e=t.sent,W(e.data.balance),""!==f.account&&null!==f.smartContract&&h(J(f.account));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(m.useEffect)((function(){Z()}),[f.account]);var tt,ut;return Object(rt.jsxs)(M,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px solid var(--primary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)",maxWidth:"700px",margin:"12px"},children:[Object(rt.jsx)(M,{flex:1,jc:"center",ai:"center",children:Object(rt.jsx)(st,{src:"/config/images/".concat(l),alt:""})}),Object(rt.jsx)(N,{}),Object(rt.jsx)(K,{style:{textAlign:"center",fontSize:50,color:"var(--accent-text)"},children:u}),Object(rt.jsxs)(K,{style:{textAlign:"center",fontSize:42,fontWeight:"bold",color:"var(--accent-text)"},children:[G," / ",d]}),Object(rt.jsx)(K,{style:{textAlign:"center",color:"var(--accent-text)"},children:R>O.shiburaiDiscountAtAmount?Object(rt.jsxs)(rt.Fragment,{children:[p/2," ",o.SYMBOL," Each ",Object(rt.jsx)("span",{style:{color:"red"},children:"50% off"})," "]}):"".concat(p," ").concat(o.SYMBOL," Each")}),Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(rt.jsx)(lt,{target:"_blank",href:a,children:(tt=n,ut=24,tt.length>ut?"".concat(tt.substring(0,ut),"..."):tt)})}),Object(rt.jsxs)("span",{style:{textAlign:"center"},children:[Object(rt.jsx)(ot,{onClick:function(t){window.open("/config/roadmap.pdf","_blank")},children:"Roadmap"}),Object(rt.jsx)(ot,{onClick:function(t){window.open(r,"_blank")},children:c})]}),Object(rt.jsx)(N,{}),Number(G)>=d?Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(K,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(rt.jsxs)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",i," on"]}),Object(rt.jsx)(N,{}),Object(rt.jsx)(lt,{target:"_blank",href:r,children:c})]}):Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(N,{}),""===f.account||null===f.smartContract?Object(rt.jsxs)(M,{ai:"center",jc:"center",children:[Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Connect wallet to obtain Shiburai NFT"}),Object(rt.jsx)(N,{}),Object(rt.jsx)(ot,{onClick:function(t){t.preventDefault(),h(function(t){return function(){var e=Object(A.a)(C.a.mark((function e(n){var a,c,r,o,i,s,l,u,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.next=9,fetch("/config/".concat(c[t].SYMBOL,"_abi.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(o=e.sent,i=window,!(s=i.ethereum)||!s.isMetaMask){e.next=39;break}return $.a.setProvider(s),l=new et.a(s),e.prev=18,e.next=21,s.request({method:"eth_requestAccounts"});case 21:return u=e.sent,e.next=24,s.request({method:"net_version"});case 24:if(e.sent==c[t].NETWORK.ID){e.next=28;break}return e.next=28,at();case 28:d=new $.a(o,c[t].CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:u[0],smartContract:d,web3:l}}),s.on("accountsChanged",(function(t){n(ct(t[0]))})),s.on("chainChanged",Object(A.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.request({method:"net_version"});case 2:"4"!==t.sent&&window.location.reload();case 4:case"end":return t.stop()}}),t)})))),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(18),n(nt("Something went wrong."));case 37:e.next=40;break;case 39:n(nt("Install Metamask."));case 40:case"end":return e.stop()}}),e,null,[[18,34]])})));return function(t){return e.apply(this,arguments)}}()}(b)),Z()},children:"CONNECT"}),""!==f.errorMsg?Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(N,{}),Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:f.errorMsg})]}):null]}):Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:y}),Object(rt.jsx)(D,{}),O.reverted?Object(rt.jsxs)(rt.Fragment,{children:[Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:"You are whitelisted, claim for free here"}),Object(rt.jsx)(D,{}),Object(rt.jsx)(ot,{disabled:Y?1:0,onClick:function(t){t.preventDefault(),Z()},children:Y?"BUSY":"Claim whitelisted"})]}):"",Object(rt.jsx)(D,{}),Object(rt.jsxs)(M,{ai:"center",jc:"center",fd:"row",children:[Object(rt.jsx)(it,{style:{lineHeight:.4},disabled:Y?1:0,onClick:function(t){t.preventDefault(),function(){var t=T-1;t<1&&(t=1),I(t)}()},children:"-"}),Object(rt.jsx)(D,{}),Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--accent-text)"},children:T}),Object(rt.jsx)(D,{}),Object(rt.jsx)(it,{disabled:Y?1:0,onClick:function(t){t.preventDefault(),function(){var t=T+1;t>2&&"Kimono"==u&&(t=2),t>d-G&&(t=d-G),I(t)}()},children:"+"})]}),Object(rt.jsx)(D,{}),Object(rt.jsxs)(M,{ai:"center",jc:"center",fd:"row",children:[Object(rt.jsx)(ot,{disabled:Y?1:0,onClick:function(t){t.preventDefault(),X(0),Z()},children:Y?"BUSY":"Mint"}),O.canClaimWithKimono?Object(rt.jsx)(ot,{disabled:Y?1:0,onClick:function(t){t.preventDefault(),X(0,!0),Z()},children:Y?"BUSY":"Free Mint"}):""]})]})]}),Object(rt.jsx)(D,{})]})},dt=_.a.img(f||(f=Object(S.a)(["\n  width: 240px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 40px;\n"]))),xt=(_.a.div(O||(O=Object(S.a)(["\n  width: 90%;\n  display: flex;\n"]))),_.a.div(g||(g=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]))));var pt=function(){var t=Object(m.useState)([]),e=Object(k.a)(t,2),n=e[0],a=e[1],c=Object(m.useState)([]),r=Object(k.a)(c,2),o=r[0],i=(r[1],function(){var t=Object(A.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return Object(m.useEffect)((function(){i()}),[]),Object(rt.jsx)(T,{children:Object(rt.jsxs)(M,{flex:1,ai:"center",id:"main",style:{padding:12,backgroundColor:"var(--base)"},children:[Object(rt.jsx)(N,{}),Object(rt.jsx)(N,{}),Object(rt.jsx)(N,{}),Object(rt.jsx)("a",{href:"/",children:Object(rt.jsx)(dt,{alt:"logo",id:"logo",src:"/config/images/logo.png"})}),Object(rt.jsx)(D,{}),Object(rt.jsxs)(M,{jc:"center",ai:"center",style:{width:"70%",maxWidth:"700px"},children:[Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"20px"},children:"The Sentinel gives passage into Viral Crypto."}),Object(rt.jsx)(N,{}),Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"20px"},children:"Minting and possessing a Sentinel rewards you with VC tokens, gives you access to create a profile on the VC platform, and also reserves an allocation to mint a unique generative avatar that grants benefits on Viral Crypto."}),Object(rt.jsx)(N,{})]}),Object(rt.jsx)(xt,{flex:1,style:{padding:12},children:n.length&&n.map((function(t,e){return Object(rt.jsx)(ut,{CONFIG:t,index:e,freeMinting:o,api_key:"78KU4WCpkqjIAkGjSKbtRuYg7rjbfnEQkMtt6fLbVFh7chlqi3courfnXFjo461K"},e)}))}),Object(rt.jsx)(I,{}),Object(rt.jsx)(I,{}),Object(rt.jsxs)(M,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(rt.jsx)(F,{style:{textAlign:"center",color:"var(--primary-text)"},children:"Please make sure you are connected to the right network ( RIkeby Test Network ) and the correct address. Please note: Once you make the purchase, you cannot undo this action."}),Object(rt.jsx)(N,{}),Object(rt.jsxs)(F,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",3e6," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,567)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};n(562);y.a.render(Object(rt.jsx)(E.a,{store:G,children:Object(rt.jsx)(pt,{})}),document.getElementById("root")),bt()}},[[563,1,2]]]);
//# sourceMappingURL=main.5d53b57d.chunk.js.map