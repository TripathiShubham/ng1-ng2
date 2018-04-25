angular.module('D2DAPP')

//========================================================
//All Categories Service
//========================================================

.factory('OrderDetailService', ['$http', '$q',
	function($http, $q) {

	var OrderDetailService = {};

	/**
	 * To save order
	 * @param {String} id
	 */
	OrderDetailService.getOrderList = function(id) {
		var deferred = $q.defer();

		$http.get('/api/getShopingList/' + id)
		.then(function successCallback(response) {
			deferred.resolve(response.data);
		}, function errorCallback(response) {
			console.log("Some error occur");
			console.log(response);
			deferred.reject("Error");
		});
		return deferred.promise;
	}

		/**
	 * To complete order
	 * @param {String} id
	 */
	OrderDetailService.completeOrder = function(id) {
		var deferred = $q.defer();

		$http.put('/api/updateStatus/' + id)
		.then(function successCallback(response) {
			deferred.resolve(response.data);
		}, function errorCallback(response) {
			console.log("Some error occur");
			console.log(response);
			deferred.reject("Error");
		});
		return deferred.promise;
	}

    return OrderDetailService;
}
]);
