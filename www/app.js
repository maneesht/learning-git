angular.module("learn-git",
        [
        'ngRoute',
        'part.learn-git',
        ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/introduction", {
                templateUrl: "/introduction/introduction.html",
                controller: "Part1Controller"
            })
            .when("/getting-started", {
                templateUrl: "/getting-started/getting-started.html"
            })
            .when("/making-commits", {
                templateUrl: "/making-commits/making-commits.html"
            })
            .when("/branches-etc", {
                templateUrl: "branches-etc/info.html"
            })
            .otherwise({
                redirectTo: "/introduction"
            });
    });
