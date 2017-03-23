/**
 * Created by nlangloi10 on 9/19/16.
 */

angular.module('app', ['ngRoute'])

    .factory('Todos', function(){
        return [
            { name: 'AngularJS Directives', completed: true, note: 'this is important' },
            { name: 'Data binding', completed: true, note: 'add notes...' },
            { name: '$scope', completed: true, note: 'add notes...' },
            { name: 'Controllers and Modules', completed: true, note: 'add notes...' },
            { name: 'Templates and routes', completed: true, note: 'add notes...' },
            { name: 'Filters and Services', completed: true, note: 'add notes...' },
            { name: 'Get started with Node/ExpressJS', completed: false, note: 'add notes...' },
            { name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
            { name: 'Be amazing!', completed: false, note: 'add notes...' },
        ];
    })

    .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
        $scope.todos = Todos;
    }])

    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
        $scope.todo = Todos[$routeParams.id];
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/index.html',
                controller: 'TodoController'
            })

            .when('/:id', {
                templateUrl: '/todoDetails.html',
                controller: 'TodoDetailCtrl'
            });
    }]);