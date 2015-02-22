'use strict';


angular.module('instangularApp')
  .factory('factoryTagPhoto',['$http',function ($http) {
    var base = 'https://api.instagram.com/v1';
    var clientId = 'f18e4e2f8ee44fb8bde8dee3687b2998';
    return {
      'get': function(count, hashtag) {
        var request = '/tags/' + hashtag + '/media/recent';
        var url = base + request;
        var config = {
          'params': {
            'client_id': clientId,
            'count': count,
            'callback': 'JSON_CALLBACK'
          }
        };
        return $http.jsonp(url, config);
      }
    };

}]);
