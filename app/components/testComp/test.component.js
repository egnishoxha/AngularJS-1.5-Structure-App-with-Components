//Test Component
'use strict';
(function() {

    //Controller
    var TestController = function(RxService, $scope) {
        var ctrl = this;
    
        this.$onInit = function(){
            console.log("birthday in testComp: ", $scope.$parent.birthDay);
        }

        // RxService.emitter.listen("myMsg", function(data){
        //     console.log("listened Data: ", data);
        // });

        // listen for the event in the relevant $scope
        $scope.$on('myCustomEvent', function (event, data) {
            console.log("received data: ", data); // 'Data to send'
            ctrl.receivedData = data;            
        });

        ctrl.emitData = function(){
            $scope.$emit("mySecondEvent", {
                www: 'emit_obj', // send whatever you want
            });
        }
        
    }
    
    //Component
    var TestComponent = {
        templateUrl: "./app/components/testComp/test.tpl.html",
        controller: TestController,
        controllerAs: "ctrl",
        bindings: {
            prenom: "@",
            infopersonale: "<"
        }
    }
    
    angular
        .module("myApp")
        .component("testComponent", TestComponent);
})();
  
  