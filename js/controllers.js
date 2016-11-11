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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNJbWFnZXMuanMiLCJDUG9zdC5qcyIsIkNTaW5nbGVQb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY29udHJvbGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDSW1hZ2VzJywgZnVuY3Rpb24gKEZBcGkpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyBHZXQgYWxsIGltYWdlcyBmcm9tIEFQSVxuXHRcdHZhciBhbGxJbWFnZXMgPSBGQXBpLmdldEFsbEltYWdlcygpO1xuXG5cdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdGFsbEltYWdlcy50aGVuKGZ1bmN0aW9uIChpbWFnZURhdGEpIHtcblx0XHRcdC8vIFRhcmdldCB0aGUgbmVlZGVkIGRhdGFcblx0XHRcdHZtLmltYWdlTGlzdCA9IGltYWdlRGF0YS5kYXRhLmltYWdlcztcblx0XHR9KTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGxpa2VJbWFnZVxuXHRcdC8vIEFic3RyYWN0OiBJbmNyZW1lbnRzIGltYWdlIGxpa2UgY291bnRcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5saWtlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2VJRCkge1xuXHRcdFx0Ly8gU2VuZCBuZXcgaW1hZ2UgbGlrZSB0byBkYXRhYmFzZSBBUElcblx0XHRcdHZhciByZXNwb25zZSA9IEZBcGkubGlrZUltYWdlKGltYWdlSUQpO1xuXG5cdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHRyZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZURhdGEpIHtcblx0XHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bFxuXHRcdFx0XHRpZiAocmVzcG9uc2VEYXRhLmRhdGEuc3VjY2Vzcykge1xuXHRcdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBpbWFnZSBsaXN0XG5cdFx0XHRcdFx0dm0uaW1hZ2VMaXN0LmZvckVhY2goZnVuY3Rpb24gKGltYWdlLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0Ly8gRmluZCBJRCBtYXRjaFxuXHRcdFx0XHRcdFx0aWYgKGltYWdlLl9pZCA9PSBpbWFnZUlELnRvU3RyaW5nKCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gTG9jYWxseSBpbmNyZW1lbnQgbGlrZSBjb3VudFxuXHRcdFx0XHRcdFx0XHRpbWFnZS5saWtlcysrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ1Bvc3QnLCBmdW5jdGlvbiAoRkFwaSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBwb3N0SW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxlcyBpbWFnZSBwb3N0IGZvcm1cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5wb3N0SW1hZ2UgPSBmdW5jdGlvbiAoaXNWYWxpZCwgcG9zdEltYWdlRm9ybSkge1xuXHRcdFx0Ly8gSXMgdGhlIGZvcm0gdmFsaWQ/XG5cdFx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0XHQvLyBZZXMsIHBvc3QgdGhlIGltYWdlIHZpYSBEYXRhYmFzZSBBUElcblx0XHRcdFx0dmFyIHJlc3BvbnNlID0gRkFwaS5wb3N0SW1hZ2Uodm0ucG9zdERhdGEpO1xuXG5cdFx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdFx0cmVzcG9uc2UudGhlbihmdW5jdGlvbiAoY2FsbFJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gV2FzIHRoZSBkYXRhYmFzZSBwb3N0IHN1Y2Nlc3NmdWw/XG5cdFx0XHRcdFx0aWYgKGNhbGxSZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIFllcywgcmVzZXQgdGhlIGZvcm1cblx0XHRcdFx0XHRcdHJlc2V0Rm9ybShwb3N0SW1hZ2VGb3JtKTtcblxuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSB1c2VyIGtub3cgaXQgd2FzIHN1Y2Nlc3NmdWwuXG5cdFx0XHRcdFx0XHR2bS5pc1N1Y2Nlc3NmdWxseVBvc3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR2bS5wb3N0UmVzcG9uc2VNZXNzYWdlID0gXCJJbWFnZSBTdWNjZXNzZnVsbHkgUG9zdGVkXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIE5vLCB3YXJuIHRoZSB1c2VyIHRoZXJlIHdhcyBhbiBpc3N1ZVxuXHRcdFx0XHRcdFx0dm0uaXNSZWplY3RlZFBvc3QgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dm0ucG9zdFJlc3BvbnNlTWVzc2FnZSA9IFwiSW1hZ2Ugd2FzIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIsIHBsZWFzZSB0cnkgYWdhaW4uXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vLCB3YXJuIHRoZSB1c2VyIHRvIGNoZWNrIHZhbGlkYXRpb25cblx0XHRcdFx0YWxlcnQoJ1BsZWFzZSBlbnN1cmUgYWxsIGZpZWxkcyBhcmUgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogcG9zdEltYWdlXG5cdFx0Ly8gQWJzdHJhY3Q6IEhhbmRsZXMgaW1hZ2UgcG9zdCBmb3JtXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIHJlc2V0Rm9ybSA9IGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG5cdFx0XHQvLyBDbGVhciB0aGUgZm9ybSBkYXRhXG5cdFx0XHR2bS5wb3N0RGF0YSA9IHt9O1xuXG5cdFx0XHQvLyBSZXNldCBhbmd1bGFyIHN0YXRlc1xuXHRcdFx0Zm9ybS4kc2V0UHJpc3RpbmUoKTtcblx0XHRcdGZvcm0uJHNldFVudG91Y2hlZCgpO1xuXHRcdH07XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDU2luZ2xlUG9zdCcsIGZ1bmN0aW9uIChGQXBpLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdHZhciAkbGFyZ2VMaWtlSWNvbiA9ICQoJyNsYXJnZUxpa2VJY29uJyk7XG5cblx0XHQvLyBHZXQgSUQgZnJvbSB1cmxcblx0XHR2YXIgaWQgPSAkc3RhdGVQYXJhbXMuaWQ7XG5cblx0XHQvLyBHZXQgc2luZ2xlIGltYWdlIHVzaW5nIElEIGZyb20gQVBJXG5cdFx0dmFyIHNpbmdsZUltYWdlID0gRkFwaS5nZXRTaW5nbGVJbWFnZShpZCk7XG5cblx0XHQvLyBPbmNlIHJldHVybmVkIGZyb20gQVBJIGNhbGwuLi5cblx0XHRzaW5nbGVJbWFnZS50aGVuKGZ1bmN0aW9uIChpbWFnZVJlc3BvbnNlKSB7XG5cdFx0XHQvLyBUYXJnZXQgdGhlIG5lZWRlZCBkYXRhXG5cdFx0XHR2bS5pbWFnZURhdGEgPSBpbWFnZVJlc3BvbnNlLmRhdGE7XG5cblx0XHRcdC8vIENoYW5nZSBwb3N0ZWQgZGF0ZSB0byBtb21lbnQgZnJvbSBub3cgdGltZVxuXHRcdFx0dm0uaW1hZ2VQb3N0ZWQgPSBtb21lbnQodm0uaW1hZ2VEYXRhLnBvc3RlZCkuZnJvbU5vdygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogbGlrZUltYWdlXG5cdFx0Ly8gQWJzdHJhY3Q6IEluY3JlbWVudHMgaW1hZ2UgbGlrZSBjb3VudFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmxpa2VJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZUlEKSB7XG5cdFx0XHQvLyBTZW5kIG5ldyBpbWFnZSBsaWtlIHRvIGRhdGFiYXNlIEFQSVxuXHRcdFx0dmFyIHJlc3BvbnNlID0gRkFwaS5saWtlSW1hZ2UoaW1hZ2VJRCk7XG5cblx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlRGF0YSkge1xuXHRcdFx0XHQvLyBJZiByZXR1cm5lZCBzdWNjZXNzZnVsbFxuXHRcdFx0XHRpZiAocmVzcG9uc2VEYXRhLmRhdGEuc3VjY2Vzcykge1xuXHRcdFx0XHRcdCRsYXJnZUxpa2VJY29uLmFkZENsYXNzKCdpY29uTGlrZUFuaW1hdGlvbicpO1xuXG5cdFx0XHRcdFx0Ly8gTG9jYWxseSB1cGRhdGUgdGhlIGxpa2UgY291bnRcblx0XHRcdFx0XHR2bS5pbWFnZURhdGEubGlrZXMrKztcblxuXHRcdFx0XHRcdHNldEludGVydmFsKHJlbW92ZUFuaW1hdGlvbkNsYXNzLCAzMDAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciByZW1vdmVBbmltYXRpb25DbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbkNsYXNzKCkge1xuXHRcdFx0JGxhcmdlTGlrZUljb24ucmVtb3ZlQ2xhc3MoJ2ljb25MaWtlQW5pbWF0aW9uJyk7XG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
