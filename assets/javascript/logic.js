console.log("linked");
$(".resetMe").hide();

var userPaper = true;
var userRock = true;
var userScissors = true;
var wins = 0;
var losses = 0;
var draws = 0;

function draw() {
    alert("you have drawn with your opponent.  Please play again to see who is the true champion!!!");
    draws++;
    var drawText = "Draw: " + draws;
    $(".draws").text(drawText);
};
function win() {
    alert("you have defeated your opponent!!!");
    wins++;
    var winText = "Wins: " + wins;
    $(".wins").text(winText);
};

function loss() {
    alert("you have been defeated by your opponent!!!");
    losses++;
    var lossText = "Loss: " + losses;
    $(".losses").text(lossText);
};

function playAgain() {
    $(".rockButton").remove();
    $(".paperButton").remove();
    $(".scissorsButton").remove();
    $(".resetMe").show();
    $(".resetMe").click(resetMe);
};

function resetMe() {
    $(".userSelection").detach();
    $(".computerSelection").detach();
    $(".play").show();
    $(".resetMe").hide();
};

$(".play").click(function () {

    alert("time to play Rock, Paper, Scissors!!!!");
    $(".button").append('<button data-role="button" class="rockButton" data-inline="true" data-mini="true" data-theme="b">Rock</button>');
    $(".button").append('<button data-role="button" class="paperButton" data-inline="true" data-mini="true" data-theme="b">Paper</button>');
    $(".button").append('<button data-role="button" class="scissorsButton" data-inline="true" data-mini="true" data-theme="b">Scissors</button>');
    $(".play").hide();

    (function gameTime() {
        alert("Please select your weapon of choice!!!!");
        $(".paperButton").click(function () {
            alert("The user has selected paper");
            var computerChoice = Math.random() * 1;
            console.log(computerChoice);
            var userSelection = "paper";
            $(".userSelection").append('<img id="paper" height="80%" width="80%" src="assets/images/paper.jpeg"/>');
            (function computerSelect() {
                if (computerChoice < .34) {
                    var compSelection = "paper";
                    var userSelection = "paper";
                    $(".computerSelection").append('<img id="paper" height="80%" width="80%" src="assets/images/paper.jpeg"/>');
                    alert("computer selected paper");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }
                else if (computerChoice <= .67) {
                    var compSelection = "rock";
                    var userSelection = "paper";
                    $(".computerSelection").append('<img id="rock" height="80%" width="80%" src="assets/images/rock.jpg"/>');
                    alert("computer selected rock");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }
                else {
                    var compSelection = "scissors";
                    var userSelection = "paper";
                    $(".computerSelection").append('<img id="scissors" height="80%" width="80%" src="assets/images/scissors.png"/>');
                    alert("computer selected scissors");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                };

            }());

        });
        $(".rockButton").click(function () {
            alert("The user has selected rock");
            var computerChoice = Math.random() * 1;
            console.log(computerChoice);
            $(".userSelection").append('<img id="rock"  height="80%" width="80%" src="assets/images/rock.jpg"/>');
            (function computerSelect() {
                if (computerChoice < .34) {
                    var compSelection = "paper";
                    var userSelection = "rock";
                    $(".computerSelection").append('<img id="paper" height="80%" width="80%" src="assets/images/paper.jpeg"/>');
                    alert("computer selected paper");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }

                else if (computerChoice <= .67) {
                    var compSelection = "rock";
                    var userSelection = "rock";
                    $(".computerSelection").append('<img id="rock" height="80%" width="80%" src="assets/images/rock.jpg"/>');
                    alert("computer selected rock");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }

                else {
                    var compSelection = "scissors";
                    var userSelection = "rock";
                    $(".computerSelection").append('<img id="scissors" height="80%" width="80%" src="assets/images/scissors.png"/>');
                    alert("computer selected scissors");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                };

            }());
        });
        $(".scissorsButton").click(function () {
            alert("The user has selected scissors");
            var computerChoice = Math.random() * 1;
            $(".userSelection").append('<img id="scissors" height="80%" width="80%" src="assets/images/scissors.png"/>');
            (function computerSelect() {
                if (computerChoice < .34) {
                    console.log(computerChoice);
                    var compSelection = "paper";
                    var userSelection = "scissors";
                    console.log(compSelection);
                    $(".computerSelection").append('<img id="paper" height="80%" width="80%" src="assets/images/paper.jpeg"/>');
                    alert("computer selected paper");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }
                else if (computerChoice <= .67) {
                    var compSelection = "rock";
                    var userSelection = "scissors";
                    console.log(compSelection);
                    $(".computerSelection").append('<img id="rock" height="80%" width="80%" src="assets/images/rock.jpg"/>');
                    alert("computer selected rock");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                }
                else {
                    var compSelection = "scissors";
                    var userSelection = "scissors";
                    $(".computerSelection").append('<img id="scissors" height="80%" width="80%" src="assets/images/scissors.png"/>');
                    alert("computer selected scissors");
                    if (compSelection == userSelection) {
                        draw();
                    }
                    else if ((compSelection == "rock") && (userSelection == "paper")) {
                        win();
                    } else if ((compSelection == "rock") && (userSelection == "scissors")) {
                        loss();
                    } else if ((compSelection == "paper") && (userSelection == "rock")) {
                        loss();
                    } else if ((compSelction == "paper") && (userSelction == "scissors")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "rock")) {
                        win();
                    } else if ((compSelection == "scissors") && (userSelection == "paper")) {
                        loss();
                    };
                };
            }());
        });
    }());
});
// // fog effect 
console.clear();

