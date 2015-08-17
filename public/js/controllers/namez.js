angular.module('namezCtrl', []).controller('namezController',function($scope,Namez) {

    $scope.tagline = 'Nothing beats a pocket protector!';
	var x=Namez.get2();
	console.dir(x.success(function(data){data.message}));
	
Namez.get2().then(function(data1){
		console.dir(data1);
	$scope.test=data1.data.photos.photo;	
	});
	
	Namez.get().then(function(data1){
		console.dir(data1);
	$scope.test2=data1.data;	
	});
	

});