(function () {
    'use strict';
     //Controller
     var LoginController = function($location, AuthenticationService) {
         var ctrl = this;

        this.$onInit = function(){
            // reset login status
            AuthenticationService.Logout();
        }

        ctrl.login = function() {
            ctrl.loading = true;
            AuthenticationService.Login(ctrl.username, ctrl.password, function (result) {
                if (result === true) {
                    $location.path('/');
                } else {
                    ctrl.error = 'Username or password is incorrect';
                    ctrl.loading = false;
                }
            });
        };
    }
    
    //Component
    var LoginComponent = {
        templateUrl: "./app/components/login/login.tpl.html",
        controller: LoginController,
        controllerAs: "ctrl",
        bindings: {
            
        }
    }
    
    angular
        .module("myApp")
        .component("loginComponent", LoginComponent);
})();