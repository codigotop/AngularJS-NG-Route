angular.module('App')
.controller('ContatoController', function ($rootScope) {
    var ctrl = this;

    $rootScope.$broadcast('MudarMenu', 'contato');
});