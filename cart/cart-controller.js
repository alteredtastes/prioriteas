(function () {
  'use strict'

  angular
    .module('prioriteas')
    .controller('CartController', CartController);

  function CartController() {
    var vm = this;
    vm.cartView = 'this is the cart';
  }
})();
