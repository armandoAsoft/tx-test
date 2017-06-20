(function () {
  'use strict';

  angular
    .module('tx.test')
    .service('httpService', httpService);

  httpService.$inject = ['$http'];
  
  function httpService($http) {

    var service = {
      httpPost: httpPost,
      httpGet: httpGet,
      httpPut: httpPut
    };

    return service;

    function httpPost(url, data, options) {
      if(options === undefined) {
        options = {};
      }
      
      return $http.post(url, data, options)
        .then(
          function (response) {
            return successResponse(response);
          },
          function (response) {
            return errorResponse(response);
          }
        );
    }

    function httpGet(url, options) {
      if (options === undefined) {
        options = {};
      }

      return $http.get(url, options)
        .then(
          function (response) {
            return successResponse(response);
          },
          function (response) {
            return errorResponse(response);
          }
        );
    }

    function httpPut(url, data, options) {
      if (options === undefined) {
        options = {};
      }

      return $http.put(url, data, options)
        .then(
          function (response) {
            return successResponse(response);
          },
          function (response) {
            return errorResponse(response);
          }
        );
    }

    function successResponse(response) {
      return response.data;
    }

    function errorResponse(response) {
      return response.data || 'Request Failed';
    }
  }
})();