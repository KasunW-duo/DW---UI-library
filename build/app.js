/**
 * Created by Reshika on 4/18/2018.
 */
var app = angular.module('dwUilib', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ( $stateProvider , $urlRouterProvider , $locationProvider ) {

    $urlRouterProvider.otherwise('/home');
    // $locationProvider.html5Mode(true);
    var components = {};
    $.ajax({
        url: '../components/components.json',
        type: 'GET',
        success: function (res) {
            components = res;
            $stateProvider
                .state('Home', {
                    url : "/home",
                    templateUrl : "components/dw_card/dw_card.html",
                    params: { comps : components['dw_card'] }
                })
                .state('Generic Card', {
                    url : "/generic_card",
                    templateUrl : "components/dw_card/dw_card.html",
                    params: { comps : components['dw_card'] }
                })

                .state('Top Nav', {
                    url : "/top_nav",
                    templateUrl : "components/dw_top_nav/dw_top_nav.html",
                    params: { comps : components['dw_top_nav'] }
                })

                .state('Toolbar', {
                    url: "/toolbar",
                    templateUrl: "components/dw_toolbar/dw_toolbar.html",
                    params: { comps : components['dw_table'] }
                })

                .state('Table', {
                    url: "/table",
                    templateUrl: "components/dw_table/dw_table.html",
                    params: { comps : components['dw_table'] }
                })

                .state('Typography', {
                    url: "/typography",
                    templateUrl: "components/dw_typography/dw_typography.html",
                    params: { comps : components['dw_typography'] }
                })

                .state('Images', {
                    url: "/images",
                    templateUrl: "components/dw_images/dw_images.html",
                    params: { comps : components['dw_images'] }
                });

        },
        error: function (errorres) {
            console.log(errorres);
        }
    });
}]);


//initiating angula as a variable so we can use it where we want to call this app.. dwUilib is our app name (app for the project)

//var app = angular.module('dwUilib',['uirouter']);
//when we need to incluse external components to our angular app        });
