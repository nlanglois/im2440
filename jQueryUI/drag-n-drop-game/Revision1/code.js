/**
 * Created by nlangloi10 on 9/01/16.
 */

var correctCards = 0;

// Countries is now an Object (similar to an associative array)
var countries = {
    1: "belgium",
    2: "brazil",
    3: "france",
    4: "germany",
    5: "italy",
    6: "japan",
    7: "spain",
    8: "sweden",
    9: "uk",
    10: "usa"
}




//var countries = [ "belgium", "brazil", "france", "germany", "italy", "japan", "spain", "sweden", "uk", "usa"];



$( init );

function init() {

    // Hide the success message
    $('#successMessage').hide().css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    } );


    // Reset the game
    correctCards = 0;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );




    // Create the pile of shuffled cards
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    numbers.sort( function() { return Math.random() - .5 } );



    // Trying to randomize the object, but I'm doing something wrong so it ain't working
    $.each( countries, function( key, value ) {
        $(this).sort(Math.round(Math.random()) - 0.5);
    });




    $.each(countries, function(key, value) {
        $('<div></div>')
            .attr( 'id', 'card' + key )
            .attr( 'value', key)
            .appendTo( '#cardPile' )
            .draggable({
                containment: '#content',
                stack: '#cardPile div',
                cursor: 'move',
                revert: true
            });
    });

    $("<br />").appendTo("#cardPile").addClass('clear');



    // Create the card slots
    //var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    //for ( var i=1; i<=10; i++ ) {

    $.each(countries, function(key, value) {
        $('<div>' + value + '</div>')
            .appendTo( '#cardSlots' )
            .attr('value', key)
            .droppable({
                accept: '#cardPile div',
                hoverClass: 'hovered',
                drop: handleCardDrop
        });
    });

    $("<br />").appendTo("#cardSlots").addClass('clear');


} /* Closes the init() method (the main jQuery application code block) */




function handleCardDrop( event, ui ) {

    //var slotNumber = $(this).data( 'number' );
    //var cardNumber = ui.draggable.data( 'number' );

    var cardNumber = ui.draggable.attr('value');
    var slotNumber = $(this).attr('value');



    // If the card was dropped to the correct slot,
    // change the card color, position it directly
    // on top of the slot, and prevent it being dragged
    // again

    if ( slotNumber == cardNumber ) {

        // Adds the name of the country into the dragged card
        ui.draggable.html(jQuery.trim(countries[cardNumber]).substring(0, 3));

        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );

        $(this).droppable( 'disable' );

        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );

        correctCards++;

        console.log("We have a match because " + cardNumber + " (draggable), and " + slotNumber + " (droppable) match!");

    } else {
        console.info("Sorry, not a match because " + cardNumber + " != " + slotNumber + "!");
    }




    // If all the cards have been placed correctly then display a message
    // and reset the cards for another go

    if ( correctCards == 10 ) {
        $('#successMessage')
            .show()
            .animate({
                left: '380px',
                top: '200px',
                width: '400px',
                height: '200px',
                opacity: 1
            })
            .fadeIn("slow")
            //.delay(10000);
    }


} /* Closes the handleCardDrop() method */

