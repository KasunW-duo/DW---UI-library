angular.module('dwUilib')
    .controller('MainController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $scope.data = {};
        $scope.state = $state;

        $http.get('components/components.json').then(function (response) {
            $scope.data = response.data;
        });

        $scope.getCode = function(state, id) {
            $http.get('components/' + id + '/' + id + '.html').then(function (response) {
                $('#dwCodePreview').text(response.data);
                $state.go(state);
            });
        };
}]);
