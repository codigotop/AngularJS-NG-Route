angular.module('App')
.controller('HomeController', function ($rootScope) {
    var ctrl = this;

    $rootScope.$broadcast('MudarMenu', 'home');
});