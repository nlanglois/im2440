/**
 * Created by nlangloi10 on 9/10/16.
 */


function PeopleController($scope) {

    $scope.people=[

        {
            fname: "Calvin",
            lname: "Bast",
            phone: "3452345678",
            city: "New York",
            state: "New York",
            email: "calvin@gmail.com",
            gender: "M",
        },
        {
            fname: "Travis",
            lname: "Roberts",
            phone: "1236548769",
            city: "Chicago",
            state: "Illinois",
            email: "travis@gmail.com",
            gender: "M",
        },
        {
            fname: "Meg",
            lname: "Gautier",
            phone: "1236548769",
            city: "Chicago",
            state: "Illinois",
            email: "travis@gmail.com",
            gender: "F",
        },
        {
            fname: "Caleb",
            lname: "Collins",
            phone: "4567853432",
            city: "Los Angeles",
            state: "Cali",
            email: "caleb@gmail.com",
            gender: "M",
        },
        {
            fname: "Kevin",
            lname: "Firmin",
            phone: "9025673152",
            city: "Las Vegas",
            state: "Nevada",
            email: "kevin@gmail.com",
            gender: "M",
        }

    ];


    $scope.Save = function() {
        $scope.people.push(
            {
                fname: $scope.newPerson.fname,
                lname: $scope.newPerson.lname,

                phone: $scope.newPerson.phone,

                city: $scope.newPerson.city,
                state: $scope.newPerson.state,

                email: $scope.newPerson.email,

                gender: $scope.newPerson.gender,
            }
        );
    }

}