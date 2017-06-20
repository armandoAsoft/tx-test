(function () {
  'use strict';
  
  angular
    .module('tx.test')
    .controller('ListRepositoryController', ListRepositoryController);

  ListRepositoryController.$inject = ['listRepoService', '$routeParams', 'txLocation'];

  function ListRepositoryController(listRepoService, $routeParams, txLocation) {
    var vm = this;
    vm.repos = [];
    vm.currentPage = $routeParams.page;
    vm.maxSize = 4;
    vm.totalItems = vm.repos.length;

    vm.init = init;
    vm.getAllRepos = getAllRepos;
    vm.pageChanged = pageChanged;
    vm.setPage = setPage;

    function pageChanged() {
      txLocation.skipReload().path('/repositories/'+$routeParams.user_login+'/'+vm.currentPage).replace();
    }

    function init() {
      vm.getAllRepos();
    }

    function getAllRepos() {
      listRepoService.getRepos($routeParams.user_login)
        .then(function (response) {
          vm.repos = response;
          vm.setPage($routeParams.page);
          vm.pageChanged();
        });
    }
    
    function setPage(numberPage) {
      vm.currentPage = numberPage;
    }

    vm.init();
  }
})();