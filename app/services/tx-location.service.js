(function () {
  'use strict';

  angular
    .module('tx.test')
    .service('txLocation', txLocation);

  txLocation.$inject = ['$location', '$rootScope', '$route'];

  function txLocation($location, $rootScope, $route) {

    $location.skipReload = function() {
      var lastRoute = $route.current;
      var un = $rootScope.$on('$locationChangeSuccess', function () {
        $route.current = lastRoute;
        un();
      });
      return $location;
    };

    return $location;
  }
})();