// Minimal network-passthrough service worker. Its only job is to satisfy
// Chrome/Android's "installable PWA" requirement (a registered service worker
// with a fetch handler) — it does not cache or serve anything offline.
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
