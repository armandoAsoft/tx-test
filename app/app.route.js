(function () {
  'use strict';

  angular
    .module('tx.test')
    .config(function ($locationProvider, $routeProvider) {

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl: 'components/list-user/list-user.html'
        })
        .when('/item-list-repository/:user', {
          templateUrl: 'components/list-repository/list-repository.html'
        })
        .otherwise({redirectTo: '/'});
    });
})();