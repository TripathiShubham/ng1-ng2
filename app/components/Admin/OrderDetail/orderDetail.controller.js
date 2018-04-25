angular.module('D2DAPP')

//=========================================================================
//Partner Dashboard Controller 
//=========================================================================

.controller('OrderDetailController', ['localStorageService', '$state', 'OrderDetailService', '$timeout',
	function(localStorageService, $state, OrderDetailService, $timeout) {
	var vm = this;

	vm.item = JSON.parse($state.params.item);
	OrderDetailService.getOrderList(vm.item._id)
	.then(function(response) {
		vm.itemList = response[0];
	}, function(err) {
		swal({
			title: "Error!",
			text: "Some error occured...",
			timer: 3000,
			showConfirmButton: false
		});
	});

	vm.completeOrder = function() {
		OrderDetailService.completeOrder(vm.item._id)
		.then(function() {
			swal({
				title: "Completed!",
				text: "This order is now completed",
				timer: 3000,
				showConfirmButton: false
			});
			$timeout(function() {
				$state.go('admin.orderlist');
			}, 3000);
		}, function(err) {
			swal({
				title: "Error!",
				text: "Some error occured...",
				timer: 3000,
				showConfirmButton: false
			});
		});
	}
}
]);
