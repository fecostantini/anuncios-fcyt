/*
self.addEventListener('install', function(event) {
	// Instalacion del servioce worker.
	event.waitUntil(
		caches.open(CACHE).then(function(cache) {
			console.log('Cache abierto.');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) return response;

			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(function(response) {
				if (!response || response.status !== 200 || response.type !== 'basic')
					return response;

				var responseToCache = response.clone();

				caches.open(CACHE).then(function(cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener('message', function(event) {
	if (event.data.action === 'skipWaiting') {
		self.skipWaiting();
	}
});
*/
'use strict';

const cacheName = 'Anuncios FCYT v0.0.1';
var urlsToCache = [
	'./date.js',
	'./service-worker.js',
	'./IniciarServiceWorker.js',
	'./OneSignalSDKUpdaterWorker.js',
	'./OneSignalSDKWorker.js',
	'../database/data.json',
	'../database/database.js',
	'../images/icons/FB2.png',
	'../images/icons/GH2.png',
	'../images/icons/TW2.png',
	'../images/icons/IG2.png',
	'../images/assents/header.png'

	/*
	'style.css',
	'OneSignalSDKUpdaterWorker.js',
	'OneSignalSDKWorker.js',
	'js/date.js',
	'data/test.json', //nota para el desarrollador, upgradea esto kbza
	'images/assents/header.png',
	'images/icons/FB2.png', //nota para el desarrollador, upgradea esto kbza
	'images/icons/GH2.png', //nota para el desarrollador, upgradea esto kbza
	'images/icons/TW2.png', //nota para el desarrollador, upgradea esto kbza
  'images/icons/IG2.png' //nota para el desarrollador, upgradea esto kbza
  */
];

self.addEventListener('install', async e => {
	const cache = await caches.open(cacheName);
	await cache.addAll(urlsToCache);
	return self.skipWaiting();
});

self.addEventListener('activate', e => {
	self.clients.claim();
});
