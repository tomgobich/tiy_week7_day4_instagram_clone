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
					headers: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/images`,
				})

				return call;
			}



			// ------------------------------------------------------------
			// Name: getSingleImage
			// Abstract: Gets details for a single image
			// ------------------------------------------------------------
			const getSingleImage = function(id)
			{
				let call = $http({
					method: 'GET',
					headers: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/images/${id}`,
				})

				return call;
			}



			// ------------------------------------------------------------
			// Name: postImage
			// Abstract: Posts a new image
			// ------------------------------------------------------------
			const postImage = function(imageData)
			{
				let call = $http({
					method: 'POST',
					data: {
						'title': imageData.title,
						'url': imageData.url,
						'description': imageData.description,
					},
					headers: {'X_CSRF_TOKEN': 'tom'},
					url: `http://instagramcloneclass.herokuapp.com/image/post`,
				})

				return call;
			}



			// ------------------------------------------------------------
			// Name: likeImage
			// Abstract: Increments image's like count by one
			// ------------------------------------------------------------
			const likeImage = function(imageID)
			{
				let call = $http({
					method: 'POST',
					data: {
						'imageid': imageID,
					},
					url: `http://instagramcloneclass.herokuapp.com/images/vote`,
				})

				return call;
			}



			return {
				getAllImages,
				getSingleImage,
				postImage,
				likeImage,
			}
		})
})();
