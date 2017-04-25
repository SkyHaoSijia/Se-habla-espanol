(function() {
	'use strict';

	angular
		.module('enterprise_training',[])
		.controller('Enterprise_trainingController', Enterprise_trainingController);

	function Enterprise_trainingController(){
		angular.element('.nav .active').removeClass("active");
		angular.element('.nav .about-us').addClass("active");
		console.log("test");
	}
})();