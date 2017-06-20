(function () {
  'use strict';

  angular
    .module('tx.test')
    .component('itemRepo', {
      controller: 'ItemRepoController',
      controllerAs: 'vm',
      bindings: {
        repo: '<'
      },
      templateUrl: 'item-repo.html'
    });
})();