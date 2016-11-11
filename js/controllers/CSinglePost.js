'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CSinglePost', function (FApi, $state, $stateParams) {

		var vm = this;

		var $largeLikeIcon = $('#largeLikeIcon');

		// Get ID from url
		var id = $stateParams.id;

		// Get single image using ID from API
		var singleImage = FApi.getSingleImage(id);

		// Once returned from API call...
		singleImage.then(function (imageResponse) {
			// Target the needed data
			vm.imageData = imageResponse.data;

			// Change posted date to moment from now time
			vm.imagePosted = moment(vm.imageData.posted).fromNow();
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
				// If returned successfull
				if (responseData.data.success) {
					$largeLikeIcon.addClass('iconLikeAnimation');

					// Locally update the like count
					vm.imageData.likes++;

					setInterval(removeAnimationClass, 3000);
				}
			});
		};

		var removeAnimationClass = function removeAnimationClass() {
			$largeLikeIcon.removeClass('iconLikeAnimation');
		};
	});
})();