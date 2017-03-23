/**
 * Created by nlangloi10 on 3/16/17.
 */

var app = angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'viewStudents.html',
            controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('StudentController', function($scope) {
    $scope.students = [
        { name: 'Travis Roberts', city: 'Wisconsin' },
        { name: 'Caleb Collins', city: 'Iowa' },
        { name: 'Calvin Bast', city: 'Hastings' },
        { name: 'Kevin Firmin', city: 'Paris' }
    ];

    $scope.message = "Click on the link to view the list of all our students.";
});