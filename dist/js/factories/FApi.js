'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getAllImages
		// Abstract: Gets all image posts
		// ------------------------------------------------------------
		var getAllImages = function getAllImages() {
			var call = $http({
				method: 'GET',
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/images'
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: getSingleImage
		// Abstract: Gets details for a single image
		// ------------------------------------------------------------
		var getSingleImage = function getSingleImage(id) {
			var call = $http({
				method: 'GET',
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/images/' + id
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Posts a new image
		// ------------------------------------------------------------
		var postImage = function postImage(imageData) {
			var call = $http({
				method: 'POST',
				data: {
					'title': imageData.title,
					'url': imageData.url,
					'description': imageData.description
				},
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/image/post'
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: likeImage
		// Abstract: Increments image's like count by one
		// ------------------------------------------------------------
		var likeImage = function likeImage(imageID) {
			var call = $http({
				method: 'POST',
				data: {
					'imageid': imageID
				},
				url: 'http://instagramcloneclass.herokuapp.com/images/vote'
			});

			return call;
		};

		return {
			getAllImages: getAllImages,
			getSingleImage: getSingleImage,
			postImage: postImage,
			likeImage: likeImage
		};
	});
})();