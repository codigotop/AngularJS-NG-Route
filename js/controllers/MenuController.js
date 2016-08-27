angular.module('App')
.controller('MenuController', function($rootScope){
	var ctrl = this;

	ctrl.menu = [	{url: '/', 			nome: 'home', 		selecionado: true	} , 
					{url: '/sobre', 	nome: 'sobre', 		selecionado: false	} , 
					{url: '/contato', 	nome: 'contato', 	selecionado: false 	} ];

	
	ctrl.marcarPagina = function(pagina) {
		ctrl.menu.forEach(function(itemMenu) {
			itemMenu.selecionado = (itemMenu.nome == pagina);
		});
	}

	$rootScope.$on('MudarMenu', function(evt, nomePagina) {
		ctrl.marcarPagina(nomePagina);
	})
});