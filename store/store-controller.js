(function () {
  'use strict'

  angular
    .module('prioriteas')
    .controller('StoreController', StoreController);

  function StoreController(InventoryService) {
    var vm = this;
    vm.storeView = 'this is the store';

    InventoryService.getTeas().then(function(data){
      vm.teas = data.teas;
    })
  }
})();
