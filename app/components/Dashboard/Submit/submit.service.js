angular.module('D2DAPP')

//========================================================
//All Categories Service
//========================================================

.factory('SubmitService', ['$http', '$q',
	function($http, $q) {

	var SubmitService = {};

	/**
	 * To save order
	 * @param {Object} order
	 */
	SubmitService.saveOrder = function(order) {
		var deferred = $q.defer();

		$http.post('/api/save', order)
		.then(function successCallback(response) {
			deferred.resolve(response.data);
		}, function errorCallback(response) {
			console.log("Some error occur");
			console.log(response);
			deferred.reject("Error");
		});
		return deferred.promise;
	}

    return SubmitService;
}
]);
