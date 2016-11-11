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

	angular.module('app').factory('FImages', function (FApi, FLocalStorage) {

		return {};
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiLCJGSW1hZ2VzLmpzIiwiRkxvY2FsU3RvcmFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvZmFjdG9yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuZmFjdG9yeSgnRkFwaScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZ2V0QWxsSW1hZ2VzXG5cdFx0Ly8gQWJzdHJhY3Q6IEdldHMgYWxsIGltYWdlIHBvc3RzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbEltYWdlcyA9IGZ1bmN0aW9uIGdldEFsbEltYWdlcygpIHtcblx0XHRcdHZhciBjYWxsID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRoZWFkZXJzOiB7ICdYX0NTUkZfVE9LRU4nOiAndG9tJyB9LFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vaW5zdGFncmFtY2xvbmVjbGFzcy5oZXJva3VhcHAuY29tL2ltYWdlcydcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gY2FsbDtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZ2V0U2luZ2xlSW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogR2V0cyBkZXRhaWxzIGZvciBhIHNpbmdsZSBpbWFnZVxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRTaW5nbGVJbWFnZSA9IGZ1bmN0aW9uIGdldFNpbmdsZUltYWdlKGlkKSB7XG5cdFx0XHR2YXIgY2FsbCA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdFx0aGVhZGVyczogeyAnWF9DU1JGX1RPS0VOJzogJ3RvbScgfSxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2luc3RhZ3JhbWNsb25lY2xhc3MuaGVyb2t1YXBwLmNvbS9pbWFnZXMvJyArIGlkXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNhbGw7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IHBvc3RJbWFnZVxuXHRcdC8vIEFic3RyYWN0OiBQb3N0cyBhIG5ldyBpbWFnZVxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBwb3N0SW1hZ2UgPSBmdW5jdGlvbiBwb3N0SW1hZ2UoaW1hZ2VEYXRhKSB7XG5cdFx0XHR2YXIgY2FsbCA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQndGl0bGUnOiBpbWFnZURhdGEudGl0bGUsXG5cdFx0XHRcdFx0J3VybCc6IGltYWdlRGF0YS51cmwsXG5cdFx0XHRcdFx0J2Rlc2NyaXB0aW9uJzogaW1hZ2VEYXRhLmRlc2NyaXB0aW9uXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ1hfQ1NSRl9UT0tFTic6ICd0b20nIH0sXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9pbnN0YWdyYW1jbG9uZWNsYXNzLmhlcm9rdWFwcC5jb20vaW1hZ2UvcG9zdCdcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gY2FsbDtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogbGlrZUltYWdlXG5cdFx0Ly8gQWJzdHJhY3Q6IEluY3JlbWVudHMgaW1hZ2UncyBsaWtlIGNvdW50IGJ5IG9uZVxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBsaWtlSW1hZ2UgPSBmdW5jdGlvbiBsaWtlSW1hZ2UoaW1hZ2VJRCkge1xuXHRcdFx0dmFyIGNhbGwgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0J2ltYWdlaWQnOiBpbWFnZUlEXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9pbnN0YWdyYW1jbG9uZWNsYXNzLmhlcm9rdWFwcC5jb20vaW1hZ2VzL3ZvdGUnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNhbGw7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRBbGxJbWFnZXM6IGdldEFsbEltYWdlcyxcblx0XHRcdGdldFNpbmdsZUltYWdlOiBnZXRTaW5nbGVJbWFnZSxcblx0XHRcdHBvc3RJbWFnZTogcG9zdEltYWdlLFxuXHRcdFx0bGlrZUltYWdlOiBsaWtlSW1hZ2Vcblx0XHR9O1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuZmFjdG9yeSgnRkltYWdlcycsIGZ1bmN0aW9uIChGQXBpLCBGTG9jYWxTdG9yYWdlKSB7XG5cblx0XHRyZXR1cm4ge307XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5mYWN0b3J5KCdGTG9jYWxTdG9yYWdlJywgZnVuY3Rpb24gKCkge1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogc2V0XG5cdFx0Ly8gQWJzdHJhY3Q6IEhhbmRsaW5nIGZ1bmN0aW9uIHRvIHNhdmUgdG8gbG9jYWxTdG9yYWdlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIHNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCBkYXRhKSB7XG5cdFx0XHQvLyBJcyB0aGUgZGF0YSBiYWQ/XG5cdFx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcblx0XHRcdFx0Ly8gWWVzLCBub3RpZnkgb2YgYSB3YXJuaW5nXG5cdFx0XHRcdGFsZXJ0KCdXQVJOSU5HOiBUaGUgZGF0YSB5b3Ugd2VyZSB0cnlpbmcgdG8gc2F2ZSBpbiBsb2NhbFN0b3JhZ2UgaXMgbm90IGNvbXBsZXRlLCBhbmQgeW91ciBkYXRhIHdhcyBub3Qgc2F2ZWQuIElmIHRoaXMgcHJvYmxlbSBwZXJzaXN0cywgcGxlYXNlIGNvbnRhY3Qgc3VwcG9ydCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHNhdmUgaXQgdG8gbG9jYWxTdG9yYWdlXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZ2V0XG5cdFx0Ly8gQWJzdHJhY3Q6IEhhbmRsaW5nIGZ1bmN0aW9uIHRvIGdldCBmcm9tIGxvY2FsU3RvcmFnZVxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0OiBzZXQsXG5cdFx0XHRnZXQ6IGdldFxuXHRcdH07XG5cdH0pO1xufSkoKTsiXX0=
