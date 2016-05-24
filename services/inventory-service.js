(function () {
  'use strict'

  angular
    .module('prioriteas')
    .factory('InventoryService', InventoryService);

  function InventoryService($http){

    var temp = [];
    var categories = [];

    function Teas() {
      return $http.get('teas.json').then(function(result){
        return result.data.teas;
      })
    }

    return {
      getTeas: function(){
        return Teas();
      },
      // getCategories: function(){
      //   return Teas().then(function(teas) {
      //     for (var i = 0; i < teas.length; i++) {
      //       for (var j = 0; j < teas[i].categories.length; j++) {
      //         if(categories.indexOf(teas[i].categories[j]) === -1) {
      //           categories.push(teas[i].categories[j])
      //         }
      //       }
      //     }
      //     return categories;
      //   })
      // },
      getCategories: function() {
        return Teas().then(function(teas) {
          teas.forEach(function(obj) {
            temp.push(obj.categories);
          })
        temp = [].concat.apply([], temp);
        for (var i = 0; i < temp.length; i++) {
          if(categories.indexOf(temp[i]) === -1) {
            categories.push(temp[i]);
            }
          }
        return categories;
        })
      }
    }
}
})();
