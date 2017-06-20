(function () {
  'use strict';

  angular
    .module('tx.test')
    .controller('ListUserController', ListUserController);

  ListUserController.$inject = ['listUserService'];
  
  function ListUserController(listUserService) {
    var vm = this;
    vm.users = [];
    vm.currentPage = 1;
    vm.maxSize = 4;
    vm.totalItems = vm.users.length;

    vm.$onInit = onInit;
    vm.getAllUsers = getAllUsers;
    vm.pageChanged = pageChanged;
    vm.setPage = setPage;

    function pageChanged() {

    }

    function onInit() {
      getAllUsers();
    }
    
    function getAllUsers() {
      listUserService.getUsers()
        .then(function (response) {
          vm.users = response;
      });
    }

    function setPage(numPage) {
      var end = vm.users.length/vm.maxSize;
      if(end < vm.currentPage) {
        vm.currentPage = 0;
      }
      if(numPage)
      vm.currentPage = vm.currentPage + numPage;
    }
  }
})();