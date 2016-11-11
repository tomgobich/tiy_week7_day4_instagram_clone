(() => {

	'use strict';

	angular.module('app')
		.controller('CImages', function(FApi)
		{

			let vm = this;

			// Get all images from API
			let allImages = FApi.getAllImages();

			// Once returned...
			allImages.then(function(imageData)
			{
				// Target needed data within returned data
				let fullImageList = imageData.data.images;

				// Filter out bad links
				vm.imageList = verifyImageType(fullImageList);
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
					// If successful
					if(responseData.data.success)
					{
						// Loop through image list
						vm.imageList.forEach(function(image, index)
						{
							// Find ID match
							if(image._id == imageID.toString())
							{
								// Locally increment like count
								image.likes++;
							}
						});
					}
				});
			}
		})



		const verifyImageType = function(list)
		{
			let filteredList = list.filter(function(item)
			{
				// Url image match type jpeg, jpg, gif, or png?
				if(item.url.match(/\.(jpeg|jpg|gif|png)$/) != null)
				{
					// Yes, keep the item
					return item;
				}
			});

			return filteredList;
		}

})();
