"use strict";var precacheConfig=[["/index.html","3e63d8d25af9d951bc3c2f0801eade17"],["/static/css/main.e89093ec.css","ee17db7c8bcbeb915ec455249b6da3fb"],["/static/js/main.a688370a.js","3df037e5a8d2f6d5c0147245970f3e0a"],["/static/media/HCB.b3128e6d.png","b3128e6d4f8ced0c00dbb322256b3a07"],["/static/media/HCNB.bc2361e3.png","bc2361e397096a4d87b384785b9032d3"],["/static/media/IFSM3.0dc948d5.jpg","0dc948d51570dc9479d01d64f65e3852"],["/static/media/IFSMinput1.9ca67d3e.jpg","9ca67d3e6bbbf9a2a4c2fc528ba5b363"],["/static/media/IFSMmodel1.5544cb0d.jpg","5544cb0d792afbd1f6241463f17bcefa"],["/static/media/IFSMoutput1.127db22c.jpg","127db22c2b27e051f5b66d5f9c7d0c59"],["/static/media/NBB.ae60260b.png","ae60260b503eb71062b60c0d08363fac"],["/static/media/Nannon.4b5a1653.pdf","4b5a16531bc232da550b9d380d39f87a"],["/static/media/Resume.db37c055.pdf","db37c05517769c28e99317bfa6343ce7"],["/static/media/code.3938a58d.png","3938a58d6e55a308897db91f029ed216"],["/static/media/diamond4.fda430c3.jpg","fda430c343fdbc233b9a776a5bea1111"],["/static/media/fist.278d2164.png","278d2164b9d8d718cafe9686af7a106a"],["/static/media/n6.814d2e73.jpg","814d2e73ca38e94901ce2dbb0ea98f31"],["/static/media/n9.86ca1da7.jpg","86ca1da75db536b58285d5af4512a15f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});