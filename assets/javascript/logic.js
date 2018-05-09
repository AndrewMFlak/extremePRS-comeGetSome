console.log("linked");

var computerChoice = Math.floor(Math.random());
var userPaper = true;
var userRock = true;
var userScissors = true;
var wins = 0;
var losses = 0;
var draws = 0;

function computerSelect() {
    if (computerChoice < .34) {
        console.log(computerChoice);
        console.log("paper");
        var compPaper = "paper";
        $(".computerSelection").append('<img id="paper" src="assets/images/paper.jpeg"/>');
        alert("computer selected paper");
    } else if (computerChoice <= .67) {
        console.log(computerChoice);
        console.log("rock");
        var compRock = "rock";
        $(".computerSelection").append('<img id="rock" src="assets/images/rock.jpg"/>');
        alert("computer selected rock");
    } else {
        console.log("scissors");
        console.log(computerChoice);
        var compScissors = "scissors";
        $(".computerSelection").append('<img id="scissors" src="assets/images/scissors.png"/>');
        alert("computer selected scissors");
    };
};

function reset() {
    $(".button").append('<button class="play">Play Paper Rock Scissors</button>');
    $(".paperButton").remove();
    $(".rockButton").remove();
    $(".scissorsButton").remove();
};


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
        computerSelect();
        if(computerChoice == "paper") {
            draw();
        }
        else if (computerChoice == "scissors") {
            loss();
        }
        else {
            win();
        }
    });
    $(".rockButton").click(function () {
        alert("The user has selected rock");
        console.log("rock");
        $(".userSelection").append('<img id="rock" src="assets/images/rock.jpg"/>');
        computerSelect();
        if(computerChoice == "paper") {
            loss();
        }
        else if (computerChoice == "scissors") {
            win();
        }
        else {
            draw();
        }
    });
    $(".scissorsButton").click(function () {
        alert("The user has selected paper");
        $(".userSelection").append('<img id="scissors" src="assets/images/scissors.png"/>');
        computerSelect();
        if(computerChoice == "paper") {
            win();
        }
        else if (computerChoice == "scissors") {
            draw();
        }
        else {
            loss();
        }
    });
});


function win() {
    alert("you have defeated your oppenent!!!");
    wins++;
    $(".wins").text(wins);
    reset();
};

function loss() {
    alert("you have been defeated by your opponent!!!");
    losses++;
    $(".losses").text(losses);
    reset();
};

function draw() {
    alert("you have drawn with your opponent.  Please play again to see who is the true champion");
    draws++;
}

