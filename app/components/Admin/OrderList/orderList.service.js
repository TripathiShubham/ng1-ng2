angular.module('D2DAPP')

//========================================================
//All Categories Service
//========================================================

.factory('OrderListService', ['$http', '$q',
	function($http, $q) {

	var OrderListService = {};

	/**
	 * To save order
	 * @param {Object} order
	 */
	OrderListService.getOrderList = function(order) {
		var deferred = $q.defer();

		$http.get('/api/getUsers')
		.then(function successCallback(response) {
			deferred.resolve(response.data);
		}, function errorCallback(response) {
			console.log("Some error occur");
			console.log(response);
			deferred.reject("Error");
		});
		return deferred.promise;
	}

    return OrderListService;
}
]);
