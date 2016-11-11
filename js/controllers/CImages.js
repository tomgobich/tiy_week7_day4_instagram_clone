'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CImages', function (FApi) {

		var vm = this;

		// Get all images from API
		var allImages = FApi.getAllImages();

		// Once returned...
		allImages.then(function (imageData) {
			// Target the needed data
			vm.imageList = imageData.data.images;
		});

		// ------------------------------------------------------------
		// Name: likeImage
		// Abstract: Increments image like count
		// ------------------------------------------------------------
		vm.likeImage = function (imageID) {
			// Send new image like to database API
			var response = FApi.likeImage(imageID);

			// Once returned...
			response.then(function (responseData) {
				// If successful
				if (responseData.data.success) {
					// Loop through image list
					vm.imageList.forEach(function (image, index) {
						// Find ID match
						if (image._id == imageID.toString()) {
							// Locally increment like count
							image.likes++;
						}
					});
				}
			});
		};
	});
})();