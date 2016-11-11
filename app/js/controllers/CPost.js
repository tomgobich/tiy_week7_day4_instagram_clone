(() => {

	'use strict';

	angular.module('app')
		.controller('CPost', function(FApi, $state, $stateParams)
		{

			let vm = this;

			// ------------------------------------------------------------
			// Name: postImage
			// Abstract: Handles image post form
			// ------------------------------------------------------------
			vm.postImage = function(isValid, postImageForm)
			{
				if(isValid)
				{
					// Post the image via Database API
					let response = FApi.postImage(vm.postData);

					response.then(function(callResponse)
					{
						if(callResponse.data.success)
						{
							resetForm(postImageForm);

							vm.isSuccessfullyPosted = true;
							vm.postResponseMessage 	= "Image Successfully Posted";
						}
						else
						{
							vm.isRejectedPost		= true;
							vm.postResponseMessage	= "Image was rejected by the server, please try again.";
						}
					});
				}
				else
				{
					alert('Please ensure all fields are valid and try again.');
				}
			}



			// ------------------------------------------------------------
			// Name: postImage
			// Abstract: Handles image post form
			// ------------------------------------------------------------
			const resetForm = function(form)
			{
				// Clear the form data
				vm.postData = {};

				form.$setPristine();
				form.$setUntouched();
			}

		})

})();
