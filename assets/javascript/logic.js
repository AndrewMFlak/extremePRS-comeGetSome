console.log("linked");

var computerChoice = Math.random() * 1;
var userPaper = true;
var userRock = true;
var userScissors = true;
var wins = 0;
var losses = 0;
var draws = 0;

function computerSelect() {
    if (computerChoice < .34) {
        console.log("paper");
        var compPaper = "paper";
        $(".computerSelection").append('<img id="paper" src="assets/images/paper.jpeg"/>');
        alert("computer selected paper");
    } else if (computerChoice <= .67) {
        console.log("rock");
        var compRock = "rock";
        $(".computerSelection").append('<img id="rock" src="assets/images/rock.jpg"/>');
        alert("computer selected rock");
    } else {
        console.log("scissors");
        var compScissors = "scissors";
        $(".computerSelection").append('<img id="scissors" src="assets/images/scissors.png"/>');
        alert("computer selected scissors");
    };
};



function playAgain() {
    $(".rockButton").remove();
    $(".paperButton").remove();
    $(".scissorsButton").remove();
    $(".play").show();
    $(".play").click(reset());
};

function reset() {
    $(".userSelection").detach();
    $(".computerSelection").detach();

};


$(".play").click(function () {
    alert("time to play Rock, Paper, Scissors!!!!");
    $(".button").append('<button data-role="button" class="rockButton" data-inline="true" data-mini="true" data-theme="b">Rock</button>');
    $(".button").append('<button data-role="button" class="paperButton" data-inline="true" data-mini="true" data-theme="b">Paper</button>');
    $(".button").append('<button data-role="button" class="scissorsButton" data-inline="true" data-mini="true" data-theme="b">Scissors</button>');
    $(".play").hide();
    alert("Please select your weapon of choice!!!!");


    $(".paperButton").click(function () {
        alert("The user has selected paper");
        console.log("userPaper");
        console.log(computerChoice);
        $(".userSelection").append('<img id="paper" height="80%" width="80%" src="assets/images/paper.jpeg"/>');
        computerSelect();
        if (computerChoice < .34) {
            draw();
        }
        else if (computerChoice <= .67) {
            win();
        }
        else {
            loss();
        }
    });
    $(".rockButton").click(function () {
        alert("The user has selected rock");
        console.log("userRock");
        console.log(computerChoice);
        $(".userSelection").append('<img id="rock"  height="80%" width="80%" src="assets/images/rock.jpg"/>');
        computerSelect();
        if (computerChoice < .34) {
            loss();
        }
        else if (computerChoice <= .67) {
            draw();
        }
        else {
            win();
        }
    });
    $(".scissorsButton").click(function () {
        alert("The user has selected scissors");
        console.log("userScissors");
        console.log(computerChoice);
        $(".userSelection").append('<img id="scissors" height="80%" width="80%" src="assets/images/scissors.png"/>');
        computerSelect();
        if (computerChoice < .34) {
            win();
        }
        else if (computerChoice <= .67) {
            loss();
        }
        else {
            draw();
        }
    });
});


function win() {
    alert("you have defeated your opponent!!!");
    wins++;
    var winText = "Wins: " + wins;
    $(".wins").text(winText);
    playAgain();
};

function loss() {
    alert("you have been defeated by your opponent!!!");
    losses++;
    var lossText = "Loss: " + losses;
    $(".losses").text(lossText);
    playAgain();
};

function draw() {
    alert("you have drawn with your opponent.  Please play again to see who is the true champion!!!");
    draws++;
    var drawText = "Draw: " + draws;
    $(".draws").text(drawText);
    playAgain();
};



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