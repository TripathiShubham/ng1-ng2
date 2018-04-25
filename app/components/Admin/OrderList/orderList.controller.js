angular.module('D2DAPP')

//=========================================================================
//Partner Dashboard Controller 
//=========================================================================

.controller('OrderListController', ['localStorageService', '$state', 'OrderListService', 'OrderDetailService',
	function(localStorageService, $state, OrderListService, OrderDetailService) {
	var vm = this;

	vm.itemList = localStorageService.get("cust_order");

	OrderListService.getOrderList()
	.then(function(response) {
		vm.itemList = response;
	}, function(error) {
		swal({
			title: "Error!",
			text: "Some error occured...",
			timer: 3000,
			showConfirmButton: false
		});
	});

	vm.viewOrderDetail = function(item) {
		$state.go('admin.orderDetail', {"item": JSON.stringify(item)});
	}

	vm.completeOrder = function(id, index) {
		OrderDetailService.completeOrder(id)
		.then(function(response) {
			vm.itemList.splice(index, 1);
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
