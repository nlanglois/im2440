/**
 * Created by nlangloi10 on 8/15/16.
 */

$(document).ready(function(){

    // function clearArrows() {
    //     $("button").each(function () {
    //         $(this).text($(this).text().replace(/[<]/, ""));
    //     });
    // }


    $("#btn-students").click(function(){

        var students = new Array("Caleb", "Calvin", "Travis", "Kevin");

        $("#dropdown").find('option').remove();

        for(i=0; i < students.length; i++){
            $("#dropdown").append('<option value="' + students[i] + '">' + students[i] + '</option>');
        }

    });



    function clearMenu() {
        $("#dropdown").find('option').remove();
    }


    $("#btn-clear").click(function () {
        clearMenu();
    })





    $("#btn-tennis-players").click(function() {
        
        var players = new Array("Rafael Nadal", "Roger Federer", "Novak Djokovic", "Andy Murray");

        $("#dropdown").find('option').remove();

        for(i=0; i < players.length; i++) {
            $("#dropdown").append('<option value="' + players[i]+'">'+ players[i] + '</option>');
        }

    });

});