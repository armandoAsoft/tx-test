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
      console.log('dededede', user);
      $location.path('/item-list-repository/'+user);
    }
  }
})();