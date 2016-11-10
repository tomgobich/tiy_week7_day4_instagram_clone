(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getAllImages
			// Abstract: Gets all image posts
			// ------------------------------------------------------------
			const getAllImages = function(city)
			{
				let call = $http({
					method: 'GET',
					Header: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/images`,
				})

				return call;
			}



			return {
				getAllImages,
			}
		})
})();
