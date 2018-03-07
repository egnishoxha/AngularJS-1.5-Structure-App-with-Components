// app.directive('myLivre', function(){
//     return{
//         restrict: "E",
//         templateUrl:"books.tpl.html",
//         scope: {
//             blist: '=',
//             btitle: '@'
//          },
//         transclude: true,
//         link: function(scope, element, attrs, ctrl, transclude){
//             transclude(function(clone){
//                 element.append(clone);
//             });
//         }
//     }
// });
'use strict';

(function () {
    
    var MyLivre = function() {
        return{
            restrict: "E",
            templateUrl:"./app/directives/books.tpl.html",
            scope: {
                blist: '=',
                btitle: '@'
             },
            transclude: true,
            link: function(scope, element, attrs, ctrl, transclude){
                transclude(function(clone){
                    element.append(clone);
                });
            }
        }
    }
    
    angular
        .module('myApp')
        .directive('myLivre', MyLivre);

})();
  