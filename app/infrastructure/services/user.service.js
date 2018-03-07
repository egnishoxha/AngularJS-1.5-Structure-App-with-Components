'use strict';
(function() {
    angular
        .module("myApp")
        // All Users
        .service("getUsersService", function($http){
            this.getUsers = function(name){
                return $http.get("https://api.github.com/search/users?q="+name);
            }
        })
        // User Detail
        .service("userDetailService", function($http){
            this.getUserDetail = function(name){
                return $http.get("https://api.github.com/users/"+name);
            }
        })
        // Book Detail
        .service("bookDetailService", function($http){
            this.getBookDetail = function(id){
                return $http.get("https://api.github.com/users/eric");
            }
        })
})();