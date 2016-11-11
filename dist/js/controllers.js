'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CImages', function (FApi) {

		var vm = this;

		// Get all images from API
		var allImages = FApi.getAllImages();

		// Once returned...
		allImages.then(function (imageData) {
			// Target needed data within returned data
			var fullImageList = imageData.data.images;

			// Filter out bad links
			vm.imageList = verifyImageType(fullImageList);
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

	var verifyImageType = function verifyImageType(list) {
		var filteredList = list.filter(function (item) {
			// Url image match type jpeg, jpg, gif, or png?
			if (item.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
				// Yes, keep the item
				return item;
			}
		});

		return filteredList;
	};
})();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNJbWFnZXMuanMiLCJDUG9zdC5qcyIsIkNTaW5nbGVQb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY29udHJvbGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDSW1hZ2VzJywgZnVuY3Rpb24gKEZBcGkpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyBHZXQgYWxsIGltYWdlcyBmcm9tIEFQSVxuXHRcdHZhciBhbGxJbWFnZXMgPSBGQXBpLmdldEFsbEltYWdlcygpO1xuXG5cdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdGFsbEltYWdlcy50aGVuKGZ1bmN0aW9uIChpbWFnZURhdGEpIHtcblx0XHRcdC8vIFRhcmdldCBuZWVkZWQgZGF0YSB3aXRoaW4gcmV0dXJuZWQgZGF0YVxuXHRcdFx0dmFyIGZ1bGxJbWFnZUxpc3QgPSBpbWFnZURhdGEuZGF0YS5pbWFnZXM7XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgYmFkIGxpbmtzXG5cdFx0XHR2bS5pbWFnZUxpc3QgPSB2ZXJpZnlJbWFnZVR5cGUoZnVsbEltYWdlTGlzdCk7XG5cdFx0fSk7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBsaWtlSW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSW5jcmVtZW50cyBpbWFnZSBsaWtlIGNvdW50XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dm0ubGlrZUltYWdlID0gZnVuY3Rpb24gKGltYWdlSUQpIHtcblx0XHRcdC8vIFNlbmQgbmV3IGltYWdlIGxpa2UgdG8gZGF0YWJhc2UgQVBJXG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBGQXBpLmxpa2VJbWFnZShpbWFnZUlEKTtcblxuXHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0cmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG5cdFx0XHRcdC8vIElmIHN1Y2Nlc3NmdWxcblx0XHRcdFx0aWYgKHJlc3BvbnNlRGF0YS5kYXRhLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHQvLyBMb29wIHRocm91Z2ggaW1hZ2UgbGlzdFxuXHRcdFx0XHRcdHZtLmltYWdlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgSUQgbWF0Y2hcblx0XHRcdFx0XHRcdGlmIChpbWFnZS5faWQgPT0gaW1hZ2VJRC50b1N0cmluZygpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIExvY2FsbHkgaW5jcmVtZW50IGxpa2UgY291bnRcblx0XHRcdFx0XHRcdFx0aW1hZ2UubGlrZXMrKztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0fSk7XG5cblx0dmFyIHZlcmlmeUltYWdlVHlwZSA9IGZ1bmN0aW9uIHZlcmlmeUltYWdlVHlwZShsaXN0KSB7XG5cdFx0dmFyIGZpbHRlcmVkTGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHQvLyBVcmwgaW1hZ2UgbWF0Y2ggdHlwZSBqcGVnLCBqcGcsIGdpZiwgb3IgcG5nP1xuXHRcdFx0aWYgKGl0ZW0udXJsLm1hdGNoKC9cXC4oanBlZ3xqcGd8Z2lmfHBuZykkLykgIT0gbnVsbCkge1xuXHRcdFx0XHQvLyBZZXMsIGtlZXAgdGhlIGl0ZW1cblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZmlsdGVyZWRMaXN0O1xuXHR9O1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDUG9zdCcsIGZ1bmN0aW9uIChGQXBpLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IHBvc3RJbWFnZVxuXHRcdC8vIEFic3RyYWN0OiBIYW5kbGVzIGltYWdlIHBvc3QgZm9ybVxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLnBvc3RJbWFnZSA9IGZ1bmN0aW9uIChpc1ZhbGlkLCBwb3N0SW1hZ2VGb3JtKSB7XG5cdFx0XHQvLyBJcyB0aGUgZm9ybSB2YWxpZD9cblx0XHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHRcdC8vIFllcywgcG9zdCB0aGUgaW1hZ2UgdmlhIERhdGFiYXNlIEFQSVxuXHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBGQXBpLnBvc3RJbWFnZSh2bS5wb3N0RGF0YSk7XG5cblx0XHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0XHRyZXNwb25zZS50aGVuKGZ1bmN0aW9uIChjYWxsUmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBXYXMgdGhlIGRhdGFiYXNlIHBvc3Qgc3VjY2Vzc2Z1bD9cblx0XHRcdFx0XHRpZiAoY2FsbFJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0Ly8gWWVzLCByZXNldCB0aGUgZm9ybVxuXHRcdFx0XHRcdFx0cmVzZXRGb3JtKHBvc3RJbWFnZUZvcm0pO1xuXG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIHVzZXIga25vdyBpdCB3YXMgc3VjY2Vzc2Z1bC5cblx0XHRcdFx0XHRcdHZtLmlzU3VjY2Vzc2Z1bGx5UG9zdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHZtLnBvc3RSZXNwb25zZU1lc3NhZ2UgPSBcIkltYWdlIFN1Y2Nlc3NmdWxseSBQb3N0ZWRcIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdGhlcmUgd2FzIGFuIGlzc3VlXG5cdFx0XHRcdFx0XHR2bS5pc1JlamVjdGVkUG9zdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR2bS5wb3N0UmVzcG9uc2VNZXNzYWdlID0gXCJJbWFnZSB3YXMgcmVqZWN0ZWQgYnkgdGhlIHNlcnZlciwgcGxlYXNlIHRyeSBhZ2Fpbi5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdG8gY2hlY2sgdmFsaWRhdGlvblxuXHRcdFx0XHRhbGVydCgnUGxlYXNlIGVuc3VyZSBhbGwgZmllbGRzIGFyZSB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBwb3N0SW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxlcyBpbWFnZSBwb3N0IGZvcm1cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgcmVzZXRGb3JtID0gZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcblx0XHRcdC8vIENsZWFyIHRoZSBmb3JtIGRhdGFcblx0XHRcdHZtLnBvc3REYXRhID0ge307XG5cblx0XHRcdC8vIFJlc2V0IGFuZ3VsYXIgc3RhdGVzXG5cdFx0XHRmb3JtLiRzZXRQcmlzdGluZSgpO1xuXHRcdFx0Zm9ybS4kc2V0VW50b3VjaGVkKCk7XG5cdFx0fTtcblx0fSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NTaW5nbGVQb3N0JywgZnVuY3Rpb24gKEZBcGksICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dmFyICRsYXJnZUxpa2VJY29uID0gJCgnI2xhcmdlTGlrZUljb24nKTtcblxuXHRcdC8vIEdldCBJRCBmcm9tIHVybFxuXHRcdHZhciBpZCA9ICRzdGF0ZVBhcmFtcy5pZDtcblxuXHRcdC8vIEdldCBzaW5nbGUgaW1hZ2UgdXNpbmcgSUQgZnJvbSBBUElcblx0XHR2YXIgc2luZ2xlSW1hZ2UgPSBGQXBpLmdldFNpbmdsZUltYWdlKGlkKTtcblxuXHRcdC8vIE9uY2UgcmV0dXJuZWQgZnJvbSBBUEkgY2FsbC4uLlxuXHRcdHNpbmdsZUltYWdlLnRoZW4oZnVuY3Rpb24gKGltYWdlUmVzcG9uc2UpIHtcblx0XHRcdC8vIFRhcmdldCB0aGUgbmVlZGVkIGRhdGFcblx0XHRcdHZtLmltYWdlRGF0YSA9IGltYWdlUmVzcG9uc2UuZGF0YTtcblxuXHRcdFx0Ly8gQ2hhbmdlIHBvc3RlZCBkYXRlIHRvIG1vbWVudCBmcm9tIG5vdyB0aW1lXG5cdFx0XHR2bS5pbWFnZVBvc3RlZCA9IG1vbWVudCh2bS5pbWFnZURhdGEucG9zdGVkKS5mcm9tTm93KCk7XG5cdFx0fSk7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBsaWtlSW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSW5jcmVtZW50cyBpbWFnZSBsaWtlIGNvdW50XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dm0ubGlrZUltYWdlID0gZnVuY3Rpb24gKGltYWdlSUQpIHtcblx0XHRcdC8vIFNlbmQgbmV3IGltYWdlIGxpa2UgdG8gZGF0YWJhc2UgQVBJXG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBGQXBpLmxpa2VJbWFnZShpbWFnZUlEKTtcblxuXHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0cmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2VEYXRhKSB7XG5cdFx0XHRcdC8vIElmIHJldHVybmVkIHN1Y2Nlc3NmdWxsXG5cdFx0XHRcdGlmIChyZXNwb25zZURhdGEuZGF0YS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0JGxhcmdlTGlrZUljb24uYWRkQ2xhc3MoJ2ljb25MaWtlQW5pbWF0aW9uJyk7XG5cblx0XHRcdFx0XHQvLyBMb2NhbGx5IHVwZGF0ZSB0aGUgbGlrZSBjb3VudFxuXHRcdFx0XHRcdHZtLmltYWdlRGF0YS5saWtlcysrO1xuXG5cdFx0XHRcdFx0c2V0SW50ZXJ2YWwocmVtb3ZlQW5pbWF0aW9uQ2xhc3MsIDMwMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHJlbW92ZUFuaW1hdGlvbkNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uQ2xhc3MoKSB7XG5cdFx0XHQkbGFyZ2VMaWtlSWNvbi5yZW1vdmVDbGFzcygnaWNvbkxpa2VBbmltYXRpb24nKTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7Il19
