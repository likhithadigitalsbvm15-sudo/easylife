const CACHE_NAME = 'easylife-v1';
const urlsToCache = [
  '/easylife/',
  '/easylife/index.html',
  '/easylife/manifest.json',
  '/easylife/icon-192.png',
  '/easylife/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
