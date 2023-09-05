self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('flour-mixer').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        'https://code.jquery.com/jquery-3.6.0.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});