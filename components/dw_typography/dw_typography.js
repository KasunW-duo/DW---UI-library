angular.module('dwUilib')
    .controller('TopNavController', ['$scope', function($scope) {
        $scope.template = {};

        $scope.template = { name: 'dw_top_nav.html', url: 'components/dw_top_nav/dw_top_nav.html'};
    }]);