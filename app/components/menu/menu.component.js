//Test Component
'use strict';
(function() {

    //Controller
    var MenuController = function(RxService, $scope, $window) {
        var ctrl = this;
    
        ctrl.goBack = function(){
            $window.history.back();
        }
        
    }
    
    //Component
    var MenuComponent = {
        templateUrl: "./app/components/menu/menu.tpl.html",
        controller: MenuController,
        controllerAs: "ctrl",
        bindings: {
            prenom: "@",
            infopersonale: "<"
        }
    }
    
    angular
        .module("myApp")
        .component("menuComponent", MenuComponent);
})();
  
  