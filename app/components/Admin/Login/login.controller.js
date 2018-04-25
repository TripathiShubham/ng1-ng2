angular.module('D2DAPP')

//=========================================================================
//Partner Dashboard Controller 
//=========================================================================

.controller('LoginController', ['$scope', '$state',
	function($scope, $state) {
	var vm = this;

    vm.login = function() {
        if(vm.user.email === "Nikhil" && vm.user.password === "d2dservice") {
            $state.go('admin.orderlist');
        } else {
            swal({
                title: "Error",
                text: "Wrong credentilas, try again",
                timer: 3000,
                showConfirmButton: false
            });
        }
    }
}
]);
