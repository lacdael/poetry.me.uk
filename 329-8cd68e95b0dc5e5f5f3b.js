"use strict";(self.webpackChunkpoetry_me_uk=self.webpackChunkpoetry_me_uk||[]).push([[329],{1329:function(e,a,t){t.r(a),t.d(a,{ccipFetch:function(){return k},offchainLookup:function(){return g},offchainLookupAbiItem:function(){return y},offchainLookupSignature:function(){return w}});var r=t(69918),n=(t(33792),t(65124)),s=t(57325),o=t(11088);class c extends s.G{constructor(e){var a;let{callbackSelector:t,cause:r,data:n,extraData:s,sender:c,urls:u}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",u&&["  Gateway URL(s):",...u.map((e=>"    ".concat((0,o.Gr)(e))))],"  Sender: ".concat(c),"  Data: ".concat(n),"  Callback selector: ".concat(t),"  Extra data: ".concat(s)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class u extends s.G{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,o.Gr)(t)),"Response: ".concat((0,n.P)(a))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends s.G{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(t),"OffchainLookup sender address: ".concat(a)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var d=t(56280),i=t(71282),f=t(70747),p=t(55649),h=t(3436);var b=t(18837),m=t(73155);const w="0x556f1830",y={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:n,data:s,to:o}=a;const{args:u}=(0,i.p)({data:s,abi:[y]}),[d,m,w,g,v]=u;try{if(!function(e,a){if(!(0,h.U)(e))throw new p.b({address:e});if(!(0,h.U)(a))throw new p.b({address:a});return e.toLowerCase()===a.toLowerCase()}(o,d))throw new l({sender:d,to:o});const a=await k({data:w,sender:d,urls:m}),{data:s}=await(0,r.R)(e,{blockNumber:t,blockTag:n,data:(0,b.zo)([g,(0,f.E)([{type:"bytes"},{type:"bytes"}],[a,v])]),to:o});return s}catch(O){throw new c({callbackSelector:g,cause:O,data:s,extraData:v,sender:d,urls:m})}}async function k(e){let{data:a,sender:t,urls:r}=e,s=new Error("An unknown error occurred.");for(let l=0;l<r.length;l++){const e=r[l],i=e.includes("{sender}")||e.includes("{data}")?"GET":"POST",f="POST"===i?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(f),method:i});let c;if(c=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){s=new d.Gg({body:f,details:(0,n.P)(c.error)||r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,m.v)(c)){s=new u({result:c,url:e});continue}return c}catch(c){s=new d.Gg({body:f,details:c.message,url:e})}}throw s}}}]);
//# sourceMappingURL=329-8cd68e95b0dc5e5f5f3b.js.map