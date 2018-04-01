//Global variables
var player1 = "";
var player2 = "";
var playerPick;
var firstMove;
var state = "player1";

//Hide the game before settings
$(".play-display-area").hide();
$(".game-board").hide();
$(".play-again").hide();

//Choose your player
$(".player-black-widow-button ").on("click", function(){
 player1 = "blackWidow";
 player2 = "hawkeye";
 console.log(player1, player2)
});

$(".player-hawkeye-button ").on("click", function(){
 player1 = "hawkeye";
 player2 = "blackWidow";
 console.log(player1, player2)
});

//Who moves first?
$(".first-move-black-widow").on("click", function() {
  firstMove = "blackWidow";
  console.log(firstMove);
});

$(".first-move-hawkeye").on("click", function() {
  firstMove = "hawkeye";
  console.log(firstMove);
});

$(".play-button").on("click", function(){
 $(".display1").hide();
 $(".display2").hide();
 $(".display3").hide();
 $(".play-display-area").show();
 $(".game-board").show();
 $(".play-again").show();
});
