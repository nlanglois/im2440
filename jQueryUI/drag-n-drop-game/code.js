/**
 * Created by nlangloi10 on 8/24/16.
 */

var correctCards = 0;
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

    for ( var i=0; i<10; i+=1 ) {
        $('<div>' + numbers[i] + '</div>')
            .data( 'number', numbers[i] )
            .attr( 'id', 'card'+numbers[i] )
            .appendTo( '#cardPile' )
            .draggable( {
                containment: '#content',
                stack: '#cardPile div',
                cursor: 'move',
                revert: true
            });
    }

    // Create the card slots
    var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    for ( var i=1; i<=10; i++ ) {
        $('<div>' + words[i-1] + '</div>')
            .data( 'number', i )
            .appendTo( '#cardSlots' )
            .droppable({
                accept: '#cardPile div',
                hoverClass: 'hovered',
                drop: handleCardDrop
            });
    }

} /* Closes the init() method (the main jQuery application code block) */




function handleCardDrop( event, ui ) {

    var slotNumber = $(this).data( 'number' );
    var cardNumber = ui.draggable.data( 'number' );

    // If the card was dropped to the correct slot,
    // change the card color, position it directly
    // on top of the slot, and prevent it being dragged
    // again

    if ( slotNumber == cardNumber ) {

        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );

        $(this).droppable( 'disable' );

        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );

        correctCards++;

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
                height: '100px',
                opacity: 1
            })
            .fadeIn("slow")
            .delay(10000);
    }


} /* Closes the handleCardDrop() method */