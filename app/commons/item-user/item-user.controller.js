(function () {
  'use strict';

  angular
    .module('tx.test')
    .controller('ItemUserController', ItemUserController);

  ItemUserController.$inject = ['$location'];
  
  function ItemUserController($location) {
    var vm = this;

    vm.goToRepos = goToRepos;

    function goToRepos(user) {
      $location.path('/repositories').search('user', user);
      // console.log('dederererere', $location.absUrl());
    }
  }
})();