(function(){
	'use strict';

	angular
		.module('chat-con-angular-fire')
			.controller("controlador_Principal", controlador_Principal);

	function controlador_Principal($firebaseArray){
		var vm = this;

		var ref = new Firebase("https://angularfire-gdg.firebaseio.com/");

		vm.mensajes = $firebaseArray(ref);
	}

})();