angular.module('D2DAPP')

	//=========================================================================
	//All Categories Controller 
	//=========================================================================

.controller('SubmitController', ['localStorageService', '$state', 'SubmitService', '$timeout',
	function (localStorageService, $state, SubmitService, $timeout) {
		var vm = this;

		vm.addItem = function() {
			vm.user.shopingList = localStorageService.get("cust_order");
			console.log(vm.user);
			SubmitService.saveOrder(vm.user)
			.then(function(response) {
				swal({
					title: "Done",
					text: "Your order is confirmed",
					timer: 3000,
					showConfirmButton: false
				});
				localStorageService.remove("cust_order");
				$timeout(function() {
					$state.go('dashboard.confirm');
				}, 3000);
			}, function(err) {
				swal({
					title: "Error",
					text: "Some error occured, try again",
					timer: 5000,
					showConfirmButton: false
				});
			});
        }
		
	}
]);
