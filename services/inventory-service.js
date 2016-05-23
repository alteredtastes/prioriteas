(function () {
  'use strict'

  angular
    .module('prioriteas')
    .factory('InventoryService', InventoryService);

  function InventoryService($http){

    var teas = $http.get('teas.json').then(function(result){
      return result.data;
    });

    return {
      getTeas: function(){
        return teas;
      },
      getByCategory: function(category) {
        
      }

    }
  }
})();
