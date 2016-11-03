(function () {
	'use strict';

	angular.module('fizzbuzz', [])
		.component('fizzBuzz', {
			controller: FizzBuzz,
			templateUrl: 'fizzbuzz.component.html'
		});

	function FizzBuzz() {
		var ctrl = this;

		// Properties
		ctrl.items = [];

		// Methods


		init();

		function init() {
			for(var i=1; i<=100; i++) {
				ctrl.items.push(i);
			}
		}
	}
})();
