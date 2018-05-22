angular.module('dwUilib').controller('CardController', ['$scope', '$http', function ( $scope , $http) {
        // contoller ops

        $scope.firstIcon = "face";
        $scope.inputText = "";
        $scope.data = {};

        $http({
            "method"        : "GET",
            "url"           : "components/components.json",
            "Content Type"  : "application/json"
        }).then(
            function (response) {
                $scope.data = response.data;
                console.log( "DATA" + JSON.stringify($scope.data) );
            },
            function (errorResponse) {
                console.log(errorResponse);
            })



}]);