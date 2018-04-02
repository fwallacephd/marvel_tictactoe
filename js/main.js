//Global variables
var player1;
var player2;
var playerPick;
var firstMove;
var state;
var player1Score;
var player2Score;
var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;
var pos7;
var pos8;
var pos9;
var blackwidowScore = 0;
var hawkeyeScore = 0;

//Calculate Winner
function findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9) {
  if (pos1 === "blackwidow" && pos2 === "blackwidow" && pos3 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos1 === "hawkeye" && pos2 === "hawkeye" && pos3 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos4 === "blackwidow" && pos5 === "blackwidow" && pos6 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos4 === "hawkeye" && pos5 === "hawkeye" && pos6 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos7 === "blackwidow" && pos8 === "blackwidow" && pos9 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos7 === "hawkeye" && pos8 === "hawkeye" && pos9 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos1 === "blackwidow" && pos4 === "blackwidow" && pos7 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos1 === "hawkeye" && pos4 === "hawkeye" && pos7 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos2 === "blackwidow" && pos5 === "blackwidow" && pos8 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos2 === "hawkeye" && pos5 === "hawkeye" && pos8 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos3 === "blackwidow" && pos6 === "blackwidow" && pos9 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos3 === "hawkeye" && pos6 === "hawkeye" && pos9 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos1 === "blackwidow" && pos5 === "blackwidow" && pos9 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos1 === "hawkeye" && pos5 === "hawkeye" && pos9 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  } else if (pos3 === "blackwidow" && pos5 === "blackwidow" && pos7 === "blackwidow") {
   $("#winner").text("Black Widow Wins!");
   blackwidowScore += 1;
   $("#score-black-widow").text(blackwidowScore);
  } else if (pos3 === "hawkeye" && pos5 === "hawkeye" && pos7 === "hawkeye") {
   $("#winner").text("Hawkeye Wins!");
   hawkeyeScore += 1;
   $("#score-hawkeye").text(hawkeyeScore);
  }
};


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

//Play button
$(".play-button").on("click", function(){
 $(".display1").hide();
 $(".display2").hide();
 $(".display3").hide();
 $(".play-display-area").show();
 $("#score-black-widow").text(blackwidowScore);
 $("#score-hawkeye").text(hawkeyeScore);
 $(".game-board").show();
 $(".play-again").show();
});

//Game board click images based on player
$("#pos1").on("click", function() {
 if (state === "blackwidow") {
  $("#pos1").attr("src", "images/black_widow.png")
  pos1 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos1").attr("src", "images/hawkeye.png")
  pos1 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos2").on("click", function() {
 if (state === "blackwidow") {
  $("#pos2").attr("src", "images/black_widow.png")
  pos2 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos2").attr("src", "images/hawkeye.png")
  pos2 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos3").on("click", function() {
 if (state === "blackwidow") {
  $("#pos3").attr("src", "images/black_widow.png")
  pos3 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos3").attr("src", "images/hawkeye.png")
  pos3 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});



$("#pos4").on("click", function() {
 if (state === "blackwidow") {
  $("#pos4").attr("src", "images/black_widow.png")
  pos4 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos4").attr("src", "images/hawkeye.png")
  pos4 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos5").on("click", function() {
 if (state === "blackwidow") {
  $("#pos5").attr("src", "images/black_widow.png")
  pos5 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos5").attr("src", "images/hawkeye.png")
  pos5 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos6").on("click", function() {
 if (state === "blackwidow") {
  $("#pos6").attr("src", "images/black_widow.png")
  pos6 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos6").attr("src", "images/hawkeye.png")
  pos6 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos7").on("click", function() {
 if (state === "blackwidow") {
  $("#pos7").attr("src", "images/black_widow.png")
  pos7 = "blackwidow";
  state = "hawkeye";
  findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
 } else if (state === "hawkeye") {
  $("#pos7").attr("src", "images/hawkeye.png")
  pos7 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos8").on("click", function() {
 if (state === "blackwidow") {
  $("#pos8").attr("src", "images/black_widow.png")
  pos8 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos8").attr("src", "images/hawkeye.png")
  pos8 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});

$("#pos9").on("click", function() {
 if (state === "blackwidow") {
  $("#pos9").attr("src", "images/black_widow.png")
  pos9 = "blackwidow";
  state = "hawkeye";
 } else if (state === "hawkeye") {
  $("#pos9").attr("src", "images/hawkeye.png")
  pos9 = "hawkeye";
  state = "blackwidow";
 }
 findWinner(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
});



