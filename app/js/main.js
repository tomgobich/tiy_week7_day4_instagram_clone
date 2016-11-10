(() => {

	'use strict';

	angular
	.module('app', ['ui.router'])
	// .directive('currentWeather', function (FApi, FWeather)
	// {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl:"partials/current-weather.html",
	// 		scope: {
	//             location: '@'
	//         },
	// 		link: function (vm, element, attrs)
	// 		{
	//
	// 		}
	// 	};
	//
	//
	//
	// })
	.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider)
	{
		$stateProvider
		.state('home',
		{
			url: 			'/',
			templateUrl: 	'partials/all-images.html',
			controller: 	'CImages',
	        controllerAs: 	'controller'
	    })
		.state('post',
		{
			url:			'/post',
			templateUrl:	'partials/post.html',
			controller:		'CPost',
			controllerAs:	'controller'
		})

	}

})();
