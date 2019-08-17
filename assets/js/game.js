console.log('Hello World');
//const variables used for DOM Manipulation.
const numberYouAreAttemptingToGuess = $('#guessThisNumber');
var images = ['crystal1.jpg', 'crystal2.jpg', 'crystal3.jpg', 'crystal4.jpg'];
const totalWins = $('#totalWins');
const totalLosses = $('#totalLosses');
const yourScore = $('#yourScore');
var wins = 0;
var losses = 0;
var holder = 0;

// End of DOM Manipulation Variables. 

// When The Window Loads, I want to initialize the game. 
  startGame();
  const imagesDiv = $('#images-div');
  for (var i = 0; i < images.length; i++) {
    var loadedImage = $('<img>');
    var randomNumber = Math.floor(Math.random() * 10);
    loadedImage.attr("src", `assets/images/${images[i]}`);
    loadedImage.attr("class","crystal-img");
    loadedImage.attr("data-number", `${randomNumber}`);
    imagesDiv.append(loadedImage);
  }

$('.crystal-img').on('click', function() {
  // Im gonna parse out the value of the numberYouAreAttemptingToGuess. 
  var parsedNumberYouAreAttemptingToGuess = parseInt(numberYouAreAttemptingToGuess.val());
  console.log(`This is the parsed Number you are guessing: ${parsedNumberYouAreAttemptingToGuess}`);
  results = $(this).attr('data-number');
  console.log(`The value of that crystal is ${results}`);
  var parsedNumber = parseInt(results);
  holder += parsedNumber;
  yourScore.text(holder);
  console.log(`Number You Are Trying To Guess:${numberYouAreAttemptingToGuess.val()}`);
  if (holder === parsedNumberYouAreAttemptingToGuess) {
    $('#messages').append('<h3 id="new-message">You Won!</h3>');
    console.log('You Won');
    setTimeout(function() {
      $('#new-message').remove();
    }, 2000);
    wins++;
    totalWins.text(wins);
    setTimeout(resetGame, 2000);
  } else if (holder > parsedNumberYouAreAttemptingToGuess) {
    $('#messages').append('<h3 id="new-message">You Lose!</h3>');
    setTimeout(function () {
      $('#new-message').remove();
    }, 2000);
    console.log('You Lose');
    losses++;
    totalLosses.text(losses)
    // setTimeout(resetGame, 2000);
  }
});


function startGame() {
  var guessableNumber = Math.floor(Math.random() * 10);
  totalWins.text('0');
  totalLosses.text('0');
  numberYouAreAttemptingToGuess.val(guessableNumber);
  numberYouAreAttemptingToGuess.text(guessableNumber);
  yourScore.text('0');
};

function resetGame() {
  var guessableNumber = Math.floor(Math.random() * 10);
  yourScore.text('0');
  numberYouAreAttemptingToGuess.val(guessableNumber);
  numberYouAreAttemptingToGuess.text(guessableNumber);
  holder = 0;
  // Trying to reset the value of the images.
  imagesDiv.empty();
  setTimeout(resetImages, 2000);
}

function resetImages() {
  const imagesDiv = $('#images-div');
  for (var i = 0; i < images.length; i++) {
    var loadedImage = $('<img>');
    var randomNumber = Math.floor(Math.random() * 10);
    loadedImage.attr("src", `assets/images/${images[i]}`);
    loadedImage.attr("class","crystal-img");
    loadedImage.attr("data-number", `${randomNumber}`);
    imagesDiv.append(loadedImage);
}};