(function() {
	'use strict';

	angular
		.module('about_us',[])
		.controller('AboutUsController', AboutUsController);

	function AboutUsController($timeout, $rootScope, $scope){
		angular.element('.nav .active').removeClass("active");
		angular.element('.nav .about-us').addClass("active");
	}
})();