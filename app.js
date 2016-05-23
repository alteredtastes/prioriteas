(function () {
  'use strict';

  angular
    .module('prioriteas', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider){
    $routeProvider
    .when('/store', {
      templateUrl: 'store/store.html',
      controller: 'StoreController',
      controllerAs: 'store'
    })
    .when('/checkout', {
      templateUrl: 'cart/cart.html',
      controller: 'CartController',
      controllerAs: 'cart'
    })
    .otherwise({
      redirectTo: '/store'
    })
    $locationProvider.html5Mode(true);
  }
})();
