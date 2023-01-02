import{i as fe,h as k,a as l,s as F,b as Je,c as u,d as f,e as P,p as H,m as O,f as Me,g as z,o as g,j as Xe,k as Qe,l as de,n as W,q as x,r as ge,t as Ze,u as et,v as E,w as he,x as tt,y as nt,z as rt,A as pe,B as me,C as st,D as ye,E as be,F as L,G as ot,H as it}from"./chunk-e1bd6396.js";function R(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function U(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function ve(e){return typeof e=="object"&&e!==null&&"then"in e&&fe(e.then)}function at(e,t){if(!R(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function lt(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}function ut(e,t){const s=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(k(({filesystemRoot:o})=>o.length))[0];let r;if(s){const{filesystemRoot:o,routeRoot:i}=s,a={pageId:e,filesystemRoot:o,routeRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=F(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+F(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=F(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function ct(e,t){await Promise.all(e.filter(o=>o.fileType===".page.route").map(o=>{var i;return(i=o.loadFile)===null||i===void 0?void 0:i.call(o)}));const{onBeforeRouteHook:n,filesystemRoots:s}=dt(e);return{pageRoutes:ft(s,e,t),onBeforeRouteHook:n}}function ft(e,t,n){const s=[];return n.filter(r=>!Je(r)).forEach(r=>{const o=gt(r,t);if(o){const{filePath:i,fileExports:a}=o;if(l(a),u("default"in a,`${i} should have a default export.`),f(a,"default","string")){const c=a.default;u(c.startsWith("/"),`A Route String should start with a leading \`/\` but \`${i}\` has \`export default '${c}'\`. Make sure to \`export default '/${c}'\` instead.`),s.push({pageId:r,routeString:c,pageRouteFilePath:i,routeType:"STRING"});return}if(f(a,"default","function")){const c=a.default;let p=!1;const m="iKnowThePerformanceRisksOfAsyncRouteFunctions";m in a&&(u(f(a,m,"boolean"),`The export \`${m}\` of ${i} should be a boolean.`),p=a[m]),s.push({pageId:r,routeFunction:c,pageRouteFilePath:i,allowAsync:p,routeType:"FUNCTION"});return}u(!1,`The default export of ${i} should be a string or a function.`)}else{const i=ut(r,e);l(i.startsWith("/")),l(!i.endsWith("/")||i==="/"),s.push({pageId:r,routeString:i,pageRouteFilePath:null,routeType:"FILESYSTEM"})}}),s}function dt(e){let t=null;const n=[];return e.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:r})=>{if(l(r),"onBeforeRoute"in r){u(f(r,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:o}=r;t={filePath:s,onBeforeRoute:o}}"filesystemRoutingRoot"in r&&(u(f(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(f(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${r.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:ht(s),routeRoot:r.filesystemRoutingRoot}))}),{onBeforeRouteHook:t,filesystemRoots:n}}function gt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function ht(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=F(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function Se(e){l(e.urlOriginal),"urlPathname"in e?l(U(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:we,enumerable:!0,configurable:!0}),"url"in e?l(U(e,"url")):Object.defineProperty(e,"url",{get:pt,enumerable:!1,configurable:!0}),"urlParsed"in e?l(U(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:mt,enumerable:!0,configurable:!0})}function Pe(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),s=e._baseServer;return l(s.startsWith("/")),H(n,s)}function we(){const{pathname:e}=Pe(this),t=e;return l(t.startsWith("/")),t}function pt(){return P(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),we.call(this)}function mt(){const e=Pe(this),{origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c}=e,p={origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c,get hashString(){return P(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),c},get searchString(){return P(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return Z(p,"hashString"),Z(p,"searchString"),p}function Z(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function yt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(R(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Re="@",G=":";function Y(e,t){u(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),s=t.split("/"),r={};bt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,s.length);o++){const i=n[o],a=s[o];if(i==="*")return r["*"]=s.slice(Math.max(1,o)).join("/"),{routeParams:r};if(i&&$(i)){if(P(!i.startsWith(G),`Outdated route string \`${e}\`, use \`${e.split(G).join(Re)}\` instead.`,{showStackTrace:!1,onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function bt(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function T(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if($(i))break;n++}const s=t.filter(i=>!$(i)).length,r=t.filter(i=>$(i)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:s,isCatchAll:o}}function $(e){return e.startsWith(Re)||e.startsWith(G)}function ee(e){const n=Y(e,e);return l(n),Object.keys(n.routeParams).length===0}function vt(e){e.sort(St).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&ee(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&ee(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function St(e,t){var n,s;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(s=t.precedence)!==null&&s!==void 0?s:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=k(i=>T(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=k(i=>T(i).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=k(i=>T(i).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(T(t.routeString).isCatchAll)return-1;if(T(e.routeString).isCatchAll)return 1}return 0}async function Pt(e,t,n,s){yt(n);let r=e(n);if(u(!ve(r)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(R(r),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${f(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),Oe(r,`The \`routeParams\` object returned by the Route Function ${s} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),l(R(i)),Object.keys(r).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function Oe(e,t){l(t.endsWith(" should")),f(e,"routeParams")&&(l(t.endsWith(" should")),u(R(e.routeParams),`${t} be a plain JavaScript object.`),u(lt(e.routeParams),`${t} only hold string values.`))}function _e(e,{hook:t,errorMessagePrefix:n,canBePromise:s}){if(!n){l(t);const{hookName:r,hookFilePath:o}=t;l(o.startsWith("/")||Me(o)),l(!r.endsWith(")")),n=`The \`pageContext\` provided by the ${r}() hook of ${o}`}if(s&&!z(e)){u(fe(e)||ve(e),`${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);return}u(z(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),P(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{showStackTrace:!1,onlyOnce:!0})}async function wt(e,t){const n=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(u(n==null||at(n,["pageContext"])&&f(n,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(f(n,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),f(n.pageContext,"_pageId")&&!f(n.pageContext,"_pageId","null")){const o=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(f(n.pageContext,"_pageId","string"),`${o} a string or \`null\``),u(t._allPageIds.includes(n.pageContext._pageId),`${o} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}f(n.pageContext,"routeParams")&&Oe(n.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return f(n.pageContext,"url")&&(P(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{showStackTrace:!1,onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),f(n.pageContext,"urlOriginal")&&(u(f(n.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),g(r,{_urlPristine:t.urlOriginal})),_e(n.pageContext,{hook:{hookFilePath:e.filePath,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var I;function te(...e){var t,n;I||(I=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),I&&I(...e)}async function Te(e){Se(e);const{pageRoutes:t,onBeforeRouteHook:n}=await ct(e._pageFilesAll,e._allPageIds);te("Pages routes:",t);const s={};if(n){const c=await wt(n,e);if(c){if(g(s,c),f(s,"_pageId","string")||f(s,"_pageId","null"))return f(s,"routeParams")?l(f(s,"routeParams","object")):g(s,{routeParams:{}}),g(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};g(e,s)}}g(s,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(e._pageFilesAll.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(r.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:o}=e;l(o.startsWith("/"));const i=[];await Promise.all(t.map(async c=>{const{pageId:p,routeType:m}=c;if(c.routeType==="FILESYSTEM"){const{routeString:h}=c,v=Y(h,o);if(v){const{routeParams:y}=v;i.push({pageId:p,routeParams:y,routeString:h,routeType:m})}return}if(c.routeType==="STRING"){const{routeString:h}=c,v=Y(h,o);if(v){const{routeParams:y}=v;l(m==="STRING"),i.push({pageId:p,routeString:h,routeParams:y,routeType:m})}return}if(c.routeType==="FUNCTION"){const{routeFunction:h,allowAsync:v,pageRouteFilePath:y}=c,d=await Pt(h,v,e,y);if(d){const{routeParams:A,precedence:_}=d;i.push({pageId:p,precedence:_,routeParams:A,routeType:m})}return}l(!1)})),vt(i);const a=i[0];if(te(`Route matches for URL \`${o}\` (in precedence order):`,i),g(s,{_routeMatches:i}),!a)return g(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:c}=a;l(R(c)),g(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const q={},Fe={},Rt={},B={},Ot=[],_t={},Tt=!0,Ft=Object.assign({}),Ct={...Ft};q[".page"]=Ct;const Et=Object.assign({}),xt={...Et};B[".page"]=xt;const At=Object.assign({}),It={...At};B[".page.server"]=It;const kt=Object.assign({}),$t={...kt};Fe[".page.route"]=$t;const jt=Object.assign({}),Nt={...jt};q[".page.client"]=Nt;const Ht=Object.assign({}),Wt={...Ht};B[".page.client"]=Wt;const Bt=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:q,pageFilesEager:Fe,pageFilesExportNamesLazy:Rt,pageFilesExportNamesEager:B,pageFilesList:Ot,neverLoaded:_t,isGeneratedFile:Tt},Symbol.toStringTag,{value:"Module"}));Xe(Bt);function Ce(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Lt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function Ut(e){return H(e,"/").pathname}function j(e){window.location.href=e}function Dt(){var e,t,n,s;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),o=!!(!((s=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||s===void 0)&&s.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||o||i}function Vt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function zt(e){return new Promise(t=>setTimeout(t,e))}function ne(e){const t=e/1e3;if(t<120){const n=re(t);return`${n} second${se(n)}`}{const n=t/60,s=re(n);return`${s} minute${se(s)}`}}function re(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function se(e){return e==="1"?"":"s"}function K(e,t,n){const{timeoutErr:s,timeoutWarn:r}=Gt(t);let o,i;const a=new Promise((h,v)=>{o=y=>{c(),h(y)},i=y=>{c(),v(y)}}),c=()=>{clearTimeout(p),clearTimeout(m)},p=setTimeout(()=>{const h=`${Qe}[Warning] The ${t}() hook of ${n} is taking more than ${ne(r)}`;console.warn(h)},r),m=setTimeout(()=>{const h=de(`Hook timeout: the ${t}() hook of ${n} didn't finish after ${ne(s)}`);i(h)},s);return(async()=>{try{const h=await e();o(h)}catch(h){i(h)}})(),a}function Gt(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}const oe=W("navigationState.ts",{}),Yt=x(),Ee={markNavigationChange(){oe.navigationChanged=!0},get noNavigationChangeYet(){return!oe.navigationChanged&&this.isFirstUrl(x())},isFirstUrl(e){return e===Yt}};async function Kt(e,t){const s=ge(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(s.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function qt(e,t,n,s,r=!1){l(!t.endsWith(")"));const o=`The ${t}() hook of ${s}`;u(e==null||R(e),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(Jt(e,n,o),"pageContext"in e&&_e(e.pageContext,{hook:{hookName:t,hookFilePath:s},canBePromise:r}))}function Jt(e,t,n){const s=[],r=Object.keys(e);for(const o of r)t.includes(o)||s.push(o);u(s.length===0,[n,"returned an object with unknown keys",Q(s)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}function xe(e){return l([!0,!1].includes(e.isHydration)),l([!0,!1,null].includes(e.isBackwardNavigation)),Ze(e)}const ie=["urlPathname","urlParsed"],Mt=["Page","pageExports","exports"];function Ae(e){[...Mt,...ie].forEach(n=>{n in e&&(ie.includes(n)?(l(n.startsWith("url")),P(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0})):P(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0}),delete e[n])})}const Xt="/";function Qt(e,t,n){const{pathnameOriginal:s,searchOriginal:r,hashOriginal:o}=H(e,Xt);e.startsWith("/")&&l(e===`${s}${r||""}${o||""}`,{url:e});const i=s.endsWith("/");let a;return n&&s!=="/"?(i?a=F(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${o||""}`}const Zt=".pageContext.json",en=!1;function tn(e){return Qt(e,Zt,en)}async function nn(e){return e._isFirstRenderAttempt&&Ee.isFirstUrl(e.urlOriginal)?(l(f(e,"_isFirstRenderAttempt","true")),rn(e)):(l(f(e,"_isFirstRenderAttempt","false")),on(e))}async function rn(e){const t=et();return Ae(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await E(e._pageFilesAll,t._pageId)),t}async function sn(e){const t=he(e._allPageIds);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await E(e._pageFilesAll,n._pageId)),n}async function on(e){let t={};g(t,{isHydration:!1}),g(t,await ln(e)),g(t,await E(e._pageFilesAll,t._pageId));const n=await an({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(f(n,"is404","boolean")),l(f(n,"pageProps","object")),l(f(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const s=he(e._allPageIds);return l(s),g(t,{isHydration:!1,_pageId:s}),g(t,n),g(t,await E(e._pageFilesAll,t._pageId)),t}else return g(t,n),t}async function an(e){const t=tt(e,"onBeforeRender");if(t){const s=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=xe({...e,...r}),i=await K(()=>s(o),"onBeforeRender",t.filePath);qt(i,"onBeforeRender",["pageContext"],t.filePath);const a=i==null?void 0:i.pageContext;return g(r,a),r}else if((await Kt(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const s=await un(e),r={};return Object.assign(r,s),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function ln(e){const n=(await Te(e)).pageContextAddendum;if(!n._pageId)throw new Error("No routing match");return l(f(n,"_pageId","string")),n}async function un(e){var t;const n=tn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(n);{const a=s.headers.get("content-type"),c=a&&a.includes("application/json");if(!c&&s.status===404){j(e.urlOriginal);const p=new Error("Page doesn't exist");throw Object.assign(p,{_abortRendering:!0}),p}u(c,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await s.text(),o=nt(r);if("serverSideError"in o)throw de("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(f(o,"pageContext"));const i=o.pageContext;return l(R(i)),l(f(i,"_pageId","string")),Ae(i),i}function Ie(){const e="/";return l(cn(e)),e}function cn(e){return e.startsWith("/")}const D=W("createPageContext.ts",{});async function ke(e){D.pageFilesData||(D.pageFilesData=await rt(!0));const{pageFilesAll:t,allPageIds:n}=D.pageFilesData,s=Ie();l(pe(s));const r={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:s,_isProduction:!0,_pageFilesAll:t,_allPageIds:n};return g(r,e),Se(r),r}async function $e(e){const t=await ke({urlOriginal:e}),n=await Te(t),s=t._pageFilesAll;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:s};const r=n.pageContextAddendum._pageId;return r?{pageId:r,pageFilesAll:s}:{pageId:null,pageFilesAll:s}}function C(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function fn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:s(),isClientRouting:o()};function s(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&C(a).includes("render")))}function r(){const i=e.some(a=>C(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>C(a).includes("clientRouting"))}}function dn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:s}){let r=[];const o=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),i.push(...o.map(a=>({id:a.filePath,onlyAssets:!0}))),n)r=e.map(a=>a.filePath);else{const a=s?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";i.push({id:a,onlyAssets:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function gn(e,t){let n=me(e,t);const s=ge(e,t),{isHtmlOnly:r,isClientRouting:o}=fn({pageFilesClientSide:n,pageFilesServerSide:s,pageId:t});r&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!C(c).includes("render")),n=pn(n));const{clientEntries:i,clientDependencies:a}=dn({pageFilesClientSide:n,pageFilesServerSide:s,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:s}}async function hn(e,t,{sharedPageFilesAlreadyLoaded:n}){const s=me(e,t);await Promise.all(s.map(async r=>{var o;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function pn(e){const t=[];for(const n of e)if(t.push(n),C(n).includes("overrideDefaultPages"))break;return t}async function je(e){const{pageId:t,pageFilesAll:n}=await $e(e);if(!t)return!1;await hn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:s,isClientRouting:r}=gn(n,t);return!s&&r}function Ne(e){const t=e.getAttribute("href");return!!(t===null||t===""||Ce(t)||mn(e)||yn(t)||!bn(t)||!st(t))}function mn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function yn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function bn(e){const t=Ie();l(pe(t));const{hasBaseServer:n}=H(e,t);return n}function vn(e,t){const n=Sn(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Sn(e,t){let n=Pn(t),s=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(R(r),o);const i=Object.keys(r);u(i.length===1&&i[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,o)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(ye(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function Pn(e){let t=e.getAttribute("data-prefetch");if(P(t===null,"The `data-prefetch` attribute is outdated.",{showStackTrace:!1,onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const He=new Map;function We(e){const t=Le(e);return He.has(t)}function Be(e){const t=Le(e);He.set(t,!0)}function Le(e){return Ut(e)}const ae=new Map;async function V(e){if(u(!Ce(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),We(e))return;Be(e);const{pageId:t,pageFilesAll:n}=await $e(e);if(t)try{await E(n,t)}catch(s){if(be(s))Ge();else throw s}}function wn(e){Be(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(ae.has(n))return;ae.set(n,!0);const s=n.getAttribute("href");if(Ne(n)||(l(s),!await je(s))||We(s))return;const r=vn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>V(s)),n.addEventListener("touchstart",()=>V(s),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(V(s),o.disconnect())})});o.observe(n)}}else return})}function Ue(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ve()),"scrollPosition"in e||(t=!0,e.scrollPosition=De()),ze(e),t&&M(e)}function J(){const e=window.history.state||{};return ze(e),e}function De(){return{x:window.scrollX,y:window.scrollY}}function Ve(){return new Date().getTime()}function le(){const e=De(),t=J();M({...t,scrollPosition:e})}function Rn(e,t){if(t)M(J(),e);else{const n=Ve();On({timestamp:n,scrollPosition:null},e)}}function ze(e){if(l(z(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(f(t,"x","number")&&f(t,"y","number"))}}function M(e,t){window.history.replaceState(e,"",t!=null?t:null)}function On(e,t){window.history.pushState(e,"",t)}const _n=W("navigate.ts",{});function Tn(e){_n.navigate=e}const b=W("useClientRouter.ts",{previousState:N()});$n();Ue();function Ge(){b.clientRoutingIsDisabled=!0,ye(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Fn(){In(),Cn((r,{keepScrollPosition:o})=>{s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),En((r,o)=>{s({scrollTarget:r,isBackwardNavigation:o})}),Tn(async(r,{keepScrollPosition:o=!1,overwriteLastHistoryEntry:i=!1}={})=>{await s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:r,url:o=x(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:c}){var p;if(b.clientRoutingIsDisabled){j(o);return}if(c&&!await je(o)){j(o);return}const m={urlOriginal:o,isBackwardNavigation:a},h=++e;l(h>=1),h>1&&n===!1&&((p=b.onPageTransitionStart)===null||p===void 0||p.call(b,m),n=!0);let v=!1;const y=()=>h===1&&v===!1?!1:h!==e,d=await ke(m);if(y())return;const A=h===1;g(d,{_isFirstRenderAttempt:A});let _;try{_=await nn(d)}catch(w){if(ce(w,d))return;console.error(w);try{_=await sn(d)}catch(S){if(ce(S,d)||(A||setTimeout(()=>{window.location.pathname=o},0),Vt(w,S)))return;throw S}}if(g(d,_),L(d,"onPageTransitionStart"),b.onPageTransitionStart=d.exports.onPageTransitionStart,d.exports.hydrationCanBeAborted?v=!0:P(!Dt(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{showStackTrace:!1,onlyOnce:!0}),!y()&&(t&&await t,!y())){if(xn(o,i),Ee.markNavigationChange(),l(t===void 0),t=(async()=>{const w=xe(d);ot(d);const S=d.exportsAll.render[0].filePath;l(S);const qe=await K(()=>d.exports.render(w),"render",S);u(qe===void 0,`The render() hook of ${S} isn't allowed to return a value`),wn(d)})(),await t,t=void 0,d._isFirstRenderAttempt){L(d,"onHydrationEnd");const{onHydrationEnd:w}=d.exports;if(w){const S=d.exportsAll.onHydrationEnd[0].filePath;l(S),await K(()=>w(d),"onHydrationEnd",S)}}else h===e&&(d.exports.onPageTransitionEnd&&(L(d,"onPageTransitionEnd"),d.exports.onPageTransitionEnd(d)),n=!1);Ye(r),X(),b.initialRenderIsDone=!0}}}function Cn(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=s(r.target);if(!o)return;const i=o.getAttribute("href");if(Ne(o))return;l(i),r.preventDefault();const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function s(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}function En(e){window.addEventListener("popstate",()=>{const t=N(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===b.previousState.urlWithoutHash,r=!t.historyState.timestamp||!b.previousState.historyState.timestamp?null:t.historyState.timestamp<b.previousState.historyState.timestamp;b.previousState=t,s?window.history.state===null?(Ue(),b.previousState=N()):Ye(n):e(n,r)})}function xn(e,t){x()!==e&&(X(),Rn(e,t),b.previousState=N())}function N(){return{urlWithoutHash:x({withoutHash:!0}),historyState:J()}}function Ye(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=kn();if(n&&n!=="top"){const s=document.getElementById(n)||document.getElementsByName(n)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;An(t)}function An(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const s=new Date().getTime();for(;;)if(await zt(10),t(),n()||new Date().getTime()-s>100)return},0)}))}function In(){window.addEventListener("scroll",Lt(le,Math.ceil(1e3/3)),{passive:!0}),Ke(le)}function kn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function $n(){ue(),Ke(ue),jn(()=>b.initialRenderIsDone&&X())}function X(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function ue(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ke(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function jn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function ce(e,t){return!!(e!=null&&e._abortRendering||Nn(e,t))}function Nn(e,t){if(!be(e))return!1;if(Ge(),t._isFirstRenderAttempt)throw e;return j(t.urlOriginal),!0}it();Fn();