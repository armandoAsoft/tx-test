(function () {
  'use strict';

  angular
    .module('tx.test')
    .service('listRepoService', listRepoService);

  listRepoService.$inject = ['httpService', 'TX_TEST_URL'];

  function listRepoService(httpService, TX_TEST_URL) {
    var service = {
      getRepos: getRepos
    };

    return service;

    function getRepos(user) {
      return httpService.httpGet(TX_TEST_URL.url + '/users/' + user + '/repos');
    }
  }
})();