'use strict';


angular.module('instangularApp')
    .directive('photos', function() {
        return {
            templateUrl: '/main.html',
            restrict: 'E',
            scope: {
                tag: '='
            },
            controller: 'MainCtrl'
        };
    });
