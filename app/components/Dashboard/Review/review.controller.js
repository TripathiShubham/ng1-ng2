angular.module('D2DAPP')

	//=========================================================================
	//All Categories Controller 
	//=========================================================================

.controller('ReviewController', ['localStorageService', '$state',
	function (localStorageService, $state) {
		var vm = this;
		vm.itemList = localStorageService.get("cust_order");

		vm.placeOrder = function() {
			localStorageService.set("cust_order", vm.itemList);
			$state.go('dashboard.submit');
        }
        
        vm.removeItem = function(index) {
            vm.itemList.splice(index, 1);
            localStorageService.set("cust_order", vm.itemList);
        }
		
	}
]);
