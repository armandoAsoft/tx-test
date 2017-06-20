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

    console.log('enterrrrrrrrrrrrr');

    vm.init = init;
    vm.getAllRepos = getAllRepos;
    vm.pageChanged = pageChanged;
    vm.setPage = setPage;

    function pageChanged() {

    }

    function init() {
      vm.getAllRepos();
    }

    function getAllRepos() {
      listRepoService.getRepos($routeParams.user)
        .then(function (response) {
          console.log('list repo', vm.repos);
          vm.repos = response;
        });
    }
    
    function setPage() {
      
    }

    vm.init();
  }
})();