/*

 Initialize the correctCards variable
 We first set up a variable called correctCards to track the number of correctly-dropped cards. When this reaches 10 then the user has won the game.


 Call init() when the document is ready
 We use $( init ) to call our init() function once the DOM has loaded.


 Hide the success message
 Within the init() function itself, we first hide the #successMessage div, and reduce its width and height to zero so that we can make it "pop out" when the game is won.


 Reset the game
 Since init() can be called after a game has already been played, we set correctCards to zero so that the game can begin again, and also clear out the #cardPile and #cardSlots divs so that we can populate them afresh.


 Create the pile of shuffled cards
 To create the pile of cards, we first make an array, numbers, containing the numbers 1 to 10, then sort the array with a randomizing sort function to shuffle the numbers.

 Then we loop through each element in the numbers array, creating a div card element for each number. Inside the div we place the number, so that it appears on the card in the page. Once we've created the div object, we store the card's number in a 'number' key inside the object by using jQuery's data() method.

 We also give the card div an id of 'cardn', where n is the card number. This lets us give each card a different color in the CSS. We then append the card to the #cardPile div.

 The interesting bit in the loop is, of course, the call to the draggable() method. This:

 Makes the card draggable
 Uses containment to constrain it to the #content div
 Uses stack to ensure that the dragged card always sits on top of the other cards
 Uses cursor to turn the mouse cursor into a move cursor during the drag, and
 Sets the revert option to true. This makes the card slide back to its initial position when dropped, so that the user can try again. We'll turn this option off when the user has dragged the card to the correct slot, as we'll see in a moment.


 Create the card slots
 The last part of the init() function creates the 10 slots to drag the cards onto. We create an array called words that contains the words "one" to "ten", then loop through the elements of the words array, creating a slot div for each number. As before, we use data() to record the number of the slot, so we can test if the user has dragged the correct card to the correct slot, and we append the slot to the #cardSlots div.

 This time, we call the droppable() method so that the slot can receive a draggable card. We use the accept option with the selector "#cardPile div" to ensure that the slot will only accept our number cards, and not any other draggable element. The hoverClass option adds a CSS class to a droppable when a draggable is hovered over it — we use this option to add a class of 'hovered' to the element, which we'll highlight using CSS. Finally, we set up a drop event handler called handleCardDrop(), which is triggered when the user drops a card on the droppable. We'll write this handler next.

 */


var correctCards = 0;
$( init );

function init() {

    // Hide the success message
    $('#successMessage')
        .hide()
        .css({
            left: '580px',
            top: '250px',
            width: 0,
            height: 0
        });

    // Reset the game
    correctCards = 0;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );








    // Create the pile of shuffled cards
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];




    // Randomly orders numbers array
    numbers.sort( function() { return Math.random() - .5 } );





    // For loop that creates the draggable cards

    for ( var i=0; i<10; i = i+1 ) {
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
        $('<div>' + words[i] + '</div>')
            .data( 'number', i )
            .appendTo( '#cardSlots' )
            .droppable( {
                accept: 'div#cardPile div',
                hoverClass: 'hovered',
                drop: handleCardDrop
            });
    }

}