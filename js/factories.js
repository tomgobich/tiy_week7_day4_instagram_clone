'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getAllImages
		// Abstract: Gets all image posts
		// ------------------------------------------------------------
		var getAllImages = function getAllImages() {
			var call = $http({
				method: 'GET',
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/images'
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: getSingleImage
		// Abstract: Gets details for a single image
		// ------------------------------------------------------------
		var getSingleImage = function getSingleImage(id) {
			var call = $http({
				method: 'GET',
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/images/' + id
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Posts a new image
		// ------------------------------------------------------------
		var postImage = function postImage(imageData) {
			var call = $http({
				method: 'POST',
				data: {
					'title': imageData.title,
					'url': imageData.url,
					'description': imageData.description
				},
				headers: { 'X_CSRF_TOKEN': 'tom' },
				url: 'http://instagramcloneclass.herokuapp.com/image/post'
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: likeImage
		// Abstract: Increments image's like count by one
		// ------------------------------------------------------------
		var likeImage = function likeImage(imageID) {
			var call = $http({
				method: 'POST',
				data: {
					'imageid': imageID
				},
				url: 'http://instagramcloneclass.herokuapp.com/images/vote'
			});

			return call;
		};

		return {
			getAllImages: getAllImages,
			getSingleImage: getSingleImage,
			postImage: postImage,
			likeImage: likeImage
		};
	});
})();
'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FLocalStorage', function () {

		// ------------------------------------------------------------
		// Name: set
		// Abstract: Handling function to save to localStorage
		// ------------------------------------------------------------
		var set = function set(name, data) {
			// Is the data bad?
			if (data === undefined || data === null) {
				// Yes, notify of a warning
				alert('WARNING: The data you were trying to save in localStorage is not complete, and your data was not saved. If this problem persists, please contact support');
			} else {
				// No, save it to localStorage
				localStorage.setItem(name, JSON.stringify(data));
			}
		};

		// ------------------------------------------------------------
		// Name: get
		// Abstract: Handling function to get from localStorage
		// ------------------------------------------------------------
		var get = function get(name) {
			return JSON.parse(localStorage.getItem(name));
		};

		return {
			set: set,
			get: get
		};
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiLCJGTG9jYWxTdG9yYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2ZhY3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ0ZBcGknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldEFsbEltYWdlc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCBpbWFnZSBwb3N0c1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRBbGxJbWFnZXMgPSBmdW5jdGlvbiBnZXRBbGxJbWFnZXMoKSB7XG5cdFx0XHR2YXIgY2FsbCA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdFx0aGVhZGVyczogeyAnWF9DU1JGX1RPS0VOJzogJ3RvbScgfSxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2luc3RhZ3JhbWNsb25lY2xhc3MuaGVyb2t1YXBwLmNvbS9pbWFnZXMnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNhbGw7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldFNpbmdsZUltYWdlXG5cdFx0Ly8gQWJzdHJhY3Q6IEdldHMgZGV0YWlscyBmb3IgYSBzaW5nbGUgaW1hZ2Vcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgZ2V0U2luZ2xlSW1hZ2UgPSBmdW5jdGlvbiBnZXRTaW5nbGVJbWFnZShpZCkge1xuXHRcdFx0dmFyIGNhbGwgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ1hfQ1NSRl9UT0tFTic6ICd0b20nIH0sXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9pbnN0YWdyYW1jbG9uZWNsYXNzLmhlcm9rdWFwcC5jb20vaW1hZ2VzLycgKyBpZFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBjYWxsO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBwb3N0SW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogUG9zdHMgYSBuZXcgaW1hZ2Vcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgcG9zdEltYWdlID0gZnVuY3Rpb24gcG9zdEltYWdlKGltYWdlRGF0YSkge1xuXHRcdFx0dmFyIGNhbGwgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0J3RpdGxlJzogaW1hZ2VEYXRhLnRpdGxlLFxuXHRcdFx0XHRcdCd1cmwnOiBpbWFnZURhdGEudXJsLFxuXHRcdFx0XHRcdCdkZXNjcmlwdGlvbic6IGltYWdlRGF0YS5kZXNjcmlwdGlvblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoZWFkZXJzOiB7ICdYX0NTUkZfVE9LRU4nOiAndG9tJyB9LFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vaW5zdGFncmFtY2xvbmVjbGFzcy5oZXJva3VhcHAuY29tL2ltYWdlL3Bvc3QnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNhbGw7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGxpa2VJbWFnZVxuXHRcdC8vIEFic3RyYWN0OiBJbmNyZW1lbnRzIGltYWdlJ3MgbGlrZSBjb3VudCBieSBvbmVcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgbGlrZUltYWdlID0gZnVuY3Rpb24gbGlrZUltYWdlKGltYWdlSUQpIHtcblx0XHRcdHZhciBjYWxsID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdCdpbWFnZWlkJzogaW1hZ2VJRFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vaW5zdGFncmFtY2xvbmVjbGFzcy5oZXJva3VhcHAuY29tL2ltYWdlcy92b3RlJ1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBjYWxsO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0QWxsSW1hZ2VzOiBnZXRBbGxJbWFnZXMsXG5cdFx0XHRnZXRTaW5nbGVJbWFnZTogZ2V0U2luZ2xlSW1hZ2UsXG5cdFx0XHRwb3N0SW1hZ2U6IHBvc3RJbWFnZSxcblx0XHRcdGxpa2VJbWFnZTogbGlrZUltYWdlXG5cdFx0fTtcblx0fSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ0ZMb2NhbFN0b3JhZ2UnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBzZXRcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxpbmcgZnVuY3Rpb24gdG8gc2F2ZSB0byBsb2NhbFN0b3JhZ2Vcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIGRhdGEpIHtcblx0XHRcdC8vIElzIHRoZSBkYXRhIGJhZD9cblx0XHRcdGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuXHRcdFx0XHQvLyBZZXMsIG5vdGlmeSBvZiBhIHdhcm5pbmdcblx0XHRcdFx0YWxlcnQoJ1dBUk5JTkc6IFRoZSBkYXRhIHlvdSB3ZXJlIHRyeWluZyB0byBzYXZlIGluIGxvY2FsU3RvcmFnZSBpcyBub3QgY29tcGxldGUsIGFuZCB5b3VyIGRhdGEgd2FzIG5vdCBzYXZlZC4gSWYgdGhpcyBwcm9ibGVtIHBlcnNpc3RzLCBwbGVhc2UgY29udGFjdCBzdXBwb3J0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBObywgc2F2ZSBpdCB0byBsb2NhbFN0b3JhZ2Vcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxpbmcgZnVuY3Rpb24gdG8gZ2V0IGZyb20gbG9jYWxTdG9yYWdlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXQ6IHNldCxcblx0XHRcdGdldDogZ2V0XG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
