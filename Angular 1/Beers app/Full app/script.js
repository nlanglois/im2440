/**
 * Created by nlangloi10 on 3/18/17.
 *
 * To export your beer data out of MongoDB:
 *   mongoexport --db arts_institute --collection beers --pretty --out untappd-w-id.json
 *
 *   Will export the .json file to your home directory on a Mac; search for it on a PC
 *
 */

var app = angular.module('beersApp', ['ngRoute']);


app.controller('BeersCtrl', function ($scope, $http) {

    $http.get('../untappd-w-id.json').success(function(data) {
        $scope.beers = data;
        //console.log($scope.beers);
    });

    $scope.message = "This is how we apply multiple filters on imported .json data:";

});



app.controller('BeerDetailCtrl', function ($scope, $routeParams, $http) {
    console.log($routeParams.id);

    $scope.id = $routeParams.id;



    $http.get('../untappd-w-id.json').success(function(data) {

        var count = 0;
        $scope.id = data.filter(function(entry) {

            if (entry._id.$oid === $scope.id) {
                console.log("Found the beer:");
                console.log(data[count]);

                return $scope.beer = data[count];
            }

            count++;


        });
    });

});



app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
            '<span class="highlighted">$1</span>');

        return $sce.trustAsHtml(text)
    }
});



app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'BeersCtrl'
        })
        .when('/viewBeer/:id', {
            templateUrl: 'viewBeer.html',
            controller: 'BeerDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
