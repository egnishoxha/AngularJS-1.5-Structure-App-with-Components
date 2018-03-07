'use strict';
(function() {

    //Controller
    var UserDetailController = function($stateParams, $scope, userDetailService) {
        var ctrl = this;

        this.$onInit = function () {
            $stateParams.id = $stateParams.userId;
            if($stateParams.id != null){
                //load user detail        
                userDetailService.getUserDetail($stateParams.id)
                    .then(function(data){
                        ctrl.user = data.data;                        
                    })
            }
        };
    }
    
    //Component
    var UserDetailComponent = {
        templateUrl: './app/components/userDetail/user.detail.tpl.html',
        controller: UserDetailController,
        controllerAs: "ctrl",
        bindings: {
            
        }
    }
    
    angular
        .module("myApp")
        .component("userDetailComponent", UserDetailComponent);
})();









// $scope.output = "0";

//     $scope.inOperation = false;

//     $scope.num1 = 0;

//     $scope.updateOutput = function(btn) {
//         if($scope.newNumber){
//             $scope.output = 0;	
//         }
//         if($scope.output == "0" || $scope.newNumber) {
//             $scope.output = btn;
//             $scope.newNumber = false;
//         } else {
//             $scope.output += String(btn);
//         }
//     };

//     $scope.operate = function(op) {
//         if($scope.output && !$scope.inOperation){
//             $scope.num1 = $scope.output;
//             $scope.output += op;
//             $scope.inOperation = true;
//         }else if($scope.output.length > $scope.num1.length+1){
//             $scope.output = eval($scope.output);
//             $scope.output += op;
//         } 
//     };

//     $scope.equal = function() {
//         if($scope.output.length > $scope.num1.length+1){
//             $scope.output = eval($scope.output);
//       $scope.num1 = $scope.output;
//         }else{
//             $scope.output = $scope.num1;
//         }
//     };
    
  
  