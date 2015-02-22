'use strict';


angular.module('instangularApp')
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
