'use strict';


angular.module('instangularApp')
    .controller('MainCtrl', ['$scope', '$timeout', 'factoryTagPhoto', 'factoryAllPhoto', function($scope, $timeout, factoryTagPhoto, factoryAllPhoto) {

        var pollInstagram = function() {
            factoryTagPhoto.get(30, $scope.tag).success(function(response) {
                $scope.items = response.data;
                factoryAllPhoto.addItems(response.data);
            });
            $timeout(pollInstagram, 10000);
        };

        pollInstagram();


    }]);
