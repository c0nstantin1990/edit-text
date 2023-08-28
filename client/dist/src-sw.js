(()=>{var e,t,s,n,r,a,i={895:()=>{"use strict";try{self["workbox:cacheable-response:6.5.4"]&&_()}catch(e){}},125:(e,t,s)=>{"use strict";s.d(t,{V:()=>n}),s(913);class n extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}},524:(e,t,s)=>{"use strict";s(125),s(913)},536:(e,t,s)=>{"use strict";s.d(t,{x:()=>a}),s(913);const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),a={updateDetails:e=>{(e=>{for(const t of Object.keys(n))e(t)})((t=>{"string"==typeof e[t]&&(n[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(n.googleAnalytics),getPrecacheName:e=>e||r(n.precache),getPrefix:()=>n.prefix,getRuntimeName:e=>e||r(n.runtime),getSuffix:()=>n.suffix}},119:(e,t,s)=>{"use strict";s.d(t,{C:()=>n}),s(913);const n=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},120:(e,t,s)=>{"use strict";s.d(t,{k:()=>n}),s(913);const n=null},902:(e,t,s)=>{"use strict";function n(e){return new Promise((t=>setTimeout(t,e)))}s.d(t,{V:()=>n}),s(913)},913:()=>{"use strict";try{self["workbox:core:6.5.4"]&&_()}catch(e){}},565:(e,t,s)=>{"use strict";s.d(t,{f:()=>n}),s(913);const n=new Set},550:()=>{"use strict";try{self["workbox:expiration:6.5.4"]&&_()}catch(e){}},977:()=>{"use strict";try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},344:(e,t,s)=>{"use strict";s.r(t),s.d(t,{precacheAndRoute:()=>y});var n=s(917),r=(s(524),s(536)),a=(s(120),s(125));function i(e,t){const s=t();return e.waitUntil(s),s}function c(e){if(!e)throw new a.V("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a.V("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}s(913),s(977);class o{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class h{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let l;s(119);var u=s(951);class d extends u._{constructor(e={}){e.cacheName=r.x.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new a.V("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const r=n.integrity,a=e.integrity,i=!a||a===r;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||r:void 0})),r&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a.V("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==d.copyRedirectedCacheableResponsesPlugin&&(n===d.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(d.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}d.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},d.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new a.V("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(r):r,c=function(){if(void 0===l){const e=new Response("");if("body"in e)try{new Response(e.body),l=!0}catch(e){l=!1}l=!1}return l}()?n.body:await n.blob();return new Response(c,i)}(e):e};class f{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new d({cacheName:r.x.getPrecacheName(e),plugins:[...t,new h({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=c(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a.V("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a.V("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return i(e,(async()=>{const t=new o;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return i(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new a.V("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let p;const g=()=>(p||(p=new f),p);var w=s(188);class m extends w.A{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(r);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function y(e,t){!function(e){g().precache(e)}(e),function(e){const t=g(),s=new m(t,e);(0,n.X)(s)}(t)}},989:(e,t,s)=>{"use strict";s.d(t,{t:()=>r}),s(524),s(120);var n=s(188);s(80);class r extends n.A{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},188:(e,t,s)=>{"use strict";s.d(t,{A:()=>a}),s(524);var n=s(505),r=s(179);s(80);class a{constructor(e,t,s=n.g){this.handler=(0,r.M)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=(0,r.M)(e)}}},491:(e,t,s)=>{"use strict";s.d(t,{F:()=>i}),s(524),s(119);var n=s(505),r=(s(120),s(179)),a=s(125);s(80);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=a&&a.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:r})}catch(e){o=Promise.reject(e)}const h=a&&a.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:r})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:s,event:n});if(i)return r=i,(Array.isArray(r)&&0===r.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t=n.g){this._defaultHandlerMap.set(t,(0,r.M)(e))}setCatchHandler(e){this._catchHandler=(0,r.M)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a.V("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a.V("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},80:()=>{"use strict";try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},917:(e,t,s)=>{"use strict";s.d(t,{X:()=>c}),s(120);var n=s(125),r=s(188),a=s(989),i=s(486);function c(e,t,s){let c;if("string"==typeof e){const n=new URL(e,location.href),a=({url:e})=>e.href===n.href;c=new r.A(a,t,s)}else if(e instanceof RegExp)c=new a.t(e,t,s);else if("function"==typeof e)c=new r.A(e,t,s);else{if(!(e instanceof r.A))throw new n.V("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return(0,i.u)().registerRoute(c),c}s(80)},505:(e,t,s)=>{"use strict";s.d(t,{g:()=>n}),s(80);const n="GET"},486:(e,t,s)=>{"use strict";s.d(t,{u:()=>a});var n=s(491);let r;s(80);const a=()=>(r||(r=new n.F,r.addFetchListener(),r.addCacheListener()),r)},179:(e,t,s)=>{"use strict";s.d(t,{M:()=>n}),s(524),s(80);const n=e=>e&&"object"==typeof e?e:{handle:e}},951:(e,t,s)=>{"use strict";s.d(t,{_:()=>i});var n=s(536),r=s(125),a=(s(120),s(119),s(358));s(873);class i{constructor(e={}){this.cacheName=n.x.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,r=new a.G(this,{event:t,request:s,params:n}),i=this._getResponse(r,s,t);return[i,this._awaitComplete(i,r,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new r.V("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}},358:(e,t,s)=>{"use strict";function n(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}s.d(t,{G:()=>l}),s(524),s(913);class r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}s(120);var a=s(565),i=s(119),c=s(902),o=s(125);function h(e){return"string"==typeof e?new Request(e):e}s(873);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new r,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new o.V("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await(0,c.V)(0);const r=await this.getCacheKey(s,"write");if(!t)throw new o.V("cache-put-with-no-response",{url:(0,i.C)(r.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:d}=this._strategy,f=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),g=p?await async function(e,t,s,r){const a=n(t.url,s);if(t.url===a)return e.match(t,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c)if(a===n(t.url,s))return e.match(t,r)}(f,r.clone(),["__WB_REVISION__"],d):null;try{await f.put(r,p?l.clone():l)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of a.f)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=h(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},873:()=>{"use strict";try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}},308:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheableResponse:()=>n,CacheableResponsePlugin:()=>r}),s(524),s(125),s(119),s(120),s(895);class n{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class r{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new n(e)}}},239:(e,t,s)=>{"use strict";function n(e){e.then((()=>{}))}s.r(t),s.d(t,{CacheExpiration:()=>k,ExpirationPlugin:()=>T}),s(524),s(913),s(120);var r=s(125);const a=(e,t)=>t.some((t=>e instanceof t));let i,c;const o=new WeakMap,h=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakMap;let f={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return g(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(w(this),e),g(o.get(this))}:function(...e){return g(t.apply(w(this),e))}:function(e,...s){const n=t.call(w(this),e,...s);return l.set(n,e.sort?e.sort():[e]),g(n)}:(e instanceof IDBTransaction&&function(e){if(h.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),n()},a=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));h.set(e,t)}(e),a(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,f):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(g(e.result)),n()},a=()=>{s(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),d.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=p(e);return t!==e&&(u.set(e,t),d.set(t,e)),t}const w=e=>d.get(e),m=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],_=new Map;function v(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_.get(t))return _.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,r=y.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!m.includes(s))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),r&&a.done]))[0]};return _.set(t,a),a}var b;b=f,f={...b,get:(e,t,s)=>v(e,t)||b.get(e,t,s),has:(e,t)=>!!v(e,t)||b.has(e,t)},s(550);const R="cache-entries",x=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class C{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(R,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),g(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=x(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(R,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(R,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(R).store.index("timestamp").openCursor(null,"prev");const r=[];let a=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&a>=t?r.push(n.value):a++),n=await n.continue()}const i=[];for(const e of r)await s.delete(R,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+x(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:r,terminated:a}={}){const i=indexedDB.open(e,t),c=g(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(g(i.result),e.oldVersion,e.newVersion,g(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),c.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class k{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new C(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,n(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var E=s(536),q=(s(119),s(565));class T{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:r})=>{if(!r)return null;const a=this._isResponseDateFresh(r),i=this._getCacheExpiration(s);n(i.expireEntries());const c=i.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return a?r:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),q.f.add(t))}_getCacheExpiration(e){if(e===E.x.getRuntimeName())throw new r.V("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new k(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}},89:(e,t,s)=>{"use strict";s.r(t),s.d(t,{NavigationRoute:()=>r,RegExpRoute:()=>a.t,Route:()=>n.A,Router:()=>c.F,registerRoute:()=>i.X,setCatchHandler:()=>h,setDefaultHandler:()=>l}),s(524),s(120);var n=s(188);s(80);class r extends n.A{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}var a=s(989),i=s(917),c=s(491),o=s(486);function h(e){(0,o.u)().setCatchHandler(e)}function l(e){(0,o.u)().setDefaultHandler(e)}},362:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheFirst:()=>a,CacheOnly:()=>i,NetworkFirst:()=>o,NetworkOnly:()=>l,StaleWhileRevalidate:()=>u,Strategy:()=>r._,StrategyHandler:()=>d.G}),s(524),s(120);var n=s(125),r=s(951);s(119),s(873);class a extends r._{async _handle(e,t){let s,r=await t.cacheMatch(e);if(r);else try{r=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!r)throw new n.V("no-response",{url:e.url,error:s});return r}}class i extends r._{async _handle(e,t){const s=await t.cacheMatch(e);if(!s)throw new n.V("no-response",{url:e.url});return s}}const c={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class o extends r._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],r=[];let a;if(this._networkTimeoutSeconds){const{id:n,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});a=n,r.push(i)}const i=this._getNetworkPromise({timeoutId:a,request:e,logs:s,handler:t});r.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await i)());if(!c)throw new n.V("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let r,a;try{a=await n.fetchAndCachePut(t)}catch(e){e instanceof Error&&(r=e)}return e&&clearTimeout(e),!r&&a||(a=await n.cacheMatch(t)),a}}var h=s(902);class l extends r._{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,r;try{const s=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,h.V)(1e3*this._networkTimeoutSeconds);s.push(e)}if(r=await Promise.race(s),!r)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(s=e)}if(!r)throw new n.V("no-response",{url:e.url,error:s});return r}}class u extends r._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let r,a=await t.cacheMatch(e);if(a);else try{a=await s}catch(e){e instanceof Error&&(r=e)}if(!a)throw new n.V("no-response",{url:e.url,error:r});return a}}var d=s(358)}},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var s=c[e]={exports:{}};return i[e](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t=(e=o(362)).CacheFirst,s=e.StaleWhileRevalidate,n=o(89).registerRoute,r=o(308).CacheableResponsePlugin,a=o(239).ExpirationPlugin,(0,o(344).precacheAndRoute)([{'revision':'f643ffcb40357a8a000f94e1e5f034bc','url':'index.html'},{'revision':'e1494e0cdd528ed71aec96965dd8832f','url':'install.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'install.bundle.js.LICENSE.txt'},{'revision':'ae8a70335bb75a1058f33176fc93f067','url':'main.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'main.bundle.js.LICENSE.txt'}]),n((function(e){return"navigate"===e.request.mode}),new t({cacheName:"page-cache",plugins:[new r({statuses:[0,200]}),new a({maxAgeSeconds:2592e3})]})),n((function(e){var t=e.request;return["style","script","worker"].includes(t.destination)}),new s({cacheName:"asset-cache",plugins:[new r({statuses:[0,200]})]}))})();