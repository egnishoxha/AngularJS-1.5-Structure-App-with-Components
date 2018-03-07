'use strict';
(function() {

    //Controller
    var BookDetailController = function(bookDetailService, $stateParams) {
        var ctrl = this;
    
        this.$onInit = function(){
            $stateParams.id = $stateParams.bookId;
            if($stateParams.id != null){
                //load book detail        
                bookDetailService.getBookDetail($stateParams.id)
                    .then(function(data){
                        ctrl.book = data.data;
                        console.log("data book detail: ", ctrl.book);                        
                    })
            }
        }
        
    }
    
    //Component
    var BookDetailComponent = {
        templateUrl: './app/components/books/book-detail/book.detail.tpl.html',
        controller: BookDetailController,
        controllerAs: "ctrl",
        bindings: {

        }
    }
    
    angular
        .module('myApp')
        .component('bookDetail', BookDetailComponent);
})();
  
  