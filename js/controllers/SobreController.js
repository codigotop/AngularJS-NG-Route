angular.module('App')
.controller('SobreController', function ($rootScope) {
    var ctrl = this;

    $rootScope.$broadcast('MudarMenu', 'sobre');
});