(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getAllImages
			// Abstract: Gets all image posts
			// ------------------------------------------------------------
			const getAllImages = function()
			{
				let call = $http({
					method: 'GET',
					Header: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/images`,
				})

				return call;
			}



			// ------------------------------------------------------------
			// Name: postImage
			// Abstract: Posts a new image
			// ------------------------------------------------------------
			const postImage = function(imageData)
			{
				console.log(imageData);

				let call = $http({
					method: 'POST',
					data: {
						'title': imageData.title,
						'url': imageData.url,
						'description': imageData.description,
					},
					Header: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/image/post`,
				})

				return call;
			}



			return {
				getAllImages,
				postImage,
			}
		})
})();
