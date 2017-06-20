(function () {
  'use strict';
  
  angular
    .module('tx.test')
    .controller('ListRepositoryController', ListRepositoryController);

  ListRepositoryController.$inject = ['listRepoService', '$routeParams', '$location'];

  function ListRepositoryController(listRepoService, $routeParams, $location) {
    var vm = this;
    vm.repos = [];
    vm.currentPage = 1;
    vm.maxSize = 4;
    vm.totalItems = vm.repos.length;

    vm.$onInit = init;
    vm.getAllRepos = getAllRepos;
    vm.pageChanged = pageChanged;
    vm.setPage = setPage;

    function pageChanged() {

    }

    function init() {
      getAllRepos();
      console.log('TOTALLLLLL',vm.totalItems);
    }

    function getAllRepos() {
      listRepoService.getRepos($routeParams.user)
        .then(function (response) {
          vm.repos = response;
        });
    }
    
    function setPage() {
      
    }
  }
})();