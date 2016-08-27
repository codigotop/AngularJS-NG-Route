angular.module('App')
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) 
{

    $routeProvider
    // Home ========================================
    .when('/', {
		templateUrl: 'views/home/principal.html',
		controller: 'HomeController as p'
	})
	.when('/sobre', {
		templateUrl: 'views/sobre/principal.html',
		controller: 'SobreController as p'
	})
	.when('/contato', {
		templateUrl: 'views/contato/principal.html',
		controller: 'ContatoController as p'
	});

    $locationProvider.html5Mode(true);
}]);