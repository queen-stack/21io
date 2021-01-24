// npm run start-sw -> this makes a service worker build
// npm run build -> this makes a production build for offline. THis goes to the "build" folder

importScripts("workbox-v3.6.3/workbox-sw.js");

workboxConfig.setConfig({modulePathPrefix: 'workbox-v3.6.3/'})

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
precacheAndRoute(self.__WB_MANIFEST);

//
workbox.routing.registerRoute(/.*categories/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');
