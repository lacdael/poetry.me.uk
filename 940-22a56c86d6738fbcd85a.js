"use strict";(self.webpackChunkpoetry_me_uk=self.webpackChunkpoetry_me_uk||[]).push([[940],{4972:function(e,t,s){s.d(t,{mb:function(){return v},Ao:function(){return f},vZ:function(){return m},pV:function(){return T},D8:function(){return _},IN:function(){return b},jL:function(){return p},lH:function(){return J},dC:function(){return Z}});var n=s(4693);const o=e=>"object"==typeof e&&null!==e,r=new WeakMap,a=new WeakSet,i=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>o(e)&&!a.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),i=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),l=new WeakMap,c=((e,t,s=i)=>{const o=l.get(e);if((null==o?void 0:o[0])===t)return o[1];const d=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,n.OC)(d,!0),l.set(e,[t,d]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(d,t))return;const o=Reflect.get(e,t),i={value:o,enumerable:!0,configurable:!0};if(a.has(o))(0,n.OC)(o,!1);else if(o instanceof Promise)delete i.value,i.get=()=>s(o);else if(r.has(o)){const[e,t]=r.get(o);i.value=c(e,t(),s)}Object.defineProperty(d,t,i)})),Object.preventExtensions(d)}),d=new WeakMap,u=[1,1],p=(i=>{if(!o(i))throw new Error("object required");const l=d.get(i);if(l)return l;let f=u[0];const h=new Set,m=(e,t=++u[0])=>{f!==t&&(f=t,h.forEach((s=>s(e,t))))};let g=u[1];const b=e=>(t,s)=>{const n=[...t];n[1]=[e,...n[1]],m(n,s)},y=new Map,v=e=>{var t;const s=y.get(e);s&&(y.delete(e),null==(t=s[1])||t.call(s))},w=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),I=t(w,{deleteProperty(e,t){const s=Reflect.get(e,t);v(t);const n=Reflect.deleteProperty(e,t);return n&&m(["delete",[t],s]),n},set(t,i,l,c){const u=Reflect.has(t,i),f=Reflect.get(t,i,c);if(u&&(e(f,l)||d.has(l)&&e(f,d.get(l))))return!0;v(i),o(l)&&(l=(0,n.Ai)(l)||l);let g=l;if(l instanceof Promise)l.then((e=>{l.status="fulfilled",l.value=e,m(["resolve",[i],e])})).catch((e=>{l.status="rejected",l.reason=e,m(["reject",[i],e])}));else{!r.has(l)&&s(l)&&(g=p(l));const e=!a.has(g)&&r.get(g);e&&((e,t)=>{if(y.has(e))throw new Error("prop listener already exists");if(h.size){const s=t[3](b(e));y.set(e,[t,s])}else y.set(e,[t])})(i,e)}return Reflect.set(t,i,g,c),m(["set",[i],l,f]),!0}});d.set(i,I);const C=[w,(e=++u[1])=>(g===e||h.size||(g=e,y.forEach((([t])=>{const s=t[1](e);s>f&&(f=s)}))),f),c,e=>{h.add(e),1===h.size&&y.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const n=e[3](b(s));y.set(s,[e,n])}));return()=>{h.delete(e),0===h.size&&y.forEach((([e,t],s)=>{t&&(t(),y.set(s,[e]))}))}}];return r.set(I,C),Reflect.ownKeys(i).forEach((e=>{const t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(I[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(w,e,t)})),I}))=>[p,r,a,e,t,s,i,l,c,d,u],[l]=i();function c(e={}){return l(e)}function d(e,t,s){const n=r.get(e);let o;n||console.warn("Please use proxy object");const a=[],i=n[3];let l=!1;const c=i((e=>{a.push(e),s?t(a.splice(0)):o||(o=Promise.resolve().then((()=>{o=void 0,l&&t(a.splice(0))})))}));return l=!0,()=>{l=!1,c()}}const u=c({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),p={state:u,subscribe(e){return d(u,(()=>e(u)))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=p.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},h=c({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),m={state:h,subscribe(e){return d(h.events,(()=>e(function(e,t){const s=r.get(e);s||console.warn("Please use proxy object");const[n,o,a]=s;return a(n,o(),t)}(h.events[h.events.length-1]))))},initialize(){h.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(h.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){h.connectedWalletId=e},click(e){if(h.enabled){const t={type:"CLICK",name:e.name,userSessionId:h.userSessionId,timestamp:Date.now(),data:e};h.events.push(t)}},track(e){if(h.enabled){const t={type:"TRACK",name:e.name,userSessionId:h.userSessionId,timestamp:Date.now(),data:e};h.events.push(t)}},view(e){if(h.enabled){const t={type:"VIEW",name:e.name,userSessionId:h.userSessionId,timestamp:Date.now(),data:e};h.events.push(t)}}},g=c({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),b={state:g,subscribe(e){return d(g,(()=>e(g)))},setChains(e){g.chains=e},setWalletConnectUri(e){g.walletConnectUri=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setIsAuth(e){g.isAuth=e}},y=c({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),v={state:y,subscribe(e){return d(y,(()=>e(y)))},setConfig(e){var t,s;m.initialize(),b.setChains(e.chains),b.setIsAuth(Boolean(e.enableAuthMode)),b.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),b.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),f.setModalVersionInStorage(),Object.assign(y,e)}};var w=Object.defineProperty,I=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,O=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const E="https://explorer-api.walletconnect.com",L="wcm",j="js-2.6.2";async function A(e,t){const s=((e,t)=>{for(var s in t||(t={}))C.call(t,s)&&O(e,s,t[s]);if(I)for(var s of I(t))W.call(t,s)&&O(e,s,t[s]);return e})({sdkType:L,sdkVersion:j},t),n=new URL(e,E);return n.searchParams.append("projectId",v.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&n.searchParams.append(e,String(t))})),(await fetch(n)).json()}const k={async getDesktopListings(e){return A("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return A("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return A("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return A("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${E}/w3m/v1/getWalletImage/${e}?projectId=${v.state.projectId}&sdkType=${L}&sdkVersion=${j}`},getAssetImageUrl(e){return`${E}/w3m/v1/getAssetImage/${e}?projectId=${v.state.projectId}&sdkType=${L}&sdkVersion=${j}`}};var M=Object.defineProperty,D=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const N=f.isMobile(),x=c({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),T={state:x,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=v.state;if("NONE"===e||"ALL"===t&&!e)return x.recomendedWallets;if(f.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await k.getAllListings(t),n=Object.values(s);n.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),x.recomendedWallets=n}else{const{chains:e,isAuth:s}=b.state,n=e?.join(","),o=f.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:n,version:2,excludedIds:o?t.join(","):void 0},{listings:a}=N?await k.getMobileListings(r):await k.getDesktopListings(r);x.recomendedWallets=Object.values(a)}return x.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))U.call(t,s)&&S(e,s,t[s]);if(D)for(var s of D(t))P.call(t,s)&&S(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=v.state,{recomendedWallets:o}=x;if("ALL"===n)return x.wallets;o.length?t.excludedIds=o.map((e=>e.id)).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),b.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:a}=e,{listings:i,total:l}=N?await k.getMobileListings(t):await k.getDesktopListings(t),c=Object.values(i),d=a?"search":"wallets";return x[d]={listings:[...x[d].listings,...c],total:l,page:r??1},{listings:c,total:l}},getWalletImageUrl(e){return k.getWalletImageUrl(e)},getAssetImageUrl(e){return k.getAssetImageUrl(e)},resetSearch(){x.search={listings:[],total:0,page:1}}},R=c({open:!1}),_={state:R,subscribe(e){return d(R,(()=>e(R)))},async open(e){return new Promise((t=>{const{isUiLoaded:s,isDataLoaded:n}=b.state;if(f.removeWalletConnectDeepLink(),b.setWalletConnectUri(e?.uri),b.setChains(e?.chains),p.reset("ConnectWallet"),s&&n)R.open=!0,t();else{const e=setInterval((()=>{const s=b.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),R.open=!0,t())}),200)}}))},close(){R.open=!1}};var $=Object.defineProperty,H=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,K=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const z=c({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),J={state:z,subscribe(e){return d(z,(()=>e(z)))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(z.themeMode=t),s&&(z.themeVariables=((e,t)=>{for(var s in t||(t={}))V.call(t,s)&&K(e,s,t[s]);if(H)for(var s of H(t))B.call(t,s)&&K(e,s,t[s]);return e})({},s))}},q=c({open:!1,message:"",variant:"success"}),Z={state:q,subscribe(e){return d(q,(()=>e(q)))},openToast(e,t){q.open=!0,q.message=e,q.variant=t},closeToast(){q.open=!1}}},940:function(e,t,s){s.d(t,{WalletConnectModal:function(){return o}});var n=s(4972);class o{constructor(e){this.openModal=n.D8.open,this.closeModal=n.D8.close,this.subscribeModal=n.D8.subscribe,this.setTheme=n.lH.setThemeConfig,n.lH.setThemeConfig(e),n.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await Promise.all([s.e(906),s.e(409)]).then(s.bind(s,3409));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),n.IN.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=940-22a56c86d6738fbcd85a.js.map