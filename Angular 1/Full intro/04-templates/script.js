/**
 * Created by nlangloi10 on 9/19/16.
 */

var app = angular.module("myApp", []);

app.controller("PeopleCtrl", function ($scope) {
    $scope.people = [
        {
            first: "Nikolai",
            middle: "A",
            last: "Langlois",
            gender: "M",
        },
        {
            first: "Steven",
            middle: "R",
            last: "Wietecha",
            gender: "M",
        },
        {
            first: "Meg",
            middle: "B",
            last: "Gautier",
            gender: "F",
        },
        {
            first: "Calvin",
            middle: "M",
            last: "Bast",
            gender: "M",
        },
        {
            first: "Travis",
            middle: "E",
            last: "Roberts",
            gender: "M",
        },
    ];

});