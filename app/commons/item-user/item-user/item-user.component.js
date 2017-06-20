(function () {
  'use strict';

  angular
    .module('tx.test')
    .component('itemUser', {
      controller: 'ItemUserController',
      controllerAs: 'vm',
      bindings: {
        user: '<'
      },
      templateUrl: 'item-user.html'
    });
})();