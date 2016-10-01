angular.module('arrayApp').controller('arrayController', function($scope, arrayService){
    $scope.getNames = function(){
        $scope.names = arrayService.getNames();
    };
    $scope.getNames();

})