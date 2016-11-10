(() => {

	'use strict';

	angular.module('app')
		.controller('CPost', function(FApi, $state, $stateParams)
		{

			let vm = this;

			vm.postImage = function(isValid)
			{
				if(isValid)
				{
					let response = FApi.postImage(vm.postData);

					response.then(function(callResponse)
					{
						console.log(callResponse);
					});
				}
				else
				{
					alert('Please ensure all fields are valid and try again.');
				}
			}

		})

})();
