'use strict';

/**
 * @ngdoc directive
 * @name instangularApp.directive:photo
 * @description
 * # photo
 */
angular.module('instangularApp')
    .directive('photo', function() {
        return {
            templateUrl: '/photo.html',
            restrict: 'E',
            scope: {
                width: '@',
                height: '@',
                item: '='
            },
        };
    });
