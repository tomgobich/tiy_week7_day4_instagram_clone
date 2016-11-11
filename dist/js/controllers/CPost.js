'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CPost', function (FApi, $state, $stateParams) {

		var vm = this;

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Handles image post form
		// ------------------------------------------------------------
		vm.postImage = function (isValid, postImageForm) {
			// Is the form valid?
			if (isValid) {
				// Yes, post the image via Database API
				var response = FApi.postImage(vm.postData);

				// Once returned...
				response.then(function (callResponse) {
					// Was the database post successful?
					if (callResponse.data.success) {
						// Yes, reset the form
						resetForm(postImageForm);

						// Let the user know it was successful.
						vm.isSuccessfullyPosted = true;
						vm.postResponseMessage = "Image Successfully Posted";
					} else {
						// No, warn the user there was an issue
						vm.isRejectedPost = true;
						vm.postResponseMessage = "Image was rejected by the server, please try again.";
					}
				});
			} else {
				// No, warn the user to check validation
				alert('Please ensure all fields are valid and try again.');
			}
		};

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Handles image post form
		// ------------------------------------------------------------
		var resetForm = function resetForm(form) {
			// Clear the form data
			vm.postData = {};

			// Reset angular states
			form.$setPristine();
			form.$setUntouched();
		};
	});
})();