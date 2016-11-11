(() => {

	'use strict';

	angular.module('app')
		.controller('CSinglePost', function(FApi, $state, $stateParams)
		{

			let vm = this;

			let $largeLikeIcon = $('#largeLikeIcon');

			// Get ID from url
			let id = $stateParams.id;

			// Get single image using ID from API
			let singleImage = FApi.getSingleImage(id);

			// Once returned from API call...
			singleImage.then(function(imageResponse)
			{
				// Target the needed data
				vm.imageData = imageResponse.data;

				// Change posted date to moment from now time
				vm.imagePosted = moment(vm.imageData.posted).fromNow();
			});



			// ------------------------------------------------------------
			// Name: likeImage
			// Abstract: Increments image like count
			// ------------------------------------------------------------
			vm.likeImage = function(imageID)
			{
				// Send new image like to database API
				let response = FApi.likeImage(imageID);

				// Once returned...
				response.then(function(responseData)
				{
					// If returned successfull
					if(responseData.data.success)
					{
						$largeLikeIcon.addClass('iconLikeAnimation');

						// Locally update the like count
						vm.imageData.likes++;

						setInterval(removeAnimationClass, 3000);
					}


				});
			}


			const removeAnimationClass = function()
			{
				$largeLikeIcon.removeClass('iconLikeAnimation');
			}
		})

})();
