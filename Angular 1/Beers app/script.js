/**
 * Created by nlangloi10 on 3/18/17.
 */

var app = angular.module('beersApp', []);

app.controller('BeersCtrl', function ($scope, $http) {

    $http.get('untappd-array-of-objects.json').success(function(data) {
        $scope.beers = data;
    });

    $scope.message = "This is how we apply multiple filters on imported .json data:";
});


app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
            '<span class="highlighted">$1</span>');

        return $sce.trustAsHtml(text)
    }
});