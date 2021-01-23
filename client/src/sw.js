importScripts("wordbox-v3.6.3/workbox-sw.js");

workboxConfig.setConfig({modulePathPrefix: 'workbox-v3.6.3/'})

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
precacheAndRoute(self.__WB_MANIFEST);

//
workbox.routing.registerRoute(/.*categories/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');
