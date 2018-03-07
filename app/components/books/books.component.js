'use strict';
(function() {

    //Controller
    var BooksController = function(getUsersService, $state) {
        var ctrl = this;
    
        this.$onInit = function(){
            ctrl.loadBooks();
        }

        ctrl.loadBooks = function(){
            ctrl.loadedBooks = [
                {
                    authorId: 3,
                    copies_no: 5,
                    gendre: "hgj",
                    id: 0,
                    lang: "fgj",
                    lit: "hgj",
                    page_no: 345,
                    title: "aaa"
                },
                {
                    authorId: 4,
                    copies_no: 2,
                    gendre: "eee",
                    id: 1,
                    lang: "ddd",
                    lit: "ccc",
                    page_no: 111,
                    title: "bbb"
                }
            ]
        }

        ctrl.editBook = function(book){
            alert("edit book!");
        }
        ctrl.delBook = function(id){
            console.log("id: ", id + "new array: " + ctrl.loadBooks);
            ctrl.loadedBooks.splice(id, 1);
        }
        ctrl.addBook = function(){
            alert("add book!");
        }
        ctrl.detailBook = function(id){
            //alert("detail book!");
            $state.go("bookDetail", {bookId: id});
        }
        
    }
    
    //Component
    var BooksComponent = {
        templateUrl: './app/components/books/books.tpl.html',
        controller: BooksController,
        controllerAs: "ctrl",
        bindings: {
            deuxiemeTexte: '@'
        }
    }
    
    angular
        .module('myApp')
        .component('booksComponent', BooksComponent);
})();
  
  