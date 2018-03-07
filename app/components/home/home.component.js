//Home Component
(function() {
    'use strict';

    //Controller
    var HomeController = function(getUsersService) {
        var ctrl = this;
    
        function createNode(element) {
            return document.createElement(element);
        }
      
        function append(parent, el) {
          return parent.appendChild(el);
        }

        this.$onInit = function(){
            const ul = document.getElementById('authors'); // Get the list where we will place our authors
            const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

           fetch(url)
                .then((resp) => resp.json())
                .then(function(data) {
                    let authors = data.results;
                    return authors.map(function(author) {
                        let li = createNode('li'),
                            img = createNode('img'),
                            span = createNode('span');
                        img.src = author.picture.medium;
                        span.innerHTML = `${author.name.first} ${author.name.last}`;
                        append(li, img);
                        append(li, span);
                        append(ul, li);
                    })
                })
                .catch(function(error) {
                    console.log(error);
                });   
        }
        ctrl.searchUser = function(){
            getUsersService.getUsers(ctrl.searchValue)
            .then(function(data){
                console.log("loaded data: ", data.data);
                ctrl.users = data.data;
            })
        }
        

        ctrl.todo = [
            {name: 'Create a custom directive', completed: true},
            {name: 'Learn about restrict', completed: true},
            {name: 'Master scopes', completed: false}
        ];
        ctrl.books = [
            {title: "O Alquimista", author: "Paulo Coelho"},
            {title: "Novela", author: "Stefan Zweig"}
        ];
    }
    
    //Component
    var HomeComponent = {
        templateUrl: './app/components/home/home.html',
        controller: HomeController,
        controllerAs: "ctrl",
        bindings: {
            deuxiemeTexte: '@'
        }
    }
    
    angular
        .module('myApp')
        .component('homeComponent', HomeComponent);
})();
  
  