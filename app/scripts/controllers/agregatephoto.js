'use strict';

angular.module('instangularApp')
    .controller('AgregatePhotoCtrl', ['$scope', '$timeout', 'factoryAllPhoto', function($scope, $timeout, factoryAllPhoto) {
        $scope.tags = {
            tag1: 'girl',
            tag2: 'beauty',
            tag3: 'selfie'
        };

        $scope.items = [];

        $scope.$watchCollection(factoryAllPhoto.getItems, function() {

            var pushItems = factoryAllPhoto.getItems();

            //отфильтровываем фотографии по тегам, и  не берем фото которые уже есть
            var filterItems = pushItems.filter(function(item) {
                var tags = item.tags,
                    scopeTags = $scope.tags;

                if (tags.indexOf(scopeTags.tag1) !== -1 && tags.indexOf(scopeTags.tag2) !== -1 && tags.indexOf(scopeTags.tag3) !== -1) {
                    var id = item.id,
                        isContains = function(el) {
                            return el.id === id;
                        };

                    if (!$scope.items.some(isContains)) {
                        return item;
                    }
                }


            });

            $scope.items = $scope.items.concat(filterItems);
        });


    }]);
