if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('assets/js/service-worker.js').then(
			//nota para el desarrollador, upgradea esto kbza, movelo a js.Registro
			function(registration) {
				// Registro exitoso.
				console.log('ServiceWorker registrado con exito: ', registration.scope);
			},
			function(err) {
				// registration failed :(
				console.log('ServiceWorker error durante el registro: ', err);
			}
		);
	});
}
