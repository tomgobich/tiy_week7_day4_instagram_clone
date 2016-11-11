(() => {

	'use strict';

	angular
	.module('app', ['ui.router', 'ngAnimate'])
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
		.state('singlePost',
		{
			url:			'/post/:id',
			templateUrl:	'partials/single-post.html',
			controller:		'CSinglePost',
			controllerAs:	'controller'
		})

	}

})();
