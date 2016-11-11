'use strict';

(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ngAnimate']).config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'partials/all-images.html',
			controller: 'CImages',
			controllerAs: 'controller'
		}).state('post', {
			url: '/post',
			templateUrl: 'partials/post.html',
			controller: 'CPost',
			controllerAs: 'controller'
		}).state('singlePost', {
			url: '/post/:id',
			templateUrl: 'partials/single-post.html',
			controller: 'CSinglePost',
			controllerAs: 'controller'
		});
	}
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnXSkuY29uZmlnKGFwcENvbmZpZyk7XG5cblx0YXBwQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXHRmdW5jdGlvbiBhcHBDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuXHRcdFx0dXJsOiAnLycsXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2FsbC1pbWFnZXMuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ0ltYWdlcycsXG5cdFx0XHRjb250cm9sbGVyQXM6ICdjb250cm9sbGVyJ1xuXHRcdH0pLnN0YXRlKCdwb3N0Jywge1xuXHRcdFx0dXJsOiAnL3Bvc3QnLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9wb3N0Lmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NQb3N0Jyxcblx0XHRcdGNvbnRyb2xsZXJBczogJ2NvbnRyb2xsZXInXG5cdFx0fSkuc3RhdGUoJ3NpbmdsZVBvc3QnLCB7XG5cdFx0XHR1cmw6ICcvcG9zdC86aWQnLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9zaW5nbGUtcG9zdC5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdDU2luZ2xlUG9zdCcsXG5cdFx0XHRjb250cm9sbGVyQXM6ICdjb250cm9sbGVyJ1xuXHRcdH0pO1xuXHR9XG59KSgpOyJdfQ==
