'use strict';

angular.module('instangularApp')
    .factory('factoryAllPhoto', function() {
        var items = [];
        return {
            getItems: function() {
                return items;
            },
            addItems: function(arr) {
               items = arr;
            }
        };
    });
