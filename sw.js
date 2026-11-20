// 제조 쿨타임 달력: 알림을 띄우기 위한 최소한의 서비스 워커 (캐시 없음)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(function (list) {
    return list.length ? list[0].focus() : self.clients.openWindow('./');
  }));
});
