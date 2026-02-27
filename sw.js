self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // This tells the app to just get files from the web as usual
  e.respondWith(fetch(e.request));
});