angular.module('D2DAPP')

	//=========================================================================
	//All Categories Controller 
	//=========================================================================

.controller('OrderController', ['localStorageService', '$state',
	function (localStorageService, $state) {
		var vm = this;
		var items = localStorageService.get("cust_order");
		if(items) {
			vm.itemList = items;
		} else {
			vm.itemList = [];
		}
		

		vm.addItem = function() {
			vm.itemList.push(vm.inputItem);
			vm.inputItem = null;
			console.log(vm.itemList);
		}

		vm.placeOrder = function() {
			localStorageService.set("cust_order", vm.itemList);
			$state.go('dashboard.review');
		}

        vm.removeItem = function(index) {
            vm.itemList.splice(index, 1);
            localStorageService.set("cust_order", vm.itemList);
        }
		
	}
]);
