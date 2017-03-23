/**
 * Created by nlangloi10 on 3/14/17.
 */

/**
 * We are declaring three scope variables:
 *  selectedPerson is going to hold the object of the selected person
 *  selectedGenre is going to hold the string value of the selected genre
 *  people is an array of objects which are people with their own musics tastes
 */

app.controller("MainController", function($scope) {

    $scope.selectedPerson = 0;

    $scope.selectedGenre = null;

    $scope.people = [

        { id: 0, name: 'Caleb', music: [ 'Rock', 'Metal', 'Dubstep', 'Electro' ] },
        { id: 1, name: 'Travis', music: [ 'Indie', 'Drumstep', 'Dubstep', 'Electro' ] },
        { id: 2, name: 'Kevin', music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal', 'Folk' ] },
        { id: 3, name: 'Calvin', music: [ 'Pop', 'RnB', 'Hip Hop' ] }

    ];

    $scope.artists = [
        { genre: 'Rock', artists: ['Led Zeppelin', 'Journey', 'Metallica', 'Skillet' ] },
        { genre: 'Metal', artists: ['Ramstein', 'Megadeath', 'Amrythia' ] }
    ]

});