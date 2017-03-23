/**
 * Created by nlangloi10 on 9/19/16.
 */


var app = angular.module("myApp", []);

app.controller("QuestionnaireCtrl", function ($scope) {

    $scope.questionnaire = [
        {
            number: 1,
            question: "How old are you?",
            type: "number",
        },
        {
            number: 2,
            question: "When were you born?",
            type: "data",
        },
        {
            number: "3",
            question: "Describe yourself in a few words.",
            type: "text",
        },
        {
            number: "4",
            question: "What is your favorite color?",
            type: "singleOption",
        },
        {
            number: "5",
            question: "Which of these candies do you like?",
            type: "multiOption",
        },
        {
            number: "6",
            question: "What's your full name?",
            type: "multiOption",
        },
    ];
    
});