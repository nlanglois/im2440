/*

 Grab the slot number and card number
 The first thing we do is grab the number of the slot that the card was dropped on, as well as the number of the dropped card, so that we can see if they match.


 As our function is an event handler for the droppable element, we can retrieve the element via the this variable. We then wrap the element inside the $() function to turn it into a jQuery object, then use the data() method to retrieve the value of the 'number' key, and store the value in slotNumber.


 Similarly, the draggable property of the ui object contains the jQuery object representing the dragged card. By reading its 'number' key using data(), we get the card number, which we store in cardNumber.
 Remember that we stored the slot and card numbers using data() in the init() function in Step 2.


 If the card and slot match, drop the card onto the slot
 If the 2 numbers match then the correct card was dropped onto the slot. First we add a 'correct' CSS class to the card so that we can change its colour via CSS. We then disable both the draggable and droppable by calling their disable methods. This prevents the user from being able to drag this card, or drag another card onto this slot, again.


 After disabling the card and slot, we position the card directly on top of the slot by calling the position() method. This handy method lets you position any element relative to practically anything else, and also plays nicely with draggable and droppable elements. In this case, we're positioning the card (ui.draggable)'s top left corner (my: 'left top') on top of the slot ($this)'s top left corner (at: 'left top').

 Finally we set the card's revert option to false. This prevents the card from being pulled back to its initial position once it has been dropped. We also increment the correctCards variable to keep track of the number of correctly-dropped cards.


 Check for a win
 If correctCards equals 10, we have a winner! We show the success message, then animate it from zero width and height up to its full width and height, creating a zooming effect. The success message includes a Play Again button in the markup that triggers the init() function when clicked, thereby starting a new game.

 */


function handleCardDrop( event, ui ) {
    var slotNumber = $(this).data( 'number' );
    var cardNumber = ui.draggable.data( 'number' );

    // If the card was dropped to the correct slot,
    // change the card color, position it directly
    // on top of the slot, and prevent it being dragged
    // again

    // 1 equals sign mean assignment
    //  Means we're assigning value to a variable

    // 2 equals signs means equivalence
    //  You're asking are these two things equivalent?
    //  Are the values of the two variables the same?

    // 3 equals signs means identicality
    //  Means are the two variables equal and identical?

    if ( slotNumber == cardNumber ) {

        // Adds "correct" class to thing that was dragged
        ui.draggable.addClass( 'correct' );

        // Prevents dragged thing from being dragged any more
        ui.draggable.draggable( 'disable' );

        // Prevents thing that had card dropped on it from
        // receiving other things to be dropped on it
        $(this).droppable( 'disable' );

        // Positions the dragged object (card) on to the top
        // left corner of the thing that it was dropped on
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );

        // Prevents dropped card from going back to its home
        ui.draggable.draggable( 'option', 'revert', false );

        // Increments correctCards by 1
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

}