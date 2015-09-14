(function(){
	'use strict';

	angular
		.module('chat-con-angular-fire')
			.controller("controlador_Principal", controlador_Principal);

	function controlador_Principal($firebaseArray){
		var vm = this;

		var ref = new Firebase("https://angularfire-gdg.firebaseio.com/");

		vm.mensajes = $firebaseArray(ref);


		// Creamos un nombre aleatorio para vistante que se usará si el usuario no pone un nombre
		var usuarioVisitante = "Visitante_" + Math.ceil(Math.random()*1000);


		vm.enviar = function(){

			vm.mensajes.$add({

				remitente: vm.miNombre || usuarioVisitante,
				texto: vm.mensajeNuevo
				
			});

			// Borramos el campo de texto y hacemos 'focus' sobre él
			vm.mensajeNuevo = "";
			document.getElementById('mensajeNuevo').focus();
		};
	}

})();