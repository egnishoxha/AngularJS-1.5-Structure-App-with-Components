'use strict';
(function () {
	var middleware = function (store) {
		return function (next) {
			return function (action) {
				// some async code
				action.payload = {
					data: asyncResponse
				};

				next(action)
			}
		}
	}

	const initialState = [];

	var todoReducer = function (state = initialState, action) {
		switch (action.type) {
			case "ADD_TODO":
				return [...state, action.payload];
			case "REMOVE_TODO":
				return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
			default:
				return state;
		}
	}



	angular
		.module("myApp")
	    .config(["$ngReduxProvider", function ($ngReduxProvider) {
			var reducer = Redux.combineReducers({
				"todos": todoReducer
			});
			$ngReduxProvider.createStoreWith(reducer);
		}]);

})();
