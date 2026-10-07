// Side B offline cache. Bump VERSION when shipping changes.
const VERSION = 'side-b-v6';
const FILES = ['./', './index.html', './style.css', './app.js'];

// cache: 'reload' skips the browser's HTTP cache so a new version never stores stale files.
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first so updates show up on the next load; fall back to the cache when offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(VERSION).then((cache) =>
      fetch(new Request(e.request.url, { cache: 'no-cache' }))
        .then((res) => { if (res.ok) cache.put(e.request, res.clone()); return res; })
        .catch(() => cache.match(e.request, { ignoreSearch: true }))
    )
  );
});
