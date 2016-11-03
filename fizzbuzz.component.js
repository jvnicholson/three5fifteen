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
				var item = { index: i };

				ctrl.items.push(item);
				if((i % 3) === 0 && (i % 5) === 0) {
					item.label = "fzbz";
				} else if ((i % 3) === 0) {
					item.label = "fizz";
				} else if((i % 5) === 0) {
					item.label = "buzz";
				} else {
					item.label = "--";
				}

			}
		}
	}
})();
