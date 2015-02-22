'use strict';


angular.module('instangularApp')
    .directive('photos', function() {
        return {
            templateUrl: '/photos.html',
            restrict: 'E',
            scope: {
                tag: '='
            },
            controller: 'MainCtrl'
        };
    });
