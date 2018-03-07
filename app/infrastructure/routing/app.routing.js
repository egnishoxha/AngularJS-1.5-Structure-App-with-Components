'use strict';
(function () {

    var stateConfig = function (stateProvider, urlRouterProvider) {

        urlRouterProvider.otherwise("/home");

        // stateProvider.state({
        //     name: "navbar",
        //     abstract: true,
        //     views: {
        //         "navbar@": {
        //             template: "<navbar></navbar>"
        //         }
        //     }
        // });

        var login = {
            name:"login",
            url: "/login",
            //parent: "navbar",
            component: "loginComponent",
            resolve: {

            }
        };
        stateProvider.state(login);

        var home = {
            name:"home",
            url: "/home",
            //parent: "navbar",
            component: "homeComponent",
            resolve: {

            }
    
        };
        stateProvider.state(home);
        
        var projects = {
            name:"projects",
            url: "/projects",
            //parent: "navbar",
            component: "projectComponent",
            resolve: {

            }
        };
        stateProvider.state(projects);

        var books = {
            name:"books",
            url: "/books",
            //parent: "navbar",
            component: "booksComponent",
            resolve: {

            }
        };
        stateProvider.state(books);

        var bookDetail = {
            name:"bookDetail",
            url: "/books/{bookId}",
            //parent: "navbar",
            component: "bookDetail",
            resolve: {

            }
        };
        stateProvider.state(bookDetail);

        var homeList = {
            name: "home.list",
            url: "list",
            component: "homeListComponent",
            resolve: {

            }
        }
        stateProvider.state(homeList);

        var userS = {
            name: "userS",
            url: "/userS/{userId}",
            //parent: "navbar",
            component: "userDetailComponent",
            resolve: {

            }
        }
        stateProvider.state(userS);
    }

    angular
        .module("myApp")
        .config(["$stateProvider", "$urlRouterProvider", stateConfig]);

})();
