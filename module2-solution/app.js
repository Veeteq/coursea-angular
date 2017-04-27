(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',          ToBuyController)
  .controller('AlreadyBoughtController',  AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buyer = this;

    buyer.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var checker = this;

    checker.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;
console.log("Bla");
    var itemsToBuy = [{name: "Milk",     quantity:   "2"},
                      {name: "Donuts",   quantity: "200"},
                      {name: "Cookies",  quantity: "300"},
                      {name: "Chocolate",quantity:   "5"},
                      {name: "Sandwich", quantity:  "33"}];
    var boughtItems = [];

    service.getItemsToBuy = function(){
      console.log("getItemsToBuy");
      return itemsToBuy;
    }

    service.getBoughtItems = function(){
      console.log("getBoughtItems");
      return boughtItems;
    }
  }
})()
