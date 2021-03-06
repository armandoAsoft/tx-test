(function () {
  'use strict';
  
  angular
    .module('tx.test')
    .service('listUserService', listUserService);

  listUserService.$inject = ['httpService', 'TX_TEST_URL'];
  
  function listUserService(httpService, TX_TEST_URL) {
    var USERS_URL = '/users';

    var service = {
      getUsers: getUsers
    };

    return service;
    
    function getUsers() {
      return httpService.httpGet(TX_TEST_URL.url + USERS_URL);
    }
  }
})();