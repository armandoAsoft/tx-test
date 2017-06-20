(function () {
  'use strict';

  angular
    .module('tx.test')
    .config(function ($locationProvider, $routeProvider) {

      $routeProvider
        .when('/users', {
          templateUrl: 'components/list-user/list-user.html'
        })
        .when('/repositories/:user_login/:page', {
          templateUrl: 'components/list-repository/list-repository.html',
          controller: 'ListRepositoryController',
          controllerAs: 'vm',
          reloadOnSearch: false
        })
        .otherwise({redirectTo: '/users'});

    });
})();