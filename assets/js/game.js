console.log('Hello World');

// const variables used for DOM Manipulation.
const numberYouAreAttemptingToGuess = $('#guessThisNumber');
const totalWins = $('#totalWins');
const totalLosses = $('#totalLosses');
const clickedImages = $('.crystal-img');
const yourScore = $('#yourScore');
// End of DOM Manipulation Variables. 







clickedImages.on('click', function() {
  console.log($(this).attr('value'));
})