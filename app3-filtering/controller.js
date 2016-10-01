angular.module('app').controller('mainController', function($scope, mainService){
    $scope.getNames = function(){
        $scope.names = mainService.getNames();
    };
    $scope.getNames();
    // $scope.sortType     = 'name'; // set the default sort type
    // $scope.sortReverse  = false;  // set the default sort order
    $scope.searchText   = '';     // set the default search/filter term

});