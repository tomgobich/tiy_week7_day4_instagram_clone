(() => {

	'use strict';

	angular.module('app')
		.controller('CImages', function(FApi, FImages, $state, $stateParams)
		{

			let vm = this;

			let allImages = FApi.getAllImages();

			allImages.then(function(imageData)
			{
				vm.imageList = imageData.data.images;

				// console.log(vm.imageList);
			});
		})

})();
