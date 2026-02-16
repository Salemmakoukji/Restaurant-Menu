const CACHE_NAME = 'lor-menu-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './images/logo.jpg',
  './images/L\'OR Transparent.png',
  './images/Banner.jpg'
];

// تثبيت الـ Service Worker وحفظ الملفات الأساسية في الكاش
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// تفعيل الـ Service Worker وتنظيف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// استراتيجية التحميل: البحث في الكاش أولاً، ثم الشبكة
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // حفظ الصور الجديدة في الكاش تلقائياً عند تصفحها
        if (event.request.url.includes('/images/menu/')) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }
        return fetchResponse;
      });
    }).catch(() => {
      // إذا كان المستخدم أوفلاين والملف غير موجود في الكاش
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});