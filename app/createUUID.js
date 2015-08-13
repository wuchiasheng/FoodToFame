angular.module('myApp.createID', ['lvl.services'])

  .factory('uuidCtl', ['uuid', function(uuid){
  	function generateUuid() {
  		var uid = uuid.new;
  		return uid;
  		//var uToken = $scope.uid;
  		//var ref = fbutil.ref('userToken');
  		//ref.set({uToken: uToken});
  		//$scope.nInfo = new Date();
  	};

  	
  }]);
