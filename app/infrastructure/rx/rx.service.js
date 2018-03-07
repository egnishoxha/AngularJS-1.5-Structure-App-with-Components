'use strict';
(function () {
	var RxService = function () {

		console.log("Inizializzazione rx emitter START")

		var hasOwnProp = {}.hasOwnProperty;

		function createName(name) {
			return '$' + name;
		}

		function Emitter() {
			this.subjects = {};
		}

		Emitter.prototype.emit = function (name, data) {
			var fnName = createName(name);
			this.subjects[fnName] || (this.subjects[fnName] = new Rx.Subject());
			this.subjects[fnName].onNext(data);
		};

		Emitter.prototype.listen = function (name, handler) {
			var fnName = createName(name);
			this.subjects[fnName] || (this.subjects[fnName] = new Rx.Subject());
			return this.subjects[fnName].subscribe(handler);
		};

		Emitter.prototype.dispose = function () {
			var subjects = this.subjects;
			for (var prop in subjects) {
				if (hasOwnProp.call(subjects, prop)) {
					subjects[prop].dispose();
				}
			}

			this.subjects = {};
		};

		var emitter = new Emitter();

		var rx = {
			emitter: emitter
		};

		//console.log("Inizializzazione rx emitter END")
		return rx;

	}

	angular
		.module("myApp")
		.factory("RxService", RxService);

})();
