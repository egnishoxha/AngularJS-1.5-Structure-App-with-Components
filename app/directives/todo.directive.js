'use strict';

(function () {
    
    var MyTodo = function() {
        return {
            restrict: 'EA',
            templateUrl: './app/directives/todo.tpl.html',
            scope: {
                list: '=',
                title: '@?'
            },
            transclude: true,
            link: function(scope, element, attrs, ctrl, transclude) {
                transclude(function(clone) {
                    element.append(clone);
                });
            }
        };
    }
    
    angular
        .module('myApp')
        .directive('myTodo', MyTodo);

})();