canvasWidth = 2000;
canvasHeight = 300;

pCount = 0;


pCollection = new Array();

var puffs = 1;
var particlesPerPuff = 1600;
var img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png';

var smokeImage = new Image();
smokeImage.src = img;

for (var i1 = 0; i1 < puffs; i1++) {
    var puffDelay = i1 * 1500; //300 ms between puffs

    for (var i2 = 0; i2 < particlesPerPuff; i2++) {
        addNewParticle((i2 * 50) + puffDelay);
    }
}


draw(new Date().getTime(), 3000)



function addNewParticle(delay) {

    var p = {};
    p.top = canvasHeight;
    p.left = randBetween(-200, 800);

    p.start = new Date().getTime() + delay;
    p.life = 8000;
    p.speedUp = 25;


    p.speedRight = randBetween(0, 20);

    p.rot = randBetween(-1, 1);
    p.red = Math.floor(randBetween(0, 255));
    p.blue = Math.floor(randBetween(0, 255));
    p.green = Math.floor(randBetween(0, 255));


    p.startOpacity = .3
    p.newTop = p.top;
    p.newLeft = p.left;
    p.size = 400;
    p.growth = 10;

    pCollection[pCount] = p;
    pCount++;


}

function draw(startT, totalT) {
    //Timing
    var timeDelta = new Date().getTime() - startT;
    var stillAlive = false;

    //Grab and clear the canvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    c.width = c.width;

    //Loop through particles
    for (var i = 0; i < pCount; i++) {
        //Grab the particle
        var p = pCollection[i];

        //Timing
        var td = new Date().getTime() - p.start;
        var frac = td / p.life

        if (td > 0) {
            if (td <= p.life) { stillAlive = true; }

            //attributes that change over time
            var newTop = p.top - (p.speedUp * (td / 500));
            var newLeft = p.left + (p.speedRight * (td / 500));
            var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);

            var newSize = p.size + (p.growth * (td / 500));
            p.newTop = newTop;
            p.newLeft = newLeft;

            //Draw!
            ctx.fillStyle = 'rgba(150,150,150,' + newOpacity + ')';
            ctx.globalAlpha = newOpacity;
            ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
        }
    }



    //Repeat if there's still a living particle
    if (stillAlive) {
        requestAnimationFrame(function () { draw(startT, totalT); });
    }
    else {
        clog(timeDelta + ": stopped");
    }
}

function randBetween(n1, n2) {
    var r = (Math.random() * (n2 - n1)) + n1;
    return r;
}

function randOffset(n, variance) {
    //e.g. variance could be 0.1 to go between 0.9 and 1.1
    var max = 1 + variance;
    var min = 1 - variance;
    var r = Math.random() * (max - min) + min;
    return n * r;
}

function clog(s) {
    console.log(s);
}