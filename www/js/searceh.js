angular.module('starter.searceh', [])
  .controller('searcehController', ['$scope','$http', function ($scope,$http) {
			$scope.searchlist='';
			$http({
				url:"../mock/search.json",
				method:'get'
				})
			.then(function(res){
				$scope.searchlist=res.data;

			})
			
			
			
  }])