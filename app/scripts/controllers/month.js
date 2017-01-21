'use strict';
 app.controller('MonthCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {
 			
$('document').ready(function(){
  $("#month").addClass("active");
  $("#expences").addClass("active");
});

 // bar chart
 		$scope.labels_line = ["20-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017", "19-01-2017"];
  $scope.series_line = ['Series A', 'Series B'];
  $scope.data_line = [
    [65, 59, 80, 81, 56, 55, 40]
  ];



  $scope.onClick = function (points, evt) {
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

 		}]);