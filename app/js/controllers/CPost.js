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
					console.log(vm.postData);
				}
				else
				{
					alert('not valid');
				}
			}

		})

})();
