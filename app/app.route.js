(function () {
  'use strict';

  angular
    .module('tx.test')
    .config(function ($locationProvider, $routeProvider) {

      /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });*/

      $routeProvider
        .when('/users', {
          templateUrl: 'components/list-user/list-user.html'
        })
        .when('/repositories/:user', {
          templateUrl: 'components/list-repository/list-repository.html',
          controller: 'ListRepositoryController',
          controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/users'});
    });
})();