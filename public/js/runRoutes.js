  angular.module('runRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/eazypage', {
            templateUrl: 'views/eazy.html',
            controller: 'namezController'
        });

    $locationProvider.html5Mode(true);

}]);