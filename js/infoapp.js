(function () {

    var app= angular.module("infodisplay",['ngSanitize']);
    app.run(['$rootScope','$http',function($rootscope,$http){
	$rootscope.info_dat=[];
	$http({
	    url: 'res/resume_info.json',
	    method: 'GET',
	}).success(function(data){
	    $rootscope.info_dat=data.InfoArray;
	    for (i=0; i<$rootscope.info_dat; i++){
		$rootscope.info_dat[i].hovered=false;
	    }
	    $rootscope.select_infoInd=0;
	    $rootscope.$broadcast('Ready','');
		
	});	
    }]);
    app.controller("infolist",['$scope', function($scope){
	$scope.select_infoInd=0;
	$scope.InfoClick=function(index){
	    $scope.select_infoInd=index;
	};
	$scope.hover_circl_on=function(index){
	    $scope.info_dat[index].hovered=true;
	};
	$scope.hover_circl_off=function(index){
	    $scope.info_dat[index].hovered=false;
	};
    }])

})();
