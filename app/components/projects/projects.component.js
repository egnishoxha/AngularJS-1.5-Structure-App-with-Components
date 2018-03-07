//Projects Component
(function () {
    'use strict';
    
    //Controller
    var PojectController = function($ngRedux, RxService, $scope) {
        var ctrl = this;

        ctrl.broadcastData = function(){
            var msg = "er";
            //RxService.emitter.emit("myMsg", msg);
            // firing an event downwards
            $scope.$broadcast('myCustomEvent', {
                someProp: 'Sending you an Object!', // send whatever you want
                names: ctrl.testData
            });
        }

        $scope.$on("mySecondEvent", function(event, data){
            console.log("emitted data from TestComp to ProjectsComp: ", data);
        });


        $scope.birthDay = "Aout";

        ctrl.todo = "";

        ctrl.mapStateToThis = function(state) {
            return {
                todos: state.todos
            };
        }

        ctrl.unsubscribe = $ngRedux.connect(this.mapStateToThis, {
			addTodo: function (todo) {
				return {
					type: "ADD_TODO",
					payload: todo
				};
			},
			removeTodo: function (index) {
				return {
					type: "REMOVE_TODO",
					payload: index
				};
			}
		})(this);

        ctrl.submitTodo = function(){
            ctrl.addTodo(ctrl.todo);
            console.log("ctrl.submitTodo: ", ctrl.todo);
            ctrl.todo = "";
        }
        
        this.$onDestroy = function(){
            ctrl.unsubscribe();
        }
        ctrl.testData = [
            {name: "Egnis", lastName: "Hoxha"},
            {name: "X", lastName: "Y"},
            {name: "HH", lastName: "OO"}
        ];
        ctrl.returnData = function(){
            return ctrl.testData;
        }
        
    }

    //either we use controllerAs ctrl and access the vars in view with ctrl.varName
    //  or: we access it in view like this: $ctrl.varName 

    //Component
    var ProjectComponent = {
        templateUrl: './app/components/projects/projects.html',
        controller: PojectController,
        controllerAs: "ctrl",
        bindings:{
            //mytext: '@'
        }
    }
    
    angular
        .module('myApp')
        .component('projectComponent', ProjectComponent);

})();
  
  