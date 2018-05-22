angular.module('dwUilib')
    .controller('NavigationController', ['$scope', '$http', '$state', function ( $scope, $http, $state ) {

        $scope.data = {};
        $scope.state = $state;

        $http.get('components/components.json').then(function (response) {
            $scope.data = response.data;
        });
    }]);
