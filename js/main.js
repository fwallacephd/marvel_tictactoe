//Global variables
var player1;
var player2;
var playerPick;
var firstMove;
var state;
var player1Score;
var player2Score;


//Hide the game before settings
$(".play-display-area").hide();
$(".game-board").hide();
$(".play-again").hide();

//Choose your player
$(".player-black-widow-button").on("click", function(){
 player1 = "blackWidow";
 player2 = "hawkeye";
 console.log(player1, player2)
});

$(".player-hawkeye-button").on("click", function(){
 player1 = "hawkeye";
 player2 = "blackWidow";
 console.log(player1, player2)
});

//Who moves first?
$(".first-move-black-widow").on("click", function() {
  firstMove = "blackWidow";
  state = "blackwidow";
  console.log(firstMove);
});

$(".first-move-hawkeye").on("click", function() {
  firstMove = "hawkeye";
  state = "hawkeye";
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

$("#pos1").on("click", function() {
 if (state === "blackwidow") {
  $("#pos1").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos1").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos2").on("click", function() {
 if (state === "blackwidow") {
  $("#pos2").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos2").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos3").on("click", function() {
 if (state === "blackwidow") {
  $("#pos3").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos3").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});


$("#pos4").on("click", function() {
 if (state === "blackwidow") {
  $("#pos4").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos4").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos5").on("click", function() {
 if (state === "blackwidow") {
  $("#pos5").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos5").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos6").on("click", function() {
 if (state === "blackwidow") {
  $("#pos6").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos6").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos7").on("click", function() {
 if (state === "blackwidow") {
  $("#pos7").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos7").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos8").on("click", function() {
 if (state === "blackwidow") {
  $("#pos8").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos8").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});

$("#pos9").on("click", function() {
 if (state === "blackwidow") {
  $("#pos9").attr("src", "images/black_widow.png")
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos9").attr("src", "images/hawkeye.png")
  state = "blackwidow";
 }
});
