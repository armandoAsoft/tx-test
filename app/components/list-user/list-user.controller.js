(function () {
  'use strict';

  angular
    .module('tx.test')
    .controller('ListUserController', ListUserController);

  ListUserController.$inject = ['listUserService'];
  
  function ListUserController(listUserService) {
    var vm = this;
    vm.users = [];

    vm.$onInit = onInit;
    vm.getAllUsers = getAllUsers;
    
    function onInit() {
      getAllUsers();
    }
    
    function getAllUsers() {
      listUserService.getUsers()
        .then(function (response) {
          vm.users = response;
      });
    }
  }
})();