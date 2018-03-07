//Home Component
(function() {
    'use strict';

    //Controller
    var HomeListController = function($stateParams) {
        var ctrl = this;       
    }
    
    //Component
    var HomeListComponent = {
        templateUrl: './app/components/home/homeList/homeList.tpl.html',
        controller: HomeListController,
        bindings: {
            listData: "@"
        }
    }
    
    angular
        .module('myApp')
        .component('homeListComponent', HomeListComponent);
})();
  
  