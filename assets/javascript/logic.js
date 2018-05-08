console.log("linked");

var computerChoice = Math.floor(Math.random());
var userPaper = true;
var userRock = true;
var userScissors = true;
var wins = 0;
var losses = 0;
var buttonSetup = "$('<input/>').attr({ type: 'button', name:'btn1', value:'am button'})";

$(".play").click(function () {
    alert("time to Play Paper, Rock, Scissors!!!!");
    $(".button").append('<button class="paperButton">Paper</button>');
    $(".button").append('<button data-role="button" class="rockButton" data-inline="true" data-mini="true" data-theme="b">Rock</button>');
    $(".button").append('<button data-role="button" class="scissorsButton" data-inline="true" data-mini="true" data-theme="b">Scissors</button>');
    $(".play").remove();
    alert("Please select your weapon of choice!!!!");


    $(".paperButton").click(function () {
        alert("The user has selected paper");
        console.log("paper");
        $(".userSelection").append('<img id="paper" src="assets/images/paper.jpeg"/>');
    });
    $(".rockButton").click(function () {
        alert("The user has selected rock");
        console.log("rock");
        $(".userSelection").append('<img id="rock" src="assets/images/rock.jpg"/>');
    });
    $(".scissorsButton").click(function () {
        alert("The user has selected paper");
        $(".userSelection").append('<img id="scissors" src="assets/images/scissors.png"/>');
    });
});
$('<input/>').attr({ type: 'button', name: 'btn1', value: 'am button' });

// if (computerChoice < .34) {
//     console.log("paper");
//     computerChoice = "paper";
// } else if (computerChoice <= .67)
// {
// console.log("rock");
// computerChoice = "rock";
// } else 
// {
//     console.log("scissors");
//     computerChoice = "scissors";
// };


function win() {
    alert("you have defeated your oppenent!!!");
    wins++;
    $(".wins").text(wins);
};

function loss() {
    alert("you have been defeated by your opponent!!!");
    losses++;
    $(".losses").text(losses);
};

