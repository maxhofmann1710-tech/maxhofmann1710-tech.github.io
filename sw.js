/* AboWächter Service Worker – App läuft auch offline */
const C="abowaechter-v2.3";
const SDK="https://www.gstatic.com/firebasejs/10.14.1/";
const F=["./","index.html","einstellungen.js","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","datenschutz.html",
SDK+"firebase-app-compat.js",SDK+"firebase-auth-compat.js",SDK+"firebase-firestore-compat.js"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(new Request(u,{cache:"reload"})).catch(()=>{})))))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
function put(req,res){if(res&&(res.ok||res.type==="opaque")){const c=res.clone();caches.open(C).then(x=>x.put(req,c)).catch(()=>{})}return res}
function netFirst(req){return new Promise(resolve=>{let done=false;
const fallback=()=>caches.match(req,{ignoreSearch:true}).then(r=>r||(req.mode==="navigate"?caches.match("index.html"):undefined)).then(r=>{if(!done&&r){done=true;resolve(r)}return r});
const t=setTimeout(fallback,3500);
fetch(req).then(r=>{clearTimeout(t);put(req,r);if(!done){done=true;resolve(r)}}).catch(()=>{clearTimeout(t);fallback().then(r=>{if(!done){done=true;resolve(r||new Response("Offline",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}}))}})})})}
self.addEventListener("fetch",e=>{const req=e.request;if(req.method!=="GET")return;const u=new URL(req.url);
if(u.origin===location.origin){e.respondWith(netFirst(req));return}
if(req.url.startsWith(SDK)){e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(r=>put(req,r)).catch(()=>hit);return hit||net}));return}});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:"window"}).then(l=>l.length?l[0].focus():self.clients.openWindow("./")))});
