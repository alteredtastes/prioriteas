(function () {
  'use strict'

  angular
    .module('prioriteas')
    .controller('StoreController', StoreController);

  function StoreController(InventoryService) {
    var vm = this;
    vm.storeView = 'this is the store';

    InventoryService.getTeas().then(function(data){
      vm.teas = data;
      console.log(vm.teas);
    })

    InventoryService.getCategories().then(function(data){
      vm.categories = data;
      console.log(vm.categories);
    })

    InventoryService.getCategoryBy

  }
})();
