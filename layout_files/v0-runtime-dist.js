"use strict";(()=>{var Vc=Object.defineProperty;var Rg=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var T=(e,t)=>()=>(e&&(t=e(e=0)),t);var hn=(e,t)=>{for(var n in t)Vc(e,n,{get:t[n],enumerable:!0})};var rt=(e,t,n)=>Rg(e,typeof t!="symbol"?t+"":t,n);function Bc(e){if(typeof e=="boolean")return e;if(!e||typeof e!="object"||!("url"in e)||typeof e.url!="string"||!("alt"in e)||typeof e.alt!="string")return;let t;try{t=new URL(e.url)}catch{return}if(!(t.protocol!=="https:"&&t.protocol!=="http:")&&!(t.username||t.password))return{url:t.href,alt:e.alt}}function Wc(e,t,n){if(e.replaceChildren(),t===!1){e.style.display="none";return}e.style.display="flex";let o="tab-logo",r=14,i=7;if(n==="login"&&(o="login-logo",r=40,i=20),t===!0){let l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("class",o),l.setAttribute("width",String(r)),l.setAttribute("height",String(i)),l.setAttribute("viewBox","0 0 504 240"),l.setAttribute("fill","currentColor");let s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",Hg),l.appendChild(s),e.appendChild(l);return}let a=document.createElement("img");a.className=o,a.src=t.url,a.alt=t.alt,a.referrerPolicy="no-referrer",a.width=16,a.height=16,n==="login"&&(a.width=40,a.height=40),a.style.objectFit="contain",e.appendChild(a)}var Hg,ja=T(()=>{"use strict";Hg="M192 172.125V48h48v158.25c0 18.64-15.11 33.75-33.75 33.75-8.9 0-17.685-3.431-24-9.746L0 48h67.875L192 172.125ZM504 192h-48V82.125L346.125 192H456v48H331.5c-37.279 0-67.5-30.221-67.5-67.5V48h48v110.25L422.25 48H312V0h124.5C473.779 0 504 30.22 504 67.5V192Z"});function Xc(e){return Object(e)!==e}function Ag(e){let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getPrototypeOf(t)===null||Object.getOwnPropertyNames(t).sort().join("\0")===Ng}function Pg(e){return Object.prototype.toString.call(e).slice(8,-1)}function $g(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function Zt(e){let t="",n=0,o=e.length;for(let r=0;r<o;r+=1){let i=e[r],a=$g(i);a&&(t+=e.slice(n,r)+a,n=r+1)}return`"${n===0?e:t+e.slice(n)}"`}function Dg(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)}function Gc(e){return Ig.test(e)?"."+e:"["+JSON.stringify(e)+"]"}function Og(e){let t=new DataView(e),n="";for(let o=0;o<e.byteLength;o++)n+=String.fromCharCode(t.getUint8(o));return Vg(n)}function zg(e){let t=Fg(e),n=new ArrayBuffer(t.length),o=new DataView(n);for(let r=0;r<n.byteLength;r++)o.setUint8(r,t.charCodeAt(r));return n}function Fg(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,o=0;for(let r=0;r<e.length;r++)n<<=6,n|=Yc.indexOf(e[r]),o+=6,o===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=o=0);return o===12?(n>>=4,t+=String.fromCharCode(n)):o===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}function Vg(e){let t="";for(let n=0;n<e.length;n+=3){let o=[void 0,void 0,void 0,void 0];o[0]=e.charCodeAt(n)>>2,o[1]=(e.charCodeAt(n)&3)<<4,e.length>n+1&&(o[1]|=e.charCodeAt(n+1)>>4,o[2]=(e.charCodeAt(n+1)&15)<<2),e.length>n+2&&(o[2]|=e.charCodeAt(n+2)>>6,o[3]=e.charCodeAt(n+2)&63);for(let r=0;r<o.length;r++)typeof o[r]>"u"?t+="=":t+=Yc[o[r]]}return t}function Bg(e,t){return Wg(JSON.parse(e),t)}function Wg(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");let n=e,o=Array(n.length);function r(i,a=!1){if(i===Ka)return;if(i===Zc)return NaN;if(i===Jc)return 1/0;if(i===Qc)return-1/0;if(i===Za)return-0;if(a||typeof i!="number")throw new Error("Invalid input");if(i in o)return o[i];let l=n[i];if(!l||typeof l!="object")o[i]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){let s=l[0],c=t?.[s];if(c)return o[i]=c(r(l[1]));switch(s){case"Date":o[i]=new Date(l[1]);break;case"Set":let d=new Set;o[i]=d;for(let g=1;g<l.length;g+=1)d.add(r(l[g]));break;case"Map":let p=new Map;o[i]=p;for(let g=1;g<l.length;g+=2)p.set(r(l[g]),r(l[g+1]));break;case"RegExp":o[i]=new RegExp(l[1],l[2]);break;case"Object":o[i]=Object(l[1]);break;case"BigInt":o[i]=BigInt(l[1]);break;case"null":let u=Object.create(null);o[i]=u;for(let g=1;g<l.length;g+=2)u[l[g]]=r(l[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{let g=globalThis[s],h=new g(r(l[1]));o[i]=l[2]!==void 0?h.subarray(l[2],l[3]):h;break}case"ArrayBuffer":{let g=l[1],h=zg(g);o[i]=h;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{let g=s.slice(9);o[i]=Temporal[g].from(l[1]);break}case"URL":{let g=new URL(l[1]);o[i]=g;break}case"URLSearchParams":{let g=new URLSearchParams(l[1]);o[i]=g;break}default:throw new Error(`Unknown type ${s}`)}}else{let s=new Array(l.length);o[i]=s;for(let c=0;c<l.length;c+=1){let d=l[c];d!==Kc&&(s[c]=r(d))}}else{let s={};o[i]=s;for(let c in l){if(c==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");let d=l[c];s[c]=r(d)}}return o[i]}return r(0)}function qg(e,t){let n=[],o=new Map,r=[];if(t)for(let c of Object.getOwnPropertyNames(t))r.push({key:c,fn:t[c]});let i=[],a=0;function l(c){if(c===void 0)return Ka;if(Number.isNaN(c))return Zc;if(c===1/0)return Jc;if(c===-1/0)return Qc;if(c===0&&1/c<0)return Za;if(o.has(c))return o.get(c);let d=a++;o.set(c,d);for(let{key:u,fn:g}of r){let h=g(c);if(h)return n[d]=`["${u}",${l(h)}]`,d}let p="";if(Xc(c))p=Xa(c);else{let u=Pg(c);switch(u){case"Number":case"String":case"Boolean":p=`["Object",${Xa(c)}]`;break;case"BigInt":p=`["BigInt",${c}]`;break;case"Date":p=`["Date","${!isNaN(c.getDate())?c.toISOString():""}"]`;break;case"URL":p=`["URL",${Zt(c.toString())}]`;break;case"URLSearchParams":p=`["URLSearchParams",${Zt(c.toString())}]`;break;case"RegExp":let{source:h,flags:m}=c;p=m?`["RegExp",${Zt(h)},"${m}"]`:`["RegExp",${Zt(h)}]`;break;case"Array":p="[";for(let b=0;b<c.length;b+=1)b>0&&(p+=","),b in c?(i.push(`[${b}]`),p+=l(c[b]),i.pop()):p+=Kc;p+="]";break;case"Set":p='["Set"';for(let b of c)p+=`,${l(b)}`;p+="]";break;case"Map":p='["Map"';for(let[b,x]of c)i.push(`.get(${Xc(b)?Xa(b):"..."})`),p+=`,${l(b)},${l(x)}`,i.pop();p+="]";break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{let b=c;p='["'+u+'",'+l(b.buffer);let x=c.byteOffset,E=x+c.byteLength;if(x>0||E!==b.buffer.byteLength){let w=+/(\d+)/.exec(u)[1]/8;p+=`,${x/w},${E/w}`}p+="]";break}case"ArrayBuffer":{p=`["ArrayBuffer","${Og(c)}"]`;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":p=`["${u}",${Zt(c.toString())}]`;break;default:if(!Ag(c))throw new Jr("Cannot stringify arbitrary non-POJOs",i);if(Dg(c).length>0)throw new Jr("Cannot stringify POJOs with symbolic keys",i);if(Object.getPrototypeOf(c)===null){p='["null"';for(let b in c)i.push(Gc(b)),p+=`,${Zt(b)},${l(c[b])}`,i.pop();p+="]"}else{p="{";let b=!1;for(let x in c)b&&(p+=","),b=!0,i.push(Gc(x)),p+=`${Zt(x)}:${l(c[x])}`,i.pop();p+="}"}}}return n[d]=p,d}let s=l(e);return s<0?`${s}`:`[${n.join(",")}]`}function Xa(e){let t=typeof e;return t==="string"?Zt(e):e instanceof String?Zt(e.toString()):e===void 0?Ka.toString():e===0&&1/e<0?Za.toString():t==="bigint"?`["BigInt","${e}"]`:String(e)}function Ga(e,t){return qg(e,{F:n=>{if(typeof n=="function"){if(!Uo.has(n)){let o=Uo.size.toString();Uo.set(n,o),ed.set(o,n),Uo.size>5e4&&console.warn("Function reference store is getting large, it is not recommended to send anonymous and inline functions through the channel as they cannot be cached.")}return Uo.get(n)}},P:n=>{if(n&&typeof n=="object"&&typeof n.then=="function")return t.has(n)||t.set(n,t.size.toString()),t.get(n)}})}function Ya(e,t,n){return Bg(e,{F:o=>n?async function(...r){return n({$$type:`bidc-fn:${o}`,args:r})}:null,P:o=>{if(t.has(o))return t.get(o).promise;let r,i,a=new Promise((l,s)=>{r=l,i=s});return t.set(o,{resolve:r,reject:i,promise:a}),a}})}async function*jg(e){let t=new Map,n=new Map,o=new Set;yield`r:${Ga(e,n)}
`;for(let[i,a]of n.entries())t.set(a,i);for(;t.size>0;){let a=Array.from(t.entries()).map(async([s,c])=>{try{let d=await c;return{promiseId:s,status:"fulfilled",value:d}}catch(d){return{promiseId:s,status:"rejected",reason:d}}}),l=await Promise.race(a);if(t.delete(l.promiseId),o.add(l.promiseId),l.status==="fulfilled"){let s=Ga(l.value,n);yield`p${l.promiseId}:${s}
`;for(let[c,d]of n.entries())!t.has(d)&&!o.has(d)&&t.set(d,c)}else{let s=l.reason instanceof Error?l.reason.message:String(l.reason);yield`e${l.promiseId}:${Ga(s,n)}
`}}}async function Ug(e,t){let n,o=new Map,r=e[Symbol.asyncIterator](),i=await r.next();if(i.done)throw new Error("Stream ended without any chunks");let a=i.value;if(!a.startsWith("r"))throw new Error("First chunk must start with 'r' (return data)");let l=a.indexOf(":");if(l===-1)throw new Error("Invalid first chunk format - missing colon");let s=a.slice(l+1);return n=Ya(s,o,t?.send),(async()=>{try{let d=await r.next();for(;!d.done;){let p=d.value;if(p.startsWith("p")){let u=p.indexOf(":"),g=p.slice(1,u),h=Ya(p.slice(u+1),o,t?.send),m=o.get(g);m&&m.resolve(h)}else if(p.startsWith("e")){let u=p.indexOf(":"),g=p.slice(1,u),h=Ya(p.slice(u+1),o,t?.send),m=o.get(g);m&&m.reject(new Error(h))}d=await r.next()}}catch(d){for(let p of o.values())p.reject(d)}})(),n}function Ja(e,t){let n;typeof t>"u"&&typeof e=="string"?(t=e,n=void 0):typeof e=="object"&&(n=e),t="bidc_"+(t??"default");let o=n||self,r=[];function i(b){r.push(b)}function a(){let b=!1,x=null,E=new Promise(_=>{x=_});function w(_,$){if(n)"self"in n&&n.self===n?n.postMessage(_,"*",[$]):n.postMessage(_,[$]);else if(typeof window>"u"&&typeof self<"u")self.postMessage(_,[$]);else if(typeof window<"u"&&window.parent&&window.parent!==window)window.parent.postMessage(_,"*",[$]);else throw new Error("No target provided and no global context available")}let v=new MessageChannel,L={type:"bidc-connect",channelId:t,timestamp:Date.now()},k={type:"bidc-confirm",channelId:t};function N(_){let $=_.ports[0];if(!$)return;let O=_.data;if(O?.channelId!==t||O.type!==L.type)return;if(!(n&&typeof Worker<"u"&&n instanceof Worker)){let A=n||(typeof window<"u"&&window.parent!==window?window.parent:null);if(A&&_.source!==A)return}L.timestamp<=O.timestamp&&($.postMessage(k),b?(Zr.set(o,Promise.resolve($)),r.forEach(A=>A($))):(x($),b=!0))}function I(_){_.data?.type===k.type&&_.data.channelId===t&&(x(v.port1),b=!0,v.port1.removeEventListener("message",I))}return n&&typeof Worker<"u"&&n instanceof Worker?n.addEventListener("message",N):typeof window<"u"?window.addEventListener("message",N):typeof self<"u"&&self.addEventListener("message",N),v.port1.addEventListener("message",I),v.port1.start(),w(L,v.port2),E}function l(){return Zr.has(o)||Zr.set(o,a()),Zr.get(o)}let s=new Map,c=async function(b){let x=await l(),E=Date.now().toString(36)+Math.random().toString(36).substring(2,5);for await(let L of jg(b)){let k=`${E}@${L}`;x.postMessage(k)}let w,v=new Promise(L=>{w=L});return s.set(E,[w,v]),v},d=new Map,p=!1,u=[],g=null,h=async function(b){await l(),!p&&(g=b)};return l().then(b=>{if(p)return;let x=async w=>{let v=w.data;if(typeof v!="string")return;let L=v.indexOf("@");if(L===-1){console.error("Invalid chunk format - missing @ delimiter:",v);return}let k=v.slice(0,L),N=v.slice(L+1);if(N.startsWith("r:"))d?.set(k,{pendingChunks:[],chunkResolver:null}),(async()=>{try{let _=await Ug(async function*(){for(yield N;;){let $=await E(k);if($===null)break;yield $}d?.delete(k)}(),{send:c});if(typeof _=="object"&&_!==null&&typeof _.$$type=="string"&&_.$$type.startsWith("bidc-fn:")){let $=_.$$type.slice(8),O=ed.get($);if(O){let F=O(..._.args);c({$$type:`bidc-res:${k}`,response:F})}else console.error(`Function reference not found for ID: ${$}`)}else if(typeof _=="object"&&_!==null&&typeof _.$$type=="string"&&_.$$type.startsWith("bidc-res:")){let $=_.$$type.slice(9),O=_.response,F=s.get($);F&&(F[0](O),s.delete($))}else{if(!g)throw new Error("Global receive callback is not set. This is a bug in BIDC.");try{let $=g(_);c({$$type:`bidc-res:${k}`,response:$})}catch($){console.error($)}}}catch(_){console.error(`Error decoding stream for ID ${k}:`,_),d?.delete(k)}})();else{let I=d?.get(k);I?(I.pendingChunks.push(N),I.chunkResolver?.()):console.warn(`No active decoding found for ID: ${k}`)}};async function E(w){let v=d?.get(w);return v?v.pendingChunks.length>0?v.pendingChunks.shift():(await new Promise(L=>{v.chunkResolver=L}),v.pendingChunks.length===0?null:v.pendingChunks.shift()):null}b.addEventListener("message",x),u.push(()=>{b.removeEventListener("message",x)}),b.start(),i(w=>{p||(b.removeEventListener("message",x),b=w,b.addEventListener("message",x),b.start())})}),{send:c,receive:h,cleanup:()=>{p=!0,u.forEach(b=>b()),u.length=0}}}var Jr,Ng,Ig,Yc,Ka,Kc,Zc,Jc,Qc,Za,Uo,ed,Zr,td=T(()=>{Jr=class extends Error{constructor(t,n){super(t),this.name="DevalueError",this.path=n.join("")}};Ng=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Ig=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;Yc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";Ka=-1,Kc=-2,Zc=-3,Jc=-4,Qc=-5,Za=-6;Uo=new Map,ed=new Map;Zr=new WeakMap});function Xg(){let e=null,t=null,n={};function o(s){e&&e.cleanup(),t=null,!(!s&&(!window.parent||window.parent===window))&&(e=s?Ja(s):Ja(),t=s??null,e.receive(async c=>{if(!c||typeof c!="object"||!("method"in c))return;let{method:d}=c,p=n[d];if(!p)return;let u=await p(...c.args),g;return typeof u<"u"&&(g=u),g}))}function r(s,c){n[s]=c}function i(s){if(e)return e.send(s)}function a(){return!!e}function l(s){return t===s}return{registerTarget:o,sendToTarget:i,registerMessage:r,hasChannel:a,isTarget:l}}function Gg(){return{registerTarget:e=>{},sendToTarget:async e=>{},registerMessage:e=>{},hasChannel:()=>!1,isTarget:e=>!1}}function Qa(){return Qr||(Qr=typeof window<"u"?Xg():Gg(),Qr.registerTarget()),Qr}function xt(e,t){return Qa().registerMessage(e,t)}function nd(){return Qa().hasChannel()}function Oe(e,...t){return Qa().sendToTarget({method:e,args:t})}var Qr,el=T(()=>{"use strict";td();Qr=null});var V0,ri,ul=T(()=>{V0=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},ri=V0});var B0,Ld,kd=T(()=>{B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ld=B0});var W0,Td,_d=T(()=>{ul();kd();W0=e=>ri(Ld[e.toLowerCase()],6),Td=W0});var q0,j0,Rd,Hd=T(()=>{ul();q0=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,j0=e=>{let t;return(t=e.match(q0))?ri(parseInt(t[1],16),t[1].length):void 0},Rd=j0});var it,a2,zn,l2,Yo,U0,Nd,s2,gn,c2,pl=T(()=>{it="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",a2=`(?:${it}|none)`,zn=`${it}%`,l2=`(?:${it}%|none)`,Yo=`(?:${it}%|${it})`,U0=`(?:${it}%|${it}|none)`,Nd=`(?:${it}(deg|grad|rad|turn)|${it})`,s2=`(?:${it}(deg|grad|rad|turn)|${it}|none)`,gn="\\s*,\\s*",c2=new RegExp("^"+U0+"$")});var X0,G0,Y0,Ad,Pd=T(()=>{pl();X0=new RegExp(`^rgba?\\(\\s*${it}${gn}${it}${gn}${it}\\s*(?:,\\s*${Yo}\\s*)?\\)$`),G0=new RegExp(`^rgba?\\(\\s*${zn}${gn}${zn}${gn}${zn}\\s*(?:,\\s*${Yo}\\s*)?\\)$`),Y0=e=>{let t={mode:"rgb"},n;if(n=e.match(X0))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(G0))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]!==void 0?t.alpha=Math.max(0,Math.min(1,n[4]/100)):n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))),t},Ad=Y0});var K0,ii,fl=T(()=>{zt();K0=(e,t)=>e===void 0?void 0:typeof e!="object"?so(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,ii=K0});var Z0,bn,ai=T(()=>{li();fl();Z0=(e="rgb")=>t=>(t=ii(t,e))!==void 0?t.mode===e?t:_t[t.mode][e]?_t[t.mode][e](t):e==="rgb"?_t[t.mode].rgb(t):_t.rgb[e](_t[t.mode].rgb(t)):void 0,bn=Z0});var _t,$d,Ko,ml,J0,xe,Dd,Q0,li=T(()=>{ai();_t={},$d={},Ko=[],ml={},J0=e=>e,xe=e=>(_t[e.mode]={..._t[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{_t[t]||(_t[t]={}),_t[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=J0)}),$d[e.mode]=e,(e.parse||[]).forEach(t=>{Q0(t,e.mode)}),bn(e.mode)),Dd=e=>$d[e],Q0=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");ml[e]=t}else typeof e=="function"&&Ko.indexOf(e)<0&&Ko.push(e)}});function si(e){let t=e[re],n=e[re+1];return t==="-"||t==="+"?/\d/.test(n)||n==="."&&/\d/.test(e[re+2]):t==="."?/\d/.test(n):/\d/.test(t)}function gl(e){if(re>=e.length)return!1;let t=e[re];if(hl.test(t))return!0;if(t==="-"){if(e.length-re<2)return!1;let n=e[re+1];return!!(n==="-"||hl.test(n))}return!1}function Zo(e){let t="";if((e[re]==="-"||e[re]==="+")&&(t+=e[re++]),t+=ci(e),e[re]==="."&&/\d/.test(e[re+1])&&(t+=e[re++]+ci(e)),(e[re]==="e"||e[re]==="E")&&((e[re+1]==="-"||e[re+1]==="+")&&/\d/.test(e[re+2])?t+=e[re++]+e[re++]+ci(e):/\d/.test(e[re+1])&&(t+=e[re++]+ci(e))),gl(e)){let n=di(e);return n==="deg"||n==="rad"||n==="turn"||n==="grad"?{type:W.Hue,value:t*tb[n]}:void 0}return e[re]==="%"?(re++,{type:W.Percentage,value:+t}):{type:W.Number,value:+t}}function ci(e){let t="";for(;/\d/.test(e[re]);)t+=e[re++];return t}function di(e){let t="";for(;re<e.length&&eb.test(e[re]);)t+=e[re++];return t}function nb(e){let t=di(e);return e[re]==="("?(re++,{type:W.Function,value:t}):t==="none"?{type:W.None,value:void 0}:{type:W.Ident,value:t}}function ob(e=""){let t=e.trim(),n=[],o;for(re=0;re<t.length;){if(o=t[re++],o===`
`||o==="	"||o===" "){for(;re<t.length&&(t[re]===`
`||t[re]==="	"||t[re]===" ");)re++;continue}if(o===",")return;if(o===")"){n.push({type:W.ParenClose});continue}if(o==="+"){if(re--,si(t)){n.push(Zo(t));continue}return}if(o==="-"){if(re--,si(t)){n.push(Zo(t));continue}if(gl(t)){n.push({type:W.Ident,value:di(t)});continue}return}if(o==="."){if(re--,si(t)){n.push(Zo(t));continue}return}if(o==="/"){for(;re<t.length&&(t[re]===`
`||t[re]==="	"||t[re]===" ");)re++;let r;if(si(t)&&(r=Zo(t),r.type!==W.Hue)){n.push({type:W.Alpha,value:r});continue}if(gl(t)&&di(t)==="none"){n.push({type:W.Alpha,value:{type:W.None,value:void 0}});continue}return}if(/\d/.test(o)){re--,n.push(Zo(t));continue}if(hl.test(o)){re--,n.push(nb(t));continue}return}return n}function rb(e){e._i=0;let t=e[e._i++];if(!t||t.type!==W.Function||t.value!=="color"||(t=e[e._i++],t.type!==W.Ident))return;let n=ml[t.value];if(!n)return;let o={mode:n},r=Id(e,!1);if(!r)return;let i=Dd(n).channels;for(let a=0,l,s;a<i.length;a++)l=r[a],s=i[a],l.type!==W.None&&(o[s]=l.type===W.Number?l.value:l.value/100,s==="alpha"&&(o[s]=Math.max(0,Math.min(1,o[s]))));return o}function Id(e,t){let n=[],o;for(;e._i<e.length;){if(o=e[e._i++],o.type===W.None||o.type===W.Number||o.type===W.Alpha||o.type===W.Percentage||t&&o.type===W.Hue){n.push(o);continue}if(o.type===W.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==W.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:W.None,value:void 0}),n.every(r=>r.type!==W.Alpha)?n:void 0}}function ib(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==W.Function)return;let o=Id(e,t);if(o)return o.unshift(n.value),o}var hl,eb,W,re,tb,ab,so,zt=T(()=>{li();hl=/[^\x00-\x7F]|[a-zA-Z_]/,eb=/[^\x00-\x7F]|[-\w]/,W={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"},re=0;tb={deg:1,rad:180/Math.PI,grad:9/10,turn:360};ab=e=>{if(typeof e!="string")return;let t=ob(e),n=t?ib(t,!0):void 0,o,r=0,i=Ko.length;for(;r<i;)if((o=Ko[r++](e,n))!==void 0)return o;return t?rb(t):void 0},so=ab});function lb(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;let n={mode:"rgb"},[,o,r,i,a]=t;if(!(o.type===W.Hue||r.type===W.Hue||i.type===W.Hue))return o.type!==W.None&&(n.r=o.type===W.Number?o.value/255:o.value/100),r.type!==W.None&&(n.g=r.type===W.Number?r.value/255:r.value/100),i.type!==W.None&&(n.b=i.type===W.Number?i.value/255:i.value/100),a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var Od,zd=T(()=>{zt();Od=lb});var sb,Fd,Vd=T(()=>{sb=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,Fd=sb});var Bd,Wd=T(()=>{Bd=(e,t,n)=>e+n*(t-e)});var cb,qd,jd=T(()=>{cb=e=>{let t=[];for(let n=0;n<e.length-1;n++){let o=e[n],r=e[n+1];o===void 0&&r===void 0?t.push(void 0):o!==void 0&&r!==void 0?t.push([o,r]):t.push(o!==void 0?[o,o]:[r,r])}return t},qd=e=>t=>{let n=cb(t);return o=>{let r=o*n.length,i=o>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}}});var q,ze=T(()=>{Wd();jd();q=qd(Bd)});var he,Fe=T(()=>{he=e=>{let t=!1,n=e.map(o=>o!==void 0?(t=!0,o):1);return t?n:e}});var db,vt,Fn=T(()=>{_d();Hd();Pd();zd();Vd();ze();Fe();db={mode:"rgb",channels:["r","g","b","alpha"],parse:[Od,Rd,Ad,Td,Fd,"srgb"],serialize:"srgb",interpolate:{r:q,g:q,b:q,alpha:{use:q,fixup:he}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},vt=db});var bl,ub,yl,Ud=T(()=>{bl=(e=0)=>Math.pow(Math.abs(e),2.19921875)*Math.sign(e),ub=e=>{let t=bl(e.r),n=bl(e.g),o=bl(e.b),r={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*o,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*o,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*o};return e.alpha!==void 0&&(r.alpha=e.alpha),r},yl=ub});var xl,pb,vl,Xd=T(()=>{xl=e=>Math.pow(Math.abs(e),.4547069271758437)*Math.sign(e),pb=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"a98",r:xl(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:xl(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:xl(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return o!==void 0&&(r.alpha=o),r},vl=pb});var wl,fb,wt,Vn=T(()=>{wl=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},fb=({r:e,g:t,b:n,alpha:o})=>{let r={mode:"lrgb",r:wl(e),g:wl(t),b:wl(n)};return o!==void 0&&(r.alpha=o),r},wt=fb});var mb,ct,yn=T(()=>{Vn();mb=e=>{let{r:t,g:n,b:o,alpha:r}=wt(e),i={mode:"xyz65",x:.4123907992659593*t+.357584339383878*n+.1804807884018343*o,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*o,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*o};return r!==void 0&&(i.alpha=r),i},ct=mb});var El,hb,Et,Bn=T(()=>{El=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,.4166666666666667)-.055):e*12.92},hb=({r:e,g:t,b:n,alpha:o},r="rgb")=>{let i={mode:r,r:El(e),g:El(t),b:El(n)};return o!==void 0&&(i.alpha=o),i},Et=hb});var gb,dt,xn=T(()=>{Bn();gb=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Et({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return o!==void 0&&(r.alpha=o),r},dt=gb});var bb,Gd,Yd=T(()=>{Fn();Ud();Xd();yn();xn();bb={...vt,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>vl(ct(e)),xyz65:vl},toMode:{rgb:e=>dt(yl(e)),xyz65:yl}},Gd=bb});var yb,we,Ct=T(()=>{yb=e=>(e=e%360)<0?e+360:e,we=yb});var xb,Ge,Ft=T(()=>{Ct();xb=(e,t)=>e.map((n,o,r)=>{if(n===void 0)return n;let i=we(n);return o===0||e[o-1]===void 0?i:t(i-we(r[o-1]))}).reduce((n,o)=>!n.length||o===void 0||n[n.length-1]===void 0?(n.push(o),n):(n.push(o+n[n.length-1]),n),[]),Ge=e=>xb(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t))});var Ve,Kd,Zd,Cl=T(()=>{Ve=[-.14861,1.78277,-.29227,-.90649,1.97294,0],Kd=Math.PI/180,Zd=180/Math.PI});var Jd,Qd,eu,vb,tu,nu=T(()=>{Cl();Jd=Ve[3]*Ve[4],Qd=Ve[1]*Ve[4],eu=Ve[1]*Ve[2]-Ve[0]*Ve[3],vb=({r:e,g:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(eu*n+e*Jd-t*Qd)/(eu+Jd-Qd),i=n-r,a=(Ve[4]*(t-r)-Ve[2]*i)/Ve[3],l={mode:"cubehelix",l:r,s:r===0||r===1?void 0:Math.sqrt(i*i+a*a)/(Ve[4]*r*(1-r))};return l.s&&(l.h=Math.atan2(a,i)*Zd-120),o!==void 0&&(l.alpha=o),l},tu=vb});var wb,ou,ru=T(()=>{Cl();wb=({h:e,s:t,l:n,alpha:o})=>{let r={mode:"rgb"};e=(e===void 0?0:e+120)*Kd,n===void 0&&(n=0);let i=t===void 0?0:t*n*(1-n),a=Math.cos(e),l=Math.sin(e);return r.r=n+i*(Ve[0]*a+Ve[1]*l),r.g=n+i*(Ve[2]*a+Ve[3]*l),r.b=n+i*(Ve[4]*a+Ve[5]*l),o!==void 0&&(r.alpha=o),r},ou=wb});var vn,iu,wn,Vt=T(()=>{Ct();vn=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=we(e.h),o=we(t.h),r=Math.sin((o-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*r},iu=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=we(e.h),o=we(t.h);return Math.abs(o-n)>180?n-(o-360*Math.sign(o-n)):o-n},wn=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=we(e.h),o=we(t.h),r=Math.sin((o-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*r}});var Ye,Bt=T(()=>{Ye=e=>{let t=e.reduce((o,r)=>{if(r!==void 0){let i=r*Math.PI/180;o.sin+=Math.sin(i),o.cos+=Math.cos(i)}return o},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n}});var Eb,au,lu=T(()=>{Ft();Fe();ze();nu();ru();Vt();Bt();Eb={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:tu},toMode:{rgb:ou},interpolate:{h:{use:q,fixup:Ge},s:q,l:q,alpha:{use:q,fixup:he}},difference:{h:vn},average:{h:Ye}},au=Eb});var Cb,ht,co=T(()=>{Ct();Cb=({l:e,a:t,b:n,alpha:o},r="lch")=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:r,l:e,c:i};return i&&(a.h=we(Math.atan2(n,t)*180/Math.PI)),o!==void 0&&(a.alpha=o),a},ht=Cb});var Sb,gt,uo=T(()=>{Sb=({l:e,c:t,h:n,alpha:o},r="lab")=>{n===void 0&&(n=0);let i={mode:r,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return o!==void 0&&(i.alpha=o),i},gt=Sb});var ui,pi,Sl=T(()=>{ui=Math.pow(29,3)/Math.pow(3,3),pi=Math.pow(6,3)/Math.pow(29,3)});var He,En,EE,CE,Wn=T(()=>{He={X:.9642956764295677,Y:1,Z:.8251046025104602},En={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329},EE=Math.pow(29,3)/Math.pow(3,3),CE=Math.pow(6,3)/Math.pow(29,3)});var Ml,Mb,fi,Ll=T(()=>{Sl();Wn();Ml=e=>Math.pow(e,3)>pi?Math.pow(e,3):(116*e-16)/ui,Mb=({l:e,a:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+16)/116,i=t/500+r,a=r-n/200,l={mode:"xyz65",x:Ml(i)*En.X,y:Ml(r)*En.Y,z:Ml(a)*En.Z};return o!==void 0&&(l.alpha=o),l},fi=Mb});var Lb,Cn,Jo=T(()=>{Ll();xn();Lb=e=>dt(fi(e)),Cn=Lb});var kl,kb,mi,Tl=T(()=>{Sl();Wn();kl=e=>e>pi?Math.cbrt(e):(ui*e+16)/116,kb=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=kl(e/En.X),i=kl(t/En.Y),a=kl(n/En.Z),l={mode:"lab65",l:116*i-16,a:500*(r-i),b:200*(i-a)};return o!==void 0&&(l.alpha=o),l},mi=kb});var Tb,Sn,Qo=T(()=>{yn();Tl();Tb=e=>{let t=mi(ct(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Sn=Tb});var qn,po,fo,hi,_l=T(()=>{qn=.14444444444444443*Math.PI,po=Math.cos(qn),fo=Math.sin(qn),hi=100/Math.log(139/100)});var _b,tr,Hl=T(()=>{_l();_b=({l:e,c:t,h:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"lab65",l:(Math.exp(e*1/hi)-1)/.0039},i=(Math.exp(.0435*t*1*1)-1)/.075,a=i*Math.cos(n/180*Math.PI-qn),l=i*Math.sin(n/180*Math.PI-qn);return r.a=a*po-l/.83*fo,r.b=a*fo+l/.83*po,o!==void 0&&(r.alpha=o),r},tr=_b});var Rb,nr,Nl=T(()=>{_l();Ct();Rb=({l:e,a:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=t*po+n*fo,i=.83*(n*po-t*fo),a=Math.sqrt(r*r+i*i),l={mode:"dlch",l:hi/1*Math.log(1+.0039*e),c:Math.log(1+.075*a)/(.0435*1*1)};return l.c&&(l.h=we((Math.atan2(i,r)+qn)/Math.PI*180)),o!==void 0&&(l.alpha=o),l},nr=Rb});var su,cu,Hb,du,uu=T(()=>{co();uo();Jo();Qo();Hl();Nl();ze();Fe();su=e=>tr(ht(e,"dlch")),cu=e=>gt(nr(e),"dlab"),Hb={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:su,rgb:e=>Cn(su(e))},fromMode:{lab65:cu,rgb:e=>cu(Sn(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:q,a:q,b:q,alpha:{use:q,fixup:he}}},du=Hb});var Nb,pu,fu=T(()=>{co();uo();Hl();Nl();Jo();Qo();Ft();Fe();ze();Vt();Bt();Nb={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:tr,dlab:e=>gt(e,"dlab"),rgb:e=>Cn(tr(e))},fromMode:{lab65:nr,dlab:e=>ht(e,"dlch"),rgb:e=>nr(Sn(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:q,c:q,h:{use:q,fixup:Ge},alpha:{use:q,fixup:he}},difference:{h:wn},average:{h:Ye}},pu=Nb});function Al({h:e,s:t,i:n,alpha:o}){e=we(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:n*(1+t*(3/(2-r)-1)),g:n*(1+t*(3*(1-r)/(2-r)-1)),b:n*(1-t)};break;case 1:i={r:n*(1+t*(3*(1-r)/(2-r)-1)),g:n*(1+t*(3/(2-r)-1)),b:n*(1-t)};break;case 2:i={r:n*(1-t),g:n*(1+t*(3/(2-r)-1)),b:n*(1+t*(3*(1-r)/(2-r)-1))};break;case 3:i={r:n*(1-t),g:n*(1+t*(3*(1-r)/(2-r)-1)),b:n*(1+t*(3/(2-r)-1))};break;case 4:i={r:n*(1+t*(3*(1-r)/(2-r)-1)),g:n*(1-t),b:n*(1+t*(3/(2-r)-1))};break;case 5:i={r:n*(1+t*(3/(2-r)-1)),g:n*(1-t),b:n*(1+t*(3*(1-r)/(2-r)-1))};break;default:i={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return i.mode="rgb",o!==void 0&&(i.alpha=o),i}var mu=T(()=>{Ct()});function Pl({r:e,g:t,b:n,alpha:o}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),i=Math.min(e,t,n),a={mode:"hsi",s:e+t+n===0?0:1-3*i/(e+t+n),i:(e+t+n)/3};return r-i!==0&&(a.h=(r===e?(t-n)/(r-i)+(t<n)*6:r===t?(n-e)/(r-i)+2:(e-t)/(r-i)+4)*60),o!==void 0&&(a.alpha=o),a}var hu=T(()=>{});var Ab,gu,bu=T(()=>{mu();hu();Ft();Fe();ze();Vt();Bt();Ab={mode:"hsi",toMode:{rgb:Al},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:Pl},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:q,fixup:Ge},s:q,i:q,alpha:{use:q,fixup:he}},difference:{h:vn},average:{h:Ye}},gu=Ab});function $l({h:e,s:t,l:n,alpha:o}){e=we(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=n+t*(n<.5?n:1-n),i=r-(r-n)*2*Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r,g:i,b:2*n-r};break;case 1:a={r:i,g:r,b:2*n-r};break;case 2:a={r:2*n-r,g:r,b:i};break;case 3:a={r:2*n-r,g:i,b:r};break;case 4:a={r:i,g:2*n-r,b:r};break;case 5:a={r,g:2*n-r,b:i};break;default:a={r:2*n-r,g:2*n-r,b:2*n-r}}return a.mode="rgb",o!==void 0&&(a.alpha=o),a}var yu=T(()=>{Ct()});function Dl({r:e,g:t,b:n,alpha:o}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),i=Math.min(e,t,n),a={mode:"hsl",s:r===i?0:(r-i)/(1-Math.abs(r+i-1)),l:.5*(r+i)};return r-i!==0&&(a.h=(r===e?(t-n)/(r-i)+(t<n)*6:r===t?(n-e)/(r-i)+2:(e-t)/(r-i)+4)*60),o!==void 0&&(a.alpha=o),a}var xu=T(()=>{});var Pb,vu,wu=T(()=>{Pb=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},vu=Pb});var $b,Db,Eu,Cu=T(()=>{wu();pl();$b=new RegExp(`^hsla?\\(\\s*${Nd}${gn}${zn}${gn}${zn}\\s*(?:,\\s*${Yo}\\s*)?\\)$`),Db=e=>{let t=e.match($b);if(!t)return;let n={mode:"hsl"};return t[3]!==void 0?n.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(n.h=vu(t[1],t[2])),t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?n.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))),n},Eu=Db});function Ib(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;let n={mode:"hsl"},[,o,r,i,a]=t;if(o.type!==W.None){if(o.type===W.Percentage)return;n.h=o.value}if(r.type!==W.None){if(r.type===W.Hue)return;n.s=r.value/100}if(i.type!==W.None){if(i.type===W.Hue)return;n.l=i.value/100}return a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var Su,Mu=T(()=>{zt();Su=Ib});var Ob,gi,Il=T(()=>{yu();xu();Cu();Mu();Ft();Fe();ze();Vt();Bt();Ob={mode:"hsl",toMode:{rgb:$l},fromMode:{rgb:Dl},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[Su,Eu],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:q,fixup:Ge},s:q,l:q,alpha:{use:q,fixup:he}},difference:{h:vn},average:{h:Ye}},gi=Ob});function or({h:e,s:t,v:n,alpha:o}){e=we(e!==void 0?e:0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.abs(e/60%2-1),i;switch(Math.floor(e/60)){case 0:i={r:n,g:n*(1-t*r),b:n*(1-t)};break;case 1:i={r:n*(1-t*r),g:n,b:n*(1-t)};break;case 2:i={r:n*(1-t),g:n,b:n*(1-t*r)};break;case 3:i={r:n*(1-t),g:n*(1-t*r),b:n};break;case 4:i={r:n*(1-t*r),g:n*(1-t),b:n};break;case 5:i={r:n,g:n*(1-t),b:n*(1-t*r)};break;default:i={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return i.mode="rgb",o!==void 0&&(i.alpha=o),i}var Ol=T(()=>{Ct()});function rr({r:e,g:t,b:n,alpha:o}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.max(e,t,n),i=Math.min(e,t,n),a={mode:"hsv",s:r===0?0:1-i/r,v:r};return r-i!==0&&(a.h=(r===e?(t-n)/(r-i)+(t<n)*6:r===t?(n-e)/(r-i)+2:(e-t)/(r-i)+4)*60),o!==void 0&&(a.alpha=o),a}var zl=T(()=>{});var zb,bi,Fl=T(()=>{Ol();zl();Ft();Fe();ze();Vt();Bt();zb={mode:"hsv",toMode:{rgb:or},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:rr},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:q,fixup:Ge},s:q,v:q,alpha:{use:q,fixup:he}},difference:{h:vn},average:{h:Ye}},bi=zb});function Vl({h:e,w:t,b:n,alpha:o}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let r=t+n;t/=r,n/=r}return or({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:o})}var Lu=T(()=>{Ol()});function Bl(e){let t=rr(e);if(t===void 0)return;let n=t.s!==void 0?t.s:0,o=t.v!==void 0?t.v:0,r={mode:"hwb",w:(1-n)*o,b:1-o};return t.h!==void 0&&(r.h=t.h),t.alpha!==void 0&&(r.alpha=t.alpha),r}var ku=T(()=>{zl()});function Fb(e,t){if(!t||t[0]!=="hwb")return;let n={mode:"hwb"},[,o,r,i,a]=t;if(o.type!==W.None){if(o.type===W.Percentage)return;n.h=o.value}if(r.type!==W.None){if(r.type===W.Hue)return;n.w=r.value/100}if(i.type!==W.None){if(i.type===W.Hue)return;n.b=i.value/100}return a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var Tu,_u=T(()=>{zt();Tu=Fb});var Vb,Ru,Hu=T(()=>{Lu();ku();_u();Ft();Fe();ze();Vt();Bt();Vb={mode:"hwb",toMode:{rgb:Vl},fromMode:{rgb:Bl},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[Tu],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:q,fixup:Ge},w:q,b:q,alpha:{use:q,fixup:he}},difference:{h:iu},average:{h:Ye}},Ru=Vb});function yi(e){if(e<0)return 0;let t=Math.pow(e,1/Nu);return 1e4*Math.pow(Math.max(0,t-ho)/(go-bo*t),1/mo)}function xi(e){if(e<0)return 0;let t=Math.pow(e/1e4,mo);return Math.pow((ho+go*t)/(1+bo*t),Nu)}var mo,Nu,ho,go,bo,ir=T(()=>{mo=.1593017578125,Nu=78.84375,ho=.8359375,go=18.8515625,bo=18.6875});var Wl,Wb,ql,Au=T(()=>{ir();Wl=e=>Math.max(e/203,0),Wb=({i:e,t,p:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=yi(e+.008609037037932761*t+.11102962500302593*n),i=yi(e-.00860903703793275*t-.11102962500302599*n),a=yi(e+.5600313357106791*t-.32062717498731885*n),l={mode:"xyz65",x:Wl(2.070152218389422*r-1.3263473389671556*i+.2066510476294051*a),y:Wl(.3647385209748074*r+.680566024947227*i-.0453045459220346*a),z:Wl(-.049747207535812*r-.0492609666966138*i+1.1880659249923042*a)};return o!==void 0&&(l.alpha=o),l},ql=Wb});var jl,qb,Ul,Pu=T(()=>{ir();jl=(e=0)=>Math.max(e*203,0),qb=({x:e,y:t,z:n,alpha:o})=>{let r=jl(e),i=jl(t),a=jl(n),l=xi(.3592832590121217*r+.6976051147779502*i-.0358915932320289*a),s=xi(-.1920808463704995*r+1.1004767970374323*i+.0753748658519118*a),c=xi(.0070797844607477*r+.0748396662186366*i+.8433265453898765*a),d=.5*l+.5*s,p=1.61376953125*l-3.323486328125*s+1.709716796875*c,u=4.378173828125*l-4.24560546875*s-.132568359375*c,g={mode:"itp",i:d,t:p,p:u};return o!==void 0&&(g.alpha=o),g},Ul=qb});var jb,$u,Du=T(()=>{ze();Fe();Au();Pu();yn();xn();jb={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:ql,rgb:e=>dt(ql(e))},fromMode:{xyz65:Ul,rgb:e=>Ul(ct(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:q,t:q,p:q,alpha:{use:q,fixup:he}}},$u=jb});var Ub,Xb,Xl,Gl,Gb,vi,Yl=T(()=>{ir();Ub=134.03437499999998,Xb=16295499532821565e-27,Xl=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,mo);return Math.pow((ho+go*t)/(1+bo*t),Ub)},Gl=(e=0)=>Math.max(e*203,0),Gb=({x:e,y:t,z:n,alpha:o})=>{e=Gl(e),t=Gl(t),n=Gl(n);let r=1.15*e-.15*n,i=.66*t+.34*e,a=Xl(.41478972*r+.579999*i+.014648*n),l=Xl(-.20151*r+1.120649*i+.0531008*n),s=Xl(-.0166008*r+.2648*i+.6684799*n),c=(a+l)/2,d={mode:"jab",j:.44*c/(1-.56*c)-Xb,a:3.524*a-4.066708*l+.542708*s,b:.199076*a+1.096799*l-1.295875*s};return o!==void 0&&(d.alpha=o),d},vi=Gb});var Yb,Iu,Kl,Zl,Kb,wi,Jl=T(()=>{ir();Yb=134.03437499999998,Iu=16295499532821565e-27,Kl=e=>{if(e<0)return 0;let t=Math.pow(e,1/Yb);return 1e4*Math.pow((ho-t)/(bo*t-go),1/mo)},Zl=e=>e/203,Kb=({j:e,a:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+Iu)/(.44+.56*(e+Iu)),i=Kl(r+.13860504*t+.058047316*n),a=Kl(r-.13860504*t-.058047316*n),l=Kl(r-.096019242*t-.8118919*n),s={mode:"xyz65",x:Zl(1.661373024652174*i-.914523081304348*a+.23136208173913045*l),y:Zl(-.3250758611844533*i+1.571847026732543*a-.21825383453227928*l),z:Zl(-.090982811*i-.31272829*a+1.5227666*l)};return o!==void 0&&(s.alpha=o),s},wi=Kb});var Zb,Ei,Ql=T(()=>{Yl();yn();Zb=e=>{let t=vi(ct(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ei=Zb});var Jb,Ci,es=T(()=>{xn();Jl();Jb=e=>dt(wi(e)),Ci=Jb});var Qb,Ou,zu=T(()=>{Yl();Jl();Ql();es();ze();Fe();Qb={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:Ei,xyz65:vi},toMode:{rgb:Ci,xyz65:wi},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:q,a:q,b:q,alpha:{use:q,fixup:he}}},Ou=Qb});var ey,ts,Fu=T(()=>{Ct();ey=({j:e,a:t,b:n,alpha:o})=>{t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.sqrt(t*t+n*n),i={mode:"jch",j:e,c:r};return r&&(i.h=we(Math.atan2(n,t)*180/Math.PI)),o!==void 0&&(i.alpha=o),i},ts=ey});var ty,ns,Vu=T(()=>{ty=({j:e,c:t,h:n,alpha:o})=>{n===void 0&&(n=0);let r={mode:"jab",j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return o!==void 0&&(r.alpha=o),r},ns=ty});var ny,Bu,Wu=T(()=>{Fu();Vu();es();Ql();Ft();Fe();ze();Vt();Bt();ny={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:ns,rgb:e=>Ci(ns(e))},fromMode:{rgb:e=>ts(Ei(e)),jab:ts},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:q,fixup:Ge},c:q,j:q,alpha:{use:q,fixup:he}},difference:{h:wn},average:{h:Ye}},Bu=ny});var Mn,yo,ar=T(()=>{Mn=Math.pow(29,3)/Math.pow(3,3),yo=Math.pow(6,3)/Math.pow(29,3)});var os,oy,xo,Si=T(()=>{ar();Wn();os=e=>Math.pow(e,3)>yo?Math.pow(e,3):(116*e-16)/Mn,oy=({l:e,a:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=(e+16)/116,i=t/500+r,a=r-n/200,l={mode:"xyz50",x:os(i)*He.X,y:os(r)*He.Y,z:os(a)*He.Z};return o!==void 0&&(l.alpha=o),l},xo=oy});var ry,Wt,vo=T(()=>{Bn();ry=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Et({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return o!==void 0&&(r.alpha=o),r},Wt=ry});var iy,Mi,rs=T(()=>{Si();vo();iy=e=>Wt(xo(e)),Mi=iy});var ay,qt,wo=T(()=>{Vn();ay=e=>{let{r:t,g:n,b:o,alpha:r}=wt(e),i={mode:"xyz50",x:.436065742824811*t+.3851514688337912*n+.14307845442264197*o,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*o,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*o};return r!==void 0&&(i.alpha=r),i},qt=ay});var is,ly,Eo,Li=T(()=>{ar();Wn();is=e=>e>yo?Math.cbrt(e):(Mn*e+16)/116,ly=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=is(e/He.X),i=is(t/He.Y),a=is(n/He.Z),l={mode:"lab",l:116*i-16,a:500*(r-i),b:200*(i-a)};return o!==void 0&&(l.alpha=o),l},Eo=ly});var sy,ki,as=T(()=>{wo();Li();sy=e=>{let t=Eo(qt(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},ki=sy});function cy(e,t){if(!t||t[0]!=="lab")return;let n={mode:"lab"},[,o,r,i,a]=t;if(!(o.type===W.Hue||r.type===W.Hue||i.type===W.Hue))return o.type!==W.None&&(n.l=Math.min(Math.max(0,o.value),100)),r.type!==W.None&&(n.a=r.type===W.Number?r.value:r.value*125/100),i.type!==W.None&&(n.b=i.type===W.Number?i.value:i.value*125/100),a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var qu,ju=T(()=>{zt();qu=cy});var dy,Co,Ti=T(()=>{rs();Si();as();Li();ju();ze();Fe();dy={mode:"lab",toMode:{xyz50:xo,rgb:Mi},fromMode:{xyz50:Eo,rgb:ki},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[qu],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:q,a:q,b:q,alpha:{use:q,fixup:he}}},Co=dy});var uy,Uu,Xu=T(()=>{Jo();Ll();Qo();Tl();Ti();uy={...Co,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:fi,rgb:Cn},fromMode:{xyz65:mi,rgb:Sn},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}},Uu=uy});function py(e,t){if(!t||t[0]!=="lch")return;let n={mode:"lch"},[,o,r,i,a]=t;if(o.type!==W.None){if(o.type===W.Hue)return;n.l=Math.min(Math.max(0,o.value),100)}if(r.type!==W.None&&(n.c=Math.max(0,r.type===W.Number?r.value:r.value*150/100)),i.type!==W.None){if(i.type===W.Percentage)return;n.h=i.value}return a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var Gu,Yu=T(()=>{zt();Gu=py});var fy,So,_i=T(()=>{co();uo();rs();as();Yu();Ft();Fe();ze();Vt();Bt();fy={mode:"lch",toMode:{lab:gt,rgb:e=>Mi(gt(e))},fromMode:{rgb:e=>ht(ki(e)),lab:ht},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[Gu],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:q,fixup:Ge},c:q,l:q,alpha:{use:q,fixup:he}},difference:{h:wn},average:{h:Ye}},So=fy});var my,Ku,Zu=T(()=>{co();uo();Jo();Qo();_i();my={...So,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>gt(e,"lab65"),rgb:e=>Cn(gt(e,"lab65"))},fromMode:{rgb:e=>ht(Sn(e),"lch65"),lab65:e=>ht(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Ku=my});var hy,ls,Ju=T(()=>{Ct();hy=({l:e,u:t,v:n,alpha:o})=>{t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.sqrt(t*t+n*n),i={mode:"lchuv",l:e,c:r};return r&&(i.h=we(Math.atan2(n,t)*180/Math.PI)),o!==void 0&&(i.alpha=o),i},ls=hy});var gy,ss,Qu=T(()=>{gy=({l:e,c:t,h:n,alpha:o})=>{n===void 0&&(n=0);let r={mode:"luv",l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return o!==void 0&&(r.alpha=o),r},ss=gy});var ep,tp,by,yy,xy,vy,lr,cs=T(()=>{ar();Wn();ep=(e,t,n)=>4*e/(e+15*t+3*n),tp=(e,t,n)=>9*t/(e+15*t+3*n),by=ep(He.X,He.Y,He.Z),yy=tp(He.X,He.Y,He.Z),xy=e=>e<=yo?Mn*e:116*Math.cbrt(e)-16,vy=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=xy(t/He.Y),i=ep(e,t,n),a=tp(e,t,n);!isFinite(i)||!isFinite(a)?r=i=a=0:(i=13*r*(i-by),a=13*r*(a-yy));let l={mode:"luv",l:r,u:i,v:a};return o!==void 0&&(l.alpha=o),l},lr=vy});var wy,Ey,Cy,Sy,My,sr,ds=T(()=>{ar();Wn();wy=(e,t,n)=>4*e/(e+15*t+3*n),Ey=(e,t,n)=>9*t/(e+15*t+3*n),Cy=wy(He.X,He.Y,He.Z),Sy=Ey(He.X,He.Y,He.Z),My=({l:e,u:t,v:n,alpha:o})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let r=t/(13*e)+Cy,i=n/(13*e)+Sy,a=He.Y*(e<=8?e/Mn:Math.pow((e+16)/116,3)),l=a*(9*r)/(4*i),s=a*(12-3*r-20*i)/(4*i),c={mode:"xyz50",x:l,y:a,z:s};return o!==void 0&&(c.alpha=o),c},sr=My});var Ly,ky,Ty,np,op=T(()=>{Ju();Qu();cs();ds();vo();wo();Ft();Fe();ze();Vt();Bt();Ly=e=>ls(lr(qt(e))),ky=e=>Wt(sr(ss(e))),Ty={mode:"lchuv",toMode:{luv:ss,rgb:ky},fromMode:{rgb:Ly,luv:ls},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:q,fixup:Ge},c:q,l:q,alpha:{use:q,fixup:he}},difference:{h:wn},average:{h:Ye}},np=Ty});var _y,rp,ip=T(()=>{Fn();Vn();Bn();_y={...vt,mode:"lrgb",toMode:{rgb:Et},fromMode:{rgb:wt},parse:["srgb-linear"],serialize:"srgb-linear"},rp=_y});var Ry,ap,lp=T(()=>{cs();ds();vo();wo();ze();Fe();Ry={mode:"luv",toMode:{xyz50:sr,rgb:e=>Wt(sr(e))},fromMode:{xyz50:lr,rgb:e=>lr(qt(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:q,u:q,v:q,alpha:{use:q,fixup:he}}},ap=Ry});var Hy,Ri,us=T(()=>{Hy=({r:e,g:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),i=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),a=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),l={mode:"oklab",l:.210454268309314*r+.7936177747023054*i-.0040720430116193*a,a:1.9779985324311684*r-2.42859224204858*i+.450593709617411*a,b:.0259040424655478*r+.7827717124575296*i-.8086757549230774*a};return o!==void 0&&(l.alpha=o),l},Ri=Hy});var Ny,Ln,cr=T(()=>{Vn();us();Ny=e=>{let t=Ri(wt(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ln=Ny});var Ay,jt,Mo=T(()=>{Ay=({l:e,a:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Math.pow(e+.3963377773761749*t+.2158037573099136*n,3),i=Math.pow(e-.1055613458156586*t-.0638541728258133*n,3),a=Math.pow(e-.0894841775298119*t-1.2914855480194092*n,3),l={mode:"lrgb",r:4.076741636075957*r-3.3077115392580616*i+.2309699031821044*a,g:-1.2684379732850317*r+2.6097573492876887*i-.3413193760026573*a,b:-.0041960761386756*r-.7034186179359362*i+1.7076146940746117*a};return o!==void 0&&(l.alpha=o),l},jt=Ay});var Py,kn,dr=T(()=>{Bn();Mo();Py=e=>Et(jt(e)),kn=Py});function ur(e){let o=1.170873786407767;return .5*(o*e-.206+Math.sqrt((o*e-.206)*(o*e-.206)+4*.03*o*e))}function jn(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function $y(e,t){let n,o,r,i,a,l,s,c;-1.88170328*e-.80936493*t>1?(n=1.19086277,o=1.76576728,r=.59662641,i=.75515197,a=.56771245,l=4.0767416621,s=-3.3077115913,c=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,o=-.45954404,r=.08285427,i=.1254107,a=.14503204,l=-1.2684380046,s=2.6097574011,c=-.3413193965):(n=1.35733652,o=-.00915799,r=-1.1513021,i=-.50559606,a=.00692167,l=-.0041960863,s=-.7034186147,c=1.707614701);let d=n+o*e+r*t+i*e*e+a*e*t,p=.3963377774*e+.2158037573*t,u=-.1055613458*e-.0638541728*t,g=-.0894841775*e-1.291485548*t;{let h=1+d*p,m=1+d*u,b=1+d*g,x=h*h*h,E=m*m*m,w=b*b*b,v=3*p*h*h,L=3*u*m*m,k=3*g*b*b,N=6*p*p*h,I=6*u*u*m,_=6*g*g*b,$=l*x+s*E+c*w,O=l*v+s*L+c*k,F=l*N+s*I+c*_;d=d-$*O/(O*O-.5*$*F)}return d}function ps(e,t){let n=$y(e,t),o=jt({l:1,a:n*e,b:n*t}),r=Math.cbrt(1/Math.max(o.r,o.g,o.b)),i=r*n;return[r,i]}function Dy(e,t,n,o,r,i=null){i||(i=ps(e,t));let a;if((n-r)*i[1]-(i[0]-r)*o<=0)a=i[1]*r/(o*i[0]+i[1]*(r-n));else{a=i[1]*(r-1)/(o*(i[0]-1)+i[1]*(r-n));{let l=n-r,s=o,c=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t,u=l+s*c,g=l+s*d,h=l+s*p;{let m=r*(1-a)+a*n,b=a*o,x=m+b*c,E=m+b*d,w=m+b*p,v=x*x*x,L=E*E*E,k=w*w*w,N=3*u*x*x,I=3*g*E*E,_=3*h*w*w,$=6*u*u*x,O=6*g*g*E,F=6*h*h*w,A=4.0767416621*v-3.3077115913*L+.2309699292*k-1,V=4.0767416621*N-3.3077115913*I+.2309699292*_,Z=4.0767416621*$-3.3077115913*O+.2309699292*F,se=V/(V*V-.5*A*Z),ce=-A*se,X=-1.2684380046*v+2.6097574011*L-.3413193965*k-1,K=-1.2684380046*N+2.6097574011*I-.3413193965*_,ge=-1.2684380046*$+2.6097574011*O-.3413193965*F,te=K/(K*K-.5*X*ge),Ee=-X*te,ve=-.0041960863*v-.7034186147*L+1.707614701*k-1,Te=-.0041960863*N-.7034186147*I+1.707614701*_,Ce=-.0041960863*$-.7034186147*O+1.707614701*F,Se=Te/(Te*Te-.5*ve*Ce),be=-ve*Se;ce=se>=0?ce:1e6,Ee=te>=0?Ee:1e6,be=Se>=0?be:1e6,a+=Math.min(ce,Math.min(Ee,be))}}}return a}function pr(e,t,n=null){n||(n=ps(e,t));let o=n[0],r=n[1];return[r/o,r/(1-o)]}function Hi(e,t,n){let o=ps(t,n),r=Dy(t,n,e,1,e,o),i=pr(t,n,o),a=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),l=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),s=r/Math.min(e*i[0],(1-e)*i[1]),c=e*a,d=(1-e)*l,p=.9*s*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(d*d*d*d))));return c=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(c*c)+1/(d*d))),p,r]}var fr=T(()=>{Mo()});function Ni(e){let t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,o=e.b!==void 0?e.b:0,r={mode:"okhsl",l:ur(t)};e.alpha!==void 0&&(r.alpha=e.alpha);let i=Math.sqrt(n*n+o*o);if(!i)return r.s=0,r;let[a,l,s]=Hi(t,n/i,o/i),c;if(i<l){let d=0,p=.8*a,u=1-p/l;c=(i-d)/(p+u*(i-d))*.8}else{let d=l,p=.2*l*l*1.25*1.25/a,u=1-p/(s-l);c=.8+.2*((i-d)/(p+u*(i-d)))}return c&&(r.s=c,r.h=we(Math.atan2(o,n)*180/Math.PI)),r}var sp=T(()=>{Ct();fr()});function Ai(e){let t=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,o=e.l!==void 0?e.l:0,r={mode:"oklab",l:jn(o)};if(e.alpha!==void 0&&(r.alpha=e.alpha),!n||o===1)return r.a=r.b=0,r;let i=Math.cos(t/180*Math.PI),a=Math.sin(t/180*Math.PI),[l,s,c]=Hi(r.l,i,a),d,p,u,g;n<.8?(d=1.25*n,p=0,u=.8*l,g=1-u/s):(d=5*(n-.8),p=s,u=.2*s*s*1.25*1.25/l,g=1-u/(c-s));let h=p+d*u/(1-g*d);return r.a=h*i,r.b=h*a,r}var cp=T(()=>{fr()});var Iy,dp,up=T(()=>{cr();dr();sp();cp();Il();Iy={...gi,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Ni,rgb:e=>Ni(Ln(e))},toMode:{oklab:Ai,rgb:e=>kn(Ai(e))}},dp=Iy});function Pi(e){let t=e.l!==void 0?e.l:0,n=e.a!==void 0?e.a:0,o=e.b!==void 0?e.b:0,r=Math.sqrt(n*n+o*o),i=r?n/r:1,a=r?o/r:1,[l,s]=pr(i,a),c=.5,d=1-c/l,p=s/(r+t*s),u=p*t,g=p*r,h=jn(u),m=g*h/u,b=jt({l:h,a:i*m,b:a*m}),x=Math.cbrt(1/Math.max(b.r,b.g,b.b,0));t=t/x,r=r/x*ur(t)/t,t=ur(t);let E={mode:"okhsv",s:r?(c+s)*g/(s*c+s*d*g):0,v:t?t/u:0};return E.s&&(E.h=we(Math.atan2(o,n)*180/Math.PI)),e.alpha!==void 0&&(E.alpha=e.alpha),E}var pp=T(()=>{Ct();Mo();fr()});function $i(e){let t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h!==void 0?e.h:0,o=e.s!==void 0?e.s:0,r=e.v!==void 0?e.v:0,i=Math.cos(n/180*Math.PI),a=Math.sin(n/180*Math.PI),[l,s]=pr(i,a),c=.5,d=1-c/l,p=1-o*c/(c+s-s*d*o),u=o*s*c/(c+s-s*d*o),g=jn(p),h=u*g/p,m=jt({l:g,a:i*h,b:a*h}),b=Math.cbrt(1/Math.max(m.r,m.g,m.b,0)),x=jn(r*p),E=u*x/p;return t.l=x*b,t.a=E*i*b,t.b=E*a*b,t}var fp=T(()=>{Mo();fr()});var Oy,mp,hp=T(()=>{cr();dr();pp();fp();Fl();Oy={...bi,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Pi,rgb:e=>Pi(Ln(e))},toMode:{oklab:$i,rgb:e=>kn($i(e))}},mp=Oy});function zy(e,t){if(!t||t[0]!=="oklab")return;let n={mode:"oklab"},[,o,r,i,a]=t;if(!(o.type===W.Hue||r.type===W.Hue||i.type===W.Hue))return o.type!==W.None&&(n.l=Math.min(Math.max(0,o.type===W.Number?o.value:o.value/100),1)),r.type!==W.None&&(n.a=r.type===W.Number?r.value:r.value*.4/100),i.type!==W.None&&(n.b=i.type===W.Number?i.value:i.value*.4/100),a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var gp,bp=T(()=>{zt();gp=zy});var Fy,yp,xp=T(()=>{Mo();us();cr();dr();bp();Ti();Fy={...Co,mode:"oklab",toMode:{lrgb:jt,rgb:kn},fromMode:{lrgb:Ri,rgb:Ln},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[gp],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`},yp=Fy});function Vy(e,t){if(!t||t[0]!=="oklch")return;let n={mode:"oklch"},[,o,r,i,a]=t;if(o.type!==W.None){if(o.type===W.Hue)return;n.l=Math.min(Math.max(0,o.type===W.Number?o.value:o.value/100),1)}if(r.type!==W.None&&(n.c=Math.max(0,r.type===W.Number?r.value:r.value*.4/100)),i.type!==W.None){if(i.type===W.Percentage)return;n.h=i.value}return a.type!==W.None&&(n.alpha=Math.min(1,Math.max(0,a.type===W.Number?a.value:a.value/100))),n}var vp,wp=T(()=>{zt();vp=Vy});var By,Ep,Cp=T(()=>{_i();co();uo();dr();cr();wp();By={...So,mode:"oklch",toMode:{oklab:e=>gt(e,"oklab"),rgb:e=>kn(gt(e,"oklab"))},fromMode:{rgb:e=>ht(Ln(e),"oklch"),oklab:e=>ht(e,"oklch")},parse:[vp],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Ep=By});var Wy,fs,Sp=T(()=>{Vn();Wy=e=>{let{r:t,g:n,b:o,alpha:r}=wt(e),i={mode:"xyz65",x:.486570948648216*t+.265667693169093*n+.1982172852343625*o,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*o,z:0*t+.0451133818589026*n+1.043944368900976*o};return r!==void 0&&(i.alpha=r),i},fs=Wy});var qy,ms,Mp=T(()=>{Bn();qy=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Et({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},"p3");return o!==void 0&&(r.alpha=o),r},ms=qy});var jy,Lp,kp=T(()=>{Fn();Sp();Mp();yn();xn();jy={...vt,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>ms(ct(e)),xyz65:ms},toMode:{rgb:e=>dt(fs(e)),xyz65:fs}},Lp=jy});var hs,Uy,gs,Tp=T(()=>{hs=e=>{let t=Math.abs(e);return t>=.001953125?Math.sign(e)*Math.pow(t,.5555555555555556):16*e},Uy=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"prophoto",r:hs(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:hs(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:hs(e*0+t*0+1.2119675456389452*n)};return o!==void 0&&(r.alpha=o),r},gs=Uy});var bs,Xy,ys,_p=T(()=>{bs=(e=0)=>{let t=Math.abs(e);return t>=.03125?Math.sign(e)*Math.pow(t,1.8):e/16},Xy=e=>{let t=bs(e.r),n=bs(e.g),o=bs(e.b),r={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*o,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*o,z:0*t+0*n+.8251046025104602*o};return e.alpha!==void 0&&(r.alpha=e.alpha),r},ys=Xy});var Gy,Rp,Hp=T(()=>{Fn();Tp();_p();vo();wo();Gy={...vt,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:gs,rgb:e=>gs(qt(e))},toMode:{xyz50:ys,rgb:e=>Wt(ys(e))}},Rp=Gy});var Np,Yy,xs,Ky,vs,Ap=T(()=>{Np=1.09929682680944,Yy=.018053968510807,xs=e=>{let t=Math.abs(e);return t>Yy?(Math.sign(e)||1)*(Np*Math.pow(t,.45)-(Np-1)):4.5*e},Ky=({x:e,y:t,z:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"rec2020",r:xs(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:xs(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:xs(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return o!==void 0&&(r.alpha=o),r},vs=Ky});var Pp,Zy,ws,Jy,Es,$p=T(()=>{Pp=1.09929682680944,Zy=.018053968510807,ws=(e=0)=>{let t=Math.abs(e);return t<Zy*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+Pp-1)/Pp,1/.45)},Jy=e=>{let t=ws(e.r),n=ws(e.g),o=ws(e.b),r={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*o,y:.262700212011267*t+.6779980715188708*n+.059301716469862*o,z:0*t+.0280726930490874*n+1.0609850577107909*o};return e.alpha!==void 0&&(r.alpha=e.alpha),r},Es=Jy});var Qy,Dp,Ip=T(()=>{Fn();Ap();$p();yn();xn();Qy={...vt,mode:"rec2020",fromMode:{xyz65:vs,rgb:e=>vs(ct(e))},toMode:{xyz65:Es,rgb:e=>dt(Es(e))},parse:["rec2020"],serialize:"rec2020"},Dp=Qy});var Jt,Di,Cs=T(()=>{Jt=.0037930732552754493,Di=Math.cbrt(Jt)});var Ss,e1,Op,zp=T(()=>{Vn();Cs();Ss=e=>Math.cbrt(e)-Di,e1=e=>{let{r:t,g:n,b:o,alpha:r}=wt(e),i=Ss(.3*t+.622*n+.078*o+Jt),a=Ss(.23*t+.692*n+.078*o+Jt),l=Ss(.2434226892454782*t+.2047674442449682*n+.5518098665095535*o+Jt),s={mode:"xyb",x:(i-a)/2,y:(i+a)/2,b:l-(i+a)/2};return r!==void 0&&(s.alpha=r),s},Op=e1});var Ms,t1,Fp,Vp=T(()=>{Bn();Cs();Ms=e=>Math.pow(e+Di,3),t1=({x:e,y:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r=Ms(e+t)-Jt,i=Ms(t-e)-Jt,a=Ms(n+t)-Jt,l=Et({r:11.031566904639861*r-9.866943908131562*i-.16462299650829934*a,g:-3.2541473810744237*r+4.418770377582723*i-.16462299650829934*a,b:-3.6588512867136815*r+2.7129230459360922*i+1.9459282407775895*a});return o!==void 0&&(l.alpha=o),l},Fp=t1});var n1,Bp,Wp=T(()=>{ze();Fe();zp();Vp();n1={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:Fp},fromMode:{rgb:Op},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:q,y:q,b:q,alpha:{use:q,fixup:he}}},Bp=n1});var o1,qp,jp=T(()=>{vo();Li();wo();Si();ze();Fe();o1={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Wt,lab:Eo},fromMode:{rgb:qt,lab:xo},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:q,y:q,z:q,alpha:{use:q,fixup:he}}},qp=o1});var r1,Up,Xp=T(()=>{r1=e=>{let{x:t,y:n,z:o,alpha:r}=e;t===void 0&&(t=0),n===void 0&&(n=0),o===void 0&&(o=0);let i={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*o,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*o,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*o};return r!==void 0&&(i.alpha=r),i},Up=r1});var i1,Gp,Yp=T(()=>{i1=e=>{let{x:t,y:n,z:o,alpha:r}=e;t===void 0&&(t=0),n===void 0&&(n=0),o===void 0&&(o=0);let i={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*o,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*o,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*o};return r!==void 0&&(i.alpha=r),i},Gp=i1});var a1,Kp,Zp=T(()=>{xn();yn();Xp();Yp();ze();Fe();a1={mode:"xyz65",toMode:{rgb:dt,xyz50:Up},fromMode:{rgb:ct,xyz50:Gp},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:q,y:q,z:q,alpha:{use:q,fixup:he}}},Kp=a1});var l1,Jp,Qp=T(()=>{l1=({r:e,g:t,b:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return o!==void 0&&(r.alpha=o),r},Jp=l1});var s1,ef,tf=T(()=>{s1=({y:e,i:t,q:n,alpha:o})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let r={mode:"rgb",r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return o!==void 0&&(r.alpha=o),r},ef=s1});var c1,nf,of=T(()=>{Qp();tf();ze();Fe();c1={mode:"yiq",toMode:{rgb:ef},fromMode:{rgb:Jp},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:q,i:q,q,alpha:{use:q,fixup:he}}},nf=c1});var d1,u1,rf,af=T(()=>{d1=(e,t)=>Math.round(e*(t=Math.pow(10,t)))/t,u1=(e=4)=>t=>typeof t=="number"?d1(t,e):t,rf=u1});var p1,lf,Lo,sf,O4,cf,df,Ls,ks,uf=T(()=>{ai();af();p1=rf(2),lf=e=>Math.max(0,Math.min(1,e||0)),Lo=e=>Math.round(lf(e)*255),sf=bn("rgb"),O4=bn("hsl"),cf=e=>{if(e===void 0)return;let t=Lo(e.r),n=Lo(e.g),o=Lo(e.b);return"#"+(1<<24|t<<16|n<<8|o).toString(16).slice(1)},df=e=>{if(e===void 0)return;let t=Lo(e.r),n=Lo(e.g),o=Lo(e.b);return e.alpha===void 0||e.alpha===1?`rgb(${t}, ${n}, ${o})`:`rgba(${t}, ${n}, ${o}, ${p1(lf(e.alpha))})`},Ls=e=>cf(sf(e)),ks=e=>df(sf(e))});function ff(e){return h1(pf(e))}function Ii(e){return e=ii(e),e===void 0||ff(e)?e:bn(e.mode)(m1(e))}var pf,f1,m1,h1,mf=T(()=>{ai();fl();pf=bn("rgb"),f1=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},m1=e=>f1(pf(e)),h1=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1)});var _L,RL,HL,NL,AL,PL,hf,$L,DL,IL,OL,zL,FL,VL,BL,WL,qL,jL,UL,XL,GL,YL,KL,ZL,JL,Ts,QL,ek,tk,nk,gf=T(()=>{Yd();lu();uu();fu();bu();Il();Fl();Hu();Du();zu();Wu();Ti();Xu();_i();Zu();op();ip();lp();up();hp();xp();Cp();kp();Hp();Ip();Fn();Wp();jp();Zp();of();li();uf();mf();zt();_L=xe(Gd),RL=xe(au),HL=xe(du),NL=xe(pu),AL=xe(gu),PL=xe(gi),hf=xe(bi),$L=xe(Ru),DL=xe($u),IL=xe(Ou),OL=xe(Bu),zL=xe(Co),FL=xe(Uu),VL=xe(So),BL=xe(Ku),WL=xe(np),qL=xe(rp),jL=xe(ap),UL=xe(dp),XL=xe(mp),GL=xe(yp),YL=xe(Ep),KL=xe(Lp),ZL=xe(Rp),JL=xe(Dp),Ts=xe(vt),QL=xe(Bp),ek=xe(qp),tk=xe(Kp),nk=xe(nf)});function _s(e){return Math.round(Math.max(0,Math.min(1,e))*255)}function Rs(e){return typeof e!="number"||Number.isNaN(e)?1:Math.max(0,Math.min(1,e))}function y1(e){if(typeof document>"u")return;let t=document.createElement("span");if(t.style.color="",t.style.color=e,!t.style.color)return;document.body?.appendChild(t);let n=getComputedStyle(t).color;return t.remove(),so(n)}function Hs(e){let t=e.trim();if(t&&!/^[+-]?(?:\d+|\d*\.\d+)%?$/.test(t)&&!b1.has(t.toLowerCase()))return so(t)??y1(t)}function bf(e){return!!Hs(e)}function Oi(e){let t=Hs(e);if(!t)return g1;let n=Ii(Ts(t));return{r:_s(n.r),g:_s(n.g),b:_s(n.b),a:Rs(n.alpha)}}function Ns(e){let t=Hs(e);if(!t)return{h:0,s:0,v:1,a:1};let n=hf(Ii(Ts(t)));return{h:n.h??0,s:n.s,v:n.v,a:Rs(n.alpha)}}function zi({r:e,g:t,b:n,a:o}){let r={mode:"rgb",r:Math.max(0,Math.min(255,Math.round(e)))/255,g:Math.max(0,Math.min(255,Math.round(t)))/255,b:Math.max(0,Math.min(255,Math.round(n)))/255,alpha:Rs(o)};return r.alpha===1?Ls(r):ks(r)}var g1,b1,mr=T(()=>{"use strict";gf();g1={r:0,g:0,b:0,a:1},b1=new Set(["currentcolor","inherit","initial","revert","revert-layer","unset"])});function v1(e){return e.replace(/^--/,"").replace(/-/g," ")}function w1(e){return x1.test(e.trim())}function yf(e,t){if(e)for(let n of Array.from(e)){t(n);let o=n.cssRules;o&&yf(o,t)}}function xf(){As.clear(),Ps.clear();let e=window.getComputedStyle(document.documentElement);for(let t of Array.from(document.styleSheets))try{yf(t.cssRules,n=>{if(!(!(n instanceof CSSStyleRule)||!n.selectorText.split(",").some(r=>r.trim()===":root")))for(let r of Array.from(n.style)){if(!r.startsWith("--"))continue;let i=e.getPropertyValue(r).trim();i&&(bf(i)&&As.set(r,i),w1(i)&&Ps.set(r,i))}})}catch(n){console.warn(`Could not read stylesheet: ${t.href}`,n)}}function vf(e){return Array.from(e.entries()).map(([t,n])=>({name:t,label:v1(t),value:n})).sort((t,n)=>t.label.localeCompare(n.label))}function $s(){return vf(As)}function Fi(){return vf(Ps)}var As,Ps,x1,Vi=T(()=>{"use strict";mr();As=new Map,Ps=new Map,x1=/^-?(?:\d+|\d*\.\d+)(?:px|em|rem)$/i});function E1(e){let t=[],n=0,o=0;for(let r=0;r<e.length;r++){let i=e[r];i==="("?n++:i===")"?n=Math.max(0,n-1):i===","&&n===0&&(t.push(e.slice(o,r).trim()),o=r+1)}return t.push(e.slice(o).trim()),t.filter(Boolean)}function C1(e,t){let n=e.match(/\s+(-?\d+(?:\.\d+)?)%?\s*$/);return n?{color:e.slice(0,n.index).trim(),position:parseFloat(n[1])}:{color:e,position:t}}function S1(e){switch(e){case"to top":return 0;case"to right":return 90;case"to bottom":return 180;case"to left":return 270;case"to top right":case"to right top":return 45;case"to bottom right":case"to right bottom":return 135;case"to bottom left":case"to left bottom":return 225;case"to top left":case"to left top":return 315;default:return}}function M1(e){if(e.startsWith("linear-gradient")){let t=e.match(/linear-gradient\((.+)\)$/);if(t){let n=E1(t[1]),o=n[0],r=90,i=n,a=o?.match(/^(-?\d+(?:\.\d+)?)deg$/);if(a)r=parseFloat(a[1]),i=n.slice(1);else if(o){let s=S1(o);s!==void 0&&(r=s,i=n.slice(1))}let l=i.map((s,c)=>C1(s,c*50));return{type:"linear",angle:r,stops:l}}}return e.startsWith("radial-gradient")?{type:"radial",stops:[]}:{type:"solid",color:e}}function L1(e,t){let n=t.sort((o,r)=>o.position-r.position).map(o=>`${o.color} ${o.position}%`).join(", ");return`linear-gradient(${e}deg, ${n})`}function Bi(e,t,n){let o=n*t,r=o*(1-Math.abs(e/60%2-1)),i=n-o,a=0,l=0,s=0;return e<60?(a=o,l=r,s=0):e<120?(a=r,l=o,s=0):e<180?(a=0,l=o,s=r):e<240?(a=0,l=r,s=o):e<300?(a=r,l=0,s=o):(a=o,l=0,s=r),[Math.round((a+i)*255),Math.round((l+i)*255),Math.round((s+i)*255)]}function k1(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=Math.min(e,t,n),i=o-r,a=0,l=o===0?0:i/o,s=o;if(o!==r)switch(o){case e:a=((t-n)/i+(t<n?6:0))*60;break;case t:a=((n-e)/i+2)*60;break;case n:a=((e-t)/i+4)*60;break}return[a,l,s]}function wf(e,t,n,o){return zi({r:e,g:t,b:n,a:o})}function Ef(){Wi&&(Wi(),Wi=null)}function Un(e,t,n,o=!1){let r=document.createElement("div");r.className="color-picker-wrapper __v0_color_picker",r.style.cssText="display: flex; gap: 6px; flex: 1; position: relative;";let i=e,a=document.createElement("button");a.type="button",a.className="color-swatch __v0_color_swatch",a.style.cssText=`
    width: 26px;
    height: 26px;
    min-width: 26px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    position: relative;
    overflow: hidden;
    background: repeating-conic-gradient(#d0d0d0 0% 25%, #fff 0% 50%) 50% / 8px 8px;
  `;let l=document.createElement("span");l.style.cssText=`
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${e};
    box-shadow: inset 0 0 0 1px var(--swatch-ring);
    pointer-events: none;
  `,a.appendChild(l);let s=document.createElement("input");s.type="text",s.className="input",s.spellcheck=!1,s.value=e,s.style.cssText="flex: 1; font-family: var(--font-mono);";let c=e,d=h=>{if(h===c)return;let m=c;c=h,t(h,m)},p=null,u=()=>{Ef(),c=i,r.dispatchEvent(new CustomEvent("v0-drag-start",{bubbles:!0,composed:!0})),r.dispatchEvent(new CustomEvent("v0-colorpicker-open",{bubbles:!0,composed:!0})),p=document.createElement("color-picker-popup"),p.init(i,o,(E,w)=>{i=E,l.style.background=E,s.value=E,w?d(E):n?.(E)});let h=a.getBoundingClientRect();p.style.left=h.left+"px",p.style.top=h.bottom+4+"px";let m=r.getRootNode(),b=m instanceof ShadowRoot?m:document.body,x=document.createElement("div");x.className="__v0_color_picker_backdrop",x.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2147483646; background: transparent; pointer-events: auto;",x.addEventListener("click",E=>{E.stopPropagation(),E.preventDefault(),g(!0)}),x.addEventListener("wheel",E=>E.preventDefault(),{passive:!1}),b.appendChild(x),b.appendChild(p),Wi=()=>{x.remove(),p&&(p.remove(),p=null),r.dispatchEvent(new CustomEvent("v0-drag-end",{bubbles:!0,composed:!0})),r.dispatchEvent(new CustomEvent("v0-colorpicker-close",{bubbles:!0,composed:!0}))}},g=(h=!1)=>{h&&d(i),Ef()};return a.addEventListener("click",h=>{h.stopPropagation(),p?g(!0):u()}),s.addEventListener("change",()=>{i=s.value,l.style.background=i,t(i)}),r.appendChild(a),r.appendChild(s),r}var Wi,Ds,Is=T(()=>{"use strict";mr();Vi();Wi=null;Ds=class extends HTMLElement{constructor(){super(...arguments);rt(this,"h",0);rt(this,"s",0);rt(this,"v",1);rt(this,"a",1);rt(this,"mode","solid");rt(this,"gradientAngle",90);rt(this,"gradientStops",[{color:"#000000",position:0},{color:"#ffffff",position:100}]);rt(this,"allowGradient",!1);rt(this,"onChange",()=>{});rt(this,"svMarker");rt(this,"hueMarker");rt(this,"alphaMarker");rt(this,"svArea");rt(this,"alphaGradient")}connectedCallback(){this.render()}init(n,o,r){this.allowGradient=o,this.onChange=r;let i=M1(n);this.mode=i.type==="linear"?"gradient":"solid",this.gradientAngle=i.angle??90,this.gradientStops=i.stops?.length?i.stops:[{color:i.color||"#000000",position:0},{color:"#ffffff",position:100}];let a=Ns(this.mode==="solid"?n:this.gradientStops[0].color);this.h=a.h,this.s=a.s,this.v=a.v,this.a=a.a,this.render()}getCurrentValue(){if(this.allowGradient&&this.mode==="gradient")return L1(this.gradientAngle,this.gradientStops);let[n,o,r]=Bi(this.h,this.s,this.v);return wf(n,o,r,this.a)}updateColor(n,o,r,i,a=!1){this.h=n,this.s=o,this.v=r,this.a=i,this.onChange(this.getCurrentValue(),a)}updateGradient(n=!1){this.onChange(this.getCurrentValue(),n)}applyRootCSSVariable(n){let o=$s().find(i=>i.name===n);if(!o)return;let r=Ns(o.value);this.h=r.h,this.s=r.s,this.v=r.v,this.a=r.a,this.svMarker&&(this.svMarker.style.left=`${this.s*100}%`,this.svMarker.style.top=`${(1-this.v)*100}%`),this.hueMarker&&(this.hueMarker.style.left=`${this.h/360*100}%`),this.alphaMarker&&(this.alphaMarker.style.left=`${this.a*100}%`),this.updateSvBackground(),this.updateAlphaGradient(),this.onChange(`var(${o.name})`,!0)}updateSvBackground(){if(!this.svArea)return;let[n,o,r]=Bi(this.h,1,1);this.svArea.style.background=`
      linear-gradient(to top, #000, transparent),
      linear-gradient(to right, #fff, rgb(${n},${o},${r}))
    `}updateAlphaGradient(){if(!this.alphaGradient)return;let[n,o,r]=Bi(this.h,this.s,this.v);this.alphaGradient.style.background=`linear-gradient(to right, transparent, rgb(${n},${o},${r}))`}render(){this.innerHTML="";let n=this.style.left,o=this.style.top,r=this.style.zIndex;if(this.style.cssText=`
      position: fixed;
      z-index: 2147483647;
      background: var(--bg-panel);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      width: 200px;
      pointer-events: auto;
    `,n&&(this.style.left=n),o&&(this.style.top=o),r&&(this.style.zIndex=r),this.addEventListener("click",u=>{let g=document.querySelector("color-picker-popup[data-nested]"),h=document.querySelector(".__v0_nested_color_picker_backdrop");if(g){let m=g.getCurrentValue();h?h.click():g.remove()}}),this.allowGradient){let u=document.createElement("div");u.style.cssText="display: flex; gap: 4px; background: #f5f5f5; padding: 2px; border-radius: 5px; user-select: none;";let g=document.createElement("button");g.type="button",g.textContent="Solid",g.className=`icon-button${this.mode==="solid"?" active":""}`,g.style.cssText="flex: 1; font-size: 10px; padding: 4px 8px; user-select: none;";let h=document.createElement("button");h.type="button",h.textContent="Gradient",h.className=`icon-button${this.mode==="gradient"?" active":""}`,h.style.cssText="flex: 1; font-size: 10px; padding: 4px 8px; user-select: none;",g.addEventListener("click",()=>{this.mode="solid";let m=Oi(this.gradientStops[0].color);[this.h,this.s,this.v]=k1(m.r,m.g,m.b),this.a=m.a,this.updateColor(this.h,this.s,this.v,this.a,!0),this.render()}),h.addEventListener("click",()=>{this.mode="gradient";let[m,b,x]=Bi(this.h,this.s,this.v);this.gradientStops[0].color=wf(m,b,x,this.a),this.updateGradient(!0),this.render()}),u.appendChild(g),u.appendChild(h),this.appendChild(u)}let i=document.createElement("div");i.style.cssText=`display: ${this.mode==="solid"?"flex":"none"}; flex-direction: column; gap: 8px;`,this.svArea=document.createElement("div"),this.svArea.style.cssText=`
      width: 100%;
      height: 120px;
      border-radius: 4px;
      position: relative;
      cursor: crosshair;
    `,this.updateSvBackground(),this.svMarker=document.createElement("div"),this.svMarker.style.cssText=`
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
    `,this.svMarker.style.left=`${this.s*100}%`,this.svMarker.style.top=`${(1-this.v)*100}%`,this.svArea.appendChild(this.svMarker);let a=u=>{let g=this.svArea.getBoundingClientRect(),h=Math.max(0,Math.min(1,(u.clientX-g.left)/g.width)),m=Math.max(0,Math.min(1,(u.clientY-g.top)/g.height));this.svMarker.style.left=`${h*100}%`,this.svMarker.style.top=`${m*100}%`,this.updateColor(this.h,h,1-m,this.a),this.updateSvBackground(),this.updateAlphaGradient()};this.svArea.addEventListener("mousedown",u=>{a(u);let g=m=>a(m),h=()=>{this.updateColor(this.h,this.s,this.v,this.a,!0),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",h)}),i.appendChild(this.svArea);let l=document.createElement("div");l.style.cssText=`
      width: 100%;
      height: 12px;
      border-radius: 6px;
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
      position: relative;
      cursor: pointer;
    `,this.hueMarker=document.createElement("div"),this.hueMarker.style.cssText=`
      position: absolute;
      width: 14px;
      height: 14px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    `,this.hueMarker.style.left=`${this.h/360*100}%`,l.appendChild(this.hueMarker);let s=u=>{let g=l.getBoundingClientRect(),h=Math.max(0,Math.min(1,(u.clientX-g.left)/g.width));this.hueMarker.style.left=`${h*100}%`,this.updateColor(h*360,this.s,this.v,this.a),this.updateSvBackground(),this.updateAlphaGradient()};l.addEventListener("mousedown",u=>{s(u);let g=m=>s(m),h=()=>{this.updateColor(this.h,this.s,this.v,this.a,!0),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",h)}),i.appendChild(l);let c=document.createElement("div");c.style.cssText=`
      width: 100%;
      height: 12px;
      border-radius: 6px;
      background: repeating-conic-gradient(#d0d0d0 0% 25%, #fff 0% 50%) 50% / 8px 8px;
      position: relative;
      cursor: pointer;
    `,this.alphaGradient=document.createElement("div"),this.alphaGradient.style.cssText=`
      position: absolute;
      inset: 0;
      border-radius: 6px;
    `,this.updateAlphaGradient(),c.appendChild(this.alphaGradient),this.alphaMarker=document.createElement("div"),this.alphaMarker.style.cssText=`
      position: absolute;
      width: 14px;
      height: 14px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    `,this.alphaMarker.style.left=`${this.a*100}%`,c.appendChild(this.alphaMarker);let d=u=>{let g=c.getBoundingClientRect(),h=Math.max(0,Math.min(1,(u.clientX-g.left)/g.width));this.alphaMarker.style.left=`${h*100}%`,this.updateColor(this.h,this.s,this.v,h)};c.addEventListener("mousedown",u=>{d(u);let g=m=>d(m),h=()=>{this.updateColor(this.h,this.s,this.v,this.a,!0),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",h)}),i.appendChild(c);let p=$s();if(p.length>0){let u=document.createElement("div");u.style.cssText="display: flex; flex-direction: column; gap: 4px; position: relative;";let g=document.createElement("label");g.textContent="Design system colors",g.style.cssText="font-size: 11px; color: var(--text-secondary);";let h=document.createElement("button");h.type="button",h.textContent="Choose color...",h.style.cssText=`
        width: 100%;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        background: var(--bg-input);
        color: var(--text-primary);
        font-size: 11px;
        padding: 0 8px;
        cursor: pointer;
      `;let m=document.createElement("div");m.style.cssText=`
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 2147483648;
        display: none;
        max-height: 180px;
        overflow-y: auto;
        background: var(--bg-panel);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        padding: 4px;
      `,h.addEventListener("click",b=>{b.stopPropagation(),m.style.display=m.style.display==="none"?"block":"none"});for(let b of p){let x=document.createElement("button");x.type="button",x.style.cssText=`
          width: 100%;
          height: 28px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 0;
          border-radius: 4px;
          background: transparent;
          color: var(--text-primary);
          font-size: 11px;
          text-align: left;
          padding: 0 6px;
          cursor: pointer;
        `;let E=document.createElement("span");E.style.cssText=`
          width: 24px;
          height: 14px;
          flex: 0 0 24px;
          border-radius: 3px;
          border: 1px solid var(--border-color);
          background: ${b.value};
        `;let w=document.createElement("span");w.textContent=b.label,w.style.cssText="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",x.appendChild(E),x.appendChild(w),x.addEventListener("mouseenter",()=>{x.style.background="var(--bg-hover)"}),x.addEventListener("mouseleave",()=>{x.style.background="transparent"}),x.addEventListener("click",v=>{v.stopPropagation(),h.textContent=b.label,m.style.display="none",this.applyRootCSSVariable(b.name)}),m.appendChild(x)}u.appendChild(g),u.appendChild(h),u.appendChild(m),i.appendChild(u)}if(this.appendChild(i),this.allowGradient){let u=document.createElement("div");u.style.cssText=`display: ${this.mode==="gradient"?"flex":"none"}; flex-direction: column; gap: 8px;`;let g=document.createElement("div");g.style.cssText="display: flex; align-items: center; gap: 8px;";let h=document.createElement("span");h.textContent="Angle",h.style.cssText="font-size: 11px; color: var(--text-secondary); min-width: 36px;";let m=document.createElement("input");m.type="range",m.min="0",m.max="360",m.value=String(this.gradientAngle),m.style.cssText="flex: 1; height: 4px; min-width: 0;";let b=document.createElement("span");b.textContent=`${this.gradientAngle}\xB0`,b.style.cssText="font-size: 11px; color: var(--text-secondary); width: 32px; text-align: right; flex-shrink: 0;",m.addEventListener("input",()=>{this.gradientAngle=parseInt(m.value),b.textContent=`${this.gradientAngle}\xB0`,this.updateGradient(!1)}),m.addEventListener("change",()=>{this.updateGradient(!0)}),g.appendChild(h),g.appendChild(m),g.appendChild(b),u.appendChild(g);let x=document.createElement("div");x.style.cssText="display: flex; flex-direction: column; gap: 6px; max-height: 200px; overflow-y: auto;";let E=()=>{x.innerHTML="",this.gradientStops.forEach((v,L)=>{let k=document.createElement("div");k.style.cssText="display: flex; gap: 6px; align-items: center;";let N=document.createElement("button");N.type="button",N.style.cssText=`
            width: 20px;
            height: 20px;
            min-width: 20px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            cursor: pointer;
            padding: 0;
            background: ${v.color};
          `,N.addEventListener("click",$=>{$.stopPropagation(),this.openNestedColorPicker(N,v.color,(O,F)=>{this.gradientStops[L].color=O,N.style.background=O,F?(this.updateGradient(!0),E()):this.updateGradient(!1)})});let I=document.createElement("input");I.type="text",I.className="input",I.spellcheck=!1,I.value=`${v.position}%`,I.style.cssText="width: 50px; text-align: center; font-size: 11px; padding: 2px 4px;",I.addEventListener("change",()=>{let $=parseInt(I.value);isNaN($)||(this.gradientStops[L].position=Math.max(0,Math.min(100,$)),I.value=`${this.gradientStops[L].position}%`,this.updateGradient(!0))});let _=document.createElement("button");_.type="button",_.innerHTML="\xD7",_.style.cssText=`
            width: 20px;
            height: 20px;
            border: none;
            background: transparent;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            display: ${this.gradientStops.length>2?"flex":"none"};
            align-items: center;
            justify-content: center;
          `,_.addEventListener("click",()=>{this.gradientStops.splice(L,1),E(),this.updateGradient(!0)}),k.appendChild(N),k.appendChild(I),k.appendChild(_),x.appendChild(k)});let w=document.createElement("button");w.type="button",w.textContent="+ Add Stop",w.className="btn",w.style.cssText="align-self: flex-start; font-size: 10px; padding: 4px 8px;",w.addEventListener("click",()=>{let v=this.gradientStops.length>0?Math.round((this.gradientStops[this.gradientStops.length-1].position+this.gradientStops[0].position)/2):50;this.gradientStops.push({color:"#808080",position:v}),this.gradientStops.sort((L,k)=>L.position-k.position),E(),this.updateGradient(!0)}),x.appendChild(w)};E(),u.appendChild(x),this.appendChild(u)}}openNestedColorPicker(n,o,r){let i=document.querySelector("color-picker-popup[data-nested]");i&&i.remove();let a=document.createElement("color-picker-popup");a.setAttribute("data-nested","true");let l=n.getBoundingClientRect();a.style.left=`${l.right+8}px`,a.style.top=`${l.top}px`,a.style.zIndex="2147483649",a.init(o,!1,r),a.addEventListener("click",p=>{p.stopPropagation()});let s=this.getRootNode(),c=s instanceof ShadowRoot?s:document.body,d=document.createElement("div");d.className="__v0_nested_color_picker_backdrop",d.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 2147483648;
      background: transparent;
      pointer-events: auto;
    `,d.addEventListener("click",p=>{p.stopPropagation(),r(a.getCurrentValue(),!0),a.remove(),d.remove()}),c.appendChild(d),c.appendChild(a)}};customElements.define("color-picker-popup",Ds)});function Cf(e){let t=document.createElement("div");t.className="__v0_context_menu",t.tabIndex=-1,t.setAttribute("role","menu"),t.setAttribute("aria-label","Element actions"),t.hidden=!0,e.appendChild(t);let n=null;function o(a=!1){if(t.hidden)return;let l=e.activeElement;l instanceof HTMLElement&&t.contains(l)&&l.blur(),t.hidden=!0,a&&n?.isConnected&&n.focus({preventScroll:!0}),n=null,document.removeEventListener("pointerdown",r,!0),window.removeEventListener("blur",i)}function r(a){a.composedPath().includes(t)||o()}function i(){o()}return t.addEventListener("contextmenu",a=>{a.preventDefault(),a.stopPropagation()}),t.addEventListener("keydown",a=>{if(a.stopPropagation(),a.key==="Escape"||a.key==="Tab"){a.preventDefault(),o(!0);return}let l=Array.from(t.querySelectorAll("button:not(:disabled)")),s=l.findIndex(d=>d===e.activeElement),c=s;if(a.key==="ArrowDown")c=(s+1)%l.length;else if(a.key==="ArrowUp")c=(s-1+l.length)%l.length;else if(a.key==="Home")c=0;else if(a.key==="End")c=l.length-1;else return;a.preventDefault(),l[c]?.focus({preventScroll:!0})}),t.addEventListener("keyup",a=>a.stopPropagation()),t.addEventListener("keypress",a=>a.stopPropagation()),{open(a,l,s){o();let c=e.activeElement??document.activeElement;c instanceof HTMLElement&&(n=c),t.replaceChildren();for(let g of s){if(g.separatorBefore){let m=document.createElement("div");m.className="context-menu-separator",m.setAttribute("role","separator"),t.appendChild(m)}let h=document.createElement("button");if(h.type="button",h.tabIndex=-1,h.setAttribute("role","menuitem"),h.textContent=g.label,h.disabled=g.disabled??!1,g.shortcut){let m=document.createElement("span");m.className="context-menu-shortcut",m.setAttribute("aria-hidden","true"),m.textContent=g.shortcut,h.appendChild(m)}h.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),o(),g.onSelect()}),t.appendChild(h)}t.style.left="0px",t.style.top="0px",t.hidden=!1;let d=t.getBoundingClientRect();t.style.left=`${Math.max(8,Math.min(a,window.innerWidth-d.width-8))}px`,t.style.top=`${Math.max(8,Math.min(l,window.innerHeight-d.height-8))}px`,(t.querySelector("button:not(:disabled)")??t).focus({preventScroll:!0}),document.addEventListener("pointerdown",r,!0),window.addEventListener("blur",i)},close:o,isOpen:()=>!t.hidden,destroy(){o(),t.remove()}}}var Sf=T(()=>{"use strict"});function kf(){let e=document.styleSheets;for(let r=0;r<e.length;r++)try{let i=e[r];if(i.cssRules)for(let a=0;a<Math.min(i.cssRules.length,100);a++){let l=i.cssRules[a];if(l instanceof CSSStyleRule){let s=l.selectorText;if(s&&(s.includes(".text-")||s.includes(".bg-")||s.includes(".flex")||s.includes(".grid")||s.includes(".p-")||s.includes(".m-")))return!0}}}catch{}let t=document.createElement("div");t.className="hidden",document.body.appendChild(t);let o=window.getComputedStyle(t).display==="none";return document.body.removeChild(t),o}function Mf(e){return e?Object.keys(e).some(t=>t.startsWith("__reactFiber")||t.startsWith("__reactContainer")):!1}function qi(){let e=[document.getElementById("root"),document.getElementById("__next"),document.documentElement,document.body];return Mf(document)||e.some(Mf)?!0:!!window.React||!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}function Lf(e){for(let t of Object.keys(e))if(t.startsWith("__reactFiber"))return e[t];return null}function T1(e){if(!e)return null;if(!e.type)return typeof e.name=="string"&&e.name?e.name:null;let t=e.type;return typeof t=="function"?t.displayName||t.name||null:typeof t=="object"&&(t.displayName||t.render?.displayName||t.render?.name||t.type?.displayName||t.type?.name)||null}function _1(e,t){return e===t||e?.alternate!=null&&e.alternate===t}function R1(e,t){let n=e;for(let o=0;n&&o<100;o++){if(_1(n,t))return!0;n=n._debugOwner??n.owner??null}return!1}function Tf(e){let t=Lf(e)?._debugOwner,n=T1(t);if(!n)return null;let o=e.parentElement,r=o?Lf(o)?._debugOwner:null;return r&&R1(r,t)?null:n}var ji=T(()=>{"use strict"});function _f(e){let t=document.createElement("div");t.style.cssText="position: fixed; z-index: 3; pointer-events: none; display: none; background: oklch(0.57 0.25 260); border-radius: 2px; box-shadow: 0 0 0 1px rgba(255,255,255,0.6);";let n=document.createElement("div");return n.style.cssText="position: fixed; z-index: 3; pointer-events: none; display: none; border: 2px solid oklch(0.57 0.25 260); border-radius: 4px; background: oklch(0.57 0.25 260 / 0.08); box-sizing: border-box;",e.appendChild(t),e.appendChild(n),{show(o){if(o.position==="inside"){t.style.display="none";let i=o.reference.getBoundingClientRect();n.style.display="block",n.style.left=`${i.left}px`,n.style.top=`${i.top}px`,n.style.width=`${i.width}px`,n.style.height=`${i.height}px`;return}n.style.display="none";let r=o.reference.getBoundingClientRect();if(t.style.display="block",o.horizontal){let i=o.position==="before"?r.left:r.right;t.style.left=`${i-2/2}px`,t.style.top=`${r.top}px`,t.style.width="2px",t.style.height=`${r.height}px`}else{let i=o.position==="before"?r.top:r.bottom;t.style.left=`${r.left}px`,t.style.top=`${i-2/2}px`,t.style.width=`${r.width}px`,t.style.height="2px"}},hide(){t.style.display="none",n.style.display="none"},destroy(){t.remove(),n.remove()}}}var Rf=T(()=>{"use strict"});function Xi(e){return e.replace(/_/g," ")}function Xn(e){return`"${Xi(e)}", sans-serif`}function hr(e){return`https://fonts.googleapis.com/css2?family=${e.replace(/_/g,"+")}:wght@100;200;300;400;500;600;700;800;900&display=swap`}function N1(e){if(e==="inherit"||e==="system-ui"||Hf.has(e))return null;let t=document.createElement("link");return t.id=`__v0_google_font_${e}`,t.rel="stylesheet",t.href=hr(e),document.head.appendChild(t),Hf.add(e),t}function A1(e){return new Promise((t,n)=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>n(new Error(`Failed to load font stylesheet: ${e.href}`)),{once:!0})})}function Nf(e){return Promise.race([e,new Promise((t,n)=>{window.setTimeout(()=>n(new Error("Timed out while loading font")),H1)})])}async function Gi(e){let t=N1(e);try{return t&&await Nf(A1(t)),"fonts"in document&&await Nf(document.fonts.load(`16px ${Xn(e)}`)),{link:t,loaded:!0}}catch{return{link:t,loaded:!1}}}var Ui,Hf,H1,Yi=T(()=>{"use strict";Ui=["Inter","Roboto","Open_Sans","Lato","Montserrat","Poppins","Source_Sans_3","Raleway","Nunito","Playfair_Display","Merriweather","Oswald","Quicksand","Work_Sans","Fira_Sans","Inconsolata","JetBrains_Mono","Space_Grotesk","DM_Sans","Manrope","Outfit","Geist","Geist_Mono","Geist_Pixel","IBM_Plex_Sans","Libre_Franklin","Rubik","Karla","Josefin_Sans","Crimson_Text","Lora","PT_Sans","Space_Grotesk","EB_Garamond"],Hf=new Set,H1=5e3});function $1(e){return e.replace(/["']/g,"").trim().replace(/^__/,"").replace(/(_Fallback)?_[0-9a-f]{6}$/i,"").replace(/_/g," ")}function $f(e){return $1(e.split(",")[0]??"")}function Af(e){let t=$f(e);return t?P1[t.toLowerCase()]??t:Pf.inherit}function Zi(e){let t=$f(e);if(!t)return"inherit";let n=Ui.find(o=>Xi(o).toLowerCase()===t.toLowerCase());return n||(Gn.includes(t)?t:"inherit")}function D1(e){return Ui.includes(e)}function Ki(e){return D1(e)?Xi(e):Gn.includes(e)?Pf[e]:e||"Font"}function I1(e){let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement:document.activeElement}function Ji({value:e,fontFamily:t,label:n,compact:o=!1,onChange:r}){let i=Ki(e);e==="inherit"&&(i=Af(t));let a=!1,l=x=>a?Ki(x):i,s=document.createElement("div");s.className=`font-preview-select${o?" compact":""}`;let c=document.createElement("button");c.type="button",c.className="font-preview-trigger",c.setAttribute("aria-label",n),c.setAttribute("aria-haspopup","listbox"),c.setAttribute("aria-expanded","false");let d=document.createElement("span");d.className="font-preview-trigger-label",d.textContent=i,c.appendChild(d);let p=document.createElement("span");p.className="font-preview-chevron",p.setAttribute("aria-hidden","true"),c.appendChild(p);let u=document.createElement("div");u.className="font-preview-menu",u.setAttribute("role","listbox"),u.style.display="none";let g=()=>{s.classList.remove("open"),u.style.display="none",c.setAttribute("aria-expanded","false")},h=()=>{s.classList.add("open"),u.style.display="block",c.setAttribute("aria-expanded","true")},m=x=>{s.dataset.value=x,d.textContent=l(x),u.querySelectorAll(".font-preview-option").forEach(E=>{let w=E;w.classList.toggle("active",w.dataset.value===x),w.setAttribute("aria-selected",w.dataset.value===x?"true":"false")})},b=(x,E=!1)=>{let w=document.createElement("button");w.type="button",w.className="font-preview-option",w.dataset.value=x,w.setAttribute("role","option");let v=document.createElement("span");v.className="font-preview-option-label",v.textContent=Ki(x),E&&(v.style.fontFamily=Xn(x)),w.appendChild(v);let L=Af(t);if(x==="inherit"&&L!==Ki("inherit")){let k=document.createElement("span");k.className="font-preview-option-hint",k.textContent=L,w.appendChild(k)}w.addEventListener("mousedown",k=>{k.preventDefault(),a=!0,m(x),g(),r(x)}),u.appendChild(w)};for(let x of Gn)b(x);for(let x of Ui)b(x,!0);return c.addEventListener("click",x=>{x.stopPropagation(),u.style.display==="none"?h():g()}),s.addEventListener("focusout",()=>{window.setTimeout(()=>{let x=I1(s);(!x||!s.contains(x))&&g()},0)}),s.appendChild(c),s.appendChild(u),m(e),s}var Gn,Pf,P1,Os=T(()=>{"use strict";Yi();Gn=["inherit","system-ui"],Pf={inherit:"Inherit","system-ui":"System UI"},P1={"-apple-system":"System UI",blinkmacsystemfont:"System UI","system-ui":"System UI","ui-sans-serif":"System UI","sans-serif":"Sans-serif","ui-serif":"Serif",serif:"Serif","ui-monospace":"Monospace",monospace:"Monospace"}});function Df(){let e=[],t=-1,n=[],o=()=>{n.forEach(r=>r())};return{push(r){e.splice(t+1),e.push(r),t=e.length-1,o()},update(r,i){let a=e.indexOf(r);if(a===-1||a>t)return!1;i(r),e.splice(t+1);let l=e.indexOf(r);return l!==e.length-1&&(e.splice(l,1),e.push(r)),t=e.length-1,o(),!0},undo(){if(t<0)return null;let r=e[t];return t--,o(),r},redo(){return t>=e.length-1?null:(t++,o(),e[t])},canUndo(){return t>=0},canRedo(){return t<e.length-1},getHistory(){return e.slice(0,t+1)},removeWhere(r){let i=[],a=0;for(let l=0;l<e.length;l++){if(r(e[l])){l<=t&&a++;continue}i.push(e[l])}i.length!==e.length&&(e.length=0,e.push(...i),t=Math.max(-1,Math.min(t-a,e.length-1)),o())},onChange(r){n.push(r)}}}var If=T(()=>{"use strict"});function Qi(e,t,n,o){let r=Math.max(e,n),i=Math.min(t,o);return r<=i?(r+i)/2:((e+t)/2+(n+o)/2)/2}function O1(e,t){let n=e.left>=t.left&&e.right<=t.right&&e.top>=t.top&&e.bottom<=t.bottom,o=t.left>=e.left&&t.right<=e.right&&t.top>=e.top&&t.bottom<=e.bottom;if(n||o){let i=n?e:t,a=n?t:e,l=i.left+i.width/2,s=i.top+i.height/2,c=[],d=i.left-a.left,p=a.right-i.right,u=i.top-a.top,g=a.bottom-i.bottom;return d>0&&c.push({orientation:"h",left:a.left,top:s,length:d,value:d}),p>0&&c.push({orientation:"h",left:i.right,top:s,length:p,value:p}),u>0&&c.push({orientation:"v",left:l,top:a.top,length:u,value:u}),g>0&&c.push({orientation:"v",left:l,top:i.bottom,length:g,value:g}),c}let r=[];if(e.right<t.left){let i=Qi(e.top,e.bottom,t.top,t.bottom);r.push({orientation:"h",left:e.right,top:i,length:t.left-e.right,value:t.left-e.right})}else if(t.right<e.left){let i=Qi(e.top,e.bottom,t.top,t.bottom);r.push({orientation:"h",left:t.right,top:i,length:e.left-t.right,value:e.left-t.right})}if(e.bottom<t.top){let i=Qi(e.left,e.right,t.left,t.right);r.push({orientation:"v",left:i,top:e.bottom,length:t.top-e.bottom,value:t.top-e.bottom})}else if(t.bottom<e.top){let i=Qi(e.left,e.right,t.left,t.right);r.push({orientation:"v",left:i,top:t.bottom,length:e.top-t.bottom,value:e.top-t.bottom})}return r}function zf(e){let t=document.createElement("div");t.className="__v0_measure_layer",t.style.cssText="position: fixed; inset: 0; z-index: 4; pointer-events: none; display: none;",e.appendChild(t);function n(a){let l=document.createElement("div");l.style.cssText=`position: fixed; background: ${Of}; ${a}`,t.appendChild(l)}function o(a){let l=Math.max(0,a.length);a.orientation==="h"?(n(`left:${a.left}px; top:${a.top-1/2}px; width:${l}px; height:1px;`),n(`left:${a.left-1/2}px; top:${a.top-6/2}px; width:1px; height:6px;`),n(`left:${a.left+l-1/2}px; top:${a.top-6/2}px; width:1px; height:6px;`)):(n(`left:${a.left-1/2}px; top:${a.top}px; width:1px; height:${l}px;`),n(`left:${a.left-6/2}px; top:${a.top-1/2}px; width:6px; height:1px;`),n(`left:${a.left-6/2}px; top:${a.top+l-1/2}px; width:6px; height:1px;`));let s=document.createElement("div");s.textContent=String(Math.round(a.value));let c=a.orientation==="h"?a.left+l/2:a.left,d=a.orientation==="h"?a.top:a.top+l/2;s.style.cssText=`position: fixed; left: ${c}px; top: ${d}px; transform: translate(-50%, -50%); background: ${Of}; color: #fff; font: 600 10px/1.4 -apple-system, system-ui, sans-serif; padding: 1px 4px; border-radius: 3px; white-space: nowrap;`,t.appendChild(s)}function r(){t.style.display="none",t.replaceChildren()}function i(a,l){let s=O1(a,l);t.replaceChildren();for(let c of s)o(c);t.style.display=s.length>0?"block":"none"}return{show:i,hide:r,destroy(){t.remove()}}}var Of,Ff=T(()=>{"use strict";Of="oklch(0.62 0.24 25)"});function zs(e){let t=[],n=e;for(;n&&n!==document.body&&n!==document.documentElement;){let o=n.tagName.toLowerCase();if(n.id){o+=`#${CSS.escape(n.id)}`,t.unshift(o);break}if(n.className&&typeof n.className=="string"){let i=n.className.split(/\s+/).filter(a=>a&&!a.startsWith("__v0_")).slice(0,2);i.length>0&&(o+="."+i.map(a=>CSS.escape(a)).join("."))}let r=n.parentElement;if(r){let i=Array.from(r.children).filter(a=>a.tagName===n.tagName);if(i.length>1){let a=i.indexOf(n)+1;o+=`:nth-of-type(${a})`}}t.unshift(o),n=n.parentElement}return t.join(" > ")}function Ne(e,t){let n=e.parentElement,o=Array.from(e.children),r=n?Array.from(n.children):[],i=r.indexOf(e),a=r[i-1],l=r[i+1],s=null;return e.childNodes.length===1&&e.childNodes[0].nodeType===Node.TEXT_NODE&&(s=e.textContent),{selectorPath:zs(e),tagName:e.tagName.toLowerCase(),id:e.id||null,classNames:e.className&&typeof e.className=="string"?e.className.split(/\s+/).filter(Boolean):[],parentTagName:n?.tagName.toLowerCase()||null,childrenTagNames:o.map(c=>c.tagName.toLowerCase()),previousSiblingTagName:a?.tagName.toLowerCase()||null,nextSiblingTagName:l?.tagName.toLowerCase()||null,siblingIndex:i,textContent:s,reactComponentName:t?Tf(e):null}}var Yn=T(()=>{"use strict";ji()});function Vf(){return`
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap');

    * {
      box-sizing: border-box;
    }

    :host {
      --bg-panel: #0a0a0a;
      --bg-input: #1a1a1a;
      --bg-input-elevated: #1e1e1e;
      --bg-input-elevated-focus: #222222;
      --bg-hover: #262626;
      --bg-active: #262626;
      --border-color: #262626;
      --border-focus: #525252;
      --text-primary: #e5e5e5;
      --text-secondary: #a3a3a3;
      --text-tertiary: #737373;
      --text-muted: #525252;
      --text-title: #fafafa;
      --accent: #3b82f6;
      --accent-soft: rgba(59, 130, 246, 0.16);
      --accent-ring: rgba(59, 130, 246, 0.24);
      --danger: #f87171;
      --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'Geist Mono', ui-monospace, monospace;
      --swatch-ring: rgb(255 255 255 / 0.18);
      --drag-handle-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='16' viewBox='0 0 8 16'%3E%3Crect x='0' y='0' width='8' height='16' rx='2' fill='%23404040'/%3E%3Cline x1='2.5' y1='5' x2='2.5' y2='11' stroke='%23737373' stroke-width='1' stroke-linecap='round'/%3E%3Cline x1='5.5' y1='5' x2='5.5' y2='11' stroke='%23737373' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
      color-scheme: dark;
    }

    @media (prefers-color-scheme: light) {
      :host {
        --bg-panel: #ffffff;
        --bg-input: #f5f5f5;
        --bg-input-elevated: #ffffff;
        --bg-input-elevated-focus: #fafafa;
        --bg-hover: #e5e5e5;
        --bg-active: #e5e5e5;
        --border-color: #e5e5e5;
        --border-focus: #a3a3a3;
        --text-primary: #171717;
        --text-secondary: #525252;
        --text-tertiary: #737373;
        --text-muted: #a3a3a3;
        --text-title: #0a0a0a;
        --accent: #2563eb;
        --accent-soft: rgba(37, 99, 235, 0.1);
        --accent-ring: rgba(37, 99, 235, 0.18);
        --danger: #dc2626;
        --swatch-ring: rgb(0 0 0 / 0.12);
        --drag-handle-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='16' viewBox='0 0 8 16'%3E%3Crect x='0' y='0' width='8' height='16' rx='2' fill='%23f5f5f5'/%3E%3Cline x1='2.5' y1='5' x2='2.5' y2='11' stroke='%23a3a3a3' stroke-width='1' stroke-linecap='round'/%3E%3Cline x1='5.5' y1='5' x2='5.5' y2='11' stroke='%23a3a3a3' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
        color-scheme: light;
      }
    }

    ::selection {
      background: var(--accent);
      color: #ffffff;
    }

    ::-moz-selection {
      background: var(--accent);
      color: #ffffff;
    }

    .__v0_context_menu {
      position: fixed;
      z-index: 2147483647;
      width: 220px;
      max-width: calc(100vw - 16px);
      max-height: calc(100vh - 16px);
      overflow-y: auto;
      padding: 4px;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--bg-panel);
      color: var(--text-primary);
      font: 13px var(--font-sans);
      box-shadow: 0 8px 24px rgb(0 0 0 / 0.15);
      pointer-events: auto;
      user-select: none;
    }

    .__v0_context_menu button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      padding: 7px 8px;
      border: none;
      border-radius: 4px;
      background: transparent;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .__v0_context_menu button:enabled:hover,
    .__v0_context_menu button:focus-visible {
      background: var(--bg-hover);
      outline: none;
    }

    .__v0_context_menu button:disabled {
      color: var(--text-muted);
      cursor: default;
    }

    .context-menu-shortcut {
      color: var(--text-secondary);
      font-size: 12px;
    }

    .__v0_context_menu button:disabled .context-menu-shortcut {
      color: inherit;
    }

    .context-menu-separator {
      height: 1px;
      margin: 4px;
      background: var(--border-color);
    }

    .panel {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: calc(100vh - 20px);
      background: var(--bg-panel);
      border-radius: 12px;
      corner-shape: squircle;
      border: none;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2);
      font-family: var(--font-sans);
      font-size: 13px;
      color: var(--text-primary);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      touch-action: manipulation;
      transition: border-radius 0.15s ease;
      will-change: transform;
      z-index: 10;
      user-select: none;
    }

    .panel input,
    .panel textarea {
      user-select: text;
    }

    .panel.snap-preview {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .snap-zone-indicator {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100vh;
      background: var(--accent);
      opacity: 0.15;
      pointer-events: none;
      z-index: 2147483646;
    }

    .panel.push-mode {
      transform: none !important;
      height: 100vh;
      border-radius: 0;
      box-shadow: none;
    }

    .panel.push-mode.push-right {
      left: auto;
      right: 0;
      border-left: 1px solid var(--border-color);
    }

    .panel.push-mode.push-left {
      left: 0;
      right: auto;
      border-right: 1px solid var(--border-color);
    }

    .panel.push-mode.collapsed {
      border-radius: 0;
    }

    .snap-zone-indicator.snap-left {
      right: auto;
      left: 0;
    }

    @media (prefers-color-scheme: dark) {
      .panel {
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4);
      }
    }

    .header {
      padding: 10px 12px;
      background: var(--bg-panel);
      box-shadow: 0 1px 0 var(--border-color);
      cursor: grab;
      user-select: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 1;
    }

    .panel.dragging,
    .panel.dragging * {
      cursor: grabbing !important;
    }

    .header-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      gap: 8px;
    }

    .header-logo {
      display: flex;
      align-items: center;
      padding: 0 4px;
      color: var(--text-primary);
    }

    .header-logo svg {
      width: 20px;
      height: auto;
    }

    .selected-element-pill {
      display: flex;
      align-items: center;
      gap: 4px;
      background: var(--accent);
      color: #fff;
      font-size: 10px;
      font-family: var(--font-mono);
      font-weight: 500;
      padding: 1px 2px 1px 8px;
      border-radius: 10px;
      max-width: 120px;
      min-width: 0;
    }

    .selected-element-pill.screenshot-pill {
      font-family: var(--font-sans);
    }

    .selected-element-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .selected-element-close {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      padding: 2px;
      border-radius: 8px;
    }

    .selected-element-close:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }

    .tab-switcher {
      display: flex;
      background: var(--bg-input);
      border-radius: 20px;
      padding: 2px;
      gap: 2px;
    }

    .tab-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background: transparent;
      border: none;
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 500;
      color: var(--text-tertiary);
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }

    .tab-btn:not(.active) [data-design-mode-logo] {
      display: none !important;
    }

    .tab-btn .tab-logo {
      display: none;
    }

    .tab-btn:hover {
      color: var(--text-secondary);
    }

    .tab-btn.active {
      background: var(--bg-panel);
      color: var(--text-title);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .tab-btn.active .tab-logo {
      display: block;
    }

    .panel-view {
      display: none;
      flex-direction: column;
      flex: 1;
      min-height: 0;
    }

    .panel-view.active {
      display: flex;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 13px;
      height: 13px;
      padding: 0 3px;
      background: #000;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 600;
      font-family: var(--font-mono);
      color: #fff;
    }

    .header-buttons {
      display: flex;
      align-items: center;
      gap: 4px;
      overflow: hidden;
    }

    .header-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      white-space: nowrap;
      transition:
        background 0.15s,
        color 0.15s,
        transform 120ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .header-btn:hover {
      color: var(--text-secondary);
      background: var(--bg-hover);
    }

    .header-btn.active {
      color: var(--accent);
    }

    .header-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .kbd-shortcut {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-input);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 2px 4px;
      font-size: 9px;
      font-weight: 500;
      font-family: var(--font-mono);
      color: var(--text-tertiary);
      line-height: 1;
      margin-left: 4px;
    }

    .kbd-shortcut .cmd-key {
      font-size: 11px;
    }

    .panel.collapsed .content,
    .panel.collapsed .actions {
      display: none;
    }

    .panel.collapsed {
      height: auto;
      border-radius: 24px;
      corner-shape: squircle;
    }

    .panel.collapsed .header {
      box-shadow: none;
    }

    .content {
      overflow-x: hidden;
      overflow-y: auto;
      flex: 1;
      padding-bottom: 12px;
    }

    .content::-webkit-scrollbar {
      width: 10px;
    }

    .content::-webkit-scrollbar-track {
      background: transparent;
      margin: 4px 0;
    }

    .content::-webkit-scrollbar-thumb {
      background: var(--border-color);
      border-radius: 5px;
      border: 3px solid var(--bg-panel);
      background-clip: padding-box;
    }

    .content::-webkit-scrollbar-thumb:hover {
      background: var(--border-focus);
      border: 3px solid var(--bg-panel);
      background-clip: padding-box;
    }

    .section {
      padding: 12px;
      margin-right: -4px;
      border-bottom: 1px solid var(--border-color);
    }

    .section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .section-header {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0;
      color: var(--text-tertiary);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }

    .section-body {
      display: block;
    }

    .layout-overlay-label {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: default;
      font-size: 9px;
      font-weight: 400;
      text-transform: none;
      color: var(--text-muted);
    }

    .layout-overlay-checkbox {
      width: 10px;
      height: 10px;
      margin: 0;
      cursor: default;
      accent-color: var(--accent);
    }

    .row {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-bottom: 10px;
      gap: 4px;
    }

    .label {
      font-size: 10px;
      color: var(--text-tertiary);
      user-select: none;
    }

    input[type="text"],
    input[type="number"] {
      flex: 1;
      height: 26px;
      min-height: 26px;
      max-height: 26px;
      background: var(--bg-input);
      border: 1px solid transparent;
      border-radius: 6px;
      padding: 0 8px;
      color: var(--text-primary);
      font-size: 11px;
      font-family: var(--font-mono);
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    input[type="text"]:focus,
    input[type="number"]:focus {
      border-color: var(--border-focus);
    }

    input[type="text"]::selection,
    input[type="number"]::selection,
    textarea::selection {
      background: var(--accent);
      color: #ffffff;
    }

    select {
      flex: 1;
      height: 26px;
      min-height: 26px;
      max-height: 26px;
      background: var(--bg-input);
      border: 1px solid transparent;
      border-radius: 6px;
      padding: 0 8px;
      color: var(--text-primary);
      font-size: 11px;
      outline: none;
      cursor: pointer;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.53 5.47a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L8 8.94 4.53 5.47z' fill='%23737373'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 6px center;
      padding-right: 24px;
    }

    select:focus {
      border-color: var(--border-focus);
    }

    .font-preview-select {
      position: relative;
      flex: 1;
      min-width: 0;
    }

    .font-preview-trigger {
      width: 100%;
      height: 26px;
      min-height: 26px;
      max-height: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      background: var(--bg-input);
      border: 1px solid transparent;
      border-radius: 6px;
      padding: 0 8px;
      color: var(--text-primary);
      font-size: 11px;
      outline: none;
      cursor: pointer;
      box-sizing: border-box;
    }

    .font-preview-trigger:focus {
      border-color: var(--border-focus);
    }

    .font-preview-trigger-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .font-preview-chevron {
      width: 12px;
      height: 12px;
      flex: 0 0 12px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.53 5.47a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L8 8.94 4.53 5.47z' fill='%23737373'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
    }

    .font-preview-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 4px;
      max-height: 240px;
      overflow-y: auto;
      z-index: 20;
      background: var(--bg-panel);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
      padding: 4px;
    }

    .font-preview-option {
      width: 100%;
      min-height: 28px;
      display: flex;
      align-items: center;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: var(--text-primary);
      padding: 6px 8px;
      text-align: left;
      cursor: pointer;
    }

    .font-preview-option:hover,
    .font-preview-option.active {
      background: var(--bg-hover);
    }

    .font-preview-option-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      line-height: 1.1;
      color: var(--text-primary);
    }

    .font-preview-option-hint {
      margin-left: auto;
      padding-left: 8px;
      color: var(--text-tertiary);
      font-size: 12px;
      line-height: 1.1;
      white-space: nowrap;
    }

    input[type="color"],
    .color-input {
      width: 26px;
      min-width: 26px;
      height: 26px;
      padding: 0;
      border: 1px solid transparent;
      border-radius: 5px;
      cursor: pointer;
      background: none;
      flex-shrink: 0;
    }

    input[type="color"]:focus,
    .color-input:focus {
      border-color: var(--border-focus);
    }

    .subsection-header {
      font-size: 10px;
      font-weight: 500;
      color: var(--text-tertiary);
      margin-bottom: 6px;
      margin-top: 8px;
    }

    .subsection-header:first-child {
      margin-top: 0;
    }

    .spacing-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 8px;
    }

    .spacing-grid .row {
      margin-bottom: 0;
    }

    .spacing-grid input[type="text"] {
      min-width: 0;
      width: 100%;
    }

    .combo-wrapper {
      position: relative;
      width: 100%;
    }

    .combo-input {
      width: 100%;
    }

    .combo-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 4px;
      background: var(--bg-input);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      max-height: 150px;
      overflow-y: auto;
      z-index: 10;
    }

    .combo-item {
      padding: 6px 8px;
      font-size: 11px;
      color: var(--text-primary);
      cursor: pointer;
    }

    .combo-item:hover {
      background: var(--bg-hover);
    }

    .icon-button-group {
      display: flex;
      flex: 1;
      background: var(--bg-input);
      border-radius: 6px;
      padding: 2px;
      gap: 2px;
    }

    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      height: 22px;
      background: transparent;
      border: none;
      color: var(--text-tertiary);
      cursor: pointer;
      padding: 0;
      position: relative;
      transition:
        background 0.15s,
        color 0.15s,
        box-shadow 0.15s,
        transform 120ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 4px;
    }

    .icon-button:hover {
      background: var(--bg-hover);
      color: var(--text-secondary);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .icon-button:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: -2px;
      z-index: 1;
    }

    .icon-button.active {
      background: var(--bg-panel);
      color: var(--text-title);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .icon-button svg {
      width: 14px;
      height: 14px;
    }

    .icon-button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .icon-button:disabled:hover {
      background: transparent;
      color: var(--text-tertiary);
      box-shadow: none;
    }

    textarea {
      width: 100%;
      background: var(--bg-input-elevated);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 8px 10px;
      color: var(--text-primary);
      font-size: 13px;
      line-height: 1.5;
      outline: none;
      resize: vertical;
      min-height: 80px;
      font-family: inherit;
    }

    textarea:focus {
      border-color: var(--accent);
      background: var(--bg-input-elevated-focus);
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
    }

    /* The Content field grows with its text instead of a fixed three lines. */
    @supports (field-sizing: content) {
      .textarea {
        field-sizing: content;
        min-height: 36px;
        max-height: 160px;
        resize: none;
      }
    }

    @media (prefers-color-scheme: light) {
      textarea:focus {
        box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
      }
    }

    .actions {
      position: relative;
      padding: 10px 12px 12px;
      box-shadow: 0 -1px 0 var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 25;
    }

    .actions.has-composer,
    .actions.has-queue {
      background: var(--bg-input);
    }

    .actions-toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .toolbar-group {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .toolbar-divider {
      flex-shrink: 0;
      width: 1px;
      height: 16px;
      margin: 0 4px;
      background: var(--border-color);
    }

    .toolbar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--text-secondary);
      cursor: pointer;
      transition:
        background 0.15s,
        color 0.15s,
        transform 120ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .toolbar-btn:hover:not(:disabled) {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    .toolbar-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: -2px;
    }

    .toolbar-btn:disabled {
      color: var(--text-muted);
      cursor: default;
    }

    .toolbar-btn.delete-btn:hover:not(:disabled) {
      color: var(--danger);
    }

    .toolbar-btn.preview-btn.active,
    .toolbar-btn.preview-btn.active:hover {
      background: var(--accent);
      color: #ffffff;
    }

    .composer {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-input-elevated);
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .composer[hidden] {
      display: none;
    }

    /*
     * Selecting an element focuses the composer, so focus is its resting state.
     * A quiet ring keeps it findable without competing with the canvas.
     */
    .composer:focus-within {
      border-color: color-mix(in oklab, var(--accent) 55%, var(--border-color));
      box-shadow: 0 0 0 3px var(--accent-soft);
    }

    .composer .composer-input,
    .composer .composer-input:focus {
      display: block;
      width: 100%;
      min-height: 52px;
      max-height: 160px;
      field-sizing: content;
      padding: 10px 12px 4px;
      border: none;
      border-radius: 10px 10px 0 0;
      background: transparent;
      box-shadow: none;
      color: var(--text-primary);
      font-size: 13px;
      line-height: 1.45;
      resize: none;
    }

    .composer-input::placeholder {
      color: var(--text-tertiary);
    }

    .composer.busy .composer-input,
    .composer.busy .composer-direction {
      color: var(--text-tertiary);
    }

    .composer-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 2px 6px 6px;
    }

    .composer-direction-group {
      display: flex;
      align-items: center;
      min-width: 0;
      border-radius: 6px;
    }

    .composer-direction-group.has-direction {
      background: var(--accent-soft);
    }

    .composer-direction {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
      height: 24px;
      padding: 0 8px 0 6px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--text-tertiary);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }

    .composer-direction:hover,
    .composer-direction[aria-expanded='true'] {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    .composer-direction svg {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
    }

    .composer-direction-group.has-direction .composer-direction {
      padding-right: 2px;
      color: var(--accent);
      font-weight: 500;
    }

    .composer-direction-group.has-direction .composer-direction:hover,
    .composer-direction-group.has-direction
      .composer-direction[aria-expanded='true'] {
      background: transparent;
    }

    .composer-direction-clear {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      margin-right: 2px;
      padding: 0;
      border: none;
      border-radius: 4px;
      background: transparent;
      color: var(--accent);
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.15s, background 0.15s;
    }

    .composer-direction-clear:hover {
      opacity: 1;
      background: var(--accent-soft);
    }

    .composer-direction-clear[hidden] {
      display: none;
    }

    .composer-direction:focus-visible,
    .composer-direction-clear:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: -2px;
    }

    .composer-hint {
      padding-right: 4px;
      color: var(--text-muted);
      font-size: 11px;
      white-space: nowrap;
      user-select: none;
    }

    .composer:not(:focus-within) .composer-hint {
      visibility: hidden;
    }

    .direction-menu {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(100% + 6px);
      max-height: 280px;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding: 4px;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-panel);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .direction-menu[hidden] {
      display: none;
    }

    .direction-option {
      display: grid;
      grid-template-columns: 16px auto minmax(0, 1fr);
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: 6px;
      color: var(--text-primary);
      cursor: pointer;
      user-select: none;
    }

    .direction-option.active {
      background: var(--bg-hover);
    }

    .direction-option-icon {
      display: flex;
      color: var(--text-secondary);
    }

    .direction-option.active .direction-option-icon {
      color: var(--accent);
    }

    .direction-option-label {
      font-size: 13px;
      font-weight: 500;
    }

    .direction-option-summary {
      overflow: hidden;
      color: var(--text-tertiary);
      font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .direction-menu-empty {
      padding: 8px;
      color: var(--text-tertiary);
      font-size: 12px;
    }

    .btn {
      background: var(--bg-hover);
      border: none;
      border-radius: 6px;
      padding: 6px 8px;
      color: var(--text-primary);
      font-size: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      transition:
        background 0.15s,
        opacity 0.15s,
        transform 120ms cubic-bezier(0.23, 1, 0.32, 1);
      white-space: nowrap;
    }

    .btn:hover:not(:disabled) {
      background: var(--bg-active);
    }

    .btn:active:not(:disabled),
    .toolbar-btn:active:not(:disabled),
    .header-btn:active,
    .icon-button:active:not(:disabled) {
      transform: scale(0.96);
    }

    @media (prefers-reduced-motion: reduce) {
      .btn:active:not(:disabled),
      .toolbar-btn:active:not(:disabled),
      .header-btn:active,
      .icon-button:active:not(:disabled) {
        transform: none;
      }
    }

    .btn svg {
      width: 12px;
      height: 12px;
    }

    .btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn.save-btn {
      flex-shrink: 0;
      gap: 6px;
      height: 28px;
      min-width: 72px;
      margin-left: auto;
      padding: 0 12px;
      border-radius: 8px;
      background: var(--accent);
      color: #ffffff;
      font-size: 12px;
      font-weight: 500;
    }

    .btn.save-btn:hover:not(:disabled) {
      background: var(--accent);
      filter: brightness(1.1);
    }

    .btn.save-btn[data-state='pending'],
    .btn.save-btn[data-state='success'] {
      opacity: 1;
      cursor: default;
    }

    .save-btn-spinner {
      animation: spin 1s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .save-btn-spinner {
        animation-duration: 2.5s;
      }
    }

    .element-info {
      padding: 8px 12px;
      background: var(--bg-input);
      border-radius: 6px;
      margin-bottom: 12px;
      font-size: 11px;
      font-family: var(--font-mono);
    }

    .element-info-tag {
      color: var(--text-title);
      font-weight: 600;
    }

    .element-info-id {
      color: var(--text-secondary);
    }

    .element-info-class {
      color: var(--text-secondary);
    }

    .element-info-react {
      color: var(--text-tertiary);
      margin-top: 4px;
      display: block;
    }

    .row-with-button {
      display: flex;
      gap: 6px;
      align-items: flex-end;
      margin-bottom: 10px;
    }

    .row-with-button .row {
      flex: 1;
      margin-bottom: 0;
    }

    .advanced-btn {
      background: transparent;
      border: none;
      border-radius: 6px;
      padding: 0;
      color: var(--text-tertiary);
      cursor: pointer;
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .advanced-btn:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    .advanced-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .advanced-btn svg {
      width: 12px;
      height: 12px;
    }


    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      pointer-events: auto;
      background: transparent;
    }

    .popup {
      position: absolute;
      background: var(--bg-panel);
      border: none;
      border-radius: 8px;
      padding: 12px;
      min-width: 200px;
      box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 8px rgba(0, 0, 0, 0.1);
      pointer-events: auto;
    }

    .popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-color);
    }

    .popup-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0;
      color: var(--text-tertiary);
    }

    .popup-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .popup-close:hover {
      color: var(--text-secondary);
      background: var(--bg-hover);
    }

    .popup-close:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .popup-close svg {
      width: 12px;
      height: 12px;
    }

    .popup-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .toggle-label {
      font-size: 10px;
      color: var(--text-tertiary);
      user-select: none;
    }

    .toggle-sublabel {
      font-size: 9px;
      color: var(--text-muted);
      margin-top: 1px;
    }

    .toggle-switch {
      position: relative;
      width: 32px;
      height: 18px;
      background: var(--bg-input);
      border: 1px solid var(--border-color);
      border-radius: 9px;
      cursor: pointer;
      transition: background 0.2s;
      flex-shrink: 0;
    }

    .toggle-switch.active {
      background: var(--accent);
      border-color: var(--accent);
    }

    .toggle-switch:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      background: var(--text-primary);
      border-radius: 50%;
      transition: transform 0.2s;
    }

    .toggle-switch.active::after {
      transform: translateX(14px);
      background: #ffffff;
    }

    @media (prefers-reduced-motion: reduce) {
      .toggle-switch,
      .toggle-switch::after {
        transition: none;
      }
    }

    .panel.collapsed .panel-view,
    .panel.collapsed .chat-footer {
      display: none;
    }

    .actions.hidden {
      display: none;
    }

    .terminal {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-family: var(--font-mono);
      font-size: 11px;
      min-height: 280px;
    }

    .terminal-output {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .terminal-output::-webkit-scrollbar {
      width: 8px;
    }

    .terminal-output::-webkit-scrollbar-track {
      background: transparent;
    }

    .terminal-output::-webkit-scrollbar-thumb {
      background: var(--border-color);
      border-radius: 4px;
    }

    .terminal-line {
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .terminal-line.system {
      color: var(--text-muted);
    }

    .terminal-line.user {
      color: var(--accent);
    }

    .terminal-line.response {
      color: var(--text-secondary);
    }

    .terminal-line.error {
      color: #ef4444;
    }

    .terminal-input-line {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      box-shadow: 0 -1px 0 var(--border-color);
    }

    .terminal-prompt {
      color: var(--accent);
      font-weight: 500;
    }

    .terminal-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text-primary);
      font-family: var(--font-mono);
      font-size: 11px;
    }

    .terminal-input::placeholder {
      color: var(--text-muted);
    }

    .terminal-input:disabled {
      opacity: 0.5;
    }

    /* A centered column whose rows share a left edge, so the icons line up. */
    .empty-state {
      flex: 1;
      display: grid;
      align-content: center;
      justify-content: center;
      justify-items: start;
      gap: 12px;
      color: var(--text-tertiary);
      text-align: center;
      padding: 32px 16px;
      min-height: 280px;
      user-select: none;
    }

    .empty-state span {
      font-size: 12px;
      line-height: 1.4;
    }

    .empty-state-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-tertiary);
    }

    .empty-state-item svg {
      flex-shrink: 0;
      opacity: 0.7;
    }

    .empty-state-item strong {
      color: var(--text-secondary);
      font-weight: 500;
    }

    .empty-state-item.clickable {
      cursor: pointer;
      transition: opacity 0.15s;
    }

    .empty-state-item.clickable:hover {
      opacity: 0.8;
    }

    .empty-state-item.clickable strong {
      color: var(--accent);
    }

    .login-screen {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 32px 24px;
      text-align: center;
    }

    .login-screen .login-logo {
      color: var(--text-muted);
    }

    .login-screen .login-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .login-screen .login-description {
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.5;
      margin: 0;
    }

    .login-screen .login-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background: var(--text-primary);
      color: var(--bg-panel);
      border: none;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s;
      margin-top: 8px;
    }

    .login-screen .login-btn:hover {
      opacity: 0.9;
    }

    .login-screen .login-btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .login-screen .login-btn svg {
      width: 14px;
      height: 14px;
    }

    .auth-skeleton {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 12px;
    }

    .skeleton-line {
      background: linear-gradient(
        90deg,
        var(--bg-input) 25%,
        var(--bg-hover) 50%,
        var(--bg-input) 75%
      );
      background-size: 200% 100%;
      animation: skeleton-shimmer 1.5s infinite;
      border-radius: 4px;
    }

    .skeleton-line.short {
      width: 40%;
      height: 12px;
    }

    .skeleton-line.medium {
      width: 70%;
      height: 12px;
    }

    .skeleton-line.long {
      width: 100%;
      height: 12px;
    }

    .skeleton-line.block {
      width: 100%;
      height: 60px;
      border-radius: 6px;
    }

    @keyframes skeleton-shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* Overlay styles (in shadow DOM) - z-index below panel */
    .__v0_selection_overlay {
      position: fixed !important;
      pointer-events: none !important;
      z-index: 1 !important;
      border-radius: 0 !important;
      border: 1px solid oklch(0.57 0.25 260) !important;
      box-sizing: border-box !important;
      transition: opacity 0.15s ease-out !important;
    }

    .__v0_selection_overlay.faded,
    .__v0_margin_overlay.faded,
    .__v0_padding_overlay.faded,
    .__v0_gap_overlay.faded {
      opacity: 0 !important;
    }

    /* Outline only: a fill would tint the content you are deciding to pick. */
    .__v0_hover_overlay {
      position: fixed !important;
      pointer-events: none !important;
      z-index: 1 !important;
      border: 1px solid oklch(0.57 0.25 260 / 0.7) !important;
      border-radius: 1px !important;
      box-sizing: border-box !important;
    }

    /*
     * Spacing reads as hatching over a faint wash, so margins, padding, and
     * gaps stay legible on light and dark content without muddying it. The
     * colors follow browser devtools: margin orange, padding green, gap blue.
     */
    .__v0_margin_overlay,
    .__v0_padding_overlay,
    .__v0_gap_overlay {
      position: fixed !important;
      pointer-events: none !important;
      z-index: 1 !important;
      transition: opacity 0.15s ease-out !important;
    }

    .__v0_margin_overlay {
      background:
        repeating-linear-gradient(-45deg, rgb(224 156 79 / 0.45) 0 1px, transparent 1px 6px),
        rgb(242 205 164 / 0.1) !important;
    }

    .__v0_padding_overlay {
      background:
        repeating-linear-gradient(-45deg, rgb(132 160 22 / 0.4) 0 1px, transparent 1px 6px),
        rgb(197 206 147 / 0.1) !important;
    }

    .__v0_gap_overlay {
      background:
        repeating-linear-gradient(-45deg, rgb(37 99 235 / 0.35) 0 1px, transparent 1px 6px),
        rgb(37 99 235 / 0.06) !important;
    }

    .__v0_floating_toolbar {
      position: fixed !important;
      z-index: 5 !important;
      align-items: center !important;
      flex-wrap: wrap !important;
      gap: 3px !important;
      min-height: 36px !important;
      max-width: calc(100vw - 16px) !important;
      padding: 4px !important;
      border-radius: 12px !important;
      corner-shape: squircle !important;
      background: var(--bg-panel) !important;
      color: var(--text-primary) !important;
      box-shadow: 0 16px 42px rgba(0, 0, 0, 0.18), 0 3px 12px rgba(0, 0, 0, 0.10), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
      font-family: var(--font-sans) !important;
      pointer-events: auto !important;
      box-sizing: border-box !important;
      overflow: visible !important;
    }

    .__v0_floating_toolbar * {
      box-sizing: border-box !important;
    }

    .__v0_floating_toolbar .toolbar-divider {
      width: 1px !important;
      height: 18px !important;
      margin: 0 2px !important;
      background: var(--border-color) !important;
      flex: 0 0 auto !important;
    }

    .__v0_floating_toolbar .toolbar-button,
    .__v0_floating_toolbar .toolbar-select-wrap,
    .__v0_floating_toolbar .toolbar-select,
    .__v0_floating_toolbar .toolbar-dimension-wrap,
    .__v0_floating_toolbar .toolbar-dimension-input {
      height: 27px !important;
      border: 1px solid transparent !important;
      border-radius: 6px !important;
      background: transparent !important;
      color: var(--text-primary) !important;
      font-size: 12px !important;
      line-height: 1 !important;
    }

    .__v0_floating_toolbar .toolbar-icon {
      width: 16px !important;
      height: 16px !important;
      flex: 0 0 auto !important;
      display: block !important;
    }

    .__v0_floating_toolbar .toolbar-button {
      width: 27px !important;
      min-width: 27px !important;
      padding: 0 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .__v0_floating_toolbar .toolbar-button:hover,
    .__v0_floating_toolbar .toolbar-select-wrap:hover,
    .__v0_floating_toolbar .toolbar-select:hover,
    .__v0_floating_toolbar .toolbar-dimension-wrap:hover,
    .__v0_floating_toolbar .toolbar-dimension-input:focus {
      background-color: var(--bg-hover) !important;
      border-color: var(--border-color) !important;
    }

    .__v0_floating_toolbar .toolbar-button.active {
      background: var(--bg-hover) !important;
      border-color: var(--border-color) !important;
      color: var(--text-primary) !important;
    }

    .__v0_floating_toolbar .toolbar-popover-wrap {
      position: relative !important;
      display: inline-flex !important;
      align-items: center !important;
      flex: 0 0 auto !important;
    }

    .__v0_floating_toolbar .toolbar-popover {
      position: absolute !important;
      top: calc(100% + 8px) !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      display: none !important;
      align-items: center !important;
      gap: 3px !important;
      padding: 3px !important;
      border-radius: 18px !important;
      corner-shape: squircle !important;
      background: var(--bg-panel) !important;
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18), 0 3px 12px rgba(0, 0, 0, 0.10), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
      z-index: 1 !important;
    }

    .__v0_floating_toolbar .toolbar-popover-wrap.open .toolbar-popover {
      display: inline-flex !important;
    }

    .__v0_floating_toolbar .toolbar-popover .toolbar-button {
      width: 27px !important;
      min-width: 27px !important;
      height: 27px !important;
      border-radius: 8px !important;
    }

    .__v0_floating_toolbar .toolbar-select-wrap {
      display: inline-flex !important;
      align-items: center !important;
      gap: 4px !important;
      padding: 0 6px !important;
    }

    .__v0_floating_toolbar .toolbar-dimension-wrap {
      display: inline-flex !important;
      align-items: center !important;
      gap: 3px !important;
      padding: 0 6px !important;
    }

    .__v0_floating_toolbar .toolbar-dimension-label,
    .__v0_floating_toolbar .toolbar-select-prefix {
      color: var(--text-tertiary) !important;
      font-size: 10px !important;
      font-weight: 500 !important;
      flex: 0 0 auto !important;
    }

    .__v0_floating_toolbar .toolbar-dimension-input {
      font-variant-numeric: tabular-nums !important;
    }

    /* Press feedback: the control visibly answers the click. */
    .__v0_floating_toolbar .toolbar-button {
      transition: transform 120ms cubic-bezier(0.23, 1, 0.32, 1) !important;
    }

    .__v0_floating_toolbar .toolbar-button:active {
      transform: scale(0.94) !important;
    }

    /*
     * Popovers grow from the trigger above them. Only the entrance animates;
     * closing is instant so the toolbar never feels like it is catching up.
     */
    .__v0_floating_toolbar .toolbar-popover,
    .font-preview-menu {
      transform-origin: top center;
      transition:
        opacity 120ms ease-out,
        scale 160ms cubic-bezier(0.23, 1, 0.32, 1),
        translate 160ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .__v0_floating_toolbar .toolbar-popover-wrap.open .toolbar-popover,
    .font-preview-select.open .font-preview-menu {
      @starting-style {
        opacity: 0;
        scale: 0.97;
        translate: 0 -4px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .__v0_floating_toolbar .toolbar-popover,
      .font-preview-menu {
        transition: opacity 120ms ease-out;
      }

      .__v0_floating_toolbar .toolbar-button:active {
        transform: none !important;
      }
    }

    .__v0_floating_toolbar .toolbar-dimension-input {
      width: 48px !important;
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      outline: none !important;
    }

    .__v0_floating_toolbar .toolbar-select {
      max-width: 86px !important;
      height: 25px !important;
      padding: 0 16px 0 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background-color: transparent !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.53 5.47a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L8 8.94 4.53 5.47z' fill='%23737373'/%3E%3C/svg%3E") !important;
      background-repeat: no-repeat !important;
      background-position: right 0px center !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      outline: none !important;
      cursor: pointer !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }

    .__v0_floating_toolbar .toolbar-font-select .toolbar-select {
      max-width: 72px !important;
      width: 72px !important;
    }

    .__v0_floating_toolbar .font-preview-select.compact {
      position: relative !important;
      flex: 0 0 auto !important;
      width: 92px !important;
    }

    .__v0_floating_toolbar .font-preview-select.compact .font-preview-trigger {
      height: 27px !important;
      min-height: 27px !important;
      max-height: 27px !important;
      border: 1px solid transparent !important;
      border-radius: 6px !important;
      background: transparent !important;
      color: var(--text-primary) !important;
      font-size: 12px !important;
      line-height: 1 !important;
      padding: 0 6px !important;
    }

    .__v0_floating_toolbar
      .font-preview-select.compact
      .font-preview-trigger:hover {
      background-color: var(--bg-hover) !important;
      border-color: var(--border-color) !important;
    }

    .__v0_floating_toolbar .font-preview-select.compact .font-preview-menu {
      top: calc(100% + 8px) !important;
      left: 50% !important;
      right: auto !important;
      width: 260px !important;
      transform: translateX(-50%) !important;
      max-height: 280px !important;
      z-index: 2 !important;
    }

    .__v0_floating_toolbar .toolbar-color-picker {
      flex: 0 0 24px !important;
      width: 24px !important;
      max-width: 24px !important;
      align-items: center !important;
    }

    .__v0_floating_toolbar .toolbar-color-picker .input {
      display: none !important;
    }

    /* Screenshot view styles */
    .screenshot-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 12px 12px 0;
    }

    .screenshot-image-container {
      position: relative;
      background: var(--bg-input);
      border-radius: 8px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 120px;
      max-height: 200px;
      overflow: hidden;
    }

    .screenshot-image {
      max-width: 100%;
      max-height: 184px;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    .screenshot-region-info {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(0, 0, 0, 0.7);
      color: #ffffff;
      font-size: 10px;
      font-family: var(--font-mono);
      padding: 0px 4px;
      border-radius: 3px;
    }

    .queued-edits {
      width: 100%;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-input-elevated);
      color: var(--text-primary);
      overflow: hidden;
      user-select: none;
    }

    .queued-edits[hidden] {
      display: none;
    }

    .queued-edits-summary {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      color: var(--text-secondary);
      font-size: 12px;
      line-height: 1.2;
      cursor: pointer;
      list-style: none;
    }

    .queued-edits-summary::-webkit-details-marker {
      display: none;
    }

    .queued-edits-chevron {
      display: flex;
      color: var(--text-tertiary);
      transition: transform 0.15s ease;
    }

    .queued-edits[open] .queued-edits-chevron {
      transform: rotate(90deg);
    }

    .queued-edits-count {
      font-weight: 500;
      white-space: nowrap;
    }

    .queued-edit-item {
      min-width: 0;
      overflow: hidden;
      color: var(--text-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .queued-edits-list {
      display: block;
      max-height: 112px;
      overflow-y: auto;
      padding: 8px;
    }

    .queued-edit-item {
      border-radius: 6px;
      padding: 5px 8px;
      font-size: 12px;
      line-height: 1.2;
      cursor: default;
      transition: background 0.15s, color 0.15s;
    }

    .queued-edit-item + .queued-edit-item {
      margin-top: 2px;
    }

    .queued-edit-item:hover {
      background: var(--bg-hover);
    }
  `}function ie(e,t,n,o,r,i){let a=i??(e.style[t]||window.getComputedStyle(e)[t]);e.style[t]=n,String(a)!==n&&o.push({type:"style",element:e,elementInfo:Ne(e,r),property:t,oldValue:String(a),newValue:n,timestamp:Date.now()}),window.dispatchEvent(new CustomEvent("v0-style-change"))}function Bf(){let e=document.createElement("style");return e.id="__v0_design_mode_styles",e.textContent=`
    html:has(.v0-design-mode-active),
    .v0-design-mode-active,
    html:has(.v0-element-selected),
    .v0-element-selected {
      overscroll-behavior: none !important;
    }

    /* Match the v0 chrome's thin scrollbar (5px) inside the preview while design
       mode is on, so it doesn't read wider than the surrounding panels. Scoped to
       the design-mode class, so the app's native scrollbar returns when off. */
    body.v0-design-mode-active,
    html:has(.v0-design-mode-active) {
      scrollbar-width: thin;
    }
    body.v0-design-mode-active::-webkit-scrollbar,
    html:has(.v0-design-mode-active)::-webkit-scrollbar,
    .v0-design-mode-active ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    body.v0-design-mode-active::-webkit-scrollbar-track,
    html:has(.v0-design-mode-active)::-webkit-scrollbar-track,
    .v0-design-mode-active ::-webkit-scrollbar-track {
      background: transparent;
    }
    body.v0-design-mode-active::-webkit-scrollbar-thumb,
    html:has(.v0-design-mode-active)::-webkit-scrollbar-thumb,
    .v0-design-mode-active ::-webkit-scrollbar-thumb {
      background: rgba(128, 128, 128, 0.45);
      border-radius: 5px;
    }

    .v0-design-mode-active,
    .v0-design-mode-active * {
      cursor: crosshair !important;
    }

    .v0-design-mode-active [contenteditable="true"] {
      cursor: text !important;
      outline: 2px dashed rgba(59, 130, 246, 0.8) !important;
      outline-offset: 2px !important;
    }

    .v0-design-mode-active .__v0_design_panel,
    .v0-design-mode-active .__v0_design_panel *,
    .v0-design-mode-active .__v0_design_panel_host,
    .v0-design-mode-active .__v0_design_panel_host * {
      cursor: default !important;
    }

    .v0-design-mode-active .__v0_design_panel_header {
      cursor: move !important;
    }

    .v0-design-mode-active .__v0_design_panel input,
    .v0-design-mode-active .__v0_design_panel select,
    .v0-design-mode-active .__v0_design_panel textarea {
      cursor: text !important;
    }

    .v0-design-mode-active .__v0_design_panel button,
    .v0-design-mode-active .__v0_design_panel select {
      cursor: pointer !important;
    }

    .__v0_design_panel {
      position: fixed !important;
      top: 10px !important;
      right: 10px !important;
      width: 300px !important;
      max-height: calc(100vh - 20px) !important;
      background: #0a0a0a !important;
      border-radius: 12px !important;
      border: 1px solid #262626 !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
      z-index: 2147483647 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      font-size: 13px !important;
      color: #e5e5e5 !important;
      overflow: hidden !important;
      display: flex !important;
      flex-direction: column !important;
    }

    .__v0_design_panel_header {
      padding: 12px 16px !important;
      background: #0a0a0a !important;
      border-bottom: 1px solid #262626 !important;
      cursor: move !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      user-select: none !important;
    }

    .__v0_design_panel_title {
      font-weight: 600 !important;
      font-size: 14px !important;
      color: #fafafa !important;
    }

    .__v0_design_panel_close {
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      padding: 4px !important;
      color: #737373 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .__v0_design_panel_close:hover {
      color: #fafafa !important;
    }

    .__v0_design_panel_content {
      overflow-y: auto !important;
      padding: 12px !important;
      flex: 1 !important;
    }

    .__v0_design_panel_section {
      margin-bottom: 16px !important;
    }

    .__v0_design_panel_section_header {
      font-size: 11px !important;
      font-weight: 600 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.5px !important;
      color: #737373 !important;
      margin-bottom: 8px !important;
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
    }

    .__v0_design_panel_row {
      display: flex !important;
      align-items: center !important;
      margin-bottom: 8px !important;
      gap: 8px !important;
    }

    .__v0_design_panel_label {
      width: 80px !important;
      font-size: 12px !important;
      color: #a3a3a3 !important;
      flex-shrink: 0 !important;
    }

    .__v0_design_panel_input {
      flex: 1 !important;
      background: #171717 !important;
      border: 1px solid #262626 !important;
      border-radius: 6px !important;
      padding: 6px 10px !important;
      color: #e5e5e5 !important;
      font-size: 12px !important;
      outline: none !important;
    }

    .__v0_design_panel_input:focus {
      border-color: #525252 !important;
    }

    .__v0_design_panel_select {
      flex: 1 !important;
      background: #171717 !important;
      border: 1px solid #262626 !important;
      border-radius: 6px !important;
      padding: 6px 10px !important;
      color: #e5e5e5 !important;
      font-size: 12px !important;
      outline: none !important;
      cursor: pointer !important;
    }

    .__v0_design_panel_select:focus {
      border-color: #525252 !important;
    }

    .__v0_design_panel_color_input {
      width: 32px !important;
      height: 32px !important;
      padding: 0 !important;
      border: 1px solid #262626 !important;
      border-radius: 6px !important;
      cursor: pointer !important;
      background: none !important;
    }

    .__v0_design_panel_spacing_grid {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 6px !important;
    }

    .__v0_design_panel_spacing_input {
      background: #171717 !important;
      border: 1px solid #262626 !important;
      border-radius: 6px !important;
      padding: 6px 8px !important;
      color: #e5e5e5 !important;
      font-size: 11px !important;
      text-align: center !important;
      outline: none !important;
    }

    .__v0_design_panel_spacing_input:focus {
      border-color: #525252 !important;
    }

    .__v0_design_panel_textarea {
      width: 100% !important;
      background: #171717 !important;
      border: 1px solid #262626 !important;
      border-radius: 6px !important;
      padding: 8px 10px !important;
      color: #e5e5e5 !important;
      font-size: 12px !important;
      outline: none !important;
      resize: vertical !important;
      min-height: 60px !important;
      font-family: inherit !important;
    }

    .__v0_design_panel_textarea:focus {
      border-color: #525252 !important;
    }

    .__v0_design_panel_actions {
      padding: 12px !important;
      border-top: 1px solid #262626 !important;
      display: flex !important;
      gap: 8px !important;
    }

    .__v0_design_panel_btn {
      flex: 1 !important;
      background: #262626 !important;
      border: none !important;
      border-radius: 6px !important;
      padding: 8px 12px !important;
      color: #e5e5e5 !important;
      font-size: 12px !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 4px !important;
    }

    .__v0_design_panel_btn:hover {
      background: #404040 !important;
    }

    .__v0_design_panel_btn:disabled {
      opacity: 0.5 !important;
      cursor: not-allowed !important;
    }

    .__v0_element_info {
      padding: 8px 12px !important;
      background: #171717 !important;
      border-radius: 6px !important;
      margin-bottom: 12px !important;
      font-size: 11px !important;
    }

    .__v0_element_info_tag {
      color: #fafafa !important;
      font-weight: 600 !important;
    }

    .__v0_element_info_id {
      color: #d4d4d4 !important;
    }

    .__v0_element_info_class {
      color: #a3a3a3 !important;
    }

    .__v0_element_info_react {
      color: #737373 !important;
      margin-top: 4px !important;
      display: block !important;
    }
  `,e}var ea=T(()=>{"use strict";Yn()});function W1(e){let t=[],n=0,o=0;for(let r=0;r<e.length;r++){let i=e[r];i==="("?n++:i===")"?n=Math.max(0,n-1):i===","&&n===0&&(t.push(e.slice(o,r).trim()),o=r+1)}return t.push(e.slice(o).trim()),t.filter(Boolean)}function qf(e){let t=/\binset\b/i.test(e),n=e.replace(/\binset\b/gi," "),o=null,r=n.match(F1)??n.match(V1);r&&(o=r[0],n=n.replace(r[0]," "));let i=[];for(let d of n.trim().split(/\s+/).filter(Boolean))if(B1.test(d))i.push(parseFloat(d));else if(o===null)o=d;else return null;if(i.length<2||i.length>4)return null;let[a,l,s=0,c=0]=i;return{inset:t,x:a,y:l,blur:s,spread:c,color:o??"currentcolor"}}function q1(e){return e.x===0&&e.y===0&&e.blur===0&&e.spread===0}function ta(e){let t=[],n=-1,o={...z1};if(!e||e.trim()==="none")return{layers:t,editIndex:n,config:o};for(let r of W1(e)){let i=qf(r);i&&q1(i)||(i&&n===-1&&(n=t.length,o=i),t.push(r))}return{layers:t,editIndex:n,config:o}}function j1(e){return`${e.inset?"inset ":""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`}function Vs(e,t){let n=j1(t);if(e.editIndex===-1)return[...e.layers,n].join(", ");let o=[...e.layers];return o[e.editIndex]=n,o.join(", ")}function Wf(e){let t=[];for(let n of ta(e).layers){let o=qf(n);if(!o)return null;t.push([o.inset?"inset":"",o.x,o.y,o.blur,o.spread,zi(Oi(o.color))].join(" "))}return t.join(", ")}function jf(e){let t=Wf(e);return t===null?null:Fs.find(o=>Wf(o.value)===t)?.value??null}var z1,Fs,F1,V1,B1,Uf=T(()=>{"use strict";mr();z1={inset:!1,x:0,y:4,blur:6,spread:0,color:"rgba(0, 0, 0, 0.1)"},Fs=[{value:"none",label:"None"},{value:"0 1px 2px 0 rgb(0 0 0 / 0.05)",label:"Extra Small"},{value:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",label:"Small"},{value:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",label:"Medium"},{value:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",label:"Large"},{value:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",label:"Extra Large"},{value:"0 25px 50px -12px rgb(0 0 0 / 0.25)",label:"2X Large"},{value:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",label:"Inner"}],F1=/(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^()]*\)/i,V1=/#[\da-f]{3,8}\b/i,B1=/^-?(?:\d+|\d*\.\d+)(?:[a-z]+)?$/i});function U1(e,t,n){return e.type==="style"&&e.property===n&&e.elementInfo.selectorPath===t}function Xf(e,t,n){let o=e.getHistory();for(let r=o.length-1;r>=0;r--){let i=o[r];if(U1(i,t,n))return i}return null}function na({element:e,state:t,historyManager:n,property:o,fallbackValue:r}){let i=Ne(e,t.hasReact).selectorPath;return Xf(n,i,o)?.oldValue??r}function gr({element:e,state:t,historyManager:n,property:o,originalValue:r,newValue:i,activeRecord:a}){let l=Ne(e,t.hasReact),s=l.selectorPath,c=a??Xf(n,s,o),d=c?.oldValue??r;if(i===d)return c&&n.removeWhere(u=>u===c),null;if(c&&n.update(c,g=>{g.type==="style"&&(g.element=e,g.elementInfo=l,g.oldValue=d,g.newValue=i,g.timestamp=Date.now())}))return c;let p={type:"style",element:e,elementInfo:l,property:o,oldValue:d,newValue:i,timestamp:Date.now()};return n.push(p),p}var Bs=T(()=>{"use strict";Yn()});function tt(e,t,n){e.style[t]=n,window.dispatchEvent(new CustomEvent("v0-style-change"))}function Gf(e){let t=Fi().map(r=>({label:`${r.label} (${r.value})`,value:`var(${r.name})`})),n=new Set(e),o=[...e];for(let r of t)n.has(r.value)||(n.add(r.value),o.push(r));return o}function J1(){let e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("width","32"),e.setAttribute("height","32"),e.setAttribute("viewBox","0 0 32 32"),e.style.cssText="position: fixed; pointer-events: none; z-index: 2147483647; top: -16px; left: -16px;";let t=document.createElementNS("http://www.w3.org/2000/svg","g");t.setAttribute("fill","none"),t.setAttribute("transform","translate(8 10)");let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","m0 6.9907v.005l5.997 5.996.001-3.999h1.999 2.02v4l5.98-6.001-5.98-5.999.001 4.019-2.021.002h-2l.001-4.022zm1.411.003 3.587-3.588-.001 2.587h3.5 2.521v-2.585l3.565 3.586-3.564 3.585-.001-2.585h-2.521l-3.499-.001-.001 2.586z"),n.setAttribute("fill","#fff");let o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d","m8.497 7.993h2.521v2.586l3.565-3.586-3.565-3.585v2.605h-2.521-3.5v-2.607l-3.586 3.587 3.586 3.586v-2.587z"),o.setAttribute("fill","#000"),t.appendChild(n),t.appendChild(o),e.appendChild(t),e}function Qt(e,t,n={}){let{step:o=1,min:r,max:i,factor:a=.5,onDrag:l,triggerWidth:s=16,showHandlebar:c=!0,usePointerLock:d=!0,property:p}=n,u=null,g=null,h=null,m=null,b=null,x=null,E=null,w=!1,v=(()=>{let _=String(o),$=_.indexOf(".");return $===-1?0:_.length-$-1})(),L=_=>{if(u===null||h===null)return;if(u+=_,b&&g!==null){let V=u,Z=window.innerWidth;V<0?V+=Z:V>=Z&&(V-=Z),b.style.transform=`translate(${V}px, ${g}px)`}let $=Math.round(u*a)*o,O=h[0]+$;typeof r=="number"&&O<r&&(O=r),typeof i=="number"&&O>i&&(O=i);let F=O.toFixed(v);if(F.includes(".")){for(;F.endsWith("0");)F=F.slice(0,-1);F.endsWith(".")&&(F=F.slice(0,-1))}if(F===x)return;x=F;let A=F+h[1];E=A,e.value=A,l&&l(A)},k=_=>L(_.movementX),N=()=>{w=!1,document.removeEventListener("pointerlockchange",I),document.removeEventListener("mousemove",k),b&&(b.remove(),b=null)};function I(){w&&document.pointerLockElement?(document.addEventListener("mousemove",k),w=!1):document.pointerLockElement||N()}e.addEventListener("pointerdown",_=>{let $=e.getBoundingClientRect();if(_.clientX-$.left>s)return;let F=e.value.match(/^-?[\d.]+/);if(F&&(u=d?0:_.clientX,g=_.clientY,m=e.value,h=[parseFloat(F[0]),e.value.slice(F[0].length)],x=null,E=null,e.setPointerCapture(_.pointerId),_.preventDefault(),e.dispatchEvent(new CustomEvent("v0-drag-start",{bubbles:!0,composed:!0,detail:{property:p}})),d&&!document.pointerLockElement)){w=!0,document.addEventListener("pointerlockchange",I);let A=()=>{if(h===null){document.exitPointerLock();return}b=J1(),b.style.transform=`translate(${_.clientX}px, ${_.clientY}px)`,document.body.appendChild(b)};e.requestPointerLock({unadjustedMovement:!0}).then(A).catch(V=>{if(V.name==="NotSupportedError"){e.requestPointerLock().then(A).catch(N);return}N()})}}),d||e.addEventListener("pointermove",_=>{if(u===null||h===null)return;let $=_.clientX-u,O=Math.round($*a)*o,F=h[0]+O;typeof r=="number"&&F<r&&(F=r),typeof i=="number"&&F>i&&(F=i);let A=F.toFixed(v);if(A.includes(".")){for(;A.endsWith("0");)A=A.slice(0,-1);A.endsWith(".")&&(A=A.slice(0,-1))}if(A===x)return;x=A;let V=A+h[1];E=V,e.value=V,l&&l(V)}),e.addEventListener("pointerup",_=>{e.releasePointerCapture(_.pointerId),d&&(document.pointerLockElement?document.exitPointerLock():N());let $=h!==null;E!==null&&m!==null&&t(E,m),u=null,g=null,h=null,m=null,b&&(b.remove(),b=null),$&&e.dispatchEvent(new CustomEvent("v0-drag-end",{bubbles:!0,composed:!0,detail:{property:p}}))}),e.addEventListener("keydown",_=>{if(_.key!=="ArrowUp"&&_.key!=="ArrowDown")return;let $=e.value.match(/^-?[\d.]+/);if(!$)return;_.preventDefault();let O=parseFloat($[0]),F=e.value.slice($[0].length),A=_.key==="ArrowUp"?o:-o,V=_.shiftKey?10:_.altKey?.1:1,Z=O+A*V;typeof r=="number"&&Z<r&&(Z=r),typeof i=="number"&&Z>i&&(Z=i);let se=Z.toFixed(v);if(se.includes(".")){for(;se.endsWith("0");)se=se.slice(0,-1);se.endsWith(".")&&(se=se.slice(0,-1))}let ce=se+F,X=e.value;e.value=ce,l&&l(ce),t(ce,X)}),c?(e.style.paddingLeft="18px",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="4px center",e.style.backgroundSize="8px 16px",e.style.backgroundImage="var(--drag-handle-image)",e.addEventListener("mousemove",_=>{let $=e.getBoundingClientRect(),O=_.clientX-$.left;e.style.cursor=O<=s?"ew-resize":"text"}),e.addEventListener("mouseleave",()=>{e.style.cursor="text"})):e.style.cursor="ew-resize"}function Q1(e){let t=e.trim();if(t.endsWith("%")){let o=parseFloat(t);if(!isNaN(o))return String(Math.max(0,Math.min(1,o/100)))}let n=parseFloat(t);return isNaN(n)?"1":n>1&&n<=100?String(Math.max(0,Math.min(1,n/100))):String(Math.max(0,Math.min(1,n)))}function Yf(e){let t=parseFloat(e);return isNaN(t)?"100%":`${Math.round(t*100)}%`}function ex(e,t){if(!e.includes("px"))return e;let n=parseFloat(e),o=parseFloat(t);if(isNaN(n)||isNaN(o)||o===0)return e;let r=n/o;return String(Math.round(r*100)/100)}function tx(e,t){if(e==="normal"||e.includes("em"))return e==="normal"?"0em":e;let n=parseFloat(e),o=parseFloat(t);if(isNaN(n)||isNaN(o)||o===0)return e;let r=n/o;return`${Math.round(r*1e3)/1e3}em`}function nx(e){let t=e.trim();if(t==="0"||t==="0em"||t==="normal")return"0em";let n=t.match(/^(-?[\d.]+)(px|em|rem|%)?$/);if(n){let o=parseFloat(n[1]),r=n[2]||"em";if(!isNaN(o))return`${o}${r}`}return t}function _n(e,t={}){let{collapsible:n=!1,collapsed:o=!1}=t,r=document.createElement("div");r.className="section",n&&(r.classList.add("collapsible"),o&&r.classList.add("collapsed"));let i=document.createElement("div");if(i.className="section-header",n){let l=document.createElement("span");l.className="section-chevron",l.innerHTML='<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3.5L11 8L6.5 12.5L5.44 11.44L8.88 8L5.44 4.56L6.5 3.5Z"/></svg>',i.appendChild(l);let s=document.createElement("span");s.textContent=e,i.appendChild(s),i.style.cursor="pointer",i.addEventListener("click",()=>{r.classList.toggle("collapsed")})}else i.textContent=e;let a=document.createElement("div");return a.className="section-body",r.appendChild(i),r.appendChild(a),{section:r,header:i,body:a}}function Tn(e,t,n,o="text",r,i,a){let l=document.createElement("div");l.className="row";let s=document.createElement("label");if(s.className="label",s.textContent=e,l.appendChild(s),o==="select"&&r){let c=document.createElement("select");c.className="select",r.forEach(d=>{let p=document.createElement("option");p.value=d,p.textContent=d,(d===t||t.includes(d))&&(p.selected=!0),c.appendChild(p)}),c.addEventListener("change",()=>n(c.value)),l.appendChild(c)}else if(o==="color"){let c=Un(t,n,a);l.appendChild(c)}else{let c=document.createElement("input");c.type="text",c.className="input",c.value=t,c.spellcheck=!1,c.addEventListener("change",()=>n(c.value)),i&&Qt(c,n,i),l.appendChild(c)}return l}function br(e,t,n,o,r){let i=document.createElement("div");i.className="row";let a=document.createElement("label");a.className="label",a.textContent=e,i.appendChild(a);let l=document.createElement("select");if(l.className="select",r&&!n.some(s=>s.value===t)){let s=document.createElement("option");s.value=t,s.textContent=r,s.disabled=!0,s.selected=!0,l.appendChild(s)}return n.forEach(s=>{let c=document.createElement("option");c.value=s.value,c.textContent=s.label,s.value===t&&(c.selected=!0),l.appendChild(c)}),l.addEventListener("change",()=>o(l.value)),i.appendChild(l),i}function ox(e,t,n,o){let r=document.createElement("div");r.className="row";let i=document.createElement("label");i.className="label",i.textContent=e,r.appendChild(i);let a=document.createElement("input");return a.type="text",a.className="input",a.placeholder="e.g., 50%\u2026",a.spellcheck=!1,a.value=Yf(t),a.addEventListener("change",()=>{let l=Q1(a.value);n(l),a.value=Yf(l)}),Qt(a,(l,s)=>{let c=l.match(/^(-?\d+)%?$/);if(c){let d=parseInt(c[1]),p=Math.max(0,Math.min(100,d)),u=String(p/100),g;if(s){let h=s.match(/^(-?\d+)%?$/);h&&(g=String(Math.max(0,Math.min(100,parseInt(h[1])))/100))}n(u,g),a.value=`${p}%`}},{step:1,min:0,max:100,onDrag:o?l=>{let s=l.match(/^(-?\d+)%?$/);if(s){let c=parseInt(s[1]),d=Math.max(0,Math.min(100,c));o(String(d/100))}}:void 0,property:"opacity"}),r.appendChild(a),r}function rx(e,t,n,o,r){let i=document.createElement("div");i.className="row";let a=document.createElement("label");a.className="label",a.textContent=e,i.appendChild(a);let l=document.createElement("input");return l.type="text",l.className="input",l.placeholder="e.g., 0.05em\u2026",l.spellcheck=!1,l.value=tx(t,n),l.addEventListener("change",()=>{let s=nx(l.value);o(s),l.value=s}),Qt(l,o,{step:.001,onDrag:r,property:"letterSpacing"}),i.appendChild(l),i}function Kf(e,t,n,o,r){let i=document.createElement("div");i.className="row";let a=document.createElement("label");a.className="label",a.textContent=e,i.appendChild(a);let l=document.createElement("div");l.className="combo-wrapper";let s=document.createElement("input");s.type="text",s.className="input combo-input",s.spellcheck=!1,s.value=t;let c=document.createElement("div");return c.className="combo-dropdown",c.style.display="none",n.map(p=>typeof p=="string"?{label:p,value:p}:p).forEach(p=>{let u=document.createElement("div");u.className="combo-item",u.textContent=p.label,u.dataset.value=p.value,u.addEventListener("mousedown",g=>{g.preventDefault(),s.value=p.value,o(p.value),c.style.display="none"}),c.appendChild(u)}),s.addEventListener("focus",()=>{c.style.display="block"}),s.addEventListener("blur",()=>{setTimeout(()=>{c.style.display="none"},150)}),s.addEventListener("change",()=>{o(s.value)}),s.addEventListener("input",()=>{let p=s.value.toLowerCase();c.querySelectorAll(".combo-item").forEach(u=>{let g=u,m=`${g.textContent?.toLowerCase()||""} ${g.dataset.value??""}`.toLowerCase();g.style.display=m.includes(p)?"block":"none"})}),r&&Qt(s,o,r),l.appendChild(s),l.appendChild(c),i.appendChild(l),i}function oa(e,t,n,o){let r=document.createElement("div");r.className="row";let i=document.createElement("label");i.className="label",i.textContent=e,r.appendChild(i);let a=document.createElement("div");return a.className="icon-button-group",n.forEach(l=>{let s=document.createElement("button");s.type="button",s.className="icon-button",s.title=l.title,s.setAttribute("aria-label",l.title);let c=l.icon.replace("<svg",'<svg aria-hidden="true"');s.innerHTML=c,t===l.value&&s.classList.add("active"),s.addEventListener("click",()=>{a.querySelectorAll(".icon-button").forEach(d=>{d.classList.remove("active")}),s.classList.add("active"),o(l.value)}),a.appendChild(s)}),r.appendChild(a),r}function ix(e,t,n,o,r,i){let a=document.createElement("div");a.className="popup-overlay";let l=document.createElement("div");l.className="popup";let s=o.getBoundingClientRect();l.style.left=`${s.left-208}px`,l.style.top=`${s.top}px`;let c=document.createElement("div");c.className="popup-header";let d=document.createElement("span");d.className="popup-title",d.textContent="Advanced";let p=document.createElement("button");p.type="button",p.className="popup-close",p.setAttribute("aria-label","Close"),p.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 2.46967L13.5303 3.53033L9.06066 8L13.5303 12.4697L12.4697 13.5303L8 9.06066L3.53033 13.5303L2.46967 12.4697L6.93934 8L2.46967 3.53033L3.53033 2.46967L8 6.93934L12.4697 2.46967Z" fill="currentColor"/></svg>',p.addEventListener("click",()=>a.remove()),c.appendChild(d),c.appendChild(p);let u=document.createElement("div");u.className="popup-content";let g=document.createElement("div");g.className="row",g.style.marginBottom="12px";let h=document.createElement("label");h.className="label",h.textContent="Smoothing",g.appendChild(h);let m=document.createElement("div");m.className="icon-button-group";let b=n.webkitFontSmoothing||"auto";[{value:"none",label:"None"},{value:"subpixel-antialiased",label:"Subpixel"},{value:"antialiased",label:"Smooth"}].forEach(X=>{let K=document.createElement("button");K.type="button",K.className="icon-button",K.style.fontSize="10px",K.style.padding="0 6px",K.textContent=X.label,K.title=X.label,K.setAttribute("aria-label",X.label),b===X.value&&K.classList.add("active"),K.addEventListener("click",()=>{m.querySelectorAll(".icon-button").forEach(ge=>{ge.classList.remove("active")}),K.classList.add("active"),ie(t,"webkitFontSmoothing",X.value,r,i.hasReact)}),m.appendChild(K)}),g.appendChild(m),u.appendChild(g);let E=document.createElement("div");E.className="toggle-row";let w=document.createElement("div"),v=document.createElement("div");v.className="toggle-label",v.textContent="Kerning";let L=document.createElement("div");L.className="toggle-sublabel",L.textContent="Adjust spacing between characters",w.appendChild(v),w.appendChild(L);let k=document.createElement("div");k.className="toggle-switch",k.setAttribute("role","switch"),k.setAttribute("tabindex","0");let I=(n.fontKerning||"auto")==="normal";I&&k.classList.add("active"),k.setAttribute("aria-checked",String(I));let _=()=>{let X=k.classList.toggle("active");k.setAttribute("aria-checked",String(X)),ie(t,"fontKerning",X?"normal":"none",r,i.hasReact)};k.addEventListener("click",_),k.addEventListener("keydown",X=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),_())}),E.appendChild(w),E.appendChild(k),u.appendChild(E);let $=document.createElement("div");$.className="toggle-row";let O=document.createElement("div"),F=document.createElement("div");F.className="toggle-label",F.textContent="Ligatures";let A=document.createElement("div");A.className="toggle-sublabel",A.textContent="Connect certain letter pairs",O.appendChild(F),O.appendChild(A);let V=document.createElement("div");V.className="toggle-switch",V.setAttribute("role","switch"),V.setAttribute("tabindex","0");let Z=n.fontVariantLigatures||"normal",se=Z==="normal"||Z==="common-ligatures";se&&V.classList.add("active"),V.setAttribute("aria-checked",String(se));let ce=()=>{let X=V.classList.toggle("active");V.setAttribute("aria-checked",String(X)),ie(t,"fontVariantLigatures",X?"common-ligatures":"none",r,i.hasReact)};return V.addEventListener("click",ce),V.addEventListener("keydown",X=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),ce())}),$.appendChild(O),$.appendChild(V),u.appendChild($),l.appendChild(c),l.appendChild(u),a.appendChild(l),l.addEventListener("click",X=>{X.stopPropagation()}),a.addEventListener("click",()=>{a.remove()}),a}function ax(e,t,n,o,r,i){let a=document.createElement("div");a.className="popup-overlay";let l=document.createElement("div");l.className="popup";let s=o.getBoundingClientRect();l.style.left=`${s.left-208}px`,l.style.top=`${s.top}px`;let c=document.createElement("div");c.className="popup-header";let d=document.createElement("span");d.className="popup-title",d.textContent="Decoration";let p=document.createElement("button");p.type="button",p.className="popup-close",p.setAttribute("aria-label","Close"),p.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 2.46967L13.5303 3.53033L9.06066 8L13.5303 12.4697L12.4697 13.5303L8 9.06066L3.53033 13.5303L2.46967 12.4697L6.93934 8L2.46967 3.53033L3.53033 2.46967L8 6.93934L12.4697 2.46967Z" fill="currentColor"/></svg>',p.addEventListener("click",()=>a.remove()),c.appendChild(d),c.appendChild(p);let u=document.createElement("div");u.className="popup-content";let g=document.createElement("div");g.className="row",g.style.marginBottom="12px";let h=document.createElement("label");h.className="label",h.textContent="Style",g.appendChild(h);let m=document.createElement("div");m.className="icon-button-group";let b=n.textDecorationStyle||"solid";[{value:"solid",label:"Solid"},{value:"double",label:"Double"},{value:"dotted",label:"Dotted"},{value:"dashed",label:"Dashed"},{value:"wavy",label:"Wavy"}].forEach(_=>{let $=document.createElement("button");$.type="button",$.className="icon-button",$.style.fontSize="10px",$.style.padding="0 6px",$.textContent=_.label,$.title=_.label,b===_.value&&$.classList.add("active"),$.addEventListener("click",()=>{m.querySelectorAll(".icon-button").forEach(O=>{O.classList.remove("active")}),$.classList.add("active"),ie(t,"textDecorationStyle",_.value,r,i.hasReact)}),m.appendChild($)}),g.appendChild(m),u.appendChild(g);let E=document.createElement("div");E.className="row",E.style.marginBottom="12px";let w=document.createElement("label");w.className="label",w.textContent="Color",E.appendChild(w);let v=Un(n.textDecorationColor||n.color,(_,$)=>{ie(t,"textDecorationColor",_,r,i.hasReact,$)},_=>tt(t,"textDecorationColor",_));E.appendChild(v),u.appendChild(E);let L=document.createElement("div");L.className="row",L.style.marginBottom="12px";let k=document.createElement("label");k.className="label",k.textContent="Thickness",L.appendChild(k);let N=document.createElement("input");if(N.type="text",N.className="input",N.spellcheck=!1,N.value=n.textDecorationThickness||"auto",N.style.flex="1",N.addEventListener("change",()=>{ie(t,"textDecorationThickness",N.value,r,i.hasReact)}),Qt(N,_=>{ie(t,"textDecorationThickness",_,r,i.hasReact)},{step:1,min:0,onDrag:_=>tt(t,"textDecorationThickness",_)}),L.appendChild(N),u.appendChild(L),(n.textDecorationLine||"none").includes("underline")){let _=document.createElement("div");_.className="row";let $=document.createElement("label");$.className="label",$.textContent="Offset",_.appendChild($);let O=document.createElement("input");O.type="text",O.className="input",O.spellcheck=!1,O.value=n.textUnderlineOffset||"auto",O.style.flex="1",O.addEventListener("change",()=>{ie(t,"textUnderlineOffset",O.value,r,i.hasReact)}),Qt(O,F=>{ie(t,"textUnderlineOffset",F,r,i.hasReact)},{step:1,onDrag:F=>tt(t,"textUnderlineOffset",F)}),_.appendChild(O),u.appendChild(_)}return l.appendChild(c),l.appendChild(u),a.appendChild(l),l.addEventListener("click",_=>{_.stopPropagation()}),a.addEventListener("click",()=>{a.remove()}),a}function lx(e,t,n,o,r){let i=document.createElement("div");i.className="row-with-button";let a=document.createElement("div");a.className="row";let l=document.createElement("label");l.className="label",l.textContent="Font",a.appendChild(l);let s=Zi(t.fontFamily||""),c=0,d=Ji({label:"Font",value:s,fontFamily:t.fontFamily||"",onChange:async u=>{let g=++c;if(Gn.includes(u)){let E=e.style.fontFamily||t.fontFamily;e.style.fontFamily=u,o.push({type:"style",element:e,elementInfo:Ne(e,n.hasReact),property:"fontFamily",oldValue:String(E),newValue:u,timestamp:Date.now()});return}let{link:h,loaded:m}=await Gi(u);if(!m||g!==c||!e.isConnected)return;let b=Xn(u),x=e.style.fontFamily||t.fontFamily;e.style.fontFamily=b,h&&o.push({type:"fontInjection",elementInfo:Ne(e,n.hasReact),fontName:u,fontUrl:hr(u),timestamp:Date.now()}),o.push({type:"style",element:e,elementInfo:Ne(e,n.hasReact),property:"fontFamily",oldValue:String(x),newValue:b,timestamp:Date.now()})}});a.appendChild(d),i.appendChild(a);let p=document.createElement("button");return p.type="button",p.className="advanced-btn",p.setAttribute("aria-label","Advanced"),p.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',p.title="Advanced",p.addEventListener("click",()=>{let u=ix(r,e,t,p,o,n);r.appendChild(u)}),i.appendChild(p),i}function Zf(e,t,n,o,r){let{section:i,body:a}=_n("Typography");a.appendChild(lx(e,t,n,o,r));let l=["10px","12px","14px","16px","18px","20px","24px","30px","36px","48px","60px","72px","96px"];a.appendChild(Kf("Size",t.fontSize,Gf(l),(u,g)=>{ie(e,"fontSize",u,o,n.hasReact,g)},{step:1,min:1,onDrag:u=>{tt(e,"fontSize",u)},property:"fontSize"})),a.appendChild(br("Weight",t.fontWeight,X1,u=>{ie(e,"fontWeight",u,o,n.hasReact)})),a.appendChild(oa("Style",t.fontStyle,[{icon:ut.fontNormal,value:"normal",title:"Normal"},{icon:ut.fontItalic,value:"italic",title:"Italic"}],u=>{ie(e,"fontStyle",u,o,n.hasReact)}));let s=["1","1.2","1.25","1.4","1.5","1.6","1.75","2","2.5"];a.appendChild(Kf("Line Height",ex(t.lineHeight,t.fontSize),Gf(s),(u,g)=>{ie(e,"lineHeight",u,o,n.hasReact,g)},{step:.1,min:0,onDrag:u=>{tt(e,"lineHeight",u)},property:"lineHeight"})),a.appendChild(rx("Letter Spacing",t.letterSpacing,t.fontSize,(u,g)=>{ie(e,"letterSpacing",u,o,n.hasReact,g)},u=>{tt(e,"letterSpacing",u)})),a.appendChild(oa("Alignment",t.textAlign,[{icon:ut.alignLeft,value:"left",title:"Align Left"},{icon:ut.alignCenter,value:"center",title:"Align Center"},{icon:ut.alignRight,value:"right",title:"Align Right"},{icon:ut.alignJustify,value:"justify",title:"Justify"}],u=>{ie(e,"textAlign",u,o,n.hasReact)})),a.appendChild(oa("Case",t.textTransform,[{icon:ut.transformNone,value:"none",title:"None"},{icon:ut.transformCapitalize,value:"capitalize",title:"Capitalize"},{icon:ut.transformUppercase,value:"uppercase",title:"Uppercase"},{icon:ut.transformLowercase,value:"lowercase",title:"Lowercase"}],u=>{ie(e,"textTransform",u,o,n.hasReact)}));let c=t.textDecorationLine||"none",d=document.createElement("div");d.className="row-with-button";let p=oa("Decoration",c,[{icon:ut.decorationNone,value:"none",title:"None"},{icon:ut.decorationUnderline,value:"underline",title:"Underline"},{icon:ut.decorationLineThrough,value:"line-through",title:"Strikethrough"},{icon:ut.decorationOverline,value:"overline",title:"Overline"}],u=>{ie(e,"textDecorationLine",u,o,n.hasReact)});if(d.appendChild(p),c!=="none"){let u=document.createElement("button");u.type="button",u.className="advanced-btn",u.setAttribute("aria-label","Advanced decoration options"),u.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',u.title="Advanced decoration options",u.addEventListener("click",()=>{let g=ax(r,e,t,u,o,n);r.appendChild(g)}),d.appendChild(u)}return a.appendChild(d),i}function Jf(e,t,n,o){let{section:r,body:i}=_n("Color");return i.appendChild(Tn("Text",t.color,(a,l)=>{ie(e,"color",a,o,n.hasReact,l)},"color",void 0,void 0,a=>tt(e,"color",a))),r}function Qf(e,t,n,o){let{section:r,body:i}=_n("Background"),a=t.backgroundImage!=="none"?t.backgroundImage:t.backgroundColor,l=u=>u.startsWith("linear-gradient")||u.startsWith("radial-gradient"),s=(u,g=!0,h=a)=>{let m=l(h),b=m?h:"none",x=m?t.backgroundColor:h;l(u)?g?(ie(e,"backgroundColor","transparent",o,n.hasReact,x),ie(e,"backgroundImage",u,o,n.hasReact,b)):(e.style.backgroundColor="transparent",e.style.backgroundImage=u):g?(ie(e,"backgroundImage","none",o,n.hasReact,b),ie(e,"backgroundColor",u,o,n.hasReact,x)):(e.style.backgroundImage="none",e.style.backgroundColor=u)},c=document.createElement("div");c.className="row";let d=document.createElement("label");d.className="label",d.textContent="Color",c.appendChild(d);let p=Un(a,(u,g)=>s(u,!0,g),u=>s(u,!1),!0);return c.appendChild(p),i.appendChild(c),r}function em(e,t,n,o,r=!0,i){let{section:a,header:l,body:s}=_n("Layout"),c=t.display==="flex"||t.display==="inline-flex";s.appendChild(br("Display",t.display,G1,v=>{ie(e,"display",v,o,n.hasReact),window.dispatchEvent(new CustomEvent("v0-design-mode-refresh-panel"))})),[{label:"Width",prop:"width"},{label:"Height",prop:"height"}].forEach(({label:v,prop:L})=>{s.appendChild(Tn(v,t[L],(k,N)=>ie(e,L,k,o,n.hasReact,N),"text",void 0,{step:1,min:0,onDrag:k=>tt(e,L,k),property:L}))}),c&&(s.appendChild(br("Direction",t.flexDirection,Y1,v=>{ie(e,"flexDirection",v,o,n.hasReact)})),s.appendChild(br("Align",t.alignItems,K1,v=>{ie(e,"alignItems",v,o,n.hasReact)},"Default")),s.appendChild(br("Distribute",t.justifyContent,Z1,v=>{ie(e,"justifyContent",v,o,n.hasReact)},"Default")),s.appendChild(Tn("Gap",t.gap,(v,L)=>ie(e,"gap",v,o,n.hasReact,L),"text",void 0,{step:1,min:0,onDrag:v=>tt(e,"gap",v),property:"gap"})));let p=document.createElement("label");p.className="layout-overlay-label";let u=document.createElement("input");u.type="checkbox",u.checked=r,u.className="layout-overlay-checkbox",u.addEventListener("change",()=>{i?.(u.checked)});let g=document.createElement("span");g.textContent="Show paddings and margins",p.appendChild(u),p.appendChild(g),l.appendChild(p);let h=document.createElement("div");h.className="subsection-header",h.textContent="Margin",s.appendChild(h);let m=document.createElement("div");m.className="spacing-grid",[{label:"Top",prop:"marginTop"},{label:"Bottom",prop:"marginBottom"},{label:"Left",prop:"marginLeft"},{label:"Right",prop:"marginRight"}].forEach(({label:v,prop:L})=>{let k=Tn(v,t[L],(N,I)=>ie(e,L,N,o,n.hasReact,I),"text",void 0,{step:1,onDrag:N=>tt(e,L,N),property:L});m.appendChild(k)}),s.appendChild(m);let x=document.createElement("div");x.className="subsection-header",x.textContent="Padding",s.appendChild(x);let E=document.createElement("div");return E.className="spacing-grid",[{label:"Top",prop:"paddingTop"},{label:"Bottom",prop:"paddingBottom"},{label:"Left",prop:"paddingLeft"},{label:"Right",prop:"paddingRight"}].forEach(({label:v,prop:L})=>{let k=Tn(v,t[L],(N,I)=>ie(e,L,N,o,n.hasReact,I),"text",void 0,{step:1,onDrag:N=>tt(e,L,N),property:L});E.appendChild(k)}),s.appendChild(E),a}function tm(e,t,n,o){let{section:r,body:i}=_n("Border");i.appendChild(Tn("Color",t.borderColor||t.borderTopColor,(l,s)=>{ie(e,"borderColor",l,o,n.hasReact,s)},"color",void 0,void 0,l=>tt(e,"borderColor",l)));let a=["none","solid","dashed","dotted","double"];return i.appendChild(Tn("Style",t.borderStyle||t.borderTopStyle,l=>{let s=window.getComputedStyle(e).borderWidth;if(ie(e,"borderStyle",l,o,n.hasReact),l!=="none"&&(!s||s==="0px")){ie(e,"borderWidth","1px",o,n.hasReact);let d=Array.from(i.querySelectorAll(".row")).find(p=>p.querySelector(".label")?.textContent==="Width")?.querySelector("input");d&&(d.value="1px")}},"select",a)),i.appendChild(Tn("Width",t.borderWidth||t.borderTopWidth,(l,s)=>{ie(e,"borderWidth",l,o,n.hasReact,s)},"text",void 0,{step:1,min:0,onDrag:l=>{tt(e,"borderWidth",l)},property:"borderWidth"})),r}function sx(e,t,n,o){let r=document.createElement("div");r.className="corner-radius-editor",r.style.cssText="display: flex; flex-direction: column; gap: 8px;";let i=document.createElement("div");i.className="row",i.style.marginBottom="4px";let a=document.createElement("label");a.className="label",a.textContent="All Corners",i.appendChild(a);let l=document.createElement("div");l.style.cssText="display: flex; gap: 6px; align-items: center;";let s=document.createElement("input");s.type="text",s.className="input",s.spellcheck=!1,s.value=t.borderRadius,s.style.flex="1",Qt(s,(w,v)=>{ie(e,"borderRadius",w,o,n.hasReact,v),h.value=w,m.value=w,x.value=w,b.value=w},{step:1,min:0,onDrag:w=>{tt(e,"borderRadius",w),h.value=w,m.value=w,x.value=w,b.value=w},property:"borderRadius"}),s.addEventListener("change",()=>{ie(e,"borderRadius",s.value,o,n.hasReact),h.value=s.value,m.value=s.value,x.value=s.value,b.value=s.value});let c=!1,d=document.createElement("button");d.type="button",d.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>',d.title="Edit individual corners",d.style.cssText=`
    width: 26px;
    height: 26px;
    min-width: 26px;
    background: var(--bg-input);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,l.appendChild(s),l.appendChild(d),i.appendChild(l),r.appendChild(i);let p=document.createElement("div");p.className="spacing-grid",p.style.display="none";let u=[{label:"Top Left",prop:"borderTopLeftRadius"},{label:"Top Right",prop:"borderTopRightRadius"},{label:"Bottom Left",prop:"borderBottomLeftRadius"},{label:"Bottom Right",prop:"borderBottomRightRadius"}],g=[];u.forEach(({label:w,prop:v})=>{let L=document.createElement("div");L.className="row",L.style.marginBottom="0";let k=document.createElement("label");k.className="label",k.textContent=w,L.appendChild(k);let N=document.createElement("input");N.type="text",N.className="input",N.spellcheck=!1,N.value=t[v],g.push(N),Qt(N,(I,_)=>{ie(e,v,I,o,n.hasReact,_),E()},{step:1,min:0,onDrag:I=>{tt(e,v,I),E()},property:v}),N.addEventListener("change",()=>{ie(e,v,N.value,o,n.hasReact),E()}),L.appendChild(N),p.appendChild(L)});let[h,m,b,x]=g,E=()=>{let w=g.map(v=>v.value);w.every(v=>v===w[0])?s.value=w[0]:s.value="Mixed"};return d.addEventListener("click",()=>{c=!c,p.style.display=c?"grid":"none",d.style.background=c?"var(--bg-hover)":"var(--bg-input)"}),r.appendChild(p),r}function nm(e,t,n,o){let{section:r,body:i}=_n("Appearance");return i.appendChild(ox("Opacity",t.opacity,(a,l)=>{ie(e,"opacity",a,o,n.hasReact,l)},a=>{tt(e,"opacity",a)})),i.appendChild(sx(e,t,n,o)),r}function cx(e,t,n,o){let r=document.createElement("div");r.style.cssText="display: flex; flex-direction: column; gap: 8px;";let i=t.boxShadow,a=ta(i),l=a.config,s=i,c=te=>{ie(e,"boxShadow",te,o,n.hasReact,s),s=te},d=()=>{c(Vs(a,l)),m.value=""},p=()=>{e.style.boxShadow=Vs(a,l)},u=document.createElement("div");u.className="row",u.style.marginBottom="4px";let g=document.createElement("label");g.className="label",g.textContent="Shadow",u.appendChild(g);let h=document.createElement("div");h.style.cssText="display: flex; gap: 6px; align-items: center; flex: 1;";let m=document.createElement("select");m.className="select",m.style.flex="1";let b=document.createElement("option");b.value="",b.textContent="Custom",b.disabled=!0,m.appendChild(b);let x=jf(i);Fs.forEach(te=>{let Ee=document.createElement("option");Ee.value=te.value,Ee.textContent=te.label,m.appendChild(Ee)}),m.value=x??"",m.addEventListener("change",()=>{c(m.value),a=ta(m.value),l=a.config,ge()});let E=!1,w=document.createElement("button");w.type="button",w.className="advanced-btn",w.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',w.title="Custom shadow builder",h.appendChild(m),h.appendChild(w),u.appendChild(h),r.appendChild(u);let v=document.createElement("div");v.style.cssText="display: none; flex-direction: column; gap: 8px;";let L=document.createElement("div");L.className="spacing-grid";let k=(te,Ee,ve,Te={})=>{let Ce=document.createElement("div");Ce.className="row",Ce.style.marginBottom="0";let Se=document.createElement("label");Se.className="label",Se.textContent=te,Ce.appendChild(Se);let be=document.createElement("input");return be.type="text",be.className="input",be.spellcheck=!1,be.value=`${Ee}px`,Qt(be,()=>{let $e=parseInt(be.value);isNaN($e)||(ve($e),d())},{step:1,min:Te.min,onDrag:()=>{let $e=parseInt(be.value);isNaN($e)||(ve($e),p())},property:"boxShadow"}),be.addEventListener("change",()=>{let $e=parseInt(be.value);isNaN($e)||(ve($e),d())}),Ce.appendChild(be),{row:Ce,input:be}},N=k("X Offset",l.x,te=>{l.x=te}),I=k("Y Offset",l.y,te=>{l.y=te}),_=k("Blur",l.blur,te=>{l.blur=te},{min:0}),$=k("Spread",l.spread,te=>{l.spread=te});L.appendChild(N.row),L.appendChild(I.row),L.appendChild(_.row),L.appendChild($.row),v.appendChild(L);let O=document.createElement("div");O.className="row";let F=document.createElement("label");F.className="label",F.textContent="Color",O.appendChild(F);let A=Un(l.color,te=>{l.color=te,d()},te=>{l.color=te,p()});O.appendChild(A),v.appendChild(O);let V=document.createElement("div");V.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: 12px;";let Z=document.createElement("div"),se=document.createElement("div");se.style.cssText="font-size: 11px; color: var(--text-primary);",se.textContent="Inset";let ce=document.createElement("div");ce.style.cssText="font-size: 9px; color: var(--text-tertiary); margin-top: 1px;",ce.textContent="Inner shadow",Z.appendChild(se),Z.appendChild(ce);let X=document.createElement("div");X.className="toggle-switch",X.setAttribute("role","switch"),X.setAttribute("tabindex","0"),l.inset&&X.classList.add("active"),X.setAttribute("aria-checked",String(l.inset));let K=()=>{l.inset=!l.inset,X.classList.toggle("active",l.inset),X.setAttribute("aria-checked",String(l.inset)),d()};X.addEventListener("click",K),X.addEventListener("keydown",te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),K())}),V.appendChild(Z),V.appendChild(X),v.appendChild(V),r.appendChild(v),w.addEventListener("click",()=>{E=!E,v.style.display=E?"flex":"none",w.style.background=E?"var(--bg-hover)":"var(--bg-input)",w.innerHTML=E?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/></svg>':'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>'});let ge=()=>{N.input.value=`${l.x}px`,I.input.value=`${l.y}px`,_.input.value=`${l.blur}px`,$.input.value=`${l.spread}px`,X.classList.toggle("active",l.inset),X.setAttribute("aria-checked",String(l.inset))};return r}function om(e,t,n,o){let{section:r,body:i}=_n("Shadow");return i.appendChild(cx(e,t,n,o)),r}function rm(e,t,n){let{section:o,body:r}=_n("Content"),i=document.createElement("textarea");i.className="textarea",i.spellcheck=!1,i.autocomplete="off";let a=e.textContent||"";i.value=a;let l=a,s=null;return i.addEventListener("input",()=>{let c=i.value;e.textContent=c,s=gr({element:e,state:t,historyManager:n,property:"textContent",originalValue:l,newValue:c,activeRecord:s})}),i.addEventListener("focus",()=>{l=na({element:e,state:t,historyManager:n,property:"textContent",fallbackValue:e.textContent||""}),s=null}),r.appendChild(i),o}var ut,X1,G1,Y1,K1,Z1,im=T(()=>{"use strict";Yn();ea();Is();Os();Vi();Uf();Bs();Yi();ut={alignLeft:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM1 7H1.75H9.25H10V8.5H9.25H1.75H1V7ZM1 12H1.75H11.25H12V13.5H11.25H1.75H1V12Z" fill="currentColor"/></svg>',alignCenter:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM3.5 7.25H4.25H11.75H12.5V8.75H11.75H4.25H3.5V7.25ZM2.5 12.5H3.25H12.75H13.5V14H12.75H3.25H2.5V12.5Z" fill="currentColor"/></svg>',alignRight:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z" fill="currentColor"/></svg>',alignJustify:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM1 7H1.75H14.25H15V8.5H14.25H1.75H1V7ZM1 12H1.75H14.25H15V13.5H14.25H1.75H1V12Z" fill="currentColor"/></svg>',fontNormal:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.75C1.94772 0.75 1.5 1.19772 1.5 1.75V2.75V3.5H3V2.75V2.25H7.25V13.5H6.75H6V15H6.75H7.25H8.75H9.25H10V13.5H9.25H8.75V2.25H13.25V2.75V3.5H14.75V2.75V1.75C14.75 1.19771 14.3023 0.75 13.75 0.75H2.5Z" fill="currentColor"/></svg>',fontItalic:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 1H5H13.75H14.5V2.5H13.75H10.5475L7.02746 13.5H11H11.75V15H11H2.25H1.5V13.5H2.25H5.45254L8.97254 2.5H5H4.25V1Z" fill="currentColor"/></svg>',transformNone:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',transformUppercase:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.21981 13.2149L2.72027 11.5043H2.85H6.15H6.27971L6.78016 13.2149L6.86483 13.5043H7.57227H8.4277H9.13514L9.21981 13.2149L9.72027 11.5043H9.85H13.15H13.2797L13.7802 13.2149L13.8648 13.5043H15.4277L15.2198 12.7937L12.2198 2.53943L10.7802 2.53943L7.99999 12.0423L5.21983 2.53943L3.78017 2.53943L0.780159 12.7937L0.572266 13.5043H2.13514L2.21981 13.2149ZM12.7824 9.80429L11.5 5.42105L10.2176 9.80429H12.7824ZM5.78236 9.80429H3.21762L4.5 5.42105L5.78236 9.80429Z" fill="currentColor"/></svg>',transformLowercase:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="8" y="12" text-anchor="middle" fill="currentColor" font-size="11" font-family="system-ui" font-weight="500">aa</text></svg>',transformCapitalize:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="8" y="12" text-anchor="middle" fill="currentColor" font-size="11" font-family="system-ui" font-weight="500">Aa</text></svg>',decorationNone:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',decorationUnderline:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2H6V7.5C6 8.60457 6.89543 9.5 8 9.5C9.10457 9.5 10 8.60457 10 7.5V2H11.5V7.5C11.5 9.433 9.933 11 8 11C6.067 11 4.5 9.433 4.5 7.5V2ZM3.5 13V14H12.5V13H3.5Z" fill="currentColor"/></svg>',decorationLineThrough:'<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 0.583374C6.15186 0.583374 4.89601 1.20742 4.10921 2.08165C3.34402 2.93186 3.08334 3.95168 3.08334 4.66671C3.08334 5.30246 3.25446 5.98764 3.73035 6.62516C3.82673 6.75427 3.934 6.8793 4.05254 7H1.75H1V8.5H1.75H14.25H15V7H14.25H7.01815L6.51769 6.8024C5.6688 6.46724 5.19511 6.07985 4.93239 5.72789C4.67477 5.38278 4.58334 5.0232 4.58334 4.66671C4.58334 4.27063 4.73934 3.62378 5.22415 3.0851C5.68734 2.57044 6.51483 2.08337 8.00001 2.08337C9.99003 2.08337 10.8295 2.95573 11.1785 3.6895L11.5006 4.36679L12.8552 3.72252L12.5331 3.04522C11.9243 1.76535 10.5425 0.583374 8.00001 0.583374ZM12.9167 11.25V10.5H11.4167V11.25C11.4167 11.6491 11.2587 12.3206 10.7686 12.8815C10.302 13.4155 9.47586 13.9167 8.00001 13.9167C6.13953 13.9167 5.27285 13.0402 4.87848 12.3L4.52584 11.638L3.20199 12.3433L3.55464 13.0053C4.18889 14.1958 5.54264 15.4167 8.00001 15.4167C9.85749 15.4167 11.1147 14.7652 11.8981 13.8685C12.658 12.9988 12.9167 11.9621 12.9167 11.25Z"/></svg>',decorationOverline:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2V3H12.5V2H3.5ZM4.5 14H6V8.5C6 7.39543 6.89543 6.5 8 6.5C9.10457 6.5 10 7.39543 10 8.5V14H11.5V8.5C11.5 6.567 9.933 5 8 5C6.067 5 4.5 6.567 4.5 8.5V14Z" fill="currentColor"/></svg>'},X1=[{value:"100",label:"Thin"},{value:"200",label:"Extra Light"},{value:"300",label:"Light"},{value:"400",label:"Regular"},{value:"500",label:"Medium"},{value:"600",label:"Semi Bold"},{value:"700",label:"Bold"},{value:"800",label:"Extra Bold"},{value:"900",label:"Black"}];G1=[{value:"",label:"Default"},{value:"block",label:"block"},{value:"flex",label:"flex"},{value:"inline-flex",label:"inline-flex"},{value:"grid",label:"grid"},{value:"inline-block",label:"inline-block"},{value:"inline",label:"inline"},{value:"none",label:"none"}],Y1=[{value:"row",label:"row"},{value:"column",label:"column"},{value:"row-reverse",label:"row reverse"},{value:"column-reverse",label:"column reverse"}],K1=[{value:"stretch",label:"stretch"},{value:"flex-start",label:"start"},{value:"center",label:"center"},{value:"flex-end",label:"end"},{value:"baseline",label:"baseline"}],Z1=[{value:"flex-start",label:"start"},{value:"center",label:"center"},{value:"flex-end",label:"end"},{value:"space-between",label:"space between"},{value:"space-around",label:"space around"},{value:"space-evenly",label:"space evenly"}]});function qs(e){return`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e.icon}</svg>`}function am(e){return`${e.guidance} ${dx}`}function lm(e){let t=e.trim().toLowerCase();return Ws.find(n=>n.id===t)??null}function ux(e,t){let n=e.label.toLowerCase();return e.id.startsWith(t)||n.startsWith(t)?0:e.keywords.some(o=>o.startsWith(t))?1:n.includes(t)?2:e.keywords.some(o=>o.includes(t))?3:e.summary.toLowerCase().includes(t)?4:-1}function sm(e){let t=e.trim().toLowerCase();return t?Ws.map((n,o)=>({direction:n,index:o,score:ux(n,t)})).filter(n=>n.score>=0).sort((n,o)=>n.score-o.score||n.index-o.index).map(n=>n.direction):[...Ws]}function cm(e,t){let n=e.slice(0,t),o=/(?:^|\s)\/([a-z0-9-]*)$/i.exec(n);if(!o)return null;let r=o[1];if(r.length>24)return null;let i=t;for(;i<e.length&&/[a-z0-9-]/i.test(e[i]);)i++;return{start:t-r.length-1,end:i,query:r}}function dm(e,t){let n=e.slice(0,t.start),o=e.slice(t.end);return(n===""||/\s$/.test(n))&&o.startsWith(" ")&&(o=o.slice(1)),{value:n+o,caret:n.length}}function um(e,t,n){let o=e.slice(0,t),r=e.slice(n),i="/";return o!==""&&!/\s$/.test(o)&&(i=" /"),{value:o+i+r,caret:o.length+i.length}}function pm(e,t){let n=e.trim();return t?n?`${t.label}: ${n}`:t.label:n}var dx,Ws,js=T(()=>{"use strict";dx="Apply this only to the selected element and its children. Stay within the existing design system (fonts, colors, radii, spacing scale) unless the user instructions say otherwise.",Ws=[{id:"polish",label:"Polish",summary:"Refine alignment and details",keywords:["refine","modern","clean","details","finish","shadows"],guidance:"Do a final quality pass without redesigning. Fix optical and mathematical alignment, put spacing on one consistent scale, keep same-role typography consistent, refine hover, focus, active, and disabled states, check text and focus contrast, and remove small inconsistencies in radii, borders, shadows, and icon sizing.",icon:'<path d="M15 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/><path d="M7 13l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6z"/>'},{id:"bolder",label:"Bolder",summary:"Stronger emphasis and impact",keywords:["pop","impact","stand out","emphasis","contrast","strong"],guidance:"Make the element read with more conviction. Make one decisive move, such as a stronger type scale or weight contrast or a more confident use of the existing accent, then quiet competing details so the move is legible. Reuse the system type scale, colors, and motifs at full strength instead of adding effects, gradients, or new colors.",icon:'<rect x="6" y="12" width="4" height="7" rx=".5"/><rect x="14" y="5" width="4" height="14" rx=".5"/>'},{id:"quieter",label:"Quieter",summary:"Calmer and more restrained",keywords:["subtle","calm","soft","tone down","muted","minimal"],guidance:"Reduce visual intensity without making it generic. Lower saturation, soften heavy weights (for example 700 to 500), thin or remove borders and decorative shadows, flatten unnecessary layering, and let neutrals and whitespace carry the hierarchy. Keep a few points of emphasis so the result feels refined, not lifeless.",icon:'<rect x="6" y="5" width="4" height="14" rx=".5"/><rect x="14" y="12" width="4" height="7" rx=".5"/>'},{id:"distill",label:"Distill",summary:"Remove clutter, keep essentials",keywords:["simplify","declutter","reduce","remove","clean","minimal"],guidance:"Strip the element to its essence. Remove redundant or decorative pieces, unnecessary wrappers, borders, backgrounds, and nested cards, consolidate repeated information, and keep one clear primary action or focal point. Use spacing and alignment instead of containers. Do not remove content people need.",icon:'<path d="M4 5h16l-6 8v7l-4-2v-5z"/>'},{id:"typeset",label:"Typeset",summary:"Clearer type hierarchy",keywords:["typography","font","type","readable","text","hierarchy"],guidance:"Improve the typography. Give heading, body, label, and metadata roles distinct size and weight steps from a consistent scale, tune line height and letter spacing (tighter for large display text), and keep body text around 45 to 75 characters per line. Use the fonts already in the project unless asked otherwise.",icon:'<path d="M5 6h14" stroke-width="2.6"/><path d="M5 12h9" stroke-width="1.9"/><path d="M5 18h5" stroke-width="1.3"/>'},{id:"layout",label:"Layout",summary:"Spacing, rhythm, and alignment",keywords:["spacing","spacious","whitespace","align","grid","hierarchy"],guidance:"Improve layout, spacing, and rhythm. Group related items tightly and separate distinct groups generously, use a deliberate spacing cadence instead of one repeated value, align to shared edges, and make the primary element obvious at a glance. Keep it working at narrow widths.",icon:'<rect x="3" y="4" width="8" height="16" rx=".5"/><rect x="13" y="4" width="8" height="7" rx=".5"/><rect x="13" y="13" width="8" height="7" rx=".5"/>'},{id:"colorize",label:"Colorize",summary:"Strategic, on-brand color",keywords:["color","palette","vibrant","accent","contrast"],guidance:"Add strategic color to a flat or monochrome design. Derive accents from the existing palette or brand color, use color to signal emphasis, action, and state rather than decoration, prefer tinted neutrals over pure grays, and keep the accent rare so it has force. Keep text and controls at WCAG AA contrast.",icon:'<circle cx="9" cy="10" r="5"/><circle cx="15" cy="10" r="5"/><circle cx="12" cy="15" r="5"/>'},{id:"clarify",label:"Clarify",summary:"Clearer, tighter copy",keywords:["copy","wording","text","labels","microcopy","writing"],guidance:"Improve the copy. Make headings, labels, buttons, and helper text specific, concise, and scannable, lead with what people get or need to do, use active verbs for actions, and remove filler and jargon. Keep the product voice and do not invent claims, numbers, or features.",icon:'<path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h7"/><path d="M17 15l2 2 3-4"/>'},{id:"adapt",label:"Adapt",summary:"Responsive across screens",keywords:["responsive","mobile","tablet","breakpoints"],guidance:"Make the element work across screen sizes. Use fluid widths and responsive breakpoints, let content wrap or stack on narrow screens, keep touch targets at least 44px, avoid horizontal overflow, and scale type and spacing proportionally. Keep DOM order consistent with visual order.",icon:'<rect x="2.5" y="5" width="12" height="11" rx="1"/><path d="M2.5 19h12"/><rect x="16.5" y="8" width="5" height="11" rx="1"/>'},{id:"animate",label:"Animate",summary:"Purposeful motion and feedback",keywords:["motion","transition","hover","micro-interaction"],guidance:"Add purposeful motion. Give interactive parts clear hover, press, and focus feedback, and use short ease-out transitions (about 150 to 250ms) on transform and opacity. Prefer one focal moment over many effects, never delay content, and respect prefers-reduced-motion.",icon:'<path d="M3 18c4-4 6-10 10-10"/><path d="M13 8c3 0 5 5 8 10"/><circle cx="13" cy="8" r="1.6" fill="currentColor" stroke="none"/>'},{id:"delight",label:"Delight",summary:"A memorable, on-brand touch",keywords:["personality","fun","playful","joy"],guidance:"Add a memorable, on-brand touch of personality, such as a refined micro-interaction, a thoughtful detail, or more characterful copy, without hurting clarity, accessibility, or performance. Keep it subtle enough to still feel good after the hundredth use.",icon:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>'}]});function hx(e){return e.isComposing||e.keyCode===229}function fm(e){return e.metaKey||e.ctrlKey||e.altKey||e.shiftKey}function mm({onChange:e,onSubmit:t,onDeleteRequest:n}){let o=document.createElement("div");o.className="composer";let r=document.createElement("textarea");r.className="composer-input",r.rows=2,r.spellcheck=!1,r.setAttribute("aria-label","Instructions for v0"),r.setAttribute("role","combobox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-controls",Us),r.setAttribute("aria-expanded","false");let i=document.createElement("div");i.className="composer-footer";let a=document.createElement("button");a.type="button",a.className="composer-direction",a.setAttribute("aria-haspopup","listbox"),a.setAttribute("aria-controls",Us);let l=document.createElement("button");l.type="button",l.className="composer-direction-clear",l.title="Remove direction",l.setAttribute("aria-label","Remove direction"),l.innerHTML=mx;let s=document.createElement("div");s.className="composer-direction-group",s.appendChild(a),s.appendChild(l);let c=document.createElement("span");c.className="composer-hint",c.setAttribute("aria-hidden","true"),c.textContent="\u21B5 Apply",i.appendChild(s),i.appendChild(c);let d=document.createElement("div");d.className="direction-menu",d.id=Us,d.hidden=!0,d.setAttribute("role","listbox"),d.setAttribute("aria-label","Design directions"),o.appendChild(d),o.appendChild(r),o.appendChild(i);let p=null,u=!1,g=!1,h=[],m=0,b=null,x=null;function E(){return r.selectionStart!==r.selectionEnd?null:cm(r.value,r.selectionStart)}function w(){if(s.classList.toggle("has-direction",p!==null),l.hidden=p===null,p){a.innerHTML=`${qs(p)}<span>${p.label}</span>`,a.title=`${p.summary}. Click to change.`,a.setAttribute("aria-label",`Direction: ${p.label}. Change direction`);return}a.innerHTML=`${fx}<span>Direction</span>`,a.title="Pick a design direction (/)",a.setAttribute("aria-label","Pick a design direction")}function v(A){if(h.length===0){m=0,r.removeAttribute("aria-activedescendant");return}m=(A+h.length)%h.length,d.querySelectorAll(".direction-option").forEach((Z,se)=>{let ce=se===m;Z.classList.toggle("active",ce),Z.setAttribute("aria-selected",String(ce)),ce&&(r.setAttribute("aria-activedescendant",Z.id),Z.scrollIntoView?.({block:"nearest"}))})}function L(){if(d.replaceChildren(),h.length===0){let A=document.createElement("div");A.className="direction-menu-empty",A.textContent="No matching direction",d.appendChild(A);return}h.forEach((A,V)=>{let Z=document.createElement("div");Z.className="direction-option",Z.id=`${px}${A.id}`,Z.dataset.direction=A.id,Z.setAttribute("role","option"),Z.setAttribute("aria-selected","false"),Z.innerHTML=`
        <span class="direction-option-icon">${qs(A)}</span>
        <span class="direction-option-label">${A.label}</span>
        <span class="direction-option-summary">${A.summary}</span>
      `,Z.addEventListener("pointermove",()=>{m!==V&&v(V)}),Z.addEventListener("click",()=>{$(A)}),d.appendChild(Z)})}function k(A){A!==b&&(b=A,h=sm(A),L(),m=0),d.hidden=!1,o.classList.add("menu-open"),c.textContent="\u21B5 Select",r.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),v(m)}function N(){d.hidden||(d.hidden=!0,b=null,o.classList.remove("menu-open"),c.textContent="\u21B5 Apply",r.setAttribute("aria-expanded","false"),r.removeAttribute("aria-activedescendant"),a.setAttribute("aria-expanded","false"))}function I(){if(g){N();return}let A=E();if(!A){x=null,N();return}if(x===A.start){N();return}x=null,k(A.query)}function _(A,V){r.value=A,r.setSelectionRange(V,V)}function $(A){if(g)return;let V=E();if(V){let Z=dm(r.value,V);_(Z.value,Z.caret)}p=A,x=null,N(),w(),r.focus(),u=!0,e()}function O(){!p||g||(p=null,u=!0,w(),e())}function F(){if(g)return;if(!E()){let V=um(r.value,r.selectionStart,r.selectionEnd);_(V.value,V.caret),u=!0,e()}x=null,r.focus(),I()}return d.addEventListener("pointerdown",A=>A.preventDefault()),a.addEventListener("pointerdown",A=>{A.preventDefault()}),l.addEventListener("pointerdown",A=>{A.preventDefault()}),a.addEventListener("click",()=>{if(!d.hidden){let A=E();A&&(x=A.start),N(),r.focus();return}F()}),l.addEventListener("click",()=>{O(),r.focus()}),r.addEventListener("keydown",A=>{if(hx(A))return;if(g){A.key==="Enter"&&A.preventDefault();return}if(!d.hidden){if(A.key==="ArrowDown"||A.key==="ArrowUp"){A.preventDefault(),v(m+(A.key==="ArrowDown"?1:-1));return}if(A.key==="Escape"){A.preventDefault();let se=E();se&&(x=se.start),N();return}let Z=h[m];if((A.key==="Enter"||A.key==="Tab")&&!A.shiftKey&&Z){A.preventDefault(),$(Z);return}if(A.key===" "){let se=E(),ce=se?lm(se.query):null;if(ce){A.preventDefault(),$(ce);return}}}if(A.key==="Escape"){A.preventDefault(),r.blur();return}if(A.key==="Enter"&&!A.shiftKey){A.preventDefault(),N(),t();return}let V=r.selectionStart===0&&r.selectionEnd===0;if(A.key==="Backspace"&&!fm(A)&&V&&p){A.preventDefault(),O();return}(A.key==="Backspace"||A.key==="Delete")&&!fm(A)&&!u&&p===null&&r.value===""&&(A.preventDefault(),A.stopPropagation(),n())}),r.addEventListener("input",()=>{u=!0,I(),e()}),r.addEventListener("keyup",A=>{(A.key==="ArrowLeft"||A.key==="ArrowRight"||A.key==="Home"||A.key==="End")&&I()}),r.addEventListener("click",()=>I()),r.addEventListener("focus",()=>{u=!1}),r.addEventListener("blur",()=>{N()}),w(),{root:o,textarea:r,getText:()=>r.value.trim(),getDirection:()=>p,hasContent:()=>p!==null||r.value.trim().length>0,isMenuOpen:()=>!d.hidden,setBusy(A){g=A,r.readOnly=A,a.disabled=A,l.disabled=A,o.classList.toggle("busy",A),A&&N()},clear(){r.value="",p=null,x=null,N(),w(),e()},setPlaceholder(A){r.placeholder=A},focus(){r.focus()},closeMenu:N}}var Us,px,fx,mx,hm=T(()=>{"use strict";js();Us="v0-direction-menu",px="v0-direction-option-",fx='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M15 4L9 20"/></svg>',mx='<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 2.46967L13.5303 3.53033L9.06066 8L13.5303 12.4697L12.4697 13.5303L8 9.06066L3.53033 13.5303L2.46967 12.4697L6.93934 8L2.46967 3.53033L3.53033 2.46967L8 6.93934L12.4697 2.46967Z"/></svg>'});function gx(){return`
    .v0-tooltip {
      position: fixed;
      background: var(--bg-panel);
      color: var(--text-primary);
      padding: 3px 6px;
      border-radius: 4px;
      font-size: 9px;
      letter-spacing: 0.3px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 100;
      opacity: 0;
      transition: opacity 0.15s;
      box-shadow: 0 3px 4px rgba(0,0,0,0.1), 0 0 0 1px var(--border-color);
    }
    .v0-tooltip.visible {
      opacity: 1;
    }
  `}function bx(e,t,n){ra&&(clearTimeout(ra),ra=null),tn&&(tn.remove(),tn=null),en=e;let o=document.createElement("div");o.className="v0-tooltip",o.textContent=t,n.appendChild(o),tn=o;let r=e.getBoundingClientRect(),i=o.getBoundingClientRect(),a=r.left+r.width/2-i.width/2,l=r.top-i.height-6;a<4&&(a=4),a+i.width>window.innerWidth-4&&(a=window.innerWidth-i.width-4),l<4&&(l=r.bottom+6),o.style.left=`${a}px`,o.style.top=`${l}px`,requestAnimationFrame(()=>{o.classList.add("visible")})}function gm(){if(tn){tn.classList.remove("visible");let e=tn;ra=setTimeout(()=>{e.remove(),tn===e&&(tn=null)},150)}en=null}function bm(e){e.querySelectorAll("[title]").forEach(t=>{let n=t.getAttribute("title");n&&(t.dataset.tooltip=n,t.removeAttribute("title"))})}function ym(e){let t=document.createElement("style");t.textContent=gx(),e.appendChild(t),bm(e),new MutationObserver(o=>{for(let r of o)if(r.type==="childList")r.addedNodes.forEach(i=>{i instanceof HTMLElement&&(i.hasAttribute("title")&&(i.dataset.tooltip=i.getAttribute("title")||"",i.removeAttribute("title")),bm(i))});else if(r.type==="attributes"&&r.attributeName==="title"){let i=r.target;i.hasAttribute("title")&&(i.dataset.tooltip=i.getAttribute("title")||"",i.removeAttribute("title"))}}).observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["title"]}),e.addEventListener("mouseover",o=>{let r=o.target;if(!r)return;let i=r.closest("[title], [data-tooltip]");if(i===en)return;if(!i){en&&!en.contains(r)&&gm();return}i.hasAttribute("title")&&(i.dataset.tooltip=i.getAttribute("title")||"",i.removeAttribute("title"));let a=i.dataset.tooltip;a&&bx(i,a,e)},!0),e.addEventListener("mouseout",o=>{let r=o.target,i=o.relatedTarget;if(!en)return;let a=en===r||en.contains(r),l=!i||!en.contains(i);a&&l&&gm()},!0)}var tn,ra,en,xm=T(()=>{"use strict";tn=null,ra=null,en=null});function Ex(){return navigator.platform.toUpperCase().indexOf("MAC")>=0?"\u2318I":"Ctrl+I"}function Cx(e){return`
    ${e?`
        <div class="empty-state-item clickable" data-action="enable-inspect">
          ${yx}
          <span><strong>Enable Inspect</strong> - ${e}</span>
        </div>
      `:""}
    <div class="empty-state-item">
      ${xx}
      <span><strong>Click</strong> to select element</span>
    </div>
    <div class="empty-state-item">
      ${vx}
      <span><strong>Drag</strong> to move element</span>
    </div>
    <div class="empty-state-item">
      ${wx}
      <span><strong>\u2318/\u2303 + Drag</strong> to screenshot area</span>
    </div>
  `}function Sx(e,t){let n=t?.classList.contains("active");e.innerHTML=Cx(n?void 0:Ex());let o=e.querySelector('[data-action="enable-inspect"]');o&&t&&o.addEventListener("click",()=>{t.click()})}function Xs(e){let t={selectorPath:e.selectorPath,tagName:e.tagName};return e.id&&(t.id=e.id),e.classNames.length>0&&(t.classNames=e.classNames),e.textContent&&(t.textContent=e.textContent),e.reactComponentName&&(t.reactComponentName=e.reactComponentName),t}function Mx(e){let t=[],n=new Map;for(let o of e){if(o.type==="fontInjection"){t.push({type:"fontInjection",fontName:o.fontName});continue}if(o.type==="deleteElement"){t.push({type:"deleteElement",element:Xs(o.elementInfo)});continue}if(o.type==="move"){let s={type:"move",element:Xs(o.elementInfo),position:"inside"};o.toParent instanceof HTMLElement&&(s.toParentSelector=Ne(o.toParent,!1).selectorPath),o.toNextSibling instanceof HTMLElement&&(s.targetSelector=Ne(o.toNextSibling,!1).selectorPath,s.position="before"),t.push(s);continue}let{elementInfo:r}=o,i=n.get(r.selectorPath);i||(i={type:"style",element:Xs(r),changes:{}},n.set(r.selectorPath,i),t.push(i));let l={from:i.changes[o.property]?.from??o.oldValue,to:o.newValue};i.changes[o.property]=l,l.from===l.to&&(delete i.changes[o.property],Object.keys(i.changes).length===0&&(t.splice(t.indexOf(i),1),n.delete(r.selectorPath)))}return t}function ia(e){return Mx(e.getHistory())}function Lx(){try{let e=localStorage.getItem(Gs);return e==="left"||e==="right"?e:"right"}catch{return"right"}}function kx(e){try{e?localStorage.setItem(Gs,e):localStorage.removeItem(Gs)}catch{}}function vm(e){document.documentElement.style.marginLeft="",document.documentElement.style.marginRight="",e==="left"?document.documentElement.style.marginLeft=`${Ys}px`:e==="right"&&(document.documentElement.style.marginRight=`${Ys}px`)}function Tx(){try{let e=localStorage.getItem(Em);if(e){let t=JSON.parse(e);if(typeof t.x=="number"&&typeof t.y=="number")return t}}catch{}return null}function Sm(e,t){try{localStorage.setItem(Em,JSON.stringify({x:e,y:t}))}catch{}}function _x(e,t,n,o){let i=window.innerWidth-n-10,a=window.innerHeight-o-10;return{x:Math.max(10,Math.min(e,i)),y:Math.max(10,Math.min(t,a))}}function Rx(){try{return localStorage.getItem(Cm)!=="false"}catch{return!0}}function Hx(e){try{localStorage.setItem(Cm,String(e))}catch{}}function wm(){let e=document.createElement("div");return e.className="login-screen",e.innerHTML=`
    <div class="login-logo-slot" data-design-mode-logo="login"></div>
    <h3 class="login-title">Sign in to v0</h3>
    <p class="login-description">Sign in to access AI-powered editing and sync your changes.</p>
    <button class="login-btn" type="button">
      Sign in
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 3l5 5-5 5"/>
      </svg>
    </button>
  `,e.querySelector(".login-btn").addEventListener("click",()=>{}),e}function Nx(){let e=document.createElement("div");return e.className="auth-skeleton",e.innerHTML=`
    <div class="skeleton-line short"></div>
    <div class="skeleton-line block"></div>
    <div class="skeleton-line medium"></div>
    <div class="skeleton-line long"></div>
    <div class="skeleton-line short"></div>
  `,e}function Mm(e,t,n){let o=e.panel.querySelector(".design-view .content");if(!o)return;e.expand();let r=Math.max(0,n.left),i=Math.max(0,n.top),a=document.elementFromPoint(r,i),l=a?zs(a):"";yr={base64:t.replace(/^data:image\/[a-z]+;base64,/,""),anchorElement:l};let c=e.panel.querySelector(".selected-element-pill"),d=e.panel.querySelector(".selected-element-text");c&&(c.style.display="flex",c.classList.add("screenshot-pill")),d&&(d.textContent="Screenshot");let p=e.panel.querySelector(".delete-btn");p&&(p.style.display="none"),window.dispatchEvent(new CustomEvent("v0-screenshot-mode-enter")),o.innerHTML="";let u=document.createElement("div");u.className="screenshot-view";let g=document.createElement("div");g.className="section-header",g.textContent="Selected Area",u.appendChild(g);let h=document.createElement("div");h.className="screenshot-image-container";let m=document.createElement("img");m.className="screenshot-image",m.src=t,m.alt="Selected region screenshot",h.appendChild(m);let b=document.createElement("div");b.className="screenshot-region-info",b.textContent=`${Math.round(n.width)} \xD7 ${Math.round(n.height)}`,h.appendChild(b),u.appendChild(h),o.appendChild(u),e.panel.querySelector(".actions")?.classList.add("screenshot-mode"),Ks(e,"screenshot")}function Ks(e,t){let{composer:n}=e,o=e.composerTarget;if(e.composerTarget=t,n.root.hidden=t===null,e.panel.querySelector(".actions")?.classList.toggle("has-composer",t!==null),e.panel.dispatchEvent(new CustomEvent("v0-composer-target-change")),t===null){n.closeMenu();return}t==="screenshot"?n.setPlaceholder("Describe changes to this area or type / for directions"):n.setPlaceholder("Describe a change or type / for directions");let r=o!==t||t==="screenshot";t!=="screenshot"&&e.suppressNextTextareaAutofocus&&(e.suppressNextTextareaAutofocus=!1,r=!1),r&&requestAnimationFrame(()=>{e.composerTarget===t&&n.focus()})}function Lm(e,t,n,o,r,i=!1,a=!0){let l=new AbortController,s=document.createElement("div");s.className="__v0_design_panel_host",s.style.cssText="position: fixed; top: 0; left: 0; z-index: 2147483647; pointer-events: none;";let c=s.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=Vf(),c.appendChild(d),ym(c);let p=document.createElement("div");p.className="panel",p.style.pointerEvents="auto",p.addEventListener("keydown",S=>S.stopPropagation()),p.addEventListener("keyup",S=>S.stopPropagation()),p.addEventListener("keypress",S=>S.stopPropagation());let u=document.createElement("div");u.className="header";let g=document.createElement("div");g.className="header-logo",g.dataset.designModeLogo="tab",i&&(g.style.display="none");let h=document.createElement("div");h.className="tab-switcher",i||(h.style.display="none");let m=document.createElement("button");m.className="tab-btn active",m.innerHTML='<span data-design-mode-logo="tab"></span><span>Chat</span>',m.type="button";let b=document.createElement("button");b.className="tab-btn",b.innerHTML='<span data-design-mode-logo="tab"></span><span>Design</span><span class="badge" style="display:none"></span>',b.type="button";let x=b.querySelector(".badge");h.appendChild(m),h.appendChild(b);let E=document.createElement("div");E.className="header-buttons";let w=!i,v=document.createElement("button");v.className=`header-btn${w?" active":""}`,v.setAttribute("aria-label","Toggle inspect mode");let L=navigator.platform.toUpperCase().indexOf("MAC")>=0,k=L?"\u2318I":"Ctrl+I";v.title=`Inspect (${w?"on":"off"}) - ${k}`,v.innerHTML='<svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 11.75L7.25 14.4572C4.2595 14.1136 1.88638 11.7405 1.5428 8.75H4.25H5V7.25H4.25H1.5428C1.88638 4.2595 4.2595 1.88638 7.25 1.5428V4.25V5H8.75V4.25V1.5428C11.7405 1.88638 14.1136 4.2595 14.4572 7.25L11.75 7.25H11V8.75L11.75 8.75H14.4572C14.1136 11.7405 11.7405 14.1136 8.75 14.4572V11.75L8.75 11H7.25V11.75ZM15.9653 8.75C15.6102 12.5697 12.5697 15.6102 8.75 15.9653V16H8H7.25V15.9653C3.43032 15.6102 0.389836 12.5697 0.0346937 8.75H0V8V7.25H0.0346937C0.389836 3.43032 3.43032 0.389836 7.25 0.0346937V0H8H8.75V0.0346937C12.5697 0.389836 15.6102 3.43032 15.9653 7.25H16V8V8.75H15.9653Z" fill="currentColor"></path></svg>';let N=S=>{w=S,v.classList.toggle("active",w),v.title=`Inspect (${w?"on":"off"}) - ${k}`,p.dispatchEvent(new CustomEvent("v0-inspect-toggle",{bubbles:!0,composed:!0,detail:{enabled:w}})),e.selectedElement||Be(A,e,t)};v.addEventListener("click",()=>{N(!w)});let I=!1,_=document.createElement("button");_.className="header-btn",_.title="Collapse",_.setAttribute("aria-label","Collapse panel"),_.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z" fill="currentColor"/></svg>',_.style.display="none";let $=()=>{_.title=I?"Expand":"Collapse",_.setAttribute("aria-label",I?"Expand panel":"Collapse panel"),_.innerHTML=I?'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor"/></svg>':'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z" fill="currentColor"/></svg>'},O=()=>{I&&(I=!1,p.classList.remove("collapsed"),$(),Te.classList.toggle("active",nt==="design"),be.classList.toggle("active",nt==="chat"),Ue.classList.toggle("hidden",nt==="chat"),p.classList.toggle("chat-mode",nt==="chat"),requestAnimationFrame(()=>{if(X)return;let S=p.getBoundingClientRect(),z=10,B=window.innerHeight-S.height-z;S.top>B&&(e.panelPosition.y=Math.max(z,B),p.style.transform=`translate(${e.panelPosition.x}px, ${e.panelPosition.y}px)`)}))},F=mm({onChange:()=>Ze(),onSubmit:()=>{oe&&!oe.disabled&&oe.click()},onDeleteRequest:()=>{A.composerTarget instanceof HTMLElement&&window.dispatchEvent(new CustomEvent(xr))}});F.root.hidden=!0;let A={host:s,panel:p,shadowRoot:c,expand:O,destroy:()=>l.abort(),composer:F,composerTarget:null},V=()=>{I=!I,p.classList.toggle("collapsed",I),$(),I||(Te.classList.toggle("active",nt==="design"),be.classList.toggle("active",nt==="chat"),Ue.classList.toggle("hidden",nt==="chat"),p.classList.toggle("chat-mode",nt==="chat"),requestAnimationFrame(()=>{if(X)return;let S=p.getBoundingClientRect(),z=10,B=window.innerHeight-S.height-z;S.top>B&&(e.panelPosition.y=Math.max(z,B),p.style.transform=`translate(${e.panelPosition.x}px, ${e.panelPosition.y}px)`)}))};_.addEventListener("click",V);let Z=document.createElement("div");Z.className="selected-element-pill",Z.style.display="none";let se=document.createElement("span");se.className="selected-element-text";let ce=document.createElement("button");ce.className="selected-element-close",ce.type="button",ce.title="Deselect",ce.innerHTML='<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 2.46967L13.5303 3.53033L9.06066 8L13.5303 12.4697L12.4697 13.5303L8 9.06066L3.53033 13.5303L2.46967 12.4697L6.93934 8L2.46967 3.53033L3.53033 2.46967L8 6.93934L12.4697 2.46967Z"/></svg>',ce.addEventListener("click",S=>{if(S.stopPropagation(),A.composerTarget==="screenshot"){Be(A,e,t);return}n()}),Z.appendChild(se),Z.appendChild(ce);let X=Lx(),K=!1,ge=document.createElement("button");ge.className="header-btn",ge.title=X?"Switch to popup":"Switch to sidebar",ge.setAttribute("aria-label","Toggle sidebar mode"),ge.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" stroke-linejoin="round" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.81065 1.24999L6.28032 1.78032L5.78489 2.27575L13.1824 5.75693L13.7197 5.21966L14.25 4.68933L15.3107 5.74999L14.7803 6.28032L11.0607 9.99999L15.2803 14.2197L15.8107 14.75L14.75 15.8107L14.2197 15.2803L9.99999 11.0607L6.28032 14.7803L5.74999 15.3107L4.68933 14.25L5.21966 13.7197L5.75693 13.1824L2.27575 5.78489L1.78032 6.28032L1.24999 6.81065L0.189331 5.74999L0.719661 5.21966L1.95737 3.98195C1.96537 3.97357 1.97358 3.96535 1.982 3.95732L3.95732 1.982C3.96535 1.97358 3.97357 1.96537 3.98195 1.95737L5.21966 0.719661L5.74999 0.189331L6.81065 1.24999ZM4.65759 3.40305L3.40305 4.65759L6.88423 12.0551L8.93933 9.99999L9.99999 8.93933L12.0551 6.88423L4.65759 3.40305Z"/></svg>';let te=S=>{let z=X,B=!!X;X=S,kx(S),vm(S),ge.classList.toggle("active",!!S),ge.title=S?"Switch to popup":"Switch to sidebar",p.classList.toggle("push-mode",!!S),p.classList.toggle("push-left",S==="left"),p.classList.toggle("push-right",S==="right"),u.style.cursor=S?"default":"grab",S&&!B?(K=I,I=!1,p.classList.remove("collapsed")):!S&&B&&(K&&(I=!0,p.classList.add("collapsed"),$()),requestAnimationFrame(()=>{let pe=p.getBoundingClientRect(),me=10,ye=window.innerWidth-pe.width-me,Je=window.innerHeight-pe.height-me,sn=z==="left"?me:ye,Dt=Math.max(me,Math.min(e.panelPosition.y,Je));sn=Math.max(me,Math.min(sn,ye)),Dt=Math.max(me,Math.min(Dt,Je)),e.panelPosition={x:sn,y:Dt},p.style.transform=`translate(${sn}px, ${Dt}px)`,Sm(sn,Dt)}))},Ee=()=>X;ge.addEventListener("click",()=>{if(X)te(null);else{let S=p.getBoundingClientRect(),z=S.left+S.width/2,B=window.innerWidth/2;te(z<B?"left":"right")}}),X&&(p.classList.add("push-mode"),p.classList.add(X==="left"?"push-left":"push-right"),vm(X),ge.classList.add("active"),u.style.cursor="default",_.style.display="none"),E.appendChild(Z),E.appendChild(v),E.appendChild(ge),E.appendChild(_);let ve=document.createElement("div");ve.className="header-main",ve.appendChild(g),ve.appendChild(h),ve.appendChild(E),u.appendChild(ve),p.appendChild(u);let Te=document.createElement("div");Te.className=`panel-view design-view${i?"":" active"}`;let Ce=document.createElement("div");Ce.className="content",Te.appendChild(Ce);let Se=wm();Se.style.display="none",Te.appendChild(Se);let be=document.createElement("div");be.className=`panel-view chat-view${i?" active":""}`;let $e=wm();$e.style.display="none",be.appendChild($e);let Ht=Nx();be.appendChild(Ht);let qe=document.createElement("div");qe.className="terminal";let Pe=document.createElement("div");Pe.className="terminal-output";let De=document.createElement("div");De.className="terminal-line system",De.textContent="// v0 agent",Pe.appendChild(De);let R=document.createElement("div");R.className="terminal-line system terminal-help",R.style.display="none",R.textContent="// Type a command to modify the selected element",Pe.appendChild(R),qe.appendChild(Pe);let D=document.createElement("div");D.className="terminal-input-line";let G=document.createElement("span");G.className="terminal-prompt",G.textContent=">";let Q=document.createElement("input");Q.className="terminal-input",Q.type="text",Q.placeholder="describe changes...",Q.spellcheck=!1,D.appendChild(G),D.appendChild(Q),qe.appendChild(D);let ue=["Analyzing element structure...","Applying style changes...","Done! Changes applied successfully."];async function _e(S,z,B=20){for(let pe=0;pe<z.length;pe++)S.textContent+=z[pe],Pe.scrollTop=Pe.scrollHeight,await new Promise(me=>setTimeout(me,B))}async function je(S){let z=document.createElement("div");z.className="terminal-line user",z.textContent=`> ${S}`,Pe.appendChild(z),Q.disabled=!0;for(let pe of ue){await new Promise(ye=>setTimeout(ye,300+Math.random()*500));let me=document.createElement("div");me.className="terminal-line response",Pe.appendChild(me),await _e(me,pe)}let B={message:S,selectedElement:e.selectedElement?Ne(e.selectedElement,e.hasReact):null,history:t.getHistory()};window.dispatchEvent(new CustomEvent("v0-design-mode-chat",{detail:B})),Q.disabled=!1,Q.focus(),Pe.scrollTop=Pe.scrollHeight}Q.addEventListener("keydown",S=>{S.key==="Enter"&&Q.value.trim()&&(je(Q.value.trim()),Q.value="")}),be.appendChild(qe),i?(S=>{qe.style.display="none",$e.style.display="none",Ht.style.display="none",Se.style.display="none",S==="pending"?(Ht.style.display="flex",Ce.style.display="block"):S==="authenticated"?(qe.style.display="flex",Ce.style.display="block"):($e.style.display="flex",Se.style.display="flex",Ce.style.display="block")})("pending"):(qe.style.display="none",$e.style.display="none",Ht.style.display="none",be.style.display="none",Se.style.display="none",Ce.style.display="block");let nt=i?"chat":"design";function no(S){nt=S,m.classList.toggle("active",S==="chat"),b.classList.toggle("active",S==="design"),N(S==="design"),O(),Te.classList.toggle("active",S==="design"),be.classList.toggle("active",S==="chat"),Ue.classList.toggle("hidden",S==="chat"),p.classList.toggle("chat-mode",S==="chat"),S==="chat"&&Q.focus(),requestAnimationFrame(()=>{if(X)return;let z=p.getBoundingClientRect(),B=10,pe=window.innerWidth-z.width-B,me=window.innerHeight-z.height-B,ye=!1;z.left>pe&&(e.panelPosition.x=Math.max(B,pe),ye=!0),z.top>me&&(e.panelPosition.y=Math.max(B,me),ye=!0),ye&&(p.style.transform=`translate(${e.panelPosition.x}px, ${e.panelPosition.y}px)`)})}m.addEventListener("click",()=>no("chat")),b.addEventListener("click",()=>no("design")),p.appendChild(Te),p.appendChild(be);let Ue=document.createElement("div");Ue.className="actions";let Ie=L?"\u2318":"Ctrl+",ee=document.createElement("button");ee.type="button",ee.className="toolbar-btn",ee.title=`Undo (${Ie}Z)`,ee.setAttribute("aria-label","Undo"),ee.disabled=!0,ee.innerHTML=`
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 14 4 9l5-5"/>
      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
    </svg>
  `;let ne=document.createElement("button");ne.type="button",ne.className="toolbar-btn",ne.title=`Redo (${Ie}\u21E7Z)`,ne.setAttribute("aria-label","Redo"),ne.disabled=!0,ne.innerHTML=`
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m15 14 5-5-5-5"/>
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"/>
    </svg>
  `;function oo(S){if(S.type==="style"){let z=(S.element?.isConnected?S.element:null)??document.querySelector(S.elementInfo.selectorPath);if(!z)return;S.property==="textContent"?z.textContent=S.oldValue:z.style[S.property]=S.oldValue}else if(S.type==="deleteElement"){if(S.element.isConnected)return;S.nextSibling?.parentNode===S.parent?S.parent.insertBefore(S.element,S.nextSibling):S.parent.appendChild(S.element)}else if(S.type==="move"){if(!S.element.isConnected)return;S.fromNextSibling?.parentNode===S.fromParent?S.fromParent.insertBefore(S.element,S.fromNextSibling):S.fromParent.appendChild(S.element)}}function Xe(S){if(S.type==="style"){let z=(S.element?.isConnected?S.element:null)??document.querySelector(S.elementInfo.selectorPath);if(!z)return;S.property==="textContent"?z.textContent=S.newValue:z.style[S.property]=S.newValue}else if(S.type==="deleteElement"){if(!S.element.isConnected)return;S.element.remove(),e.selectedElement===S.element&&(e.selectedElement=null)}else if(S.type==="move"){if(!S.element.isConnected)return;S.toNextSibling?.parentNode===S.toParent?S.toParent.insertBefore(S.element,S.toNextSibling):S.toParent.appendChild(S.element)}}ee.addEventListener("click",()=>{let S=t.undo();S&&(oo(S),Be(A,e,t)),Mt()}),ne.addEventListener("click",()=>{let S=t.redo();S&&(Xe(S),Be(A,e,t)),Mt()});let oe=null,le=!1;function St(){if(A.composerTarget===null||!F.hasContent())return null;let S=F.getDirection();return{message:pm(F.getText(),S),direction:S}}function Ze(){let S=t.getHistory().length>0,z=ia(t).length>0,B=St()!==null;oe&&(oe.disabled=le||!z&&!B),Pt.disabled=le||!S&&!B&&A.composerTarget!=="screenshot",ot.disabled=le||!S}function Mt(){ee.disabled=!t.canUndo(),ne.disabled=!t.canRedo(),Vr(),Ze()}function Me(){let S=ia(t).length;S>0?(x.textContent=String(S),x.style.display="inline-flex"):x.style.display="none",Mt()}t.onChange(Me);function Io(){let S=new Map,z=t.getHistory();for(let B of z){if(B.type!=="style")continue;let pe=B.elementInfo.selectorPath;S.has(pe)||S.set(pe,new Map);let me=S.get(pe),ye=B.property,Je=me.get(ye);if(Je)Je.current=B.newValue,Je.original===Je.current&&me.delete(ye);else{if(B.oldValue===B.newValue)continue;me.set(ye,{original:B.oldValue,current:B.newValue})}me.size===0&&S.delete(pe)}return S}function Na(S){return S==="textContent"?"Text":S.replace(/([A-Z])/g," $1").replace(/^./,z=>z.toUpperCase())}function Dr(S){let z=document.querySelector(S);if(!z)return"element";let B=Ne(z,e.hasReact);return B.reactComponentName||B.tagName}function on(){let S=Io(),z=[];for(let[B,pe]of S){let me=Dr(B);for(let[ye,Je]of pe)z.push({type:"style",selector:B,property:ye,title:`${Na(ye)} on ${me}`,original:Je.original,current:Je.current})}for(let B of t.getHistory()){let pe=B.elementInfo.reactComponentName||B.elementInfo.tagName;B.type==="deleteElement"?z.push({type:"deleteElement",title:`Delete ${pe}`,element:B.element,parent:B.parent,nextSibling:B.nextSibling}):B.type==="move"&&z.push({type:"move",title:`Move ${pe}`,element:B.element,fromParent:B.fromParent,fromNextSibling:B.fromNextSibling,toParent:B.toParent,toNextSibling:B.toNextSibling})}return z}let Nt=null;function $n(S,z,B){let pe=document.querySelector(S);pe&&(z==="textContent"?pe.textContent=B:pe.style[z]=B)}function Yt(){Nt&&(Nt(),Nt=null)}function Ir(S){S.element.isConnected||(S.nextSibling?.parentNode===S.parent?S.parent.insertBefore(S.element,S.nextSibling):S.parent.appendChild(S.element))}function Or(S){S.element.isConnected&&S.element.remove()}function rn(S,z,B){B?.parentNode===z?z.insertBefore(S,B):z.appendChild(S)}function zr(S){S.element.isConnected&&rn(S.element,S.fromParent,S.fromNextSibling)}function Oo(S){S.element.isConnected&&rn(S.element,S.toParent,S.toNextSibling)}function Fr(S){if(At||le)return;Yt();let z=!0;S.type==="deleteElement"?Ir(S):S.type==="move"?zr(S):$n(S.selector,S.property,S.original);let B=window.setInterval(()=>{z=!z,S.type==="deleteElement"?z?Ir(S):Or(S):S.type==="move"?z?zr(S):Oo(S):$n(S.selector,S.property,z?S.original:S.current)},500);Nt=()=>{window.clearInterval(B),S.type==="deleteElement"?Or(S):S.type==="move"?Oo(S):$n(S.selector,S.property,S.current)}}function Vr(){let S=Ue.querySelector(".queued-edits");if(!S)return;Yt();let z=on();if(S.hidden=z.length===0,Ue.classList.toggle("has-queue",z.length>0),z.length===0){S.open=!1;return}let B=S.querySelector(".queued-edits-count"),pe=S.querySelector(".queued-edits-list");B.textContent=`${z.length} queued edit${z.length===1?"":"s"}`,pe.replaceChildren(...z.map(me=>{let ye=document.createElement("div");return ye.className="queued-edit-item",ye.textContent=me.title,ye.addEventListener("mouseenter",()=>{Fr(me)}),ye.addEventListener("mouseleave",Yt),ye}))}function ro(){let S=Io();for(let[B,pe]of S){let me=document.querySelector(B);if(me)for(let[ye,{original:Je}]of pe)ye==="textContent"?me.textContent=Je:me.style[ye]=Je}for(let B of t.getHistory())B.type==="deleteElement"&&(B.element.isConnected||rn(B.element,B.parent,B.nextSibling));let z=t.getHistory().filter(B=>B.type==="move").reverse();for(let B of z)B.element.isConnected&&rn(B.element,B.fromParent,B.fromNextSibling)}function zo(){let S=Io();for(let[z,B]of S){let pe=document.querySelector(z);if(pe)for(let[me,{current:ye}]of B)me==="textContent"?pe.textContent=ye:pe.style[me]=ye}for(let z of t.getHistory())if(z.type==="move"){if(!z.element.isConnected)continue;rn(z.element,z.toParent,z.toNextSibling)}else z.type==="deleteElement"&&z.element.isConnected&&z.element.remove()}let ot=document.createElement("button");ot.type="button",ot.className="toolbar-btn preview-btn",ot.title="Compare with original (click to lock)",ot.setAttribute("aria-label","Compare with original"),ot.setAttribute("aria-pressed","false"),ot.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  `;let At=!1,Dn=!1,Br=S=>{At=S,ot.classList.toggle("active",S),ot.setAttribute("aria-pressed",String(S))},Fo=()=>{let S=At||Dn;Dn=!1,At&&Br(!1),S&&zo()};t.onChange(()=>{Fo(),Mt()}),ot.addEventListener("mouseenter",()=>{At||le||t.getHistory().length!==0&&(Dn=!0,ro())}),ot.addEventListener("mouseleave",()=>{Dn&&(Dn=!1,!At&&zo())}),ot.addEventListener("click",()=>{le||t.getHistory().length!==0&&(Br(!At),At?ro():zo())});let Pt=document.createElement("button");Pt.type="button",Pt.className="toolbar-btn reset-btn",Pt.title="Reset all changes",Pt.setAttribute("aria-label","Reset all changes"),Pt.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
    </svg>
  `,Pt.addEventListener("click",()=>{let S=t.canUndo(),z=A.composerTarget==="screenshot",B=F.hasContent();if(!(!S&&!B&&!z)){if(Fo(),S)for(ro();t.canUndo();)t.undo();F.clear(),(e.selectedElement||z)&&Be(A,e,t),Mt()}});let $t=document.createElement("button");$t.type="button",$t.className="toolbar-btn delete-btn",$t.title="Delete element (\u232B)",$t.setAttribute("aria-label","Delete selected element"),$t.style.display="none",$t.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2.75C6.75 2.0596 7.3096 1.5 8 1.5 8.6904 1.5 9.25 2.0596 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.2312 6.4812 0 8 0 9.5188 0 10.75 1.2312 10.75 2.75V3H15V4.5H1V3H5.25Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1154 4.5H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.3151C4.0087 16 2.9226 14.9942 2.8224 13.6917L2.1154 4.5ZM4.318 13.5767 3.6198 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.3151C4.7925 14.5 4.3581 14.0977 4.318 13.5767Z"/>
    </svg>
  `,$t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent(xr))});let Aa=`
    <svg class="save-btn-spinner" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" opacity=".3"/>
      <path d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8z"/>
    </svg>
  `,Pa=`
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"/>
    </svg>
  `;oe=document.createElement("button"),oe.type="button",oe.className="btn save-btn",oe.dataset.tooltip="Send your edits and instructions to v0";function Ae(S){oe&&(oe.dataset.state=S,oe.setAttribute("aria-busy",String(S==="pending")),S==="pending"?oe.innerHTML=`${Aa}<span>Applying</span>`:S==="success"?oe.innerHTML=`${Pa}<span>Sent</span>`:oe.innerHTML="<span>Apply</span>")}async function Wr(S,z){let B={edits:S};if(!z&&!yr&&!e.selectedElement)return B;if(B.instructions={message:z?.message??""},z?.direction&&(B.instructions.direction={name:z.direction.id,guidance:am(z.direction)}),yr)return B.instructions.screenshot=yr,B;if(e.selectedElement&&(B.instructions.element=Ne(e.selectedElement,e.hasReact).selectorPath,r)){let pe=await r();pe&&(B.instructions.elementScreenshot=pe)}return B}function qr(){let S=new Map;for(let z of t.getHistory())S.set(z,z.type==="style"?z.newValue:null);return S}function $a(S){for(let[z,B]of S)z.type==="style"&&B!==null&&z.newValue!==B&&(z.oldValue=B);t.removeWhere(z=>S.has(z)?z.type!=="style"?!0:z.newValue===S.get(z):!1),Mt()}oe.addEventListener("click",async()=>{if(le)return;let S=St(),z=ia(t);if(z.length===0&&!S)return;le=!0,Fo(),Yt(),F.setBusy(!0);let B=qr(),pe=A.composerTarget==="screenshot";Ae("pending"),Ze();let me=!1;try{let ye=await Wr(z,S);o?me=await o(ye):(console.log(JSON.stringify(ye,null,2)),me=!0)}catch(ye){console.error("[v0 design mode] Failed to apply edits:",ye)}if(F.setBusy(!1),!me){le=!1,Ae("idle"),Ze();return}F.clear(),$a(B),pe&&Be(A,e,t),Ae("success"),window.setTimeout(()=>{le=!1,Ae("idle"),Mt()},1200)}),Ae("idle");let io=document.createElement("details");io.className="queued-edits",io.hidden=!0,io.innerHTML=`
    <summary class="queued-edits-summary">
      <span class="queued-edits-chevron" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L8.94 8 5.22 4.28a.75.75 0 0 1 0-1.06Z"/>
        </svg>
      </span>
      <span class="queued-edits-count">0 queued edits</span>
    </summary>
    <div class="queued-edits-list"></div>
  `;let In=document.createElement("div");In.className="toolbar-group",In.appendChild(ee),In.appendChild(ne);let an=document.createElement("div");an.className="toolbar-divider",an.setAttribute("aria-hidden","true");let ln=document.createElement("div");ln.className="toolbar-group",ln.appendChild($t),ln.appendChild(Pt),ln.appendChild(ot);let Kt=document.createElement("div");Kt.className="actions-toolbar",Kt.appendChild(In),Kt.appendChild(an),Kt.appendChild(ln),Kt.appendChild(oe),Ue.appendChild(F.root),Ue.appendChild(io),Ue.appendChild(Kt),Te.appendChild(Ue),p.addEventListener("v0-composer-target-change",()=>{Ze()}),Mt(),c.appendChild(p);let jr=(S,z)=>{p.style.transform=`translate(${S}px, ${z}px)`},Ur=Tx(),lt={x:window.innerWidth-Ys-10,y:10};requestAnimationFrame(()=>{if(X)return;let S=Ur||lt,z=_x(S.x,S.y,p.offsetWidth,p.offsetHeight);jr(z.x,z.y),e.panelPosition=z}),Ax(p,u,e,Ee,te,c,l.signal);let On=S=>{S.preventDefault()};c.addEventListener("v0-colorpicker-open",()=>{Ce.addEventListener("wheel",On,{passive:!1})}),c.addEventListener("v0-colorpicker-close",()=>{Ce.removeEventListener("wheel",On)}),i||requestAnimationFrame(()=>{p.dispatchEvent(new CustomEvent("v0-inspect-toggle",{bubbles:!0,composed:!0,detail:{enabled:!0}}))});let Da=S=>{let z=L?S.metaKey:S.ctrlKey;if(S.key==="i"&&z&&!S.shiftKey&&!S.altKey){let B=S.target;if(B?.tagName==="INPUT"||B?.tagName==="TEXTAREA")return;S.preventDefault(),N(!w)}};return document.addEventListener("keydown",Da,{signal:l.signal}),Zs(A,a,i),A}function Zs(e,t,n){for(let o of e.panel.querySelectorAll("[data-design-mode-logo]")){let r="tab";o.dataset.designModeLogo==="login"&&(r="login"),Wc(o,t,r)}if(n){let o=e.panel.querySelector(".header-logo");o&&(o.style.display="none")}}function Be(e,t,n){let o=e.panel.querySelector(".design-view .content");if(!o)return;let r=e.panel.querySelector(".badge");if(r){let x=ia(n).length;x>0?(r.textContent=String(x),r.style.display="inline-flex"):r.style.display="none"}let i=e.panel.querySelector(".selected-element-pill"),a=e.panel.querySelector(".selected-element-text"),l=e.panel.querySelector(".terminal-input"),s=e.panel.querySelector(".terminal-help"),c=e.panel.querySelector(".selected-element-close"),d=e.panel.querySelector(".delete-btn");if(d){let x=t.selectedElement!==null&&t.selectedElement!==document.body&&t.selectedElement!==document.documentElement;d.style.display=x?"flex":"none"}if(!t.selectedElement)i&&(i.style.display="none"),l&&(l.placeholder="describe changes..."),s&&(s.style.display="none");else{e.expand();let x=Ne(t.selectedElement,t.hasReact),E=x.reactComponentName||x.tagName;a&&(a.textContent=E),i&&(i.style.display="flex",i.classList.remove("screenshot-pill")),c&&(c.style.display=""),l&&(l.placeholder=`modify ${E}...`),s&&(s.style.display="block")}let p=t.selectedElement!==null&&e.composerTarget===t.selectedElement,u=o.scrollTop;o.innerHTML="";let g=e.panel.querySelector(".actions");if(g?.classList.contains("screenshot-mode")&&(window.dispatchEvent(new CustomEvent("v0-screenshot-mode-exit")),yr=null,g.classList.remove("screenshot-mode"),i?.classList.remove("screenshot-pill")),!t.selectedElement){let x=document.createElement("div");x.className="empty-state";let E=e.panel.querySelector('.header-btn[aria-label="Toggle inspect mode"]');Sx(x,E),o.appendChild(x),Ks(e,null);return}let h=t.selectedElement,m=window.getComputedStyle(h);Ne(h,t.hasReact).textContent!==null&&o.appendChild(rm(h,t,n)),o.appendChild(Zf(h,m,t,n,e.shadowRoot)),o.appendChild(Jf(h,m,t,n)),o.appendChild(Qf(h,m,t,n)),o.appendChild(em(h,m,t,n,Rx(),x=>{Hx(x),e.shadowRoot.dispatchEvent(new CustomEvent("v0-layout-overlay-toggle",{detail:{show:x}}))})),o.appendChild(tm(h,m,t,n)),o.appendChild(nm(h,m,t,n)),o.appendChild(om(h,m,t,n)),p&&(o.scrollTop=u),Ks(e,h)}function Ax(e,t,n,o,r,i,a){let l=!1,s=0,c=0,d=0,p=0,u=null,g=null,h=null,m=100,b=w=>{w?h||(h=document.createElement("style"),h.textContent="*, *::before, *::after { cursor: grabbing !important; }",document.head.appendChild(h)):h&&(h.remove(),h=null)},x=w=>{g||(g=document.createElement("div"),g.className="snap-zone-indicator",i.appendChild(g)),g.classList.toggle("snap-left",w==="left"),e.classList.add("snap-preview")},E=()=>{g&&(g.remove(),g=null),e.classList.remove("snap-preview")};t.addEventListener("mousedown",w=>{if(w.target.closest("button"))return;u=o(),l=!0,e.classList.add("dragging"),b(!0),s=w.clientX,c=w.clientY;let v=e.getBoundingClientRect();d=v.left,p=v.top,w.preventDefault()}),a.addEventListener("abort",()=>b(!1)),document.addEventListener("mousemove",w=>{if(!l)return;let v=w.clientX-s,L=w.clientY-c,k=w.clientX>=window.innerWidth-m,N=w.clientX<=m;if(u?Math.abs(v)>m?e.classList.add("snap-preview"):e.classList.remove("snap-preview"):k?x("right"):N?x("left"):E(),u&&Math.abs(v)>m){r(null),u=null,E();let A=e.getBoundingClientRect();d=A.left,p=A.top,s=w.clientX,c=w.clientY}if(o())return;let I=d+v,_=p+L,$=10,O=window.innerWidth-e.offsetWidth-$,F=window.innerHeight-e.offsetHeight-$;I=Math.max($,Math.min(I,O)),_=Math.max($,Math.min(_,F)),e.style.transform=`translate(${I}px, ${_}px)`,n.panelPosition={x:I,y:_}},{signal:a}),document.addEventListener("mouseup",w=>{l&&(e.classList.remove("dragging"),b(!1),E(),o()||(w.clientX>=window.innerWidth-m?r("right"):w.clientX<=m?r("left"):Sm(n.panelPosition.x,n.panelPosition.y)),e.dispatchEvent(new CustomEvent("v0-drag-end",{bubbles:!1}))),l=!1,u=null},{signal:a}),window.addEventListener("resize",()=>{if(o())return;let w=10,v=window.innerWidth-e.offsetWidth-w,L=window.innerHeight-e.offsetHeight-w,k=Math.max(w,Math.min(n.panelPosition.x,v)),N=Math.max(w,Math.min(n.panelPosition.y,L));(k!==n.panelPosition.x||N!==n.panelPosition.y)&&(n.panelPosition={x:k,y:N},e.style.transform=`translate(${k}px, ${N}px)`)},{signal:a})}var Em,Gs,Cm,xr,Ys,yx,xx,vx,wx,yr,Js=T(()=>{"use strict";im();js();hm();Yn();ea();xm();ja();Em="__v0_design_panel_position",Gs="__v0_design_panel_push_mode",Cm="__v0_design_layout_overlay",xr="v0-design-mode-delete-selected",Ys=300,yx='<svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 11.75L7.25 14.4572C4.2595 14.1136 1.88638 11.7405 1.5428 8.75H4.25H5V7.25H4.25H1.5428C1.88638 4.2595 4.2595 1.88638 7.25 1.5428V4.25V5H8.75V4.25V1.5428C11.7405 1.88638 14.1136 4.2595 14.4572 7.25L11.75 7.25H11V8.75L11.75 8.75H14.4572C14.1136 11.7405 11.7405 14.1136 8.75 14.4572V11.75L8.75 11H7.25V11.75ZM15.9653 8.75C15.6102 12.5697 12.5697 15.6102 8.75 15.9653V16H8H7.25V15.9653C3.43032 15.6102 0.389836 12.5697 0.0346937 8.75H0V8V7.25H0.0346937C0.389836 3.43032 3.43032 0.389836 7.25 0.0346937V0H8H8.75V0.0346937C12.5697 0.389836 15.6102 3.43032 15.9653 7.25H16V8V8.75H15.9653Z"/></svg>',xx='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 13.5H2.5L2.5 2.5L13.5 2.5V4.75V5.5H15V4.75V2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44771 1 2V14C1 14.5523 1.44771 15 2 15H4.75H5.5V13.5H4.75ZM7.5 13.4252V12.6752V8.50054C7.5 7.94825 7.94771 7.50054 8.5 7.50054H12.6746H13.4246V9.00054H12.6746H10.0606L15.0298 13.9697L15.5601 14.5L14.4995 15.5607L13.9691 15.0303L9 10.0612V12.6752V13.4252H7.5Z"/></svg>',vx='<svg viewBox="0 0 16 16" height="16" width="16" data-slot="geist-icon" style="color: currentcolor;"><path fill="currentColor" fill-rule="evenodd" d="m4.94 3 .53-.53L7.29.65a1 1 0 0 1 1.42 0l1.82 1.82.53.53L10 4.06l-.53-.53-.72-.72v4.44h4.44l-.72-.72-.53-.53L13 4.94l.53.53 1.82 1.82a1 1 0 0 1 0 1.42l-1.82 1.82-.53.53L11.94 10l.53-.53.72-.72H8.75v4.44l.72-.72.53-.53L11.06 13l-.53.53-1.82 1.82a1 1 0 0 1-1.42 0l-1.82-1.82-.53-.53L6 11.94l.53.53.72.72V8.75H2.81l.72.72.53.53L3 11.06l-.53-.53L.65 8.71a1 1 0 0 1 0-1.42l1.82-1.82.53-.53L4.06 6l-.53.53-.72.72h4.44V2.81l-.72.72-.53.53z" clip-rule="evenodd"></path></svg>',wx='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5H0V3V1C0 0.447715 0.447715 0 1 0H3H3.5V1.5H3H1.5V3V3.5H1ZM14.5 1.5H15V3V3.5H16V3V1C16 0.447715 15.5523 0 15 0H13H12.5V1.5H13H14.5ZM1.5 14.5V13V12.5H0V13V15C0 15.5523 0.447715 16 1 16H3H3.5V14.5H3H1.5ZM15 14.5H14.5H13H12.5V16H13H15C15.5523 16 16 15.5523 16 15V13V12.5H14.5V13V14.5H15ZM4 5.5H5.5V4H4V5.5ZM7 5.5V4H9V5.5H7ZM10.5 5.5V4H12V5.5H10.5ZM4 9V7.5H5.5V9H4ZM10.5 7.5V9H12V7.5H10.5ZM5.5 12V10.5H4V12H5.5ZM7 10.5V12H9V10.5H7ZM12 10.5V12H10.5V10.5H12Z"/></svg>';yr=null});function Px(e){return typeof e.className=="string"?e.className:e.className?.baseVal||""}function We(e){let t=e;for(;t;){let n=Px(t);if(n.includes("__v0_")||n.includes("clr-")||t.getRootNode()instanceof ShadowRoot&&t.getRootNode().host.classList.contains("__v0_design_panel_host"))return!0;t=t.parentElement}return!1}var Qs=T(()=>{"use strict";mr()});function la(e="soft"){switch(U.session.__counterEpoch=(U.session.__counterEpoch||0)+1,e){case"auto":{U.session.styleMap=new Map,U.session.nodeMap=new Map;return}case"soft":{U.session.styleMap=new Map,U.session.nodeMap=new Map,U.session.styleCache=new WeakMap;return}case"full":return;case"disabled":{U.session.styleMap=new Map,U.session.nodeMap=new Map,U.session.styleCache=new WeakMap,U.computedStyle=new WeakMap,U.baseStyle=new Map,U.defaultStyle=new Map,U.image=new Map,U.background=new Map,U.resource=new Map,U.font=new Set;return}default:{U.session.styleMap=new Map,U.session.nodeMap=new Map,U.session.styleCache=new WeakMap;return}}}function wr(e){let t=e.match(/url\((['"]?)(.*?)(\1)\)/);if(!t)return null;let n=t[2].trim();return n.startsWith("#")?null:n}function _m(e){if(!e||e==="none")return"";let t=e.replace(/translate[XY]?\([^)]*\)/g,"");return t=t.replace(/matrix\(([^)]+)\)/g,(n,o)=>{let r=o.split(",").map(i=>i.trim());return r.length!==6?`matrix(${o})`:(r[4]="0",r[5]="0",`matrix(${r.join(", ")})`)}),t=t.replace(/matrix3d\(([^)]+)\)/g,(n,o)=>{let r=o.split(",").map(i=>i.trim());return r.length!==16?`matrix3d(${o})`:(r[12]="0",r[13]="0",`matrix3d(${r.join(", ")})`)}),t.trim().replace(/\s{2,}/g," ")}function vr(e){if(/%[0-9A-Fa-f]{2}/.test(e))return e;try{return encodeURI(e)}catch{return e}}function $x(e="[snapDOM]",{ttlMs:t=5*6e4,maxEntries:n=12}={}){let o=new Map,r=0;function i(a,l,s){if(r>=n)return;let c=Date.now();(o.get(l)||0)>c||(o.set(l,c+t),r++,a==="warn"&&console&&console.warn?console.warn(`${e} ${s}`):console&&console.error&&console.error(`${e} ${s}`))}return{warnOnce(a,l){i("warn",a,l)},errorOnce(a,l){i("error",a,l)},reset(){o.clear(),r=0}}}function Dx(e){return/^data:|^blob:|^about:blank$/i.test(e)}function Ix(e,t){try{let n=typeof location<"u"&&location.href?location.href:"http://localhost/",o=t.includes("{url}")?t.split("{url}")[0]:t,r=new URL(o||".",n),i=new URL(e,n);if(i.origin===r.origin)return!0;let a=i.searchParams;if(a&&(a.has("url")||a.has("target")))return!0}catch{}return!1}function Ox(e,t){if(!t||Dx(e)||Ix(e,t))return!1;try{let n=typeof location<"u"&&location.href?location.href:"http://localhost/",o=new URL(e,n);return typeof location<"u"?o.origin!==location.origin:!0}catch{return!!t}}function zx(e,t){if(!t)return e;if(t.includes("{url}"))return t.replace("{urlRaw}",vr(e)).replace("{url}",encodeURIComponent(e));if(/[?&]url=?$/.test(t))return`${t}${encodeURIComponent(e)}`;if(t.endsWith("?"))return`${t}url=${encodeURIComponent(e)}`;if(t.endsWith("/"))return`${t}${vr(e)}`;let n=t.includes("?")?"&":"?";return`${t}${n}url=${encodeURIComponent(e)}`}function Tm(e){return new Promise((t,n)=>{let o=new FileReader;o.onload=()=>t(String(o.result||"")),o.onerror=()=>n(new Error("read_failed")),o.readAsDataURL(e)})}function Fx(e,t){return[t.as||"blob",t.timeout??3e3,t.useProxy||"",t.errorTTL??8e3,e].join("|")}async function pt(e,t={}){let n=t.as??"blob",o=t.timeout??3e3,r=t.useProxy||"",i=t.errorTTL??8e3,a=t.headers||{},l=!!t.silent;if(/^data:/i.test(e))try{if(n==="text")return{ok:!0,data:String(e),status:200,url:e,fromCache:!1};if(n==="dataURL")return{ok:!0,data:String(e),status:200,url:e,fromCache:!1,mime:String(e).slice(5).split(";")[0]||""};let[,b="",x=""]=String(e).match(/^data:([^,]*),(.*)$/)||[],E=/;base64/i.test(b)?atob(x):decodeURIComponent(x),w=new Uint8Array([...E].map(L=>L.charCodeAt(0))),v=new Blob([w],{type:(b||"").split(";")[0]||""});return{ok:!0,data:v,status:200,url:e,fromCache:!1,mime:v.type||""}}catch{return{ok:!1,data:null,status:0,url:e,fromCache:!1,reason:"special_url_error"}}if(/^blob:/i.test(e))try{let b=await fetch(e);if(!b.ok)return{ok:!1,data:null,status:b.status,url:e,fromCache:!1,reason:"http_error"};let x=await b.blob(),E=x.type||b.headers.get("content-type")||"";return n==="dataURL"?{ok:!0,data:await Tm(x),status:b.status,url:e,fromCache:!1,mime:E}:n==="text"?{ok:!0,data:await x.text(),status:b.status,url:e,fromCache:!1,mime:E}:{ok:!0,data:x,status:b.status,url:e,fromCache:!1,mime:E}}catch{return{ok:!1,data:null,status:0,url:e,fromCache:!1,reason:"network"}}if(/^about:blank$/i.test(e))return n==="dataURL"?{ok:!0,data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",status:200,url:e,fromCache:!1,mime:"image/png"}:{ok:!0,data:n==="text"?"":new Blob([]),status:200,url:e,fromCache:!1};let s=Fx(e,{as:n,timeout:o,useProxy:r,errorTTL:i}),c=aa.get(s);if(c&&c.until>Date.now())return{...c.result,fromCache:!0};c&&aa.delete(s);let d=ec.get(s);if(d)return d;let p=Ox(e,r)?zx(e,r):e,u=t.credentials;if(!u)try{let b=typeof location<"u"&&location.href?location.href:"http://localhost/",x=new URL(e,b);u=typeof location<"u"&&x.origin===location.origin?"include":"omit"}catch{u="omit"}let g=new AbortController,h=setTimeout(()=>g.abort("timeout"),o),m=(async()=>{try{let b=await fetch(p,{signal:g.signal,credentials:u,headers:a});if(!b.ok){let w={ok:!1,data:null,status:b.status,url:p,fromCache:!1,reason:"http_error"};if(i>0&&aa.set(s,{until:Date.now()+i,result:w}),!l){let v=`${b.status} ${b.statusText||""}`.trim();km.warnOnce(`http:${b.status}:${n}:${new URL(e,location?.href??"http://localhost/").origin}`,`HTTP error ${v} while fetching ${n} ${e}`)}return t.onError&&t.onError(w),w}if(n==="text")return{ok:!0,data:await b.text(),status:b.status,url:p,fromCache:!1};let x=await b.blob(),E=x.type||b.headers.get("content-type")||"";return n==="dataURL"?{ok:!0,data:await Tm(x),status:b.status,url:p,fromCache:!1,mime:E}:{ok:!0,data:x,status:b.status,url:p,fromCache:!1,mime:E}}catch(b){let x=b&&typeof b=="object"&&"name"in b&&b.name==="AbortError"?String(b.message||"").includes("timeout")?"timeout":"abort":"network",E={ok:!1,data:null,status:0,url:p,fromCache:!1,reason:x};if(!/^blob:/i.test(e)&&i>0&&aa.set(s,{until:Date.now()+i,result:E}),!l){let w=`${x}:${n}:${new URL(e,location?.href??"http://localhost/").origin}`,v=x==="timeout"?`Timeout after ${o}ms. Consider increasing timeout or using a proxy for ${e}`:x==="abort"?`Request aborted while fetching ${n} ${e}`:`Network/CORS issue while fetching ${n} ${e}. A proxy may be required`;km.errorOnce(w,v)}return t.onError&&t.onError(E),E}finally{clearTimeout(h),ec.delete(s)}})();return ec.set(s,m),m}async function ko(e,t={}){if(/^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(e)||e.trim()==="none")return e;let n=wr(e);if(!n)return e;let o=vr(n);if(U.background.has(o)){let r=U.background.get(o);return r?`url("${r}")`:"none"}try{let r=await pt(o,{as:"dataURL",useProxy:t.useProxy});return r.ok?(U.background.set(o,r.data),`url("${r.data}")`):(U.background.set(o,null),"none")}catch{return U.background.set(o,null),"none"}}function Rm(){for(let e of Vx){let t=String(e).toLowerCase();tc.has(t)||Er.has(t)||Hm(t)}}function Hm(e){if(e=String(e).toLowerCase(),Er.has(e)){let i={};return U.defaultStyle.set(e,i),i}if(U.defaultStyle.has(e))return U.defaultStyle.get(e);let t=document.getElementById("snapdom-sandbox");t||(t=document.createElement("div"),t.id="snapdom-sandbox",t.setAttribute("data-snapdom-sandbox","true"),t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.width="0px",t.style.height="0px",t.style.overflow="hidden",document.body.appendChild(t));let n=document.createElement(e);n.style.all="initial",t.appendChild(n);let o=getComputedStyle(n),r={};for(let i of o){if(Nm(i))continue;let a=o.getPropertyValue(i);r[i]=a}return t.removeChild(n),U.defaultStyle.set(e,r),r}function Nm(e){let t=String(e).toLowerCase();return!!(qx.has(t)||Wx.test(t)||Bx.test(t))}function sa(e,t){if(t=String(t||"").toLowerCase(),Er.has(t))return"";let n=[],o=Hm(t);for(let[r,i]of Object.entries(e)){if(Nm(r))continue;let a=o[r];i&&i!==a&&n.push(`${r}:${i}`)}return n.sort(),n.join(";")}function Am(e){let t=new Set;return e.nodeType!==Node.ELEMENT_NODE&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?[]:(e.tagName&&t.add(e.tagName.toLowerCase()),typeof e.querySelectorAll=="function"&&e.querySelectorAll("*").forEach(n=>t.add(n.tagName.toLowerCase())),Array.from(t))}function Pm(e){let t=new Map;for(let o of e){let r=U.defaultStyle.get(o);if(!r)continue;let i=Object.entries(r).map(([a,l])=>`${a}:${l};`).sort().join("");i&&(t.has(i)||t.set(i,[]),t.get(i).push(o))}let n="";for(let[o,r]of t.entries())n+=`${r.join(",")} { ${o} }
`;return n}function $m(e){let t=Array.from(new Set(e.values())).filter(Boolean).sort(),n=new Map,o=1;for(let r of t)n.set(r,`c${o++}`);return n}function To(e,t=null){if(!(e instanceof Element))return window.getComputedStyle(e,t);let n=U.computedStyle.get(e);if(n||(n=new Map,U.computedStyle.set(e,n)),!n.has(t)){let o=window.getComputedStyle(e,t);n.set(t,o)}return n.get(t)}function nc(e){let t={};for(let n of e)t[n]=e.getPropertyValue(n);return t}function ca(e){let t=[],n=0,o=0;for(let r=0;r<e.length;r++){let i=e[r];i==="("&&n++,i===")"&&n--,i===","&&n===0&&(t.push(e.slice(o,r).trim()),o=r+1)}return t.push(e.slice(o).trim()),t}var U,km,ec,aa,tc,Er,Vx,Bx,Wx,qx,da=T(()=>{U={image:new Map,background:new Map,resource:new Map,defaultStyle:new Map,baseStyle:new Map,computedStyle:new WeakMap,font:new Set,session:{styleMap:new Map,styleCache:new WeakMap,nodeMap:new Map}};km=$x("[snapDOM]",{ttlMs:3*6e4,maxEntries:10}),ec=new Map,aa=new Map;tc=new Set(["meta","script","noscript","title","link","template"]),Er=new Set(["meta","link","style","title","noscript","script","template","g","defs","use","marker","mask","clipPath","pattern","path","polygon","polyline","line","circle","ellipse","rect","filter","lineargradient","radialgradient","stop"]),Vx=["div","span","p","a","img","ul","li","button","input","select","textarea","label","section","article","header","footer","nav","main","aside","h1","h2","h3","h4","h5","h6","table","thead","tbody","tr","td","th"];Bx=/(?:^|-)(animation|transition)(?:-|$)/i,Wx=/^(--|view-timeline|scroll-timeline|animation-trigger|offset-|position-try|app-region|interactivity|overlay|view-transition|-webkit-locale|-webkit-user-(?:drag|modify)|-webkit-tap-highlight-color|-webkit-text-security)$/i,qx=new Set(["cursor","pointer-events","touch-action","user-select","print-color-adjust","speak","reading-flow","reading-order","anchor-name","anchor-scope","container-name","container-type","timeline-scope"])});function zm(e){let t=Array.isArray(e)?e:[e];for(let n of t)n instanceof RegExp?oc.push(n):typeof n=="string"?oc.push(new RegExp(n,"i")):console.warn("[snapdom] Ignored invalid iconFont value:",n)}function Ut(e){let t=typeof e=="string"?e:"",n=[...jx,...oc];for(let o of n)if(o instanceof RegExp&&o.test(t))return!0;return!!(/icon/i.test(t)||/glyph/i.test(t)||/symbols/i.test(t)||/feather/i.test(t)||/fontawesome/i.test(t))}function Ux(e=""){let t=String(e).toLowerCase();return/\bmaterial\s*icons\b/.test(t)||/\bmaterial\s*symbols\b/.test(t)}function Xx(e=""){let t=Object.create(null),n=String(e||""),o=/['"]?\s*([A-Za-z]{3,4})\s*['"]?\s*([+-]?\d+(?:\.\d+)?)\s*/g,r;for(;r=o.exec(n);)t[r[1].toUpperCase()]=Number(r[2]);return t}async function Gx(e,t,n){let o=String(e||""),r=o.toLowerCase(),i=String(t||"").toLowerCase();if(/\bmaterial\s*icons\b/.test(r)&&!/\bsymbols\b/.test(r))return{familyForMeasure:o,familyForCanvas:o};if(!/\bmaterial\s*symbols\b/.test(r))return{familyForMeasure:o,familyForCanvas:o};let a=n&&(n.FILL??n.fill),l="outlined";/\brounded\b/.test(i)||/\bround\b/.test(i)?l="rounded":/\bsharp\b/.test(i)?l="sharp":/\boutlined\b/.test(i)&&(l="outlined");let s=a===1,c=null;if(s&&(l==="outlined"&&_o.materialIconsFilled?c={url:_o.materialIconsFilled,alias:"snapdom-mi-filled"}:l==="rounded"&&_o.materialIconsRound?c={url:_o.materialIconsRound,alias:"snapdom-mi-round"}:l==="sharp"&&_o.materialIconsSharp&&(c={url:_o.materialIconsSharp,alias:"snapdom-mi-sharp"})),!c)return{familyForMeasure:o,familyForCanvas:o};if(!Dm.has(c.alias))try{let p=new FontFace(c.alias,`url(${c.url})`,{style:"normal",weight:"400"});document.fonts.add(p),await p.load(),Dm.set(c.alias,!0)}catch{return{familyForMeasure:o,familyForCanvas:o}}let d=`"${c.alias}"`;return{familyForMeasure:d,familyForCanvas:d}}async function Yx(e="Material Icons",t=24){try{await Promise.all([document.fonts.load(`400 ${t}px "${String(e).replace(/["']/g,"")}"`),document.fonts.ready])}catch{}}function Kx(e){let t=e.getPropertyValue("-webkit-text-fill-color")?.trim()||"",n=/^transparent$/i.test(t)||/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/i.test(t);if(t&&!n&&t.toLowerCase()!=="currentcolor")return t;let o=e.color?.trim();return o&&o!=="inherit"?o:"#000"}async function Zx(e,{family:t="Material Icons",weight:n="normal",fontSize:o=32,color:r="#000",variation:i="",className:a=""}={}){let l=String(t||"").replace(/^['"]+|['"]+$/g,""),s=window.devicePixelRatio||1,c=Xx(i),{familyForMeasure:d,familyForCanvas:p}=await Gx(l,a,c);await Yx(p.replace(/^["']+|["']+$/g,""),o);let u=document.createElement("span");u.textContent=e,u.style.position="absolute",u.style.visibility="hidden",u.style.left="-99999px",u.style.whiteSpace="nowrap",u.style.fontFamily=d,u.style.fontWeight=String(n||"normal"),u.style.fontSize=`${o}px`,u.style.lineHeight="1",u.style.margin="0",u.style.padding="0",u.style.fontFeatureSettings="'liga' 1",u.style.fontVariantLigatures="normal",u.style.color=r,document.body.appendChild(u);let g=u.getBoundingClientRect(),h=Math.max(1,Math.ceil(g.width)),m=Math.max(1,Math.ceil(g.height));document.body.removeChild(u);let b=document.createElement("canvas");b.width=h*s,b.height=m*s;let x=b.getContext("2d");x.scale(s,s),x.font=`${n?`${n} `:""}${o}px ${p}`,x.textAlign="left",x.textBaseline="top",x.fillStyle=r;try{x.fontKerning="normal"}catch{}return x.fillText(e,0,0),{dataUrl:b.toDataURL(),width:h,height:m}}async function Fm(e,t){if(!(e instanceof Element))return 0;let n='.material-icons, [class*="material-symbols"]',o=Array.from(e.querySelectorAll(n)).filter(a=>a&&a.textContent&&a.textContent.trim());if(o.length===0)return 0;let r=t instanceof Element?Array.from(t.querySelectorAll(n)).filter(a=>a&&a.textContent&&a.textContent.trim()):[],i=0;for(let a=0;a<o.length;a++){let l=o[a],s=r[a]||null;try{let c=getComputedStyle(s||l),d=c.fontFamily||"Material Icons";if(!Ux(d))continue;let p=(s||l).textContent.trim();if(!p)continue;let u=parseInt(c.fontSize,10)||24,g=c.fontWeight&&c.fontWeight!=="normal"?c.fontWeight:"normal",h=Kx(c),m=c.fontVariationSettings&&c.fontVariationSettings!=="normal"?c.fontVariationSettings:"",b=(s||l).className||"",{dataUrl:x,width:E,height:w}=await Zx(p,{family:d,weight:g,fontSize:u,color:h,variation:m,className:b});l.textContent="";let v=l.ownerDocument.createElement("img");v.src=x,v.alt=p,v.style.height=`${u}px`,v.style.width=`${Math.max(1,Math.round(E/w*u))}px`,v.style.objectFit="contain",v.style.verticalAlign=getComputedStyle(l).verticalAlign||"baseline",l.appendChild(v),i++}catch{}}return i}async function Vm(e,t,n,o=32,r="#000"){t=t.replace(/^['"]+|['"]+$/g,"");let i=window.devicePixelRatio||1;try{await document.fonts.ready}catch{}let a=document.createElement("span");a.textContent=e,a.style.position="absolute",a.style.visibility="hidden",a.style.fontFamily=`"${t}"`,a.style.fontWeight=n||"normal",a.style.fontSize=`${o}px`,a.style.lineHeight="1",a.style.whiteSpace="nowrap",a.style.padding="0",a.style.margin="0",document.body.appendChild(a);let l=a.getBoundingClientRect(),s=Math.ceil(l.width),c=Math.ceil(l.height);document.body.removeChild(a);let d=document.createElement("canvas");d.width=Math.max(1,s*i),d.height=Math.max(1,c*i);let p=d.getContext("2d");return p.scale(i,i),p.font=n?`${n} ${o}px "${t}"`:`${o}px "${t}"`,p.textAlign="left",p.textBaseline="top",p.fillStyle=r,p.fillText(e,0,0),{dataUrl:d.toDataURL(),width:s,height:c}}function ma(e){if(!e)return"";for(let t of e.split(",")){let n=t.trim().replace(/^['"]+|['"]+$/g,"");if(n&&!Jx.has(n.toLowerCase()))return n}return""}function ua(e){let t=String(e??"400").trim().toLowerCase();if(t==="normal")return 400;if(t==="bold")return 700;let n=parseInt(t,10);return Number.isFinite(n)?Math.min(900,Math.max(100,n)):400}function pa(e){let t=String(e??"normal").trim().toLowerCase();return t.startsWith("italic")?"italic":t.startsWith("oblique")?"oblique":"normal"}function Qx(e){let t=String(e??"100%").match(/(\d+(?:\.\d+)?)\s*%/);return t?Math.max(50,Math.min(200,parseFloat(t[1]))):100}function ev(e){let t=String(e||"400").trim(),n=t.match(/^(\d{2,3})\s+(\d{2,3})$/);if(n){let r=ua(n[1]),i=ua(n[2]);return{min:Math.min(r,i),max:Math.max(r,i)}}let o=ua(t);return{min:o,max:o}}function tv(e){let t=String(e||"normal").trim().toLowerCase();return t==="italic"?{kind:"italic"}:t.startsWith("oblique")?{kind:"oblique"}:{kind:"normal"}}function nv(e){let t=String(e||"100%").trim(),n=t.match(/(\d+(?:\.\d+)?)\s*%\s+(\d+(?:\.\d+)?)\s*%/);if(n){let i=parseFloat(n[1]),a=parseFloat(n[2]);return{min:Math.min(i,a),max:Math.max(i,a)}}let o=t.match(/(\d+(?:\.\d+)?)\s*%/),r=o?parseFloat(o[1]):100;return{min:r,max:r}}function ov(e,t){if(!e)return!1;try{let n=new URL(e,location.href);if(n.origin===location.origin)return!0;let o=n.host.toLowerCase();if(["fonts.googleapis.com","fonts.gstatic.com","use.typekit.net","p.typekit.net","kit.fontawesome.com","use.fontawesome.com"].some(i=>o.endsWith(i)))return!0;let r=(n.pathname+n.search).toLowerCase();if(/\bfont(s)?\b/.test(r)||/\.woff2?(\b|$)/.test(r))return!0;for(let i of t){let a=i.toLowerCase().replace(/\s+/g,"+"),l=i.toLowerCase().replace(/\s+/g,"-");if(r.includes(a)||r.includes(l))return!0}return!1}catch{return!1}}function rv(e){let t=new Set;for(let n of e||[]){let o=String(n).split("__")[0]?.trim();o&&t.add(o)}return t}function Im(e,t){return e&&e.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g,(n,o,r)=>{let i=(r||"").trim();if(!i||/^data:|^blob:|^https?:|^file:|^about:/i.test(i))return n;let a=i;try{a=new URL(i,t||location.href).href}catch{}return`url("${a}")`})}async function iv(e,t,n){if(!e)return e;let o=new Set;function r(l,s){try{return new URL(l,s||location.href).href}catch{return l}}async function i(l,s,c=0){if(c>fa)return console.warn(`[snapDOM] @import depth exceeded (${fa}) at ${s}`),l;let d="",p=0,u;for(;u=rc.exec(l);){d+=l.slice(p,u.index),p=rc.lastIndex;let g=(u[2]||u[4]||"").trim(),h=r(g,s);if(o.has(h)){console.warn(`[snapDOM] Skipping circular @import: ${h}`);continue}o.add(h);let m="";try{let b=await pt(h,{as:"text",useProxy:n,silent:!0});b.ok&&typeof b.data=="string"&&(m=b.data)}catch{}m?(m=Im(m,h),m=await i(m,h,c+1),d+=`
/* inlined: ${h} */
${m}
`):d+=u[0]}return d+=l.slice(p),d}let a=Im(e,t||location.href);return a=await i(a,t||location.href,0),a}function Wm(e){if(!e)return[];let t=[],n=e.split(",").map(o=>o.trim()).filter(Boolean);for(let o of n){let r=o.match(/^U\+([0-9A-Fa-f?]+)(?:-([0-9A-Fa-f?]+))?$/);if(!r)continue;let i=r[1],a=r[2],l=s=>{if(!s.includes("?"))return parseInt(s,16);let c=parseInt(s.replace(/\?/g,"0"),16),d=parseInt(s.replace(/\?/g,"F"),16);return[c,d]};if(a){let s=l(i),c=l(a),d=Array.isArray(s)?s[0]:s,p=Array.isArray(c)?c[1]:c;t.push([Math.min(d,p),Math.max(d,p)])}else{let s=l(i);Array.isArray(s)?t.push([s[0],s[1]]):t.push([s,s])}}return t}function qm(e,t){if(!t.length||!e||e.size===0)return!0;for(let n of e)for(let[o,r]of t)if(n>=o&&n<=r)return!0;return!1}function ic(e,t){let n=[];if(!e)return n;for(let o of e.matchAll(Bm)){let r=(o[2]||"").trim();if(!(!r||r.startsWith("data:"))){if(!/^https?:/i.test(r))try{r=new URL(r,t||location.href).href}catch{}n.push(r)}}return n}async function jm(e,t,n=""){let o=e;for(let r of e.matchAll(Bm)){let i=wr(r[0]);if(!i)continue;let a=i;if(!a.startsWith("http")&&!a.startsWith("data:"))try{a=new URL(a,t||location.href).href}catch{}if(!Ut(a)){if(U.resource?.has(a)){U.font?.add(a),o=o.replace(r[0],`url(${U.resource.get(a)})`);continue}if(!U.font?.has(a))try{let l=await pt(a,{as:"dataURL",useProxy:n,silent:!0});if(l.ok&&typeof l.data=="string"){let s=l.data;U.resource?.set(a,s),U.font?.add(a),o=o.replace(r[0],`url(${s})`)}}catch{console.warn("[snapDOM] Failed to fetch font resource:",a)}}}return o}function lv(e){if(!e.length)return null;let t=(a,l)=>e.some(([s,c])=>!(c<a||s>l)),n=t(0,255)||t(305,305),o=t(256,591)||t(7680,7935),r=t(880,1023),i=t(1024,1279);return t(7840,7929)||t(258,259)||t(416,417)||t(431,432)?"vietnamese":i?"cyrillic":r?"greek":o?"latin-ext":n?"latin":null}function Om(e={}){let t=new Set((e.families||[]).map(r=>String(r).toLowerCase())),n=new Set((e.domains||[]).map(r=>String(r).toLowerCase())),o=new Set((e.subsets||[]).map(r=>String(r).toLowerCase()));return(r,i)=>{if(t.size&&t.has(r.family.toLowerCase()))return!0;if(n.size)for(let a of r.srcUrls)try{if(n.has(new URL(a).host.toLowerCase()))return!0}catch{}if(o.size){let a=lv(i);if(a&&o.has(a))return!0}return!1}}function sv(e){if(!e)return e;let t=/@font-face[^{}]*\{[^}]*\}/gi,n=new Set,o=[];for(let i of e.match(t)||[]){let a=i.match(/font-family:\s*([^;]+);/i)?.[1]||"",l=ma(a),s=(i.match(/font-weight:\s*([^;]+);/i)?.[1]||"400").trim(),c=(i.match(/font-style:\s*([^;]+);/i)?.[1]||"normal").trim(),d=(i.match(/font-stretch:\s*([^;]+);/i)?.[1]||"100%").trim(),p=(i.match(/unicode-range:\s*([^;]+);/i)?.[1]||"").trim(),u=(i.match(/src\s*:\s*([^;}]+)[;}]/i)?.[1]||"").trim(),g=ic(u,location.href),h=g.length?g.map(b=>String(b).toLowerCase()).sort().join("|"):u.toLowerCase(),m=[String(l||"").toLowerCase(),s,c,d,p.toLowerCase(),h].join("|");n.has(m)||(n.add(m),o.push(i))}if(o.length===0)return e;let r=0;return e.replace(t,()=>o[r++]||"")}function cv(e,t,n,o){let r=Array.from(e||[]).sort().join("|"),i=t?JSON.stringify({families:(t.families||[]).map(l=>String(l).toLowerCase()).sort(),domains:(t.domains||[]).map(l=>String(l).toLowerCase()).sort(),subsets:(t.subsets||[]).map(l=>String(l).toLowerCase()).sort()}):"",a=(n||[]).map(l=>`${(l.family||"").toLowerCase()}::${l.weight||"normal"}::${l.style||"normal"}::${l.src||""}`).sort().join("|");return`fonts-embed-css::req=${r}::ex=${i}::lf=${a}::px=${o||""}`}async function Um(e,t,n,o){let r;try{r=e.cssRules||[]}catch{return}let i=(a,l)=>{try{return new URL(a,l||location.href).href}catch{return a}};for(let a of r){if(a.type===CSSRule.IMPORT_RULE&&a.styleSheet){let l=a.href?i(a.href,t):t;if(o.depth>=fa){console.warn(`[snapDOM] CSSOM import depth exceeded (${fa}) at ${l}`);continue}if(l&&o.visitedSheets.has(l)){console.warn(`[snapDOM] Skipping circular CSSOM import: ${l}`);continue}l&&o.visitedSheets.add(l);let s={...o,depth:(o.depth||0)+1};await Um(a.styleSheet,l,n,s);continue}if(a.type===CSSRule.FONT_FACE_RULE){let l=(a.style.getPropertyValue("font-family")||"").trim(),s=ma(l);if(!s||Ut(s))continue;let c=(a.style.getPropertyValue("font-weight")||"400").trim(),d=(a.style.getPropertyValue("font-style")||"normal").trim(),p=(a.style.getPropertyValue("font-stretch")||"100%").trim(),u=(a.style.getPropertyValue("src")||"").trim(),g=(a.style.getPropertyValue("unicode-range")||"").trim();if(!o.faceMatchesRequired(s,d,c,p))continue;let h=Wm(g);if(!qm(o.usedCodepoints,h))continue;let m={family:s,weightSpec:c,styleSpec:d,stretchSpec:p,unicodeRange:g,srcRaw:u,srcUrls:ic(u,t||location.href),href:t||location.href};if(o.simpleExcluder&&o.simpleExcluder(m,h))continue;if(/url\(/i.test(u)){let b=await jm(u,t||location.href,o.useProxy);await n(`@font-face{font-family:${s};src:${b};font-style:${d};font-weight:${c};font-stretch:${p};${g?`unicode-range:${g};`:""}}`)}else await n(`@font-face{font-family:${s};src:${u};font-style:${d};font-weight:${c};font-stretch:${p};${g?`unicode-range:${g};`:""}}`)}}}async function ha({required:e,usedCodepoints:t,exclude:n=void 0,localFonts:o=[],useProxy:r=""}={}){e instanceof Set||(e=new Set),t instanceof Set||(t=new Set);let i=new Map;for(let m of e){let[b,x,E,w]=String(m).split("__");if(!b)continue;let v=i.get(b)||[];v.push({w:parseInt(x,10),s:E,st:parseInt(w,10)}),i.set(b,v)}function a(m,b,x,E){if(!i.has(m))return!1;let w=i.get(m),v=ev(x),L=tv(b),k=nv(E),N=v.min!==v.max,I=v.min,_=O=>L.kind==="normal"&&O==="normal"||L.kind!=="normal"&&(O==="italic"||O==="oblique"),$=!1;for(let O of w){let F=N?O.w>=v.min&&O.w<=v.max:O.w===I,A=_(pa(O.s)),V=O.st>=k.min&&O.st<=k.max;if(F&&A&&V){$=!0;break}}if($)return!0;if(!N)for(let O of w){let F=_(pa(O.s)),A=O.st>=k.min&&O.st<=k.max;if(Math.abs(I-O.w)<=300&&F&&A)return!0}if(!N&&L.kind==="normal"&&w.some(O=>pa(O.s)!=="normal"))for(let O of w){let F=Math.abs(I-O.w)<=300,A=O.st>=k.min&&O.st<=k.max;if(F&&A)return!0}return!1}let l=Om(n),s=cv(e,n,o,r);if(U.resource?.has(s))return U.resource.get(s);let c=rv(e),d=[],p=rc;for(let m of document.querySelectorAll("style")){let b=m.textContent||"";for(let x of b.matchAll(p)){let E=(x[2]||x[4]||"").trim();!E||Ut(E)||document.querySelector(`link[rel="stylesheet"][href="${E}"]`)||d.push(E)}}d.length&&await Promise.all(d.map(m=>new Promise(b=>{if(document.querySelector(`link[rel="stylesheet"][href="${m}"]`))return b(null);let x=document.createElement("link");x.rel="stylesheet",x.href=m,x.setAttribute("data-snapdom","injected-import"),x.onload=()=>b(x),x.onerror=()=>b(null),document.head.appendChild(x)})));let u="",g=Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(m=>!!m.href);for(let m of g)try{if(Ut(m.href))continue;let b="",x=!1;try{x=new URL(m.href,location.href).origin===location.origin}catch{}if(!x&&!ov(m.href,c))continue;if(x){let w=Array.from(document.styleSheets).find(v=>v.href===m.href);if(w)try{let v=w.cssRules||[];b=Array.from(v).map(L=>L.cssText).join("")}catch{}}if(!b&&(b=(await pt(m.href,{as:"text",useProxy:r})).data,Ut(m.href)))continue;b=await iv(b,m.href,r);let E="";for(let w of b.match(av)||[]){let v=(w.match(/font-family:\s*([^;]+);/i)?.[1]||"").trim(),L=ma(v);if(!L||Ut(L))continue;let k=(w.match(/font-weight:\s*([^;]+);/i)?.[1]||"400").trim(),N=(w.match(/font-style:\s*([^;]+);/i)?.[1]||"normal").trim(),I=(w.match(/font-stretch:\s*([^;]+);/i)?.[1]||"100%").trim(),_=(w.match(/unicode-range:\s*([^;]+);/i)?.[1]||"").trim(),$=(w.match(/src\s*:\s*([^;}]+)[;}]/i)?.[1]||"").trim(),O=ic($,m.href);if(!a(L,N,k,I))continue;let F=Wm(_);if(!qm(t,F))continue;let A={family:L,weightSpec:k,styleSpec:N,stretchSpec:I,unicodeRange:_,srcRaw:$,srcUrls:O,href:m.href};if(n&&l(A,F))continue;let V=/url\(/i.test($)?await jm(w,m.href,r):w;E+=V}E.trim()&&(u+=E)}catch{console.warn("[snapDOM] Failed to process stylesheet:",m.href)}let h={requiredIndex:i,usedCodepoints:t,faceMatchesRequired:a,simpleExcluder:n?Om(n):null,useProxy:r,visitedSheets:new Set,depth:0};for(let m of document.styleSheets)if(!(m.href&&g.some(b=>b.href===m.href)))try{let b=m.href||location.href;b&&h.visitedSheets.add(b),await Um(m,b,async x=>{u+=x},h)}catch{}try{for(let m of document.fonts||[]){if(!m||!m.family||m.status!=="loaded"||!m._snapdomSrc)continue;let b=String(m.family).replace(/^['"]+|['"]+$/g,"");if(Ut(b)||!i.has(b)||n?.families&&n.families.some(E=>String(E).toLowerCase()===b.toLowerCase()))continue;let x=m._snapdomSrc;if(!String(x).startsWith("data:")){if(U.resource?.has(m._snapdomSrc))x=U.resource.get(m._snapdomSrc),U.font?.add(m._snapdomSrc);else if(!U.font?.has(m._snapdomSrc))try{let E=await pt(m._snapdomSrc,{as:"dataURL",useProxy:r,silent:!0});if(E.ok&&typeof E.data=="string")x=E.data,U.resource?.set(m._snapdomSrc,x),U.font?.add(m._snapdomSrc);else continue}catch{console.warn("[snapDOM] Failed to fetch dynamic font src:",m._snapdomSrc);continue}}u+=`@font-face{font-family:'${b}';src:url(${x});font-style:${m.style||"normal"};font-weight:${m.weight||"normal"};}`}}catch{}for(let m of o){if(!m||typeof m!="object")continue;let b=String(m.family||"").replace(/^['"]+|['"]+$/g,"");if(!b||Ut(b)||!i.has(b)||n?.families&&n.families.some(k=>String(k).toLowerCase()===b.toLowerCase()))continue;let x=m.weight!=null?String(m.weight):"normal",E=m.style!=null?String(m.style):"normal",w=m.stretchPct!=null?`${m.stretchPct}%`:"100%",v=String(m.src||""),L=v;if(!L.startsWith("data:")){if(U.resource?.has(v))L=U.resource.get(v),U.font?.add(v);else if(!U.font?.has(v))try{let k=await pt(v,{as:"dataURL",useProxy:r,silent:!0});if(k.ok&&typeof k.data=="string")L=k.data,U.resource?.set(v,L),U.font?.add(v);else continue}catch{console.warn("[snapDOM] Failed to fetch localFonts src:",v);continue}}u+=`@font-face{font-family:'${b}';src:url(${L});font-style:${E};font-weight:${x};font-stretch:${w};}`}return u&&(u=sv(u),U.resource?.set(s,u)),u}function ga(e){let t=new Set;if(!e)return t;let n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null),o=a=>{let l=ma(a.fontFamily);if(!l)return;let s=(c,d,p)=>`${l}__${ua(c)}__${pa(d)}__${Qx(p)}`;t.add(s(a.fontWeight,a.fontStyle,a.fontStretch))};o(getComputedStyle(e));let r=getComputedStyle(e,"::before");r&&r.content&&r.content!=="none"&&o(r);let i=getComputedStyle(e,"::after");for(i&&i.content&&i.content!=="none"&&o(i);n.nextNode();){let a=n.currentNode,l=getComputedStyle(a);o(l);let s=getComputedStyle(a,"::before");s&&s.content&&s.content!=="none"&&o(s);let c=getComputedStyle(a,"::after");c&&c.content&&c.content!=="none"&&o(c)}return t}function ba(e){let t=new Set,n=r=>{if(r)for(let i of r)t.add(i.codePointAt(0))},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null);for(;o.nextNode();){let r=o.currentNode;if(r.nodeType===Node.TEXT_NODE)n(r.nodeValue||"");else if(r.nodeType===Node.ELEMENT_NODE){let i=r;for(let a of["::before","::after"]){let l=getComputedStyle(i,a)?.getPropertyValue("content");if(!(!l||l==="none"))if(/^"/.test(l)||/^'/.test(l))n(l.slice(1,-1));else{let s=l.match(/\\[0-9A-Fa-f]{1,6}/g);if(s)for(let c of s)try{t.add(parseInt(c.slice(1),16))}catch{}}}}}return t}async function ya(e,t=2){try{await document.fonts.ready}catch{}let n=Array.from(e||[]).filter(Boolean);if(n.length===0)return;let o=()=>{let r=document.createElement("div");r.style.cssText="position:absolute!important;left:-9999px!important;top:0!important;opacity:0!important;pointer-events:none!important;contain:layout size style;";for(let i of n){let a=document.createElement("span");a.textContent="AaBbGg1234\xC1\xC9\xCD\xD3\xDA\xE7\xF1\u2014\u221E",a.style.fontFamily=`"${i}"`,a.style.fontWeight="700",a.style.fontStyle="italic",a.style.fontSize="32px",a.style.lineHeight="1",a.style.whiteSpace="nowrap",a.style.margin="0",a.style.padding="0",r.appendChild(a)}document.body.appendChild(r),r.offsetWidth,document.body.removeChild(r)};for(let r=0;r<Math.max(1,t);r++)o(),await new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)))}async function xa(e,t,n,o={}){let r=[[e,t]],i=["background-image","mask","mask-image","-webkit-mask","-webkit-mask-image","mask-source","mask-box-image-source","mask-border-source","-webkit-mask-box-image-source","border-image","border-image-source"],a=["mask-position","mask-size","mask-repeat","-webkit-mask-position","-webkit-mask-size","-webkit-mask-repeat","mask-origin","mask-clip","-webkit-mask-origin","-webkit-mask-clip","-webkit-mask-position-x","-webkit-mask-position-y"],l=["background-position","background-position-x","background-position-y","background-size","background-repeat","background-origin","background-clip","background-attachment","background-blend-mode"],s=["border-image-slice","border-image-width","border-image-outset","border-image-repeat"];for(;r.length;){let[c,d]=r.shift(),p=n.get(c)||To(c);n.has(c)||n.set(c,p);let u=(()=>{let m=p.getPropertyValue("border-image"),b=p.getPropertyValue("border-image-source");return m&&m!=="none"||b&&b!=="none"})();for(let m of l){let b=p.getPropertyValue(m);b&&d.style.setProperty(m,b)}for(let m of i){let b=p.getPropertyValue(m);if(!b||b==="none")continue;let x=ca(b),E=await Promise.all(x.map(w=>ko(w,o)));E.some(w=>w&&w!=="none"&&!/^url\(undefined/.test(w))&&d.style.setProperty(m,E.join(", "))}for(let m of a){let b=p.getPropertyValue(m);!b||b==="initial"||d.style.setProperty(m,b)}if(u)for(let m of s){let b=p.getPropertyValue(m);!b||b==="initial"||d.style.setProperty(m,b)}let g=Array.from(c.children),h=Array.from(d.children).filter(m=>!(m.dataset&&m.dataset.snapdomPseudo));for(let m=0;m<Math.min(g.length,h.length);m++)r.push([g[m],h[m]])}}var jx,_o,oc,Dm,Jx,rc,fa,Bm,av,va=T(()=>{da();jx=[/font\s*awesome/i,/material\s*icons/i,/ionicons/i,/glyphicons/i,/feather/i,/bootstrap\s*icons/i,/remix\s*icons/i,/heroicons/i,/layui/i,/lucide/i],_o=Object.assign({materialIconsFilled:"https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",materialIconsOutlined:"https://fonts.gstatic.com/s/materialiconsoutlined/v110/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2",materialIconsRound:"https://fonts.gstatic.com/s/materialiconsround/v109/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2",materialIconsSharp:"https://fonts.gstatic.com/s/materialiconssharp/v110/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2"},typeof window<"u"&&window.__SNAPDOM_ICON_FONTS__||{}),oc=[];Dm=new Map;Jx=new Set(["serif","sans-serif","monospace","cursive","fantasy","system-ui","emoji","math","fangsong","ui-serif","ui-sans-serif","ui-monospace","ui-rounded"]);rc=/@import\s+(?:url\(\s*(['"]?)([^)"']+)\1\s*\)|(['"])([^"']+)\3)([^;]*);/g,fa=4;Bm=/url\((["']?)([^"')]+)\1\)/g,av=/@font-face[^{}]*\{[^}]*\}/g});function Kn(e,{fast:t=!1}={}){if(t)return e();"requestIdleCallback"in window?requestIdleCallback(e,{timeout:50}):setTimeout(e,1)}function at(){if(typeof navigator>"u")return!1;let e=navigator.userAgent||"",t=e.toLowerCase(),n=t.includes("safari")&&!t.includes("chrome")&&!t.includes("crios")&&!t.includes("fxios")&&!t.includes("android"),o=/applewebkit/i.test(e),r=/mobile/i.test(e),i=!/safari/i.test(e),a=o&&r&&i,l=/(micromessenger|wxwork|wecom|windowswechat|macwechat)/i.test(e),s=/(baiduboxapp|baidubrowser|baidusearch|baiduboxlite)/i.test(t),c=/ipad|iphone|ipod/.test(t)&&o;return n||a||l||s||c}var Ro=T(()=>{});async function Xm(e=document,t={}){let{embedFonts:n=!0,useProxy:o=""}=t,r=t.cache??t.cacheOpt??"full";la(r);try{await document.fonts?.ready}catch{}try{Rm()}catch{}U.session=U.session||{},U.session.styleCache||(U.session.styleCache=new WeakMap),U.image=U.image||new Map,U.background=U.background||new Map;try{await xa(e,void 0,U.session.styleCache,{useProxy:o})}catch{}let i=[],a=[];try{if(e&&e.nodeType===1){let s=e.querySelectorAll?Array.from(e.querySelectorAll("*")):[];a=[e,...s],i=[],e.tagName==="IMG"&&e.getAttribute("src")&&i.push(e),i.push(...Array.from(e.querySelectorAll?.("img[src]")||[]))}else e?.querySelectorAll&&(i=Array.from(e.querySelectorAll("img[src]")),a=Array.from(e.querySelectorAll("*")))}catch{}let l=[];for(let s of i){let c=s?.currentSrc||s?.src;if(c&&!U.image.has(c)){let d=Promise.resolve().then(async()=>{let p=await pt(c,{as:"dataURL",useProxy:o});p?.ok&&typeof p.data=="string"&&U.image.set(c,p.data)}).catch(()=>{});l.push(d)}}for(let s of a){let c="";try{c=s?.style?.backgroundImage||"",(!c||c==="none")&&(c=To(s).backgroundImage)}catch{}if(c&&c!=="none"){let d=c.match(/url\((?:[^()"']+|"(?:[^"]*)"|'(?:[^']*)')\)/gi)||[];for(let p of d){let u=Promise.resolve().then(()=>ko(p,{...t,useProxy:o})).catch(()=>{});l.push(u)}}}if(n)try{let s=ga(e),c=ba(e);if(typeof at=="function"?at():at){let d=new Set(Array.from(s).map(p=>String(p).split("__")[0]).filter(Boolean));await ya(d,3)}await ha({required:s,usedCodepoints:c,exclude:t.excludeFonts,localFonts:t.localFonts,useProxy:t.useProxy??o})}catch{}await Promise.allSettled(l)}var Gm=T(()=>{va();da();Ro()});function Ym(e){if(!e)return null;if(Array.isArray(e)){let[t,n]=e;return typeof t=="function"?t(n):t}if(typeof e=="object"&&"plugin"in e){let{plugin:t,options:n}=e;return typeof t=="function"?t(n):t}return typeof e=="function"?e():e}function Km(...e){let t=e.flat();for(let n of t){let o=Ym(n);o&&(Cr.some(r=>r&&r.name&&o.name&&r.name===o.name)||Cr.push(o))}}function Zm(e){return(e&&Array.isArray(e.plugins)?e.plugins:Cr)||Cr}async function Xt(e,t,n){let o=n,r=Zm(t);for(let i of r){let a=i&&typeof i[e]=="function"?i[e]:null;if(!a)continue;let l=await a(t,o);typeof l<"u"&&(o=l)}return o}async function Jm(e,t,n){let o=[],r=Zm(t);for(let i of r){let a=i&&typeof i[e]=="function"?i[e]:null;if(!a)continue;let l=await a(t,n);typeof l<"u"&&o.push(l)}return o}function dv(e){let t=[];if(Array.isArray(e))for(let n of e){let o=Ym(n);if(!o||!o.name)continue;let r=t.findIndex(i=>i&&i.name===o.name);r>=0&&t.splice(r,1),t.push(o)}for(let n of Cr)n&&n.name&&!t.some(o=>o.name===n.name)&&t.push(n);return Object.freeze(t)}function Qm(e,t,n=!1){return!e||e.plugins&&!n||(e.plugins=dv(t)),e}var Cr,ac=T(()=>{Cr=[]});function Mr(){dc++}function uv(e=document.documentElement){if(!th){th=!0;try{new MutationObserver(()=>Mr()).observe(e,{subtree:!0,childList:!0,characterData:!0,attributes:!0})}catch{}try{new MutationObserver(()=>Mr()).observe(document.head,{subtree:!0,childList:!0,characterData:!0,attributes:!0})}catch{}try{let t=document.fonts;t&&(t.addEventListener?.("loadingdone",Mr),t.ready?.then(()=>Mr()).catch(()=>{}))}catch{}}}function pv(e,t={}){let n={},o=e.getPropertyValue("visibility");for(let i=0;i<e.length;i++){let a=e[i],l=e.getPropertyValue(a);(a==="background-image"||a==="content")&&l.includes("url(")&&!l.includes("data:")&&(l="none"),n[a]=l}let r=["text-decoration-line","text-decoration-color","text-decoration-style","text-decoration-thickness","text-underline-offset","text-decoration-skip-ink"];for(let i of r)if(!n[i])try{let a=e.getPropertyValue(i);a&&(n[i]=a)}catch{}if(t.embedFonts){let i=["font-feature-settings","font-variation-settings","font-kerning","font-variant","font-variant-ligatures","font-optical-sizing"];for(let a of i)if(!n[a])try{let l=e.getPropertyValue(a);l&&(n[a]=l)}catch{}}return o==="hidden"&&(n.opacity="0"),n}function fv(e){let t=nh.get(e);return t||(t=Object.entries(e).sort((n,o)=>n[0]<o[0]?-1:n[0]>o[0]?1:0).map(([n,o])=>`${n}:${o}`).join(";"),nh.set(e,t),t)}function mv(e,t=null,n={}){let o=eh.get(e);if(o&&o.epoch===dc)return o.snapshot;let r=t||getComputedStyle(e),i=pv(r,n);return vv(e,r,i),eh.set(e,{epoch:dc,snapshot:i}),i}function hv(e,t){return e&&e.session&&e.persist?e:e&&(e.styleMap||e.styleCache||e.nodeMap)?{session:e,persist:{snapshotKeyCache:cc,defaultStyle:U.defaultStyle,baseStyle:U.baseStyle,image:U.image,resource:U.resource,background:U.background,font:U.font},options:t||{}}:{session:U.session,persist:{snapshotKeyCache:cc,defaultStyle:U.defaultStyle,baseStyle:U.baseStyle,image:U.image,resource:U.resource,background:U.background,font:U.font},options:e||t||{}}}async function No(e,t,n,o){if(e.tagName==="STYLE")return;let r=hv(n,o),i=r.options&&r.options.cache||"auto";if(i!=="disabled"&&uv(document.documentElement),i==="disabled"&&!r.session.__bumpedForDisabled&&(Mr(),cc.clear(),r.session.__bumpedForDisabled=!0),Er.has(e.tagName?.toLowerCase())){let u=e.getAttribute?.("style");u&&t.setAttribute("style",u)}let{session:a,persist:l}=r;a.styleCache.has(e)||a.styleCache.set(e,getComputedStyle(e));let s=a.styleCache.get(e),c=mv(e,s,r.options),d=fv(c),p=l.snapshotKeyCache.get(d);if(!p){let u=e.tagName?.toLowerCase()||"div";p=sa(c,u),l.snapshotKeyCache.set(d,p)}a.styleMap.set(t,p)}function gv(e){return e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof HTMLIFrameElement||e instanceof SVGElement||e instanceof HTMLObjectElement||e instanceof HTMLEmbedElement}function bv(e){return e.backgroundImage&&e.backgroundImage!=="none"||e.backgroundColor&&e.backgroundColor!=="rgba(0, 0, 0, 0)"&&e.backgroundColor!=="transparent"||(parseFloat(e.borderTopWidth)||0)>0||(parseFloat(e.borderBottomWidth)||0)>0||(parseFloat(e.paddingTop)||0)>0||(parseFloat(e.paddingBottom)||0)>0?!0:(e.overflowBlock||e.overflowY||"visible")!=="visible"}function yv(e){let t=e.parentElement;if(!t)return!1;let n=getComputedStyle(t).display||"";return n.includes("flex")||n.includes("grid")}function xv(e,t){if(e.textContent&&/\S/.test(e.textContent))return!0;let n=e.firstElementChild,o=e.lastElementChild;if(n&&n.tagName==="BR"||o&&o.tagName==="BR")return!0;let r=e.scrollHeight;if(r===0)return!1;let i=parseFloat(t.paddingTop)||0,a=parseFloat(t.paddingBottom)||0;return r>i+a}function vv(e,t,n){if(e instanceof HTMLElement&&e.style&&e.style.height)return;let o=e.tagName&&e.tagName.toLowerCase();if(!o||o!=="div"&&o!=="section"&&o!=="article"&&o!=="main"&&o!=="aside"&&o!=="header"&&o!=="footer"&&o!=="nav"&&o!=="ol"&&o!=="ul"&&o!=="li")return;let r=t.display||"";if(r.includes("flex")||r.includes("grid")||gv(e))return;let i=t.position;if(i==="absolute"||i==="fixed"||i==="sticky"||t.transform!=="none"||bv(t)||yv(e))return;let a=t.overflowX||t.overflow||"visible",l=t.overflowY||t.overflow||"visible";if(a!=="visible"||l!=="visible")return;let s=t.clip;s&&s!=="auto"&&s!=="rect(auto, auto, auto, auto)"||t.visibility==="hidden"||t.opacity==="0"||xv(e,t)&&(delete n.height,delete n["block-size"])}function wv(e,t){let n=t+"::"+e.toLowerCase(),o=oh.get(n);if(o)return o;let r=document,i=t==="http://www.w3.org/2000/svg"?r.createElementNS(t,e):r.createElement(e),a=r.createElement("div");a.style.cssText="position:absolute;left:-99999px;top:-99999px;contain:strict;display:block;",a.appendChild(i),r.documentElement.appendChild(a);let l=getComputedStyle(i),s={};for(let c of mh)s[c]=l.getPropertyValue(c)||"";return a.remove(),oh.set(n,s),s}function Ev(e,t){if(!(e instanceof Element)||!(t instanceof Element))return;let n=e.getAttribute?.("style"),o=!!(n&&n.includes("var("));if(!o&&e.attributes?.length){let i=e.attributes;for(let a=0;a<i.length;a++){let l=i[a];if(l&&typeof l.value=="string"&&l.value.includes("var(")){o=!0;break}}}let r=null;if(o)try{r=getComputedStyle(e)}catch{}if(o){let i=e.style;if(i&&i.length)for(let a=0;a<i.length;a++){let l=i[a],s=i.getPropertyValue(l);if(!s||!s.includes("var("))continue;let c=r&&r.getPropertyValue(l);if(c)try{t.style.setProperty(l,c.trim(),i.getPropertyPriority(l))}catch{}}}if(o&&e.attributes?.length){let i=e.attributes;for(let a=0;a<i.length;a++){let l=i[a];if(!l||typeof l.value!="string"||!l.value.includes("var("))continue;let s=l.name,c=r&&r.getPropertyValue(s);if(c)try{t.style.setProperty(s,c.trim())}catch{}}}if(!o){if(!r)try{r=getComputedStyle(e)}catch{r=null}if(!r)return;let i=e.namespaceURI||"html",a=wv(e.tagName,i);for(let l of mh){let s=r.getPropertyValue(l)||"",c=a[l]||"";if(s&&s!==c)try{t.style.setProperty(l,s.trim())}catch{}}}}function lc(e,t,n){return Promise.all(e.map(o=>new Promise(r=>{function i(){Kn(a=>{!(a&&typeof a.timeRemaining=="function")||a.timeRemaining()>0?t(o,r):i()},{fast:n})}i()})))}function Cv(e){return e=e.trim(),!e||/:not\(\s*\[data-sd-slotted\]\s*\)\s*$/.test(e)?e:`${e}:not([data-sd-slotted])`}function Sv(e,t,n=!0){return e.split(",").map(o=>o.trim()).filter(Boolean).map(o=>{if(o.startsWith(":where(")||o.startsWith("@"))return o;let r=n?Cv(o):o;return`:where(${t} ${r})`}).join(", ")}function Mv(e,t){return e?(e=e.replace(/:host\(([^)]+)\)/g,(n,o)=>`:where(${t}:is(${o.trim()}))`),e=e.replace(/:host\b/g,`:where(${t})`),e=e.replace(/:host-context\(([^)]+)\)/g,(n,o)=>`:where(:where(${o.trim()}) ${t})`),e=e.replace(/::slotted\(([^)]+)\)/g,(n,o)=>`:where(${t} ${o.trim()})`),e=e.replace(/(^|})(\s*)([^@}{]+){/g,(n,o,r,i)=>{let a=Sv(i,t,!0);return`${o}${r}${a}{`}),e):""}function Lv(e){return e.shadowScopeSeq=(e.shadowScopeSeq||0)+1,`s${e.shadowScopeSeq}`}function kv(e){let t="";try{e.querySelectorAll("style").forEach(o=>{t+=(o.textContent||"")+`
`});let n=e.adoptedStyleSheets||[];for(let o of n)try{if(o&&o.cssRules)for(let r of o.cssRules)t+=r.cssText+`
`}catch{}}catch{}return t}function Tv(e,t,n){if(!t)return;let o=document.createElement("style");o.setAttribute("data-sd",n),o.textContent=t,e.insertBefore(o,e.firstChild||null)}function _v(e,t){try{let n=e.currentSrc||e.src||"";if(!n)return;t.setAttribute("src",n),t.removeAttribute("srcset"),t.removeAttribute("sizes"),t.loading="eager",t.decoding="sync"}catch{}}function Rv(e){let t=new Set;if(!e)return t;let n=/var\(\s*(--[A-Za-z0-9_-]+)\b/g,o;for(;o=n.exec(e);)t.add(o[1]);return t}function Hv(e,t){try{let n=getComputedStyle(e).getPropertyValue(t).trim();if(n)return n}catch{}try{let n=getComputedStyle(document.documentElement).getPropertyValue(t).trim();if(n)return n}catch{}return""}function Nv(e,t,n){let o=[];for(let r of t){let i=Hv(e,r);i&&o.push(`${r}: ${i};`)}return o.length?`${n}{${o.join("")}}
`:""}function Av(e){e&&(e.nodeType===Node.ELEMENT_NODE&&e.setAttribute("data-sd-slotted",""),e.querySelectorAll&&e.querySelectorAll("*").forEach(t=>t.setAttribute("data-sd-slotted","")))}async function Pv(e,t=3){let n=()=>{try{return e.contentDocument||e.contentWindow?.document||null}catch{return null}},o=n(),r=0;for(;r<t&&(!o||!o.body&&!o.documentElement);)await new Promise(i=>setTimeout(i,0)),o=n(),r++;return o&&(o.body||o.documentElement)?o:null}function $v(e){let t=e.getBoundingClientRect(),n=0,o=0,r=0,i=0;try{let s=getComputedStyle(e);n=parseFloat(s.borderLeftWidth)||0,o=parseFloat(s.borderRightWidth)||0,r=parseFloat(s.borderTopWidth)||0,i=parseFloat(s.borderBottomWidth)||0}catch{}let a=Math.max(0,Math.round(t.width-(n+o))),l=Math.max(0,Math.round(t.height-(r+i)));return{contentWidth:a,contentHeight:l,rect:t}}function Dv(e,t,n){let o=e.createElement("style");return o.setAttribute("data-sd-iframe-pin",""),o.textContent=`html, body {margin: 0 !important;padding: 0 !important;width: ${t}px !important;height: ${n}px !important;min-width: ${t}px !important;min-height: ${n}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}`,(e.head||e.documentElement).appendChild(o),()=>{try{o.remove()}catch{}}}async function Iv(e,t,n){let o=await Pv(e,3);if(!o)throw new Error("iframe document not accessible/ready");let{contentWidth:r,contentHeight:i,rect:a}=$v(e),l=n?.snap;if(!l||typeof l.toPng!="function")throw new Error("snapdom.toPng not available in iframe or window");let s={...n,scale:1},c=Dv(o,r,i),d;try{d=await l.toPng(o.documentElement,s)}finally{c()}d.style.display="block",d.style.width=`${r}px`,d.style.height=`${i}px`;let p=document.createElement("div");return t.nodeMap.set(p,e),No(e,p,t,n),p.style.overflow="hidden",p.style.display="block",p.style.width||(p.style.width=`${Math.round(a.width)}px`),p.style.height||(p.style.height=`${Math.round(a.height)}px`),p.appendChild(d),p}async function Lr(e){if(U.resource?.has(e))return U.resource.get(e);if(Sr.has(e))return Sr.get(e);let t=(async()=>{let n=await pt(e,{as:"dataURL",silent:!0});if(!n.ok||typeof n.data!="string")throw new Error(`[snapDOM] Failed to read blob URL: ${e}`);return U.resource?.set(e,n.data),n.data})();Sr.set(e,t);try{let n=await t;return Sr.set(e,n),n}catch(n){throw Sr.delete(e),n}}async function rh(e){if(!e||e.indexOf("blob:")===-1)return e;let t=Array.from(new Set(e.match(Ov)||[]));if(t.length===0)return e;let n=e;for(let o of t)try{let r=await Lr(o);n=n.split(o).join(r)}catch{}return n}function wa(e){return typeof e=="string"&&e.startsWith("blob:")}function zv(e){return(e||"").split(",").map(t=>t.trim()).filter(Boolean).map(t=>{let n=t.match(/^(\S+)(\s+.+)?$/);return n?{url:n[1],desc:n[2]||""}:null}).filter(Boolean)}function Fv(e){return e.map(t=>t.desc?`${t.url} ${t.desc.trim()}`:t.url).join(", ")}async function Vv(e){if(!e)return;let t=e.querySelectorAll?e.querySelectorAll("img"):[];for(let a of t)try{let l=a.getAttribute("src")||a.currentSrc||"";if(wa(l)){let c=await Lr(l);a.setAttribute("src",c)}let s=a.getAttribute("srcset");if(s&&s.includes("blob:")){let c=zv(s),d=!1;for(let p of c)if(wa(p.url))try{p.url=await Lr(p.url),d=!0}catch{}d&&a.setAttribute("srcset",Fv(c))}}catch{}let n=e.querySelectorAll?e.querySelectorAll("image"):[];for(let a of n)try{let l="http://www.w3.org/1999/xlink",s=a.getAttribute("href")||a.getAttributeNS?.(l,"href");if(wa(s)){let c=await Lr(s);a.setAttribute("href",c),a.removeAttributeNS?.(l,"href")}}catch{}let o=e.querySelectorAll?e.querySelectorAll("[style*='blob:']"):[];for(let a of o)try{let l=a.getAttribute("style");if(l&&l.includes("blob:")){let s=await rh(l);a.setAttribute("style",s)}}catch{}let r=e.querySelectorAll?e.querySelectorAll("style"):[];for(let a of r)try{let l=a.textContent||"";l.includes("blob:")&&(a.textContent=await rh(l))}catch{}let i=["poster"];for(let a of i){let l=e.querySelectorAll?e.querySelectorAll(`[${a}^='blob:']`):[];for(let s of l)try{let c=s.getAttribute(a);wa(c)&&s.setAttribute(a,await Lr(c))}catch{}}}async function Ea(e,t,n){if(!e)throw new Error("Invalid node");let o=new Set,r=null,i=null;if(e.nodeType===Node.ELEMENT_NODE){let c=(e.localName||e.tagName||"").toLowerCase();if(e.id==="snapdom-sandbox"||e.hasAttribute("data-snapdom-sandbox")||tc.has(c))return null}if(e.nodeType===Node.TEXT_NODE||e.nodeType!==Node.ELEMENT_NODE)return e.cloneNode(!0);if(e.getAttribute("data-capture")==="exclude"){if(n.excludeMode==="hide"){let c=document.createElement("div"),d=e.getBoundingClientRect();return c.style.cssText=`display:inline-block;width:${d.width}px;height:${d.height}px;visibility:hidden;`,c}else if(n.excludeMode==="remove")return null}if(n.exclude&&Array.isArray(n.exclude))for(let c of n.exclude)try{if(e.matches?.(c)){if(n.excludeMode==="hide"){let d=document.createElement("div"),p=e.getBoundingClientRect();return d.style.cssText=`display:inline-block;width:${p.width}px;height:${p.height}px;visibility:hidden;`,d}else if(n.excludeMode==="remove")return null}}catch(d){console.warn(`Invalid selector in exclude option: ${c}`,d)}if(typeof n.filter=="function")try{if(!n.filter(e)){if(n.filterMode==="hide"){let c=document.createElement("div"),d=e.getBoundingClientRect();return c.style.cssText=`display:inline-block;width:${d.width}px;height:${d.height}px;visibility:hidden;`,c}else if(n.filterMode==="remove")return null}}catch(c){console.warn("Error in filter function:",c)}if(e.tagName==="IFRAME"){let c=!1;try{c=!!(e.contentDocument||e.contentWindow?.document)}catch{c=!1}if(c)try{return await Iv(e,t,n)}catch(d){console.warn("[SnapDOM] iframe rasterization failed, fallback:",d)}if(n.placeholders){let d=document.createElement("div");return d.style.cssText=`width:${e.offsetWidth}px;height:${e.offsetHeight}px;background-image:repeating-linear-gradient(45deg,#ddd,#ddd 5px,#f9f9f9 5px,#f9f9f9 10px);display:flex;align-items:center;justify-content:center;font-size:12px;color:#555;border:1px solid #aaa;`,No(e,d,t,n),d}else{let d=e.getBoundingClientRect(),p=document.createElement("div");return p.style.cssText=`display:inline-block;width:${d.width}px;height:${d.height}px;visibility:hidden;`,No(e,p,t,n),p}}if(e.getAttribute("data-capture")==="placeholder"){let c=e.cloneNode(!1);t.nodeMap.set(c,e),No(e,c,t,n);let d=document.createElement("div");return d.textContent=e.getAttribute("data-placeholder-text")||"",d.style.cssText="color:#666;font-size:12px;text-align:center;line-height:1.4;padding:0.5em;box-sizing:border-box;",c.appendChild(d),c}if(e.tagName==="CANVAS"){let c="";try{let p=e.getContext("2d",{willReadFrequently:!0});try{p&&p.getImageData(0,0,1,1)}catch{}if(await new Promise(u=>requestAnimationFrame(u)),c=e.toDataURL("image/png"),!c||c==="data:,"){try{p&&p.getImageData(0,0,1,1)}catch{}if(await new Promise(u=>requestAnimationFrame(u)),c=e.toDataURL("image/png"),!c||c==="data:,"){let u=document.createElement("canvas");u.width=e.width,u.height=e.height;let g=u.getContext("2d");g&&(g.drawImage(e,0,0),c=u.toDataURL("image/png"))}}}catch{}let d=document.createElement("img");try{d.decoding="sync",d.loading="eager"}catch{}c&&(d.src=c),d.width=e.width,d.height=e.height;try{let p=getComputedStyle(e);p.width&&(d.style.width=p.width),p.height&&(d.style.height=p.height)}catch{}return t.nodeMap.set(d,e),No(e,d,t,n),d}let a;try{if(a=e.cloneNode(!1),Ev(e,a),t.nodeMap.set(a,e),e.tagName==="IMG"){_v(e,a);try{let c=e.getBoundingClientRect(),d=Math.round(c.width||0),p=Math.round(c.height||0);if(!d||!p){let u=window.getComputedStyle(e),g=parseFloat(u.width)||0,h=parseFloat(u.height)||0,m=parseInt(e.getAttribute("width")||"",10)||0,b=parseInt(e.getAttribute("height")||"",10)||0,x=e.width||e.naturalWidth||0,E=e.height||e.naturalHeight||0;d=Math.round(d||g||m||x||0),p=Math.round(p||h||b||E||0)}d&&(a.dataset.snapdomWidth=String(d)),p&&(a.dataset.snapdomHeight=String(p))}catch{}try{let c=e.getAttribute("style")||"",d=window.getComputedStyle(e),p=b=>{let x=c.match(new RegExp(`${b}\\s*:\\s*([^;]+)`,"i")),E=x?x[1].trim():d.getPropertyValue(b);return/%|auto/i.test(String(E||""))},u=parseInt(a.dataset.snapdomWidth||"0",10),g=parseInt(a.dataset.snapdomHeight||"0",10),h=p("width")||!u,m=p("height")||!g;h&&u&&(a.style.width=`${u}px`),m&&g&&(a.style.height=`${g}px`),u&&(a.style.minWidth=`${u}px`),g&&(a.style.minHeight=`${g}px`)}catch{}}}catch(c){throw console.error("[Snapdom] Failed to clone node:",e,c),c}if(e instanceof HTMLTextAreaElement){let c=e.getBoundingClientRect();a.style.width=`${c.width}px`,a.style.height=`${c.height}px`}if(e instanceof HTMLInputElement&&(a.value=e.value,a.setAttribute("value",e.value),e.checked!==void 0&&(a.checked=e.checked,e.checked&&a.setAttribute("checked",""),e.indeterminate&&(a.indeterminate=e.indeterminate))),e instanceof HTMLSelectElement&&(r=e.value),e instanceof HTMLTextAreaElement&&(i=e.value),No(e,a,t,n),e.shadowRoot){let c=function(E,w){if(E.nodeType===Node.ELEMENT_NODE&&E.tagName==="STYLE")return w(null);Ea(E,t,n).then(v=>{w(v||null)}).catch(()=>{w(null)})};try{let E=e.shadowRoot.querySelectorAll("slot");for(let w of E){let v=[];try{v=w.assignedNodes?.({flatten:!0})||w.assignedNodes?.()||[]}catch{v=w.assignedNodes?.()||[]}for(let L of v)o.add(L)}}catch{}let d=Lv(t),p=`[data-sd="${d}"]`;try{a.setAttribute("data-sd",d)}catch{}let u=kv(e.shadowRoot),g=Mv(u,p),h=Rv(u),m=Nv(e,h,p);Tv(a,m+g,d);let b=document.createDocumentFragment(),x=await lc(Array.from(e.shadowRoot.childNodes),c,n.fast);b.append(...x.filter(E=>!!E)),a.appendChild(b)}if(e.tagName==="SLOT"){let c=function(h,m){Ea(h,t,n).then(b=>{b&&Av(b),m(b||null)}).catch(()=>{m(null)})},d=e.assignedNodes?.({flatten:!0})||[],p=d.length>0?d:Array.from(e.childNodes),u=document.createDocumentFragment(),g=await lc(Array.from(p),c,n.fast);return u.append(...g.filter(h=>!!h)),u}function l(c,d){if(o.has(c))return d(null);Ea(c,t,n).then(p=>{d(p||null)}).catch(()=>{d(null)})}let s=await lc(Array.from(e.childNodes),l,n.fast);if(a.append(...s.filter(c=>!!c)),r!==null&&a instanceof HTMLSelectElement){a.value=r;for(let c of a.options)c.value===r?c.setAttribute("selected",""):c.removeAttribute("selected")}return i!==null&&a instanceof HTMLTextAreaElement&&(a.textContent=i),a}function Bv(e){return/\bcounter\s*\(|\bcounters\s*\(/.test(e||"")}function Wv(e){return(e||"").replace(/"([^"]*)"/g,"$1")}function ih(e,t=!1){let n="",o=Math.max(1,e);for(;o>0;)o--,n=String.fromCharCode(97+o%26)+n,o=Math.floor(o/26);return t?n.toUpperCase():n}function ah(e,t=!0){let n=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],o=Math.max(1,Math.min(3999,e)),r="";for(let[i,a]of n)for(;o>=i;)r+=a,o-=i;return t?r:r.toLowerCase()}function lh(e,t){switch((t||"decimal").toLowerCase()){case"decimal":return String(Math.max(0,e));case"decimal-leading-zero":return(e<10?"0":"")+String(Math.max(0,e));case"lower-alpha":return ih(e,!1);case"upper-alpha":return ih(e,!0);case"lower-roman":return ah(e,!1);case"upper-roman":return ah(e,!0);default:return String(Math.max(0,e))}}function qv(e){let t=()=>U?.session?.__counterEpoch??0,n=t(),o=new WeakMap,r=e instanceof Document?e.documentElement:e,i=u=>u&&u.tagName==="LI",a=u=>{let g=0,h=u?.parentElement;if(!h)return 0;for(let m of h.children){if(m===u)break;m.tagName==="LI"&&g++}return g},l=u=>{let g=new Map;for(let[h,m]of u)g.set(h,m.slice());return g},s=(u,g,h)=>{let m=l(u),b;try{b=h.style?.counterReset||getComputedStyle(h).counterReset}catch{}if(b&&b!=="none")for(let E of b.split(",")){let w=E.trim().split(/\s+/),v=w[0],L=Number.isFinite(Number(w[1]))?Number(w[1]):0;if(!v)continue;let k=g.get(v);if(k&&k.length){let N=k.slice();N.push(L),m.set(v,N)}else m.set(v,[L])}let x;try{x=h.style?.counterIncrement||getComputedStyle(h).counterIncrement}catch{}if(x&&x!=="none")for(let E of x.split(",")){let w=E.trim().split(/\s+/),v=w[0],L=Number.isFinite(Number(w[1]))?Number(w[1]):1;if(!v)continue;let k=m.get(v)||[];k.length===0&&k.push(0),k[k.length-1]+=L,m.set(v,k)}try{if(getComputedStyle(h).display==="list-item"&&i(h)){let E=h.parentElement,w=1;if(E&&E.tagName==="OL"){let L=E.getAttribute("start"),k=Number.isFinite(Number(L))?Number(L):1,N=a(h),I=h.getAttribute("value");w=Number.isFinite(Number(I))?Number(I):k+N}else w=1+a(h);let v=m.get("list-item")||[];v.length===0&&v.push(0),v[v.length-1]=w,m.set("list-item",v)}}catch{}return m},c=(u,g,h)=>{let m=s(h,g,u);o.set(u,m);let b=m;for(let x of u.children)b=c(x,m,b);return m},d=new Map;c(r,d,d);function p(){let u=t();if(u!==n){n=u;let g=new Map;c(r,g,g)}}return{get(u,g){p();let h=o.get(u)?.get(g);return h&&h.length?h[h.length-1]:0},getStack(u,g){p();let h=o.get(u)?.get(g);return h?h.slice():[]}}}function jv(e,t,n){if(!e||e==="none")return e;try{let o=/\b(counter|counters)\s*\(([^)]+)\)/g,r=e.replace(o,(i,a,l)=>{let s=String(l).split(",").map(c=>c.trim());if(a==="counter"){let c=s[0]?.replace(/^["']|["']$/g,""),d=(s[1]||"decimal").toLowerCase(),p=n.get(t,c);return lh(p,d)}else{let c=s[0]?.replace(/^["']|["']$/g,""),d=s[1]?.replace(/^["']|["']$/g,"")??"",p=(s[2]||"decimal").toLowerCase(),u=n.getStack(t,c);return u.length?u.map(g=>lh(g,p)).join(d):""}});return Wv(r)}catch{return"- "}}function Uv(e,t){let n=hh(e);return t?(t.__pseudoPreflightFp!==n&&(t.__pseudoPreflight=dh(e),t.__pseudoPreflightFp=n),!!t.__pseudoPreflight):dh(e)}function uc(e){try{return e&&e.cssRules?e.cssRules:null}catch{return null}}function hh(e){let t=e.querySelectorAll('style,link[rel~="stylesheet"]'),n=`n:${t.length}|`,o=0;for(let i=0;i<t.length;i++){let a=t[i];if(a.tagName==="STYLE"){let l=a.textContent?a.textContent.length:0;n+=`S${l}|`;let s=a.sheet,c=s?uc(s):null;c&&(o+=c.length)}else{let l=a.getAttribute("href")||"",s=a.getAttribute("media")||"all";n+=`L${l}|m:${s}|`;let c=a.sheet,d=c?uc(c):null;d&&(o+=d.length)}}let r=e.adoptedStyleSheets;return n+=`ass:${Array.isArray(r)?r.length:0}|tr:${o}`,n}function ch(e,t,n){let o=uc(e);if(!o)return!1;for(let r=0;r<o.length;r++){if(n.budget<=0)return!1;let i=o[r],a=i&&i.cssText?i.cssText:"";n.budget--;for(let l of t)if(a.includes(l))return!0;if(i&&i.cssRules&&i.cssRules.length)for(let l=0;l<i.cssRules.length&&n.budget>0;l++){let s=i.cssRules[l],c=s&&s.cssText?s.cssText:"";n.budget--;for(let d of t)if(c.includes(d))return!0}if(n.budget<=0)return!1}return!1}function dh(e=document){let t=hh(e),n=Ho.get(e);if(n&&n.fingerprint===t)return n.result;let o=["::before","::after","::first-letter",":before",":after",":first-letter","counter(","counters(","counter-increment","counter-reset"],r=e.querySelectorAll("style");for(let a=0;a<r.length;a++){let l=r[a].textContent||"";for(let s of o)if(l.includes(s))return Ho.set(e,{fingerprint:t,result:!0}),!0}let i=e.adoptedStyleSheets;if(Array.isArray(i)&&i.length){let a={budget:sh};try{for(let l of i)if(ch(l,o,a))return Ho.set(e,{fingerprint:t,result:!0}),!0}catch{}}{let a=e.querySelectorAll('style,link[rel~="stylesheet"]'),l={budget:sh};for(let s=0;s<a.length&&l.budget>0;s++){let c=a[s],d=null;if(c.tagName,d=c.sheet||null,d&&ch(d,o,l))return Ho.set(e,{fingerprint:t,result:!0}),!0}}return e.querySelector('[style*="counter("], [style*="counters("]')?(Ho.set(e,{fingerprint:t,result:!0}),!0):(Ho.set(e,{fingerprint:t,result:!1}),!1)}function Xv(e){return(e||"").replace(/"([^"]*)"/g,"$1")}function Gv(e){if(!e)return"";let t=[],n=/"([^"]*)"/g,o;for(;o=n.exec(e);)t.push(o[1]);return t.length?t.join(""):Xv(e)}function pc(e,t){let n=e.parentElement,o=n?Ao.get(n):null;return o?{get(r,i){let a=t.get(r,i),l=o.get(i);return typeof l=="number"?Math.max(a,l):a},getStack(r,i){let a=t.getStack(r,i);if(!a.length)return a;let l=o.get(i);if(typeof l=="number"){let s=a.slice();return s[s.length-1]=Math.max(s[s.length-1],l),s}return a}}:t}function fc(e,t,n){let o=new Map;function r(s){let c=[];if(!s||s==="none")return c;for(let d of String(s).split(",")){let p=d.trim().split(/\s+/),u=p[0],g=Number.isFinite(Number(p[1]))?Number(p[1]):void 0;u&&c.push({name:u,num:g})}return c}let i=r(t?.counterReset),a=r(t?.counterIncrement);function l(s){if(o.has(s))return o.get(s).slice();let c=n.getStack(e,s);c=c.length?c.slice():[];let d=i.find(u=>u.name===s);if(d){let u=Number.isFinite(d.num)?d.num:0;c=c.length?[...c,u]:[u]}let p=a.find(u=>u.name===s);if(p){let u=Number.isFinite(p.num)?p.num:1;c.length===0&&(c=[0]),c[c.length-1]+=u}return o.set(s,c.slice()),c}return{get(s,c){let d=l(c);return d.length?d[d.length-1]:0},getStack(s,c){return l(c)},__incs:a}}function Yv(e,t,n){let o;try{o=getComputedStyle(e,t)}catch{}let r=o?.content;if(!r||r==="none"||r==="normal")return{text:"",incs:[]};let i=pc(e,n),a=fc(e,o,i),l=Bv(r)?jv(r,e,a):r;return{text:Gv(l),incs:a.__incs||[]}}async function gh(e,t,n,o){if(!(e instanceof Element)||!(t instanceof Element))return;let r=e.ownerDocument||document;if(!Uv(r,n))return;let i=U?.session?.__counterEpoch??0;if(uh!==i&&(Ao=new WeakMap,n&&(n.__counterCtx=null),uh=i),!n.__counterCtx)try{n.__counterCtx=qv(e.ownerDocument||document)}catch{}let a=n.__counterCtx;for(let c of["::before","::after","::first-letter"])try{let d=To(e,c);if(!d||d.content==="none"&&d.backgroundImage==="none"&&d.backgroundColor==="transparent"&&(d.borderStyle==="none"||parseFloat(d.borderWidth)===0)&&(!d.transform||d.transform==="none")&&d.display==="inline")continue;if(c==="::first-letter"){let X=getComputedStyle(e);if(!(d.color!==X.color||d.fontSize!==X.fontSize||d.fontWeight!==X.fontWeight))continue;let K=Array.from(t.childNodes).find(be=>be.nodeType===Node.TEXT_NODE&&be.textContent?.trim().length>0);if(!K)continue;let ge=K.textContent,te=ge.match(/^([^\p{L}\p{N}\s]*[\p{L}\p{N}](?:['’])?)/u)?.[0],Ee=ge.slice(te?.length||0);if(!te||/[\uD800-\uDFFF]/.test(te))continue;let ve=document.createElement("span");ve.textContent=te,ve.dataset.snapdomPseudo="::first-letter";let Te=nc(d),Ce=sa(Te,"span");n.styleMap.set(ve,Ce);let Se=document.createTextNode(Ee);t.replaceChild(Se,K),t.insertBefore(ve,Se);continue}let p=d.content??"",u=p===""||p==="none"||p==="normal",{text:g,incs:h}=Yv(e,c,a),m=d.backgroundImage,b=d.backgroundColor,x=d.fontFamily,E=parseInt(d.fontSize)||32,w=parseInt(d.fontWeight)||!1,v=d.color||"#000",L=d.borderStyle,k=parseFloat(d.borderWidth),N=d.transform,I=Ut(x),_=!u&&g!=="",$=m&&m!=="none",O=b&&b!=="transparent"&&b!=="rgba(0, 0, 0, 0)",F=L&&L!=="none"&&k>0,A=N&&N!=="none";if(!(_||$||O||F||A)){if(h&&h.length&&e.parentElement){let X=Ao.get(e.parentElement)||new Map;for(let{name:K}of h){if(!K)continue;let ge=pc(e,a),te=fc(e,getComputedStyle(e,c),ge).get(e,K);X.set(K,te)}Ao.set(e.parentElement,X)}continue}let V=document.createElement("span");V.dataset.snapdomPseudo=c,V.style.pointerEvents="none";let Z=nc(d),se=sa(Z,"span");if(n.styleMap.set(V,se),I&&g&&g.length===1){let{dataUrl:X,width:K,height:ge}=await Vm(g,x,w,E,v),te=document.createElement("img");te.src=X,te.style=`height:${E}px;width:${K/ge*E}px;object-fit:contain;`,V.appendChild(te),t.dataset.snapdomHasIcon="true"}else if(g&&g.startsWith("url(")){let X=wr(g);if(X?.trim())try{let K=document.createElement("img"),ge=await pt(vr(X),{as:"dataURL",useProxy:o.useProxy});K.src=ge.data,K.style=`width:${E}px;height:auto;object-fit:contain;`,V.appendChild(K)}catch(K){console.error(`[snapdom] Error in pseudo ${c} for`,e,K)}}else!I&&_&&(V.textContent=g);V.style.backgroundImage="none","maskImage"in V.style&&(V.style.maskImage="none"),"webkitMaskImage"in V.style&&(V.style.webkitMaskImage="none");try{V.style.backgroundRepeat=d.backgroundRepeat,V.style.backgroundSize=d.backgroundSize,d.backgroundPositionX&&d.backgroundPositionY?(V.style.backgroundPositionX=d.backgroundPositionX,V.style.backgroundPositionY=d.backgroundPositionY):V.style.backgroundPosition=d.backgroundPosition,V.style.backgroundOrigin=d.backgroundOrigin,V.style.backgroundClip=d.backgroundClip,V.style.backgroundAttachment=d.backgroundAttachment,V.style.backgroundBlendMode=d.backgroundBlendMode}catch{}if($)try{let X=ca(m),K=await Promise.all(X.map(ko));V.style.backgroundImage=K.join(", ")}catch(X){console.warn(`[snapdom] Failed to inline background-image for ${c}`,X)}O&&(V.style.backgroundColor=b);let ce=V.childNodes.length>0||V.textContent?.trim()!==""||$||O||F||A;if(h&&h.length&&e.parentElement){let X=Ao.get(e.parentElement)||new Map,K=pc(e,a),ge=fc(e,getComputedStyle(e,c),K);for(let{name:te}of h){if(!te)continue;let Ee=ge.get(e,te);X.set(te,Ee)}Ao.set(e.parentElement,X)}if(!ce)continue;c==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V)}catch(d){console.warn(`[snapdom] Failed to capture ${c} for`,e,d)}let l=Array.from(e.children),s=Array.from(t.children).filter(c=>!c.dataset.snapdomPseudo);for(let c=0;c<Math.min(l.length,s.length);c++)await gh(l[c],s[c],n,o)}function Kv(e,t){if(!e||!(e instanceof Element))return;let n=e.ownerDocument||document,o=t||n,r=e instanceof SVGSVGElement?[e]:Array.from(e.querySelectorAll("svg"));if(r.length===0)return;let i=/url\(\s*#([^)]+)\)/g,a=["fill","stroke","filter","clip-path","mask","marker","marker-start","marker-mid","marker-end"],l=v=>window.CSS&&CSS.escape?CSS.escape(v):v.replace(/[^a-zA-Z0-9_-]/g,"\\$&"),s="http://www.w3.org/1999/xlink",c=v=>{if(!v||!v.getAttribute)return null;let L=v.getAttribute("href")||v.getAttribute("xlink:href")||(typeof v.getAttributeNS=="function"?v.getAttributeNS(s,"href"):null);if(L)return L;let k=v.attributes;if(!k)return null;for(let N=0;N<k.length;N++){let I=k[N];if(!I||!I.name)continue;if(I.name==="href")return I.value;let _=I.name.indexOf(":");if(_!==-1&&I.name.slice(_+1)==="href")return I.value}return null},d=new Set(Array.from(e.querySelectorAll("[id]")).map(v=>v.id)),p=new Set,u=!1,g=(v,L=null)=>{if(!v)return;i.lastIndex=0;let k;for(;k=i.exec(v);){u=!0;let N=(k[1]||"").trim();N&&(d.has(N)||(p.add(N),L&&!L.has(N)&&L.add(N)))}},h=v=>{let L=v.querySelectorAll("use");for(let N of L){let I=c(N);if(!I||!I.startsWith("#"))continue;u=!0;let _=I.slice(1).trim();_&&!d.has(_)&&p.add(_)}let k=v.querySelectorAll('*[style*="url("],*[fill^="url("], *[stroke^="url("],*[filter^="url("],*[clip-path^="url("],*[mask^="url("],*[marker^="url("],*[marker-start^="url("],*[marker-mid^="url("],*[marker-end^="url("]');for(let N of k){g(N.getAttribute("style")||"");for(let I of a)g(N.getAttribute(I))}};for(let v of r)h(v);if(!u)return;let m=e.querySelector("svg.inline-defs-container");m||(m=n.createElementNS("http://www.w3.org/2000/svg","svg"),m.classList.add("inline-defs-container"),m.setAttribute("aria-hidden","true"),m.setAttribute("style","position:absolute;width:0;height:0;overflow:hidden"),e.insertBefore(m,e.firstChild||null));let b=m.querySelector("defs")||null,x=v=>{if(!v||d.has(v))return null;let L=l(v),k=N=>{let I=o.querySelector(N);return I&&!e.contains(I)?I:null};return k(`svg defs > *#${L}`)||k(`svg > symbol#${L}`)||k(`*#${L}`)};if(!p.size)return;let E=new Set(p),w=new Set;for(;E.size;){let v=E.values().next().value;if(E.delete(v),!v||d.has(v)||w.has(v))continue;let L=x(v);if(!L){w.add(v);continue}b||(b=n.createElementNS("http://www.w3.org/2000/svg","defs"),m.appendChild(b));let k=L.cloneNode(!0);k.id||k.setAttribute("id",v),b.appendChild(k),w.add(v),d.add(v);let N=[k,...k.querySelectorAll("*")];for(let I of N){let _=c(I);if(_&&_.startsWith("#")){let O=_.slice(1).trim();O&&!d.has(O)&&!w.has(O)&&E.add(O)}let $=I.getAttribute?.("style")||"";$&&g($,E);for(let O of a){let F=I.getAttribute?.(O);F&&g(F,E)}}}}function Zv(e,t){if(!e||!t)return;let n=e.scrollTop||0;if(!n)return;getComputedStyle(t).position==="static"&&(t.style.position="relative");let o=e.getBoundingClientRect(),r=e.clientHeight,i="data-snap-ph",a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);for(;a.nextNode();){let l=a.currentNode,s=getComputedStyle(l),c=s.position;if(c!=="sticky"&&c!=="-webkit-sticky")continue;let d=ph(s.top),p=ph(s.bottom);if(d==null&&p==null)continue;let u=Jv(l,e),g=Qv(t,u,i);if(!g)continue;let h=l.getBoundingClientRect(),m=h.width,b=h.height,x=h.left-o.left;if(!(m>0&&b>0)||!Number.isFinite(x))continue;let E=d!=null?d+n:n+(r-b-p);if(!Number.isFinite(E))continue;let w=Number.parseInt(s.zIndex,10),v=Number.isFinite(w),L=v?Math.max(w,1)+1:2,k=v?w-1:0,N=g.cloneNode(!1);N.setAttribute(i,"1"),N.style.position="sticky",N.style.left=`${x}px`,N.style.top=`${E}px`,N.style.width=`${m}px`,N.style.height=`${b}px`,N.style.visibility="hidden",N.style.zIndex=String(k),N.style.overflow="hidden",N.style.background="transparent",N.style.boxShadow="none",N.style.filter="none",g.parentElement?.insertBefore(N,g),g.style.position="absolute",g.style.left=`${x}px`,g.style.top=`${E}px`,g.style.bottom="auto",g.style.zIndex=String(L),g.style.pointerEvents="none"}}function ph(e){if(!e||e==="auto")return null;let t=Number.parseFloat(e);return Number.isFinite(t)?t:null}function Jv(e,t){let n=[];for(let o=e;o&&o!==t;){let r=o.parentElement;if(!r)break;n.push(Array.prototype.indexOf.call(r.children,o)),o=r}return n.reverse()}function Qv(e,t,n){let o=e;for(let r=0;r<t.length;r++)if(o=ew(o,n)[t[r]],!o)return null;return o instanceof HTMLElement?o:null}function ew(e,t){let n=[],o=e.children;for(let r=0;r<o.length;r++){let i=o[r];i.hasAttribute(t)||n.push(i)}return n}function tw(e){let t=getComputedStyle(e),n=t.outlineStyle,o=t.outlineWidth,r=t.borderStyle,i=t.borderWidth,a=n!=="none"&&parseFloat(o)>0,l=r==="none"||parseFloat(i)===0;a&&l&&(e.style.border=`${o} solid transparent`)}async function nw(e,t={}){let n={styleMap:U.session.styleMap,styleCache:U.session.styleCache,nodeMap:U.session.nodeMap},o,r="",i="";tw(e);try{Kv(e)}catch(s){console.warn("inlineExternal defs or symbol failed:",s)}try{o=await Ea(e,n,t,e)}catch(s){throw console.warn("deepClone failed:",s),s}try{await gh(e,o,n,t)}catch(s){console.warn("inlinePseudoElements failed:",s)}await Vv(o);try{let s=o.querySelectorAll("style[data-sd]");for(let c of s)i+=c.textContent||"",c.remove()}catch{}let a=$m(n.styleMap);r=Array.from(a.entries()).map(([s,c])=>`.${c}{${s}}`).join(""),r=i+r;for(let[s,c]of n.styleMap.entries()){if(s.tagName==="STYLE")continue;if(s.getRootNode&&s.getRootNode()instanceof ShadowRoot){s.setAttribute("style",c.replace(/;/g,"; "));continue}let d=a.get(c);d&&s.classList.add(d);let p=s.style?.backgroundImage,u=s.dataset?.snapdomHasIcon;p&&p!=="none"&&(s.style.backgroundImage=p),u&&(s.style.verticalAlign="middle",s.style.display="inline")}for(let[s,c]of n.nodeMap.entries()){let d=c.scrollLeft,p=c.scrollTop;if((d||p)&&s instanceof HTMLElement){s.style.overflow="hidden",s.style.scrollbarWidth="none",s.style.msOverflowStyle="none";let u=document.createElement("div");for(u.style.transform=`translate(${-d}px, ${-p}px)`,u.style.willChange="transform",u.style.display="inline-block",u.style.width="100%";s.firstChild;)u.appendChild(s.firstChild);s.appendChild(u)}}let l=o instanceof HTMLElement&&o.firstElementChild instanceof HTMLElement?o.firstElementChild:o;if(Zv(e,l),e===n.nodeMap.get(o)){let s=n.styleCache.get(e)||window.getComputedStyle(e);n.styleCache.set(e,s);let c=_m(s.transform);o.style.margin="0",o.style.top="auto",o.style.left="auto",o.style.right="auto",o.style.bottom="auto",o.style.animation="none",o.style.transition="none",o.style.willChange="auto",o.style.float="none",o.style.clear="none",o.style.transform=c||""}for(let[s,c]of n.nodeMap.entries())c.tagName==="PRE"&&(s.style.marginTop="0",s.style.marginBlockStart="0");return{clone:o,classCSS:r,styleCache:n.styleCache}}function ow(e){let t=parseInt(e.dataset?.snapdomWidth||"",10)||0,n=parseInt(e.dataset?.snapdomHeight||"",10)||0,o=parseInt(e.getAttribute("width")||"",10)||0,r=parseInt(e.getAttribute("height")||"",10)||0,i=parseFloat(e.style?.width||"")||0,a=parseFloat(e.style?.height||"")||0,l=t||i||o||e.width||e.naturalWidth||100,s=n||a||r||e.height||e.naturalHeight||100;return{width:l,height:s}}async function rw(e,t={}){let n=Array.from(e.querySelectorAll("img")),o=async r=>{if(!r.getAttribute("src")){let d=r.currentSrc||r.src||"";d&&r.setAttribute("src",d)}r.removeAttribute("srcset"),r.removeAttribute("sizes");let i=r.src||"";if(!i)return;let a=await pt(i,{as:"dataURL",useProxy:t.useProxy});if(a.ok&&typeof a.data=="string"&&a.data.startsWith("data:")){r.src=a.data,r.width||(r.width=r.naturalWidth||100),r.height||(r.height=r.naturalHeight||100);return}let{width:l,height:s}=ow(r),{fallbackURL:c}=t||{};if(c)try{let d=typeof c=="function"?await c({width:l,height:s,src:i,element:r}):c;if(d){let p=await pt(d,{as:"dataURL",useProxy:t.useProxy});r.src=p.data,r.width||(r.width=l),r.height||(r.height=s);return}}catch{}if(t.placeholders!==!1){let d=document.createElement("div");d.style.cssText=[`width:${l}px`,`height:${s}px`,"background:#ccc","display:inline-block","text-align:center",`line-height:${s}px`,"color:#666","font-size:12px","overflow:hidden"].join(";"),d.textContent="img",r.replaceWith(d)}else{let d=document.createElement("div");d.style.cssText=`display:inline-block;width:${l}px;height:${s}px;visibility:hidden;`,r.replaceWith(d)}};for(let r=0;r<n.length;r+=4){let i=n.slice(r,r+4).map(o);await Promise.allSettled(i)}}function iw(e){if(!e)return()=>{};let t=aw(e);if(t<=0)return()=>{};if(!cw(e))return()=>{};let n=getComputedStyle(e),o=Math.round(lw(n)*t+sw(n)),r=e.textContent??"",i=r;if(e.scrollHeight<=o+.5)return()=>{};let a=0,l=r.length,s=-1;for(;a<=l;){let c=a+l>>1;e.textContent=r.slice(0,c)+"\u2026",e.scrollHeight<=o+.5?(s=c,a=c+1):l=c-1}return e.textContent=(s>=0?r.slice(0,s):"")+"\u2026",()=>{e.textContent=i}}function aw(e){let t=getComputedStyle(e),n=t.getPropertyValue("-webkit-line-clamp")||t.getPropertyValue("line-clamp");n=(n||"").trim();let o=parseInt(n,10);return Number.isFinite(o)&&o>0?o:0}function lw(e){let t=(e.lineHeight||"").trim(),n=parseFloat(e.fontSize)||16;return!t||t==="normal"?Math.round(n*1.2):t.endsWith("px")?parseFloat(t):/^\d+(\.\d+)?$/.test(t)?Math.round(parseFloat(t)*n):t.endsWith("%")?Math.round(parseFloat(t)/100*n):Math.round(n*1.2)}function sw(e){return(parseFloat(e.paddingTop)||0)+(parseFloat(e.paddingBottom)||0)}function cw(e){return e.childElementCount>0?!1:Array.from(e.childNodes).some(t=>t.nodeType===Node.TEXT_NODE)}function dw(e,t){if(!e||!t||!t.style)return;let n=getComputedStyle(e);try{t.style.boxShadow="none"}catch{}try{t.style.textShadow="none"}catch{}try{t.style.outline="none"}catch{}let o=(n.filter||"").replace(/\bblur\([^()]*\)\s*/gi,"").replace(/\bdrop-shadow\([^()]*\)\s*/gi,"").trim().replace(/\s+/g," ");try{t.style.filter=o.length?o:"none"}catch{}}function uw(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);for(let o of n)o.remove()}function pw(e,t={}){let{stripFrameworkDirectives:n=!0}=t,o=new Set(["xml","xlink"]),r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);for(;r.nextNode();){let i=r.currentNode;for(let a of Array.from(i.attributes)){let l=a.name;if(l.includes("@")){i.removeAttribute(l);continue}if(l.includes(":")){let s=l.split(":",1)[0];if(!o.has(s)){i.removeAttribute(l);continue}}if(n&&(l.startsWith("x-")||l.startsWith("v-")||l.startsWith(":")||l.startsWith("on:")||l.startsWith("bind:")||l.startsWith("let:")||l.startsWith("class:"))){i.removeAttribute(l);continue}}}}function fw(e,t={}){e&&(pw(e,t),uw(e))}function mw(e){try{let t=e.getAttribute?.("style")||"";return/\b(height|width|block-size|inline-size)\s*:/.test(t)}catch{return!1}}function hw(e){return e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof HTMLIFrameElement||e instanceof SVGElement||e instanceof HTMLObjectElement||e instanceof HTMLEmbedElement}function gw(e,t){if(!(e instanceof Element)||mw(e)||hw(e))return!1;let n=t.position;if(n==="absolute"||n==="fixed"||n==="sticky")return!1;let o=t.display||"";return!(o.includes("flex")||o.includes("grid")||o.startsWith("table")||t.transform&&t.transform!=="none")}function bw(e,t,n=new Map){function o(r,i){if(!(r instanceof Element)||!(i instanceof Element))return;let a=r.childElementCount>i.childElementCount,l=n.get(r)||getComputedStyle(r);if(n.has(r)||n.set(r,l),a&&gw(r,l)){i.style.height||(i.style.height="auto"),i.style.width||(i.style.width="auto"),i.style.removeProperty("block-size"),i.style.removeProperty("inline-size"),i.style.minHeight||(i.style.minHeight="0"),i.style.minWidth||(i.style.minWidth="0"),i.style.maxHeight||(i.style.maxHeight="none"),i.style.maxWidth||(i.style.maxWidth="none");let d=l.overflowY||l.overflowBlock||"visible",p=l.overflowX||l.overflowInline||"visible";(d!=="visible"||p!=="visible")&&(i.style.overflow="visible")}let s=Array.from(r.children),c=Array.from(i.children);for(let d=0;d<Math.min(s.length,c.length);d++)o(s[d],c[d])}o(e,t)}function yw(e){let t=getComputedStyle(e);return!(t.display==="none"||t.position==="absolute"||t.position==="fixed"||t.position==="sticky"||(t.cssFloat||t.float||"none")!=="none"||t.transform&&t.transform!=="none")}function xw(e,t){if(!(e instanceof Element))return!1;if(e.getAttribute("data-capture")==="exclude"&&t?.excludeMode==="remove")return!0;if(Array.isArray(t?.exclude))for(let n of t.exclude)try{if(e.matches(n))return t.excludeMode==="remove"}catch{}return!1}function vw(e,t){let n=getComputedStyle(e),o=e.getBoundingClientRect(),r=1/0,i=-1/0,a=!1,l=Array.from(e.children);for(let g of l){if(xw(g,t)||!yw(g))continue;let h=g.getBoundingClientRect(),m=h.top-o.top,b=h.bottom-o.top;b<=m||(m<r&&(r=m),b>i&&(i=b),a=!0)}let s=a?Math.max(0,i-r):0,c=parseFloat(n.borderTopWidth)||0,d=parseFloat(n.borderBottomWidth)||0,p=parseFloat(n.paddingTop)||0,u=parseFloat(n.paddingBottom)||0;return c+d+p+u+s}function ww(e){let t=e.boxShadow||"";if(!t||t==="none")return{top:0,right:0,bottom:0,left:0};let n=t.split(/\),(?=(?:[^()]*\([^()]*\))*[^()]*$)/).map(l=>l.trim()),o=0,r=0,i=0,a=0;for(let l of n){let s=l.match(/-?\d+(\.\d+)?px/g)?.map(m=>parseFloat(m))||[];if(s.length<2)continue;let[c,d,p=0,u=0]=s,g=Math.abs(c)+p+u,h=Math.abs(d)+p+u;r=Math.max(r,g+Math.max(c,0)),a=Math.max(a,g+Math.max(-c,0)),i=Math.max(i,h+Math.max(d,0)),o=Math.max(o,h+Math.max(-d,0))}return{top:Math.ceil(o),right:Math.ceil(r),bottom:Math.ceil(i),left:Math.ceil(a)}}function Ew(e){let t=(e.filter||"").match(/blur\(\s*([0-9.]+)px\s*\)/),n=t?Math.ceil(parseFloat(t[1])||0):0;return{top:n,right:n,bottom:n,left:n}}function Cw(e){if((e.outlineStyle||"none")==="none")return{top:0,right:0,bottom:0,left:0};let t=Math.ceil(parseFloat(e.outlineWidth||"0")||0);return{top:t,right:t,bottom:t,left:t}}function Sw(e){let t=`${e.filter||""} ${e.webkitFilter||""}`.trim();if(!t||t==="none")return{bleed:{top:0,right:0,bottom:0,left:0},has:!1};let n=t.match(/drop-shadow\((?:[^()]|\([^()]*\))*\)/gi)||[],o=0,r=0,i=0,a=0,l=!1;for(let s of n){l=!0;let c=s.match(/-?\d+(?:\.\d+)?px/gi)?.map(m=>parseFloat(m))||[],[d=0,p=0,u=0]=c,g=Math.abs(d)+u,h=Math.abs(p)+u;r=Math.max(r,g+Math.max(d,0)),a=Math.max(a,g+Math.max(-d,0)),i=Math.max(i,h+Math.max(p,0)),o=Math.max(o,h+Math.max(-p,0))}return{bleed:{top:ae(o),right:ae(r),bottom:ae(i),left:ae(a)},has:l}}function Mw(e,t){if(!e||!t||!t.style)return null;let n=getComputedStyle(e);try{t.style.transformOrigin="0 0"}catch{}try{"translate"in t.style&&(t.style.translate="none"),"rotate"in t.style&&(t.style.rotate="none")}catch{}let o=n.transform||"none";if(!o||o==="none")try{let i=bh(e);if(i.a===1&&i.b===0&&i.c===0&&i.d===1)return t.style.transform="none",{a:1,b:0,c:0,d:1}}catch{}let r=o.match(/^matrix\(\s*([^)]+)\)$/i);if(r){let i=r[1].split(",").map(a=>parseFloat(a.trim()));if(i.length===6&&i.every(Number.isFinite)){let[a,l,s,c]=i,d=Math.sqrt(a*a+l*l)||0,p=0,u=0,g=0,h=0,m=0,b=0;d>0&&(p=a/d,u=l/d,g=p*s+u*c,h=s-p*g,m=c-u*g,b=Math.sqrt(h*h+m*m)||0,b>0?g=g/b:g=0);let x=d,E=0,w=g*b,v=b;try{t.style.transform=`matrix(${x}, ${E}, ${w}, ${v}, 0, 0)`}catch{}return{a:x,b:E,c:w,d:v}}}try{let i=String(o).trim();return t.style.transform=i+" translate(0px, 0px) rotate(0deg)",null}catch{return null}}function fh(e,t,n,o,r){let i=n.a,a=n.b,l=n.c,s=n.d,c=n.e||0,d=n.f||0;function p(x,E){let w=x-o,v=E-r,L=i*w+l*v,k=a*w+s*v;return L+=o+c,k+=r+d,[L,k]}let u=[p(0,0),p(e,0),p(0,t),p(e,t)],g=1/0,h=1/0,m=-1/0,b=-1/0;for(let[x,E]of u)x<g&&(g=x),E<h&&(h=E),x>m&&(m=x),E>b&&(b=E);return{minX:g,minY:h,maxX:m,maxY:b,width:m-g,height:b-h}}function Lw(e,t,n){let o=(e.transformOrigin||"0 0").trim().split(/\s+/),[r,i]=[o[0]||"0",o[1]||"0"],a=(l,s)=>{let c=l.toLowerCase();return c==="left"||c==="top"?0:c==="center"?s/2:c==="right"||c==="bottom"?s:c.endsWith("px")?parseFloat(c)||0:c.endsWith("%")?(parseFloat(c)||0)*s/100:/^-?\d+(\.\d+)?$/.test(c)&&parseFloat(c)||0};return{ox:a(r,t),oy:a(i,n)}}function kw(e){let t={rotate:"0deg",scale:null,translate:null},n=typeof e.computedStyleMap=="function"?e.computedStyleMap():null;if(n){let r=s=>{try{return typeof n.has=="function"&&!n.has(s)||typeof n.get!="function"?null:n.get(s)}catch{return null}},i=r("rotate");if(i)if(i.angle){let s=i.angle;t.rotate=s.unit==="rad"?s.value*180/Math.PI+"deg":s.value+s.unit}else i.unit?t.rotate=i.unit==="rad"?i.value*180/Math.PI+"deg":i.value+i.unit:t.rotate=String(i);else{let s=getComputedStyle(e);t.rotate=s.rotate&&s.rotate!=="none"?s.rotate:"0deg"}let a=r("scale");if(a){let s="x"in a&&a.x?.value!=null?a.x.value:Array.isArray(a)?a[0]?.value:Number(a)||1,c="y"in a&&a.y?.value!=null?a.y.value:Array.isArray(a)?a[1]?.value:s;t.scale=`${s} ${c}`}else{let s=getComputedStyle(e);t.scale=s.scale&&s.scale!=="none"?s.scale:null}let l=r("translate");if(l){let s="x"in l&&"value"in l.x?l.x.value:Array.isArray(l)?l[0]?.value:0,c="y"in l&&"value"in l.y?l.y.value:Array.isArray(l)?l[1]?.value:0,d="x"in l&&l.x?.unit?l.x.unit:"px",p="y"in l&&l.y?.unit?l.y.unit:"px";t.translate=`${s}${d} ${c}${p}`}else{let s=getComputedStyle(e);t.translate=s.translate&&s.translate!=="none"?s.translate:null}return t}let o=getComputedStyle(e);return t.rotate=o.rotate&&o.rotate!=="none"?o.rotate:"0deg",t.scale=o.scale&&o.scale!=="none"?o.scale:null,t.translate=o.translate&&o.translate!=="none"?o.translate:null,t}function Tw(){if(sc)return sc;let e=document.createElement("div");return e.id="snapdom-measure-slot",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",left:"-99999px",top:"0px",width:"0px",height:"0px",overflow:"hidden",opacity:"0",pointerEvents:"none",contain:"size layout style"}),document.documentElement.appendChild(e),sc=e,e}function _w(e){let t=Tw(),n=document.createElement("div");n.style.transformOrigin="0 0",e.baseTransform&&(n.style.transform=e.baseTransform),e.rotate&&(n.style.rotate=e.rotate),e.scale&&(n.style.scale=e.scale),e.translate&&(n.style.translate=e.translate),t.appendChild(n);let o=bh(n);return t.removeChild(n),o}function Rw(e){let t=getComputedStyle(e),n=t.transform||"none";if(n!=="none"&&!/^matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)$/i.test(n))return!0;let o=t.rotate&&t.rotate!=="none"&&t.rotate!=="0deg",r=t.scale&&t.scale!=="none"&&t.scale!=="1",i=t.translate&&t.translate!=="none"&&t.translate!=="0px 0px";return!!(o||r||i)}function bh(e){let t=getComputedStyle(e).transform;if(!t||t==="none")return new DOMMatrix;try{return new DOMMatrix(t)}catch{return new WebKitCSSMatrix(t)}}async function mc(e,t){if(!e)throw new Error("Element cannot be null or undefined");la(t.cache);let n=t.fast,o=t.outerTransforms!==!1,r=!!t.outerShadows,i={element:e,options:t,plugins:t.plugins},a,l,s,c="",d="",p,u,g=null;await Xt("beforeSnap",i),await Xt("beforeClone",i);let h=iw(i.element);try{({clone:a,classCSS:l,styleCache:s}=await nw(i.element,i.options)),!o&&a&&(g=Mw(i.element,a)),!r&&a&&dw(i.element,a)}finally{h()}if(i={clone:a,classCSS:l,styleCache:s,...i},await Xt("afterClone",i),fw(i.clone),i.options?.excludeMode==="remove")try{bw(i.element,i.clone,i.styleCache)}catch(E){console.warn("[snapdom] shrink pass failed:",E)}try{await Fm(i.clone,i.element)}catch{}await new Promise(E=>{Kn(async()=>{await rw(i.clone,i.options),E()},{fast:n})}),await new Promise(E=>{Kn(async()=>{await xa(i.element,i.clone,i.styleCache,i.options),E()},{fast:n})}),t.embedFonts&&await new Promise(E=>{Kn(async()=>{let w=ga(i.element),v=ba(i.element);if(at()){let L=new Set(Array.from(w).map(k=>String(k).split("__")[0]).filter(Boolean));await ya(L,1)}c=await ha({required:w,usedCodepoints:v,preCached:!1,exclude:i.options.excludeFonts,useProxy:i.options.useProxy}),E()},{fast:n})});let m=Am(i.clone).sort(),b=m.join(",");U.baseStyle.has(b)?d=U.baseStyle.get(b):await new Promise(E=>{Kn(()=>{d=Pm(m),U.baseStyle.set(b,d),E()},{fast:n})}),i={fontsCSS:c,baseCSS:d,...i},await Xt("beforeRender",i),await new Promise(E=>{Kn(()=>{let w=getComputedStyle(i.element),v=i.element.getBoundingClientRect(),L=Math.max(1,ae(i.element.offsetWidth||parseFloat(w.width)||v.width||1)),k=Math.max(1,ae(i.element.offsetHeight||parseFloat(w.height)||v.height||1));if(i.options?.excludeMode==="remove"){let Ie=vw(i.element,i.options);Number.isFinite(Ie)&&Ie>0&&(k=Math.max(1,Math.min(k,ae(Ie+1))))}let N=(Ie,ee=NaN)=>{let ne=typeof Ie=="string"?parseFloat(Ie):Ie;return Number.isFinite(ne)?ne:ee},I=N(i.options.width),_=N(i.options.height),$=L,O=k,F=Number.isFinite(I),A=Number.isFinite(_),V=k>0?L/k:1;F&&A?($=Math.max(1,ae(I)),O=Math.max(1,ae(_))):F?($=Math.max(1,ae(I)),O=Math.max(1,ae($/(V||1)))):A?(O=Math.max(1,ae(_)),$=Math.max(1,ae(O*(V||1)))):($=L,O=k);let Z=0,se=0,ce=L,X=k;if(!o&&g&&Number.isFinite(g.a)){let Ie={a:g.a,b:g.b||0,c:g.c||0,d:g.d||1,e:0,f:0},ee=fh(L,k,Ie,0,0);Z=ae(ee.minX),se=ae(ee.minY),ce=ae(ee.maxX),X=ae(ee.maxY)}else if(o&&Hw(i.element)){let Ie=w.transform&&w.transform!=="none"?w.transform:"",ee=kw(i.element),ne=_w({baseTransform:Ie,rotate:ee.rotate||"0deg",scale:ee.scale,translate:ee.translate}),{ox:oo,oy:Xe}=Lw(w,L,k),oe=ne.is2D?ne:new DOMMatrix(ne.toString()),le=fh(L,k,oe,oo,Xe);Z=ae(le.minX),se=ae(le.minY),ce=ae(le.maxX),X=ae(le.maxY)}let K=ww(w),ge=Ew(w),te=Cw(w),Ee=Sw(w),ve=r?{top:ae(K.top+ge.top+te.top+Ee.bleed.top),right:ae(K.right+ge.right+te.right+Ee.bleed.right),bottom:ae(K.bottom+ge.bottom+te.bottom+Ee.bleed.bottom),left:ae(K.left+ge.left+te.left+Ee.bleed.left)}:{top:0,right:0,bottom:0,left:0};Z=ae(Z-ve.left),se=ae(se-ve.top),ce=ae(ce+ve.right),X=ae(X+ve.bottom);let Te=Math.max(1,ae(ce-Z)),Ce=Math.max(1,ae(X-se)),Se=F||A?ae($/L):1,be=A||F?ae(O/k):1,$e=Math.max(1,ae(Te*Se)),Ht=Math.max(1,ae(Ce*be)),qe="http://www.w3.org/2000/svg",Pe=at()?1:0,De=ae(Pe+(o?0:1)),R=document.createElementNS(qe,"foreignObject"),D=ae(Z),G=ae(se);R.setAttribute("x",String(ae(-(D-De)))),R.setAttribute("y",String(ae(-(G-De)))),R.setAttribute("width",String(ae(L+De*2))),R.setAttribute("height",String(ae(k+De*2))),R.style.overflow="visible";let Q=document.createElement("style");Q.textContent=i.baseCSS+i.fontsCSS+"svg{overflow:visible;} foreignObject{overflow:visible;}"+i.classCSS,R.appendChild(Q);let ue=document.createElement("div");ue.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),ue.style.width=`${ae(L)}px`,ue.style.height=`${ae(k)}px`,ue.style.overflow="visible",ue.appendChild(i.clone),R.appendChild(ue);let _e=new XMLSerializer().serializeToString(R),je=ae(Te+De*2),Gt=ae(Ce+De*2),nt=F||A;t.meta={w0:L,h0:k,vbW:je,vbH:Gt,targetW:$,targetH:O};let no=at()&&nt?je:ae($e+De*2),Ue=at()&&nt?Gt:ae(Ht+De*2);u=`<svg xmlns="${qe}" width="${no}" height="${Ue}" viewBox="0 0 ${je} ${Gt}">`+_e+"</svg>",p=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(u)}`,i={svgString:u,dataURL:p,...i},E()},{fast:n})}),await Xt("afterRender",i);let x=document.getElementById("snapdom-sandbox");return x&&x.style.position==="absolute"&&x.remove(),i.dataURL}function Hw(e){return Rw(e)}var eh,cc,dc,th,nh,mh,oh,Sr,Ov,Ho,sh,Ao,uh,ae,sc,yh=T(()=>{va();ac();da();Ro();eh=new WeakMap,cc=new Map,dc=0;th=!1;nh=new WeakMap;mh=["fill","stroke","color","background-color","stop-color"],oh=new Map;Sr=new Map;Ov=/\bblob:[^)"'\s]+/g;Ho=new WeakMap,sh=300;Ao=new WeakMap,uh=-1;ae=(e,t=3)=>Number.isFinite(e)?Math.round(e*10**t)/10**t:e;sc=null});function Nw(e){return typeof e=="string"&&/^data:image\/svg\+xml/i.test(e)}function Aw(e){let t=e.indexOf(",");return t>=0?decodeURIComponent(e.slice(t+1)):""}function Pw(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function $w(e){let t=[],n="",o=0;for(let r=0;r<e.length;r++){let i=e[r];i==="("&&o++,i===")"&&(o=Math.max(0,o-1)),i===";"&&o===0?(t.push(n),n=""):n+=i}return n.trim()&&t.push(n),t.map(r=>r.trim()).filter(Boolean)}function Dw(e){let t=[],n="",o=0;for(let i=0;i<e.length;i++){let a=e[i];a==="("&&o++,a===")"&&(o=Math.max(0,o-1)),a===","&&o===0?(t.push(n.trim()),n=""):n+=a}n.trim()&&t.push(n.trim());let r=[];for(let i of t){if(/\binset\b/i.test(i))continue;let a=i.match(/-?\d+(?:\.\d+)?px/gi)||[],[l="0px",s="0px",c="0px"]=a,d=i.replace(/-?\d+(?:\.\d+)?px/gi,"").replace(/\binset\b/ig,"").trim().replace(/\s{2,}/g," "),p=!!d&&d!==",";r.push(`drop-shadow(${l} ${s} ${c}${p?` ${d}`:""})`)}return r.join(" ")}function xh(e){let t=$w(e),n=null,o=null,r=null,i=[];for(let l of t){let s=l.indexOf(":");if(s<0)continue;let c=l.slice(0,s).trim().toLowerCase(),d=l.slice(s+1).trim();c==="box-shadow"?r=d:c==="filter"?n=d:c==="-webkit-filter"?o=d:i.push([c,d])}if(r){let l=Dw(r);l&&(n=n?`${n} ${l}`:l,o=o?`${o} ${l}`:l)}let a=[...i];return n&&a.push(["filter",n]),o&&a.push(["-webkit-filter",o]),a.map(([l,s])=>`${l}:${s}`).join(";")}function Iw(e){return e.replace(/([^{}]+)\{([^}]*)\}/g,(t,n,o)=>`${n}{${xh(o)}}`)}function Ow(e){return e=e.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi,(t,n)=>t.replace(n,Iw(n))),e=e.replace(/style=(['"])([\s\S]*?)\1/gi,(t,n,o)=>`style=${n}${xh(o)}${n}`),e}function zw(e){if(!at()||!Nw(e))return e;try{let t=Aw(e),n=Ow(t);return Pw(n)}catch{return e}}async function Rn(e,t){let{width:n,height:o,scale:r=1,dpr:i=1,meta:a={},backgroundColor:l}=t;e=zw(e);let s=new Image;s.loading="eager",s.decoding="sync",s.crossOrigin="anonymous",s.src=e,await s.decode();let c=s.naturalWidth,d=s.naturalHeight,p=Number.isFinite(a.w0)?a.w0:c,u=Number.isFinite(a.h0)?a.h0:d,g,h,m=Number.isFinite(n),b=Number.isFinite(o);if(m&&b)g=Math.max(1,n),h=Math.max(1,o);else if(m){let w=n/Math.max(1,p);g=n,h=u*w}else if(b){let w=o/Math.max(1,u);h=o,g=p*w}else g=c,h=d;g=g*r,h=h*r;let x=document.createElement("canvas");x.width=g*i,x.height=h*i,x.style.width=`${g}px`,x.style.height=`${h}px`;let E=x.getContext("2d");return i!==1&&E.scale(i,i),l&&(E.save(),E.fillStyle=l,E.fillRect(0,0,g,h),E.restore()),E.drawImage(s,0,0,g,h),x}var kr=T(()=>{Ro()});async function Ca(e,t){let n=await Rn(e,t),o=new Image;return o.src=n.toDataURL(`image/${t.format}`,t.quality),await o.decode(),o.style.width=`${n.width/t.dpr}px`,o.style.height=`${n.height/t.dpr}px`,o}var hc=T(()=>{kr()});async function vh(e,t){let{scale:n=1,width:o,height:r,meta:i={}}=t,a=Number.isFinite(o),l=Number.isFinite(r),s=Number.isFinite(n)&&n!==1||a||l;if(at()&&s)return await Ca(e,{...t,format:"png",quality:1,meta:i});let c=new Image;if(c.decoding="sync",c.loading="eager",c.src=e,await c.decode(),a&&l)c.style.width=`${o}px`,c.style.height=`${r}px`;else if(a){let d=Number.isFinite(i.w0)?i.w0:c.naturalWidth,p=Number.isFinite(i.h0)?i.h0:c.naturalHeight,u=o/Math.max(1,d);c.style.width=`${o}px`,c.style.height=`${Math.round(p*u)}px`}else if(l){let d=Number.isFinite(i.w0)?i.w0:c.naturalWidth,p=Number.isFinite(i.h0)?i.h0:c.naturalHeight,u=r/Math.max(1,p);c.style.height=`${r}px`,c.style.width=`${Math.round(d*u)}px`}else{let d=Math.round(c.naturalWidth*n),p=Math.round(c.naturalHeight*n);if(c.style.width=`${d}px`,c.style.height=`${p}px`,typeof e=="string"&&e.startsWith("data:image/svg+xml"))try{let u=decodeURIComponent(e.split(",")[1]).replace(/width="[^"]*"/,`width="${d}"`).replace(/height="[^"]*"/,`height="${p}"`);e=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(u)}`,c.src=e}catch{}}return c}var wh=T(()=>{hc();Ro()});var Tr={};hn(Tr,{toImg:()=>vh,toSvg:()=>vh});var _r=T(()=>{wh()});var gc={};hn(gc,{toCanvas:()=>Rn});var bc=T(()=>{kr()});async function Sa(e,t){let n=t.type;if(n==="svg"){let r=decodeURIComponent(e.split(",")[1]);return new Blob([r],{type:"image/svg+xml"})}let o=await Rn(e,t);return new Promise(r=>o.toBlob(i=>r(i),`image/${n}`,t.quality))}var yc=T(()=>{kr()});var xc={};hn(xc,{toBlob:()=>Sa});var vc=T(()=>{yc()});var Hn={};hn(Hn,{rasterize:()=>Ca});var Nn=T(()=>{hc()});var Eh={};hn(Eh,{download:()=>Fw});async function Fw(e,t){let n=(t?.format||t?.type||"").toLowerCase(),o=n==="jpg"?"jpeg":n||"png",r=t?.filename||`snapdom.${o}`,i={...t||{},format:o,type:o};if(i.dpr=1,o==="svg"){let s=await Sa(e,{...i,type:"svg"}),c=URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download=r,d.click(),URL.revokeObjectURL(c);return}let a=await Rn(e,i),l=document.createElement("a");l.href=a.toDataURL(`image/${o}`,t?.quality),l.download=r,l.click()}var Ch=T(()=>{yc();kr()});var Ec={};hn(Ec,{default:()=>Uw,plugins:()=>Sh,preCache:()=>Xm,snapdom:()=>ke});function Vw(e){if(typeof e=="string"){let t=e.toLowerCase().trim();if(t==="disabled"||t==="full"||t==="auto"||t==="soft")return t}return"soft"}function Bw(e={}){let t=e.format??"png";t==="jpg"&&(t="jpeg");let n=Vw(e.cache);return{debug:e.debug??!1,fast:e.fast??!0,scale:e.scale??1,exclude:e.exclude??[],excludeMode:e.excludeMode??"hide",filter:e.filter??null,filterMode:e.filterMode??"hide",placeholders:e.placeholders!==!1,embedFonts:e.embedFonts??!1,iconFonts:Array.isArray(e.iconFonts)?e.iconFonts:e.iconFonts?[e.iconFonts]:[],localFonts:Array.isArray(e.localFonts)?e.localFonts:[],excludeFonts:e.excludeFonts??void 0,fallbackURL:e.fallbackURL??void 0,cache:n,useProxy:typeof e.useProxy=="string"?e.useProxy:"",width:e.width??null,height:e.height??null,format:t,type:e.type??"svg",quality:e.quality??.92,dpr:e.dpr??(window.devicePixelRatio||1),backgroundColor:e.backgroundColor??(["jpeg","webp"].includes(t)?"#ffffff":null),filename:e.filename??"snapDOM",outerTransforms:e.outerTransforms??!0,outerShadows:e.outerShadows??!1}}function Sh(...e){return Km(...e),ke}async function Ww(e,t){if(!e)throw new Error("Element cannot be null or undefined");let n=Bw(t);if(Qm(n,t&&t.plugins),at()&&(n.embedFonts===!0||jw(e)))for(let o=0;o<3;o++)try{await qw(e,t),wc=!1}catch{}return n.iconFonts&&n.iconFonts.length>0&&zm(n.iconFonts),n.snap||(n.snap={toPng:(o,r)=>ke.toPng(o,r),toSvg:(o,r)=>ke.toSvg(o,r)}),ke.capture(e,n,Mh)}async function qw(e,t){if(wc)return;let n={...t,fast:!0,embedFonts:!0,scale:.2},o;try{o=await mc(e,n)}catch{}await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))),o&&await new Promise(r=>{let i=new Image;try{i.decoding="sync",i.loading="eager"}catch{}i.style.cssText="position:fixed;left:0px;top:0px;width:10px;height:10px;opacity:0.01;pointer-events:none;",i.src=o,document.body.appendChild(i),(async()=>{try{typeof i.decode=="function"&&await i.decode()}catch{}let a=performance.now();for(;!(i.complete&&i.naturalWidth>0)&&performance.now()-a<900;)await new Promise(l=>setTimeout(l,200));await new Promise(l=>requestAnimationFrame(l));try{i.remove()}catch{}r()})()}),e.querySelectorAll("canvas").forEach(r=>{try{let i=r.getContext("2d",{willReadFrequently:!0});i&&i.getImageData(0,0,1,1)}catch{}}),wc=!0}function jw(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);for(;t.nextNode();){let n=t.currentNode,o=getComputedStyle(n),r=o.backgroundImage&&o.backgroundImage!=="none",i=o.maskImage&&o.maskImage!=="none"||o.webkitMaskImage&&o.webkitMaskImage!=="none";if(r||i||n.tagName==="CANVAS")return!0}return!1}var ke,Mh,An,wc,Uw,Cc=T(()=>{Gm();yh();va();ac();Ro();ke=Object.assign(Ww,{plugins:Sh}),Mh=Symbol("snapdom.internal"),An=Symbol("snapdom.internal.silent"),wc=!1;ke.capture=async(e,t,n)=>{if(n!==Mh)throw new Error("[snapdom.capture] is internal. Use snapdom(...) instead.");let o=await mc(e,t),r={img:async(h,m)=>{let{toImg:b}=await Promise.resolve().then(()=>(_r(),Tr));return b(o,{...h,...m||{}})},svg:async(h,m)=>{let{toSvg:b}=await Promise.resolve().then(()=>(_r(),Tr));return b(o,{...h,...m||{}})},canvas:async(h,m)=>{let{toCanvas:b}=await Promise.resolve().then(()=>(bc(),gc));return b(o,{...h,...m||{}})},blob:async(h,m)=>{let{toBlob:b}=await Promise.resolve().then(()=>(vc(),xc));return b(o,{...h,...m||{}})},png:async(h,m)=>{let{rasterize:b}=await Promise.resolve().then(()=>(Nn(),Hn));return b(o,{...h,...m||{},format:"png"})},jpeg:async(h,m)=>{let{rasterize:b}=await Promise.resolve().then(()=>(Nn(),Hn));return b(o,{...h,...m||{},format:"jpeg"})},webp:async(h,m)=>{let{rasterize:b}=await Promise.resolve().then(()=>(Nn(),Hn));return b(o,{...h,...m||{},format:"webp"})},download:async(h,m)=>{let{download:b}=await Promise.resolve().then(()=>(Ch(),Eh));return b(o,{...h,...m||{}})}},i={...t,export:{url:o},exports:{svg:async h=>{let{toSvg:m}=await Promise.resolve().then(()=>(_r(),Tr));return m(o,{...t,...h||{},[An]:!0})},canvas:async h=>{let{toCanvas:m}=await Promise.resolve().then(()=>(bc(),gc));return m(o,{...t,...h||{},[An]:!0})},png:async h=>{let{rasterize:m}=await Promise.resolve().then(()=>(Nn(),Hn));return m(o,{...t,...h||{},format:"png",[An]:!0})},jpeg:async h=>{let{rasterize:m}=await Promise.resolve().then(()=>(Nn(),Hn));return m(o,{...t,...h||{},format:"jpeg",[An]:!0})},jpg:async h=>{let{rasterize:m}=await Promise.resolve().then(()=>(Nn(),Hn));return m(o,{...t,...h||{},format:"jpeg",[An]:!0})},webp:async h=>{let{rasterize:m}=await Promise.resolve().then(()=>(Nn(),Hn));return m(o,{...t,...h||{},format:"webp",[An]:!0})},blob:async h=>{let{toBlob:m}=await Promise.resolve().then(()=>(vc(),xc));return m(o,{...t,...h||{},[An]:!0})},img:async h=>{let{toImg:m}=await Promise.resolve().then(()=>(_r(),Tr));return m(o,{...t,...h||{},[An]:!0})}}},a=await Jm("defineExports",i),l=Object.assign({},...a.filter(h=>h&&typeof h=="object")),s={...r,...l};s.jpeg&&!s.jpg&&(s.jpg=(h,m)=>s.jpeg(h,m));function c(h,m){let b={...t,...m||{}};return(h==="jpeg"||h==="jpg")&&(b.backgroundColor==null||b.backgroundColor==="transparent")&&(b.backgroundColor="#ffffff"),b}let d=!1,p=Promise.resolve();async function u(h,m){let b=async()=>{let x=s[h];if(!x)throw new Error(`[snapdom] Unknown export type: ${h}`);let E=c(h,m),w={...t,export:{type:h,options:E,url:o}};await Xt("beforeExport",w);let v=await x(w,E);return await Xt("afterExport",w,v),d||(d=!0,await Xt("afterSnap",t)),v};return p=p.then(b)}let g={url:o,toRaw:()=>o,to:(h,m)=>u(h,m),toImg:h=>u("img",h),toSvg:h=>u("svg",h),toCanvas:h=>u("canvas",h),toBlob:h=>u("blob",h),toPng:h=>u("png",h),toJpg:h=>u("jpg",h),toWebp:h=>u("webp",h),download:h=>u("download",h)};for(let h of Object.keys(s)){let m="to"+h.charAt(0).toUpperCase()+h.slice(1);g[m]||(g[m]=b=>u(h,b))}return g};ke.toRaw=(e,t)=>ke(e,t).then(n=>n.toRaw());ke.toImg=(e,t)=>ke(e,t).then(n=>n.toImg());ke.toSvg=(e,t)=>ke(e,t).then(n=>n.toSvg());ke.toCanvas=(e,t)=>ke(e,t).then(n=>n.toCanvas());ke.toBlob=(e,t)=>ke(e,t).then(n=>n.toBlob());ke.toPng=(e,t)=>ke(e,{...t,format:"png"}).then(n=>n.toPng());ke.toJpg=(e,t)=>ke(e,{...t,format:"jpeg"}).then(n=>n.toJpg());ke.toWebp=(e,t)=>ke(e,{...t,format:"webp"}).then(n=>n.toWebp());ke.download=(e,t)=>ke(e,t).then(n=>n.download());Uw=ke});function _h(e,t,n){let o=Math.min(1,Math.sqrt(n/(e*t)));return{width:Math.max(1,Math.floor(e*o)),height:Math.max(1,Math.floor(t*o))}}function Rh(){if(j.shadowRoot)return j.shadowRoot;let e=document.createElement("div");e.className="__v0_screenshot_overlay_host",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    z-index: 2147483646;
  `;let t=e.attachShadow({mode:"open"});return t.innerHTML=`
    <style>
      .selection-rect {
        position: fixed;
        border: 1px solid var(--accent, #e3e3e3);
        outline: 1px solid rgb(255 255 255 / 90%);
        box-shadow:
          0 0 0 2px rgb(0 0 0 / 55%),
          inset 0 0 0 1px rgb(255 255 255 / 65%);
        background: rgb(0 0 0 / 8%);
        pointer-events: none;
        display: none;
        box-sizing: border-box;
      }
      .size-label {
        position: fixed;
        background: rgba(0, 0, 0, 0.75);
        color: #ffffff;
        font-family: 'Geist Mono', ui-monospace, monospace;
        font-size: 10px;
        padding: 0px 4px;
        border-radius: 3px;
        line-height: 16px;
        pointer-events: none;
        display: none;
        white-space: nowrap;
      }
    </style>
  `,document.body.appendChild(e),j.overlayHost=e,j.shadowRoot=t,t}function Gw(){let e=Rh(),t=document.createElement("div");return t.className="selection-rect",e.appendChild(t),t}function Yw(){let e=Rh(),t=document.createElement("div");return t.className="size-label",e.appendChild(t),t}function Lh(e,t,n,o){j.selectionRect||(j.selectionRect=Gw()),j.sizeLabel||(j.sizeLabel=Yw());let r=Math.min(e,n),i=Math.min(t,o),a=Math.abs(n-e),l=Math.abs(o-t);j.selectionRect.style.left=`${r}px`,j.selectionRect.style.top=`${i}px`,j.selectionRect.style.width=`${a}px`,j.selectionRect.style.height=`${l}px`,j.selectionRect.style.display="block",j.sizeLabel.textContent=`${Math.round(a)} \xD7 ${Math.round(l)}`,j.sizeLabel.style.left=`${r+a/2}px`,j.sizeLabel.style.top=`${i+l+6}px`,j.sizeLabel.style.transform="translateX(-50%)",j.sizeLabel.style.display="block"}function Sc(){j.selectionRect&&(j.selectionRect.style.display="none"),j.sizeLabel&&(j.sizeLabel.style.display="none")}async function Kw(){if(!j.selectionRect||!j.shadowRoot)return;let e=document.createElement("div");if(e.className="selection-flash",e.style.cssText=`
    position: fixed;
    left: ${j.selectionRect.style.left};
    top: ${j.selectionRect.style.top};
    width: ${j.selectionRect.style.width};
    height: ${j.selectionRect.style.height};
    background: white;
    opacity: 0;
    pointer-events: none;
    z-index: 2147483647;
    animation: flash-effect 0.1s ease-out forwards;
  `,!j.shadowRoot.querySelector("#flash-keyframes")){let t=document.createElement("style");t.id="flash-keyframes",t.textContent=`
      @keyframes flash-effect {
        0% { opacity: 0; }
        30% { opacity: 0.8; }
        100% { opacity: 0; }
      }
    `,j.shadowRoot.appendChild(t)}j.shadowRoot.appendChild(e),await new Promise(t=>setTimeout(t,150)),e.remove()}async function Zw(e,t,n,o,r,i,a){let l=Math.min(e,n),s=Math.min(t,o),c=Math.abs(n-e),d=Math.abs(o-t),p=document.body.getBoundingClientRect();await Kw(),Sc(),i(),r.host.style.display="none";try{await new Promise(N=>requestAnimationFrame(N));let{snapdom:u}=await Promise.resolve().then(()=>(Cc(),Ec)),h=await(await u(document.body,kh)).toJpeg(),m=(l-p.left)*window.devicePixelRatio,b=(s-p.top)*window.devicePixelRatio,x=c*window.devicePixelRatio,E=d*window.devicePixelRatio,w=_h(x,E,Th),v=document.createElement("canvas");v.width=w.width,v.height=w.height;let L=v.getContext("2d");L&&L.drawImage(h,m,b,x,E,0,0,w.width,w.height);let k=v.toDataURL("image/jpeg",.8);r.host.style.display="",r.host.style.opacity="1",Mm(r,k,{left:l,top:s,width:c,height:d})}catch(u){console.error("Failed to capture region:",u),r.host.style.display="",r.host.style.opacity="1"}a()}function Hh(e,t,n,o,r,i){function a(){document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",p),document.removeEventListener("keydown",l),document.removeEventListener("keyup",s),Sc(),j.isDragging=!1,j.isMoving=!1,j.wasCancelled=!0;let u=o();u&&(u.host.style.opacity="1")}function l(u){u.key==="Escape"?(u.preventDefault(),a()):u.code==="Space"&&!j.isMoving&&(u.preventDefault(),j.isMoving=!0,j.lastMoveX=j.dragEndX,j.lastMoveY=j.dragEndY)}function s(u){u.code==="Space"&&(u.preventDefault(),j.isMoving=!1)}function c(u){e()&&(t()||!u.metaKey&&!u.ctrlKey||n(u.clientX,u.clientY)||document.elementsFromPoint(u.clientX,u.clientY).some(We)||(j.isDragging=!1,j.isMoving=!1,j.dragStartX=u.clientX,j.dragStartY=u.clientY,j.dragEndX=u.clientX,j.dragEndY=u.clientY,document.addEventListener("pointermove",d),document.addEventListener("pointerup",p),document.addEventListener("keydown",l),document.addEventListener("keyup",s)))}function d(u){if(j.isMoving&&j.isDragging){let m=u.clientX-j.lastMoveX,b=u.clientY-j.lastMoveY;j.dragStartX+=m,j.dragStartY+=b,j.dragEndX+=m,j.dragEndY+=b,j.lastMoveX=u.clientX,j.lastMoveY=u.clientY,Lh(j.dragStartX,j.dragStartY,j.dragEndX,j.dragEndY);return}let g=Math.abs(u.clientX-j.dragStartX),h=Math.abs(u.clientY-j.dragStartY);if(g>=5||h>=5){if(!j.isDragging){let m=o();m&&(m.host.style.transition="opacity 0.15s ease-out",m.host.style.opacity="0")}j.isDragging=!0,j.dragEndX=u.clientX,j.dragEndY=u.clientY,Lh(j.dragStartX,j.dragStartY,j.dragEndX,j.dragEndY)}}async function p(u){if(document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",p),document.removeEventListener("keydown",l),document.removeEventListener("keyup",s),j.isDragging){let g=Math.abs(j.dragEndX-j.dragStartX),h=Math.abs(j.dragEndY-j.dragStartY),m=o();g>=10&&h>=10&&m?await Zw(j.dragStartX,j.dragStartY,j.dragEndX,j.dragEndY,m,r,i):(Sc(),m&&(m.host.style.opacity="1")),j.isDragging=!1,j.isMoving=!1}}return document.addEventListener("pointerdown",c,!0),{cleanup:()=>{document.removeEventListener("pointerdown",c,!0),document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",p),document.removeEventListener("keydown",l),document.removeEventListener("keyup",s),j.overlayHost&&(j.overlayHost.remove(),j.overlayHost=null,j.shadowRoot=null,j.selectionRect=null,j.sizeLabel=null)}}}function Nh(){return j.isDragging||j.wasCancelled}function Ah(){j.isDragging=!1,j.wasCancelled=!1}async function Ph(e,t,n){try{let o=e.getBoundingClientRect(),r=document.body.getBoundingClientRect();t?.(),await new Promise(b=>requestAnimationFrame(b));let{snapdom:i}=await Promise.resolve().then(()=>(Cc(),Ec)),l=await(await i(document.body,kh)).toJpeg(),s=(o.left-r.left)*window.devicePixelRatio,c=(o.top-r.top)*window.devicePixelRatio,d=o.width*window.devicePixelRatio,p=o.height*window.devicePixelRatio,u=_h(d,p,Th),g=document.createElement("canvas");g.width=u.width,g.height=u.height;let h=g.getContext("2d");return h&&h.drawImage(l,s,c,d,p,0,0,u.width,u.height),n?.(),g.toDataURL("image/jpeg",.8).replace(/^data:image\/[a-z]+;base64,/,"")}catch(o){return console.error("Failed to capture element screenshot:",o),n?.(),null}}var j,Xw,kh,Th,$h=T(()=>{"use strict";Js();Qs();j={isDragging:!1,wasCancelled:!1,dragStartX:0,dragStartY:0,dragEndX:0,dragEndY:0,isMoving:!1,lastMoveX:0,lastMoveY:0,overlayHost:null,shadowRoot:null,selectionRect:null,sizeLabel:null},Xw="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",kh={quality:.8,embedFonts:!0,useProxy:"/_v0/snapdom-proxy?url=",placeholders:!1,fallbackURL:Xw},Th=1280*720});function Zn(e,t,n){return n<t?t:Math.min(Math.max(e,t),n)}function Ih(e,t,n,o){return{left:e,top:t,width:n,height:o,right:e+n,bottom:t+o}}function Dh(e,t){let n=Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left)),o=Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top));return n*o}function Jw(e,t){let n=Zn(e.left,t.left,t.right),o=Zn(e.top,t.top,t.bottom),r=Zn(e.right,t.left,t.right),i=Zn(e.bottom,t.top,t.bottom);return r<=n||i<=o?e:Ih(n,o,r-n,i-o)}function Oh(e){let{anchorRect:t,toolbarWidth:n,toolbarHeight:o,bounds:r}=e,i=e.edgePadding??8,a=e.gap??8,l=e.avoidRects??[],s=r.left+i,c=r.right-n-i,d=r.top+i,p=r.bottom-o-i,u=Jw(t,r),g=u.left+u.width/2-n/2,h=u.top+u.height/2-o/2,m=u.top-o-a,b=u.bottom+a,x=[{left:g,top:m,axis:"y"},{left:g,top:b,axis:"y"},{left:u.right+a,top:h,axis:"x"},{left:u.left-n-a,top:h,axis:"x"}];for(let L of l){let k=L.left-n-a,N=L.right+a;x.push({left:k,top:m,axis:"y"},{left:k,top:b,axis:"y"},{left:N,top:m,axis:"y"},{left:N,top:b,axis:"y"})}x.push({left:g,top:d,axis:"y"},{left:g,top:p,axis:"y"});let E=Math.max(1,n*o),w={left:Zn(g,s,c),top:d},v=Number.POSITIVE_INFINITY;return x.forEach((L,k)=>{let N=L.axis==="y"?L.top>=d&&L.top<=p:L.left>=s&&L.left<=c,I=Zn(L.left,s,c),_=Zn(L.top,d,p),$=Ih(I,_,n,o),F=l.reduce((A,V)=>A+Dh($,V),0)/E*1e4+Dh($,u)/E*8e3+(N?0:1e3)+k;F<v&&(w={left:I,top:_},v=F)}),w}var zh=T(()=>{"use strict"});function Jn(e,t,n){e.style[t]=n,window.dispatchEvent(new CustomEvent("v0-style-change"))}function i5(e){return Array.from(new Set(e.filter(Boolean)))}function a5(){return Fi().map(e=>({label:`${e.label} (${e.value})`,value:`var(${e.name})`}))}function Mc(e,t){let n=i5(t.includes(e)?t:[e,...t]).map(i=>({label:i,value:i})),o=new Set(n.map(i=>i.value)),r=a5().filter(i=>!o.has(i.value));return[...n,...r]}function La(e,t,n,o){return{left:e,top:t,width:n,height:o,right:e+n,bottom:t+o,x:e,y:t,toJSON(){return this}}}function Ma(e){let t=parseFloat(e);return Number.isFinite(t)?Math.max(0,t):0}function s5(e){return e==="normal"?"stretch":e==="start"?"flex-start":e==="end"?"flex-end":e}function c5(e){return e==="normal"||e==="start"||e==="left"?"flex-start":e==="end"||e==="right"?"flex-end":e}function Bh(e){if(!e.endsWith("px"))return e;let t=parseFloat(e);return Number.isFinite(t)?`${Math.round(t)}px`:e}function d5(e,t=e.getBoundingClientRect()){let n=window.getComputedStyle(e),o=Ma(n.marginTop),r=Ma(n.marginRight),i=Ma(n.marginBottom),a=Ma(n.marginLeft);return La(t.left-a,t.top-o,t.width+a+r,t.height+o+i)}function Qn(e){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("viewBox","0 0 16 16"),t.setAttribute("width","16"),t.setAttribute("height","16"),t.setAttribute("aria-hidden","true"),t.classList.add("toolbar-icon"),t.innerHTML=l5[e],t}function u5(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function Wh(e){return We(e)||e.id==="snapdom-sandbox"?!0:e.closest("#snapdom-sandbox")!==null}function qh(e,t=!1,n={}){let o={enabled:!1,hasTailwind:!1,hasReact:!1,selectedElement:null,hoveredElement:null,editHistory:[],historyIndex:-1,panelPosition:{x:10,y:10},originalStyles:new Map},r=Df(),i=n.logo??!0,a=null,l=null,s=null,c=null,d=null,p=null,u=null,g=0,h=null,m=null,b=!1,x=null,E=null,w=null,v=!1,L=localStorage.getItem("__v0_design_layout_overlay")!=="false",k=0,N=new Map,I=new WeakMap,_=null,$=null,O=new WeakMap,F=null,A=!1,V=null;function Z(f){if(r.getHistory().length>0)return f.preventDefault(),""}function se(){o.hasTailwind=kf(),o.hasReact=qi(),xf(),Rr=Bf(),document.head.appendChild(Rr),window.addEventListener("beforeunload",Z),window.addEventListener("v0-design-mode-refresh-panel",ce),o.enabled=!0,$a()}function ce(){!a||!o.selectedElement||(Be(a,o,r),Ae(o.selectedElement))}function X(){if(!a)return null;let f=document.createElement("div");return f.className="__v0_hover_overlay",f.style.display="none",a.shadowRoot.appendChild(f),f}function K(f){if(c||(c=X()),!f||!c){c&&(c.style.display="none");return}let y=f.getBoundingClientRect(),C=1;c.style.display="block",c.style.left=`${y.left-C}px`,c.style.top=`${y.top-C}px`,c.style.width=`${y.width+C*2}px`,c.style.height=`${y.height+C*2}px`}function ge(){return F||(a?(F=_f(a.shadowRoot),F):null)}function te(){return p||(a?(p=zf(a.shadowRoot),p):null)}function Ee(f){let y=f.tagName.toLowerCase();if(t5.has(y))return"image";let C=(f.textContent??"").trim().length>0;return Vh.has(y)||C?"text":"box"}function ve(f,y,C,M=!1){let H=document.createElement("button");return H.type="button",H.className=M?"toolbar-button active":"toolbar-button",typeof f=="string"?H.textContent=f:H.appendChild(f),H.title=y,H.setAttribute("aria-label",y),M&&H.setAttribute("aria-pressed","true"),H.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),C()}),H}function Te(f){if(u)for(let y of Array.from(u.querySelectorAll(".toolbar-popover-wrap.open"))){if(y===f)continue;y.classList.remove("open"),y.querySelector(".toolbar-popover-trigger")?.setAttribute("aria-expanded","false")}}function Ce({trigger:f,title:y,options:C}){let M=document.createElement("div");M.className="toolbar-popover-wrap";let H=ve(f,y,()=>{Te(M);let Y=M.classList.toggle("open");H.setAttribute("aria-expanded",String(Y))},!1);H.classList.add("toolbar-popover-trigger"),H.setAttribute("aria-haspopup","true"),H.setAttribute("aria-expanded","false"),M.appendChild(H);let P=document.createElement("div");P.className="toolbar-popover",P.setAttribute("role","menu");for(let Y of C){let J=ve(Y.content,Y.title,()=>{M.classList.remove("open"),H.setAttribute("aria-expanded","false"),Y.onSelect()},Y.active);J.setAttribute("role","menuitemradio"),J.setAttribute("aria-checked",Y.active?"true":"false"),P.appendChild(J)}return M.appendChild(P),M}function Se(f){let y=f.textAlign,C=[{icon:"alignmentLeft",title:"Align left",value:"left"},{icon:"alignmentCenter",title:"Align center",value:"center"},{icon:"alignmentRight",title:"Align right",value:"right"}],M=C.find(H=>H.value===y)??C[0];return Ce({trigger:Qn(M.icon),title:"Alignment",options:C.map(H=>({content:Qn(H.icon),title:H.title,active:y===H.value,onSelect:()=>{_e("textAlign",y===H.value?"":H.value)}}))})}function be(f){let y=f.flexDirection,C=[{icon:"arrowLeftRight",title:"Row",value:"row"},{icon:"arrowUpDown",title:"Column",value:"column"}],M=C.find(H=>y.startsWith(H.value))??C[0];return Ce({trigger:Qn(M.icon),title:"Flex direction",options:C.map(H=>({content:Qn(H.icon),title:H.title,active:y.startsWith(H.value),onSelect:()=>_e("flexDirection",H.value)}))})}function $e(f){return ue("Align items",s5(f.alignItems),[{label:"Stretch",value:"stretch"},{label:"Start",value:"flex-start"},{label:"Center",value:"center"},{label:"End",value:"flex-end"},{label:"Baseline",value:"baseline"}],y=>_e("alignItems",y),{text:"Align"})}function Ht(f){return ue("Justify content",c5(f.justifyContent),[{label:"Start",value:"flex-start"},{label:"Center",value:"center"},{label:"End",value:"flex-end"},{label:"Between",value:"space-between"},{label:"Around",value:"space-around"},{label:"Evenly",value:"space-evenly"}],y=>_e("justifyContent",y),{text:"Justify"})}function qe(f){let y=f.gap;return y==="normal"&&(y="0px"),ue("Gap",y,Mc(y,r5),C=>_e("gap",C),{text:"Gap"})}function Pe(){let f=document.createElement("span");return f.className="toolbar-divider",f.setAttribute("aria-hidden","true"),f}function De(f,y,C){let M=Un(y,(H,P)=>{_e(C,H,P)},H=>{let P=o.selectedElement;P&&(Jn(P,C,H),Ae(P,{updateToolbar:!1}),Ue(P))});return M.classList.add("toolbar-color-picker"),M.title=f,M.setAttribute("aria-label",f),M.style.flex="0 0 24px",M.style.width="24px",M.style.minWidth="0",M}function R(f){let y=Ji({label:"Font",value:Zi(f.fontFamily),fontFamily:f.fontFamily,compact:!0,onChange:async C=>{let M=o.selectedElement;if(!M||!a)return;let H=++g;if(Gn.includes(C)){_e("fontFamily",C);return}let{link:P,loaded:Y}=await Gi(C);if(!Y||o.selectedElement!==M||H!==g)return;let J=Xn(C);P&&r.push({type:"fontInjection",elementInfo:Ne(M,o.hasReact),fontName:C,fontUrl:hr(C),timestamp:Date.now()}),_e("fontFamily",J)}});return y.classList.add("toolbar-font-select"),y}function D(f){let y=f.fontSize,C=Bh(y);return ue("Font size",y,Mc(y,n5).map(M=>({label:M.value===y?C:M.label,value:M.value})),M=>_e("fontSize",M),null)}function G(f,y,C){let M=document.createElement("label");M.className="toolbar-dimension-wrap",M.title=f;let H=document.createElement("span");H.className="toolbar-dimension-label",H.textContent=f[0],M.appendChild(H);let P=document.createElement("input");return P.type="text",P.className="toolbar-dimension-input",P.setAttribute("aria-label",f),P.spellcheck=!1,P.value=Bh(C),P.addEventListener("change",()=>{_e(y,P.value)}),M.appendChild(P),M}function Q(f){let y=f.borderRadius;return ue("Radius",y,Mc(y,o5),C=>_e("borderRadius",C),null)}function ue(f,y,C,M,H){let P=document.createElement("label");if(P.className="toolbar-select-wrap",P.title=f,typeof H=="string")P.appendChild(Qn(H));else if(H){let J=document.createElement("span");J.className="toolbar-select-prefix",J.textContent=H.text,P.appendChild(J)}let Y=document.createElement("select");if(Y.className="toolbar-select",Y.setAttribute("aria-label",f),!C.some(J=>J.value===y)){let J=document.createElement("option");J.value=y,J.textContent=y,J.disabled=!0,Y.appendChild(J)}for(let J of C){let fe=document.createElement("option");fe.value=J.value,fe.textContent=J.label,Y.appendChild(fe)}return Y.value=y,Y.addEventListener("change",()=>M(Y.value)),P.appendChild(Y),P}function _e(f,y,C){let M=o.selectedElement;if(!M||!a)return;if(y===""){je(f);return}let H=C??(M.style[f]||window.getComputedStyle(M)[f]);String(H)!==y&&(ie(M,f,y,r,o.hasReact,H),Be(a,o,r),Ae(M))}function je(f){let y=o.selectedElement;!y||!a||(y.style[f]&&(y.style.removeProperty(u5(f)),window.dispatchEvent(new CustomEvent("v0-style-change"))),r.removeWhere(C=>C.type==="style"&&C.element===y&&C.property===f),Be(a,o,r),Ae(y))}function Gt(f,y,C,M,H){if(!y){_e(f,C);return}je(f);let P=o.selectedElement;if(!P)return;let Y=window.getComputedStyle(P)[f];H(Y)&&_e(f,M)}function nt(){return u||(a?(u=document.createElement("div"),u.className="__v0_floating_toolbar",u.style.display="none",u.addEventListener("mousedown",f=>{f.stopPropagation()}),u.addEventListener("pointerdown",f=>{f.stopPropagation()}),u.addEventListener("click",f=>{f.stopPropagation()}),a.shadowRoot.appendChild(u),u):null)}function no(){let f=La(0,0,window.innerWidth,window.innerHeight),y=a?.panel;if(!y||!y.classList.contains("push-mode"))return f;let C=y.getBoundingClientRect();if(C.width===0)return f;if(y.classList.contains("push-left")){let M=Math.min(C.right,f.right);return La(M,0,f.right-M,f.height)}if(y.classList.contains("push-right")){let M=Math.max(C.left,0);return La(0,0,M,f.height)}return f}function Ue(f){let y=nt();if(!y)return;let C=no();y.style.setProperty("max-width",`${Math.max(0,C.width-Fh*2)}px`,"important"),y.style.left=`${C.left}px`;let M=a?.panel.getBoundingClientRect(),H=Oh({anchorRect:d5(f),toolbarWidth:y.offsetWidth||320,toolbarHeight:y.offsetHeight||40,bounds:C,avoidRects:M?[M]:[],edgePadding:Fh,gap:Qw});y.style.left=`${H.left}px`,y.style.top=`${H.top}px`}function Ie(f){let y=nt();if(!y)return;if(!f||!f.isConnected){y.style.display="none",y.replaceChildren();return}if(y.querySelector(".font-preview-select.open")){y.style.display="flex",Ue(f);return}let C=window.getComputedStyle(f),M=Ee(f),H=!Vh.has(f.tagName.toLowerCase()),P=C.display==="flex"||C.display==="inline-flex";if(y.replaceChildren(),M==="text"){y.appendChild(R(C)),y.appendChild(Pe()),y.appendChild(D(C)),H&&(y.appendChild(G("Width","width",C.width)),y.appendChild(G("Height","height",C.height)));let J=(parseInt(C.fontWeight,10)||400)>=600;y.appendChild(ve(Qn("textBold"),"Bold",()=>{Gt("fontWeight",J,"700","400",Le=>(parseInt(Le,10)||400)>=600)},J));let fe=C.fontStyle==="italic";y.appendChild(ve(Qn("textItalic"),"Italic",()=>{Gt("fontStyle",fe,"italic","normal",Le=>Le==="italic")},fe)),y.appendChild(Pe()),y.appendChild(Se(C)),y.appendChild(Pe()),y.appendChild(De("Text color",C.color,"color")),y.appendChild(De("Background color",C.backgroundColor,"backgroundColor"))}else if(M==="image")y.appendChild(Q(C)),y.appendChild(ue("Object fit",C.objectFit||"fill",[{label:"Fill",value:"fill"},{label:"Contain",value:"contain"},{label:"Cover",value:"cover"},{label:"None",value:"none"},{label:"Scale down",value:"scale-down"}],Y=>_e("objectFit",Y),null));else{y.appendChild(R(C)),y.appendChild(Pe());let Y=C.display||"block";y.appendChild(ue("Display",Y,[{label:"Default",value:""},{label:"Block",value:"block"},{label:"Flex",value:"flex"},{label:"Inline flex",value:"inline-flex"},{label:"Grid",value:"grid"},{label:"Inline block",value:"inline-block"},{label:"Inline",value:"inline"},{label:"None",value:"none"}],J=>_e("display",J),"layout")),y.appendChild(G("Width","width",C.width)),y.appendChild(G("Height","height",C.height)),y.appendChild(Q(C)),y.appendChild(Pe()),y.appendChild(De("Text color",C.color,"color")),y.appendChild(De("Background color",C.backgroundColor,"backgroundColor"))}P&&(y.appendChild(Pe()),y.appendChild(be(C)),y.appendChild($e(C)),y.appendChild(Ht(C)),y.appendChild(qe(C))),y.style.display="flex",Ue(f)}let ee=[],ne=[];function oo(f){for(let y of["__v0_margin_overlay","__v0_padding_overlay"])for(let C=0;C<4;C++){let M=document.createElement("div");M.className=y,M.style.display="none",f.appendChild(M),y==="__v0_margin_overlay"?ee.push(M):ne.push(M)}}let Xe=[],oe=[],le=[],St=[],Ze=[],Mt=!1,Me=null,Io={top:"bottom",right:"left",bottom:"top",left:"right"};function Na(f){return f==="top"||f==="right"||f==="bottom"||f==="left"}function Dr(f){Mt!==f&&(Mt=f,d&&d.classList.toggle("faded",f),ee.forEach(y=>y.classList.toggle("faded",f)),ne.forEach(y=>y.classList.toggle("faded",f)),Xe.forEach(y=>y.classList.toggle("faded",f)))}function on(f){return Me?.session.handle===f}function Nt(){return Me?.started??!1}function $n(f,y){!a||!y.styleProperty||a.shadowRoot.dispatchEvent(new CustomEvent(f,{bubbles:!0,detail:{property:y.styleProperty}}))}function Yt(f,y){return Me?!1:(Me={session:y,pointerId:f.pointerId,startX:f.clientX,startY:f.clientY,started:!1},f.preventDefault(),!0)}function Ir(f){!Me||Me.started||(Me.started=!0,document.body.style.userSelect="none",document.documentElement.style.userSelect="none",Me.session.onStart?.(f),$n("v0-drag-start",Me.session))}function Or(f){if(!(!Me||f.pointerId!==Me.pointerId)){if(!Me.started){let y=Me.session.threshold??0,C=f.clientX-Me.startX,M=f.clientY-Me.startY;if(Math.hypot(C,M)<y)return;Ir(f)}f.preventDefault(),f.stopPropagation(),Me.session.onUpdate(f)}}function rn(f,y){if(!Me||f.pointerId!==Me.pointerId)return;let C=Me;Me=null,C.started&&(f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation(),y?C.session.onCommit(f):C.session.onCancel?.(),$n("v0-drag-end",C.session),C.session.onCleanup?.(),document.body.style.userSelect="",document.documentElement.style.userSelect="",C.session.suppressClickOnEnd&&(A=!0))}function zr(){if(!Me)return;let f=Me;Me=null,f.started&&(f.session.onCancel?.(),$n("v0-drag-end",f.session)),f.session.onCleanup?.(),document.body.style.userSelect="",document.documentElement.style.userSelect=""}function Oo(f){Or(f)}function Fr(f){rn(f,!0)}function Vr(f){rn(f,!1)}function ro(){if(!a)return null;let f=a.shadowRoot,y=f.querySelector(".__v0_selection_overlay");y||(y=document.createElement("div"),y.className="__v0_selection_overlay",y.style.display="none",f.appendChild(y)),f.querySelectorAll(".__v0_margin_overlay").forEach(H=>H.remove()),f.querySelectorAll(".__v0_padding_overlay").forEach(H=>H.remove()),f.querySelectorAll(".__v0_gap_overlay").forEach(H=>H.remove()),f.querySelectorAll(".__v0_margin_handle").forEach(H=>H.remove()),f.querySelectorAll(".__v0_padding_handle").forEach(H=>H.remove()),f.querySelectorAll(".__v0_gap_handle").forEach(H=>H.remove()),f.querySelectorAll(".__v0_border_radius_handle").forEach(H=>H.remove()),ee=[],ne=[],Xe=[],oe=[],le=[],St=[],Ze=[],oo(f);let C=["top","right","bottom","left"];C.forEach(H=>{let P=document.createElement("div");P.className="__v0_margin_handle",P.dataset.side=H;let Y=H==="top"||H==="bottom",J=Y?"linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(224, 156, 79, 0.8) calc(50% - 0.5px), rgba(224, 156, 79, 0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))":"linear-gradient(to right, transparent calc(50% - 0.5px), rgba(224, 156, 79, 0.8) calc(50% - 0.5px), rgba(224, 156, 79, 0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))";P.style.cssText=`position: fixed; width: ${Y?"20px":"13px"}; height: ${Y?"13px":"20px"}; background: ${J}; z-index: 2; display: none; cursor: ${Y?"ns-resize":"ew-resize"}; pointer-events: auto; user-select: none;`,P.dataset.gradientHover=Y?"linear-gradient(to bottom, transparent calc(50% - 1px), rgba(224, 156, 79, 1) calc(50% - 1px), rgba(224, 156, 79, 1) calc(50% + 1px), transparent calc(50% + 1px))":"linear-gradient(to right, transparent calc(50% - 1px), rgba(224, 156, 79, 1) calc(50% - 1px), rgba(224, 156, 79, 1) calc(50% + 1px), transparent calc(50% + 1px))",P.dataset.gradientNormal=J,f.appendChild(P),oe.push(P),P.addEventListener("mouseenter",()=>{P.style.background=P.dataset.gradientHover}),P.addEventListener("mouseleave",()=>{on(P)||(P.style.background=P.dataset.gradientNormal)})}),C.forEach(H=>{let P=document.createElement("div");P.className="__v0_padding_handle",P.dataset.side=H;let Y=H==="top"||H==="bottom",J=Y?"linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(146, 168, 24, 0.8) calc(50% - 0.5px), rgba(146, 168, 24, 0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))":"linear-gradient(to right, transparent calc(50% - 0.5px), rgba(146, 168, 24, 0.8) calc(50% - 0.5px), rgba(146, 168, 24, 0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))";P.style.cssText=`position: fixed; width: ${Y?"20px":"13px"}; height: ${Y?"13px":"20px"}; background: ${J}; z-index: 2; display: none; cursor: ${Y?"ns-resize":"ew-resize"}; pointer-events: auto; user-select: none;`,P.dataset.gradientHover=Y?"linear-gradient(to bottom, transparent calc(50% - 1px), rgba(146, 168, 24, 1) calc(50% - 1px), rgba(146, 168, 24, 1) calc(50% + 1px), transparent calc(50% + 1px))":"linear-gradient(to right, transparent calc(50% - 1px), rgba(146, 168, 24, 1) calc(50% - 1px), rgba(146, 168, 24, 1) calc(50% + 1px), transparent calc(50% + 1px))",P.dataset.gradientNormal=J,f.appendChild(P),le.push(P),P.addEventListener("mouseenter",()=>{P.style.background=P.dataset.gradientHover}),P.addEventListener("mouseleave",()=>{on(P)||(P.style.background=P.dataset.gradientNormal)})});let M=document.createElement("div");return M.className="__v0_border_radius_handle",M.dataset.corner="tr",M.style.cssText="position: fixed; width: 9px; height: 9px; background: white; border: 1.5px solid oklch(0.57 0.25 260 / 0.8); border-radius: 50%; z-index: 2; display: none; cursor: grab; pointer-events: auto; user-select: none; transition: border-color 0.1s;",M.addEventListener("mouseenter",()=>{M.style.borderColor="oklch(0.57 0.25 260)"}),M.addEventListener("mouseleave",()=>{on(M)||(M.style.borderColor="oklch(0.57 0.25 260 / 0.8)")}),y.appendChild(M),Ze.push(M),y}function zo(f){if(!a)return;let y=a.shadowRoot;for(;Xe.length<f;){let C=document.createElement("div");C.className="__v0_gap_overlay",C.style.display="none",y.appendChild(C),Xe.push(C)}for(;St.length<f;){let C=document.createElement("div");C.className="__v0_gap_handle",C.style.cssText="position: fixed; z-index: 2; display: none; pointer-events: auto; user-select: none;",C.addEventListener("mouseenter",()=>{C.style.background=C.dataset.gradientHover??""}),C.addEventListener("mouseleave",()=>{on(C)||(C.style.background=C.dataset.gradientNormal??"")}),y.appendChild(C),St.push(C)}for(;Xe.length>f;)Xe.pop()?.remove();for(;St.length>f;)St.pop()?.remove()}function ot(f){return f.flexDirection.startsWith("row")?"columnGap":"rowGap"}function At(f){if(We(f))return!1;let y=window.getComputedStyle(f);return!(y.display==="none"||y.position==="absolute"||y.position==="fixed")}function Dn(f,y){let C=o.selectedElement;if(!C||!a)return null;let H=window.getComputedStyle(C).borderRadius,P=parseFloat(H)||0,Y=f.clientX,J=f.clientY;return{id:"radius",handle:y,styleProperty:"borderRadius",suppressClickOnEnd:!0,onStart(){y.style.cursor="grabbing",y.style.borderColor="oklch(0.57 0.25 260)"},onUpdate(fe){let Le=C.getBoundingClientRect(),Ke=Y-fe.clientX,ft=fe.clientY-J,Lt=(Ke+ft)/2,Qe=Math.max(0,Math.min(P+Lt,Math.min(Le.width,Le.height)/2));Jn(C,"borderRadius",`${Math.round(Qe)}px`)},onCommit(){let fe=window.getComputedStyle(C).borderRadius;fe!==H&&(ie(C,"borderRadius",fe,r,o.hasReact,H),a&&Be(a,o,r))},onCleanup(){y.style.cursor="grab",y.style.borderColor="oklch(0.57 0.25 260 / 0.8)"}}}function Br(f){if(!(f instanceof PointerEvent)||!a)return;let y=f.target;if(!y.classList.contains("__v0_border_radius_handle"))return;let C=Dn(f,y);C&&Yt(f,C)}function Fo(f,y,C,M,H){return f?y==="top"?M-H.clientY:y==="right"?H.clientX-C:y==="bottom"?M-H.clientY:y==="left"?C-H.clientX:0:y==="top"?H.clientY-M:y==="right"?C-H.clientX:y==="bottom"?H.clientY-M:y==="left"?H.clientX-C:0}function Pt(f,y,C){let M=o.selectedElement;if(!M||!a)return null;let H=y.dataset.side;if(!Na(H))return null;let P={top:C?"marginTop":"paddingTop",right:C?"marginRight":"paddingRight",bottom:C?"marginBottom":"paddingBottom",left:C?"marginLeft":"paddingLeft"},Y=P[H];if(!Y)return null;let J=Io[H],fe=P[J],Le=window.getComputedStyle(M),Ke=Le[Y],ft=parseFloat(Ke)||0,Lt=Le[fe],Qe=f.clientX,lo=f.clientY,kt=!1;return{id:"spacing",handle:y,styleProperty:Y,suppressClickOnEnd:!0,onStart(){y.style.cursor="grabbing",y.style.background=y.dataset.gradientHover},onUpdate(yt){let mt=Fo(C,H,Qe,lo,yt),Tt=Math.max(0,Math.round(ft+mt));if(Jn(M,Y,`${Tt}px`),yt.altKey){Jn(M,fe,`${Tt}px`),kt=!0;return}kt&&(Jn(M,fe,Lt),kt=!1)},onCommit(yt){!yt.altKey&&kt&&Jn(M,fe,Lt);let mt=window.getComputedStyle(M),Tt=mt[Y],It=mt[fe],dn=!1;Tt!==Ke&&(ie(M,Y,Tt,r,o.hasReact,Ke),dn=!0),It!==Lt&&(ie(M,fe,It,r,o.hasReact,Lt),dn=!0),dn&&a&&Be(a,o,r)},onCleanup(){let yt=H==="top"||H==="bottom";y.style.cursor=yt?"ns-resize":"ew-resize",y.style.background=y.dataset.gradientNormal}}}function $t(f){if(!(f instanceof PointerEvent)||!a)return;let y=f.target,C=y.classList.contains("__v0_margin_handle"),M=y.classList.contains("__v0_padding_handle");if(!C&&!M)return;let H=Pt(f,y,C);H&&Yt(f,H)}function Aa(f,y){let C=o.selectedElement;if(!C||!a)return null;let M=window.getComputedStyle(C);if(M.display!=="flex"&&M.display!=="inline-flex")return null;let H=ot(M),P=M.gap,Y=M[H],J=parseFloat(Y)||0,fe=M.flexDirection.startsWith("row")?f.clientX:f.clientY;return{id:"gap",handle:y,styleProperty:"gap",suppressClickOnEnd:!0,onStart(){y.style.cursor=M.flexDirection.startsWith("row")?"ew-resize":"ns-resize"},onUpdate(Le){let Ke=M.flexDirection.startsWith("row")?Le.clientX:Le.clientY,ft=Math.max(0,Math.round(J+Ke-fe));Jn(C,"gap",`${ft}px`),Ae(C,{updateToolbar:!1})},onCommit(){let Le=window.getComputedStyle(C).gap;Le!==P&&(ie(C,"gap",Le,r,o.hasReact,P),a&&Be(a,o,r))},onCleanup(){y.style.cursor=M.flexDirection.startsWith("row")?"ew-resize":"ns-resize"}}}function Pa(f){if(!(f instanceof PointerEvent)||!a)return;let y=f.target;if(!y.classList.contains("__v0_gap_handle"))return;let C=Aa(f,y);C&&Yt(f,C)}function Ae(f,y={}){let C=y.updateToolbar??!0;if(d||(d=ro()),L&&a&&ee.length===0&&oo(a.shadowRoot),a&&Ze.length===0&&(d=ro()),!f||!d){d&&(d.style.display="none"),Ie(null),ee.forEach(de=>de.style.display="none"),ne.forEach(de=>de.style.display="none"),Xe.forEach(de=>de.style.display="none"),oe.forEach(de=>de.style.display="none"),le.forEach(de=>de.style.display="none"),St.forEach(de=>de.style.display="none"),Ze.forEach(de=>de.style.display="none");return}let M=f.getBoundingClientRect(),H=window.getComputedStyle(f),P=2,Y=0,J=window.innerWidth,fe=window.innerHeight;if(a){let de=a.panel;if(de.classList.contains("push-mode")){let st=de.getBoundingClientRect();de.classList.contains("push-left")?Y=st.right:de.classList.contains("push-right")&&(J=st.left)}}let Le=Math.max(Y,M.left-P),Ke=Math.max(0,M.top-P),ft=Math.min(J,M.right+P),Lt=Math.min(fe,M.bottom+P);if(d.style.display="block",d.style.left=`${Le}px`,d.style.top=`${Ke}px`,d.style.width=`${ft-Le}px`,d.style.height=`${Lt-Ke}px`,C&&Ie(f),!L){ee.forEach(de=>de.style.display="none"),ne.forEach(de=>de.style.display="none"),Xe.forEach(de=>de.style.display="none"),St.forEach(de=>de.style.display="none");return}let Qe=parseFloat(H.marginTop)||0,lo=parseFloat(H.marginRight)||0,kt=parseFloat(H.marginBottom)||0,yt=parseFloat(H.marginLeft)||0,mt=parseFloat(H.paddingTop)||0,Tt=parseFloat(H.paddingRight)||0,It=parseFloat(H.paddingBottom)||0,dn=parseFloat(H.paddingLeft)||0;Qe>0?(ee[0].style.display="block",ee[0].style.left=`${M.left}px`,ee[0].style.top=`${M.top-Qe}px`,ee[0].style.width=`${M.width}px`,ee[0].style.height=`${Qe}px`):ee[0].style.display="none",lo>0?(ee[1].style.display="block",ee[1].style.left=`${M.right}px`,ee[1].style.top=`${M.top-Qe}px`,ee[1].style.width=`${lo}px`,ee[1].style.height=`${M.height+Qe+kt}px`):ee[1].style.display="none",kt>0?(ee[2].style.display="block",ee[2].style.left=`${M.left}px`,ee[2].style.top=`${M.bottom}px`,ee[2].style.width=`${M.width}px`,ee[2].style.height=`${kt}px`):ee[2].style.display="none",yt>0?(ee[3].style.display="block",ee[3].style.left=`${M.left-yt}px`,ee[3].style.top=`${M.top-Qe}px`,ee[3].style.width=`${yt}px`,ee[3].style.height=`${M.height+Qe+kt}px`):ee[3].style.display="none",mt>0?(ne[0].style.display="block",ne[0].style.left=`${M.left}px`,ne[0].style.top=`${M.top}px`,ne[0].style.width=`${M.width}px`,ne[0].style.height=`${mt}px`):ne[0].style.display="none",Tt>0?(ne[1].style.display="block",ne[1].style.left=`${M.right-Tt}px`,ne[1].style.top=`${M.top+mt}px`,ne[1].style.width=`${Tt}px`,ne[1].style.height=`${M.height-mt-It}px`):ne[1].style.display="none",It>0?(ne[2].style.display="block",ne[2].style.left=`${M.left}px`,ne[2].style.top=`${M.bottom-It}px`,ne[2].style.width=`${M.width}px`,ne[2].style.height=`${It}px`):ne[2].style.display="none",dn>0?(ne[3].style.display="block",ne[3].style.left=`${M.left}px`,ne[3].style.top=`${M.top+mt}px`,ne[3].style.width=`${dn}px`,ne[3].style.height=`${M.height-mt-It}px`):ne[3].style.display="none";let un=20,pn=13;Qe>0&&oe[0]?(oe[0].style.left=`${M.left+M.width/2-un/2}px`,oe[0].style.top=`${M.top-Qe/2-pn/2}px`,oe[0].style.display="block"):oe[0]&&(oe[0].style.display="none"),lo>0&&oe[1]?(oe[1].style.left=`${M.right+lo/2-pn/2}px`,oe[1].style.top=`${M.top+M.height/2-un/2}px`,oe[1].style.display="block"):oe[1]&&(oe[1].style.display="none"),kt>0&&oe[2]?(oe[2].style.left=`${M.left+M.width/2-un/2}px`,oe[2].style.top=`${M.bottom+kt/2-pn/2}px`,oe[2].style.display="block"):oe[2]&&(oe[2].style.display="none"),yt>0&&oe[3]?(oe[3].style.left=`${M.left-yt/2-pn/2}px`,oe[3].style.top=`${M.top+M.height/2-un/2}px`,oe[3].style.display="block"):oe[3]&&(oe[3].style.display="none"),mt>0&&le[0]?(le[0].style.left=`${M.left+M.width/2-un/2}px`,le[0].style.top=`${M.top+mt/2-pn/2}px`,le[0].style.display="block"):le[0]&&(le[0].style.display="none"),Tt>0&&le[1]?(le[1].style.left=`${M.right-Tt/2-pn/2}px`,le[1].style.top=`${M.top+M.height/2-un/2}px`,le[1].style.display="block"):le[1]&&(le[1].style.display="none"),It>0&&le[2]?(le[2].style.left=`${M.left+M.width/2-un/2}px`,le[2].style.top=`${M.bottom-It/2-pn/2}px`,le[2].style.display="block"):le[2]&&(le[2].style.display="none"),dn>0&&le[3]?(le[3].style.left=`${M.left+dn/2-pn/2}px`,le[3].style.top=`${M.top+M.height/2-un/2}px`,le[3].style.display="block"):le[3]&&(le[3].style.display="none");let Va=H.display==="flex"||H.display==="inline-flex"?Array.from(f.children).filter(de=>de instanceof HTMLElement&&At(de)):[];zo(Math.max(0,Va.length-1));let et=H.flexDirection.startsWith("row");for(let de=0;de<Xe.length;de++){let st=Xe[de],Re=St[de],Gr=Va[de],Dc=Va[de+1];if(!st||!Re||!Gr||!Dc){st&&(st.style.display="none"),Re&&(Re.style.display="none");continue}let fn=Gr.getBoundingClientRect(),mn=Dc.getBoundingClientRect(),Ba=et?Math.min(fn.right,mn.right):Math.max(fn.left,mn.left),Sg=et?Math.max(fn.left,mn.left):Math.min(fn.right,mn.right),Wa=et?Math.max(fn.top,mn.top):Math.min(fn.bottom,mn.bottom),Mg=et?Math.min(fn.bottom,mn.bottom):Math.max(fn.top,mn.top),Yr=Sg-Ba,Kr=Mg-Wa;if(et&&Kr<=0||!et&&Yr<=0){st.style.display="none",Re.style.display="none";continue}let Ic=et&&Yr<=0?Ba-4:Ba,Oc=!et&&Kr<=0?Wa-4:Wa,zc=et?Math.max(8,Yr):Yr,Fc=et?Kr:Math.max(8,Kr),Lg=et?Ic:M.left,kg=et?M.top:Oc,Tg=et?zc:M.width,_g=et?M.height:Fc;if(st.style.display="block",st.style.left=`${Lg}px`,st.style.top=`${kg}px`,st.style.width=`${Tg}px`,st.style.height=`${_g}px`,Re.style.display="block",Re.style.cursor=et?"ew-resize":"ns-resize",et){let Bo=Math.max(20,Math.min(36,M.height*.22)),Wo="linear-gradient(to right, transparent calc(50% - 0.5px), rgba(37, 99, 235, 0.7) calc(50% - 0.5px), rgba(37, 99, 235, 0.7) calc(50% + 0.5px), transparent calc(50% + 0.5px))",qo="linear-gradient(to right, transparent calc(50% - 1px), rgba(37, 99, 235, 0.95) calc(50% - 1px), rgba(37, 99, 235, 0.95) calc(50% + 1px), transparent calc(50% + 1px))";Re.dataset.gradientNormal=Wo,Re.dataset.gradientHover=qo,Re.style.background=on(Re)?qo:Wo,Re.style.width="13px",Re.style.height=`${Bo}px`,Re.style.left=`${Ic+zc/2-13/2}px`,Re.style.top=`${M.top+M.height/2-Bo/2}px`}else{let qa=Math.max(20,Math.min(40,M.width*.18)),Bo=13,Wo="linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(37, 99, 235, 0.7) calc(50% - 0.5px), rgba(37, 99, 235, 0.7) calc(50% + 0.5px), transparent calc(50% + 0.5px))",qo="linear-gradient(to bottom, transparent calc(50% - 1px), rgba(37, 99, 235, 0.95) calc(50% - 1px), rgba(37, 99, 235, 0.95) calc(50% + 1px), transparent calc(50% + 1px))";Re.dataset.gradientNormal=Wo,Re.dataset.gradientHover=qo,Re.style.background=on(Re)?qo:Wo,Re.style.width=`${qa}px`,Re.style.height=`${Bo}px`,Re.style.left=`${M.left+M.width/2-qa/2}px`,Re.style.top=`${Oc+Fc/2-Bo/2}px`}}let $c=5,Cg=9;if(Ze.length>0){let de=Ze[0],st=H.backgroundColor!=="rgba(0, 0, 0, 0)"&&H.backgroundColor!=="transparent",Re=H.backgroundImage!=="none"&&H.backgroundImage!=="",Gr=H.borderStyle!=="none"&&parseFloat(H.borderWidth)>0;st||Re||Gr?(de.style.left=`${M.right-$c-Cg}px`,de.style.top=`${M.top+$c}px`,de.style.display="block"):de.style.display="none"}}function Wr(){o.hoveredElement=null,K(null),p?.hide()}function qr(f){f.altKey||p?.hide()}function $a(){if(document.addEventListener("mousemove",sn),document.addEventListener("mouseleave",Wr),document.addEventListener("click",Tc,!0),document.addEventListener("contextmenu",Rc,!0),document.addEventListener("dblclick",Ur,!0),document.addEventListener("mousedown",lt,!0),document.addEventListener("mouseup",lt,!0),document.addEventListener("pointerdown",lt,!0),document.addEventListener("pointerup",lt,!0),document.addEventListener("pointerdown",Je,!0),document.addEventListener("touchstart",lt,!0),document.addEventListener("touchend",lt,!0),document.addEventListener("keydown",Nc),document.addEventListener("keyup",qr),document.addEventListener("scroll",Dt,!0),window.addEventListener("resize",Dt),window.addEventListener(xr,Hc),document.addEventListener("pointermove",Oo),document.addEventListener("pointerup",Fr),document.addEventListener("pointercancel",Vr),!a){a=Lm(o,r,Xr,e,mg,t,i),document.body.appendChild(a.host),l=new AbortController;let{signal:f}=l,y=null,C=null;f.addEventListener("abort",()=>{y&&clearTimeout(y),C&&clearTimeout(C)});let M=()=>{y&&clearTimeout(y),y=setTimeout(()=>{Dr(!1)},500)},H=P=>!(!P||P==="gap"||P.startsWith("margin")||P.startsWith("padding"));a.shadowRoot.addEventListener("v0-drag-start",P=>{if(y&&clearTimeout(y),H(P.detail?.property)&&Dr(!0),o.selectedElement){let Y=o.selectedElement.style.transition;o.selectedElement.dataset.v0OriginalTransition=Y,o.selectedElement.style.transition="none"}}),a.shadowRoot.addEventListener("v0-drag-end",P=>{if(H(P.detail?.property)&&M(),o.selectedElement){let Y=o.selectedElement.dataset.v0OriginalTransition;Y!==void 0&&(o.selectedElement.style.transition=Y,delete o.selectedElement.dataset.v0OriginalTransition)}}),a.shadowRoot.addEventListener("v0-inspect-toggle",P=>{v=P.detail?.enabled??!0,v||(s?.close(),o.hoveredElement=null,K(null)),document.body.classList.toggle("v0-design-mode-active",v)}),a.shadowRoot.addEventListener("v0-layout-overlay-toggle",P=>{L=P.detail?.show??!0,o.selectedElement&&Ae(o.selectedElement)}),a.shadowRoot.addEventListener("pointerdown",Br),a.shadowRoot.addEventListener("pointerdown",$t),a.shadowRoot.addEventListener("pointerdown",Pa),window.addEventListener("v0-style-change",()=>{d&&d.classList.add("faded"),ee.forEach(P=>P.classList.add("faded")),ne.forEach(P=>P.classList.add("faded")),Xe.forEach(P=>P.classList.add("faded")),C&&clearTimeout(C),C=setTimeout(()=>{d&&d.classList.remove("faded"),ee.forEach(P=>P.classList.remove("faded")),ne.forEach(P=>P.classList.remove("faded")),Xe.forEach(P=>P.classList.remove("faded")),o.selectedElement&&Ae(o.selectedElement)},1e3)},{signal:f}),window.addEventListener("v0-screenshot-mode-enter",()=>{s?.close(),p?.hide(),o.selectedElement&&(o.selectedElement=null,d&&(d.style.display="none"),Ie(null),ee.forEach(P=>P.remove()),ee=[],ne.forEach(P=>P.remove()),ne=[],oe.forEach(P=>P.remove()),oe=[],le.forEach(P=>P.remove()),le=[],Ze.forEach(P=>P.remove()),Ze=[],document.body.classList.remove("v0-element-selected"))},{signal:f})}Be(a,o,r),V||(V=Hh(()=>v,()=>b,Vo,()=>a,()=>{c&&(c.style.display="none"),d&&(d.style.display="none"),p?.hide()},()=>{o.selectedElement&&Ae(o.selectedElement)})),ao(),yg()}function io(){document.removeEventListener("mousemove",sn),document.removeEventListener("mouseleave",Wr),document.removeEventListener("click",Tc,!0),document.removeEventListener("contextmenu",Rc,!0),document.removeEventListener("dblclick",Ur,!0),document.removeEventListener("mousedown",lt,!0),document.removeEventListener("mouseup",lt,!0),document.removeEventListener("pointerdown",lt,!0),document.removeEventListener("pointerup",lt,!0),document.removeEventListener("pointerdown",Je,!0),document.removeEventListener("touchstart",lt,!0),document.removeEventListener("touchend",lt,!0),document.removeEventListener("keydown",Nc),document.removeEventListener("keyup",qr),document.removeEventListener("scroll",Dt,!0),window.removeEventListener("resize",Dt),window.removeEventListener(xr,Hc),window.removeEventListener("v0-design-mode-refresh-panel",ce),document.removeEventListener("pointermove",Oo),document.removeEventListener("pointerup",Fr),document.removeEventListener("pointercancel",Vr),h&&(h.disconnect(),h=null),Fa(),an(),o.hoveredElement=null,K(null),zr(),F&&(F.destroy(),F=null),p&&(p.destroy(),p=null),V&&(V.cleanup(),V=null),s?.destroy(),s=null,l?.abort(),l=null,a&&(a.destroy(),a.host.remove(),a=null),xg()}function In(f){if(b)return;x=f.textContent||"",E=na({element:f,state:o,historyManager:r,property:"textContent",fallbackValue:x}),w=null,b=!0,f.contentEditable="true",f.focus();let y=document.createRange();y.selectNodeContents(f);let C=window.getSelection();C&&(C.removeAllRanges(),C.addRange(y)),f.addEventListener("blur",ln),f.addEventListener("input",Kt),f.addEventListener("keydown",jr)}function an(){if(!b||!o.selectedElement)return;let f=o.selectedElement;f.contentEditable="false",f.removeEventListener("blur",ln),f.removeEventListener("input",Kt),f.removeEventListener("keydown",jr),b=!1,x=null,E=null,w=null,window.getSelection()?.removeAllRanges()}function ln(){an()}function Kt(){!o.selectedElement||E===null||(w=gr({element:o.selectedElement,state:o,historyManager:r,property:"textContent",originalValue:E,newValue:o.selectedElement.textContent||"",activeRecord:w}),Ae(o.selectedElement,{updateToolbar:!1}),Ue(o.selectedElement))}function jr(f){f.key==="Escape"&&(o.selectedElement&&x!==null&&E!==null&&(o.selectedElement.textContent=x,w=gr({element:o.selectedElement,state:o,historyManager:r,property:"textContent",originalValue:E,newValue:x,activeRecord:w})),an(),f.preventDefault(),f.stopPropagation())}function Ur(f){let y=f.target;!y||We(y)||o.selectedElement===y&&(f.preventDefault(),f.stopPropagation(),In(y))}function lt(f){if(b||!v||Nt())return;let y=f.target;!y||We(y)||f instanceof MouseEvent&&Vo(f.clientX,f.clientY)||f instanceof MouseEvent&&document.elementsFromPoint(f.clientX,f.clientY).some(M=>We(M))||f.preventDefault()}function On(f,y){let C=document.elementsFromPoint(f,y);if(a?.host&&C.includes(a.host))return null;for(let M of C)if(M!==c&&M!==d&&!We(M))return M;return null}function Da(f,y,C){let M=document.elementsFromPoint(f,y);for(let H of M)if(H!==C&&!C.contains(H)&&!We(H)&&H!==document.documentElement)return H;return null}function S(f,y){if(f===y||y.contains(f))return!1;let C=f.tagName.toLowerCase();return!["img","input","textarea","select","button","a","svg","picture","canvas","video"].includes(C)}function z(f){let y=window.getComputedStyle(f);return y.display.includes("flex")&&y.flexDirection.startsWith("row")?"horizontal":"vertical"}function B(f,y,C,M){if(!S(f,y))return null;let H=Array.from(f.children).filter(J=>J instanceof HTMLElement&&J!==y&&!y.contains(J)&&!We(J));if(H.length===0)return{parent:f,before:null,position:"inside",reference:f,horizontal:!1};let P=z(f)==="horizontal";for(let J of H){let fe=J.getBoundingClientRect(),Le=P?fe.left+fe.width/2:fe.top+fe.height/2;if((P?C:M)<Le)return{parent:f,before:J,position:"before",reference:J,horizontal:P}}let Y=H[H.length-1];return{parent:f,before:null,position:"after",reference:Y,horizontal:P}}function pe(f,y,C){let M=Da(f,y,C);if(!M)return null;let H=window.getComputedStyle(M).display;if(H.includes("flex")||H.includes("grid")){let ft=B(M,C,f,y);if(ft)return ft}let P=M.parentElement;if(!P||P===C||C.contains(P))return null;let Y=M.getBoundingClientRect(),J=z(P)==="horizontal",fe=J?f:y,Le=J?Y.left+Y.width/2:Y.top+Y.height/2,Ke=fe<Le;return{parent:P,before:Ke?M:M.nextSibling,position:Ke?"before":"after",reference:M,horizontal:J}}function me(f,y){if(f===document.body||f===document.documentElement)return!1;let C=f.parentNode;if(!C)return!1;let M=f.nextSibling,H=y.parent,P=y.before;return P===f||H===C&&P===M?!1:(P&&P.parentNode!==H&&(P=null),r.push({type:"move",element:f,elementInfo:Ne(f,o.hasReact),fromParent:C,fromNextSibling:M,toParent:H,toNextSibling:P,timestamp:Date.now()}),H.insertBefore(f,P),cn(f),K(null),ao(),a&&Be(a,o,r),!0)}function ye(f){let y=null;return{id:"move",threshold:e5,suppressClickOnEnd:!0,onUpdate(C){y=pe(C.clientX,C.clientY,f),y?ge()?.show(y):F?.hide()},onCommit(){y&&me(f,y)},onCancel(){F?.hide()},onCleanup(){F?.hide()}}}function Je(f){if(!v||b||Nt()||f.button!==0||f.altKey||f.metaKey||f.ctrlKey||Vo(f.clientX,f.clientY)||document.elementsFromPoint(f.clientX,f.clientY).some(M=>We(M)))return;let C=On(f.clientX,f.clientY);!C||C!==o.selectedElement||Yt(f,ye(C))}function sn(f){if(!v||s?.isOpen()||Nt())return;let y=On(f.clientX,f.clientY);if(!y||We(y)){o.hoveredElement=null,K(null),p?.hide();return}f.altKey&&o.selectedElement&&y!==o.selectedElement?te()?.show(o.selectedElement.getBoundingClientRect(),y.getBoundingClientRect()):p?.hide(),y!==o.hoveredElement&&(y!==o.selectedElement?(o.hoveredElement=y,K(y)):(o.hoveredElement=null,K(null)))}function Dt(f){f.composedPath().some(y=>y instanceof Element&&We(y))||s?.close(),o.hoveredElement&&K(o.hoveredElement),o.selectedElement&&(Ae(o.selectedElement),Ue(o.selectedElement)),p?.hide()}function Vo(f,y){if(!a)return!1;let C=a.panel.getBoundingClientRect();return f>=C.left&&f<=C.right&&y>=C.top&&y<=C.bottom}function Tc(f){if(f.target instanceof Element&&We(f.target))return;if(Nh()){Ah();return}if(A){A=!1,f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation();return}if(b||!v||Nt()||Vo(f.clientX,f.clientY)||document.elementsFromPoint(f.clientX,f.clientY).some(M=>We(M)))return;let C=On(f.clientX,f.clientY);!C||We(C)||(f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation(),C===o.selectedElement&&a&&(a.suppressNextTextareaAutofocus=!0),cn(C))}function _c(f,y,C){if(!a)return;a.suppressNextTextareaAutofocus=!0,cn(f),Te(),K(null),p?.hide();let M=navigator.platform.toUpperCase().includes("MAC"),H=[];f.childElementCount===0&&f.textContent?.trim()&&H.push({label:"Edit text",onSelect:()=>In(f)});let P=f.parentElement;H.push({label:"Select parent",disabled:!P||P===document.documentElement,onSelect:()=>{P&&cn(P)}});let Y="Ctrl+Z",J="Ctrl+Shift+Z",fe="Del";M&&(Y="\u2318Z",J="\u21E7\u2318Z",fe="\u232B"),H.push({label:"Undo",shortcut:Y,separatorBefore:!0,disabled:!r.canUndo(),onSelect:()=>za(!1)},{label:"Redo",shortcut:J,disabled:!r.canRedo(),onSelect:()=>za(!0)},{label:"Delete",shortcut:fe,separatorBefore:!0,disabled:f===document.body||f===document.documentElement,onSelect:Oa}),s??(s=Cf(a.shadowRoot)),s.open(y,C,H)}function Rc(f){if(!v||b||Nt()||f.composedPath().some(C=>C instanceof Element&&We(C))||Vo(f.clientX,f.clientY))return;let y=On(f.clientX,f.clientY);!y||We(y)||(f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation(),_c(y,f.clientX,f.clientY))}function dg(f){if(f.type==="style"){let y=(f.element?.isConnected?f.element:null)??document.querySelector(f.elementInfo.selectorPath);if(!y)return;f.property==="textContent"?y.textContent=f.oldValue:y.style[f.property]=f.oldValue}else if(f.type==="deleteElement"){if(f.element.isConnected)return;f.nextSibling?.parentNode===f.parent?f.parent.insertBefore(f.element,f.nextSibling):f.parent.appendChild(f.element),cn(f.element)}else if(f.type==="move"){if(!f.element.isConnected)return;f.fromNextSibling?.parentNode===f.fromParent?f.fromParent.insertBefore(f.element,f.fromNextSibling):f.fromParent.appendChild(f.element),cn(f.element),ao()}}function ug(f){if(f.type==="style"){let y=(f.element?.isConnected?f.element:null)??document.querySelector(f.elementInfo.selectorPath);if(!y)return;f.property==="textContent"?y.textContent=f.newValue:y.style[f.property]=f.newValue}else if(f.type==="deleteElement"){if(!f.element.isConnected)return;o.selectedElement===f.element&&Xr(),f.element.remove()}else if(f.type==="move"){if(!f.element.isConnected)return;f.toNextSibling?.parentNode===f.toParent?f.toParent.insertBefore(f.element,f.toNextSibling):f.toParent.appendChild(f.element),cn(f.element),ao()}}function Ia(f){let y=f.target;return y?y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.tagName==="SELECT"||y.isContentEditable?!0:f.composedPath().some(C=>C instanceof Element&&We(C)):!1}function Oa(){let f=o.selectedElement;!f||!f.parentNode||f===document.body||f===document.documentElement||(r.push({type:"deleteElement",element:f,elementInfo:Ne(f,o.hasReact),parent:f.parentNode,nextSibling:f.nextSibling,timestamp:Date.now()}),Xr(),f.remove(),K(null),a&&Be(a,o,r))}function Hc(){Oa()}function za(f){let y;f?(y=r.redo(),y&&ug(y)):(y=r.undo(),y&&dg(y)),y&&(a&&Be(a,o,r),o.selectedElement&&Ae(o.selectedElement))}function Nc(f){if(!b){if(v&&o.selectedElement&&(f.key==="ContextMenu"||f.shiftKey&&f.key==="F10")&&!Ia(f)){f.preventDefault(),f.stopPropagation();let y=o.selectedElement.getBoundingClientRect();_c(o.selectedElement,y.left+8,y.top+8);return}if(f.key==="Escape"){o.selectedElement&&Xr();return}if((f.key==="Backspace"||f.key==="Delete")&&!f.metaKey&&!f.ctrlKey&&!f.altKey&&!f.shiftKey&&o.selectedElement&&!Ia(f)){f.preventDefault(),f.stopPropagation(),Oa();return}(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="z"&&!Ia(f)&&(f.preventDefault(),s?.close(),za(f.shiftKey))}}function pg(){let f=null,y=()=>{if(o.selectedElement){let C=o.selectedElement.getBoundingClientRect();(!f||C.left!==f.left||C.top!==f.top||C.width!==f.width||C.height!==f.height)&&(Ae(o.selectedElement),f=C),m=requestAnimationFrame(y)}};m=requestAnimationFrame(y)}function Fa(){m!==null&&(cancelAnimationFrame(m),m=null)}function fg(f){let y=window.getComputedStyle(f);o.originalStyles.clear(),["fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textAlign","textDecorationLine","textDecorationStyle","textDecorationColor","textTransform","color","backgroundColor","display","flexDirection","alignItems","justifyContent","gap","visibility","marginTop","marginRight","marginBottom","marginLeft","paddingTop","paddingRight","paddingBottom","paddingLeft","borderColor","borderStyle","borderWidth","borderRadius","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius","opacity","boxShadow"].forEach(M=>{o.originalStyles.set(M,y[M])})}async function mg(){return o.selectedElement?Ph(o.selectedElement,()=>{c&&(c.style.visibility="hidden"),d&&(d.style.visibility="hidden"),u&&(u.style.visibility="hidden"),ee.forEach(f=>{f.style.visibility="hidden"}),ne.forEach(f=>{f.style.visibility="hidden"}),Xe.forEach(f=>{f.style.visibility="hidden"}),oe.forEach(f=>{f.style.visibility="hidden"}),le.forEach(f=>{f.style.visibility="hidden"}),Ze.forEach(f=>{f.style.visibility="hidden"})},()=>{c&&(c.style.visibility=""),d&&(d.style.visibility=""),u&&(u.style.visibility=""),ee.forEach(f=>{f.style.visibility=""}),ne.forEach(f=>{f.style.visibility=""}),Xe.forEach(f=>{f.style.visibility=""}),oe.forEach(f=>{f.style.visibility=""}),le.forEach(f=>{f.style.visibility=""}),Ze.forEach(f=>{f.style.visibility=""}),o.selectedElement&&Ae(o.selectedElement)}):null}async function cn(f){s?.close(),h&&h.disconnect(),Fa(),o.selectedElement=f,o.hoveredElement===f&&(o.hoveredElement=null,K(null)),document.body.classList.add("v0-element-selected"),fg(f),Ae(f),h=new ResizeObserver(()=>{o.selectedElement&&Ae(o.selectedElement)}),h.observe(f),pg(),a&&Be(a,o,r),Ac()}function Xr(){s?.close(),an(),h&&(h.disconnect(),h=null),Fa(),o.selectedElement=null,document.body.classList.remove("v0-element-selected"),Ae(null),Ie(null),p?.hide(),a&&Be(a,o,r),n.onSelect?.(null)}function hg(f){let y=f.getAttribute("data-v0-label");if(y)return y;let C=Ne(f,o.hasReact);return C.reactComponentName&&C.reactComponentName!==C.tagName?C.reactComponentName:C.id?`#${C.id}`:C.tagName}function gg(){let f=document.body;if(!f)return null;k=0,N.clear(),I=new WeakMap;let y=0,C=H=>{if(y>=p5||Wh(H))return null;let P=H.tagName.toLowerCase();if(f5.has(P))return null;let Y=`n${k++}`;N.set(Y,H),I.set(H,Y),y++;let J=[];for(let Lt of Array.from(H.children)){if(!(Lt instanceof HTMLElement))continue;let Qe=C(Lt);Qe&&J.push(Qe)}let fe={id:Y,tag:P,name:hg(H),children:J},Le=H.getAttribute("role");Le&&(fe.role=Le);let Ke=window.getComputedStyle(H),ft=Ke.display;return Ke.visibility==="hidden"&&(fe.hidden=!0),J.length>0&&(ft.includes("flex")?fe.layout="flex":ft.includes("grid")&&(fe.layout="grid")),fe},M=[];for(let H of Array.from(f.children)){if(!(H instanceof HTMLElement))continue;let P=C(H);P&&M.push(P)}return{id:"root",tag:"body",name:"Page",children:M}}function ao(){n.onTree?.(gg()),Ac()}function bg(){$===null&&($=window.requestAnimationFrame(()=>{$=null,ao()}))}function yg(){_||!document.body||(_=new MutationObserver(f=>{f.every(C=>{let M=C.target;return M instanceof Element&&Wh(M)})||bg()}),_.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","id","role","data-v0-label","style"]}))}function xg(){_?.disconnect(),_=null,$!==null&&(cancelAnimationFrame($),$=null)}function Ac(){if(!o.selectedElement){n.onSelect?.(null);return}let f=I.get(o.selectedElement)??null;n.onSelect?.({nodeId:f,selectedNodeIds:f?[f]:[]})}function vg(f){let y=N.get(f);!y||!y.isConnected||(cn(y),y.scrollIntoView({block:"nearest",inline:"nearest"}))}function wg(f){let y=N.get(f);if(!y||!y.isConnected||y===o.selectedElement){Pc();return}o.hoveredElement=y,K(y)}function Pc(){o.hoveredElement=null,K(null)}function Eg(f,y){let C=N.get(f);if(!(!C||!C.isConnected)&&!(C===document.body||C===document.documentElement)){if(y)window.getComputedStyle(C).visibility!=="hidden"&&O.set(C,C.style.visibility),ie(C,"visibility","hidden",r,o.hasReact);else{let M=O.get(C)??"";ie(C,"visibility",M,r,o.hasReact),O.delete(C)}o.selectedElement===C&&(Ae(y?null:C),Ie(y?null:C)),K(null),ao(),a&&Be(a,o,r)}}return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se(),ka=()=>{io(),window.removeEventListener("beforeunload",Z),document.body.classList.remove("v0-design-mode-active"),document.body.classList.remove("v0-element-selected"),document.documentElement.classList.remove("v0-element-selected"),document.documentElement.style.marginLeft="",document.documentElement.style.marginRight="",Rr&&(Rr.remove(),Rr=null),o.enabled=!1,ka=null,n.onSelect?.(null),n.onTree?.(null)},{setLogo(f){i=f,a&&Zs(a,i,t)},selectNode:vg,hoverNode:wg,clearHoveredNode:Pc,setNodeVisibility:Eg}}function jh(){ka&&ka()}var Fh,Qw,e5,Vh,t5,n5,o5,r5,l5,Rr,ka,p5,f5,Uh=T(()=>{"use strict";Is();Sf();ji();Rf();Yi();Os();If();Ff();Js();Vi();$h();Yn();ea();zh();Bs();Qs();Fh=8,Qw=8,e5=6,Vh=new Set(["h1","h2","h3","h4","h5","h6","p","span","a","button","label","li"]),t5=new Set(["img","svg","picture"]),n5=["10px","12px","14px","16px","18px","20px","24px","30px","36px","48px","60px","72px","96px"],o5=["0px","4px","6px","8px","12px","16px","24px","9999px"],r5=["0px","4px","8px","12px","16px","24px","32px","48px"];l5={alignmentCenter:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM3.5 7.25H4.25H11.75H12.5V8.75H11.75H4.25H3.5V7.25ZM2.5 12.5H3.25H12.75H13.5V14H12.75H3.25H2.5V12.5Z" fill="currentColor"/>',alignmentLeft:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM1 7H1.75H9.25H10V8.5H9.25H1.75H1V7ZM1 12H1.75H11.25H12V13.5H11.25H1.75H1V12Z" fill="currentColor"/>',alignmentRight:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z" fill="currentColor"/>',arrowLeftRight:'<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46975 11.7803L4.00008 12.3106L5.06074 11.25L4.53041 10.7196L2.56076 8.75H13.4393L11.4697 10.7197L10.9393 11.25L12 12.3107L12.5303 11.7803L15.6036 8.70711C15.9941 8.31658 15.9941 7.68342 15.6036 7.29289L12.5303 4.21967L12 3.68934L10.9393 4.75L11.4697 5.28033L13.4393 7.25H2.56072L4.53042 5.28031L5.06075 4.74998L4.00009 3.68932L3.46975 4.21965L0.396531 7.29287C0.00600663 7.68339 0.00600657 8.31656 0.396531 8.70708L3.46975 11.7803Z" fill="currentColor"/>',arrowUpDown:'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.21968 3.46975L3.68935 4.00008L4.75001 5.06074L5.28034 4.53041L7.24999 2.56076L7.24999 13.4393L5.28031 11.4697L4.74998 10.9393L3.68932 12L4.21965 12.5303L7.29288 15.6036C7.6834 15.9941 8.31657 15.9941 8.70709 15.6036L11.7803 12.5303L12.3106 12L11.25 10.9393L10.7197 11.4697L8.74999 13.4393L8.74999 2.56072L10.7197 4.53041L11.25 5.06075L12.3107 4.00009L11.7803 3.46975L8.70712 0.396531C8.31659 0.00600645 7.68343 0.00600637 7.2929 0.396531L4.21968 3.46975Z" fill="currentColor"/>',chevronDown:'<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor"/>',droplet:'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47471 5.7366L8 2.14221L11.5253 5.73661C13.4916 7.74143 13.4916 11.0037 11.5253 13.0086C9.57493 14.9971 6.42507 14.9971 4.47471 13.0086C2.50843 11.0037 2.50843 7.74143 4.47471 5.7366ZM3.40381 4.68629L6.94949 1.07111L8 0L9.05051 1.07111L12.5962 4.68629C15.1346 7.27446 15.1346 11.4707 12.5962 14.0589C10.0578 16.647 5.94221 16.647 3.40381 14.0589C0.865397 11.4707 0.865399 7.27446 3.40381 4.68629ZM11.25 9.5V8.75H9.75V9.5C9.75 10.4665 8.9665 11.25 8 11.25H7.25V12.75H8C9.79493 12.75 11.25 11.2949 11.25 9.5Z" fill="currentColor"/>',image:'<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2.5H1.5V9.18933L2.96966 7.71967L3.18933 7.5H3.49999H6.63001H6.93933L6.96966 7.46967L10.4697 3.96967L11.5303 3.96967L14.5 6.93934V2.5ZM8.00066 8.55999L9.53034 10.0897L10.0607 10.62L9.00001 11.6807L8.46968 11.1503L6.31935 9H3.81065L1.53032 11.2803L1.5 11.3106V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V9.06066L11 5.56066L8.03032 8.53033L8.00066 8.55999ZM4.05312e-06 10.8107V12.5C4.05312e-06 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V9.56066L16.5607 9L16.0303 8.46967L16 8.43934V2.5V1H14.5H1.5H4.05312e-06V2.5V10.6893L-0.0606689 10.75L4.05312e-06 10.8107Z" fill="currentColor"/>',layout:'<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2.5H1.5V5.005H14.5V2.5ZM14.5 6.255H6.245V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6.255ZM4.995 6.255H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V6.255ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5Z" fill="currentColor"/>',message:'<path fill-rule="evenodd" clip-rule="evenodd" d="M2.8914 10.4028L2.98327 10.6318C3.22909 11.2445 3.5 12.1045 3.5 13C3.5 13.3588 3.4564 13.7131 3.38773 14.0495C3.69637 13.9446 4.01409 13.8159 4.32918 13.6584C4.87888 13.3835 5.33961 13.0611 5.70994 12.7521L6.22471 12.3226L6.88809 12.4196C7.24851 12.4724 7.61994 12.5 8 12.5C11.7843 12.5 14.5 9.85569 14.5 7C14.5 4.14431 11.7843 1.5 8 1.5C4.21574 1.5 1.5 4.14431 1.5 7C1.5 8.18175 1.94229 9.29322 2.73103 10.2153L2.8914 10.4028ZM2.8135 15.7653C1.76096 16 1 16 1 16C1 16 1.43322 15.3097 1.72937 14.4367C1.88317 13.9834 2 13.4808 2 13C2 12.3826 1.80733 11.7292 1.59114 11.1903C0.591845 10.0221 0 8.57152 0 7C0 3.13401 3.58172 0 8 0C12.4183 0 16 3.13401 16 7C16 10.866 12.4183 14 8 14C7.54721 14 7.10321 13.9671 6.67094 13.9038C6.22579 14.2753 5.66881 14.6656 5 15C4.23366 15.3832 3.46733 15.6195 2.8135 15.7653Z" fill="currentColor"/>',paperAirplane:'<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7477 0.293701L0.747695 5.2937L0.730713 6.70002L6.81589 9.04047C6.88192 9.06586 6.93409 9.11804 6.95948 9.18406L9.29994 15.2692L10.7063 15.2523L15.7063 1.25226L14.7477 0.293701ZM7.31426 7.62503L3.15693 6.02605L12.1112 2.8281L7.31426 7.62503ZM8.37492 8.68569L9.9739 12.843L13.1719 3.88876L8.37492 8.68569Z" fill="currentColor"/>',textBold:'<path fill-rule="evenodd" clip-rule="evenodd" d="M3 1H2V2V7V8V9V14V15H3H10C12.2091 15 14 13.2091 14 11C14 9.54567 13.2239 8.27263 12.0632 7.57246C12.6478 6.87702 13 5.97964 13 5C13 2.79086 11.2091 1 9 1H3ZM9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3H4V7H9ZM4 9V13H10C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9H9H4Z" fill="currentColor"/>',textItalic:'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 1H5H13.75H14.5V2.5H13.75H10.5475L7.02746 13.5H11H11.75V15H11H2.25H1.5V13.5H2.25H5.45254L8.97254 2.5H5H4.25V1Z" fill="currentColor"/>'};Rr=null,ka=null,p5=300,f5=new Set(["script","style","link","meta","noscript","template","br","next-route-announcer"])});var Xh={};hn(Xh,{disableDesignMode:()=>jh,setupDesignMode:()=>qh});var Gh=T(()=>{"use strict";Uh()});var eg={};hn(eg,{addAnnotationPin:()=>w5,clearAnnotationPins:()=>Qh,disableAnnotationMode:()=>Jh,highlightAnnotationPin:()=>C5,scrollToAnnotation:()=>E5,setupAnnotationMode:()=>v5,unhighlightAnnotationPins:()=>S5});function m5(e){let t=null;if(e.selectorPath)try{t=document.querySelector(e.selectorPath)}catch{t=null}if(t){let n=t.getBoundingClientRect();return{left:n.left+n.width/2,top:n.top+n.height/2}}return{left:e.position.x*window.innerWidth,top:e.position.y*window.innerHeight}}function Zh(e){let{left:t,top:n}=m5(e);e.el.style.left=`${t-12}px`,e.el.style.top=`${n-12}px`}function h5(){eo.forEach(Zh)}function Nr(){Lc||(Lc=!0,requestAnimationFrame(()=>{Lc=!1,h5()}))}function g5(){Ta||(Ta=!0,document.addEventListener("scroll",Nr,!0),window.addEventListener("resize",Nr),Hr=new ResizeObserver(Nr),Hr.observe(document.documentElement),document.body&&Hr.observe(document.body))}function b5(){Ta&&(Ta=!1,document.removeEventListener("scroll",Nr,!0),window.removeEventListener("resize",Nr),Hr?.disconnect(),Hr=null)}function y5(e){let t=eo.get(e);t&&(t.el.remove(),eo.delete(e))}function x5(e){return!e.className||typeof e.className!="string"?!1:e.className.split(/\s+/).some(t=>t.startsWith(nn))}function Kh(e){let t=document.elementsFromPoint(e.clientX,e.clientY);for(let n of t)if(!x5(n)&&n!==bt)return n;return null}function v5(){(Po||$o||Do||bt)&&Jh(),Yh=qi(),document.body.classList.add("v0-annotation-mode-active");let e=document.createElement("style");e.className=`${nn}style`,e.textContent=".v0-annotation-mode-active, .v0-annotation-mode-active * { cursor: crosshair !important; }",document.head.appendChild(e),bt=document.createElement("div"),bt.className=`${nn}hover`,Object.assign(bt.style,{position:"fixed",pointerEvents:"none",border:"1px solid oklch(0.57 0.25 260)",borderRadius:"1px",boxSizing:"border-box",zIndex:"999999",display:"none",transition:"top 0.05s, left 0.05s, width 0.05s, height 0.05s"}),document.body.appendChild(bt),Po=t=>{let n=Kh(t);if(!n||!bt){bt&&(bt.style.display="none");return}let o=1,r=n.getBoundingClientRect();Object.assign(bt.style,{display:"block",top:`${r.top-o}px`,left:`${r.left-o}px`,width:`${r.width+o*2}px`,height:`${r.height+o*2}px`})},$o=t=>{let n=t.target?.closest?.(`.${nn}pin`);if(n instanceof HTMLElement&&n.dataset.annotationId){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();let u=n.getBoundingClientRect();Oe("annotationPinClicked",{id:n.dataset.annotationId,position:{x:(u.left+u.width/2)/window.innerWidth,y:(u.top+u.height/2)/window.innerHeight}});return}t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();let o=Kh(t);if(!o)return;let r=Ne(o,Yh),i=o.getBoundingClientRect(),a=i.left+i.width/2,l=i.top+i.height/2,s=a/window.innerWidth,c=l/window.innerHeight,d=(o.innerText||o.textContent||"").replace(/\s+/g," ").trim(),p=d.length>160?`${d.slice(0,160)}\u2026`:d;Oe("annotationElementClicked",{elementInfo:{selectorPath:r.selectorPath,tagName:r.tagName,id:r.id,classNames:r.classNames,textContent:r.textContent,reactComponentName:r.reactComponentName,elementText:p||null},position:{x:s,y:c}})},Do=t=>{t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),Oe("annotationEscape"))},document.addEventListener("mousemove",Po,!0),document.addEventListener("click",$o,!0),document.addEventListener("keydown",Do,!0)}function Jh(){document.body.classList.remove("v0-annotation-mode-active"),Po&&(document.removeEventListener("mousemove",Po,!0),Po=null),$o&&(document.removeEventListener("click",$o,!0),$o=null),Do&&(document.removeEventListener("keydown",Do,!0),Do=null),bt&&(bt.remove(),bt=null);let e=document.querySelector(`.${nn}style`);e&&e.remove(),Qh()}function w5(e,t,n,o){y5(e);let r=document.createElement("div");r.className=`${nn}pin`,r.dataset.annotationId=e,r.textContent=String(n),Object.assign(r.style,{position:"fixed",width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#2563EB",color:"#fff",fontSize:"10px",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"999998",pointerEvents:"auto",cursor:"pointer",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 2px white",lineHeight:"1",fontFamily:"system-ui, -apple-system, sans-serif",transition:"transform 0.15s, box-shadow 0.15s"}),document.body.appendChild(r);let i={el:r,selectorPath:o||"",position:t};eo.set(e,i),g5(),Zh(i)}function Qh(){eo.forEach(e=>e.el.remove()),eo.clear(),document.querySelectorAll(`.${nn}pin`).forEach(e=>e.remove()),b5()}function E5(e,t){let n=eo.get(e);if(n?.selectorPath)try{let i=document.querySelector(n.selectorPath);if(i){i.scrollIntoView({block:"center",inline:"nearest"});let a=i.getBoundingClientRect();return{x:(a.left+a.width/2)/window.innerWidth,y:(a.top+a.height/2)/window.innerHeight}}}catch{}let o=t.x*window.innerWidth,r=t.y*window.innerHeight;return window.scrollTo({left:o-window.innerWidth/2,top:r-window.innerHeight/2}),t}function C5(e){document.querySelectorAll(`.${nn}pin`).forEach(n=>{let o=n;o.dataset.annotationId===e&&(o.style.transform="scale(1.4)",o.style.boxShadow="0 2px 8px rgba(37, 99, 235, 0.5), 0 0 0 3px white",o.style.transition="transform 0.15s, box-shadow 0.15s")})}function S5(){document.querySelectorAll(`.${nn}pin`).forEach(t=>{let n=t;n.style.transform="",n.style.boxShadow="0 2px 6px rgba(0, 0, 0, 0.2), 0 0 0 2px white",n.style.transition="transform 0.15s, box-shadow 0.15s"})}var bt,Po,$o,Do,Yh,nn,eo,Hr,Ta,Lc,tg=T(()=>{"use strict";el();ji();Yn();bt=null,Po=null,$o=null,Do=null,Yh=!1,nn="__v0_annotation_",eo=new Map,Hr=null,Ta=!1,Lc=!1});ja();function qc(e){if(typeof e!="string")return null;try{let t=new URL(e);return t.protocol!=="http:"&&t.protocol!=="https:"?null:t.href}catch{return null}}var Ua={RUNTIME_ERROR:"runtime:error",UNHANDLED_REJECTION:"runtime:unhandled-rejection",NEXT_DEV_BRIDGE_EVENT:"next-dev-bridge:event"},jo={ERROR:"build:error",READY:"build:ready",RECOVERED:"build:recovered"};function jc(e){return e?"hmr":"initial"}function Uc({compileStartedAt:e,compileReadyAt:t,previewReadyAt:n}){let o=Math.round(Math.max(0,n-t));return e===null?{renderMs:o}:{nextCompileMs:Math.round(Math.max(0,t-e)),renderMs:o,nextCompileToPreviewReadyMs:Math.round(Math.max(0,n-e))}}el();function od(e){let t=e;return{name:t&&t.name?t.name:"Error",message:t&&t.message?t.message:String(e),stack:t&&t.stack?t.stack:void 0}}var Ot={BUILDING:"building",SYNC:"sync",BUILT:"built",SERVER_ERROR:"serverError",TURBOPACK_CONNECTED:"turbopack-connected"};function sd(e={}){let t={verbose:!!e.verbose,raw:!!e.raw,now:e.now},n=rd(),o=(r,i)=>{let a=[],l=d=>{a.push(d),i&&i(d,Xo(n))},s=Zg(r);if(s.error)return l(s.error),{events:a,state:Xo(n)};let c=s.message;return t.verbose&&l({type:"internal:hmr-message",message:Kg(c),rawMessage:t.raw?c:void 0}),Yg(n,c,t,l),{events:a,state:Xo(n)}};return o.getSnapshot=()=>Xo(n),o.reset=()=>(Object.assign(n,rd()),Xo(n)),o}function Yg(e,t,n,o){let r=typeof t.type=="string"?t.type:"";switch(e.lastMessageType=r||null,r){case Ot.BUILDING:{let i=tl(n);e.phase="compiling",e.building=!0,e.buildCycle+=1,e.lastChangedAt=i,o({type:"build:started",internalType:Ot.BUILDING,cycle:e.buildCycle});return}case Ot.SYNC:case Ot.BUILT:{let i=Array.isArray(t.errors)?t.errors:[],a=Array.isArray(t.warnings)?t.warnings:[],l=id({errors:i,warnings:a});if(e.building=!1,e.hash=typeof t.hash=="string"?t.hash:e.hash,e.warnings=l.warnings,e.rawWarnings=a,e.lastChangedAt=tl(n),l.errors.length>0){let c=e.errors.join(`
---
`),d=l.errors.join(`
---
`),p=e.hasErrors?c===d?"unchanged":"updated":"shown";e.phase="error",e.hasErrors=!0,e.errors=l.errors,e.rawErrors=i,e.firstError=l.errors[0]||null,o({type:"build:error",status:"error",change:p,trigger:r===Ot.SYNC?"sync":"update",internalType:r,hash:e.hash,errors:e.errors,warnings:e.warnings,firstError:e.firstError});return}let s=e.hasErrors;e.phase="ok",e.hasErrors=!1,e.errors=[],e.rawErrors=[],e.firstError=null,o({type:s?"build:recovered":"build:ready",status:"ready",trigger:r===Ot.SYNC?"sync":"update",internalType:r,hash:e.hash,errors:e.errors,warnings:e.warnings});return}case Ot.SERVER_ERROR:{let i=e.hasErrors,a=Jg(t),l=id({errors:[a],warnings:[]});e.phase="error",e.building=!1,e.hasErrors=!0,e.errors=l.errors,e.warnings=[],e.rawErrors=[a],e.rawWarnings=[],e.firstError=l.errors[0]||null,e.lastChangedAt=tl(n),o({type:"build:error",status:"error",change:i?"updated":"shown",trigger:"server",internalType:r,errors:e.errors,warnings:[],firstError:e.firstError});return}case Ot.TURBOPACK_CONNECTED:default:return}}function tl(e){let t=e.now?e.now():new Date;return t instanceof Date?t.toISOString():typeof t=="number"?new Date(t).toISOString():t}function rd(){return{connection:"idle",phase:"idle",building:!1,buildCycle:0,hasErrors:!1,hash:null,errors:[],warnings:[],rawErrors:[],rawWarnings:[],firstError:null,lastMessageType:null,lastChangedAt:null}}function Kg(e){let t={type:typeof e.type=="string"?e.type:"unknown"};if(typeof e.hash=="string"&&(t.hash=e.hash),Array.isArray(e.errors)&&(t.errors=e.errors.length),Array.isArray(e.warnings)&&(t.warnings=e.warnings.length),e.type===Ot.TURBOPACK_CONNECTED&&ol(e.data)){let n=e.data.sessionId;typeof n=="number"&&(t.sessionId=n)}return e.type===Ot.SERVER_ERROR&&(t.hasErrorJSON=!!e.errorJSON),t}function Zg(e){if(typeof e=="string")try{let t=JSON.parse(e);return ol(t)?{message:t}:nl(e,new Error("HMR message must be an object"))}catch(t){return nl(e,t)}return ol(e)?{message:e}:nl(void 0,new Error("Unsupported HMR message payload"))}function nl(e,t){return{error:{type:"observer:error",reason:"invalid-hmr-message",raw:e,error:od(t)}}}function Jg(e){if(!e.errorJSON)return{message:"Unknown HMR server error"};try{return JSON.parse(String(e.errorJSON))}catch{return{message:String(e.errorJSON)}}}function id(e,t=!1){let n=(e.errors||[]).map(i=>ad(i,t)),o=(e.warnings||[]).map(i=>ad(i,t)),r=n.findIndex(i=>i.includes("ReactServerComponentsError"));if(r>0){let[i]=n.splice(r,1);n.unshift(i)}return!t&&n.some(ld)?{errors:n.filter(ld),warnings:[]}:{errors:n,warnings:o}}function ad(e,t){let n;if(typeof e=="string")n=e;else if(e&&typeof e=="object"){let o=e,r=Array.isArray(o.moduleTrace)?o.moduleTrace.filter(a=>!/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(a.originName||"")):[],i=[];if(o.moduleName&&i.push(ei(String(o.moduleName))),o.file&&i.push(ei(String(o.file))),o.message&&i.push(String(o.message)),o.details&&t&&i.push(String(o.details)),r.length>0){let a=r.map(l=>l.moduleName).filter(Boolean);a.length>0&&i.push(`Import trace for requested module:
${a.join(`
`)}`)}o.stack&&t&&i.push(String(o.stack)),n=i.length>0?i.join(`
`):JSON.stringify(e)}else n=String(e);return Qg(n,t)}function Qg(e,t){let n=[],o=ei(String(e)).split(`
`);o=o.filter(r=>{let i=/Module [A-Za-z ]+\(from (.+)\):?\s*$/.exec(r);return i?(n.push(i[1]),!1):!0}),o=o.map(r=>{let i=/Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(r);if(!i)return r;let[,a,l,s]=i;return`Syntax error: ${s} (${a}:${l||0})`}),e=o.join(`
`),e=e0(e),e=e.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g,`Syntax error: $3 ($1:$2)
`),e=e.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm,"Attempted import error: '$1' is not exported from '$2'."),e=e.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm,"Attempted import error: '$2' does not contain a default export (imported as '$1')."),e=e.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm,"Attempted import error: '$1' is not exported from '$3' (imported as '$2')."),o=e.split(`
`),o.length>2&&o[1].trim()===""&&o.splice(1,1),o[1]&&o[1].startsWith("Module not found: ")&&(o=[o[0],o[1].replace("Error: ","").replace("Module not found: Cannot find file:","Cannot find file:"),...o.slice(2)]),t||(e=o.join(`
`),e=e.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm,""),e=e.replace(/^\s*at\s<anonymous>(\n|$)/gm,""),o=e.split(`
`));for(let r of n)/[/\\]next[/\\]dist[/\\]/.test(r)||o.push(`  (from ${r})`);return o=o.filter((r,i,a)=>i===0||r.trim()!==""||r.trim()!==a[i-1].trim()),o.join(`
`).trim()}function ld(e){let t=ei(e);return t.includes("Syntax error:")||t.includes("Parsing ecmascript source code failed")||t.includes("Parsing CSS source code failed")||t.includes(`Caused by:
    Syntax Error`)}function ei(e){return String(e).replace(/\x1B\[[0-?]*[ -/]*[@-~]/g,"")}function e0(e){return e.split(`
`).map(t=>t0(t)).join(`
`)}function t0(e){let t=/^(\s*)(?:⨯\s+)?(.+?)\s*$/.exec(e);if(!t)return e;let[,n,o]=t;return r0(o)?`${n}${n0(o)}`:e}function n0(e){let t=/(?::\d+(?::\d+)?)$/.exec(e)?.[0]||"",n=t?e.slice(0,-t.length):e;return`${o0(n)}${t}`}function o0(e){return e.replace("[project]/","./").replaceAll("/./","/").replace("\\\\?\\","")}function r0(e){let t=e.replace(/(?::\d+(?::\d+)?)$/,"");return t.startsWith("[project]/")||t.startsWith("./")||t.startsWith("../")||t.startsWith("/")||/^[A-Za-z]:[\\/]/.test(t)||t.startsWith("file://")}function Xo(e){return{...e,errors:[...e.errors],warnings:[...e.warnings],rawErrors:[...e.rawErrors],rawWarnings:[...e.rawWarnings]}}function ol(e){return!!(e&&typeof e=="object"&&!Array.isArray(e))}async function pd(e,t={}){let n=L0(e),o=k0(e),r=md(l0(o),t);return{message:n,stack:o,frames:r,mappedFrames:r.length>0?await i0(r,t):[]}}async function i0(e,t={}){let n=md(e,t),o=c0(n,t),r=null;for(let i of o){let a=await a0(i,t);if(g0(a.mappedFrames))return fd(e,a.mappedFrames);if(r=a.mappedFrames,!a.shouldTryNextVariant)break}return r??ni(e,"No stack frames to map.")}async function a0(e,t){try{let n=t.fetch||fetch,o=E0(t),r=S0(o),i=new Headers(t.headers),a={...t.requestInit,method:"POST",body:JSON.stringify({frames:e,isServer:!!t.isServer,isEdgeServer:!!t.isEdgeServer,isAppDirectory:t.isAppDirectory!==!1,sourceOrigin:C0(t.sourceOrigin)})};r||i.set("content-type","application/json"),M0(i)&&(a.headers=i);let l=await n(o,a);if(!l.ok||l.status===204){let c=await l.text().catch(()=>"");return{mappedFrames:ni(e,c||"No original stack frame response from Next dev server."),shouldTryNextVariant:!1}}let s=await l.json();return Array.isArray(s)?{mappedFrames:fd(e,s),shouldTryNextVariant:!0}:{mappedFrames:ni(e,"Invalid original stack frame response from Next dev server."),shouldTryNextVariant:!1}}catch(n){return{mappedFrames:ni(e,n instanceof Error?n.message:String(n)),shouldTryNextVariant:!1}}}function fd(e,t){return e.map((n,o)=>t[o]||{status:"rejected",reason:"No original stack frame response for frame."})}function ni(e,t){return e.map(()=>({status:"rejected",reason:t}))}function l0(e){return String(e).split(`
`).map(s0).filter(Boolean)}function s0(e){let t=e.trim();if(!t.startsWith("at "))return null;let n=t.slice(3),o="<anonymous>",r=n,i=n.indexOf("("),a=n.endsWith(")")?n.length-1:-1;i!==-1&&a!==-1&&a>i&&(o=n.slice(0,i).trim()||"<anonymous>",r=n.slice(i+1,a));let l=/^(.*):(\d+):(\d+)$/.exec(r);return l?{file:l[1],methodName:o,arguments:[],line1:Number(l[2]),column1:Number(l[3])}:null}function md(e,t={}){return e.map(n=>({...n,file:u0(n.file,t)}))}function c0(e,t){let n=[],o=new Set;cd(n,o,e);for(let r of[p0,f0,i=>m0(i,t.sourceOrigin)]){let i=d0(e,r);i&&cd(n,o,i)}return n}function cd(e,t,n){let o=JSON.stringify(n.map(r=>r.file));t.has(o)||(t.add(o),e.push(n))}function d0(e,t){let n=!1,o=e.map(r=>{if(typeof r.file!="string")return r;let i=t(r.file);return!i||i===r.file?r:(n=!0,{...r,file:i})});return n?o:null}function u0(e,t){if(typeof e!="string"||e.length===0)return;let n=dd(e);if(n)return ti(n,t.frameRoot);if(v0(e))return e;let o=String(t.fallbackFile||"");if(o&&ud(o)===ud(e)){let i=dd(o);return i?ti(i,t.frameRoot):o}let r=e.startsWith("_next/")?`/${e}`:e;return r.startsWith("/_next/")?ti(r,t.frameRoot):w0(r)?ti(`/_next/static/chunks/${r}`,t.frameRoot):e}function ti(e,t){if(!t)return e;let n=String(t).replace(/\/+$/,""),o=e.replace(/^\/_next\/static\/?/,"");return`${n}/${o}`}function p0(e){let t=il(e);return t?`.next/dev/static/${t.replace(/^\/_next\/static\/?/,"")}`:null}function f0(e){let t=il(e);return t?t.replace(/^\/+/,""):null}function m0(e,t){if(!t)return null;let n=il(e);if(!n)return null;try{return new URL(n,t).href}catch{return null}}function il(e){let t=hd(e);if(t.startsWith("/_next/static/"))return t;let n=h0(t,"/.next/dev/static/");return n?`/_next/static/${n}`:""}function dd(e){if(e.startsWith("/_next/"))return e;if(e.startsWith("_next/"))return`/${e}`;try{let t=new URL(e);return t.pathname.startsWith("/_next/")?t.pathname:""}catch{return""}}function hd(e){try{return new URL(e).pathname}catch{}return e.startsWith("/")?e:`/${e}`}function h0(e,t){let n=e.indexOf(t);return n===-1?"":e.slice(n+t.length)}function g0(e){for(let t of e){let n=b0(t);if(!n||n.ignored===!0)continue;let o=x0(n.file);if(!(!o||y0(o)))return!0}return!1}function b0(e){return!rl(e)||e.status!=="fulfilled"||!rl(e.value)||!rl(e.value.originalStackFrame)?null:e.value.originalStackFrame}function y0(e){let t=hd(e);return/\/(?:_next\/static|\.next\/dev\/static)\/chunks\//.test(t)||t.includes("/next/dist/compiled/")}function x0(e){return typeof e!="string"?"":e.trim()}function rl(e){return typeof e=="object"&&e!==null}function v0(e){return/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(e)}function w0(e){return!e.includes("/")&&e.endsWith(".js")&&(e.startsWith("_")||e.includes("._.")||e.startsWith("node_modules_")||e.startsWith("turbopack-"))}function ud(e){return e.split("?")[0].split(/[\\/]/).pop()||e}function E0(e){return e.endpoint?e.endpoint:e.url?new URL("/__nextjs_original-stack-frames",e.url):typeof window<"u"?new URL("/__nextjs_original-stack-frames",window.location.href):new URL("/__nextjs_original-stack-frames","http://localhost:3000")}function C0(e){if(e)try{return new URL(String(e)).origin}catch{return}}function S0(e){if(typeof window>"u")return!1;try{return new URL(String(e),window.location.href).origin!==window.location.origin}catch{return!1}}function M0(e){let t=!1;return e.forEach(()=>{t=!0}),t}function L0(e){return e instanceof Error?e.message:e&&typeof e=="object"&&"message"in e?String(e.message||""):typeof e=="string"?e:""}function k0(e){return e instanceof Error?e.stack||"":e&&typeof e=="object"&&"stack"in e?String(e.stack||""):typeof e=="string"?e:""}function xd(e,t={}){if(typeof window>"u")return T0();let n={errors:[]},o=new Set,r=!t.preferHMR,i=1;async function a(h){let m={...h,id:i++,isFatal:!1,severity:yd(),at:bd(t)};t.sourceMap&&(m.mapped=await pd(m,g(m,t.sourceMap))),n.errors=[...n.errors,m],u({type:"runtime:error",error:sl(m),errors:ll(n.errors)},n)}function l(h){c(A0(h))}function s(h){c(P0(h))}return window.addEventListener("error",l),window.addEventListener("unhandledrejection",s),{stop(){window.removeEventListener("error",l),window.removeEventListener("unhandledrejection",s),d()},reset(){return d(),n.errors=[],u({type:"runtime:cleared",errors:[]},n),al(n)},getSnapshot(){return al(n)},ingestHMR(h){let m=_0(h);if(!m||m.pathname!==D0())return;let b=I0();typeof m.htmlRequestId=="string"&&b!==void 0&&m.htmlRequestId!==b||(r=!1,d(),p(m.errors))}};function c(h){if(r){a(h);return}let m=setTimeout(()=>{o.delete(m),r=!0,a(h)},1e3);o.add(m)}function d(){for(let h of o)clearTimeout(h);o.clear()}function p(h){let m=new Map(n.errors.map(v=>[Go(v),v])),b=h.map(v=>{let L=N0(v),k=H0(v),N=Go({...L,isFatal:k});return m.get(N)||{...L,id:i++,isFatal:k,severity:yd(k),at:bd(t)}}),x=n.errors.map(Go),E=b.map(Go);if(JSON.stringify(x)===JSON.stringify(E))return;let w=new Set(x);if(n.errors=b,b.length===0){x.length>0&&u({type:"runtime:cleared",errors:[]},n);return}for(let v of b)w.has(Go(v))||u({type:"runtime:error",error:sl(v),errors:ll(b)},n)}function u(h,m){e&&e(h,al(m))}function g(h,m){return{...m,fallbackFile:m.fallbackFile||h.filename,sourceOrigin:m.sourceOrigin||z0()}}}function T0(){let e={errors:[]};return{stop(){},reset(){return e},getSnapshot(){return e},ingestHMR(){}}}function _0(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return null}if(!oi(t)||t.type!=="runtimeErrors"&&t.type!=="runtime-error-state"||typeof t.pathname!="string"||!Array.isArray(t.errors))return null;let n=t.type==="runtime-error-state";if(t.htmlRequestId!==void 0&&t.htmlRequestId!==null&&typeof t.htmlRequestId!="string"||t.clientId!==void 0&&typeof t.clientId!="string")return null;let o=t.errors.flatMap(r=>{if(!oi(r)||typeof r.type!="string"||typeof r.errorName!="string"||typeof r.message!="string"||r.fatal!==void 0&&typeof r.fatal!="boolean"||n&&typeof r.fatal!="boolean"||!R0(r.boundary)||!Array.isArray(r.stack))return[];let i=r.stack.flatMap(a=>!oi(a)||typeof a.file!="string"||typeof a.methodName!="string"||a.line!==null&&typeof a.line!="number"||a.column!==null&&typeof a.column!="number"?[]:[{file:a.file,methodName:a.methodName,line:a.line,column:a.column}]);return i.length!==r.stack.length?[]:[{type:r.type,errorName:r.errorName,message:r.message,...typeof r.fatal=="boolean"?{fatal:r.fatal}:{},...r.boundary!==void 0?{boundary:{...r.boundary}}:{},stack:i}]});return o.length!==t.errors.length?null:{...typeof t.clientId=="string"?{clientId:t.clientId}:{},pathname:t.pathname,...t.htmlRequestId!==void 0?{htmlRequestId:t.htmlRequestId}:{},errors:o}}function R0(e){return e===void 0?!0:oi(e)&&(e.kind==="default-global"||e.kind==="custom-global"||e.kind==="custom")&&(e.name===void 0||typeof e.name=="string")}function H0(e){return e.fatal??e.boundary?.kind==="default-global"}function N0(e){let t=e.stack[0],n=[`${e.errorName}: ${e.message}`,...e.stack.map(o=>{let r=`${o.file}${o.line===null?"":`:${o.line}`}${o.column===null?"":`:${o.column}`}`;return`    at ${o.methodName||"<anonymous>"} (${r})`})].join(`
`);return{source:"nextjs",name:e.errorName,message:e.message,stack:n,...e.boundary!==void 0?{boundary:{...e.boundary}}:{},filename:t?.file,line:t?.line??void 0,column:t?.column??void 0}}function A0(e){let t=vd(e.error,e.message||"Uncaught error"),n=e.filename||void 0,o=gd(e.lineno),r=gd(e.colno);return{source:"error",name:t.name,message:t.message,stack:t.stack||$0(t.message,n,o,r),filename:n,line:o,column:r}}function P0(e){let t=vd(e.reason,"Unhandled promise rejection");return{source:"unhandledrejection",name:t.name,message:t.message,stack:t.stack}}function vd(e,t){if(e instanceof Error)return{name:e.name||"Error",message:e.message||t,stack:e.stack||""};if(e&&typeof e=="object"){let n=e;return{name:typeof n.name=="string"?n.name:"Error",message:typeof n.message=="string"?n.message:O0(e)||t,stack:typeof n.stack=="string"?n.stack:""}}return{name:"Error",message:typeof e=="string"?e:e==null?t:String(e),stack:""}}function gd(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:void 0}function $0(e,t,n,o){return!t||!n||!o?"":`${e}
    at <anonymous> (${t}:${n}:${o})`}function bd(e){let t=e.now?e.now():new Date;return t instanceof Date?t.toISOString():typeof t=="number"?new Date(t).toISOString():String(t)}function yd(e){return e?"fatal":"recoverable"}function Go(e){return`${e.name}\0${e.message}\0${e.stack}\0${String(e.isFatal)}\0${JSON.stringify(e.boundary)}`}function D0(){try{return window.location.pathname||new URL(window.location.href).pathname}catch{return""}}function I0(){try{let e=window.__next_r;return typeof e=="string"?e:void 0}catch{return}}function oi(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function al(e){return{errors:ll(e.errors)}}function ll(e){return e.map(sl)}function sl(e){return{...e,boundary:e.boundary?{...e.boundary}:void 0,mapped:e.mapped?{...e.mapped,frames:[...e.mapped.frames],mappedFrames:[...e.mapped.mappedFrames]}:void 0}}function O0(e){try{return JSON.stringify(e)}catch{return""}}function z0(){try{return window.location.origin}catch{return}}function cl(e,t={}){let n="idle",o=sd({now:t.now,raw:t.raw,verbose:t.verbose}),r=xd(E=>{g(E)},{now:t.now,preferHMR:!0,sourceMap:t.sourceMap});if(typeof window>"u"||!window.WebSocket)return x(o,r,()=>{});let i=window.WebSocket,a=t.rewriteWebSocketURL||(E=>E),l=["/_next/hmr","/_next/webpack-hmr","/_next/turbopack-hmr","__webpack_hmr"],s=!1,c=0,d=!1,p=!1;function u(){p=!0}window.addEventListener("offline",u),window.addEventListener("online",u);function g(E){s||e(E,h())}function h(){let E=o.getSnapshot();return E.connection=n,{build:E,runtime:r.getSnapshot()}}function m(E){return l.some(w=>E.includes(w))}function b(E,w){let v=String(E),L=a(E),k=w===void 0?new i(L):new i(L,w);if(m(v)||m(String(L))){c+=1;let N=c,I=String(L),_=!1;n="connecting",g({type:"session:connecting",url:I,attempt:N}),k.addEventListener("open",()=>{_=!0,n="connected",d?g({type:"session:reconnected",url:I,attempt:N,missedUpdates:p}):(d=!0,g({type:"session:connected",url:I,attempt:N})),p=!1}),k.addEventListener("message",$=>{if(typeof $.data!="string")return;r.ingestHMR($.data);let{events:O}=o($.data);for(let F of O)g(F)}),k.addEventListener("close",$=>{n="disconnected",_&&typeof navigator<"u"&&!navigator.onLine&&(p=!0),g({type:"session:disconnected",url:I,attempt:N,opened:_,code:$.code,reason:$.reason,wasClean:$.wasClean})})}return k}return b.prototype=i.prototype,Object.assign(b,i),window.WebSocket=b,x(o,r,()=>{s=!0,window.removeEventListener("offline",u),window.removeEventListener("online",u),window.WebSocket===b&&(window.WebSocket=i)});function x(E,w,v){return{stop(){v(),w.stop()},getSnapshot:h,reset(){return E.reset(),w.reset(),h()}}}}function F0(){if("ancestorOrigins"in location){let e=location.ancestorOrigins;if(e.length>0)return e[0]??null}return null}var wd=typeof window<"u"?F0():null;function Ed(e){return!(e.source!==window.parent||wd&&e.origin!==wd)}var Cd="/_v0/next-dev-bridge-stack-frames";function Sd({waitForSettledDocument:e,getPathname:t,serializeDocument:n}){let o=0;return async({pathname:r})=>{o+=1;let i=o;return await e(),i!==o||t()!==r?null:n()}}var dl={initialConnectionMs:2e4,reconnectMs:1e4,buildMs:3e4};function Md({report:e,isReportable:t,isNextDocument:n,now:o=Date.now,setTimer:r=setTimeout,clearTimer:i=clearTimeout}){let a=!1,l=!1,s,c=null,d=null,p=null,u=null,g=!1,h=null,m=new Set;function b(_){_!==null&&i(_)}function x(_){a||t()&&(m.has(_.kind)||(m.add(_.kind),e(_)))}function E(){b(p),p=null,u=null,g=!1}function w(){if(a||c!==null||l)return;let _=o();c=r(()=>{c=null,!(l||!n())&&x({kind:"initial_connection_timeout",durationMs:Math.max(0,o()-_),lastCloseCode:s})},dl.initialConnectionMs)}function v(){a||(l=!0,b(c),c=null,h&&(b(d),d=null,h.wasBuilding&&x({kind:"connection_lost_during_build",durationMs:Math.max(0,o()-h.startedAt),lastCloseCode:h.lastCloseCode,recovered:!0}),h=null))}function L({opened:_,code:$}){if(a)return;if(s=$,!_){h&&(h.lastCloseCode=$);return}let O=u!==null&&!g;E(),b(d),h={startedAt:o(),lastCloseCode:$,wasBuilding:O},d=r(()=>{d=null,h&&x({kind:h.wasBuilding?"connection_lost_during_build":"reconnect_timeout",durationMs:Math.max(0,o()-h.startedAt),lastCloseCode:h.lastCloseCode,recovered:!1})},dl.reconnectMs)}function k(){a||u!==null||(u=o(),g=!1,p=r(()=>{p=null,u!==null&&(g=!0,x({kind:"build_timeout",durationMs:Math.max(0,o()-u),lastCloseCode:s}))},dl.buildMs))}function N(){a||E()}function I(){a=!0,b(c),b(d),b(p),c=null,d=null,p=null,u=null,h=null}return{start:w,socketOpened:v,socketClosed:L,buildStarted:k,buildResolved:N,stop:I}}var _a=null;async function M5(){return _a||(_a=Promise.resolve().then(()=>(Gh(),Xh)),_a)}var Ra=null;async function Rt(){return Ra||(Ra=Promise.resolve().then(()=>(tg(),eg)),Ra)}var Ar=!1;async function ng(e){let{setupAnnotationMode:t,disableAnnotationMode:n}=await Rt(),o=e!==void 0?e:!Ar;o&&!Ar?(Ar=!0,t()):!o&&Ar&&(Ar=!1,n())}var Pn=!1,lg=!0,sg=!1,$r=null,Pr=0,og=-1,rg=!1,to=null;function ig(e){return{lastChangedAt:e.lastChangedAt,hash:e.hash,errors:e.errors,firstError:e.firstError}}function L5(){$r===null&&($r=performance.now(),Pr+=1)}function ag(){$r=null,Pr+=1}function k5(e){if(og===Pr)return;let t=$r,n=performance.now(),o=Pr;$r=null,og=o,requestAnimationFrame(()=>{requestAnimationFrame(()=>{if(o!==Pr)return;let r=jc(rg);rg=!0,Oe("previewBuildRendered",{url:window.location.href,renderScenario:r,buildOutcome:e,...Uc({compileStartedAt:t,compileReadyAt:n,previewReadyAt:performance.now()})})})})}var kc=!1;function cg(e){window.debug&&console.log("[vm:postMessage:out]",e),window.parent.postMessage(Object.assign({__v0_remote__:1},e),"*")}function T5(e){let t=Bc(e);return t===void 0?!1:(lg=t,to?.setLogo(t),!0)}async function Ha(e=!1,t){let{setupDesignMode:n,disableDesignMode:o}=await M5(),r=t!==void 0?t:!Pn;r&&!Pn?(Pn=!0,sg=!0,kc=e,to=n(async i=>nd()&&await Oe("sendDesignModeMessage",i)||!1,e,{logo:lg,onSelect:i=>{Oe("setDesignModeSelection",i)},onTree:i=>{Oe("setDesignModeTree",i)}})):!r&&Pn&&(Pn=!1,to=null,o()),cg({type:"v0_design_mode_state",enabled:Pn})}function _5(){cg({type:"v0_design_mode_state",enabled:Pn})}(function(){let e=Symbol.for("__v0_runtime_injected");if(window[e])return;window[e]=!0;let t=window.self!==window.top,n=localStorage.getItem("__v0_design_mode");(n==="1"||n==="full")&&Ha(n==="full"||!t);function o(R){window.debug&&console.log("[vm:postMessage:out]",R),window.parent.postMessage(Object.assign({__v0_remote__:1},R),"*")}let r="",i=document.location.hash;function a(){if(r!==document.location.href&&(r=document.location.href,o({type:"location_change",href:r,canGoForward:window.navigation?.canGoForward,canGoBack:window.navigation?.canGoBack})),t){let R=window.location.hash;if(R!==i&&(i=R,R&&R!=="#")){let D=document.querySelector(R);D&&D.scrollIntoView()}}}new MutationObserver(a).observe(document,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),a(),window.addEventListener("popstate",a),window.addEventListener("hashchange",a),window.addEventListener("message",async function(R){if(!Ed(R))return;let D=R.data;if(!(!D||typeof D!="object"||!D.__v0_remote__))switch(window.debug&&console.log("[vm:postMessage:in]",D),D.type){case"navigate_back":window.history.back();break;case"navigate_forward":window.history.forward();break;case"navigate_to":{let G=qc(D.href);G&&(window.location.href=G);break}case"reload":location.reload();break;case"v0_design_mode_toggle":if(D.enabled!==!1){let G=!0;if(D.logo!==void 0&&(G=D.logo),!T5(G))return}await Ha(!t,D.enabled);break;case"v0_design_mode_get_state":_5();break;case"v0_annotation_mode_toggle":await ng(D.enabled);break;case"v0_annotation_add_pin":{(await Rt()).addAnnotationPin(D.id,D.position,D.index,D.selectorPath);break}case"v0_annotation_clear_pins":{(await Rt()).clearAnnotationPins();break}case"v0_annotation_scroll_to":{(await Rt()).scrollToAnnotation(D.id,D.position);break}case"v0_annotation_highlight_pin":{(await Rt()).highlightAnnotationPin(D.id);break}case"v0_annotation_unhighlight_pin":{(await Rt()).unhighlightAnnotationPins();break}}}),xt("selectDesignModeNode",async R=>{to?.selectNode(R)}),xt("hoverDesignModeNode",async R=>{to?.hoverNode(R)}),xt("clearHoveredDesignModeNode",async()=>{to?.clearHoveredNode()}),xt("setDesignModeNodeVisibility",async(R,D)=>{to?.setNodeVisibility(R,D)}),xt("setAnnotationMode",async R=>{await ng(R)}),xt("addAnnotationPin",async(R,D,G,Q)=>{(await Rt()).addAnnotationPin(R,D,G,Q)}),xt("clearAnnotationPins",async()=>{(await Rt()).clearAnnotationPins()}),xt("scrollToAnnotation",async(R,D)=>(await Rt()).scrollToAnnotation(R,D)),xt("highlightAnnotationPin",async R=>{(await Rt()).highlightAnnotationPin(R)}),xt("unhighlightAnnotationPins",async()=>{(await Rt()).unhighlightAnnotationPins()}),Oe("getDesignModeState")?.then(R=>{R&&Ha(kc,!0)}),window.addEventListener("keydown",R=>{if(R.key==="c"&&!R.metaKey&&!R.ctrlKey&&!R.altKey&&!R.shiftKey&&!Pn){let D=R.target;D?.tagName!=="INPUT"&&D?.tagName!=="TEXTAREA"&&D?.tagName!=="SELECT"&&!D?.isContentEditable&&Oe("annotationToggle")}if(sg&&R.altKey&&R.key.toLowerCase()==="d"&&!R.metaKey&&!R.ctrlKey&&!R.shiftKey){let D=R.target;if(D?.tagName==="INPUT"||D?.tagName==="TEXTAREA")return;R.preventDefault(),Ha(kc)}});let s=!1;function c(){s||(s=!0,o({type:"app_navigation_state",loading:!1}),te(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{Oe("previewPageReady",window.location.href)})}))}window.addEventListener("load",c),document.readyState==="complete"&&c();let d={errors:[]},p=new Map,u=1,g=null;function h(R){return[R.source,R.name,R.message,R.stack].join(`
`)}function m(R){return!!R.mapped?.mappedFrames?.length}function b({bridgeEvent:R,runtimeState:D}){if(R.type==="runtime:cleared")p.clear();else{let G=h(R.error),Q=m(R.error),ue=p.get(G);if(ue&&(!Q||ue.hasSourceMap))return;p.set(G,{hasSourceMap:Q})}o({type:Ua.NEXT_DEV_BRIDGE_EVENT,event:R,state:{build:g?ig(g().build):{lastChangedAt:null,hash:null,errors:[],firstError:null},runtime:D},url:window.location.href})}function x(){p.clear()}function E({draft:R}){let D={...R,id:u++,isFatal:!1,severity:"recoverable",at:R.at??new Date().toISOString()};b({bridgeEvent:{type:"runtime:error",error:D,errors:[D]},runtimeState:{errors:[D]}})}function w(R){if(!R||typeof R!="object")return null;let D=R,G=D.source;return G!=="error"&&G!=="unhandledrejection"||typeof D.name!="string"||typeof D.message!="string"||typeof D.stack!="string"?null:{source:G,name:D.name,message:D.message,stack:D.stack,filename:typeof D.filename=="string"?D.filename:void 0,line:typeof D.line=="number"?D.line:void 0,column:typeof D.column=="number"?D.column:void 0,at:typeof D.at=="string"?D.at:void 0}}function v(){let R=window,D=R.__V0_RUNTIME_ERROR_BUFFER__;return R.__V0_RUNTIME_ERROR_BUFFER__=[],Array.isArray(D)?D.flatMap(G=>{let Q=w(G);return Q?[Q]:[]}):[]}function L(){let D=window.__V0_RUNTIME_ERROR_BOOTSTRAP_CLEANUP__;typeof D=="function"&&D()}let k=window.__V0_SANDBOX_ID__,N=0,I=!1,_=null,$=null,O=new Map;function F(R){Oe("hmrTelemetry",Object.assign({socketsCreated:N,online:navigator.onLine,visibility:document.visibilityState},R))}function A(R){Oe("hmrFailure",Object.assign({socketsCreated:N,online:navigator.onLine,visibility:document.visibilityState},R))}let V=Md({report:A,isReportable:()=>navigator.onLine&&document.visibilityState==="visible",isNextDocument:()=>!!window.next?.version});function Z(R){if(!k)return R;let D=new URL(String(R),window.location.href),G=D.hostname===window.location.hostname,Q=D.hostname.endsWith(".vercel.run");return!G||Q?R:(D.protocol="wss:",D.hostname=`${k}.vercel.run`,D.port="",D)}function se(R,D){if(R.type==="runtime:error"||R.type==="runtime:cleared"){b({bridgeEvent:R,runtimeState:D.runtime});return}o({type:Ua.NEXT_DEV_BRIDGE_EVENT,event:R,state:{build:ig(D.build),runtime:D.runtime},url:window.location.href})}function ce(R,D){let G=Date.now();if(R.type==="session:connecting")N=Math.max(N,R.attempt),O.set(R.attempt,{createdAt:G,openedAt:null});else if(R.type==="session:connected"||R.type==="session:reconnected"){I=!0,V.socketOpened();let Q=O.get(R.attempt);Q&&(Q.openedAt=G),R.type==="session:connected"?Oe("hmrConnected"):(Oe("hmrReconnected",{missedUpdates:R.missedUpdates}),F({kind:"reconnected",attempt:R.attempt,timeToOpenMs:Q?G-Q.createdAt:void 0,disconnectedForMs:_===null?void 0:G-_}))}else if(R.type==="session:disconnected"){V.socketClosed({opened:R.opened,code:R.code}),ag(),Oe("hmrState","built");let Q=O.get(R.attempt);O.delete(R.attempt),_=G,$=R.code;let ue={attempt:R.attempt,code:R.code,reason:R.reason,wasClean:R.wasClean};R.opened?F({kind:"disconnected",...ue,connectedForMs:Q?.openedAt===null||Q?.openedAt===void 0?void 0:G-Q.openedAt}):F({kind:"connect_failed",...ue,timeToFailMs:Q?G-Q.createdAt:void 0})}else if(R.type==="build:started")x(),L5(),V.buildStarted(),Oe("hmrState","building");else if(R.type===jo.ERROR)x(),V.buildResolved(),ag(),Oe("hmrState","built");else if(R.type===jo.READY||R.type===jo.RECOVERED){let Q="ready";R.type===jo.RECOVERED&&(Q="recovered"),V.buildResolved(),k5(Q),Oe("hmrState","built")}se(R,D)}let X=cl(ce,{rewriteWebSocketURL:Z,sourceMap:{endpoint:Cd,frameRoot:ge()}});g=()=>X.getSnapshot(),b({bridgeEvent:{type:"runtime:cleared",errors:[]},runtimeState:d});let K=v();L();for(let R of K)E({draft:R});V.start(),setTimeout(()=>{I||!window.next?.version||F({kind:"never_connected",lastCloseCode:$??void 0})},2e4),window.addEventListener("pagehide",()=>{X.stop(),V.stop()},{once:!0});function ge(){let R=window.__V0_SOURCE_MAP_FRAME_ROOT__;return typeof R=="string"&&R?R:void 0}window.V0_S_ID=k;function te(){if(!("next"in window&&window.next&&window.next.version))return;let R=window,D=R.fetch;R.fetch=function(G,Q){if(!Q)return D.call(this,G,Q);let ue=Q.headers;if(!ue)return D.call(this,G,Q);let _e=!1;if(ue instanceof Headers?_e=ue.get("rsc")==="1":Array.isArray(ue)?_e=ue.find(([je])=>je.toLowerCase()==="rsc")?.[1]==="1":typeof ue=="object"&&(_e=ue.rsc==="1"),_e){let je=new Headers(ue);je.set("v0_rsc","1"),je.delete("rsc"),je.set("v0_next-router-state-tree",je.get("next-router-state-tree")||""),je.delete("next-router-state-tree");let Gt=(typeof G=="string"?new URL(G,window.location.href):G instanceof URL?G:new URL(G.url,window.location.href)).searchParams.get("_rsc")||"";return je.set("v0_rsc_query",Gt),D.call(this,G,{...Q,headers:je})}return D.call(this,G,Q)}}let Ee=null;function ve(){if(window.freezeDry)return Promise.resolve();if(!Ee){let R=document.createElement("script");R.src="/v0-vm-assets/freeze-dry.umd.js",R.async=!0,Ee=new Promise((D,G)=>{R.onload=()=>D(),R.onerror=()=>G(new Error("Failed to load freeze-dry")),document.head.appendChild(R)}).catch(D=>{throw R.remove(),Ee=null,D})}return Ee}function Te(){return document.readyState==="complete"?Promise.resolve():new Promise(R=>{window.addEventListener("load",()=>R(),{once:!0})})}let Ce=Sd({waitForSettledDocument:async()=>{await Te(),await new Promise(R=>setTimeout(R,2e3))},getPathname:()=>window.location.pathname,serializeDocument:async()=>{try{await ve();let R=await window.freezeDry.freezeDry(window.document);return R=R.replace(/<link rel="preload" as="script" [^>]*>/g,"").replace(/<link rel="original" href="[^>]+>/g,""),R}catch{return null}}});xt("captureSnapshot",Ce);let Se=Object.getOwnPropertyDescriptor(Document.prototype,"cookie")||Object.getOwnPropertyDescriptor(HTMLDocument.prototype,"cookie");Se&&Se.configurable&&Se.get&&Se.set&&Object.defineProperty(document,"cookie",{get(){return Se.get.call(document)},set(R){let D=R.replace(/;\s*SameSite=(Lax|Strict|None)/gi,"");D+="; SameSite=None",/;\s*Secure/i.test(D)||(D+="; Secure"),Se.set.call(document,D)}});let be=null;function $e(){let R=['link[rel="icon"]','link[rel="shortcut icon"]','link[rel="apple-touch-icon"]'];for(let D of R){let G=document.querySelector(D);if(G?.href)return G}return null}async function Ht(R){try{let D=await fetch(R,{mode:"cors"});if(!D.ok)return null;let G=await D.blob();return new Promise(Q=>{let ue=new FileReader;ue.onloadend=()=>Q(ue.result),ue.onerror=()=>Q(null),ue.readAsDataURL(G)})}catch{return new Promise(D=>{let G=new Image;G.crossOrigin="anonymous",G.onload=()=>{try{let Q=document.createElement("canvas");Q.width=G.width||32,Q.height=G.height||32;let ue=Q.getContext("2d");if(!ue){D(null);return}ue.drawImage(G,0,0),D(Q.toDataURL("image/png"))}catch{D(null)}},G.onerror=()=>D(null),G.src=R})}}async function qe(){let D=$e()?.href||null;if(D===be)return;if(be=D,!D){o({type:"favicon_change",favicon:null});return}let G=await Ht(D);o({type:"favicon_change",favicon:G})}document.readyState==="complete"||document.readyState==="interactive"?qe():window.addEventListener("DOMContentLoaded",()=>{qe()});let Pe=new MutationObserver(R=>{for(let D of R){if(D.type==="childList"){for(let G of D.addedNodes)if(G instanceof HTMLLinkElement&&(G.rel==="icon"||G.rel==="shortcut icon"||G.rel==="apple-touch-icon")){qe();return}for(let G of D.removedNodes)if(G instanceof HTMLLinkElement&&(G.rel==="icon"||G.rel==="shortcut icon"||G.rel==="apple-touch-icon")){qe();return}}if(D.type==="attributes"&&D.target instanceof HTMLLinkElement&&(D.target.rel==="icon"||D.target.rel==="shortcut icon"||D.target.rel==="apple-touch-icon")){qe();return}}});function De(){document.head&&Pe.observe(document.head,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href","rel"]})}if(document.head)De();else{let R=new MutationObserver(()=>{document.head&&(R.disconnect(),De())});R.observe(document.documentElement,{childList:!0})}})();})();
