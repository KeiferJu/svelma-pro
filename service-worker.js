!function(){"use strict";const e=["client/chunk.1eafa91d.js","client/index.6021dc02.js","client/chunk.88cd124b.js","client/chunk.67d563de.js","client/chunk.c5cee6e7.js","client/chunk.64fb850a.js","client/pagination.48991d3d.js","client/colorpicker.74023622.js","client/timepicker.377a97de.js","client/carousel.cca4e52a.js","client/chunk.e7ec29b3.js","client/datepicker.51ce6f03.js","client/collapse.c7caa0ce.js","client/message.b425c948.js","client/progress.61bd6866.js","client/snackbar.a4df2343.js","client/notification.5c5f40ab.js","client/layout.70e0a49e.js","client/dialog.b179b32c.js","client/slider.f9b68a97.js","client/modal.32c2bfb6.js","client/switch.5c2d1a25.js","client/toast.11037e74.js","client/icon.6a87dba1.js","client/button.8578a1c5.js","client/client.b5e0867f.js","client/tip.44881808.js","client/about.3f37cb4f.js","client/input.c0e7692d.js","client/intro.755f1f35.js","client/nav.2f37bd96.js","client/index.da09c969.js","client/field.6e10ba55.js","client/tiles.c89d17b3.js","client/index.ec8bca4c.js","client/table.e527c64e.js","client/media.6a05b8a7.js","client/[slug].966006de.js","client/hero.b3be7c1e.js","client/tabs.14c4e90b.js","client/chunk.a406e8dd.js"].concat(["service-worker-index.html","favicon.ico","global.css","great-success.png","logo.png","manifest.json"]),c=new Set(e);self.addEventListener("install",c=>{c.waitUntil(caches.open("cache1591839470383").then(c=>c.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1591839470383"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1591839470383").then(async c=>{try{const t=await fetch(e.request);return c.put(e.request,t.clone()),t}catch(t){const n=await c.match(e.request);if(n)return n;throw t}}))))})}();
